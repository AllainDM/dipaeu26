

async function sendAnalytics() {
    // 1. Собираем технические параметры устройства
    const fingerprint = {
        current_url: window.location.href,
        screen_width: window.screen.width,
        screen_height: window.screen.height,
        device_pixel_ratio: window.devicePixelRatio || 1,
        language: navigator.language || navigator.userLanguage,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        cores: navigator.hardwareConcurrency || 0,
        user_agent: navigator.userAgent
    };

    // 2. Пытаемся получить информацию о видеокарте (WebGl)
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            if (debugInfo) {
                fingerprint.gpu_vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
                fingerprint.gpu_renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            }
        }
    } catch (e) {
        fingerprint.gpu_vendor = "Error/Blocked";
        fingerprint.gpu_renderer = "Error/Blocked";
    }

    // 3. Отправляем данные на твой бэкенд
    // const BACKEND_URL = "https://83.166.245.222/api/v1/analytics"; 
    // const BACKEND_URL = "http://83.166.245.222:8001/api/v1/analytics";
    const BACKEND_URL = "https://kings90.ru/api/v1/analytics";

    try {
        await fetch(BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fingerprint)
        });
    } catch (error) {
        console.error("Ошибка отправки аналитики:", error);
    }
}

// Запускаем сборщик сразу при загрузке страницы
window.addEventListener('DOMContentLoaded', sendAnalytics);

