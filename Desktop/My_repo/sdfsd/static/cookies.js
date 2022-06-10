
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toGMTString();
    const domain = "geonode.com";
    const cookie = name + "=" + value + expires + domain + "; path=/; domain="+domain;
    document.cookie = cookie;
}

function getParam(p) {
    const match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Define the variables
const gclid = getParam('gclid');
const utm_source = getParam('utm_source');

// Check if there is a GCLID first, then check if there is a utm_source
if (gclid) {
    console.log('gclid :', gclid);
    setCookie('gclid', gclid, 90);
}
if (utm_source) {
    console.log('utm source: ', utm_source)
    if (utm_source === 'affiliate') {
        const transaction_id = getParam('transaction_id');
        const affiliate_id = getParam('affiliate_id');
        const offer_id = getParam('offer_id');
        const utm_source = getParam('utm_source');
        const aff_sub = getParam('aff_sub');
        if (transaction_id && affiliate_id && offer_id) {
            const expiryTime = 0.0416667 // 60 minutes
            setCookie('AFFILIATE', JSON.stringify({ transaction_id, affiliate_id, offer_id, aff_sub, utm_source }), expiryTime);
        }
    }
}
