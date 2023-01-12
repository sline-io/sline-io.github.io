let sdkLoaded = false;
let scriptLoaded = false;
let initialized = false;
let pathSplitted = location.pathname.substring(1, location.pathname.length - 1).split('/');
let lastVersion = '2.1.0';

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
    pathSplitted = location.pathname.substring(1, location.pathname.length - 1).split('/');
    lastVersion = '2.1.0';

    document.querySelectorAll('[data-custom-script=true]').forEach(elt => elt.remove())
    window.Sline = null;
    window.dispatchEvent(new Event('resetListeners', {bubbles: true}))

    let sdk = '';
    let script = '';
    if (pathSplitted.length === 1) {
        script = `/js/v${lastVersion}.js`;
        sdk = `https://cdn.jsdelivr.net/gh/sline-io/web-sdk@${lastVersion.split('.').slice(0, -1).join('.')}/sline-sdk.min.js`;
    } else if (pathSplitted.length === 2) {
        script = `/js/v${pathSplitted[1]}.js`;
        sdk = `https://cdn.jsdelivr.net/gh/sline-io/web-sdk@${pathSplitted[1].split('.').slice(0, -1).join('.')}/sline-sdk.min.js`;
    }

    importScript(script, () => {
        scriptLoaded = true;
        scriptEvent.detail.initialized = initialized;
        scriptEvent.detail.sdkLoaded = sdkLoaded;
        scriptEvent.detail.scriptLoaded = scriptLoaded;
        scriptEvent.detail.version  = pathSplitted.length === 1 ? lastVersion : pathSplitted[1]
        window.dispatchEvent(scriptEvent);
    })
    importScript(sdk, () => {
        sdkLoaded = true;
        sdkEvent.detail.initialized = initialized;
        sdkEvent.detail.sdkLoaded = sdkLoaded;
        sdkEvent.detail.scriptLoaded = scriptLoaded;
        sdkEvent.detail.version  = pathSplitted.length === 1 ? lastVersion : pathSplitted[1]
        setTimeout(() => window.dispatchEvent(sdkEvent), 500)
    })
}