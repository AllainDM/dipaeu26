
function getDeviceCategory() {
    if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) return 'mobile';
    return 'desktop';
}

function getBrowserCategory() {
    if (navigator.userAgentData && navigator.userAgentData.brands) {
        const brands = navigator.userAgentData.brands.filter(b => b.brand !== 'Not/A.Brand');
        if (brands.length > 0) return brands[0].brand;
    }
    if (navigator.vendor && navigator.vendor.includes('Apple')) return 'Safari';
    if (navigator.userAgent.includes('Firefox')) return 'Firefox';
    if (navigator.userAgent.includes('Edg')) return 'Edge';
    if (navigator.userAgent.includes('OPR') || window.opera) return 'Opera';
    return 'Chrome';
}

async function sendAnalytics() {
    const sessionId = crypto.randomUUID();

    const payload = {
        session_id: sessionId,
        url: window.location.href,
        device: getDeviceCategory(),
        browser: getBrowserCategory()
    };

    const BACKEND_URL = "https://kings90.ru/api/v1/analytics";

    try {
        await fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch (error) {
        console.error("Ошибка отправки аналитики:", error);
    }
}

window.addEventListener('DOMContentLoaded', sendAnalytics);

