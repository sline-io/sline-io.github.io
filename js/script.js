let sdkLoaded = false;
let scriptLoaded = false;
let initialized = false;

let scriptEvent = new CustomEvent('SlineScriptLoaded', {
    bubbles: true,
    detail: {
        sdkLoaded,
        scriptLoaded,
        initialized,
        version: null
    }
})
let sdkEvent = new CustomEvent('SlineSDKLoaded', {
    bubbles: true,
    detail: {
        sdkLoaded,
        scriptLoaded,
        initialized,
        version: null
    }
})

window.onload = function () {
    const observer = new MutationObserver(mutations => {
        let reload = false
        mutations.forEach(mutation => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                reload = true
            }
        })

        if (reload) {
            loadScripts();
        }
    })
    observer.observe(document.querySelector('html'), {
        attributes: true
    })

    loadScripts();
};

window.addEventListener('SlineReady', () => {
    initialized = true
})

function importScript(url, callback) {
    var script = document.createElement("script");
    script.src = url; 
    script.setAttribute('data-custom-script', true)
    script.onreadystatechange = callback;
    script.onload = callback;
    document.head.appendChild(script);
}

function loadScripts(e) {
    sdkLoaded = false;
    scriptLoaded = false;
    initialized = false;

    document.querySelectorAll('[data-custom-script=true]').forEach(elt => elt.remove())
    window.Sline = null;
    window.dispatchEvent(new Event('resetListeners', {bubbles: true}))

    let sdk = '';
    let script = '';
    if (location.pathname === '/') {
        script = '/js/v2.1.0.js';
        sdk = 'https://cdn.jsdelivr.net/gh/sline-io/web-sdk@2.1.0/sline-sdk.min.js';
    } else if (location.pathname.startsWith('/1.0.6')) {
        script = '/js/v1.0.6.js';
        sdk = 'https://cdn.jsdelivr.net/gh/sline-io/web-sdk@1/sline-sdk.min.js';
    }

    importScript(script, () => {
        scriptLoaded = true;
        scriptEvent.detail.initialized = initialized;
        scriptEvent.detail.sdkLoaded = sdkLoaded;
        scriptEvent.detail.scriptLoaded = scriptLoaded;
        scriptEvent.detail.version  = location.pathname === '/' ? '2.1.0' : '1.0.6'
        window.dispatchEvent(scriptEvent);
    })
    importScript(sdk, () => {
        sdkLoaded = true;
        sdkEvent.detail.initialized = initialized;
        sdkEvent.detail.sdkLoaded = sdkLoaded;
        sdkEvent.detail.scriptLoaded = scriptLoaded;
        sdkEvent.detail.version  = location.pathname === '/' ? '2.1.0' : '1.0.6'
        setTimeout(() => window.dispatchEvent(sdkEvent), 500)
    })
}