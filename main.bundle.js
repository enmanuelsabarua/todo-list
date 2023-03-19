/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    height: 100%;\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\nh1 {\n    font-size: 3rem;\n}\n\nheader {\n    background-color: #d1453b;\n    color: white;\n    padding: 1rem 2rem;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    height: 100%; \n}\n\naside {\n    background-color: #ececec;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n}\n\naside a {\n    text-decoration: none;\n    color: black;\n}\n\n.menu-link {\n    padding: .8rem .8rem;\n    border-radius: 10px;\n    transition: .1s;\n}\n\n.menu-link:hover {\n    background-color: #c7c7c7;\n}\n\n.active {\n    background-color: #c7c7c7;\n}\n\n.projects {\n    margin-top: 1rem;\n}\n\n.projects:hover h3 {\n    background-color: #c7c7c7;\n}\n\n.projects h3 {\n    padding: .8rem 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: rgba(0,0,0,0.56);\n    border-radius: 10px;\n    transition: .1s;\n}\n\n.projects a {\n    font-size: 1.1rem;\n    opacity: 0;\n    transition: .2s;\n    color: rgba(0,0,0,0.56);\n}\n\naside:hover .projects a {\n    opacity: 1;\n}\n\nmain {\n    padding: 1rem 3rem;\n    max-width: 800px;\n}\n\nmain h2 {\n    margin-bottom: 1rem;\n}\n\nmain a {\n    text-decoration: none;\n    color: #808080;\n    font-size: .9rem;\n}\n\nmain i {\n    margin-right: .5rem;\n    color: #d1453b;\n}\n\nmain a:hover {\n    color: #d1453b;\n}\n\n.form {\n    padding: 1rem .8rem;\n    border: 1px #b4b4b4 solid;\n    border-radius: 10px;\n}\n\n.hide {\n    display: none;\n}\n\n#task-name {\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.form input[type=\"text\"] {\n    border: none;\n    margin-bottom: .8rem;\n    display: block;\n    width: 100%;\n}\n\n.form input[type=\"date\"], select {\n    border-radius: 5px;\n    padding: 2px;\n    border: 1px #c7c7c7 solid;\n    color: #646464;\n}\n\n.form input[type=\"text\"]:focus {\n    outline: transparent;\n}\n\n.date-priority {\n    display: flex;\n    gap: 2rem;\n}\n\n.date-priority label {\n    font-size: .9rem;\n    color: #6d6d6d;\n}\n\n.buttons {\n    margin-top: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.buttons button {\n    flex: 1;\n    padding: .5rem 1rem;\n    border: none;\n    border-radius: 8px;\n    font-weight: 700;\n}\n\n.buttons button:hover {\n    cursor: pointer;\n}\n\n.buttons .cancel-btn {\n    background-color: #f0f0f0;\n}\n\n.buttons .cancel-btn:hover {\n    background-color: #d4d4d4;\n}\n\n.buttons .add-btn {\n    background-color: #d1453b;\n    color: white;\n}\n\n.buttons .add-btn:hover {\n    background-color: #b63a31;\n}\n\n.buttons .add-btn.disabled {\n    background-color: #df847e;\n    cursor: not-allowed;\n}\n\n.task {\n    display: flex;\n    gap: 1rem;\n    border-bottom: 1px #c7c7c7 solid;\n    /* padding-bottom: .5rem; */\n    margin-bottom: .5rem;\n}\n\n.task-info p.task-priority1 {\n    color: #d1453b;\n    font-weight: 700;\n}\n\n.task-info p.task-priority2 {\n    color: #eb8909;\n    font-weight: 700;\n}\n\n.task-info p.task-priority3 {\n    color: #246fe0;\n    font-weight: 700;\n}\n\n.task-info p.task-priority4 {\n    color: #666;\n    font-weight: 700;\n}\n\n.task-info {\n    flex: 1;\n}\n\n.task-info p {\n    margin-bottom: 6px;\n}\n\n.task-description, .date, .priority {\n    font-size: 14px;\n    color: #888888;\n}\n\n.task .close i {\n    color: #888888;\n    opacity: 0;\n    transition: .2s;\n    font-size: 1.3rem;\n}\n\n.task:hover .close i {\n    opacity: 1;\n}\n\n.task .close i:hover {\n    cursor: pointer;\n    color: #c7443b;\n}\n\nfooter {\n    background-color: #d1453b;\n    padding: 1rem;\n    display: flex;\n    justify-content: center;\n    color: white;\n    font-size: 1.2rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,cAAc;IACd,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,OAAO;IACP,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gCAAgC;IAChC,2BAA2B;IAC3B,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,UAAU;IACV,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    height: 100%;\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\nh1 {\n    font-size: 3rem;\n}\n\nheader {\n    background-color: #d1453b;\n    color: white;\n    padding: 1rem 2rem;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    height: 100%; \n}\n\naside {\n    background-color: #ececec;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n}\n\naside a {\n    text-decoration: none;\n    color: black;\n}\n\n.menu-link {\n    padding: .8rem .8rem;\n    border-radius: 10px;\n    transition: .1s;\n}\n\n.menu-link:hover {\n    background-color: #c7c7c7;\n}\n\n.active {\n    background-color: #c7c7c7;\n}\n\n.projects {\n    margin-top: 1rem;\n}\n\n.projects:hover h3 {\n    background-color: #c7c7c7;\n}\n\n.projects h3 {\n    padding: .8rem 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: rgba(0,0,0,0.56);\n    border-radius: 10px;\n    transition: .1s;\n}\n\n.projects a {\n    font-size: 1.1rem;\n    opacity: 0;\n    transition: .2s;\n    color: rgba(0,0,0,0.56);\n}\n\naside:hover .projects a {\n    opacity: 1;\n}\n\nmain {\n    padding: 1rem 3rem;\n    max-width: 800px;\n}\n\nmain h2 {\n    margin-bottom: 1rem;\n}\n\nmain a {\n    text-decoration: none;\n    color: #808080;\n    font-size: .9rem;\n}\n\nmain i {\n    margin-right: .5rem;\n    color: #d1453b;\n}\n\nmain a:hover {\n    color: #d1453b;\n}\n\n.form {\n    padding: 1rem .8rem;\n    border: 1px #b4b4b4 solid;\n    border-radius: 10px;\n}\n\n.hide {\n    display: none;\n}\n\n#task-name {\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.form input[type=\"text\"] {\n    border: none;\n    margin-bottom: .8rem;\n    display: block;\n    width: 100%;\n}\n\n.form input[type=\"date\"], select {\n    border-radius: 5px;\n    padding: 2px;\n    border: 1px #c7c7c7 solid;\n    color: #646464;\n}\n\n.form input[type=\"text\"]:focus {\n    outline: transparent;\n}\n\n.date-priority {\n    display: flex;\n    gap: 2rem;\n}\n\n.date-priority label {\n    font-size: .9rem;\n    color: #6d6d6d;\n}\n\n.buttons {\n    margin-top: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.buttons button {\n    flex: 1;\n    padding: .5rem 1rem;\n    border: none;\n    border-radius: 8px;\n    font-weight: 700;\n}\n\n.buttons button:hover {\n    cursor: pointer;\n}\n\n.buttons .cancel-btn {\n    background-color: #f0f0f0;\n}\n\n.buttons .cancel-btn:hover {\n    background-color: #d4d4d4;\n}\n\n.buttons .add-btn {\n    background-color: #d1453b;\n    color: white;\n}\n\n.buttons .add-btn:hover {\n    background-color: #b63a31;\n}\n\n.buttons .add-btn.disabled {\n    background-color: #df847e;\n    cursor: not-allowed;\n}\n\n.task {\n    display: flex;\n    gap: 1rem;\n    border-bottom: 1px #c7c7c7 solid;\n    /* padding-bottom: .5rem; */\n    margin-bottom: .5rem;\n}\n\n.task-info p.task-priority1 {\n    color: #d1453b;\n    font-weight: 700;\n}\n\n.task-info p.task-priority2 {\n    color: #eb8909;\n    font-weight: 700;\n}\n\n.task-info p.task-priority3 {\n    color: #246fe0;\n    font-weight: 700;\n}\n\n.task-info p.task-priority4 {\n    color: #666;\n    font-weight: 700;\n}\n\n.task-info {\n    flex: 1;\n}\n\n.task-info p {\n    margin-bottom: 6px;\n}\n\n.task-description, .date, .priority {\n    font-size: 14px;\n    color: #888888;\n}\n\n.task .close i {\n    color: #888888;\n    opacity: 0;\n    transition: .2s;\n    font-size: 1.3rem;\n}\n\n.task:hover .close i {\n    opacity: 1;\n}\n\n.task .close i:hover {\n    cursor: pointer;\n    color: #c7443b;\n}\n\nfooter {\n    background-color: #d1453b;\n    padding: 1rem;\n    display: flex;\n    justify-content: center;\n    color: white;\n    font-size: 1.2rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/HandleInbox.js":
/*!************************************!*\
  !*** ./src/modules/HandleInbox.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HandleInbox)
/* harmony export */ });
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox */ "./src/modules/inbox.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/modules/item.js");



function HandleInbox() {
    const inbox = new _inbox__WEBPACK_IMPORTED_MODULE_0__["default"]();

    const createItem = (title, description, dueDate, priority) => {
        const item = new _item__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, dueDate, priority);
        inbox.addItem(item);
        _item__WEBPACK_IMPORTED_MODULE_1__["default"].id++;
    }

    const getItems = () => {
        return inbox.getItems();
    }

    const deleteItem = (id) => {
        inbox.deleteItem(id);
    }

    const changeCheckStatus = (id) => {
        const items = inbox.getItems();

        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                items[i].changeCheck();
            }
        }
    }

    return { createItem, getItems, deleteItem, changeCheckStatus }
}

/***/ }),

/***/ "./src/modules/HandleProjects.js":
/*!***************************************!*\
  !*** ./src/modules/HandleProjects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HandleProjects)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/modules/item.js");



function HandleProjects() {
    const projects = [];
    let selectedProjectId = 0;

    const createProject = (name) => {
        const project = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](name)
        _project__WEBPACK_IMPORTED_MODULE_0__["default"].id++;
        projects.push(project);
    }

    const deleteProject = (id) => {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].id === id) {
                projects.splice(i, 1);
            }
        }
    }

    const getProjects = () => {
        console.log(projects);
        return projects;
    }

    const selectProject = (id) => {
        selectedProjectId = id;
    }

    const createItem = (title, description, dueDate, priority) => {
        const item = new _item__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, dueDate, priority);
        _item__WEBPACK_IMPORTED_MODULE_1__["default"].id++;
        projects[selectedProjectId].addItem(item);
    }

    const getItems = () => {
        console.log(projects[selectedProjectId].getItems());
        return projects[selectedProjectId].getItems();
    }

    const deleteItem = (id) => {
        projects[selectedProjectId].deleteItem(id);
    }

    const changeCheckStatus = (id) => {
        const items = projects[selectedProjectId].getItems();

        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                items[i].changeCheck();
            }
        }
    }

    return { 
        createProject, 
        deleteProject, 
        getProjects, 
        selectProject, 
        createItem,
        getItems,
        deleteItem,
        changeCheckStatus,
    }
}

/***/ }),

/***/ "./src/modules/inbox.js":
/*!******************************!*\
  !*** ./src/modules/inbox.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Inbox)
/* harmony export */ });
class Inbox {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    deleteItem(itemId) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === itemId) {
                this.items.splice(i, 1);
            }
        }
    }

    getItems() {
        return this.items;
    }

    getItem(id) {
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i].id === id) {
                return this.items[i];
            }
        }
    }
    
}

/***/ }),

/***/ "./src/modules/item.js":
/*!*****************************!*\
  !*** ./src/modules/item.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
class Item {
    static id = 0;

    constructor(title, description, dueDate, priority) {
        this.id = Item.id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = false;
    }

    changeCheck() {
        this.checkList = this.checkList ? false : true;
    }
}

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox */ "./src/modules/inbox.js");


class Project extends _inbox__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static id = 0;

    constructor(name) {
        super();
        this.id = Project.id;
        this.name = name;
    }
}

/***/ })

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_HandleInbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/HandleInbox */ "./src/modules/HandleInbox.js");
/* harmony import */ var _modules_HandleProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/HandleProjects */ "./src/modules/HandleProjects.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






//  inbox.createItem("Tarea", "Hacer la tarea", "04/01/2023", 4);
//  inbox.createItem(2, "Barrer", "Hacer la tarea", "04/01/2023", 4, "notas", false);
//  inbox.getItems();
//  inbox.changeCheckStatus(1);

// const projects = HandleProjects();
// projects.createProject("Programming");
// projects.createProject("Goals");
// projects.selectProject(0);
// projects.createItem("Tarea", "Hacer la tarea", "04/01/2023", 4, "notas", false);
// projects.selectProject(1);
// projects.createItem("Tarea", "Hacer la tarea", "04/01/2023", 4, "notas", false);
// projects.createItem("Tarea", "Hacer la tarea", "04/01/2023", 4, "notas", false);
// projects.getProjects();
const inbox = (0,_modules_HandleInbox__WEBPACK_IMPORTED_MODULE_0__["default"])();

function addTaskUIInbox() {
    // createItem, getItems, deleteItem, changeCheckStatus

    const addTaskButton = document.querySelector('#add-task');
    const form = document.querySelector('.form');

    // Show form
    addTaskButton.addEventListener('click', e => {
        e.preventDefault();

        form.classList.remove('hide');
        addTaskButton.classList.add('hide');
    });
    
    // Form buttons
    const cancelBtn = document.querySelector('.cancel-btn');
    const addBtn = document.querySelector('.add-btn');

    cancelBtn.addEventListener('click', e => {
        e.preventDefault();
        
        form.classList.add('hide');
        addBtn.classList.remove('disabled');
        addTaskButton.classList.remove('hide');

        name.value = '';
        description.value = '';
        dueDate.value = '';
        priority.value = '0';

        addBtn.disabled = true;
        addBtn.classList.add('disabled'); 
    });

    const name = document.querySelector('#task-name');

    addBtn.disabled = true;
    addBtn.classList.add('disabled');    

    name.addEventListener('input', e => {
        if(name.value !== '') {
            addBtn.disabled = false;
            addBtn.classList.remove('disabled');
        } else {
            addBtn.disabled = true;
            addBtn.classList.add('disabled');    
        }
        
    });

    addBtn.addEventListener('click', e => {
        e.preventDefault();        

        const description = document.querySelector('#description');

        const dueDate = document.querySelector('#due-date');
        const priority = document.querySelector('#priority');
        
        inbox.createItem(name.value, description.value, dueDate.value, priority.value, false);
        showTaskUIInbox();
        deleteTaskInbox();
        checkTask();

        form.classList.add('hide');
        addTaskButton.classList.remove('hide');

        name.value = '';
        description.value = '';
        dueDate.value = '';
        priority.value = '0';

        addBtn.disabled = true;
        addBtn.classList.add('disabled');    

    });
}


function deleteTaskInbox() {
    const deleteBtns = document.querySelectorAll('.delete');

    
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', eraseTask);
    });

}

function eraseTask(e) {
    const task = e.target.parentNode.parentNode.parentNode;
    const id = +task.dataset.id;

    console.log(task);

    inbox.deleteItem(id);
    task.remove();
}

function checkTask() {
    const checkBoxes = document.querySelectorAll('.check');

    checkBoxes.forEach(checkBox => {
        checkBox.addEventListener('change', changeStatus);
    });
}

function changeStatus(e) {
    setTimeout(() => {
        const task = e.target.parentNode.parentNode;
        const id = +task.dataset.id;

        inbox.deleteItem(id);
        task.remove();
        inbox.changeCheckStatus(id);
    }, 500)
}



function showTaskUIInbox() {
    const items = inbox.getItems();
    console.log(items);

    const tasks = document.querySelector('.tasks');
    let i = items.length === 0 ? 0 : items.length - 1;

    for (; i < items.length; i++) {
    
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.dataset.id = items[i].id;
    
        const inputDiv = document.createElement('div');
    
        const check = document.createElement('input');
        check.type = 'checkbox';
        check.name = 'check';
        check.classList.add('check');
    
        inputDiv.appendChild(check);

    
        const taskInfo = document.createElement('div');
        taskInfo.classList.add('task-info');
    
        const title = document.createElement('p');
        title.classList.add('task-title');
        title.textContent = items[i].title;
        
        const description = document.createElement('p');
        description.classList.add('task-description');
        description.textContent = items[i].description;
        
        const date = document.createElement('p');
        date.classList.add('date');
        date.textContent = items[i].dueDate;
        
        const priority = document.createElement('p');
        priority.classList.add('priority');
        if (items[i].priority !== '0') {
            priority.textContent = `Priority ${items[i].priority}`;
        }

        switch (items[i].priority) {
            case '1':
                priority.classList.add('task-priority1');
                break;
            case '2':
                priority.classList.add('task-priority2');
                break;
            case '3':
                priority.classList.add('task-priority3');
                break;
            case '4':
                priority.classList.add('task-priority4');
                break;
        
            default:
                break;
        }
    
        taskInfo.appendChild(title);
        taskInfo.appendChild(description);
        taskInfo.appendChild(date);
        taskInfo.appendChild(priority);


        const closeDiv = document.createElement('div');
        closeDiv.classList.add('close');

        const pIcon = document.createElement('p');
        const icon = document.createElement('i');
        icon.classList.add('fa-solid');
        icon.classList.add('fa-xmark');
        pIcon.classList.add('delete');
        pIcon.appendChild(icon);

        closeDiv.appendChild(pIcon);
    
        taskDiv.appendChild(inputDiv);
        taskDiv.appendChild(taskInfo);
        taskDiv.appendChild(closeDiv);
    
        tasks.appendChild(taskDiv);        
    }

}

addTaskUIInbox();
showTaskUIInbox();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUEsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0JBQWtCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvSGFuZGxlSW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvSGFuZGxlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxNDUzYjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG59XFxuXFxuYXNpZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5hc2lkZSBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5tZW51LWxpbmsge1xcbiAgICBwYWRkaW5nOiAuOHJlbSAuOHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjFzO1xcbn1cXG5cXG4ubWVudS1saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzdjNztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0czpob3ZlciBoMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5wcm9qZWN0cyBoMyB7XFxuICAgIHBhZGRpbmc6IC44cmVtIDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC41Nik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IC4xcztcXG59XFxuXFxuLnByb2plY3RzIGEge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjU2KTtcXG59XFxuXFxuYXNpZGU6aG92ZXIgLnByb2plY3RzIGEge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG5tYWluIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxubWFpbiBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzgwODA4MDtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxubWFpbiBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcXG4gICAgY29sb3I6ICNkMTQ1M2I7XFxufVxcblxcbm1haW4gYTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZDE0NTNiO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIHBhZGRpbmc6IDFyZW0gLjhyZW07XFxuICAgIGJvcmRlcjogMXB4ICNiNGI0YjQgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rhc2stbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjhyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcm0gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLCBzZWxlY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgYm9yZGVyOiAxcHggI2M3YzdjNyBzb2xpZDtcXG4gICAgY29sb3I6ICM2NDY0NjQ7XFxufVxcblxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZGF0ZS1wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmRhdGUtcHJpb3JpdHkgbGFiZWwge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogIzZkNmQ2ZDtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9ucyBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b25zIC5jYW5jZWwtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG59XFxuXFxuLmJ1dHRvbnMgLmNhbmNlbC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xcbn1cXG5cXG4uYnV0dG9ucyAuYWRkLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTQ1M2I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJ1dHRvbnMgLmFkZC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjYzYTMxO1xcbn1cXG5cXG4uYnV0dG9ucyAuYWRkLWJ0bi5kaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZjg0N2U7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggI2M3YzdjNyBzb2xpZDtcXG4gICAgLyogcGFkZGluZy1ib3R0b206IC41cmVtOyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLnRhc2staW5mbyBwLnRhc2stcHJpb3JpdHkxIHtcXG4gICAgY29sb3I6ICNkMTQ1M2I7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50YXNrLWluZm8gcC50YXNrLXByaW9yaXR5MiB7XFxuICAgIGNvbG9yOiAjZWI4OTA5O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udGFzay1pbmZvIHAudGFzay1wcmlvcml0eTMge1xcbiAgICBjb2xvcjogIzI0NmZlMDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRhc2staW5mbyBwLnRhc2stcHJpb3JpdHk0IHtcXG4gICAgY29sb3I6ICM2NjY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udGFzay1pbmZvIHAge1xcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uLCAuZGF0ZSwgLnByaW9yaXR5IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzg4ODg4ODtcXG59XFxuXFxuLnRhc2sgLmNsb3NlIGkge1xcbiAgICBjb2xvcjogIzg4ODg4ODtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRhc2s6aG92ZXIgLmNsb3NlIGkge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzayAuY2xvc2UgaTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICNjNzQ0M2I7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTQ1M2I7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxNDUzYjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG59XFxuXFxuYXNpZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5hc2lkZSBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5tZW51LWxpbmsge1xcbiAgICBwYWRkaW5nOiAuOHJlbSAuOHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjFzO1xcbn1cXG5cXG4ubWVudS1saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzdjNztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0czpob3ZlciBoMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5wcm9qZWN0cyBoMyB7XFxuICAgIHBhZGRpbmc6IC44cmVtIDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC41Nik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IC4xcztcXG59XFxuXFxuLnByb2plY3RzIGEge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjU2KTtcXG59XFxuXFxuYXNpZGU6aG92ZXIgLnByb2plY3RzIGEge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG5tYWluIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxubWFpbiBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzgwODA4MDtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxubWFpbiBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcXG4gICAgY29sb3I6ICNkMTQ1M2I7XFxufVxcblxcbm1haW4gYTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZDE0NTNiO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIHBhZGRpbmc6IDFyZW0gLjhyZW07XFxuICAgIGJvcmRlcjogMXB4ICNiNGI0YjQgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rhc2stbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjhyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcm0gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLCBzZWxlY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgYm9yZGVyOiAxcHggI2M3YzdjNyBzb2xpZDtcXG4gICAgY29sb3I6ICM2NDY0NjQ7XFxufVxcblxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZGF0ZS1wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmRhdGUtcHJpb3JpdHkgbGFiZWwge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogIzZkNmQ2ZDtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9ucyBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b25zIC5jYW5jZWwtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG59XFxuXFxuLmJ1dHRvbnMgLmNhbmNlbC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xcbn1cXG5cXG4uYnV0dG9ucyAuYWRkLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTQ1M2I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJ1dHRvbnMgLmFkZC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjYzYTMxO1xcbn1cXG5cXG4uYnV0dG9ucyAuYWRkLWJ0bi5kaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZjg0N2U7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggI2M3YzdjNyBzb2xpZDtcXG4gICAgLyogcGFkZGluZy1ib3R0b206IC41cmVtOyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLnRhc2staW5mbyBwLnRhc2stcHJpb3JpdHkxIHtcXG4gICAgY29sb3I6ICNkMTQ1M2I7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50YXNrLWluZm8gcC50YXNrLXByaW9yaXR5MiB7XFxuICAgIGNvbG9yOiAjZWI4OTA5O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udGFzay1pbmZvIHAudGFzay1wcmlvcml0eTMge1xcbiAgICBjb2xvcjogIzI0NmZlMDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRhc2staW5mbyBwLnRhc2stcHJpb3JpdHk0IHtcXG4gICAgY29sb3I6ICM2NjY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udGFzay1pbmZvIHAge1xcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uLCAuZGF0ZSwgLnByaW9yaXR5IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzg4ODg4ODtcXG59XFxuXFxuLnRhc2sgLmNsb3NlIGkge1xcbiAgICBjb2xvcjogIzg4ODg4ODtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRhc2s6aG92ZXIgLmNsb3NlIGkge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzayAuY2xvc2UgaTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICNjNzQ0M2I7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTQ1M2I7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEluYm94IGZyb20gXCIuL2luYm94XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhhbmRsZUluYm94KCkge1xuICAgIGNvbnN0IGluYm94ID0gbmV3IEluYm94KCk7XG5cbiAgICBjb25zdCBjcmVhdGVJdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBpbmJveC5hZGRJdGVtKGl0ZW0pO1xuICAgICAgICBJdGVtLmlkKys7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbmJveC5nZXRJdGVtcygpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaWQpID0+IHtcbiAgICAgICAgaW5ib3guZGVsZXRlSXRlbShpZCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlQ2hlY2tTdGF0dXMgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBpbmJveC5nZXRJdGVtcygpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpdGVtc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5jaGFuZ2VDaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlSXRlbSwgZ2V0SXRlbXMsIGRlbGV0ZUl0ZW0sIGNoYW5nZUNoZWNrU3RhdHVzIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhhbmRsZVByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gW107XG4gICAgbGV0IHNlbGVjdGVkUHJvamVjdElkID0gMDtcblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSlcbiAgICAgICAgUHJvamVjdC5pZCsrO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb2plY3RzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdElkID0gaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgSXRlbS5pZCsrO1xuICAgICAgICBwcm9qZWN0c1tzZWxlY3RlZFByb2plY3RJZF0uYWRkSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbc2VsZWN0ZWRQcm9qZWN0SWRdLmdldEl0ZW1zKCkpO1xuICAgICAgICByZXR1cm4gcHJvamVjdHNbc2VsZWN0ZWRQcm9qZWN0SWRdLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IChpZCkgPT4ge1xuICAgICAgICBwcm9qZWN0c1tzZWxlY3RlZFByb2plY3RJZF0uZGVsZXRlSXRlbShpZCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlQ2hlY2tTdGF0dXMgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBwcm9qZWN0c1tzZWxlY3RlZFByb2plY3RJZF0uZ2V0SXRlbXMoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNbaV0uY2hhbmdlQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgICBjcmVhdGVQcm9qZWN0LCBcbiAgICAgICAgZGVsZXRlUHJvamVjdCwgXG4gICAgICAgIGdldFByb2plY3RzLCBcbiAgICAgICAgc2VsZWN0UHJvamVjdCwgXG4gICAgICAgIGNyZWF0ZUl0ZW0sXG4gICAgICAgIGdldEl0ZW1zLFxuICAgICAgICBkZWxldGVJdGVtLFxuICAgICAgICBjaGFuZ2VDaGVja1N0YXR1cyxcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5ib3gge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfVxuXG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICBkZWxldGVJdGVtKGl0ZW1JZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLmlkID09PSBpdGVtSWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodGhpcy5pdGVtc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIHtcbiAgICBzdGF0aWMgaWQgPSAwO1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLmlkID0gSXRlbS5pZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jaGVja0xpc3QgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjaGFuZ2VDaGVjaygpIHtcbiAgICAgICAgdGhpcy5jaGVja0xpc3QgPSB0aGlzLmNoZWNrTGlzdCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IEluYm94IGZyb20gXCIuL2luYm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3QgZXh0ZW5kcyBJbmJveCB7XG4gICAgc3RhdGljIGlkID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pZCA9IFByb2plY3QuaWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBIYW5kbGVJbmJveCBmcm9tICcuL21vZHVsZXMvSGFuZGxlSW5ib3gnO1xuaW1wb3J0IEhhbmRsZVByb2plY3RzIGZyb20gJy4vbW9kdWxlcy9IYW5kbGVQcm9qZWN0cyc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cbi8vICBpbmJveC5jcmVhdGVJdGVtKFwiVGFyZWFcIiwgXCJIYWNlciBsYSB0YXJlYVwiLCBcIjA0LzAxLzIwMjNcIiwgNCk7XG4vLyAgaW5ib3guY3JlYXRlSXRlbSgyLCBcIkJhcnJlclwiLCBcIkhhY2VyIGxhIHRhcmVhXCIsIFwiMDQvMDEvMjAyM1wiLCA0LCBcIm5vdGFzXCIsIGZhbHNlKTtcbi8vICBpbmJveC5nZXRJdGVtcygpO1xuLy8gIGluYm94LmNoYW5nZUNoZWNrU3RhdHVzKDEpO1xuXG4vLyBjb25zdCBwcm9qZWN0cyA9IEhhbmRsZVByb2plY3RzKCk7XG4vLyBwcm9qZWN0cy5jcmVhdGVQcm9qZWN0KFwiUHJvZ3JhbW1pbmdcIik7XG4vLyBwcm9qZWN0cy5jcmVhdGVQcm9qZWN0KFwiR29hbHNcIik7XG4vLyBwcm9qZWN0cy5zZWxlY3RQcm9qZWN0KDApO1xuLy8gcHJvamVjdHMuY3JlYXRlSXRlbShcIlRhcmVhXCIsIFwiSGFjZXIgbGEgdGFyZWFcIiwgXCIwNC8wMS8yMDIzXCIsIDQsIFwibm90YXNcIiwgZmFsc2UpO1xuLy8gcHJvamVjdHMuc2VsZWN0UHJvamVjdCgxKTtcbi8vIHByb2plY3RzLmNyZWF0ZUl0ZW0oXCJUYXJlYVwiLCBcIkhhY2VyIGxhIHRhcmVhXCIsIFwiMDQvMDEvMjAyM1wiLCA0LCBcIm5vdGFzXCIsIGZhbHNlKTtcbi8vIHByb2plY3RzLmNyZWF0ZUl0ZW0oXCJUYXJlYVwiLCBcIkhhY2VyIGxhIHRhcmVhXCIsIFwiMDQvMDEvMjAyM1wiLCA0LCBcIm5vdGFzXCIsIGZhbHNlKTtcbi8vIHByb2plY3RzLmdldFByb2plY3RzKCk7XG5jb25zdCBpbmJveCA9IEhhbmRsZUluYm94KCk7XG5cbmZ1bmN0aW9uIGFkZFRhc2tVSUluYm94KCkge1xuICAgIC8vIGNyZWF0ZUl0ZW0sIGdldEl0ZW1zLCBkZWxldGVJdGVtLCBjaGFuZ2VDaGVja1N0YXR1c1xuXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuXG4gICAgLy8gU2hvdyBmb3JtXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0pO1xuICAgIFxuICAgIC8vIEZvcm0gYnV0dG9uc1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtYnRuJyk7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4nKTtcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgYWRkQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG4gICAgICAgIG5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9ICcnO1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9ICcwJztcblxuICAgICAgICBhZGRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTsgXG4gICAgfSk7XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpO1xuXG4gICAgYWRkQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTsgICAgXG5cbiAgICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XG4gICAgICAgIGlmKG5hbWUudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICBhZGRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGFkZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpOyAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgICAgICBcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbiAgICAgICAgXG4gICAgICAgIGluYm94LmNyZWF0ZUl0ZW0obmFtZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlLCBmYWxzZSk7XG4gICAgICAgIHNob3dUYXNrVUlJbmJveCgpO1xuICAgICAgICBkZWxldGVUYXNrSW5ib3goKTtcbiAgICAgICAgY2hlY2tUYXNrKCk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG4gICAgICAgIG5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9ICcnO1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9ICcwJztcblxuICAgICAgICBhZGRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTsgICAgXG5cbiAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBkZWxldGVUYXNrSW5ib3goKSB7XG4gICAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKTtcblxuICAgIFxuICAgIGRlbGV0ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlcmFzZVRhc2spO1xuICAgIH0pO1xuXG59XG5cbmZ1bmN0aW9uIGVyYXNlVGFzayhlKSB7XG4gICAgY29uc3QgdGFzayA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IGlkID0gK3Rhc2suZGF0YXNldC5pZDtcblxuICAgIGNvbnNvbGUubG9nKHRhc2spO1xuXG4gICAgaW5ib3guZGVsZXRlSXRlbShpZCk7XG4gICAgdGFzay5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tUYXNrKCkge1xuICAgIGNvbnN0IGNoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKTtcblxuICAgIGNoZWNrQm94ZXMuZm9yRWFjaChjaGVja0JveCA9PiB7XG4gICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZVN0YXR1cyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVN0YXR1cyhlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGlkID0gK3Rhc2suZGF0YXNldC5pZDtcblxuICAgICAgICBpbmJveC5kZWxldGVJdGVtKGlkKTtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICAgICAgaW5ib3guY2hhbmdlQ2hlY2tTdGF0dXMoaWQpO1xuICAgIH0sIDUwMClcbn1cblxuXG5cbmZ1bmN0aW9uIHNob3dUYXNrVUlJbmJveCgpIHtcbiAgICBjb25zdCBpdGVtcyA9IGluYm94LmdldEl0ZW1zKCk7XG4gICAgY29uc29sZS5sb2coaXRlbXMpO1xuXG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICBsZXQgaSA9IGl0ZW1zLmxlbmd0aCA9PT0gMCA/IDAgOiBpdGVtcy5sZW5ndGggLSAxO1xuXG4gICAgZm9yICg7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIFxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICB0YXNrRGl2LmRhdGFzZXQuaWQgPSBpdGVtc1tpXS5pZDtcbiAgICBcbiAgICAgICAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgY2hlY2submFtZSA9ICdjaGVjayc7XG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gICAgXG4gICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGNoZWNrKTtcblxuICAgIFxuICAgICAgICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtc1tpXS50aXRsZTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbXNbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGl0ZW1zW2ldLmR1ZURhdGU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICAgICAgaWYgKGl0ZW1zW2ldLnByaW9yaXR5ICE9PSAnMCcpIHtcbiAgICAgICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5ICR7aXRlbXNbaV0ucHJpb3JpdHl9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoaXRlbXNbaV0ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHkxJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5MicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eTMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHk0Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIFxuICAgICAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuXG4gICAgICAgIGNvbnN0IGNsb3NlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNsb3NlRGl2LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG5cbiAgICAgICAgY29uc3QgcEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdmYS14bWFyaycpO1xuICAgICAgICBwSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICAgICAgcEljb24uYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgY2xvc2VEaXYuYXBwZW5kQ2hpbGQocEljb24pO1xuICAgIFxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGlucHV0RGl2KTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY2xvc2VEaXYpO1xuICAgIFxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrRGl2KTsgICAgICAgIFxuICAgIH1cblxufVxuXG5hZGRUYXNrVUlJbmJveCgpO1xuc2hvd1Rhc2tVSUluYm94KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9