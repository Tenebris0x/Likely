/*!
 * Likely 4.0.0-dev by Nikolay Rys (linkedin.com/in/nikolay-rys), Ilya Birman (ilyabirman.net), and contributors.
 * Special thanks to Viktor Karpov (twitter.com/vitkarpov), Ivan Akulov (iamakulov.com), Evgeny Steblinsky (volter9.github.io), and Artem Sapegin (sapegin.me).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["likely"] = factory();
	else
		root["likely"] = factory();
})(Object(typeof self !== 'undefined' ? self : this), () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/button.js"
/*!**************************!*\
  !*** ./source/button.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./source/dom.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./source/utils.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./source/config.js");
/* harmony import */ var _connectButtonToService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connectButtonToService */ "./source/connectButtonToService.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./source/services/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }





var htmlSpan = '<span class="{className}">{content}</span>';

/**
 * Individual social link button with a counter
 * @param {Node} serviceDiv
 * @param {object} options
 * @param {Function} reportReadinessFn
 */
var _data = /*#__PURE__*/new WeakMap();
var _reportReadiness = /*#__PURE__*/new WeakMap();
var _LikelyButton_brand = /*#__PURE__*/new WeakSet();
var LikelyButton = /*#__PURE__*/function () {
  function LikelyButton(sourceDiv, _options, reportReadinessFn) {
    _classCallCheck(this, LikelyButton);
    /**
     * Build button's HTML
     */
    _classPrivateMethodInitSpec(this, _LikelyButton_brand);
    _classPrivateFieldInitSpec(this, _data, void 0);
    _classPrivateFieldInitSpec(this, _reportReadiness, void 0);
    this.options = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.mergeToNew)(_options);
    this.sourceElement = sourceDiv;
    _classPrivateFieldSet(_reportReadiness, this, reportReadinessFn);
  }
  return _createClass(LikelyButton, [{
    key: "setService",
    value: function setService() {
      var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.toArray)(this.sourceElement.classList);
      var serviceName = classes.find(function (className) {
        return Object.prototype.hasOwnProperty.call(_services__WEBPACK_IMPORTED_MODULE_4__["default"], className);
      });
      if (serviceName) {
        this.options.service = _services__WEBPACK_IMPORTED_MODULE_4__["default"][serviceName];
        return true;
      } else {
        return false;
      }
    }

    /**
     * Make button ready for usage if it's connected
     */
  }, {
    key: "build",
    value: function build() {
      if (_assertClassBrand(_LikelyButton_brand, this, _notServiceable).call(this)) {
        return;
      }
      _assertClassBrand(_LikelyButton_brand, this, _renderHtml).call(this);
      _assertClassBrand(_LikelyButton_brand, this, _animate).call(this);
    }

    /**
     * Update the button with new options and refresh its counter
     * @param {object} newOptions
     */
  }, {
    key: "update",
    value: function update(newOptions) {
      if (_assertClassBrand(_LikelyButton_brand, this, _notServiceable).call(this)) {
        return;
      }
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.extendWith)(this.options, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.mergeToNew)({
        forceUpdate: false
      }, newOptions));
      _assertClassBrand(_LikelyButton_brand, this, _animate).call(this);
    }
  }]);
}();
function _renderHtml() {
  // Import params from data-* attributes into options hash map
  _classPrivateFieldSet(_data, this, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getDataset)(this.sourceElement));
  if (_classPrivateFieldGet(_data, this).counter) {
    this.options.staticCounter = _classPrivateFieldGet(_data, this).counter;
  }
  if (_classPrivateFieldGet(_data, this).url) {
    this.options.url = _classPrivateFieldGet(_data, this).url;
  }
  if (_classPrivateFieldGet(_data, this).title) {
    this.options.title = _classPrivateFieldGet(_data, this).title;
  }

  // Building new link element <a>
  this.renderedElement = document.createElement('a');

  // Arrange classes
  this.renderedElement.className = this.sourceElement.className;
  this.renderedElement.classList.remove(this.options.service.name);
  this.renderedElement.className += "".concat(_assertClassBrand(_LikelyButton_brand, this, _className).call(this, 'widget'));

  // Copy accessibility attributes
  _assertClassBrand(_LikelyButton_brand, this, _transferAttribute).call(this, 'role');
  _assertClassBrand(_LikelyButton_brand, this, _transferAttribute).call(this, 'aria-label');
  var icon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.interpolateStr)(htmlSpan, {
    className: _assertClassBrand(_LikelyButton_brand, this, _className).call(this, 'icon'),
    content: (0,_dom__WEBPACK_IMPORTED_MODULE_0__.wrapSVG)(this.options.service.svgIconPath)
  });
  var button = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.interpolateStr)(htmlSpan, {
    className: _assertClassBrand(_LikelyButton_brand, this, _className).call(this, 'button'),
    content: this.sourceElement.innerHTML
  });
  this.renderedElement.innerHTML = icon + button;
}
function _transferAttribute(attribute) {
  if (this.sourceElement.getAttribute(attribute) !== undefined) {
    this.renderedElement.setAttribute(attribute, this.sourceElement.getAttribute(attribute));
  }
}
function _animate() {
  // Set up click event listener
  var shareUrl = _assertClassBrand(_LikelyButton_brand, this, _buildUrl).call(this, this.options);
  this.renderedElement.setAttribute('href', shareUrl);
  this.renderedElement.addEventListener('click', _assertClassBrand(_LikelyButton_brand, this, _shareClick).call(this, shareUrl).bind(this));
  if (this.options.counters && this.options.service.counterUrl) {
    // Set up counter
    if (this.options.staticCounter) {
      // Show static counter right away
      _assertClassBrand(_LikelyButton_brand, this, _showCounter).call(this, this.options.staticCounter);
    } else {
      // Otherwise, connect to the service
      (0,_connectButtonToService__WEBPACK_IMPORTED_MODULE_3__["default"])(_assertClassBrand(_LikelyButton_brand, this, _showCounter).bind(this), this.options);
    }
  } else {
    // Report readiness immediately if there's no counter
    _classPrivateFieldGet(_reportReadiness, this).call(this);
  }
}
/**
 * Combine a BEM-compliant classname
 * @param {string} className
 * @returns {string}
 */
function _className(className) {
  var fullClass = _config__WEBPACK_IMPORTED_MODULE_2__["default"].prefix + className;
  return "".concat(fullClass, " ").concat(fullClass, "_").concat(this.options.service.name);
}
/**
 * Set visible button counter to a value
 * @param {string} counterString
 */
function _showCounter(counterString) {
  var _find;
  var counterInt = parseInt(counterString, 10) || 0;
  var className = ".".concat(_config__WEBPACK_IMPORTED_MODULE_2__["default"].prefix, "counter");
  (_find = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.find)(className, this.renderedElement)) === null || _find === void 0 || _find.remove();
  var options = {
    className: _assertClassBrand(_LikelyButton_brand, this, _className).call(this, 'counter'),
    content: counterInt
  };
  if (!counterInt && !this.options.zeroes) {
    options.className += " ".concat(_config__WEBPACK_IMPORTED_MODULE_2__["default"].prefix, "counter_empty");
    options.content = '';
  }
  this.renderedElement.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createNode)((0,_utils__WEBPACK_IMPORTED_MODULE_1__.interpolateStr)(htmlSpan, options)));
  _classPrivateFieldGet(_reportReadiness, this).call(this);
}
/**
 * Construct URL for sharing
 * @param {object} options
 * @returns {string}
 */
function _buildUrl(options) {
  var _this = this;
  options.service.urlCallback.call(this);
  var url = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.interpolateUrl)(options.service.popupUrl, {
    url: options.url,
    title: options.title
  });
  var paramsArray = [];
  this.options.service.knownParams.forEach(function (item) {
    if (item === 'url' || item === 'title' || item === 'counter') {
      return; // Ignore base params
    }
    if (item in _classPrivateFieldGet(_data, _this)) {
      paramsArray.push("".concat(encodeURIComponent(item), "=").concat(encodeURIComponent(_classPrivateFieldGet(_data, _this)[item])));
    }
  });
  var paramsString = paramsArray.join('&');
  var delimiter = url.indexOf('?') === -1 ? '?' : '&';
  return paramsString === '' ? url : url + delimiter + paramsString;
}
/**
 * Factory for click event handlers
 * @param {string} completeUrl
 * @returns {Function}
 */
function _shareClick(completeUrl) {
  return function (event) {
    var options = this.options;
    if (options.service.openPopup === true) {
      event.preventDefault();
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.openPopup)(completeUrl, _config__WEBPACK_IMPORTED_MODULE_2__["default"].prefix + this.options.service.name, options.service.popupWidth, options.service.popupHeight);
      return false;
    }
    return true;
  };
}
function _notServiceable() {
  return this.options.service === undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikelyButton);

/***/ },

/***/ "./source/config.js"
/*!**************************!*\
  !*** ./source/config.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Configuration
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'likely',
  prefix: 'likely__'
});

/***/ },

/***/ "./source/connectButtonToService.js"
/*!******************************************!*\
  !*** ./source/connectButtonToService.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./source/utils.js");


/**
 * Class for preventing duplicated requests from the similar buttons, which encapsulates:
 *  1. Callbacks for all buttons that share the same value.
 *  2. Prepared service counter URL.
 *  3. Value, returned from this URL
 * @param {string} counterUrl
 * @param {string} pageUrl
 */
function UpdateBroadcaster(counterUrl, pageUrl) {
  this.url = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.interpolateUrl)(counterUrl, {
    url: pageUrl
  });
  this.setters = [];
  this.value = undefined;
}

/**
 * Connects new related button with its callback.
 * @param {Function} buttonSetterFn
 */
UpdateBroadcaster.prototype.register = function (buttonSetterFn) {
  this.setters.push(buttonSetterFn);
  if (this.value) {
    buttonSetterFn(this.value);
  }
};

/**
 * Distributes obtained value to all buttons that share it
 * @param {Integer} value
 */
UpdateBroadcaster.prototype.trigger = function (value) {
  this.value = value;
  this.setters.forEach(function (buttonSetter) {
    buttonSetter(value);
  });
};

/**
 * Find or create an appropriate instance of UpdateBroadcaster
 * @param {Function} buttonSetterFn
 * @param {object} options
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (buttonSetterFn, options) {
  var broadcaster = options.service.broadcastersByUrl[options.url];
  if (!broadcaster) {
    broadcaster = new UpdateBroadcaster(options.service.counterUrl, options.url);
    options.service.broadcastersByUrl[options.url] = broadcaster;
    options.service.fetch(broadcaster);
  }
  broadcaster.register(buttonSetterFn);
});

/***/ },

/***/ "./source/dom.js"
/*!***********************!*\
  !*** ./source/dom.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNode: () => (/* binding */ createNode),
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   findAll: () => (/* binding */ findAll),
/* harmony export */   global: () => (/* binding */ global),
/* harmony export */   loadJSONP: () => (/* binding */ loadJSONP),
/* harmony export */   openPopup: () => (/* binding */ openPopup),
/* harmony export */   wrapSVG: () => (/* binding */ wrapSVG)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./source/utils.js");

var fakeWindow = {};
var global = _utils__WEBPACK_IMPORTED_MODULE_0__.isBrowserEnv ? window : fakeWindow;
var div = _utils__WEBPACK_IMPORTED_MODULE_0__.isBrowserEnv ? document.createElement('div') : {};

/**
 * Wrap SVG coords from data object into SVG tag
 * @param {string} coords
 * @returns {string}
 */
var wrapSVG = function wrapSVG(coords) {
  return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" ' + 'viewBox="0 0 16 16"><path d="' + coords + '"/></svg>';
};

/**
 * Create node from HTML
 * @param {string} html
 * @returns {Node}
 */
var createNode = function createNode(html) {
  div.innerHTML = html;
  return div.children[0];
};

/**
 * Load JSONP script. It gets executed after the main one is finished.
 * @param {string} url
 */
var loadJSONP = function loadJSONP(url) {
  var script = document.createElement('script');
  var head = document.head;
  script.type = 'text/javascript';
  script.src = url;
  head.appendChild(script);
  head.removeChild(script);
};

/**
 * Find first node by selector
 * @param {string} selector
 * @param {Node} [node]
 * @returns {Node}
 */
var find = function find(selector, node) {
  return (node || document).querySelector(selector);
};

/**
 * Find all nodes by selector
 * @param {string} selector
 * @param {Node} [node]
 * @returns {Node[]}
 */
var findAll = function findAll(selector, node) {
  return Array.prototype.slice.call((node || document).querySelectorAll(selector));
};
/**
 * Open the popup
 * @param {string} url
 * @param {string} winId
 * @param {number} width
 * @param {number} height
 * @returns {object | null}
 */
var openPopup = function openPopup(url, winId, width, height) {
  var left = Math.round(screen.width / 2 - width / 2);
  var top = 0;
  if (screen.height > height) {
    top = Math.round(screen.height / 3 - height / 2);
  }
  var options = 'left=' + left + ',top=' + top + ',width=' + width + ',height=' + height + ',personalbar=0,toolbar=0,scrollbars=1,resizable=1';
  var win = window.open(url, winId, options);
  if (!win) {
    location.href = url;
    return null;
  }
  win.focus();
  return win;
};

/***/ },

/***/ "./source/history.js"
/*!***************************!*\
  !*** ./source/history.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var callbacks = [];
var handleUrlChange = function handleUrlChange() {
  callbacks.forEach(function (callback) {
    callback();
  });
};
var setupHistoryWatcher = function setupHistoryWatcher() {
  var pushState = window.history.pushState;
  window.history.pushState = function () {
    // browser should change the url first
    setTimeout(handleUrlChange, 0);
    return pushState.apply(window.history, arguments);
  };
  var replaceState = window.history.replaceState;
  window.history.replaceState = function () {
    // browser should change the url first
    setTimeout(handleUrlChange, 0);
    return replaceState.apply(window.history, arguments);
  };
  window.addEventListener('popstate', handleUrlChange);
};
var isWatchingHistory = false;

/**
 * Monitoring tool for catching url changes for re-initiating widged with a new url
 * @param {Function} callback
 */
var history = {
  onUrlChange: function onUrlChange(callback) {
    if (!isWatchingHistory) {
      setupHistoryWatcher();
      isWatchingHistory = true;
    }
    callbacks.push(callback);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (history);

/***/ },

/***/ "./source/init_service.js"
/*!********************************!*\
  !*** ./source/init_service.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./source/dom.js");

function fetchXHR(updateBroadcaster) {
  var _this = this;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var convertedNumber = typeof _this.convertNumber === 'function' ? _this.convertNumber(xhr.responseText) : xhr.responseText;
      updateBroadcaster.trigger(convertedNumber);
    }
  };
  xhr.open('GET', updateBroadcaster.url, true);
  xhr.send();
}
function resetBroadcasters() {
  this.broadcastersByUrl = {};
}

/**
 * Set default values on service option object
 * @param {object} serviceOptions
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (serviceOptions) {
  // __likelyFetchMock is used for UI testing and is set on window
  // because this function is executed right when Likely is loaded.
  // There’s currently no way to do `likely.__likelyFetchMock = ...`
  // before running this method.
  serviceOptions.fetch = _dom__WEBPACK_IMPORTED_MODULE_0__.global.__likelyFetchMock || serviceOptions.fetch || fetchXHR;
  serviceOptions.urlCallback = serviceOptions.urlCallback || function () {/* no-op */};
  serviceOptions.knownParams = serviceOptions.knownParams || [];
  serviceOptions.openPopup = serviceOptions.openPopup === undefined ? true : serviceOptions.openPopup;
  serviceOptions.resetBroadcasters = resetBroadcasters;
  serviceOptions.resetBroadcasters();
});

/***/ },

/***/ "./source/likely-commonjs.js"
/*!***********************************!*\
  !*** ./source/likely-commonjs.js ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

// This module is an entry point for CommonJS modules.
// It’s written with CommonJS imports and exports to make possible doing `module.exports = likely`.
// This is required so that users work with `require('likely')`, not `require('likely').default`
var _require = __webpack_require__(/*! ./utils */ "./source/utils.js"),
  getBools = _require.getBools,
  getDefaultUrl = _require.getDefaultUrl,
  mergeToNew = _require.mergeToNew;
var likelyWidget = (__webpack_require__(/*! ./widget */ "./source/widget.js")["default"]);
var config = (__webpack_require__(/*! ./config */ "./source/config.js")["default"]);
var _require2 = __webpack_require__(/*! ./dom */ "./source/dom.js"),
  findAll = _require2.findAll;
var history = (__webpack_require__(/*! ./history */ "./source/history.js")["default"]);
var services = (__webpack_require__(/*! ./services */ "./source/services/index.js")["default"]);

/**
 * @param {Node} likelyRoot
 * @param {object} options
 * @private
 * @returns {likelyWidget}
 */
var placeWidget = function placeWidget(likelyRoot, options) {
  var providedOptions = options || {};
  var defaultOptions = {
    counters: true,
    timeout: 1e3,
    zeroes: false,
    title: document.title,
    url: getDefaultUrl()
  };
  var completeOptions = mergeToNew(defaultOptions, providedOptions, getBools(likelyRoot));
  var widget = likelyRoot[config.name];
  if (widget) {
    widget.update(completeOptions);
  } else {
    widget = new likelyWidget(likelyRoot, completeOptions);
    widget.renderButtons();
    likelyRoot[config.name] = widget;
  }
  return widget;
};
var likely = {
  /**
   * Initiate Likely buttons on load
   * @param {Node | Array<Node> | object} [nodes] a particular node or an array of widgets,
   *                                     if not specified,
   *                                     tries to init all the widgets
   * @param {object} [options] additional options for each widget
   */
  initiate: function initiate(nodes, options) {
    var realNodes;
    var realOptions;
    if (Array.isArray(nodes)) {
      // An array of nodes was passed
      realNodes = nodes;
      realOptions = options;
    } else if (nodes instanceof Node) {
      // A single node was passed
      realNodes = [nodes];
      realOptions = options;
    } else {
      // Options were passed, or the function was called without arguments
      realNodes = findAll(".".concat(config.name));
      realOptions = nodes;
    }
    this.maintainStoredData(realOptions);
    initWidgets();
    history.onUrlChange(initWidgets);
    function initWidgets() {
      realNodes.forEach(function (node) {
        return placeWidget(node, realOptions);
      });
    }
  },
  /**
   * Reset stored broadcasters if forceUpdate is requested
   * @param {object} realOptions
   */
  maintainStoredData: function maintainStoredData(realOptions) {
    if (realOptions && realOptions.forceUpdate) {
      Object.values(services).forEach(function (service) {
        service.resetBroadcasters();
      });
    }
  }
};
module.exports = likely;

/***/ },

/***/ "./source/services/facebook.js"
/*!*************************************!*\
  !*** ./source/services/facebook.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Facebook service provider
 * Share doc: https://developers.facebook.com/docs/workplace/sharing/share-dialog/
 * Counter doc: https://developers.facebook.com/docs/graph-api/reference/v8.0/engagement
 *
 * For hackers: the access token below is public, heavily restricted and doesn't allow to access anything of value
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'facebook',
  counterUrl: 'https://graph.facebook.com/?id={url}&access_token=1729830587180291|102e6d79cda2fa63b65c99c039eed12a&fields=og_object%7Bengagement%7Bcount%7D%7D',
  convertNumber: function convertNumber(data) {
    var graphQlData = JSON.parse(data).og_object;
    return graphQlData ? graphQlData.engagement.count : 0;
  },
  popupWidth: 555,
  popupHeight: 555,
  popupUrl: 'https://www.facebook.com/sharer.php?u={url}',
  knownParams: ['url', 'hashtag', 'counter'],
  svgIconPath: 'M 16 8 C 16 3.582031 12.417969 0 8 0 C 3.582031 0 0 3.582031 0 8 C 0 11.753906 2.582031 14.898438 6.066406 15.765625 L 6.066406 10.445312 L 4.417969 10.445312 L 4.417969 8 L 6.066406 8 L 6.066406 6.945312 C 6.066406 4.222656 7.300781 2.960938 9.972656 2.960938 C 10.480469 2.960938 11.355469 3.0625 11.710938 3.160156 L 11.710938 5.375 C 11.523438 5.355469 11.195312 5.347656 10.789062 5.347656 C 9.476562 5.347656 8.96875 5.84375 8.96875 7.132812 L 8.96875 8 L 11.582031 8 L 11.132812 10.445312 L 8.96875 10.445312 L 8.96875 15.941406 C 12.929688 15.460938 16 12.089844 16 8 Z M 16 8'
});

/***/ },

/***/ "./source/services/index.js"
/*!**********************************!*\
  !*** ./source/services/index.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _facebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facebook */ "./source/services/facebook.js");
/* harmony import */ var _init_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../init_service */ "./source/init_service.js");
/* harmony import */ var _linkedin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linkedin */ "./source/services/linkedin.js");
/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./max */ "./source/services/max.js");
/* harmony import */ var _odnoklassniki__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./odnoklassniki */ "./source/services/odnoklassniki.js");
/* harmony import */ var _pinterest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pinterest */ "./source/services/pinterest.js");
/* harmony import */ var _reddit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reddit */ "./source/services/reddit.js");
/* harmony import */ var _telegram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./telegram */ "./source/services/telegram.js");
/* harmony import */ var _twitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./twitter */ "./source/services/twitter.js");
/* harmony import */ var _viber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./viber */ "./source/services/viber.js");
/* harmony import */ var _vkontakte__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vkontakte */ "./source/services/vkontakte.js");
/* harmony import */ var _whatsapp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./whatsapp */ "./source/services/whatsapp.js");
/* harmony import */ var _xcom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./xcom */ "./source/services/xcom.js");













var services = {
  facebook: _facebook__WEBPACK_IMPORTED_MODULE_0__["default"],
  linkedin: _linkedin__WEBPACK_IMPORTED_MODULE_2__["default"],
  max: _max__WEBPACK_IMPORTED_MODULE_3__["default"],
  odnoklassniki: _odnoklassniki__WEBPACK_IMPORTED_MODULE_4__["default"],
  pinterest: _pinterest__WEBPACK_IMPORTED_MODULE_5__["default"],
  reddit: _reddit__WEBPACK_IMPORTED_MODULE_6__["default"],
  telegram: _telegram__WEBPACK_IMPORTED_MODULE_7__["default"],
  twitter: _twitter__WEBPACK_IMPORTED_MODULE_8__["default"],
  viber: _viber__WEBPACK_IMPORTED_MODULE_9__["default"],
  vkontakte: _vkontakte__WEBPACK_IMPORTED_MODULE_10__["default"],
  whatsapp: _whatsapp__WEBPACK_IMPORTED_MODULE_11__["default"],
  xcom: _xcom__WEBPACK_IMPORTED_MODULE_12__["default"],
  ok: _odnoklassniki__WEBPACK_IMPORTED_MODULE_4__["default"],
  vk: _vkontakte__WEBPACK_IMPORTED_MODULE_10__["default"],
  x: _xcom__WEBPACK_IMPORTED_MODULE_12__["default"]
};
Object.values(services).forEach(function (serviceObj) {
  return (0,_init_service__WEBPACK_IMPORTED_MODULE_1__["default"])(serviceObj);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (services);

/***/ },

/***/ "./source/services/linkedin.js"
/*!*************************************!*\
  !*** ./source/services/linkedin.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * LinkedIn service provider
 * Doc: https://stackoverflow.com/questions/33426752/linkedin-share-post-url
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'linkedin',
  popupUrl: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
  knownParams: ['url'],
  popupWidth: 600,
  popupHeight: 500,
  svgIconPath: 'M13.634,13.629 L11.263,13.629 L11.263,9.919 C11.263,9.035 11.247,7.896 10.030,7.896 C8.795,7.896 8.606,8.860 8.606,9.855 L8.606,13.629 L6.234,13.629 L6.234,6.000 L8.510,6.000 L8.510,7.043 L8.542,7.043 C9.006,6.250 9.869,5.777 10.788,5.811 C13.191,5.811 13.634,7.392 13.634,9.445 L13.634,13.629 ZM3.560,4.958 C2.800,4.958 2.184,4.343 2.184,3.583 C2.183,2.824 2.799,2.209 3.559,2.208 C4.319,2.208 4.935,2.823 4.935,3.583 L4.935,3.583 C4.936,4.342 4.320,4.957 3.560,4.958 M4.746,13.629 L2.372,13.629 L2.372,6.000 L4.745,6.000 L4.746,13.629 ZM14.816,0.007 L1.181,0.007 C0.536,0.000 0.008,0.516 -0.000,1.160 L-0.000,14.839 C0.007,15.484 0.536,16.000 1.181,15.993 L14.816,15.993 C15.461,16.000 15.991,15.484 16.000,14.839 L16.000,1.160 C15.991,0.515 15.461,-0.000 14.816,0.007z'
});

/***/ },

/***/ "./source/services/max.js"
/*!********************************!*\
  !*** ./source/services/max.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * MAX service provider
 * Share doc: https://max.ru/:share
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'max',
  popupUrl: 'https://max.ru/:share?text={url}%20{title}',
  popupWidth: 485,
  popupHeight: 355,
  knownParams: ['url', 'title'],
  svgIconPath: 'M8.1468 14.4165c-1.3352 0.0000-1.9557-0.1944-3.0310-0.9720-0.6845 0.8749-2.8388 1.5556-2.9337 0.3889 0.0000-0.8742-0.1974-1.6107-0.4152-2.4212-0.2665-0.9932-0.5629-2.0980-0.5629-3.7037 0.0000-3.8284 3.1601-6.7084 6.9076-6.7084 3.7463 0.0000 6.6842 3.0199 6.6842 6.7457 0.0000 3.7252-3.0315 6.6709-6.6492 6.6709l0.0001-0.0001zm0.0541-10.1062c-1.8232-0.0950-3.2458 1.1621-3.5596 3.1297-0.2601 1.6297 0.2008 3.6152 0.5948 3.7150 0.1860 0.0471 0.6618-0.3355 0.9550-0.6270 0.4827 0.3108 1.0362 0.5519 1.6517 0.5835 1.8720 0.0975 3.5304-1.3582 3.6288-3.2184 0.0982-1.8602-1.3985-3.4854-3.2703-3.5829l-0.0002 0.0000z'
});

/***/ },

/***/ "./source/services/odnoklassniki.js"
/*!******************************************!*\
  !*** ./source/services/odnoklassniki.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./source/utils.js");

/**
 * Odnoklassniki service provider
 * Docs: https://apiok.ru/en/ext/like
 * https://connect.ok.ru/connect.js
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'odnoklassniki',
  counterUrl: 'https://connect.ok.ru/dk?st.cmd=extLike&tp=json&ref={url}',
  convertNumber: function convertNumber(json) {
    return JSON.parse(json).count;
  },
  urlCallback: function urlCallback() {
    // "this" here is an object of the LikelyButton class
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.renameKey)(this.sourceElement.dataset, 'imageurl', 'imageUrl');
  },
  popupWidth: 588,
  popupHeight: 296,
  popupUrl: 'https://connect.ok.ru/offer?url={url}&title={title}',
  knownParams: ['url', 'title', 'imageurl', 'counter'],
  svgIconPath: 'M 7.996094 7.925781 C 9.09375 7.925781 10.082031 7.476562 10.796875 6.765625 C 11.511719 6.050781 11.960938 5.058594 11.960938 3.964844 C 11.960938 2.867188 11.511719 1.875 10.796875 1.164062 C 10.085938 0.449219 9.09375 0 7.996094 0 C 6.898438 0 5.910156 0.449219 5.195312 1.164062 C 4.480469 1.875 4.03125 2.867188 4.03125 3.964844 C 4.03125 5.058594 4.480469 6.050781 5.195312 6.765625 C 5.910156 7.476562 6.914062 7.925781 7.996094 7.925781 Z M 6.726562 2.683594 C 7.058594 2.351562 7.507812 2.152344 7.996094 2.152344 C 8.5 2.152344 8.949219 2.351562 9.265625 2.683594 C 9.59375 3.011719 9.792969 3.460938 9.792969 3.949219 C 9.792969 4.453125 9.597656 4.902344 9.265625 5.21875 C 8.933594 5.550781 8.484375 5.746094 7.996094 5.746094 C 7.496094 5.746094 7.046875 5.550781 6.726562 5.21875 C 6.398438 4.886719 6.199219 4.4375 6.199219 3.949219 C 6.199219 3.460938 6.410156 3.011719 6.726562 2.683594 Z M 13.335938 9.527344 L 12.171875 7.941406 C 12.105469 7.847656 11.972656 7.835938 11.894531 7.914062 C 10.796875 8.851562 9.449219 9.460938 7.996094 9.460938 C 6.542969 9.460938 5.195312 8.851562 4.097656 7.914062 C 4.019531 7.847656 3.886719 7.863281 3.820312 7.941406 L 2.660156 9.527344 C 2.605469 9.605469 2.621094 9.710938 2.6875 9.777344 C 3.664062 10.570312 4.800781 11.113281 5.988281 11.390625 L 3.53125 15.722656 C 3.464844 15.839844 3.558594 16 3.6875 16 L 6.09375 16 C 6.171875 16 6.238281 15.960938 6.265625 15.882812 L 7.984375 12.050781 L 9.699219 15.882812 C 9.726562 15.949219 9.792969 16 9.871094 16 L 12.277344 16 C 12.421875 16 12.5 15.855469 12.433594 15.722656 L 9.976562 11.390625 C 11.167969 11.113281 12.304688 10.582031 13.28125 9.777344 C 13.386719 9.710938 13.398438 9.605469 13.335938 9.527344 Z'
});

/***/ },

/***/ "./source/services/pinterest.js"
/*!**************************************!*\
  !*** ./source/services/pinterest.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Pinterest service provider
 * Docs: https://developers.pinterest.com/docs/widgets/save/
 * https://stackoverflow.com/questions/9951045/pinterest-api-documentation
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'pinterest',
  counterUrl: 'https://api.pinterest.com/v1/urls/count.json?url={url}&callback=jsonp',
  convertNumber: function convertNumber(jsonpStr) {
    var json = jsonpStr.slice(6, jsonpStr.length - 1);
    return JSON.parse(json).count;
  },
  popupUrl: 'https://pinterest.com/pin/create/button/?url={url}&description={title}',
  popupWidth: 750,
  popupHeight: 750,
  knownParams: ['url', 'title', 'media', 'counter'],
  svgIconPath: 'M7.99 0c-4.417 0-8 3.582-8 8 0 3.39 2.11 6.284 5.086 7.45-.07-.633-.133-1.604.028-2.295.145-.624.938-3.977.938-3.977s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .686-.437 1.713-.663 2.664-.19.796.398 1.446 1.184 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.255-3.343-3.255-2.276 0-3.612 1.707-3.612 3.472 0 .688.265 1.425.595 1.826.065.08.075.15.055.23-.06.252-.195.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.835-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.74 4.976-4.152 4.976-.81 0-1.573-.42-1.834-.92l-.498 1.903c-.18.695-.668 1.566-.994 2.097.75.232 1.544.357 2.37.357 4.417 0 8-3.582 8-8s-3.583-8-8-8z'
});

/***/ },

/***/ "./source/services/reddit.js"
/*!***********************************!*\
  !*** ./source/services/reddit.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Reddit service provider
 * Share doc: https://www.reddit.com/dev/api#POST_api_submit + https://stackoverflow.com/a/32533431
 * Counter doc: https://www.reddit.com/dev/api/#GET_search
 * Scores are in `child.data.score` and are number of up-votes minus number of down-votes for an URL submitted to Reddit
 * Displayed counter is calculated as sum of counts for the 5 most upvoted posts for this url.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'reddit',
  counterUrl: 'https://www.reddit.com/search.json?q=url:{url}&sort=top&type=link&limit=5',
  convertNumber: function convertNumber(response) {
    var parsedResponse = JSON.parse(response);
    var totalUpvotes = 0;
    parsedResponse.data.children.forEach(function (child) {
      if (child.data && child.data.score) {
        totalUpvotes += child.data.score;
      }
    });
    return totalUpvotes;
  },
  popupUrl: 'https://reddit.com/submit?url={url}&title={title}',
  popupWidth: 785,
  popupHeight: 550,
  knownParams: ['url', 'title', 'counter'],
  svgIconPath: 'M 13.667969 5.394531 C 13.132812 5.394531 12.644531 5.574219 12.253906 5.875 C 11.175781 5.21875 9.828125 4.800781 8.347656 4.742188 L 8.347656 4.734375 C 8.347656 3.742188 9.078125 2.917969 10.035156 2.785156 C 10.210938 3.519531 10.871094 4.066406 11.660156 4.066406 C 12.578125 4.066406 13.328125 3.320312 13.328125 2.402344 C 13.328125 1.476562 12.578125 0.734375 11.660156 0.734375 C 10.851562 0.734375 10.1875 1.300781 10.027344 2.058594 C 8.679688 2.210938 7.628906 3.351562 7.628906 4.734375 L 7.628906 4.742188 C 6.164062 4.800781 4.824219 5.226562 3.765625 5.882812 C 3.363281 5.574219 2.875 5.390625 2.339844 5.390625 C 1.050781 5.394531 0 6.433594 0 7.726562 C 0 8.667969 0.550781 9.464844 1.347656 9.839844 C 1.425781 12.546875 4.371094 14.730469 8.011719 14.730469 C 11.644531 14.730469 14.601562 12.546875 14.667969 9.832031 C 15.457031 9.464844 16 8.65625 16 7.726562 C 16 6.441406 14.957031 5.394531 13.667969 5.394531 Z M 3.671875 9.207031 C 3.707031 8.359375 4.273438 7.707031 4.921875 7.707031 C 5.582031 7.707031 6.082031 8.398438 6.039062 9.242188 C 5.996094 10.089844 5.515625 10.398438 4.855469 10.398438 C 4.207031 10.398438 3.632812 10.058594 3.671875 9.207031 Z M 10.46875 11.421875 C 10.070312 12.382812 9.121094 13.054688 8.011719 13.054688 C 6.902344 13.054688 5.953125 12.382812 5.546875 11.421875 C 5.503906 11.308594 5.578125 11.183594 5.703125 11.164062 C 6.421875 11.097656 7.195312 11.058594 8.011719 11.058594 C 8.820312 11.058594 9.59375 11.097656 10.3125 11.164062 C 10.4375 11.179688 10.519531 11.308594 10.46875 11.421875 Z M 11.160156 10.398438 C 10.503906 10.398438 10.019531 10.089844 9.976562 9.25 C 9.9375 8.398438 10.4375 7.714844 11.09375 7.714844 C 11.753906 7.714844 12.308594 8.359375 12.351562 9.207031 C 12.386719 10.058594 11.8125 10.398438 11.160156 10.398438 Z M 11.160156 10.398438'
});

/***/ },

/***/ "./source/services/telegram.js"
/*!*************************************!*\
  !*** ./source/services/telegram.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Telegram service provider
 * Share doc: https://core.telegram.org/widgets/share
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'telegram',
  popupUrl: 'https://telegram.me/share/url?url={url}&text={title}',
  popupWidth: 485,
  popupHeight: 355,
  knownParams: ['url', 'title'],
  svgIconPath: 'M1.155 7.049 C 5.43 5.188 8.281 3.962 9.708 3.369 C 13.781 1.677 14.627 1.384 15.179 1.374 C 15.3 1.372 15.571 1.402 15.747 1.544 C 15.895 1.664 15.936 1.827 15.956 1.941 C 15.975 2.055 15.999 2.314 15.98 2.517 C 15.759 4.834 14.804 10.454 14.319 13.048 C 14.113 14.146 13.708 14.514 13.316 14.55 C 12.465 14.628 11.818 13.988 10.993 13.448 C 9.702 12.603 8.973 12.077 7.72 11.252 C 6.272 10.299 7.211 9.775 8.036 8.919 C 8.252 8.695 12.004 5.286 12.077 4.977 C 12.086 4.938 12.095 4.794 12.009 4.718 C 11.923 4.642 11.797 4.668 11.705 4.689 C 11.576 4.718 9.514 6.079 5.519 8.772 C 4.934 9.174 4.404 9.369 3.929 9.359 C 3.405 9.348 2.398 9.063 1.649 8.82 C 0.731 8.522 0.001 8.364 0.064 7.858 C 0.097 7.594 0.461 7.325 1.155 7.049z'
});

/***/ },

/***/ "./source/services/twitter.js"
/*!************************************!*\
  !*** ./source/services/twitter.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Twitter service provider
 * Doc: https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/parameter-reference1
 * Also mentions "related" param, but it doesn't seem to do any anything in 2020.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'twitter',
  popupUrl: 'https://twitter.com/intent/tweet?url={url}&text={title}',
  popupWidth: 600,
  popupHeight: 450,
  urlCallback: function urlCallback() {
    if (!/[.?:\-–—]\s*$/.test(this.options.title)) {
      // "this" here is an object of the LikelyButton class
      this.options.title += ':';
    }
  },
  knownParams: ['url', 'title', 'via', 'hashtags'],
  svgIconPath: 'M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z'
});

/***/ },

/***/ "./source/services/viber.js"
/*!**********************************!*\
  !*** ./source/services/viber.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Viber service provider
 * Doc: https://developers.viber.com/docs/tools/share-button/
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'viber',
  popupUrl: 'viber://forward?text={url}',
  urlCallback: function urlCallback() {
    // Treat empty title string as absent title
    if (this.options.title) {
      // "this" here is an object of the LikelyButton class
      this.options.url = this.options.title + '\n' + this.options.url;
      delete this.options.title;
    }
  },
  openPopup: false,
  knownParams: ['url', 'title'],
  svgIconPath: 'M 13.609375 1.386719 C 13.238281 1.042969 11.617188 0.03125 8.246094 0.015625 C 8.246094 0.015625 4.253906 -0.25 2.316406 1.511719 C 1.238281 2.570312 0.875 4.160156 0.835938 6.089844 C 0.828125 6.394531 0.820312 6.742188 0.820312 7.113281 C 0.820312 9.113281 1.136719 11.875 4.121094 12.703125 C 4.121094 12.703125 4.113281 15.445312 4.105469 15.6875 C 4.105469 15.855469 4.136719 15.964844 4.230469 15.996094 C 4.300781 16.011719 4.410156 15.972656 4.492188 15.886719 C 5.058594 15.316406 6.875 13.136719 6.875 13.136719 C 9.300781 13.292969 11.230469 12.8125 11.4375 12.742188 C 11.925781 12.585938 14.578125 12.363281 15.027344 8.734375 C 15.492188 4.996094 14.855469 2.449219 13.609375 1.386719 Z M 12.136719 10.199219 L 12.136719 10.207031 C 11.949219 10.523438 11.71875 10.8125 11.445312 11.058594 C 11.4375 11.058594 11.4375 11.058594 11.4375 11.058594 C 11.199219 11.261719 10.964844 11.378906 10.734375 11.402344 C 10.703125 11.410156 10.664062 11.410156 10.632812 11.410156 C 10.53125 11.410156 10.429688 11.394531 10.332031 11.363281 L 10.324219 11.355469 C 9.964844 11.253906 9.378906 11.003906 8.394531 10.453125 C 7.820312 10.144531 7.277344 9.789062 6.765625 9.386719 C 6.507812 9.183594 6.269531 8.964844 6.035156 8.734375 L 5.964844 8.664062 C 5.957031 8.65625 5.953125 8.648438 5.9375 8.640625 C 5.710938 8.40625 5.492188 8.160156 5.292969 7.902344 C 4.890625 7.398438 4.535156 6.851562 4.214844 6.285156 C 3.671875 5.300781 3.425781 4.703125 3.324219 4.347656 L 3.316406 4.339844 C 3.277344 4.246094 3.261719 4.144531 3.269531 4.042969 C 3.261719 4.011719 3.269531 3.976562 3.269531 3.945312 C 3.300781 3.710938 3.417969 3.480469 3.609375 3.238281 C 3.617188 3.238281 3.617188 3.238281 3.617188 3.230469 C 3.867188 2.960938 4.152344 2.71875 4.472656 2.539062 L 4.480469 2.535156 C 4.796875 2.371094 5.105469 2.425781 5.308594 2.671875 C 5.308594 2.671875 5.742188 3.191406 5.929688 3.441406 C 6.113281 3.703125 6.292969 3.984375 6.457031 4.269531 C 6.664062 4.648438 6.53125 5.035156 6.324219 5.191406 L 5.90625 5.523438 C 5.695312 5.695312 5.71875 6.011719 5.71875 6.011719 C 5.71875 6.011719 6.347656 8.363281 8.65625 8.949219 C 8.65625 8.949219 8.972656 8.980469 9.144531 8.773438 L 9.476562 8.355469 C 9.640625 8.144531 10.027344 8.011719 10.40625 8.222656 C 10.695312 8.382812 10.964844 8.5625 11.238281 8.75 C 11.484375 8.933594 12.003906 9.363281 12.003906 9.363281 C 12.246094 9.570312 12.308594 9.875 12.136719 10.199219 Z M 8.253906 3.554688 C 8.128906 3.546875 8.035156 3.441406 8.050781 3.316406 C 8.058594 3.191406 8.175781 3.097656 8.292969 3.105469 C 9.246094 3.175781 10.011719 3.511719 10.554688 4.105469 C 11.097656 4.695312 11.363281 5.449219 11.347656 6.324219 C 11.347656 6.449219 11.246094 6.546875 11.121094 6.546875 C 11.121094 6.546875 11.121094 6.546875 11.113281 6.546875 C 10.988281 6.539062 10.894531 6.4375 10.894531 6.316406 C 10.910156 5.546875 10.695312 4.921875 10.222656 4.410156 C 9.75 3.898438 9.105469 3.617188 8.253906 3.554688 Z M 10.191406 5.921875 C 10.191406 6.042969 10.097656 6.152344 9.972656 6.160156 L 9.964844 6.160156 C 9.84375 6.160156 9.742188 6.066406 9.742188 5.941406 C 9.703125 5.175781 9.339844 4.804688 8.601562 4.765625 C 8.476562 4.757812 8.382812 4.648438 8.394531 4.523438 C 8.394531 4.402344 8.515625 4.292969 8.625 4.316406 C 9.59375 4.363281 10.136719 4.921875 10.191406 5.921875 Z M 12.308594 7.011719 C 12.183594 7.011719 12.082031 6.914062 12.082031 6.789062 C 12.066406 5.425781 11.664062 4.339844 10.867188 3.570312 C 10.066406 2.789062 9.058594 2.394531 7.875 2.386719 C 7.75 2.386719 7.648438 2.285156 7.648438 2.160156 C 7.648438 2.039062 7.75 1.9375 7.875 1.9375 C 9.183594 1.945312 10.300781 2.386719 11.183594 3.246094 C 12.066406 4.105469 12.515625 5.300781 12.53125 6.78125 C 12.53125 6.90625 12.429688 7.003906 12.308594 7.011719 Z M 12.308594 7.011719'
});

/***/ },

/***/ "./source/services/vkontakte.js"
/*!**************************************!*\
  !*** ./source/services/vkontakte.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./source/utils.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "./source/dom.js");
/**
 * VK service provider
 * Doc: https://vk.com/dev/widget_share
 * (Switch to Russian language, the English docs are incomplete)
 * VK own implementation: https://vk.com/js/api/share.js
 */



var vkontakte = {
  name: 'vkontakte',
  popupWidth: 650,
  popupHeight: 570,
  counterUrl: 'https://vk.com/share.php?act=count&url={url}&index={index}',
  fetch: function fetch(broadcaster) {
    var index = Object.keys(this.broadcastersByUrl).length - 1;
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadJSONP)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.interpolateUrl)(broadcaster.url, {
      index: index
    }));
  },
  popupUrl: 'https://vk.com/share.php?url={url}&title={title}',
  knownParams: ['url', 'title', 'image', 'comment', 'counter'],
  svgIconPath: 'M8.71453 12.9837C3.24794 12.9837 0.129919 9.23611 0 3H2.73828C2.82823 7.57714 4.84693 9.51592 6.44591 9.91565V3H9.02439V6.94751C10.6034 6.77762 12.2622 4.97876 12.8218 3H15.4003C14.9705 5.43847 13.1717 7.23734 11.8925 7.97687C13.1717 8.5765 15.2205 10.1455 16 12.9837H13.1617C12.5521 11.0849 11.0331 9.61584 9.02439 9.41597V12.9837H8.71453z'
};

// Script, returned by VK, calls this method with two arguments
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.registerGlobalCallback)('VK.Share.count', function (index, count) {
  var broadcasters = vkontakte.broadcastersByUrl;
  broadcasters[Object.keys(broadcasters)[index]].trigger(count);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vkontakte);

/***/ },

/***/ "./source/services/whatsapp.js"
/*!*************************************!*\
  !*** ./source/services/whatsapp.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * WhatsApp service provider
 * Doc: https://faq.whatsapp.com/iphone/how-to-link-to-whatsapp-from-a-different-app
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'whatsapp',
  // %0D%0A% is the encoding for enter key
  popupUrl: 'https://api.whatsapp.com/send?text={title}%0D%0A%0D%0A{url}',
  // Sending on WhatsApp using manifest link instead of popup
  knownParams: ['url', 'title'],
  popupWidth: 600,
  popupHeight: 385,
  svgIconPath: 'M8.013,15.949 L8.009,15.949 C6.574,15.948 5.167,15.564 3.939,14.839 L3.647,14.666 L0.620,15.457 L1.428,12.517 L1.238,12.216 C0.438,10.947 0.015,9.481 0.016,7.976 C0.017,3.584 3.605,0.010 8.016,0.010 C10.152,0.011 12.160,0.841 13.669,2.347 C15.179,3.852 16.010,5.854 16.009,7.983 C16.008,12.375 12.420,15.949 8.013,15.949 ZM12.860,10.262 C12.800,10.162 12.639,10.103 12.399,9.983 C12.159,9.863 10.977,9.283 10.756,9.203 C10.536,9.124 10.376,9.084 10.215,9.323 C10.055,9.563 9.594,10.103 9.454,10.262 C9.314,10.422 9.174,10.442 8.933,10.322 C8.693,10.202 7.918,9.950 7.000,9.134 C6.285,8.499 5.803,7.714 5.663,7.475 C5.522,7.235 5.648,7.105 5.768,6.986 C5.876,6.878 6.008,6.706 6.129,6.566 C6.249,6.426 6.289,6.327 6.369,6.167 C6.449,6.007 6.409,5.867 6.349,5.747 C6.289,5.627 5.822,4.443 5.608,3.969 C5.428,3.570 5.238,3.562 5.067,3.555 C4.927,3.549 4.766,3.549 4.606,3.549 C4.446,3.549 4.185,3.609 3.965,3.849 C3.745,4.089 3.124,4.668 3.124,5.847 C3.124,7.026 3.985,8.165 4.105,8.324 C4.226,8.484 5.769,10.980 8.212,11.941 C10.243,12.739 10.656,12.580 11.097,12.540 C11.538,12.500 12.519,11.961 12.720,11.401 C12.920,10.842 12.920,10.362 12.860,10.262z'
});

/***/ },

/***/ "./source/services/xcom.js"
/*!*********************************!*\
  !*** ./source/services/xcom.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Twitter service provider
 * Doc: https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/parameter-reference1
 * Also mentions "related" param, but it doesn't seem to do any anything in 2020.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'xcom',
  popupUrl: 'https://x.com/intent/tweet?url={url}&text={title}',
  popupWidth: 600,
  popupHeight: 450,
  urlCallback: function urlCallback() {
    if (!/[.?:\-–—]\s*$/.test(this.options.title)) {
      this.options.title += ':';
    }
  },
  knownParams: ['url', 'title', 'via', 'hashtags'],
  svgIconPath: 'M11.813.721h2.3l-5.025 5.744L15 14.279h-4.629l-3.625-4.74-4.149 4.74H.296l5.375-6.144L0 .721h4.746l3.277 4.333ZM11.006 12.903h1.274L4.054 2.025H2.686z'
});

/***/ },

/***/ "./source/utils.js"
/*!*************************!*\
  !*** ./source/utils.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extendWith: () => (/* binding */ extendWith),
/* harmony export */   getBools: () => (/* binding */ getBools),
/* harmony export */   getDataset: () => (/* binding */ getDataset),
/* harmony export */   getDefaultUrl: () => (/* binding */ getDefaultUrl),
/* harmony export */   interpolateStr: () => (/* binding */ interpolateStr),
/* harmony export */   interpolateUrl: () => (/* binding */ interpolateUrl),
/* harmony export */   isBrowserEnv: () => (/* binding */ isBrowserEnv),
/* harmony export */   isInternetExplorer: () => (/* binding */ isInternetExplorer),
/* harmony export */   mergeToNew: () => (/* binding */ mergeToNew),
/* harmony export */   registerGlobalCallback: () => (/* binding */ registerGlobalCallback),
/* harmony export */   renameKey: () => (/* binding */ renameKey),
/* harmony export */   toArray: () => (/* binding */ toArray)
/* harmony export */ });
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var bool = {
  yes: true,
  no: false
};
/**
 * Convert array-like object to array (for example DOMTokenList)
 * @param {object} arrayLike
 * @returns {Array}
 */
var toArray = function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

/**
 * Merge given dictionaries (objects) into one object.
 * Iterates across the arguments, the last one gets priority.
 * @returns {object}
 */
var mergeToNew = function mergeToNew() {
  var newObject = {};
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg) {
      for (var key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key)) {
          newObject[key] = arg[key];
        }
      }
    }
  }
  return newObject;
};

/**
 * Extend one (target) object by other (subject)
 * @param {object} target
 * @param {object} subject
 * @returns {object} Extended target
 */
var extendWith = function extendWith(target, subject) {
  for (var key in subject) {
    if (Object.prototype.hasOwnProperty.call(subject, key)) {
      target[key] = subject[key];
    }
  }
  return target;
};

/**
 * Return node.dataset or plain object for IE10 without setters
 * based on https://gist.github.com/brettz9/4093766#file_html5_dataset.js
 * @param {Node} node
 * @returns {object}
 */
var getDataset = function getDataset(node) {
  if (_typeof(node.dataset) === 'object') {
    return node.dataset;
  }
  var i;
  var dataset = {};
  var attributes = node.attributes;
  var attribute;
  var attributeName;
  var toUpperCase = function toUpperCase(n0) {
    return n0.charAt(1).toUpperCase();
  };
  for (i = attributes.length - 1; i >= 0; i--) {
    attribute = attributes[i];
    if (attribute && attribute.name && /^data-\w[\w-]*$/.test(attribute.name)) {
      attributeName = attribute.name.substr(5).replace(/-./g, toUpperCase);
      dataset[attributeName] = attribute.value;
    }
  }
  return dataset;
};

/**
 * Convert "yes" and "no" to true and false.
 * @param {Node} node
 * @returns {object}
 */
var getBools = function getBools(node) {
  var result = {};
  var data = getDataset(node);
  for (var key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      var value = data[key];
      result[key] = value in bool ? bool[value] : value;
    }
  }
  return result;
};

/**
 * Map object keys in string to its values
 * @param {string} text
 * @param {object} data
 * @returns {string}
 */
var interpolateStr = function interpolateStr(text, data) {
  return text ? text.replace(/\{([^}]+)}/g, function (value, key) {
    return key in data ? data[key] : value;
  }) : '';
};

/**
 * Map object keys in URL to its values
 * @param {string} text
 * @param {object} data
 * @returns {string}
 */
var interpolateUrl = function interpolateUrl(text, data) {
  for (var key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      data[key] = encodeURIComponent(data[key]);
    }
  }
  return interpolateStr(text, data);
};
/**
 * Set value in object using dot-notation
 * @param {string} key
 * @param {object} value
 */
var registerGlobalCallback = function registerGlobalCallback(key, value) {
  var frags = key.split('.');
  var last = null;
  var object = __webpack_require__.g;
  frags.forEach(function (key, index) {
    if (typeof object[key] === 'undefined') {
      object[key] = {};
    }
    if (index !== frags.length - 1) {
      object = object[key];
    }
    last = key;
  });
  object[last] = value;
};

/**
 * Returns default url for likely.
 * It could be href from <link rel='canonical'>
 * if presents in the document, or the current url of the page otherwise
 * @returns {string}
 */
var getDefaultUrl = function getDefaultUrl() {
  var link = document.querySelector('link[rel="canonical"]');
  if (link) {
    return link.href;
  }
  return window.location.href.replace(window.location.hash, '');
};

/**
 * Is code run in browser or on server.
 */
var isBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined' && document.createElement;

/**
 * Renames a key in an object, using ES6 syntax
 * @param {object} obj
 * @param {string} oldKey
 * @param {string} newKey
 */
var renameKey = function renameKey(obj, oldKey, newKey) {
  if (Object.prototype.hasOwnProperty.call(obj, oldKey)) {
    delete Object.assign(obj, _defineProperty({}, newKey, obj[oldKey]))[oldKey];
  }
};

/**
 * Check if the browser is Internet Explorer
 * @returns {boolean}
 */
var isInternetExplorer = function isInternetExplorer() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE '); // For IE 10 or older
  var trident = ua.indexOf('Trident/'); // For IE 11

  return msie > 0 || trident > 0;
};

/***/ },

/***/ "./source/widget.js"
/*!**************************!*\
  !*** ./source/widget.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Likely)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./source/button.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./source/config.js");
/* harmony import */ var _shadow_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shadow.styl */ "./source/shadow.styl");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./source/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }





/**
 * Main widget view.
 * It serves as a container for all buttons and manages their rendering.
 * @param {Node} container
 * @param {object} options
 */
var _options = /*#__PURE__*/new WeakMap();
var _sourceLikelyDiv = /*#__PURE__*/new WeakMap();
var _shadowRoot = /*#__PURE__*/new WeakMap();
var _shadowLikelyDiv = /*#__PURE__*/new WeakMap();
var _awaitedButtons = /*#__PURE__*/new WeakMap();
var _readyDelay = /*#__PURE__*/new WeakMap();
var _buttons = /*#__PURE__*/new WeakMap();
var _Likely_brand = /*#__PURE__*/new WeakSet();
var Likely = /*#__PURE__*/function () {
  function Likely(container, options) {
    _classCallCheck(this, Likely);
    _classPrivateMethodInitSpec(this, _Likely_brand);
    _classPrivateFieldInitSpec(this, _options, void 0);
    _classPrivateFieldInitSpec(this, _sourceLikelyDiv, void 0);
    _classPrivateFieldInitSpec(this, _shadowRoot, void 0);
    _classPrivateFieldInitSpec(this, _shadowLikelyDiv, void 0);
    _classPrivateFieldInitSpec(this, _awaitedButtons, void 0);
    _classPrivateFieldInitSpec(this, _readyDelay, void 0);
    _classPrivateFieldInitSpec(this, _buttons, void 0);
    _classPrivateFieldSet(_options, this, options);
    _classPrivateFieldSet(_sourceLikelyDiv, this, container);
    _classPrivateFieldSet(_shadowRoot, this, null);
    _classPrivateFieldSet(_shadowLikelyDiv, this, null);
    _classPrivateFieldSet(_awaitedButtons, this, 0);
    _classPrivateFieldSet(_readyDelay, this, null);
    _classPrivateFieldSet(_buttons, this, []);
  }

  // Main method that initializes the widget
  return _createClass(Likely, [{
    key: "renderButtons",
    value: function renderButtons() {
      _assertClassBrand(_Likely_brand, this, _setupShadowDom).call(this);
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__.toArray)(_classPrivateFieldGet(_sourceLikelyDiv, this).children).forEach(_assertClassBrand(_Likely_brand, this, _addButton).bind(this));
      // Temporary partial visibility to prevent delays in rendering while we're waiting for counters
      _classPrivateFieldGet(_shadowLikelyDiv, this).classList.add("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].name, "_visible"));
      if (_classPrivateFieldGet(_options, this).counters) {
        _classPrivateFieldSet(_readyDelay, this, setTimeout(_assertClassBrand(_Likely_brand, this, _ready).bind(this), _classPrivateFieldGet(_options, this).timeout));
      } else {
        _assertClassBrand(_Likely_brand, this, _ready).call(this);
      }
      _assertClassBrand(_Likely_brand, this, _showButtons).call(this);
    }

    /**
     * Refresh all the counters
     * Can be used repeatedly after the widget was initialized with renderButtons
     * @param {object} options
     */
  }, {
    key: "update",
    value: function update(options) {
      if (options.forceUpdate || options.url && options.url !== _classPrivateFieldGet(_options, this).url) {
        _classPrivateFieldSet(_awaitedButtons, this, _classPrivateFieldGet(_buttons, this).length);
        _classPrivateFieldGet(_buttons, this).forEach(function (button) {
          return button.update(options);
        });
      }
    }
  }]);
}();
function _setupShadowDom() {
  var _classPrivateFieldGet2;
  _classPrivateFieldSet(_shadowRoot, this, _classPrivateFieldGet(_sourceLikelyDiv, this).attachShadow({
    mode: 'open'
  }));
  var styleElement = document.createElement('style');
  styleElement.textContent = _shadow_styl__WEBPACK_IMPORTED_MODULE_2__["default"];
  _classPrivateFieldGet(_shadowRoot, this).appendChild(styleElement);
  _classPrivateFieldSet(_shadowLikelyDiv, this, document.createElement('div'));
  (_classPrivateFieldGet2 = _classPrivateFieldGet(_shadowLikelyDiv, this).classList).add.apply(_classPrivateFieldGet2, _toConsumableArray(_classPrivateFieldGet(_sourceLikelyDiv, this).classList));
  _classPrivateFieldGet(_shadowRoot, this).appendChild(_classPrivateFieldGet(_shadowLikelyDiv, this));
}
/**
 * Buttons use it to report that they were successfully connected to the service for counters,
 * and now they ready to be displayed
 */
function _reportReadiness() {
  var _this$awaitedButtons, _this$awaitedButtons2;
  _classPrivateFieldSet(_awaitedButtons, this, (_this$awaitedButtons = _classPrivateFieldGet(_awaitedButtons, this), _this$awaitedButtons2 = _this$awaitedButtons--, _this$awaitedButtons)), _this$awaitedButtons2;
  if (_classPrivateFieldGet(_awaitedButtons, this) === 0) {
    clearTimeout(_classPrivateFieldGet(_readyDelay, this));
    _assertClassBrand(_Likely_brand, this, _ready).call(this);
  }
}
/**
 * Display ready status
 */
function _ready() {
  // Remove class_visible to prevent flickering
  _classPrivateFieldGet(_shadowLikelyDiv, this).classList.remove("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].name, "_visible"));
  _classPrivateFieldGet(_shadowLikelyDiv, this).classList.add("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].name, "_ready"));
}
/**
 * Add a button, private method
 * @param {Node} sourceElement
 */
function _addButton(sourceElement) {
  var button = new _button__WEBPACK_IMPORTED_MODULE_0__["default"](sourceElement, _classPrivateFieldGet(_options, this), _assertClassBrand(_Likely_brand, this, _reportReadiness).bind(this));
  if (button.setService()) {
    var _this$awaitedButtons3, _this$awaitedButtons4;
    _classPrivateFieldSet(_awaitedButtons, this, (_this$awaitedButtons3 = _classPrivateFieldGet(_awaitedButtons, this), _this$awaitedButtons4 = _this$awaitedButtons3++, _this$awaitedButtons3)), _this$awaitedButtons4;
    _classPrivateFieldGet(_buttons, this).push(button);
    button.build();
  }
}
/**
 * Show all the buttons
 */
function _showButtons() {
  var _this = this;
  _classPrivateFieldGet(_buttons, this).forEach(function (button) {
    return _classPrivateFieldGet(_shadowLikelyDiv, _this).appendChild(button.renderedElement);
  });
}


/***/ },

/***/ "./source/shadow.styl"
/*!****************************!*\
  !*** ./source/shadow.styl ***!
  \****************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Style options */
.likely {
  opacity: 0;
  transition: opacity 0.1s ease-in;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0 !important;
  text-indent: 0 !important;
}
.likely * {
  visibility: hidden;
  display: inline-block;
}
.likely_visible,
.likely_ready {
  opacity: 1;
}
.likely_visible *,
.likely_ready * {
  visibility: inherit;
}
.likely__button {
  position: relative;
  cursor: pointer;
  user-select: none;
  color: inherit;
}
.likely__counter {
  display: none;
  position: relative;
  text-align: center;
  background-size: 1px 1px;
  background-repeat: repeat-y;
  background-image: linear-gradient(to right, rgba(0,0,0,0.2) 0, rgba(0,0,0,0) 0.5px, rgba(0,0,0,0) 100%);
}
.likely__widget,
.likely__widget:link,
.likely__widget:visited {
  color: #000;
  background: rgba(231,231,231,0.8);
  transition: background 0.33s ease-out, color 0.33s ease-out, fill 0.33s ease-out;
}
.likely__widget:hover,
.likely__widget:link:hover,
.likely__widget:visited:hover,
.likely__widget:active,
.likely__widget:link:active,
.likely__widget:visited:active,
.likely__widget:focus,
.likely__widget:link:focus,
.likely__widget:visited:focus {
  transition: none;
  cursor: pointer;
}
@media (hover: none) {
  .likely__widget:hover,
  .likely__widget:link:hover,
  .likely__widget:visited:hover,
  .likely__widget:active,
  .likely__widget:link:active,
  .likely__widget:visited:active,
  .likely__widget:focus,
  .likely__widget:link:focus,
  .likely__widget:visited:focus {
    transition: background 0.33s ease-out, color 0.33s ease-out, fill 0.33s ease-out;
    cursor: unset;
  }
}
.likely__icon {
  position: relative;
  text-align: left;
}
.likely svg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.likely__button,
.likely__counter {
  font-weight: normal;
  font-family: Helvetica Neue, Arial, sans-serif;
  text-decoration: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  outline: 0;
  line-height: inherit;
  cursor: inherit;
}
.likely__button:empty {
  display: none;
}
.likely_ready .likely__counter {
  display: inline-block;
}
.likely_ready .likely__counter_empty {
  display: none;
}
.likely__widget,
.likely__widget:link,
.likely__widget:visited,
.likely__icon,
.likely__button,
.likely__counter {
  vertical-align: top;
}
/* Light widget is used for dark theme */
.likely-light .likely__widget,
.likely-dark-theme .likely__widget,
.likely-light .likely__widget:link,
.likely-dark-theme .likely__widget:link,
.likely-light .likely__widget:visited,
.likely-dark-theme .likely__widget:visited {
  color: #fff;
  fill: #fff;
  background: rgba(236,236,236,0.16);
  text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
}
.likely-light .likely__counter,
.likely-dark-theme .likely__counter {
  background-image: linear-gradient(to right, rgba(255,255,255,0.4) 0, rgba(255,255,255,0) 0.5px, rgba(255,255,255,0) 100%);
}
@media (prefers-color-scheme: dark) {
  .likely-color-theme-based .likely__widget,
  .likely-color-theme-based .likely__widget:link,
  .likely-color-theme-based .likely__widget:visited {
    color: #fff;
    fill: #fff;
    background: rgba(236,236,236,0.16);
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
  }
  .likely-color-theme-based .likely__counter {
    background-image: linear-gradient(to right, rgba(255,255,255,0.4) 0, rgba(255,255,255,0) 0.5px, rgba(255,255,255,0) 100%);
  }
}
.likely__widget_facebook,
.likely__widget_facebook:link,
.likely__widget_facebook:visited {
  fill: #0866ff;
}
.likely__widget_facebook:hover,
.likely__widget_facebook:link:hover,
.likely__widget_facebook:visited:hover,
.likely__widget_facebook:active,
.likely__widget_facebook:link:active,
.likely__widget_facebook:visited:active,
.likely__widget_facebook:focus,
.likely__widget_facebook:link:focus,
.likely__widget_facebook:visited:focus {
  background: rgba(193,216,255,0.8);
}
@media (hover: none) {
  .likely__widget_facebook:hover,
  .likely__widget_facebook:link:hover,
  .likely__widget_facebook:visited:hover,
  .likely__widget_facebook:active,
  .likely__widget_facebook:link:active,
  .likely__widget_facebook:visited:active,
  .likely__widget_facebook:focus,
  .likely__widget_facebook:link:focus,
  .likely__widget_facebook:visited:focus {
    transition: widget-transition;
    cursor: unset;
    background: rgba(231,231,231,0.8);
  }
}
.likely-light .likely__widget_facebook:hover,
.likely-dark-theme .likely__widget_facebook:hover,
.likely-light .likely__widget_facebook:link:hover,
.likely-dark-theme .likely__widget_facebook:link:hover,
.likely-light .likely__widget_facebook:visited:hover,
.likely-dark-theme .likely__widget_facebook:visited:hover,
.likely-light .likely__widget_facebook:active,
.likely-dark-theme .likely__widget_facebook:active,
.likely-light .likely__widget_facebook:link:active,
.likely-dark-theme .likely__widget_facebook:link:active,
.likely-light .likely__widget_facebook:visited:active,
.likely-dark-theme .likely__widget_facebook:visited:active,
.likely-light .likely__widget_facebook:focus,
.likely-dark-theme .likely__widget_facebook:focus,
.likely-light .likely__widget_facebook:link:focus,
.likely-dark-theme .likely__widget_facebook:link:focus,
.likely-light .likely__widget_facebook:visited:focus,
.likely-dark-theme .likely__widget_facebook:visited:focus {
  text-shadow: #0866ff 0 0 0.25em;
  background: rgba(8,102,255,0.7);
}
@media (hover: none) {
  .likely-light .likely__widget_facebook:hover,
  .likely-dark-theme .likely__widget_facebook:hover,
  .likely-light .likely__widget_facebook:link:hover,
  .likely-dark-theme .likely__widget_facebook:link:hover,
  .likely-light .likely__widget_facebook:visited:hover,
  .likely-dark-theme .likely__widget_facebook:visited:hover,
  .likely-light .likely__widget_facebook:active,
  .likely-dark-theme .likely__widget_facebook:active,
  .likely-light .likely__widget_facebook:link:active,
  .likely-dark-theme .likely__widget_facebook:link:active,
  .likely-light .likely__widget_facebook:visited:active,
  .likely-dark-theme .likely__widget_facebook:visited:active,
  .likely-light .likely__widget_facebook:focus,
  .likely-dark-theme .likely__widget_facebook:focus,
  .likely-light .likely__widget_facebook:link:focus,
  .likely-dark-theme .likely__widget_facebook:link:focus,
  .likely-light .likely__widget_facebook:visited:focus,
  .likely-dark-theme .likely__widget_facebook:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
@media (prefers-color-scheme: dark) {
  .likely-color-theme-based .likely__widget_facebook:hover,
  .likely-color-theme-based .likely__widget_facebook:link:hover,
  .likely-color-theme-based .likely__widget_facebook:visited:hover,
  .likely-color-theme-based .likely__widget_facebook:active,
  .likely-color-theme-based .likely__widget_facebook:link:active,
  .likely-color-theme-based .likely__widget_facebook:visited:active,
  .likely-color-theme-based .likely__widget_facebook:focus,
  .likely-color-theme-based .likely__widget_facebook:link:focus,
  .likely-color-theme-based .likely__widget_facebook:visited:focus {
    text-shadow: #0866ff 0 0 0.25em;
    background: rgba(8,102,255,0.7);
  }
}
@media (prefers-color-scheme: dark) and (hover: none) {
  .likely-color-theme-based .likely__widget_facebook:hover,
  .likely-color-theme-based .likely__widget_facebook:link:hover,
  .likely-color-theme-based .likely__widget_facebook:visited:hover,
  .likely-color-theme-based .likely__widget_facebook:active,
  .likely-color-theme-based .likely__widget_facebook:link:active,
  .likely-color-theme-based .likely__widget_facebook:visited:active,
  .likely-color-theme-based .likely__widget_facebook:focus,
  .likely-color-theme-based .likely__widget_facebook:link:focus,
  .likely-color-theme-based .likely__widget_facebook:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
.likely__widget_linkedin,
.likely__widget_linkedin:link,
.likely__widget_linkedin:visited {
  fill: #0a66c2;
}
.likely__widget_linkedin:hover,
.likely__widget_linkedin:link:hover,
.likely__widget_linkedin:visited:hover,
.likely__widget_linkedin:active,
.likely__widget_linkedin:link:active,
.likely__widget_linkedin:visited:active,
.likely__widget_linkedin:focus,
.likely__widget_linkedin:link:focus,
.likely__widget_linkedin:visited:focus {
  background: rgba(193,216,239,0.8);
}
@media (hover: none) {
  .likely__widget_linkedin:hover,
  .likely__widget_linkedin:link:hover,
  .likely__widget_linkedin:visited:hover,
  .likely__widget_linkedin:active,
  .likely__widget_linkedin:link:active,
  .likely__widget_linkedin:visited:active,
  .likely__widget_linkedin:focus,
  .likely__widget_linkedin:link:focus,
  .likely__widget_linkedin:visited:focus {
    transition: widget-transition;
    cursor: unset;
    background: rgba(231,231,231,0.8);
  }
}
.likely-light .likely__widget_linkedin:hover,
.likely-dark-theme .likely__widget_linkedin:hover,
.likely-light .likely__widget_linkedin:link:hover,
.likely-dark-theme .likely__widget_linkedin:link:hover,
.likely-light .likely__widget_linkedin:visited:hover,
.likely-dark-theme .likely__widget_linkedin:visited:hover,
.likely-light .likely__widget_linkedin:active,
.likely-dark-theme .likely__widget_linkedin:active,
.likely-light .likely__widget_linkedin:link:active,
.likely-dark-theme .likely__widget_linkedin:link:active,
.likely-light .likely__widget_linkedin:visited:active,
.likely-dark-theme .likely__widget_linkedin:visited:active,
.likely-light .likely__widget_linkedin:focus,
.likely-dark-theme .likely__widget_linkedin:focus,
.likely-light .likely__widget_linkedin:link:focus,
.likely-dark-theme .likely__widget_linkedin:link:focus,
.likely-light .likely__widget_linkedin:visited:focus,
.likely-dark-theme .likely__widget_linkedin:visited:focus {
  text-shadow: #0a66c2 0 0 0.25em;
  background: rgba(10,102,194,0.7);
}
@media (hover: none) {
  .likely-light .likely__widget_linkedin:hover,
  .likely-dark-theme .likely__widget_linkedin:hover,
  .likely-light .likely__widget_linkedin:link:hover,
  .likely-dark-theme .likely__widget_linkedin:link:hover,
  .likely-light .likely__widget_linkedin:visited:hover,
  .likely-dark-theme .likely__widget_linkedin:visited:hover,
  .likely-light .likely__widget_linkedin:active,
  .likely-dark-theme .likely__widget_linkedin:active,
  .likely-light .likely__widget_linkedin:link:active,
  .likely-dark-theme .likely__widget_linkedin:link:active,
  .likely-light .likely__widget_linkedin:visited:active,
  .likely-dark-theme .likely__widget_linkedin:visited:active,
  .likely-light .likely__widget_linkedin:focus,
  .likely-dark-theme .likely__widget_linkedin:focus,
  .likely-light .likely__widget_linkedin:link:focus,
  .likely-dark-theme .likely__widget_linkedin:link:focus,
  .likely-light .likely__widget_linkedin:visited:focus,
  .likely-dark-theme .likely__widget_linkedin:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
@media (prefers-color-scheme: dark) {
  .likely-color-theme-based .likely__widget_linkedin:hover,
  .likely-color-theme-based .likely__widget_linkedin:link:hover,
  .likely-color-theme-based .likely__widget_linkedin:visited:hover,
  .likely-color-theme-based .likely__widget_linkedin:active,
  .likely-color-theme-based .likely__widget_linkedin:link:active,
  .likely-color-theme-based .likely__widget_linkedin:visited:active,
  .likely-color-theme-based .likely__widget_linkedin:focus,
  .likely-color-theme-based .likely__widget_linkedin:link:focus,
  .likely-color-theme-based .likely__widget_linkedin:visited:focus {
    text-shadow: #0a66c2 0 0 0.25em;
    background: rgba(10,102,194,0.7);
  }
}
@media (prefers-color-scheme: dark) and (hover: none) {
  .likely-color-theme-based .likely__widget_linkedin:hover,
  .likely-color-theme-based .likely__widget_linkedin:link:hover,
  .likely-color-theme-based .likely__widget_linkedin:visited:hover,
  .likely-color-theme-based .likely__widget_linkedin:active,
  .likely-color-theme-based .likely__widget_linkedin:link:active,
  .likely-color-theme-based .likely__widget_linkedin:visited:active,
  .likely-color-theme-based .likely__widget_linkedin:focus,
  .likely-color-theme-based .likely__widget_linkedin:link:focus,
  .likely-color-theme-based .likely__widget_linkedin:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
.likely__widget_odnoklassniki,
.likely__widget_odnoklassniki:link,
.likely__widget_odnoklassniki:visited {
  fill: #f70;
}
.likely__widget_odnoklassniki:hover,
.likely__widget_odnoklassniki:link:hover,
.likely__widget_odnoklassniki:visited:hover,
.likely__widget_odnoklassniki:active,
.likely__widget_odnoklassniki:link:active,
.likely__widget_odnoklassniki:visited:active,
.likely__widget_odnoklassniki:focus,
.likely__widget_odnoklassniki:link:focus,
.likely__widget_odnoklassniki:visited:focus {
  background: rgba(255,221,191,0.8);
}
@media (hover: none) {
  .likely__widget_odnoklassniki:hover,
  .likely__widget_odnoklassniki:link:hover,
  .likely__widget_odnoklassniki:visited:hover,
  .likely__widget_odnoklassniki:active,
  .likely__widget_odnoklassniki:link:active,
  .likely__widget_odnoklassniki:visited:active,
  .likely__widget_odnoklassniki:focus,
  .likely__widget_odnoklassniki:link:focus,
  .likely__widget_odnoklassniki:visited:focus {
    transition: widget-transition;
    cursor: unset;
    background: rgba(231,231,231,0.8);
  }
}
.likely-light .likely__widget_odnoklassniki:hover,
.likely-dark-theme .likely__widget_odnoklassniki:hover,
.likely-light .likely__widget_odnoklassniki:link:hover,
.likely-dark-theme .likely__widget_odnoklassniki:link:hover,
.likely-light .likely__widget_odnoklassniki:visited:hover,
.likely-dark-theme .likely__widget_odnoklassniki:visited:hover,
.likely-light .likely__widget_odnoklassniki:active,
.likely-dark-theme .likely__widget_odnoklassniki:active,
.likely-light .likely__widget_odnoklassniki:link:active,
.likely-dark-theme .likely__widget_odnoklassniki:link:active,
.likely-light .likely__widget_odnoklassniki:visited:active,
.likely-dark-theme .likely__widget_odnoklassniki:visited:active,
.likely-light .likely__widget_odnoklassniki:focus,
.likely-dark-theme .likely__widget_odnoklassniki:focus,
.likely-light .likely__widget_odnoklassniki:link:focus,
.likely-dark-theme .likely__widget_odnoklassniki:link:focus,
.likely-light .likely__widget_odnoklassniki:visited:focus,
.likely-dark-theme .likely__widget_odnoklassniki:visited:focus {
  text-shadow: #f70 0 0 0.25em;
  background: rgba(255,119,0,0.7);
}
@media (hover: none) {
  .likely-light .likely__widget_odnoklassniki:hover,
  .likely-dark-theme .likely__widget_odnoklassniki:hover,
  .likely-light .likely__widget_odnoklassniki:link:hover,
  .likely-dark-theme .likely__widget_odnoklassniki:link:hover,
  .likely-light .likely__widget_odnoklassniki:visited:hover,
  .likely-dark-theme .likely__widget_odnoklassniki:visited:hover,
  .likely-light .likely__widget_odnoklassniki:active,
  .likely-dark-theme .likely__widget_odnoklassniki:active,
  .likely-light .likely__widget_odnoklassniki:link:active,
  .likely-dark-theme .likely__widget_odnoklassniki:link:active,
  .likely-light .likely__widget_odnoklassniki:visited:active,
  .likely-dark-theme .likely__widget_odnoklassniki:visited:active,
  .likely-light .likely__widget_odnoklassniki:focus,
  .likely-dark-theme .likely__widget_odnoklassniki:focus,
  .likely-light .likely__widget_odnoklassniki:link:focus,
  .likely-dark-theme .likely__widget_odnoklassniki:link:focus,
  .likely-light .likely__widget_odnoklassniki:visited:focus,
  .likely-dark-theme .likely__widget_odnoklassniki:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
@media (prefers-color-scheme: dark) {
  .likely-color-theme-based .likely__widget_odnoklassniki:hover,
  .likely-color-theme-based .likely__widget_odnoklassniki:link:hover,
  .likely-color-theme-based .likely__widget_odnoklassniki:visited:hover,
  .likely-color-theme-based .likely__widget_odnoklassniki:active,
  .likely-color-theme-based .likely__widget_odnoklassniki:link:active,
  .likely-color-theme-based .likely__widget_odnoklassniki:visited:active,
  .likely-color-theme-based .likely__widget_odnoklassniki:focus,
  .likely-color-theme-based .likely__widget_odnoklassniki:link:focus,
  .likely-color-theme-based .likely__widget_odnoklassniki:visited:focus {
    text-shadow: #f70 0 0 0.25em;
    background: rgba(255,119,0,0.7);
  }
}
@media (prefers-color-scheme: dark) and (hover: none) {
  .likely-color-theme-based .likely__widget_odnoklassniki:hover,
  .likely-color-theme-based .likely__widget_odnoklassniki:link:hover,
  .likely-color-theme-based .likely__widget_odnoklassniki:visited:hover,
  .likely-color-theme-based .likely__widget_odnoklassniki:active,
  .likely-color-theme-based .likely__widget_odnoklassniki:link:active,
  .likely-color-theme-based .likely__widget_odnoklassniki:visited:active,
  .likely-color-theme-based .likely__widget_odnoklassniki:focus,
  .likely-color-theme-based .likely__widget_odnoklassniki:link:focus,
  .likely-color-theme-based .likely__widget_odnoklassniki:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
.likely__widget_pinterest,
.likely__widget_pinterest:link,
.likely__widget_pinterest:visited {
  fill: #e60019;
}
.likely__widget_pinterest:hover,
.likely__widget_pinterest:link:hover,
.likely__widget_pinterest:visited:hover,
.likely__widget_pinterest:active,
.likely__widget_pinterest:link:active,
.likely__widget_pinterest:visited:active,
.likely__widget_pinterest:focus,
.likely__widget_pinterest:link:focus,
.likely__widget_pinterest:visited:focus {
  background: rgba(248,191,197,0.8);
}
@media (hover: none) {
  .likely__widget_pinterest:hover,
  .likely__widget_pinterest:link:hover,
  .likely__widget_pinterest:visited:hover,
  .likely__widget_pinterest:active,
  .likely__widget_pinterest:link:active,
  .likely__widget_pinterest:visited:active,
  .likely__widget_pinterest:focus,
  .likely__widget_pinterest:link:focus,
  .likely__widget_pinterest:visited:focus {
    transition: widget-transition;
    cursor: unset;
    background: rgba(231,231,231,0.8);
  }
}
.likely-light .likely__widget_pinterest:hover,
.likely-dark-theme .likely__widget_pinterest:hover,
.likely-light .likely__widget_pinterest:link:hover,
.likely-dark-theme .likely__widget_pinterest:link:hover,
.likely-light .likely__widget_pinterest:visited:hover,
.likely-dark-theme .likely__widget_pinterest:visited:hover,
.likely-light .likely__widget_pinterest:active,
.likely-dark-theme .likely__widget_pinterest:active,
.likely-light .likely__widget_pinterest:link:active,
.likely-dark-theme .likely__widget_pinterest:link:active,
.likely-light .likely__widget_pinterest:visited:active,
.likely-dark-theme .likely__widget_pinterest:visited:active,
.likely-light .likely__widget_pinterest:focus,
.likely-dark-theme .likely__widget_pinterest:focus,
.likely-light .likely__widget_pinterest:link:focus,
.likely-dark-theme .likely__widget_pinterest:link:focus,
.likely-light .likely__widget_pinterest:visited:focus,
.likely-dark-theme .likely__widget_pinterest:visited:focus {
  text-shadow: #e60019 0 0 0.25em;
  background: rgba(230,0,25,0.7);
}
@media (hover: none) {
  .likely-light .likely__widget_pinterest:hover,
  .likely-dark-theme .likely__widget_pinterest:hover,
  .likely-light .likely__widget_pinterest:link:hover,
  .likely-dark-theme .likely__widget_pinterest:link:hover,
  .likely-light .likely__widget_pinterest:visited:hover,
  .likely-dark-theme .likely__widget_pinterest:visited:hover,
  .likely-light .likely__widget_pinterest:active,
  .likely-dark-theme .likely__widget_pinterest:active,
  .likely-light .likely__widget_pinterest:link:active,
  .likely-dark-theme .likely__widget_pinterest:link:active,
  .likely-light .likely__widget_pinterest:visited:active,
  .likely-dark-theme .likely__widget_pinterest:visited:active,
  .likely-light .likely__widget_pinterest:focus,
  .likely-dark-theme .likely__widget_pinterest:focus,
  .likely-light .likely__widget_pinterest:link:focus,
  .likely-dark-theme .likely__widget_pinterest:link:focus,
  .likely-light .likely__widget_pinterest:visited:focus,
  .likely-dark-theme .likely__widget_pinterest:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
@media (prefers-color-scheme: dark) {
  .likely-color-theme-based .likely__widget_pinterest:hover,
  .likely-color-theme-based .likely__widget_pinterest:link:hover,
  .likely-color-theme-based .likely__widget_pinterest:visited:hover,
  .likely-color-theme-based .likely__widget_pinterest:active,
  .likely-color-theme-based .likely__widget_pinterest:link:active,
  .likely-color-theme-based .likely__widget_pinterest:visited:active,
  .likely-color-theme-based .likely__widget_pinterest:focus,
  .likely-color-theme-based .likely__widget_pinterest:link:focus,
  .likely-color-theme-based .likely__widget_pinterest:visited:focus {
    text-shadow: #e60019 0 0 0.25em;
    background: rgba(230,0,25,0.7);
  }
}
@media (prefers-color-scheme: dark) and (hover: none) {
  .likely-color-theme-based .likely__widget_pinterest:hover,
  .likely-color-theme-based .likely__widget_pinterest:link:hover,
  .likely-color-theme-based .likely__widget_pinterest:visited:hover,
  .likely-color-theme-based .likely__widget_pinterest:active,
  .likely-color-theme-based .likely__widget_pinterest:link:active,
  .likely-color-theme-based .likely__widget_pinterest:visited:active,
  .likely-color-theme-based .likely__widget_pinterest:focus,
  .likely-color-theme-based .likely__widget_pinterest:link:focus,
  .likely-color-theme-based .likely__widget_pinterest:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
.likely__widget_reddit,
.likely__widget_reddit:link,
.likely__widget_reddit:visited {
  fill: #ff4500;
}
.likely__widget_reddit:hover,
.likely__widget_reddit:link:hover,
.likely__widget_reddit:visited:hover,
.likely__widget_reddit:active,
.likely__widget_reddit:link:active,
.likely__widget_reddit:visited:active,
.likely__widget_reddit:focus,
.likely__widget_reddit:link:focus,
.likely__widget_reddit:visited:focus {
  background: rgba(255,208,191,0.8);
}
@media (hover: none) {
  .likely__widget_reddit:hover,
  .likely__widget_reddit:link:hover,
  .likely__widget_reddit:visited:hover,
  .likely__widget_reddit:active,
  .likely__widget_reddit:link:active,
  .likely__widget_reddit:visited:active,
  .likely__widget_reddit:focus,
  .likely__widget_reddit:link:focus,
  .likely__widget_reddit:visited:focus {
    transition: widget-transition;
    cursor: unset;
    background: rgba(231,231,231,0.8);
  }
}
.likely-light .likely__widget_reddit:hover,
.likely-dark-theme .likely__widget_reddit:hover,
.likely-light .likely__widget_reddit:link:hover,
.likely-dark-theme .likely__widget_reddit:link:hover,
.likely-light .likely__widget_reddit:visited:hover,
.likely-dark-theme .likely__widget_reddit:visited:hover,
.likely-light .likely__widget_reddit:active,
.likely-dark-theme .likely__widget_reddit:active,
.likely-light .likely__widget_reddit:link:active,
.likely-dark-theme .likely__widget_reddit:link:active,
.likely-light .likely__widget_reddit:visited:active,
.likely-dark-theme .likely__widget_reddit:visited:active,
.likely-light .likely__widget_reddit:focus,
.likely-dark-theme .likely__widget_reddit:focus,
.likely-light .likely__widget_reddit:link:focus,
.likely-dark-theme .likely__widget_reddit:link:focus,
.likely-light .likely__widget_reddit:visited:focus,
.likely-dark-theme .likely__widget_reddit:visited:focus {
  text-shadow: #ff4500 0 0 0.25em;
  background: rgba(255,69,0,0.7);
}
@media (hover: none) {
  .likely-light .likely__widget_reddit:hover,
  .likely-dark-theme .likely__widget_reddit:hover,
  .likely-light .likely__widget_reddit:link:hover,
  .likely-dark-theme .likely__widget_reddit:link:hover,
  .likely-light .likely__widget_reddit:visited:hover,
  .likely-dark-theme .likely__widget_reddit:visited:hover,
  .likely-light .likely__widget_reddit:active,
  .likely-dark-theme .likely__widget_reddit:active,
  .likely-light .likely__widget_reddit:link:active,
  .likely-dark-theme .likely__widget_reddit:link:active,
  .likely-light .likely__widget_reddit:visited:active,
  .likely-dark-theme .likely__widget_reddit:visited:active,
  .likely-light .likely__widget_reddit:focus,
  .likely-dark-theme .likely__widget_reddit:focus,
  .likely-light .likely__widget_reddit:link:focus,
  .likely-dark-theme .likely__widget_reddit:link:focus,
  .likely-light .likely__widget_reddit:visited:focus,
  .likely-dark-theme .likely__widget_reddit:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
@media (prefers-color-scheme: dark) {
  .likely-color-theme-based .likely__widget_reddit:hover,
  .likely-color-theme-based .likely__widget_reddit:link:hover,
  .likely-color-theme-based .likely__widget_reddit:visited:hover,
  .likely-color-theme-based .likely__widget_reddit:active,
  .likely-color-theme-based .likely__widget_reddit:link:active,
  .likely-color-theme-based .likely__widget_reddit:visited:active,
  .likely-color-theme-based .likely__widget_reddit:focus,
  .likely-color-theme-based .likely__widget_reddit:link:focus,
  .likely-color-theme-based .likely__widget_reddit:visited:focus {
    text-shadow: #ff4500 0 0 0.25em;
    background: rgba(255,69,0,0.7);
  }
}
@media (prefers-color-scheme: dark) and (hover: none) {
  .likely-color-theme-based .likely__widget_reddit:hover,
  .likely-color-theme-based .likely__widget_reddit:link:hover,
  .likely-color-theme-based .likely__widget_reddit:visited:hover,
  .likely-color-theme-based .likely__widget_reddit:active,
  .likely-color-theme-based .likely__widget_reddit:link:active,
  .likely-color-theme-based .likely__widget_reddit:visited:active,
  .likely-color-theme-based .likely__widget_reddit:focus,
  .likely-color-theme-based .likely__widget_reddit:link:focus,
  .likely-color-theme-based .likely__widget_reddit:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
.likely__widget_telegram,
.likely__widget_telegram:link,
.likely__widget_telegram:visited {
  fill: #35a3dc;
}
.likely__widget_telegram:hover,
.likely__widget_telegram:link:hover,
.likely__widget_telegram:visited:hover,
.likely__widget_telegram:active,
.likely__widget_telegram:link:active,
.likely__widget_telegram:visited:active,
.likely__widget_telegram:focus,
.likely__widget_telegram:link:focus,
.likely__widget_telegram:visited:focus {
  background: rgba(204,232,246,0.8);
}
@media (hover: none) {
  .likely__widget_telegram:hover,
  .likely__widget_telegram:link:hover,
  .likely__widget_telegram:visited:hover,
  .likely__widget_telegram:active,
  .likely__widget_telegram:link:active,
  .likely__widget_telegram:visited:active,
  .likely__widget_telegram:focus,
  .likely__widget_telegram:link:focus,
  .likely__widget_telegram:visited:focus {
    transition: widget-transition;
    cursor: unset;
    background: rgba(231,231,231,0.8);
  }
}
.likely-light .likely__widget_telegram:hover,
.likely-dark-theme .likely__widget_telegram:hover,
.likely-light .likely__widget_telegram:link:hover,
.likely-dark-theme .likely__widget_telegram:link:hover,
.likely-light .likely__widget_telegram:visited:hover,
.likely-dark-theme .likely__widget_telegram:visited:hover,
.likely-light .likely__widget_telegram:active,
.likely-dark-theme .likely__widget_telegram:active,
.likely-light .likely__widget_telegram:link:active,
.likely-dark-theme .likely__widget_telegram:link:active,
.likely-light .likely__widget_telegram:visited:active,
.likely-dark-theme .likely__widget_telegram:visited:active,
.likely-light .likely__widget_telegram:focus,
.likely-dark-theme .likely__widget_telegram:focus,
.likely-light .likely__widget_telegram:link:focus,
.likely-dark-theme .likely__widget_telegram:link:focus,
.likely-light .likely__widget_telegram:visited:focus,
.likely-dark-theme .likely__widget_telegram:visited:focus {
  text-shadow: #35a3dc 0 0 0.25em;
  background: rgba(53,163,220,0.7);
}
@media (hover: none) {
  .likely-light .likely__widget_telegram:hover,
  .likely-dark-theme .likely__widget_telegram:hover,
  .likely-light .likely__widget_telegram:link:hover,
  .likely-dark-theme .likely__widget_telegram:link:hover,
  .likely-light .likely__widget_telegram:visited:hover,
  .likely-dark-theme .likely__widget_telegram:visited:hover,
  .likely-light .likely__widget_telegram:active,
  .likely-dark-theme .likely__widget_telegram:active,
  .likely-light .likely__widget_telegram:link:active,
  .likely-dark-theme .likely__widget_telegram:link:active,
  .likely-light .likely__widget_telegram:visited:active,
  .likely-dark-theme .likely__widget_telegram:visited:active,
  .likely-light .likely__widget_telegram:focus,
  .likely-dark-theme .likely__widget_telegram:focus,
  .likely-light .likely__widget_telegram:link:focus,
  .likely-dark-theme .likely__widget_telegram:link:focus,
  .likely-light .likely__widget_telegram:visited:focus,
  .likely-dark-theme .likely__widget_telegram:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
@media (prefers-color-scheme: dark) {
  .likely-color-theme-based .likely__widget_telegram:hover,
  .likely-color-theme-based .likely__widget_telegram:link:hover,
  .likely-color-theme-based .likely__widget_telegram:visited:hover,
  .likely-color-theme-based .likely__widget_telegram:active,
  .likely-color-theme-based .likely__widget_telegram:link:active,
  .likely-color-theme-based .likely__widget_telegram:visited:active,
  .likely-color-theme-based .likely__widget_telegram:focus,
  .likely-color-theme-based .likely__widget_telegram:link:focus,
  .likely-color-theme-based .likely__widget_telegram:visited:focus {
    text-shadow: #35a3dc 0 0 0.25em;
    background: rgba(53,163,220,0.7);
  }
}
@media (prefers-color-scheme: dark) and (hover: none) {
  .likely-color-theme-based .likely__widget_telegram:hover,
  .likely-color-theme-based .likely__widget_telegram:link:hover,
  .likely-color-theme-based .likely__widget_telegram:visited:hover,
  .likely-color-theme-based .likely__widget_telegram:active,
  .likely-color-theme-based .likely__widget_telegram:link:active,
  .likely-color-theme-based .likely__widget_telegram:visited:active,
  .likely-color-theme-based .likely__widget_telegram:focus,
  .likely-color-theme-based .likely__widget_telegram:link:focus,
  .likely-color-theme-based .likely__widget_telegram:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
.likely__widget_twitter,
.likely__widget_twitter:link,
.likely__widget_twitter:visited {
  fill: #1da1f2;
}
.likely__widget_twitter:hover,
.likely__widget_twitter:link:hover,
.likely__widget_twitter:visited:hover,
.likely__widget_twitter:active,
.likely__widget_twitter:link:active,
.likely__widget_twitter:visited:active,
.likely__widget_twitter:focus,
.likely__widget_twitter:link:focus,
.likely__widget_twitter:visited:focus {
  background: rgba(198,231,251,0.8);
}
@media (hover: none) {
  .likely__widget_twitter:hover,
  .likely__widget_twitter:link:hover,
  .likely__widget_twitter:visited:hover,
  .likely__widget_twitter:active,
  .likely__widget_twitter:link:active,
  .likely__widget_twitter:visited:active,
  .likely__widget_twitter:focus,
  .likely__widget_twitter:link:focus,
  .likely__widget_twitter:visited:focus {
    transition: widget-transition;
    cursor: unset;
    background: rgba(231,231,231,0.8);
  }
}
.likely-light .likely__widget_twitter:hover,
.likely-dark-theme .likely__widget_twitter:hover,
.likely-light .likely__widget_twitter:link:hover,
.likely-dark-theme .likely__widget_twitter:link:hover,
.likely-light .likely__widget_twitter:visited:hover,
.likely-dark-theme .likely__widget_twitter:visited:hover,
.likely-light .likely__widget_twitter:active,
.likely-dark-theme .likely__widget_twitter:active,
.likely-light .likely__widget_twitter:link:active,
.likely-dark-theme .likely__widget_twitter:link:active,
.likely-light .likely__widget_twitter:visited:active,
.likely-dark-theme .likely__widget_twitter:visited:active,
.likely-light .likely__widget_twitter:focus,
.likely-dark-theme .likely__widget_twitter:focus,
.likely-light .likely__widget_twitter:link:focus,
.likely-dark-theme .likely__widget_twitter:link:focus,
.likely-light .likely__widget_twitter:visited:focus,
.likely-dark-theme .likely__widget_twitter:visited:focus {
  text-shadow: #1da1f2 0 0 0.25em;
  background: rgba(29,161,242,0.7);
}
@media (hover: none) {
  .likely-light .likely__widget_twitter:hover,
  .likely-dark-theme .likely__widget_twitter:hover,
  .likely-light .likely__widget_twitter:link:hover,
  .likely-dark-theme .likely__widget_twitter:link:hover,
  .likely-light .likely__widget_twitter:visited:hover,
  .likely-dark-theme .likely__widget_twitter:visited:hover,
  .likely-light .likely__widget_twitter:active,
  .likely-dark-theme .likely__widget_twitter:active,
  .likely-light .likely__widget_twitter:link:active,
  .likely-dark-theme .likely__widget_twitter:link:active,
  .likely-light .likely__widget_twitter:visited:active,
  .likely-dark-theme .likely__widget_twitter:visited:active,
  .likely-light .likely__widget_twitter:focus,
  .likely-dark-theme .likely__widget_twitter:focus,
  .likely-light .likely__widget_twitter:link:focus,
  .likely-dark-theme .likely__widget_twitter:link:focus,
  .likely-light .likely__widget_twitter:visited:focus,
  .likely-dark-theme .likely__widget_twitter:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
@media (prefers-color-scheme: dark) {
  .likely-color-theme-based .likely__widget_twitter:hover,
  .likely-color-theme-based .likely__widget_twitter:link:hover,
  .likely-color-theme-based .likely__widget_twitter:visited:hover,
  .likely-color-theme-based .likely__widget_twitter:active,
  .likely-color-theme-based .likely__widget_twitter:link:active,
  .likely-color-theme-based .likely__widget_twitter:visited:active,
  .likely-color-theme-based .likely__widget_twitter:focus,
  .likely-color-theme-based .likely__widget_twitter:link:focus,
  .likely-color-theme-based .likely__widget_twitter:visited:focus {
    text-shadow: #1da1f2 0 0 0.25em;
    background: rgba(29,161,242,0.7);
  }
}
@media (prefers-color-scheme: dark) and (hover: none) {
  .likely-color-theme-based .likely__widget_twitter:hover,
  .likely-color-theme-based .likely__widget_twitter:link:hover,
  .likely-color-theme-based .likely__widget_twitter:visited:hover,
  .likely-color-theme-based .likely__widget_twitter:active,
  .likely-color-theme-based .likely__widget_twitter:link:active,
  .likely-color-theme-based .likely__widget_twitter:visited:active,
  .likely-color-theme-based .likely__widget_twitter:focus,
  .likely-color-theme-based .likely__widget_twitter:link:focus,
  .likely-color-theme-based .likely__widget_twitter:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
.likely__widget_viber,
.likely__widget_viber:link,
.likely__widget_viber:visited {
  fill: #7360f2;
}
.likely__widget_viber:hover,
.likely__widget_viber:link:hover,
.likely__widget_viber:visited:hover,
.likely__widget_viber:active,
.likely__widget_viber:link:active,
.likely__widget_viber:visited:active,
.likely__widget_viber:focus,
.likely__widget_viber:link:focus,
.likely__widget_viber:visited:focus {
  background: rgba(220,215,251,0.8);
}
@media (hover: none) {
  .likely__widget_viber:hover,
  .likely__widget_viber:link:hover,
  .likely__widget_viber:visited:hover,
  .likely__widget_viber:active,
  .likely__widget_viber:link:active,
  .likely__widget_viber:visited:active,
  .likely__widget_viber:focus,
  .likely__widget_viber:link:focus,
  .likely__widget_viber:visited:focus {
    transition: widget-transition;
    cursor: unset;
    background: rgba(231,231,231,0.8);
  }
}
.likely-light .likely__widget_viber:hover,
.likely-dark-theme .likely__widget_viber:hover,
.likely-light .likely__widget_viber:link:hover,
.likely-dark-theme .likely__widget_viber:link:hover,
.likely-light .likely__widget_viber:visited:hover,
.likely-dark-theme .likely__widget_viber:visited:hover,
.likely-light .likely__widget_viber:active,
.likely-dark-theme .likely__widget_viber:active,
.likely-light .likely__widget_viber:link:active,
.likely-dark-theme .likely__widget_viber:link:active,
.likely-light .likely__widget_viber:visited:active,
.likely-dark-theme .likely__widget_viber:visited:active,
.likely-light .likely__widget_viber:focus,
.likely-dark-theme .likely__widget_viber:focus,
.likely-light .likely__widget_viber:link:focus,
.likely-dark-theme .likely__widget_viber:link:focus,
.likely-light .likely__widget_viber:visited:focus,
.likely-dark-theme .likely__widget_viber:visited:focus {
  text-shadow: #7360f2 0 0 0.25em;
  background: rgba(115,96,242,0.7);
}
@media (hover: none) {
  .likely-light .likely__widget_viber:hover,
  .likely-dark-theme .likely__widget_viber:hover,
  .likely-light .likely__widget_viber:link:hover,
  .likely-dark-theme .likely__widget_viber:link:hover,
  .likely-light .likely__widget_viber:visited:hover,
  .likely-dark-theme .likely__widget_viber:visited:hover,
  .likely-light .likely__widget_viber:active,
  .likely-dark-theme .likely__widget_viber:active,
  .likely-light .likely__widget_viber:link:active,
  .likely-dark-theme .likely__widget_viber:link:active,
  .likely-light .likely__widget_viber:visited:active,
  .likely-dark-theme .likely__widget_viber:visited:active,
  .likely-light .likely__widget_viber:focus,
  .likely-dark-theme .likely__widget_viber:focus,
  .likely-light .likely__widget_viber:link:focus,
  .likely-dark-theme .likely__widget_viber:link:focus,
  .likely-light .likely__widget_viber:visited:focus,
  .likely-dark-theme .likely__widget_viber:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
@media (prefers-color-scheme: dark) {
  .likely-color-theme-based .likely__widget_viber:hover,
  .likely-color-theme-based .likely__widget_viber:link:hover,
  .likely-color-theme-based .likely__widget_viber:visited:hover,
  .likely-color-theme-based .likely__widget_viber:active,
  .likely-color-theme-based .likely__widget_viber:link:active,
  .likely-color-theme-based .likely__widget_viber:visited:active,
  .likely-color-theme-based .likely__widget_viber:focus,
  .likely-color-theme-based .likely__widget_viber:link:focus,
  .likely-color-theme-based .likely__widget_viber:visited:focus {
    text-shadow: #7360f2 0 0 0.25em;
    background: rgba(115,96,242,0.7);
  }
}
@media (prefers-color-scheme: dark) and (hover: none) {
  .likely-color-theme-based .likely__widget_viber:hover,
  .likely-color-theme-based .likely__widget_viber:link:hover,
  .likely-color-theme-based .likely__widget_viber:visited:hover,
  .likely-color-theme-based .likely__widget_viber:active,
  .likely-color-theme-based .likely__widget_viber:link:active,
  .likely-color-theme-based .likely__widget_viber:visited:active,
  .likely-color-theme-based .likely__widget_viber:focus,
  .likely-color-theme-based .likely__widget_viber:link:focus,
  .likely-color-theme-based .likely__widget_viber:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
.likely__widget_vkontakte,
.likely__widget_vkontakte:link,
.likely__widget_vkontakte:visited {
  fill: #07f;
}
.likely__widget_vkontakte:hover,
.likely__widget_vkontakte:link:hover,
.likely__widget_vkontakte:visited:hover,
.likely__widget_vkontakte:active,
.likely__widget_vkontakte:link:active,
.likely__widget_vkontakte:visited:active,
.likely__widget_vkontakte:focus,
.likely__widget_vkontakte:link:focus,
.likely__widget_vkontakte:visited:focus {
  background: rgba(191,221,255,0.8);
}
@media (hover: none) {
  .likely__widget_vkontakte:hover,
  .likely__widget_vkontakte:link:hover,
  .likely__widget_vkontakte:visited:hover,
  .likely__widget_vkontakte:active,
  .likely__widget_vkontakte:link:active,
  .likely__widget_vkontakte:visited:active,
  .likely__widget_vkontakte:focus,
  .likely__widget_vkontakte:link:focus,
  .likely__widget_vkontakte:visited:focus {
    transition: widget-transition;
    cursor: unset;
    background: rgba(231,231,231,0.8);
  }
}
.likely-light .likely__widget_vkontakte:hover,
.likely-dark-theme .likely__widget_vkontakte:hover,
.likely-light .likely__widget_vkontakte:link:hover,
.likely-dark-theme .likely__widget_vkontakte:link:hover,
.likely-light .likely__widget_vkontakte:visited:hover,
.likely-dark-theme .likely__widget_vkontakte:visited:hover,
.likely-light .likely__widget_vkontakte:active,
.likely-dark-theme .likely__widget_vkontakte:active,
.likely-light .likely__widget_vkontakte:link:active,
.likely-dark-theme .likely__widget_vkontakte:link:active,
.likely-light .likely__widget_vkontakte:visited:active,
.likely-dark-theme .likely__widget_vkontakte:visited:active,
.likely-light .likely__widget_vkontakte:focus,
.likely-dark-theme .likely__widget_vkontakte:focus,
.likely-light .likely__widget_vkontakte:link:focus,
.likely-dark-theme .likely__widget_vkontakte:link:focus,
.likely-light .likely__widget_vkontakte:visited:focus,
.likely-dark-theme .likely__widget_vkontakte:visited:focus {
  text-shadow: #07f 0 0 0.25em;
  background: rgba(0,119,255,0.7);
}
@media (hover: none) {
  .likely-light .likely__widget_vkontakte:hover,
  .likely-dark-theme .likely__widget_vkontakte:hover,
  .likely-light .likely__widget_vkontakte:link:hover,
  .likely-dark-theme .likely__widget_vkontakte:link:hover,
  .likely-light .likely__widget_vkontakte:visited:hover,
  .likely-dark-theme .likely__widget_vkontakte:visited:hover,
  .likely-light .likely__widget_vkontakte:active,
  .likely-dark-theme .likely__widget_vkontakte:active,
  .likely-light .likely__widget_vkontakte:link:active,
  .likely-dark-theme .likely__widget_vkontakte:link:active,
  .likely-light .likely__widget_vkontakte:visited:active,
  .likely-dark-theme .likely__widget_vkontakte:visited:active,
  .likely-light .likely__widget_vkontakte:focus,
  .likely-dark-theme .likely__widget_vkontakte:focus,
  .likely-light .likely__widget_vkontakte:link:focus,
  .likely-dark-theme .likely__widget_vkontakte:link:focus,
  .likely-light .likely__widget_vkontakte:visited:focus,
  .likely-dark-theme .likely__widget_vkontakte:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
@media (prefers-color-scheme: dark) {
  .likely-color-theme-based .likely__widget_vkontakte:hover,
  .likely-color-theme-based .likely__widget_vkontakte:link:hover,
  .likely-color-theme-based .likely__widget_vkontakte:visited:hover,
  .likely-color-theme-based .likely__widget_vkontakte:active,
  .likely-color-theme-based .likely__widget_vkontakte:link:active,
  .likely-color-theme-based .likely__widget_vkontakte:visited:active,
  .likely-color-theme-based .likely__widget_vkontakte:focus,
  .likely-color-theme-based .likely__widget_vkontakte:link:focus,
  .likely-color-theme-based .likely__widget_vkontakte:visited:focus {
    text-shadow: #07f 0 0 0.25em;
    background: rgba(0,119,255,0.7);
  }
}
@media (prefers-color-scheme: dark) and (hover: none) {
  .likely-color-theme-based .likely__widget_vkontakte:hover,
  .likely-color-theme-based .likely__widget_vkontakte:link:hover,
  .likely-color-theme-based .likely__widget_vkontakte:visited:hover,
  .likely-color-theme-based .likely__widget_vkontakte:active,
  .likely-color-theme-based .likely__widget_vkontakte:link:active,
  .likely-color-theme-based .likely__widget_vkontakte:visited:active,
  .likely-color-theme-based .likely__widget_vkontakte:focus,
  .likely-color-theme-based .likely__widget_vkontakte:link:focus,
  .likely-color-theme-based .likely__widget_vkontakte:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
.likely__widget_whatsapp,
.likely__widget_whatsapp:link,
.likely__widget_whatsapp:visited {
  fill: #25d366;
}
.likely__widget_whatsapp:hover,
.likely__widget_whatsapp:link:hover,
.likely__widget_whatsapp:visited:hover,
.likely__widget_whatsapp:active,
.likely__widget_whatsapp:link:active,
.likely__widget_whatsapp:visited:active,
.likely__widget_whatsapp:focus,
.likely__widget_whatsapp:link:focus,
.likely__widget_whatsapp:visited:focus {
  background: rgba(200,244,216,0.8);
}
@media (hover: none) {
  .likely__widget_whatsapp:hover,
  .likely__widget_whatsapp:link:hover,
  .likely__widget_whatsapp:visited:hover,
  .likely__widget_whatsapp:active,
  .likely__widget_whatsapp:link:active,
  .likely__widget_whatsapp:visited:active,
  .likely__widget_whatsapp:focus,
  .likely__widget_whatsapp:link:focus,
  .likely__widget_whatsapp:visited:focus {
    transition: widget-transition;
    cursor: unset;
    background: rgba(231,231,231,0.8);
  }
}
.likely-light .likely__widget_whatsapp:hover,
.likely-dark-theme .likely__widget_whatsapp:hover,
.likely-light .likely__widget_whatsapp:link:hover,
.likely-dark-theme .likely__widget_whatsapp:link:hover,
.likely-light .likely__widget_whatsapp:visited:hover,
.likely-dark-theme .likely__widget_whatsapp:visited:hover,
.likely-light .likely__widget_whatsapp:active,
.likely-dark-theme .likely__widget_whatsapp:active,
.likely-light .likely__widget_whatsapp:link:active,
.likely-dark-theme .likely__widget_whatsapp:link:active,
.likely-light .likely__widget_whatsapp:visited:active,
.likely-dark-theme .likely__widget_whatsapp:visited:active,
.likely-light .likely__widget_whatsapp:focus,
.likely-dark-theme .likely__widget_whatsapp:focus,
.likely-light .likely__widget_whatsapp:link:focus,
.likely-dark-theme .likely__widget_whatsapp:link:focus,
.likely-light .likely__widget_whatsapp:visited:focus,
.likely-dark-theme .likely__widget_whatsapp:visited:focus {
  text-shadow: #25d366 0 0 0.25em;
  background: rgba(37,211,102,0.7);
}
@media (hover: none) {
  .likely-light .likely__widget_whatsapp:hover,
  .likely-dark-theme .likely__widget_whatsapp:hover,
  .likely-light .likely__widget_whatsapp:link:hover,
  .likely-dark-theme .likely__widget_whatsapp:link:hover,
  .likely-light .likely__widget_whatsapp:visited:hover,
  .likely-dark-theme .likely__widget_whatsapp:visited:hover,
  .likely-light .likely__widget_whatsapp:active,
  .likely-dark-theme .likely__widget_whatsapp:active,
  .likely-light .likely__widget_whatsapp:link:active,
  .likely-dark-theme .likely__widget_whatsapp:link:active,
  .likely-light .likely__widget_whatsapp:visited:active,
  .likely-dark-theme .likely__widget_whatsapp:visited:active,
  .likely-light .likely__widget_whatsapp:focus,
  .likely-dark-theme .likely__widget_whatsapp:focus,
  .likely-light .likely__widget_whatsapp:link:focus,
  .likely-dark-theme .likely__widget_whatsapp:link:focus,
  .likely-light .likely__widget_whatsapp:visited:focus,
  .likely-dark-theme .likely__widget_whatsapp:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
@media (prefers-color-scheme: dark) {
  .likely-color-theme-based .likely__widget_whatsapp:hover,
  .likely-color-theme-based .likely__widget_whatsapp:link:hover,
  .likely-color-theme-based .likely__widget_whatsapp:visited:hover,
  .likely-color-theme-based .likely__widget_whatsapp:active,
  .likely-color-theme-based .likely__widget_whatsapp:link:active,
  .likely-color-theme-based .likely__widget_whatsapp:visited:active,
  .likely-color-theme-based .likely__widget_whatsapp:focus,
  .likely-color-theme-based .likely__widget_whatsapp:link:focus,
  .likely-color-theme-based .likely__widget_whatsapp:visited:focus {
    text-shadow: #25d366 0 0 0.25em;
    background: rgba(37,211,102,0.7);
  }
}
@media (prefers-color-scheme: dark) and (hover: none) {
  .likely-color-theme-based .likely__widget_whatsapp:hover,
  .likely-color-theme-based .likely__widget_whatsapp:link:hover,
  .likely-color-theme-based .likely__widget_whatsapp:visited:hover,
  .likely-color-theme-based .likely__widget_whatsapp:active,
  .likely-color-theme-based .likely__widget_whatsapp:link:active,
  .likely-color-theme-based .likely__widget_whatsapp:visited:active,
  .likely-color-theme-based .likely__widget_whatsapp:focus,
  .likely-color-theme-based .likely__widget_whatsapp:link:focus,
  .likely-color-theme-based .likely__widget_whatsapp:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
.likely__widget_xcom,
.likely__widget_xcom:link,
.likely__widget_xcom:visited {
  fill: #333;
}
.likely__widget_xcom:hover,
.likely__widget_xcom:link:hover,
.likely__widget_xcom:visited:hover,
.likely__widget_xcom:active,
.likely__widget_xcom:link:active,
.likely__widget_xcom:visited:active,
.likely__widget_xcom:focus,
.likely__widget_xcom:link:focus,
.likely__widget_xcom:visited:focus {
  background: rgba(204,204,204,0.8);
}
@media (hover: none) {
  .likely__widget_xcom:hover,
  .likely__widget_xcom:link:hover,
  .likely__widget_xcom:visited:hover,
  .likely__widget_xcom:active,
  .likely__widget_xcom:link:active,
  .likely__widget_xcom:visited:active,
  .likely__widget_xcom:focus,
  .likely__widget_xcom:link:focus,
  .likely__widget_xcom:visited:focus {
    transition: widget-transition;
    cursor: unset;
    background: rgba(231,231,231,0.8);
  }
}
.likely-light .likely__widget_xcom:hover,
.likely-dark-theme .likely__widget_xcom:hover,
.likely-light .likely__widget_xcom:link:hover,
.likely-dark-theme .likely__widget_xcom:link:hover,
.likely-light .likely__widget_xcom:visited:hover,
.likely-dark-theme .likely__widget_xcom:visited:hover,
.likely-light .likely__widget_xcom:active,
.likely-dark-theme .likely__widget_xcom:active,
.likely-light .likely__widget_xcom:link:active,
.likely-dark-theme .likely__widget_xcom:link:active,
.likely-light .likely__widget_xcom:visited:active,
.likely-dark-theme .likely__widget_xcom:visited:active,
.likely-light .likely__widget_xcom:focus,
.likely-dark-theme .likely__widget_xcom:focus,
.likely-light .likely__widget_xcom:link:focus,
.likely-dark-theme .likely__widget_xcom:link:focus,
.likely-light .likely__widget_xcom:visited:focus,
.likely-dark-theme .likely__widget_xcom:visited:focus {
  text-shadow: #333 0 0 0.25em;
  background: rgba(51,51,51,0.7);
}
@media (hover: none) {
  .likely-light .likely__widget_xcom:hover,
  .likely-dark-theme .likely__widget_xcom:hover,
  .likely-light .likely__widget_xcom:link:hover,
  .likely-dark-theme .likely__widget_xcom:link:hover,
  .likely-light .likely__widget_xcom:visited:hover,
  .likely-dark-theme .likely__widget_xcom:visited:hover,
  .likely-light .likely__widget_xcom:active,
  .likely-dark-theme .likely__widget_xcom:active,
  .likely-light .likely__widget_xcom:link:active,
  .likely-dark-theme .likely__widget_xcom:link:active,
  .likely-light .likely__widget_xcom:visited:active,
  .likely-dark-theme .likely__widget_xcom:visited:active,
  .likely-light .likely__widget_xcom:focus,
  .likely-dark-theme .likely__widget_xcom:focus,
  .likely-light .likely__widget_xcom:link:focus,
  .likely-dark-theme .likely__widget_xcom:link:focus,
  .likely-light .likely__widget_xcom:visited:focus,
  .likely-dark-theme .likely__widget_xcom:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
@media (prefers-color-scheme: dark) {
  .likely-color-theme-based .likely__widget_xcom:hover,
  .likely-color-theme-based .likely__widget_xcom:link:hover,
  .likely-color-theme-based .likely__widget_xcom:visited:hover,
  .likely-color-theme-based .likely__widget_xcom:active,
  .likely-color-theme-based .likely__widget_xcom:link:active,
  .likely-color-theme-based .likely__widget_xcom:visited:active,
  .likely-color-theme-based .likely__widget_xcom:focus,
  .likely-color-theme-based .likely__widget_xcom:link:focus,
  .likely-color-theme-based .likely__widget_xcom:visited:focus {
    text-shadow: #333 0 0 0.25em;
    background: rgba(51,51,51,0.7);
  }
}
@media (prefers-color-scheme: dark) and (hover: none) {
  .likely-color-theme-based .likely__widget_xcom:hover,
  .likely-color-theme-based .likely__widget_xcom:link:hover,
  .likely-color-theme-based .likely__widget_xcom:visited:hover,
  .likely-color-theme-based .likely__widget_xcom:active,
  .likely-color-theme-based .likely__widget_xcom:link:active,
  .likely-color-theme-based .likely__widget_xcom:visited:active,
  .likely-color-theme-based .likely__widget_xcom:focus,
  .likely-color-theme-based .likely__widget_xcom:link:focus,
  .likely-color-theme-based .likely__widget_xcom:visited:focus {
    text-shadow: rgba(0,0,0,0.2) 0 0 0.33em;
    background: rgba(236,236,236,0.16);
  }
}
/* Size options */
.likely {
  gap: 10px;
}
.likely .likely__widget,
.likely .likely__widget:link,
.likely .likely__widget:visited {
  line-height: 20px;
  font-size: 14px;
  border-radius: 3px;
  height: 22px;
}
.likely .likely__icon {
  width: 22px;
  height: 22px;
}
.likely .likely__button {
  padding: 1px 4px 1px 0;
}
.likely .likely__counter {
  padding: 1px 4px;
}
.likely svg {
  width: 16px;
  height: 16px;
}
.likely-big {
  gap: 12px;
}
.likely-big .likely__widget,
.likely-big .likely__widget:link,
.likely-big .likely__widget:visited {
  line-height: 28px;
  font-size: 18px;
  border-radius: 4px;
  height: 32px;
}
.likely-big .likely__icon {
  width: 32px;
  height: 32px;
}
.likely-big .likely__button {
  padding: 2px 6px 2px 0;
}
.likely-big .likely__counter {
  padding: 2px 6px;
}
.likely-big svg {
  width: 24px;
  height: 24px;
}
.likely-small {
  gap: 8px;
}
.likely-small .likely__widget,
.likely-small .likely__widget:link,
.likely-small .likely__widget:visited {
  line-height: 14px;
  font-size: 12px;
  border-radius: 2px;
  height: 18px;
}
.likely-small .likely__icon {
  width: 18px;
  height: 18px;
}
.likely-small .likely__button {
  padding: 2px 3px 2px 0;
}
.likely-small .likely__counter {
  padding: 2px 3px;
}
.likely-small svg {
  width: 12px;
  height: 12px;
}
`, "",{"version":3,"sources":["webpack://./source/shadow.styl"],"names":[],"mappings":"AAAA,kBAAA;AAKA;EAEE,UAAS;EACT,gCAAY;EACZ,oBAAS;EACT,eAAW;EACX,uBAAiB;EACjB,uBAAW;EACX,yBAAa;AAJf;AAME;EACE,kBAAY;EACZ,qBAAS;AAJb;AAOE;;EACE,UAAS;AAJb;AAMI;;EACE,mBAAY;AAHlB;AAOE;EACE,kBAAU;EACV,eAAQ;EACR,iBAAa;EACb,cAAO;AALX;AAQE;EACE,aAAS;EACT,kBAAU;EACV,kBAAY;EACZ,wBAAiB;EACjB,2BAAmB;EACnB,uGAAkB;AANtB;AASE;;;EACE,WAAO;EACP,iCAAY;EACZ,gFAAY;AALhB;AAOI;;;;;;;;;EACE,gBAAY;EACZ,eAAQ;AAGd;AADyB;EAAA;;;;;;;;;IACjB,gFAAY;IACZ,aAAQ;EAYd;AACF;AARE;EACE,kBAAU;EACV,gBAAY;AAUhB;AAPE;EACE,kBAAU;EACV,SAAM;EACN,QAAK;EACL,gCAAW;AASf;AANE;;EAEE,mBAAa;EACb,8CAA2B;EAC3B,qBAAiB;EACjB,kCAAgB;EAChB,mCAAwB;EACxB,kCAAyB;EACzB,SAAQ;EACR,UAAS;EACT,oBAAa;EACb,eAAQ;AAQZ;AALE;EACE,aAAS;AAOb;AAJE;EACE,qBAAS;AAMb;AAHE;EACE,aAAS;AAKb;AAFE;;;;;;EAME,mBAAgB;AAIpB;AAAA,wCAAA;AAsBE;;;;;;EApBA,WAAO;EACP,UAAM;EACN,kCAAY;EACZ,uCAAa;AAOf;AAcE;;EAjBA,yHAAkB;AAOpB;AAekC;EAE9B;;;IA/BF,WAAO;IACP,UAAM;IACN,kCAAY;IACZ,uCAAa;EAoBb;EAYE;IA5BF,yHAAkB;EAmBlB;AACF;AAeE;;;EACE,aAAM;AAXV;AAaI;;;;;;;;;EACE,iCAAY;AAHlB;AAKyB;EAAA;;;;;;;;;IACjB,6BAAY;IACZ,aAAQ;IACR,iCAAY;EAMlB;AACF;AA9CI;;;;;;;;;;;;;;;;;;EACE,+BAA8D;EAC9D,+BAAmE;AAiEzE;AArBuB;EA9CnB;;;;;;;;;;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EAuFvE;AACF;AAxCoC;EAlDhC;;;;;;;;;IACE,+BAA8D;IAC9D,+BAAmE;EAqGvE;AACF;AAjDsD;EAvDlD;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EAmHvE;AACF;AAxFE;;;EACE,aAAM;AA4FV;AA1FI;;;;;;;;;EACE,iCAAY;AAoGlB;AAlGyB;EAAA;;;;;;;;;IACjB,6BAAY;IACZ,aAAQ;IACR,iCAAY;EA6GlB;AACF;AArJI;;;;;;;;;;;;;;;;;;EACE,+BAA8D;EAC9D,gCAAmE;AAwKzE;AA5HuB;EA9CnB;;;;;;;;;;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EA8LvE;AACF;AA/IoC;EAlDhC;;;;;;;;;IACE,+BAA8D;IAC9D,gCAAmE;EA4MvE;AACF;AAxJsD;EAvDlD;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EA0NvE;AACF;AA/LE;;;EACE,UAAM;AAmMV;AAjMI;;;;;;;;;EACE,iCAAY;AA2MlB;AAzMyB;EAAA;;;;;;;;;IACjB,6BAAY;IACZ,aAAQ;IACR,iCAAY;EAoNlB;AACF;AA5PI;;;;;;;;;;;;;;;;;;EACE,4BAA8D;EAC9D,+BAAmE;AA+QzE;AAnOuB;EA9CnB;;;;;;;;;;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EAqSvE;AACF;AAtPoC;EAlDhC;;;;;;;;;IACE,4BAA8D;IAC9D,+BAAmE;EAmTvE;AACF;AA/PsD;EAvDlD;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EAiUvE;AACF;AAtSE;;;EACE,aAAM;AA0SV;AAxSI;;;;;;;;;EACE,iCAAY;AAkTlB;AAhTyB;EAAA;;;;;;;;;IACjB,6BAAY;IACZ,aAAQ;IACR,iCAAY;EA2TlB;AACF;AAnWI;;;;;;;;;;;;;;;;;;EACE,+BAA8D;EAC9D,8BAAmE;AAsXzE;AA1UuB;EA9CnB;;;;;;;;;;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EA4YvE;AACF;AA7VoC;EAlDhC;;;;;;;;;IACE,+BAA8D;IAC9D,8BAAmE;EA0ZvE;AACF;AAtWsD;EAvDlD;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EAwavE;AACF;AA7YE;;;EACE,aAAM;AAiZV;AA/YI;;;;;;;;;EACE,iCAAY;AAyZlB;AAvZyB;EAAA;;;;;;;;;IACjB,6BAAY;IACZ,aAAQ;IACR,iCAAY;EAkalB;AACF;AA1cI;;;;;;;;;;;;;;;;;;EACE,+BAA8D;EAC9D,8BAAmE;AA6dzE;AAjbuB;EA9CnB;;;;;;;;;;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EAmfvE;AACF;AApcoC;EAlDhC;;;;;;;;;IACE,+BAA8D;IAC9D,8BAAmE;EAigBvE;AACF;AA7csD;EAvDlD;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EA+gBvE;AACF;AApfE;;;EACE,aAAM;AAwfV;AAtfI;;;;;;;;;EACE,iCAAY;AAggBlB;AA9fyB;EAAA;;;;;;;;;IACjB,6BAAY;IACZ,aAAQ;IACR,iCAAY;EAygBlB;AACF;AAjjBI;;;;;;;;;;;;;;;;;;EACE,+BAA8D;EAC9D,gCAAmE;AAokBzE;AAxhBuB;EA9CnB;;;;;;;;;;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EA0lBvE;AACF;AA3iBoC;EAlDhC;;;;;;;;;IACE,+BAA8D;IAC9D,gCAAmE;EAwmBvE;AACF;AApjBsD;EAvDlD;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EAsnBvE;AACF;AA3lBE;;;EACE,aAAM;AA+lBV;AA7lBI;;;;;;;;;EACE,iCAAY;AAumBlB;AArmByB;EAAA;;;;;;;;;IACjB,6BAAY;IACZ,aAAQ;IACR,iCAAY;EAgnBlB;AACF;AAxpBI;;;;;;;;;;;;;;;;;;EACE,+BAA8D;EAC9D,gCAAmE;AA2qBzE;AA/nBuB;EA9CnB;;;;;;;;;;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EAisBvE;AACF;AAlpBoC;EAlDhC;;;;;;;;;IACE,+BAA8D;IAC9D,gCAAmE;EA+sBvE;AACF;AA3pBsD;EAvDlD;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EA6tBvE;AACF;AAlsBE;;;EACE,aAAM;AAssBV;AApsBI;;;;;;;;;EACE,iCAAY;AA8sBlB;AA5sByB;EAAA;;;;;;;;;IACjB,6BAAY;IACZ,aAAQ;IACR,iCAAY;EAutBlB;AACF;AA/vBI;;;;;;;;;;;;;;;;;;EACE,+BAA8D;EAC9D,gCAAmE;AAkxBzE;AAtuBuB;EA9CnB;;;;;;;;;;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EAwyBvE;AACF;AAzvBoC;EAlDhC;;;;;;;;;IACE,+BAA8D;IAC9D,gCAAmE;EAszBvE;AACF;AAlwBsD;EAvDlD;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EAo0BvE;AACF;AAzyBE;;;EACE,UAAM;AA6yBV;AA3yBI;;;;;;;;;EACE,iCAAY;AAqzBlB;AAnzByB;EAAA;;;;;;;;;IACjB,6BAAY;IACZ,aAAQ;IACR,iCAAY;EA8zBlB;AACF;AAt2BI;;;;;;;;;;;;;;;;;;EACE,4BAA8D;EAC9D,+BAAmE;AAy3BzE;AA70BuB;EA9CnB;;;;;;;;;;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EA+4BvE;AACF;AAh2BoC;EAlDhC;;;;;;;;;IACE,4BAA8D;IAC9D,+BAAmE;EA65BvE;AACF;AAz2BsD;EAvDlD;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EA26BvE;AACF;AAh5BE;;;EACE,aAAM;AAo5BV;AAl5BI;;;;;;;;;EACE,iCAAY;AA45BlB;AA15ByB;EAAA;;;;;;;;;IACjB,6BAAY;IACZ,aAAQ;IACR,iCAAY;EAq6BlB;AACF;AA78BI;;;;;;;;;;;;;;;;;;EACE,+BAA8D;EAC9D,gCAAmE;AAg+BzE;AAp7BuB;EA9CnB;;;;;;;;;;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EAs/BvE;AACF;AAv8BoC;EAlDhC;;;;;;;;;IACE,+BAA8D;IAC9D,gCAAmE;EAogCvE;AACF;AAh9BsD;EAvDlD;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EAkhCvE;AACF;AAv/BE;;;EACE,UAAM;AA2/BV;AAz/BI;;;;;;;;;EACE,iCAAY;AAmgClB;AAjgCyB;EAAA;;;;;;;;;IACjB,6BAAY;IACZ,aAAQ;IACR,iCAAY;EA4gClB;AACF;AApjCI;;;;;;;;;;;;;;;;;;EACE,4BAA8D;EAC9D,8BAAmE;AAukCzE;AA3hCuB;EA9CnB;;;;;;;;;;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EA6lCvE;AACF;AA9iCoC;EAlDhC;;;;;;;;;IACE,4BAA8D;IAC9D,8BAAmE;EA2mCvE;AACF;AAvjCsD;EAvDlD;;;;;;;;;IACE,uCAA8D;IAC9D,kCAAmE;EAynCvE;AACF;AAljCA,iBAAA;AAEA;EACE,SAAK;AAmjCP;AAjjCE;;;EACE,iBAAa;EACb,eAAW;EACX,kBAAe;EACf,YAAQ;AAqjCZ;AAljCE;EACE,WAAO;EACP,YAAQ;AAojCZ;AAjjCE;EACE,sBAAS;AAmjCb;AAhjCE;EACE,gBAAS;AAkjCb;AA/iCE;EACE,WAAO;EACP,YAAQ;AAijCZ;AA7iCA;EACE,SAAK;AA+iCP;AA7iCE;;;EACE,iBAAa;EACb,eAAW;EACX,kBAAe;EACf,YAAQ;AAijCZ;AA9iCE;EACE,WAAO;EACP,YAAQ;AAgjCZ;AA7iCE;EACE,sBAAS;AA+iCb;AA5iCE;EACE,gBAAS;AA8iCb;AA3iCE;EACE,WAAO;EACP,YAAQ;AA6iCZ;AAziCA;EACE,QAAK;AA2iCP;AAziCE;;;EACE,iBAAa;EACb,eAAW;EACX,kBAAe;EACf,YAAQ;AA6iCZ;AA1iCE;EACE,WAAO;EACP,YAAQ;AA4iCZ;AAziCE;EACE,sBAAS;AA2iCb;AAxiCE;EACE,gBAAS;AA0iCb;AAviCE;EACE,WAAO;EACP,YAAQ;AAyiCZ","sourcesContent":["/* Style options */\nlikely-background = rgba(231, 231, 231, .8);\nlikely-light-background = rgba(236, 236, 236, .16);\nlikely-light-box-shadow = rgba(0, 0, 0, .2) 0 0 .33em;\n\n.likely {\n  // Hide buttons until they are loaded\n  opacity: 0;\n  transition: opacity .1s ease-in;\n  display: inline-flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  font-size: 0 !important;\n  text-indent: 0 !important;\n\n  * {\n    visibility: hidden;\n    display: inline-block;\n  }\n\n  &_visible, &_ready {\n    opacity: 1;\n\n    * {\n      visibility: inherit;\n    }\n  }\n\n  &__button {\n    position: relative;\n    cursor: pointer;\n    user-select: none;\n    color: inherit;\n  }\n\n  &__counter {\n    display: none;\n    position: relative;\n    text-align: center;\n    background-size: 1px 1px;\n    background-repeat: repeat-y;\n    background-image: linear-gradient(to right, rgba(0, 0, 0, .2) 0, rgba(0, 0, 0, 0) .5px, rgba(0, 0, 0, 0) 100%)\n  }\n\n  &__widget, &__widget:link, &__widget:visited {\n    color: #000;\n    background: likely-background;\n    transition: widget-transition = background .33s ease-out, color .33s ease-out, fill .33s ease-out;\n\n    &:hover, &:active, &:focus {\n      transition: none;\n      cursor: pointer;\n\n      @media (hover: none) {\n        transition: widget-transition;\n        cursor: unset;\n      }\n    }\n  }\n\n  &__icon {\n    position: relative;\n    text-align: left;\n  }\n\n  svg {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  &__button,\n  &__counter {\n    font-weight: normal;\n    font-family: Helvetica Neue, Arial, sans-serif;\n    text-decoration: none;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    margin: 0;\n    outline: 0;\n    line-height: inherit;\n    cursor: inherit;\n  }\n\n  &__button:empty {\n    display: none;\n  }\n\n  &_ready &__counter {\n    display: inline-block;\n  }\n\n  &_ready &__counter_empty {\n    display: none;\n  }\n\n  &__widget,\n  &__widget:link,\n  &__widget:visited,\n  &__icon,\n  &__button,\n  &__counter {\n    vertical-align: top;\n  }\n}\n\n/* Light widget is used for dark theme */\nlikely-light-widget() {\n  color: #fff;\n  fill: #fff;\n  background: likely-light-background;\n  text-shadow: likely-light-box-shadow;\n}\n\nlikely-light-counter() {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, .4) 0, rgba(255, 255, 255, 0) .5px, rgba(255, 255, 255, 0) 100%)\n}\n\nlikely-light-button(button, color, media-none = false) {\n  .likely__widget_{button}, .likely__widget_{button}:link, .likely__widget_{button}:visited {\n    &:hover, &:active, &:focus {\n      text-shadow: media-none ? likely-light-box-shadow : color 0 0 .25em;\n      background: media-none ? likely-light-background : alpha(color, 0.7);\n    }\n  }\n}\n\n.likely-light, .likely-dark-theme {\n  .likely__widget, .likely__widget:link, .likely__widget:visited {\n    likely-light-widget()\n  }\n\n  .likely__counter {\n    likely-light-counter()\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .likely-color-theme-based {\n    .likely__widget, .likely__widget:link, .likely__widget:visited {\n      likely-light-widget()\n    }\n\n    .likely__counter {\n      likely-light-counter()\n    }\n  }\n}\n\ncolorize(button, color) {\n  .likely__widget_{button}, .likely__widget_{button}:link, .likely__widget_{button}:visited {\n    fill: color;\n\n    &:hover, &:active, &:focus {\n      background: alpha(mix(#fff, color, 75%), .8);\n\n      @media (hover: none) {\n        transition: widget-transition;\n        cursor: unset;\n        background: likely-background;\n      }\n    }\n  }\n  .likely-light, .likely-dark-theme {\n    likely-light-button(button, color)\n\n    @media (hover: none) {\n      likely-light-button(button, color, true)\n    }\n  }\n  @media (prefers-color-scheme: dark) {\n    .likely-color-theme-based {\n      likely-light-button(button, color)\n    }\n  }\n  @media (prefers-color-scheme: dark) and (hover: none) {\n    .likely-color-theme-based {\n      likely-light-button(button, color, true)\n    }\n  }\n}\n\ncolorize('facebook', #0866FF);\ncolorize('linkedin', #0A66C2);\ncolorize('odnoklassniki', #FF7700);\ncolorize('pinterest', #E60019);\ncolorize('reddit', #FF4500);\ncolorize('telegram', #35A3DC);\ncolorize('twitter', #1DA1F2);\ncolorize('viber', #7360F2);\ncolorize('vkontakte', #0077FF);\ncolorize('whatsapp', #25D366);\ncolorize('xcom', #333333);\n\n/* Size options */\n\n.likely {\n  gap: 10px;\n\n  .likely__widget, .likely__widget:link, .likely__widget:visited {\n    line-height: 20px;\n    font-size: 14px;\n    border-radius: 3px;\n    height: 22px;\n  }\n\n  .likely__icon {\n    width: 22px;\n    height: 22px;\n  }\n\n  .likely__button {\n    padding: 1px 4px 1px 0;\n  }\n\n  .likely__counter {\n    padding: 1px 4px;\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n}\n\n.likely-big {\n  gap: 12px;\n\n  .likely__widget, .likely__widget:link, .likely__widget:visited {\n    line-height: 28px;\n    font-size: 18px;\n    border-radius: 4px;\n    height: 32px;\n  }\n\n  .likely__icon {\n    width: 32px;\n    height: 32px;\n  }\n\n  .likely__button {\n    padding: 2px 6px 2px 0;\n  }\n\n  .likely__counter {\n    padding: 2px 6px;\n  }\n\n  svg {\n    width: 24px;\n    height: 24px;\n  }\n}\n\n.likely-small {\n  gap: 8px;\n\n  .likely__widget, .likely__widget:link, .likely__widget:visited {\n    line-height: 14px;\n    font-size: 12px;\n    border-radius: 2px;\n    height: 18px;\n  }\n\n  .likely__icon {\n    width: 18px;\n    height: 18px;\n  }\n\n  .likely__button {\n    padding: 2px 3px 2px 0;\n  }\n\n  .likely__counter {\n    padding: 2px 3px;\n  }\n\n  svg {\n    width: 12px;\n    height: 12px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___.toString());


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./source/likely-commonjs.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=likely-commonjs.js.map