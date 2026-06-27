#!/usr/bin/env python3
"""Convert typst rules to site HTML pages.

Usage:
    python3 dev/typst2html.py <путь_к_папке_с_typst_файлами>
"""

import re
import sys
from pathlib import Path

# Set in main() from command-line argument
TYPST_DIR = None
RULES_DIR = None
OUTPUT_DIR = None

SECTIONS = [
    ("common_things", "01concepts", "1. Общие понятия"),
    ("country",       "02states",   "2. Государство"),
    ("characters",    "03persons",  "3. Персонажи"),
    ("tradeship",     "04trade",    "4. Торговля"),
    ("military",      "05army",     "5. Военное дело"),
    ("diplomacy",     "06diplomacy","6. Дипломатия"),
    ("espionage",     "07espionage","7. Шпионаж"),
    ("piracy",        "08piracy",   "8. Пиратство"),
    ("events",        "09events",   "9. Случайные события"),
    ("sri",           "10sri",      "10. Священная Римская Империя"),
    ("papa",          "11papa",     "11. Папа Римский"),
]

HEADER_HTML = """<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../style.css">
    <title>{title}</title>
</head>
<body>
    <header>
        <ul class="mainmenu">
            <li><a href="../rules/contents.html">Правила</a></li>
            <li><a href="../turns.html">Ходы</a></li>
            <li><a href="../maps.html">Карты</a></li>
            <li><a href="../tables.html">Таблицы</a></li>
            <li><a href="../links.html">Ссылки</a></li>
            <li><a href="../log.html">Лог</a></li>
        </ul>
    </header>
    <div class="container">
{nav}
{content}
{nav}
    </div>
<script src="../analytics.js"></script>
</body>
</html>"""


def parse_bracket_block(text, start):
    """Find matching ] for [ at position start. Return (content, end_pos)."""
    depth = 0
    i = start
    if text[i] != '[':
        return None, start
    i += 1
    start_content = i
    while i < len(text):
        ch = text[i]
        if ch == '[':
            depth += 1
        elif ch == ']':
            if depth == 0:
                return text[start_content:i], i + 1
            depth -= 1
        i += 1
    return text[start_content:], i


def parse_function_call(text, start):
    """Parse a typst function call like #important[body] or #table(...).
    Returns (name, args_dict, body_or_none, end_pos)"""
    if text[start] != '#':
        return None, None, None, start
    i = start + 1
    while i < len(text) and (text[i].isalpha() or text[i] == '_'):
        i += 1
    name = text[start + 1:i]
    
    # Skip whitespace
    while i < len(text) and text[i] in ' \t\n\r':
        i += 1
    
    if i < len(text) and text[i] == '(':
        # Named arguments with parens
        depth = 0
        j = i
        while j < len(text):
            if text[j] == '(':
                depth += 1
            elif text[j] == ')':
                depth -= 1
                if depth == 0:
                    paren_content = text[i+1:j]
                    j += 1
                    break
            j += 1
        else:
            return name, {}, None, len(text)
        
        # After parens, might have bracket body
        while j < len(text) and text[j] in ' \t\n\r':
            j += 1
        if j < len(text) and text[j] == '[':
            body, end = parse_bracket_block(text, j)
            return name, parse_args(paren_content), body, end
        
        # No bracket body, check for comma-separated brackets
        # Actually, for #table, the cells are inside the parens as [cell], [cell]
        # Let's handle that differently
        return name, parse_args(paren_content), None, j
    
    elif i < len(text) and text[i] == '[':
        body, end = parse_bracket_block(text, i)
        return name, {}, body, end
    
    return name, {}, None, i


def parse_args(content):
    """Parse simple key=value arguments from paren content."""
    args = {}
    parts = re.split(r',\s*', content)
    for part in parts:
        part = part.strip()
        if ':' in part:
            key, _, val = part.partition(':')
            key = key.strip()
            val = val.strip()
            # Remove surrounding quotes
            val = re.sub(r'^"(.*)"$', r'\1', val)
            val = re.sub(r'^\((.*)\)$', r'\1', val)
            args[key] = val
    return args


def process_inline(text):
    """Convert typst inline markup to HTML."""
    # Handle #text(style: "italic")[...] inline
    def replace_text_fn(m):
        body = m.group(2)
        style = m.group(1) or ''
        if 'italic' in style:
            return f'<em>{body}</em>'
        return body
    
    # First pass: handle #text(...)[...] inline functions
    # These can span multiple lines, so we process them carefully
    
    # Handle simple inline #text() calls
    text = re.sub(
        r'#text\([^)]*\)\[([^\[\]]*)\]',
        lambda m: process_inline(m.group(1)),
        text
    )
    
    # Handle #emph[inline] (inline emphasis)
    # This is block-level, handled elsewhere
    
    # Math — protect inner content from bold/italic processing
    def protect_math(m):
        inner = m.group(1)
        inner = inner.replace('*', '☃AST☃')
        inner = inner.replace('_', '☃USC☃')
        return f'<code class="math">{inner}</code>'
    text = re.sub(r'\$([^$\n]+?)\$', protect_math, text)
    
    # Protect inline code content
    def protect_code(m):
        inner = m.group(1)
        inner = inner.replace('*', '☃AST☃')
        inner = inner.replace('_', '☃USC☃')
        return f'<code>{inner}</code>'
    text = re.sub(r'`([^`]+)`', protect_code, text)
    
    # Bold
    text = re.sub(r'\*([^*\n]+?)\*', r'<strong>\1</strong>', text)
    
    # Italic
    text = re.sub(r'(?<!\w)_(.+?)_(?!\w)', r'<em>\1</em>', text)
    
    # Restore protected characters
    text = text.replace('☃AST☃', '*')
    text = text.replace('☃USC☃', '_')
    
    # Line breaks (\ at end of line or \ followed by space)
    text = text.replace('\\\n', '<br>\n')
    text = re.sub(r'\\(\s)', r'<br>\1', text)
    
    # Em dash
    text = text.replace('---', '—')
    
    # References @label -> anchor link
    text = re.sub(r'@(\w[\w-]*)', r'<a href="#\1">\1</a>', text)
    
    # URLs
    text = re.sub(
        r'(https?://[^\s<>"\'\]\)]+)',
        r'<a href="\1">\1</a>',
        text
    )
    
    # Smart quotes
    text = text.replace('"', '&quot;')
    
    # Escape HTML
    text = text.replace('&', '&amp;')
    text = text.replace('<', '&lt;')
    text = text.replace('>', '&gt;')
    # But restore our tags
    text = re.sub(r'&lt;(\/?(?:strong|em|code|a|br|span)\b[^&]*)&gt;', r'<\1>', text)
    text = re.sub(r'&lt;(\/?(?:strong|em|code|a|br|span)\b[^>]*)&gt;', r'<\1>', text)
    
    # Actually let's be more careful. Process inline after escaping HTML.
    # Let me restructure...
    
    return text


def process_inline_safe(text):
    """Process inline markup safely: escape HTML first, then apply markup."""
    # Escape HTML
    text = text.replace('&', '&amp;')
    text = text.replace('<', '&lt;')
    text = text.replace('>', '&gt;')
    
    # Escaped forward slash \/ → /
    text = text.replace('\\/', '/')
    
    # Line breaks
    text = text.replace('\\\n', '<br>\n')
    text = re.sub(r'\\(\s)', r'<br>\1', text)
    
    # Em dash
    text = text.replace('---', '—')
    
    # Math — protect inner * and _ from inline processing (must run before bold/italic)
    def protect_math(m):
        inner = m.group(1)
        inner = inner.replace('*', '\u2603AST\u2603')
        inner = inner.replace('_', '\u2603USC\u2603')
        return f'<code class="math">{inner}</code>'
    text = re.sub(r'\$([^$\n]+?)\$', protect_math, text)
    
    # Inline code — protect inner * and _ (must run before bold/italic)
    def protect_code(m):
        inner = m.group(1)
        inner = inner.replace('*', '\u2603AST\u2603')
        inner = inner.replace('_', '\u2603USC\u2603')
        return f'<code>{inner}</code>'
    text = re.sub(r'`([^`]+)`', protect_code, text)
    
    # Bold
    text = re.sub(r'\*([^*\n]+?)\*', r'<strong>\1</strong>', text)
    
    # Italic
    text = re.sub(r'(?<!\w)_(.+?)_(?!\w)', r'<em>\1</em>', text)
    
    # Restore protected chars
    text = text.replace('\u2603AST\u2603', '*')
    text = text.replace('\u2603USC\u2603', '_')
    
    # References @label
    text = re.sub(r'@(\w[\w-]*)', r'<a href="#\1">\1</a>', text)
    
    # URLs
    text = re.sub(
        r'(https?://[^\s<>"\'\]\)]+)',
        r'<a href="\1">\1</a>',
        text
    )
    
    return text


def has_block_marker(line):
    """Check if line starts a block-level function."""
    stripped = line.strip()
    return any(stripped.startswith(f'#{fn}') for fn in ['important', 'example', 'emph'])


def find_block_end(lines, start):
    """Find end of a bracket block starting at lines[start]."""
    text = '\n'.join(lines[start:])
    brace_pos = text.find('[')
    if brace_pos == -1:
        return start + 1
    body, end = parse_bracket_block(text, brace_pos)
    if body is None:
        return start + 1
    # Count newlines in consumed text
    consumed = text[:end]
    return start + consumed.count('\n') + 1


def find_paren_block_end(lines, start):
    """Find end of a parenthesized function like #table(...). Returns (end_line, paren_content, body)"""
    text = '\n'.join(lines[start:])
    paren_start = text.find('(')
    if paren_start == -1:
        return start + 1, '', None
    
    # Find matching )
    depth = 0
    j = paren_start
    while j < len(text):
        if text[j] == '(':
            depth += 1
        elif text[j] == ')':
            depth -= 1
            if depth == 0:
                paren_content = text[paren_start+1:j]
                j += 1
                break
        j += 1
    else:
        return start + 1, '', None
    
    # Check for trailing bracket body (for #table, cells are inside parens as [cell] args)
    while j < len(text) and text[j] in ' \t\n\r':
        j += 1
    
    body = None
    if j < len(text) and text[j] == '[':
        body, end = parse_bracket_block(text, j)
        if body:
            consumed = text[:end]
        else:
            consumed = text[:j]
    else:
        consumed = text[:j]
    
    return start + consumed.count('\n') + 1, paren_content, body


def parse_table_cells(text):
    """Parse table cells from the argument list content.
    Cells look like: [cell1], [cell2], ..."""
    cells = []
    i = 0
    while i < len(text):
        if text[i] == '[':
            content, end = parse_bracket_block(text, i)
            if content:
                cells.append(content.strip())
                i = end
            else:
                i += 1
        elif text[i] == ',':
            i += 1
        else:
            i += 1
    return cells


def typst_to_html(content, collect_toc=False):
    """Convert typst content to HTML body.
    If collect_toc=True, collects headings for table of contents.
    """
    lines = content.split('\n')
    html_parts = []
    toc_entries = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        
        # Skip empty lines and comments
        if stripped == '' or stripped.startswith('//') or stripped.startswith('#//'):
            i += 1
            continue
        
        # Skip typst directives
        if (stripped.startswith('#set ') or stripped.startswith('#show ') or 
            stripped.startswith('#let ') or stripped.startswith('#include ') or
            stripped.startswith('#pagebreak') or stripped.startswith('#context') or
            stripped.startswith('#counter')):
            i += 1
            continue
        
        # Heading
        heading_match = re.match(r'^(={1,5})\s+(.+)$', stripped)
        if heading_match:
            level = len(heading_match.group(1))
            title_text = heading_match.group(2).strip()
            # Extract label if present: "Title <label>"
            label = ''
            label_match = re.search(r'\s<([\w-]+)>\s*$', title_text)
            if label_match:
                label = label_match.group(1)
                title_text = re.sub(r'\s<[\w-]+>\s*$', '', title_text)
            h_tag = f'h{level}'
            # Always generate id — use explicit label or slug from title
            slug = label or title_text.lower().replace(' ', '-').replace('.', '').replace(',', '')
            html_parts.append(f'<{h_tag} id="{slug}">{process_inline_safe(title_text)}</{h_tag}>')
            
            # Collect TOC entry (skip h1 - that's the page title)
            if collect_toc and level >= 2:
                toc_entries.append((level, title_text, slug))
            
            i += 1
            continue
        
        # Block-level functions: #important, #example, #emph
        fn_match = re.match(r'^#(important|example|emph)', stripped)
        if fn_match:
            fn_name = fn_match.group(1)
            end_line = find_block_end(lines, i)
            block_text = '\n'.join(lines[i:end_line])
            
            # Extract body from brackets
            brace_pos = block_text.find('[')
            body, _ = parse_bracket_block(block_text, brace_pos)
            
            if body:
                # Render the body as HTML recursively
                body_html = typst_to_html(body.strip())
                
                class_map = {
                    'important': 'important',
                    'example': 'example',
                    'emph': 'emph',
                }
                cls = class_map.get(fn_name, fn_name)
                html_parts.append(f'<div class="{cls}">\n{body_html}\n</div>')
            
            i = end_line
            continue
        
        # #table function
        if stripped.startswith('#table('):
            end_line, paren_content, body = find_paren_block_end(lines, i)
            cells = parse_table_cells(paren_content)
            
            if cells:
                html_parts.append(parse_table_to_html(cells))
            
            i = end_line
            continue
        
        # #text(...)[...] multi-line function (like the example in common_things)
        if stripped.startswith('#text('):
            end_line = find_block_end(lines, i)
            block_text = '\n'.join(lines[i:end_line])
            brace_pos = block_text.find('[')
            body, _ = parse_bracket_block(block_text, brace_pos)
            if body:
                # Check if it's italic style
                if 'italic' in block_text[:brace_pos]:
                    html_parts.append(f'<em>{process_inline_safe(body.strip())}</em>\n')
                else:
                    html_parts.append(f'{process_inline_safe(body.strip())}\n')
            i = end_line
            continue
        
        # Horizontal rule
        if re.match(r'^_{3,}\s*$', stripped) or re.match(r'^-{3,}\s*$', stripped):
            html_parts.append('<hr>')
            i += 1
            continue
        
        # Lists (unordered: lines starting with - or +)
        if re.match(r'^[\s]*[-+]\s', stripped):
            list_items = []
            while i < len(lines):
                l = lines[i]
                s = l.strip()
                # Check for list continuation or sub-list
                if re.match(r'^[\s]*[-+]\s', s):
                    # Extract item content (remove - or + marker)
                    item_content = re.sub(r'^[\s]*[-+]\s', '', s)
                    # Handle sub-items (indented)
                    indent_level = len(l) - len(l.lstrip())
                    list_items.append((indent_level, process_inline_safe(item_content)))
                    i += 1
                elif s == '' or i + 1 >= len(lines):
                    # Break on empty line (end of list)
                    if s == '':
                        i += 1
                    break
                else:
                    # Check if next line is also a list item - if not, break
                    if i + 1 < len(lines) and re.match(r'^[\s]*[-+]\s', lines[i+1]):
                        # Continuation of current item (wrapped line)
                        list_items[-1] = (list_items[-1][0], list_items[-1][1] + ' ' + process_inline_safe(s))
                        i += 1
                    else:
                        i += 1
                        break
            
            # Render nested list
            html_parts.append(render_nested_list(list_items))
            continue
        
        # Ordered lists (lines starting with 1., 2., etc.)
        if re.match(r'^[\s]*\d+\.\s', stripped):
            list_items = []
            while i < len(lines):
                l = lines[i]
                s = l.strip()
                m = re.match(r'^[\s]*(\d+)\.\s+(.*)', s)
                if m:
                    item_content = m.group(2)
                    list_items.append(process_inline_safe(item_content))
                    i += 1
                else:
                    if s == '':
                        i += 1
                    break
            
            html_parts.append('<ol>\n' + '\n'.join(f'<li>{item}</li>' for item in list_items) + '\n</ol>')
            continue
        
        # Regular paragraph
        para_lines = []
        while i < len(lines):
            l = lines[i]
            s = l.strip()
            if s == '':
                i += 1
                break
            # Skip leftover directives and comments
            if s.startswith('//') or s.startswith('#set ') or s.startswith('#show ') or s.startswith('#let ') or s.startswith('#include '):
                i += 1
                continue
            # Don't consume headings, lists, functions
            if re.match(r'^={1,5}\s', s) or re.match(r'^[\s]*[-+]\s', s) or re.match(r'^[\s]*\d+\.\s', s):
                break
            if s.startswith('#important') or s.startswith('#example') or s.startswith('#emph') or s.startswith('#table(') or s.startswith('#text('):
                break
            para_lines.append(l)
            i += 1
        
        if para_lines:
            para_text = ' '.join(line.strip() for line in para_lines)
            para_text = re.sub(r'\s+', ' ', para_text).strip()
            if para_text:
                html_parts.append(f'<p>{process_inline_safe(para_text)}</p>')
            continue
        
        i += 1
    
    html = '\n'.join(html_parts)
    if collect_toc:
        return html, toc_entries
    return html


def render_nested_list(items):
    """Render list items with nesting support."""
    if not items:
        return ''
    
    html = '<ul>\n'
    for indent, content in items:
        # Simple nesting: if indent > 0, we could nest, but for now flat
        html += f'<li>{content}</li>\n'
    html += '</ul>'
    return html


def parse_table_to_html(cells):
    """Convert table cells from typst #table to HTML table."""
    if not cells:
        return ''
    
    # Check if first row has bold markers (headers)
    header_count = 0
    for cell in cells[:4]:  # Check first few cells
        if cell.startswith('*') and cell.endswith('*'):
            header_count += 1
    
    is_header = header_count >= 1
    
    cols = 2  # Default for this table
    
    rows = []
    for i in range(0, len(cells), cols):
        row_cells = cells[i:i+cols]
        if len(row_cells) < cols:
            continue
        row = []
        for cell in row_cells:
            row.append(process_inline_safe(cell))
        rows.append(row)
    
    html = '<table>\n'
    if is_header and rows:
        html += '  <thead>\n    <tr>\n'
        for cell in rows[0]:
            html += f'      <th>{cell}</th>\n'
        html += '    </tr>\n  </thead>\n'
        rows = rows[1:]
    
    if rows:
        html += '  <tbody>\n'
        for row in rows:
            html += '    <tr>\n'
            for cell in row:
                html += f'      <td>{cell}</td>\n'
            html += '    </tr>\n'
        html += '  </tbody>\n'
    
    html += '</table>'
    return html


def generate_nav(current_idx):
    """Generate prev/contents/next navigation."""
    total = len(SECTIONS)
    parts = []
    
    if current_idx > 0:
        prev_name = SECTIONS[current_idx - 1][1]
        prev_title = SECTIONS[current_idx - 1][2]
        parts.append(f'<a href="{prev_name}.html">← {prev_title}</a>')
    else:
        parts.append('<span></span>')
    
    parts.append(f'<a href="contents.html">📋 Оглавление</a>')
    
    if current_idx < total - 1:
        next_name = SECTIONS[current_idx + 1][1]
        next_title = SECTIONS[current_idx + 1][2]
        parts.append(f'<a href="{next_name}.html">{next_title} →</a>')
    else:
        parts.append('<span></span>')
    
    return f'<div class="rules-nav">{"".join(parts)}</div>'


def generate_changelog_html():
    """Generate changelog page from changelog.typ."""
    changelog_path = TYPST_DIR / "changelog.typ"
    if not changelog_path.exists():
        print(f"WARNING: {changelog_path} not found", file=sys.stderr)
        return None
    
    content = changelog_path.read_text(encoding="utf-8")
    body_html = typst_to_html(content)
    
    nav = '<div class="rules-nav"><span></span><span></span><a href="contents.html">📋 Оглавление</a></div>'
    
    return HEADER_HTML.format(
        title="История изменений правил",
        nav=nav,
        content=body_html.strip()
    )


def generate_contents_html():
    """Generate contents page with intro and table of contents."""
    # Read intro
    intro_text = (TYPST_DIR / "intro.typ").read_text(encoding="utf-8")
    intro_html = typst_to_html(intro_text)
    
    # Build TOC
    toc_items = []
    for _, html_name, title in SECTIONS:
        toc_items.append(f'<p><a href="{html_name}.html">{title}</a></p>')
    
    toc_html = '\n'.join(toc_items)
    
    content = f'''
    <p style="margin: 8px 0;"><a href="pdf.html">PDF-версия правил</a></p>
    <h1>Правила Гегемонии Мельхиора</h1>
    <p>Партия «Лавразия 2026»</p>
    <p>Редакция 2.1</p>
    <p><a href="changelog.html">История изменений правил</a></p>
    
    {intro_html}
    
    <h2>Оглавление</h2>
    {toc_html}
    '''
    
    nav = '<div class="rules-nav"><span></span><span></span><a href="01concepts.html">1. Общие понятия →</a></div>'
    
    return HEADER_HTML.format(
        title="Правила",
        nav=nav,
        content=content.strip()
    )


def generate_section_html(typst_name, html_name, title, idx):
    """Generate a single section HTML page."""
    filepath = RULES_DIR / f"{typst_name}.typ"
    if not filepath.exists():
        print(f"WARNING: {filepath} not found", file=sys.stderr)
        return None
    
    content = filepath.read_text(encoding="utf-8")
    body_html, toc_entries = typst_to_html(content, collect_toc=True)
    
    # Build section TOC
    toc_html = ''
    if toc_entries:
        items = []
        for level, t_text, t_label in toc_entries:
            indent = (level - 2) * 20
            items.append(
                f'<li style="margin-left:{indent}px"><a href="#{t_label}">{process_inline_safe(t_text)}</a></li>'
            )
        toc_html = '<div class="section-toc"><strong>Содержание:</strong>\n<ul>\n' + '\n'.join(items) + '\n</ul>\n</div>\n'
    
    nav = generate_nav(idx)
    
    return HEADER_HTML.format(
        title=title,
        nav=nav,
        content=toc_html + body_html.strip()
    )


def main():
    global TYPST_DIR, RULES_DIR, OUTPUT_DIR
    
    if len(sys.argv) < 2:
        print("Usage: python3 dev/typst2html.py <путь_к_папке_с_typst>", file=sys.stderr)
        sys.exit(1)
    
    typst_path = Path(sys.argv[1]).resolve()
    if not typst_path.exists():
        print(f"Ошибка: папка {typst_path} не найдена", file=sys.stderr)
        sys.exit(1)
    
    TYPST_DIR = typst_path
    RULES_DIR = typst_path / "rules"
    OUTPUT_DIR = (Path(__file__).resolve().parent.parent / "rules")
    
    if not RULES_DIR.exists():
        print(f"Ошибка: {RULES_DIR} не найдена", file=sys.stderr)
        sys.exit(1)
    
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    # Generate contents page
    contents_html = generate_contents_html()
    (OUTPUT_DIR / "contents.html").write_text(contents_html, encoding="utf-8")
    print("✓ rules/contents.html")
    
    # Generate changelog page
    changelog_html = generate_changelog_html()
    if changelog_html:
        (OUTPUT_DIR / "changelog.html").write_text(changelog_html, encoding="utf-8")
        print("✓ rules/changelog.html")
    
    # Generate each section
    for idx, (typst_name, html_name, title) in enumerate(SECTIONS):
        html = generate_section_html(typst_name, html_name, title, idx)
        if html:
            (OUTPUT_DIR / f"{html_name}.html").write_text(html, encoding="utf-8")
            print(f"✓ rules/{html_name}.html")
    
    print("\nDone! Generated", len(SECTIONS) + 2, "pages in", OUTPUT_DIR)


if __name__ == "__main__":
    main()
