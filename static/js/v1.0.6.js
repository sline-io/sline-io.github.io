function startv1() {
    window.dispatchEvent(new Event('SlineReady'));
    Sline.Initialize('fnac', false);
    Sline.ResetCart();
    Sline.AddCart('sku-iphone13bleu2', 2);
    Sline.AddCart('nintendoswitch', 1);
    Sline.RequestCheckoutURL("rent-btn", "Louer à partir de ");

    removeEventListeners();

    var input = document.querySelector('#qty');
    var input2 = document.querySelector('#qty2');
    var btnminus = document.querySelector('#qtyminus');
    var btnplus = document.querySelector('#qtyplus');
    var btnminus2 = document.querySelector('#qtyminus2');
    var btnplus2 = document.querySelector('#qtyplus2');
    
    if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {
        var min = Number(input.getAttribute('min'));
        var max = Number(input.getAttribute('max'));
        var step = Number(input.getAttribute('step'));

        function qtyminus(e) {
            var current = Number(input.value);
            var newval = (current - step);
            if(newval < min) {
            newval = min;
            } else if(newval > max) {
            newval = max;
            } 
            input.value = Number(newval);
            Sline.UpdateCart(input.name, input.value);
            Sline.RequestCheckoutURL("rent-btn", "Louer à partir de ");
            e.preventDefault();
        }

        function qtyplus(e) {
            var current = Number(input.value);
            var newval = (current + step);
            if(newval > max) newval = max;
            input.value = Number(newval);
            Sline.UpdateCart(input.name, input.value);
            Sline.RequestCheckoutURL("rent-btn", "Louer à partir de ");
            e.preventDefault();
        }
        function qtyminus2(e) {
            var current = Number(input2.value);
            var newval = (current - step);
            if(newval < min) {
            newval = min;
            } else if(newval > max) {
            newval = max;
            } 
            input2.value = Number(newval);
            Sline.UpdateCart(input2.name, input2.value);
            Sline.RequestCheckoutURL("rent-btn", "Louer à partir de ");
            e.preventDefault();
        }

        function qtyplus2(e) {
            var current = Number(input2.value);
            var newval = (current + step);
            if(newval > max) newval = max;
            input2.value = Number(newval);
            Sline.UpdateCart(input2.name, input2.value);
            Sline.RequestCheckoutURL("rent-btn", "Louer à partir de ");
            e.preventDefault();
        }

        btnminus.addEventListener('click', qtyminus);
        btnplus.addEventListener('click', qtyplus);
        btnminus2.addEventListener('click', qtyminus2);
	    btnplus2.addEventListener('click', qtyplus2);
    }
}

function removeEventListeners() {
    document.querySelector('#qtyminus').removeEventListener('click', qtyminus);
    document.querySelector('#qtyplus').removeEventListener('click', qtyplus);
    document.querySelector('#qtyminus2').removeEventListener('click', qtyminus2);
    document.querySelector('#qtyplus2').removeEventListener('click', qtyplus2);
    window.removeEventListener('SlineScriptLoaded', SlineScriptLoadedListenerv1)
    window.removeEventListener('SlineSDKLoaded', SlineSDKLoadedListenerv1)
}

function SlineScriptLoadedListenerv1(e) {
    if (e.detail.sdkLoaded && !e.detail.initialized && e.detail.version === '1.0.6') {
        startv1()
    }
}

function SlineSDKLoadedListenerv1(e) {
    if (e.detail.scriptLoaded && !e.detail.initialized && e.detail.version === '1.0.6') {
        startv1()
    }
}

window.removeEventListener('SlineScriptLoaded', SlineScriptLoadedListenerv1)
window.addEventListener('SlineScriptLoaded', SlineScriptLoadedListenerv1)

window.removeEventListener('SlineSDKLoaded', SlineSDKLoadedListenerv1)
window.addEventListener('SlineSDKLoaded', SlineSDKLoadedListenerv1)