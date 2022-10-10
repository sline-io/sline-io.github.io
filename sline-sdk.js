/**
 * The browser console
 *
 * @property console
 * @private
 * @type object
 */
window.console = window.console || {};
window.console.log = this.console.log || function() {};

/**
 * expose our sdk
 */
(function(root) {
  root.Sline = root.Sline || {};
  root.Sline.VERSION = 'js1.0.0';
}(this));

/**
 * main sdk
 */
(function(root) {

  root.Sline = root.Sline || {};

  /**
  * Contains all Sline API classes and functions.
  * @name Sline
  * @namespace
  *
  * Contains all Sline API classes and functions.
  */
  var Sline = root.Sline;

  // If jQuery has been included, grab a reference to it.
  if (typeof(root.$) !== 'undefined') {
      Sline.$ = root.$;
  }

  Sline.checkoutURL = 'https://checkout.sline.io/'

  /**
   * Call this method first to set your authentication key.
   * @param {String} retailerSlug Retailer Token
   * @param {Boolean} prod Init in Production or Staging
   */
  Sline.Initialize = function(retailerSlug, prod) {
    Sline._initialize(retailerSlug, prod);
  };

  /**
   * Add Product to Cart
   * @param {string} sku of th product
   * @param {int} qty of the product
   */
  Sline.AddCart = function(sku, qty) {
    Sline.cart.push({"sku": sku, "quantity": qty});
  };

  /**
   * Reset Cart
   */
     Sline.ResetCart = function() {
      Sline.cart = [];
    };

  /**
   * This method is for Sline's own private use.
   * @param {String} retailerSlug retailer identifier
   */
  Sline._initialize = function(retailerSlug, prod) {
    Sline.retailerSlug = retailerSlug;
    if (prod) {
      Sline.apiURL = 'https://api.sline.io/checkout/cart';
    } else {
      Sline.apiURL = 'https://api.staging.sline.io/checkout/cart';
    }
    Sline.cart = [];
  };

  function _RequestCheckoutURL(){
    var url = Sline.apiURL + '/import'
    var payload = {};
    payload['cart'] = Sline.cart;
    payload['retailerSlug'] = Sline.retailerSlug;
  
    var myHeaders = new Headers();
    myHeaders.append('authority', 'api.staging.sline.io');
    myHeaders.append('accept', 'application/json, text/plain, */*');
    myHeaders.append('accept-language', 'en,fr-FR;q=0.9,fr;q=0.8,en-US;q=0.7');
    myHeaders.append('content-type', 'application/json');
    myHeaders.append('origin', 'https://checkout.staging.sline.io');
    myHeaders.append('referer', 'https://checkout.staging.sline.io/');
    myHeaders.append('sec-ch-ua', '\'Chromium\';v=\'106\', \'Google Chrome\';v=\'106\', \'Not;A=Brand\';v=\'99\'');
    myHeaders.append('sec-ch-ua-mobile', '?0');
    myHeaders.append('sec-ch-ua-platform', '\'macOS\'');
    myHeaders.append('sec-fetch-dest', 'empty');
    myHeaders.append('sec-fetch-mode', 'no-cors');
    myHeaders.append('sec-fetch-site', 'same-site');
    myHeaders.append('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36');
    var raw = JSON.stringify(payload);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    return fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        Sline.checkoutURL = Sline.checkoutURL + Sline.retailerSlug + '/' + data.id;
        return Sline.checkoutURL
      })
      .catch(error => console.log('error', error));
  }
  /**
   * Get checkoout URL from cart
   */
  Sline.RequestCheckoutURL = function() {
    return Promise.resolve(_RequestCheckoutURL());
  };

}(this));