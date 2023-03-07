function startv220() {
    window.dispatchEvent(new Event('SlineReady'));
    Sline.Initialize({
        retailer: 'fnac',
        production: false,
        checkoutButton: {
            //id: 'addToCart',
            classPath: '.addToCart',
            prefix: 'Louer à partir de ',
            suffix: '/mois',
            events: {
              customOnClickEvent: true
            }
        },
        durationSelector: {
            id: 'period-selector'
        }
    })
    Sline.ResetCart();
    Sline.AddCart('iphone13problue128go', 1);
    Sline.AddCart('234234', 1);

    removeEventListener('SlinePricesReady', SlinePricesReadyListener)
    addEventListener('SlinePricesReady', SlinePricesReadyListener);

    const selector = document.getElementById('period-selector')

    document.querySelectorAll('#period-selector label').forEach(elt => {
        elt.removeEventListener('click', periodLabelClickListenerv220);
        elt.addEventListener('click', periodLabelClickListenerv220);
    });

    selector.querySelectorAll('#period-selector input[type=radio][name=duration]').forEach(elt => {
        elt.removeEventListener('change', setInstalmentPrice)
        elt.addEventListener('change', setInstalmentPrice);
    })

    document.querySelectorAll('article').forEach(product => {
        var btnminus = product.querySelector('.quantity .minus');
        var btnplus = product.querySelector('.quantity .plus');
        
        btnminus.addEventListener('click', qtyminus);
        btnplus.addEventListener('click', qtyplus);
    })
}

function qtyminus(e) {
    var input = e.target.closest('.quantity').querySelector('input');
    var min = Number(input.getAttribute('min'));
    var max = Number(input.getAttribute('max'));
    var step = Number(input.getAttribute('step'));
    var current = Number(input.value);
    var newval = (current - step);
    if(newval < min) {
        newval = min;
    } else if(newval > max) {
        newval = max;
    } 
    input.value = Number(newval);
    Sline.UpdateCart(input.getAttribute('data-sku'), input.value);
    setInstalmentPrice();
    e.preventDefault();
}

function qtyplus(e) {
    var input = e.target.closest('.quantity').querySelector('input')
    var current = Number(input.value);
    var min = Number(input.getAttribute('min'));
    var max = Number(input.getAttribute('max'));
    var step = Number(input.getAttribute('step'));
    var newval = (current + step);
    if(newval > max) newval = max;
    input.value = Number(newval);
    Sline.UpdateCart(input.getAttribute('data-sku'), input.value);
    setInstalmentPrice();
    e.preventDefault();
}

function setInstalmentPrice() {
    document.querySelectorAll('article').forEach(row => {
        const sku = row.getAttribute('data-sku')
        const qty = row.querySelector('input').value
        row.querySelector('.instalment span').textContent = Sline.GetPriceForProductWithDuration(sku, 1)
        row.querySelector('.amount span').textContent = Sline.GetPriceForProductWithDuration(sku, qty)
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
        elt.removeEventListener('click', periodLabelClickListenerv220);
        elt.addEventListener('click', periodLabelClickListenerv220);
    });

    selector.querySelectorAll('#period-selector input[type=radio][name=duration]').forEach(elt => {
        elt.removeEventListener('change', setInstalmentPrice)
        elt.addEventListener('change', setInstalmentPrice);
    })
}

function periodLabelClickListenerv220(e) {
    document.querySelectorAll('#period-selector label').forEach(elt1 => elt1.classList.remove('selected'))
    e.target.classList.add('selected');
}

function SlineScriptLoadedListenerv220(e) {
    if (e.detail.sdkLoaded && !e.detail.initialized && e.detail.version === '2.2.0') {
        startv220()
    }
}

function SlineSDKLoadedListenerv220(e) {
    if (e.detail.scriptLoaded && !e.detail.initialized && e.detail.version === '2.2.0') {
        startv220();
    }
}

function removeEventListeners() {
    document.querySelectorAll('article').forEach(product => {
        var btnminus = product.querySelector('.quantity .minus');
        var btnplus = product.querySelector('.quantity .plus');
        
        btnminus.removeEventListener('click', qtyminus);
        btnplus.removeEventListener('click', qtyplus);
    })
}

window.removeEventListener('SlineScriptLoaded', SlineScriptLoadedListenerv220)
window.addEventListener('SlineScriptLoaded', SlineScriptLoadedListenerv220)

window.removeEventListener('SlineSDKLoaded', SlineSDKLoadedListenerv220)
window.addEventListener('SlineSDKLoaded', SlineSDKLoadedListenerv220)