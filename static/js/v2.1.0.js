function startv210() {
    window.dispatchEvent(new Event('SlineReady'));
    Sline.Initialize({
        retailer: 'fnac',
        production: false,
        checkoutButton: {
          id: 'rent-btn',
          prefix: 'Louer à partir de ',
          suffix: '/mois',
        },
        durationSelector: {
            id: 'period-selector'
        }
      });
    Sline.ResetCart();
    Sline.AddCart('sku-iphone13bleu2', 2);
    Sline.AddCart('nintendoswitch', 1);
    
    removeEventListener('SlinePricesReady', SlinePricesReadyListener)
    addEventListener('SlinePricesReady', SlinePricesReadyListener);

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
            setInstalmentPrice();
            e.preventDefault();
        }

        function qtyplus(e) {
            var current = Number(input.value);
            var newval = (current + step);
            if(newval > max) newval = max;
            input.value = Number(newval);
            Sline.UpdateCart(input.name, input.value);
            setInstalmentPrice();
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
            setInstalmentPrice();
            e.preventDefault();
        }

        function qtyplus2(e) {
            var current = Number(input2.value);
            var newval = (current + step);
            if(newval > max) newval = max;
            input2.value = Number(newval);
            Sline.UpdateCart(input2.name, input2.value);
            setInstalmentPrice();
            e.preventDefault();
        }

        btnminus.addEventListener('click', qtyminus);
        btnplus.addEventListener('click', qtyplus);
        btnminus2.addEventListener('click', qtyminus2);
	    btnplus2.addEventListener('click', qtyplus2);
    }
}

function setInstalmentPrice() {
    document.querySelectorAll('table#cartv210 tbody tr').forEach(row => {
        const sku = row.querySelector('input').getAttribute('name')
        const qty = row.querySelector('input').value
        row.querySelector('td:nth-of-type(2)').textContent = Sline.GetPriceForProductWithDuration(sku, 1)
        row.querySelector('td:nth-of-type(4)').textContent = Sline.GetPriceForProductWithDuration(sku, qty)
    })
}

function SlinePricesReadyListener() {
    setInstalmentPrice();
  
    const selector = document.getElementById('period-selector')
    selector.innerHTML = ''
    Sline.durations.forEach(duration => {
        selector.insertAdjacentHTML('beforeend', `<input type="radio" name="duration" id="duration${duration}" value="${duration}" style="visibility: hidden" ${Sline.durationSelector.value === duration ? 'checked' : ''}/>`)
        selector.insertAdjacentHTML('beforeend', `<label for="duration${duration}" ${Sline.durationSelector.value === duration ? 'class="selected"' : ''}>${duration !== -1 ? duration + ' mois' : 'Sans engagement'}</label>`);
    })

    document.querySelectorAll('#period-selector label').forEach(elt => {
        elt.removeEventListener('click', periodLabelClickListenerv210);
        elt.addEventListener('click', periodLabelClickListenerv210);
    });

    selector.querySelectorAll('#period-selector input[type=radio][name=duration]').forEach(elt => {
        elt.removeEventListener('change', setInstalmentPrice)
        elt.addEventListener('change', setInstalmentPrice);
    })
}

function periodLabelClickListenerv210(e) {
    document.querySelectorAll('#period-selector label').forEach(elt1 => elt1.classList.remove('selected'))
    e.target.classList.add('selected');
}

function SlineScriptLoadedListenerv210(e) {
    if (e.detail.sdkLoaded && !e.detail.initialized && e.detail.version === '2.1.0') {
        startv210()
    }
}

function SlineSDKLoadedListenerv210(e) {
    if (e.detail.scriptLoaded && !e.detail.initialized && e.detail.version === '2.1.0') {
        startv210();
    }
}

function removeEventListeners() {
    document.querySelector('#qtyminus').removeEventListener('click', qtyminus);
    document.querySelector('#qtyplus').removeEventListener('click', qtyplus);
    document.querySelector('#qtyminus2').removeEventListener('click', qtyminus2);
    document.querySelector('#qtyplus2').removeEventListener('click', qtyplus2);
    window.removeEventListener('SlineScriptLoaded', SlineScriptLoadedListenerv210)
    window.removeEventListener('SlineSDKLoaded', SlineSDKLoadedListenerv210)
}

window.removeEventListener('SlineScriptLoaded', SlineScriptLoadedListenerv210)
window.addEventListener('SlineScriptLoaded', SlineScriptLoadedListenerv210)

window.removeEventListener('SlineSDKLoaded', SlineSDKLoadedListenerv210)
window.addEventListener('SlineSDKLoaded', SlineSDKLoadedListenerv210)