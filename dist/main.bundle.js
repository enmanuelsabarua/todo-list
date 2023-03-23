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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    height: 100%;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    position: relative;\n}\n\nh1 {\n    font-size: 3rem;\n}\n\nheader {\n    background-color: #d1453b;\n    color: white;\n    padding: 1rem 2rem;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    height: 100%; \n}\n\naside {\n    background-color: #ececec;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n}\n\naside a {\n    text-decoration: none;\n    color: black;\n}\n\na.menu-link {\n    padding: .8rem .8rem;\n    border-radius: 10px;\n    transition: .1s;\n}\n\n.menu-link:hover {\n    background-color: #c7c7c7;\n}\n\n.active {\n    background-color: #c7c7c7;\n}\n\n.projects {\n    margin-top: 1rem;\n    padding: .0 1rem;\n}\n\n.projects h3 {\n    /* background-color: #c7c7c7; */\n}\n\n.projects h3 {\n    padding: .8rem .2rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: rgba(0,0,0,0.56);\n    border-radius: 10px;\n    transition: .1s;\n}\n\n.projects a {\n    font-size: 1.1rem;\n    opacity: 0;\n    transition: .2s;\n    color: rgba(0,0,0,0.56);\n}\n\n.project {\n    padding: .5rem 1rem .5rem .5rem;\n    border-radius: 10px;\n    transition: .2s;\n}\n\n.project h4 {\n    color: rgba(0,0,0,0.56);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-weight: 400;\n}\n\n.project h4 i {\n    color: rgba(0, 0, 0, 0.308);\n    opacity: 0;\n    transition: .2s;\n}\n\n.project:hover {\n    cursor: pointer;\n    background-color: #c7c7c7;\n}\n\n.selected-project {\n    background-color: #c7c7c7;\n}\n\n.project:hover i {\n    opacity: 1;\n}\n\n.project i:hover {\n    color: rgba(0, 0, 0, 0.671);\n    \n}\n\n.form-div {\n    position: absolute;\n    top: -150%;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: #00000050;\n    opacity: 0;\n    transition: opacity .2s;\n    z-index: 2;\n}\n\n.form-div.pop-up {\n    top: 0;\n    opacity: 1;\n}\n\n.projects-form {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    position: absolute;\n    background-color: white;\n    border-radius: 15px;\n    padding: 1rem;\n}\n\n.projects-form {\n    width: 300px;\n}\n\n.projects-form h2 {\n    margin-bottom: 1rem;\n}\n\n.projects-form label {\n    display: block;\n    margin-bottom: .5rem;\n}\n\n.projects-form input {\n    padding: .3rem .5rem;\n    width: 100%;\n    border-radius: 5px;\n    border: 1px #8888884f solid;\n    transition: .2s;\n}\n\n.projects-form input:focus {\n    outline: transparent;\n    border: 1px #888888 solid;\n}\n\n.projects-form .add-project-btn {\n    background-color: #d1453b;\n    color: white;\n}\n\n.projects-form .add-project-btn.disabled {\n    background-color: #df847e;\n}\n\n.projects-form .add-project-btn:disabled {\n    cursor: not-allowed;\n}\n\naside:hover .projects a {\n    opacity: 1;\n}\n\nmain {\n    padding: 1rem 3rem;\n    max-width: 800px;\n}\n\nmain h2 {\n    margin-bottom: 1rem;\n}\n\nmain a {\n    text-decoration: none;\n    color: #808080;\n    font-size: .9rem;\n}\n\nmain i {\n    margin-right: .5rem;\n    color: #d1453b;\n}\n\nmain a:hover {\n    color: #d1453b;\n}\n\n.form {\n    padding: 1rem .8rem;\n    border: 1px #b4b4b4 solid;\n    border-radius: 10px;\n}\n\n.hide {\n    display: none;\n}\n\n#task-name {\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.form input[type=\"text\"] {\n    border: none;\n    margin-bottom: .8rem;\n    display: block;\n    width: 100%;\n}\n\n.check {\n    appearance: none;\n    background-color: #fff;\n    margin: 0;\n    font: inherit;\n    color: currentColor;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.15em solid currentColor;\n    border-radius: 0.15em;\n    transform: translateY(-0.075em);\n    display: grid;\n    place-content: center;\n}\n\n.check::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n    background-color: CanvasText;\n    transform-origin: bottom left;\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\n.check:checked::before {\n    transform: scale(1);\n}\n\n.check:focus {\n    outline: max(2px, 0.15em) solid currentColor;\n    outline-offset: max(2px, 0.15em);\n  }\n\n.form input[type=\"date\"], select {\n    border-radius: 5px;\n    padding: 2px;\n    border: 1px #c7c7c7 solid;\n    color: #646464;\n}\n\n.form input[type=\"text\"]:focus {\n    outline: transparent;\n}\n\n.date-priority {\n    display: flex;\n    gap: 2rem;\n}\n\n.date-priority label {\n    font-size: .9rem;\n    color: #6d6d6d;\n}\n\n.buttons {\n    margin-top: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.buttons button {\n    flex: 1;\n    padding: .5rem 1rem;\n    border: none;\n    border-radius: 8px;\n    font-weight: 700;\n}\n\n.buttons button:hover {\n    cursor: pointer;\n}\n\n.buttons .cancel-btn {\n    background-color: #f0f0f0;\n}\n\n.buttons .cancel-btn:hover {\n    background-color: #d4d4d4;\n}\n\n.buttons .add-btn {\n    background-color: #d1453b;\n    color: white;\n}\n\n.buttons .add-btn:hover {\n    background-color: #b63a31;\n}\n\n.buttons .add-btn.disabled {\n    background-color: #df847e;\n    cursor: not-allowed;\n}\n\n.task {\n    display: flex;\n    gap: 1rem;\n    border-bottom: 1px #c7c7c7 solid;\n    /* padding-bottom: .5rem; */\n    margin-bottom: .5rem;\n}\n\n.task-info p.task-priority1 {\n    color: #d1453b;\n    font-weight: 700;\n}\n\n.task-info p.task-priority2 {\n    color: #eb8909;\n    font-weight: 700;\n}\n\n.task-info p.task-priority3 {\n    color: #246fe0;\n    font-weight: 700;\n}\n\n.task-info p.task-priority4 {\n    color: #666;\n    font-weight: 700;\n}\n\n.task-info {\n    flex: 1;\n}\n\n.task-info p {\n    margin-bottom: 6px;\n}\n\n.task-description, .date, .priority {\n    font-size: 14px;\n    color: #888888;\n}\n\n.task .close i {\n    color: #888888;\n    opacity: 0;\n    transition: .2s;\n    font-size: 1.3rem;\n}\n\n.task:hover .close i {\n    opacity: 1;\n}\n\n.task .close i:hover {\n    cursor: pointer;\n    color: #c7443b;\n}\n\nfooter {\n    background-color: #d1453b;\n    padding: 1rem;\n    display: flex;\n    justify-content: center;\n    color: white;\n    font-size: 1.2rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    height: 100%;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    position: relative;\n}\n\nh1 {\n    font-size: 3rem;\n}\n\nheader {\n    background-color: #d1453b;\n    color: white;\n    padding: 1rem 2rem;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    height: 100%; \n}\n\naside {\n    background-color: #ececec;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n}\n\naside a {\n    text-decoration: none;\n    color: black;\n}\n\na.menu-link {\n    padding: .8rem .8rem;\n    border-radius: 10px;\n    transition: .1s;\n}\n\n.menu-link:hover {\n    background-color: #c7c7c7;\n}\n\n.active {\n    background-color: #c7c7c7;\n}\n\n.projects {\n    margin-top: 1rem;\n    padding: .0 1rem;\n}\n\n.projects h3 {\n    /* background-color: #c7c7c7; */\n}\n\n.projects h3 {\n    padding: .8rem .2rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: rgba(0,0,0,0.56);\n    border-radius: 10px;\n    transition: .1s;\n}\n\n.projects a {\n    font-size: 1.1rem;\n    opacity: 0;\n    transition: .2s;\n    color: rgba(0,0,0,0.56);\n}\n\n.project {\n    padding: .5rem 1rem .5rem .5rem;\n    border-radius: 10px;\n    transition: .2s;\n}\n\n.project h4 {\n    color: rgba(0,0,0,0.56);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-weight: 400;\n}\n\n.project h4 i {\n    color: rgba(0, 0, 0, 0.308);\n    opacity: 0;\n    transition: .2s;\n}\n\n.project:hover {\n    cursor: pointer;\n    background-color: #c7c7c7;\n}\n\n.selected-project {\n    background-color: #c7c7c7;\n}\n\n.project:hover i {\n    opacity: 1;\n}\n\n.project i:hover {\n    color: rgba(0, 0, 0, 0.671);\n    \n}\n\n.form-div {\n    position: absolute;\n    top: -150%;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: #00000050;\n    opacity: 0;\n    transition: opacity .2s;\n    z-index: 2;\n}\n\n.form-div.pop-up {\n    top: 0;\n    opacity: 1;\n}\n\n.projects-form {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    position: absolute;\n    background-color: white;\n    border-radius: 15px;\n    padding: 1rem;\n}\n\n.projects-form {\n    width: 300px;\n}\n\n.projects-form h2 {\n    margin-bottom: 1rem;\n}\n\n.projects-form label {\n    display: block;\n    margin-bottom: .5rem;\n}\n\n.projects-form input {\n    padding: .3rem .5rem;\n    width: 100%;\n    border-radius: 5px;\n    border: 1px #8888884f solid;\n    transition: .2s;\n}\n\n.projects-form input:focus {\n    outline: transparent;\n    border: 1px #888888 solid;\n}\n\n.projects-form .add-project-btn {\n    background-color: #d1453b;\n    color: white;\n}\n\n.projects-form .add-project-btn.disabled {\n    background-color: #df847e;\n}\n\n.projects-form .add-project-btn:disabled {\n    cursor: not-allowed;\n}\n\naside:hover .projects a {\n    opacity: 1;\n}\n\nmain {\n    padding: 1rem 3rem;\n    max-width: 800px;\n}\n\nmain h2 {\n    margin-bottom: 1rem;\n}\n\nmain a {\n    text-decoration: none;\n    color: #808080;\n    font-size: .9rem;\n}\n\nmain i {\n    margin-right: .5rem;\n    color: #d1453b;\n}\n\nmain a:hover {\n    color: #d1453b;\n}\n\n.form {\n    padding: 1rem .8rem;\n    border: 1px #b4b4b4 solid;\n    border-radius: 10px;\n}\n\n.hide {\n    display: none;\n}\n\n#task-name {\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.form input[type=\"text\"] {\n    border: none;\n    margin-bottom: .8rem;\n    display: block;\n    width: 100%;\n}\n\n.check {\n    appearance: none;\n    background-color: #fff;\n    margin: 0;\n    font: inherit;\n    color: currentColor;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.15em solid currentColor;\n    border-radius: 0.15em;\n    transform: translateY(-0.075em);\n    display: grid;\n    place-content: center;\n}\n\n.check::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n    background-color: CanvasText;\n    transform-origin: bottom left;\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\n.check:checked::before {\n    transform: scale(1);\n}\n\n.check:focus {\n    outline: max(2px, 0.15em) solid currentColor;\n    outline-offset: max(2px, 0.15em);\n  }\n\n.form input[type=\"date\"], select {\n    border-radius: 5px;\n    padding: 2px;\n    border: 1px #c7c7c7 solid;\n    color: #646464;\n}\n\n.form input[type=\"text\"]:focus {\n    outline: transparent;\n}\n\n.date-priority {\n    display: flex;\n    gap: 2rem;\n}\n\n.date-priority label {\n    font-size: .9rem;\n    color: #6d6d6d;\n}\n\n.buttons {\n    margin-top: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.buttons button {\n    flex: 1;\n    padding: .5rem 1rem;\n    border: none;\n    border-radius: 8px;\n    font-weight: 700;\n}\n\n.buttons button:hover {\n    cursor: pointer;\n}\n\n.buttons .cancel-btn {\n    background-color: #f0f0f0;\n}\n\n.buttons .cancel-btn:hover {\n    background-color: #d4d4d4;\n}\n\n.buttons .add-btn {\n    background-color: #d1453b;\n    color: white;\n}\n\n.buttons .add-btn:hover {\n    background-color: #b63a31;\n}\n\n.buttons .add-btn.disabled {\n    background-color: #df847e;\n    cursor: not-allowed;\n}\n\n.task {\n    display: flex;\n    gap: 1rem;\n    border-bottom: 1px #c7c7c7 solid;\n    /* padding-bottom: .5rem; */\n    margin-bottom: .5rem;\n}\n\n.task-info p.task-priority1 {\n    color: #d1453b;\n    font-weight: 700;\n}\n\n.task-info p.task-priority2 {\n    color: #eb8909;\n    font-weight: 700;\n}\n\n.task-info p.task-priority3 {\n    color: #246fe0;\n    font-weight: 700;\n}\n\n.task-info p.task-priority4 {\n    color: #666;\n    font-weight: 700;\n}\n\n.task-info {\n    flex: 1;\n}\n\n.task-info p {\n    margin-bottom: 6px;\n}\n\n.task-description, .date, .priority {\n    font-size: 14px;\n    color: #888888;\n}\n\n.task .close i {\n    color: #888888;\n    opacity: 0;\n    transition: .2s;\n    font-size: 1.3rem;\n}\n\n.task:hover .close i {\n    opacity: 1;\n}\n\n.task .close i:hover {\n    cursor: pointer;\n    color: #c7443b;\n}\n\nfooter {\n    background-color: #d1453b;\n    padding: 1rem;\n    display: flex;\n    justify-content: center;\n    color: white;\n    font-size: 1.2rem;\n}"],"sourceRoot":""}]);
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

    const getName = () => {
        return 'Inbox';
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

    return { createItem, getItems, getName, deleteItem, changeCheckStatus }
}

/***/ }),

/***/ "./src/modules/HandleProjects.js":
/*!***************************************!*\
  !*** ./src/modules/HandleProjects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HandleProjects),
/* harmony export */   "selectedProjectId": () => (/* binding */ selectedProjectId)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/modules/item.js");



let selectedProjectId = 0;
function HandleProjects() {
    const projects = [];

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
        return projects;
    }

    const getName = () => {
        return projects[selectedProjectId].name;
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
        getName,
        selectProject, 
        selectedProjectId,
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

/***/ }),

/***/ "./src/modules/ui/HandleTaskUI.js":
/*!****************************************!*\
  !*** ./src/modules/ui/HandleTaskUI.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HandleTaskUI": () => (/* binding */ HandleTaskUI),
/* harmony export */   "showTaskUI": () => (/* binding */ showTaskUI)
/* harmony export */ });

function HandleTaskUI(instance) {

    const addTaskButton = document.querySelector('#add-task');
    const form = document.querySelector('.form');

    // Show form
    addTaskButton.addEventListener('click', e => {
        e.preventDefault();

        form.classList.remove('hide');
        addTaskButton.classList.add('hide');

        e.stopPropagation();
    });
    
    // Form buttons
    const cancelBtn = document.querySelector('.cancel-btn');
    const addBtn = document.querySelector('.add-btn');

    // addBtn.replaceWith(addBtn.cloneNode(true));   

    cancelBtn.addEventListener('click', e => {
        e.preventDefault();
        
        form.classList.add('hide');
        addTaskButton.classList.remove('hide');

        addBtn.disabled = true;
        addBtn.classList.add('disabled'); 

        e.stopPropagation();
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

        
        instance.createItem(name.value, description.value, dueDate.value, priority.value, false);
        showTaskUI(instance, instance.getName());
        deleteTask(instance);
        checkTask(instance);

        form.classList.add('hide');
        addTaskButton.classList.remove('hide');

        name.value = '';
        description.value = '';
        dueDate.value = '';
        priority.value = '0';

        addBtn.disabled = true;
        addBtn.classList.add('disabled');    

        e.stopPropagation();
    });
}


function deleteTask(instance) {
    const deleteBtns = document.querySelectorAll('.delete');
    
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => { 
            eraseTask(e, instance); 
            e.stopPropagation();
        });
    });

}

function eraseTask(e, instance) {
    const task = e.target.parentNode.parentNode.parentNode;
    const id = +task.dataset.id;

    instance.deleteItem(id);
    task.remove();
}

function checkTask(instance) {
    const checkBoxes = document.querySelectorAll('.check');

    checkBoxes.forEach(checkBox => {
        checkBox.addEventListener('change', (e) => { 
            changeStatus(e, instance)
            e.stopPropagation();
        });
    });
}

function changeStatus(e, instance) {
    setTimeout(() => {
        const task = e.target.parentNode.parentNode;
        const id = +task.dataset.id;

        instance.deleteItem(id);
        task.remove();
        instance.changeCheckStatus(id);
    }, 500)
}



function showTaskUI(instance, title) {    

    const mainTitle = document.querySelector('.main-title');
    mainTitle.textContent = title;

    const items = instance.getItems();
    console.log(title, items);

    const tasks = document.querySelector('.tasks');
    tasks.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
    
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

    deleteTask(instance);
    checkTask(instance);

}



/***/ }),

/***/ "./src/modules/ui/InboxUI.js":
/*!***********************************!*\
  !*** ./src/modules/ui/InboxUI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HandleTaskUI": () => (/* reexport safe */ _HandleTaskUI__WEBPACK_IMPORTED_MODULE_1__.HandleTaskUI),
/* harmony export */   "inbox": () => (/* binding */ inbox),
/* harmony export */   "showTaskUI": () => (/* reexport safe */ _HandleTaskUI__WEBPACK_IMPORTED_MODULE_1__.showTaskUI)
/* harmony export */ });
/* harmony import */ var _HandleInbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HandleInbox */ "./src/modules/HandleInbox.js");
/* harmony import */ var _HandleTaskUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HandleTaskUI */ "./src/modules/ui/HandleTaskUI.js");




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
const inbox = (0,_HandleInbox__WEBPACK_IMPORTED_MODULE_0__["default"])();



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
/* harmony import */ var _modules_HandleProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/HandleProjects */ "./src/modules/HandleProjects.js");
/* harmony import */ var _modules_ui_InboxUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui/InboxUI */ "./src/modules/ui/InboxUI.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const project = (0,_modules_HandleProjects__WEBPACK_IMPORTED_MODULE_0__["default"])();

function HandleProjectUI() {
    project.createProject('Inbox');
    document.querySelector('#inbox').dataset.id = 0;


    const createProjectBtn = document.querySelector('.create-project');
    const projectForm = document.querySelector('.form-div');

    createProjectBtn.addEventListener('click', e => {
        e.preventDefault();

        projectForm.classList.add('pop-up');

        e.stopPropagation();        
    });

    // Form buttons
    const cancelBtn = document.querySelector('.cancel-project-btn');
    const addBtn = document.querySelector('.add-project-btn');    

    cancelBtn.addEventListener('click', e => {
        projectForm.classList.remove('pop-up');

        e.stopPropagation();        
    });

    const name = document.querySelector('#project-name');

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

        project.createProject(name.value);      

        const lastProject = project.getProjects().slice(-1);
        project.selectProject(lastProject[0].id);
        
        showProjectUI();
        HandleChangeProject();
        deleteProject();
        (0,_modules_ui_InboxUI__WEBPACK_IMPORTED_MODULE_1__.showTaskUI)(project, lastProject[0].name);
        

        // Remove the selected-project class from the other projects
        if (_modules_HandleProjects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId !== 0) {
            const lastProjectElement = document.querySelector(`[data-id="${project.getProjects().slice(-2)[0].id}"]`);
            lastProjectElement.classList.remove('selected-project');
        } 

        const projectsDOM = document.querySelectorAll('.project');                
        projectsDOM.forEach(p => p.classList.remove('selected-project'));
        

        const lastProjectElement = document.querySelector(`[data-id="${_modules_HandleProjects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId}"]`);
        lastProjectElement.classList.add('selected-project');
        


        addBtn.disabled = true;
        addBtn.classList.add('disabled');  

        projectForm.classList.remove('pop-up');
        name.value = '';

        e.stopPropagation();   

          
    });

}

function deleteProject() {
    const deleteBtns = document.querySelectorAll('.delete-project');

    deleteBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            const projectDiv = e.target.parentNode.parentNode;
            const id = +projectDiv.dataset.id;

            (0,_modules_ui_InboxUI__WEBPACK_IMPORTED_MODULE_1__.showTaskUI)(_modules_ui_InboxUI__WEBPACK_IMPORTED_MODULE_1__.inbox, 'Inbox');
            project.selectProject(0);

            project.deleteProject(id);
            projectDiv.remove();

            e.stopPropagation();
        });
    })
}

function showProjectUI() {
    // <div class="project">
    //     <h4>Project 1 <i class="fa-solid fa-xmark"></i></h4>
    // </div>

    const projects = project.getProjects();

    const projectsDiv = document.querySelector('.project-list');
    let i = projects.length === 0 ? 0 : projects.length - 1;

    for (; i < projects.length; i++) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');        
        projectDiv.dataset.id = projects[i].id;
    
        const projectTitle = document.createElement('h4');
    
        projectTitle.textContent = projects[i].name;
    
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid');
        deleteIcon.classList.add('fa-xmark');
        deleteIcon.classList.add('delete-project');       
        
        projectTitle.appendChild(deleteIcon);
        projectDiv.appendChild(projectTitle);
        projectsDiv.appendChild(projectDiv);
    }
    
    
}

function HandleChangeProject() {
    const projectsDOM = document.querySelectorAll('.project');

    projectsDOM.forEach(projectTab => {
        
        projectTab.addEventListener('click', e => {
            e.preventDefault();
            
            projectsDOM.forEach(p => p.classList.remove('selected-project'));
            
            projectTab.classList.add('selected-project');
            const id = +projectTab.dataset.id;
            project.selectProject(id);

            const projectsArr = project.getProjects();
            
            for (let i = 0; i < projectsArr.length; i++) {
                if (projectsArr[i].id === _modules_HandleProjects__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId) {
                    (0,_modules_ui_InboxUI__WEBPACK_IMPORTED_MODULE_1__.showTaskUI)(project, projectsArr[i].name);
                }
            }

        });
        
    });
}


HandleProjectUI();
(0,_modules_ui_InboxUI__WEBPACK_IMPORTED_MODULE_1__.HandleTaskUI)(project);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZ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Q2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdCZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2Y0Qjs7QUFFYixzQkFBc0IsOENBQUs7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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Y2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvSGFuZGxlSW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvSGFuZGxlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpL0hhbmRsZVRhc2tVSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy91aS9JbmJveFVJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE0NTNiO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbn1cXG5cXG5hc2lkZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmFzaWRlIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuYS5tZW51LWxpbmsge1xcbiAgICBwYWRkaW5nOiAuOHJlbSAuOHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjFzO1xcbn1cXG5cXG4ubWVudS1saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzdjNztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IC4wIDFyZW07XFxufVxcblxcbi5wcm9qZWN0cyBoMyB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNjN2M3Yzc7ICovXFxufVxcblxcbi5wcm9qZWN0cyBoMyB7XFxuICAgIHBhZGRpbmc6IC44cmVtIC4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNTYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuMXM7XFxufVxcblxcbi5wcm9qZWN0cyBhIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC41Nik7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbn1cXG5cXG4ucHJvamVjdCBoNCB7XFxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNTYpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wcm9qZWN0IGg0IGkge1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMwOCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5zZWxlY3RlZC1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzdjNztcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgaSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wcm9qZWN0IGk6aG92ZXIge1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY3MSk7XFxuICAgIFxcbn1cXG5cXG4uZm9ybS1kaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTE1MCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDUwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmZvcm0tZGl2LnBvcC11cCB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByb2plY3RzLWZvcm0ge1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnByb2plY3RzLWZvcm0ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1mb3JtIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnByb2plY3RzLWZvcm0gbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcblxcbi5wcm9qZWN0cy1mb3JtIGlucHV0IHtcXG4gICAgcGFkZGluZzogLjNyZW0gLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4ICM4ODg4ODg0ZiBzb2xpZDtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbn1cXG5cXG4ucHJvamVjdHMtZm9ybSBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDFweCAjODg4ODg4IHNvbGlkO1xcbn1cXG5cXG4ucHJvamVjdHMtZm9ybSAuYWRkLXByb2plY3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxNDUzYjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdHMtZm9ybSAuYWRkLXByb2plY3QtYnRuLmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmODQ3ZTtcXG59XFxuXFxuLnByb2plY3RzLWZvcm0gLmFkZC1wcm9qZWN0LWJ0bjpkaXNhYmxlZCB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbmFzaWRlOmhvdmVyIC5wcm9qZWN0cyBhIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxubWFpbiB7XFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxubWFpbiBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbm1haW4gYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICM4MDgwODA7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxufVxcblxcbm1haW4gaSB7XFxuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XFxuICAgIGNvbG9yOiAjZDE0NTNiO1xcbn1cXG5cXG5tYWluIGE6aG92ZXIge1xcbiAgICBjb2xvcjogI2QxNDUzYjtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBwYWRkaW5nOiAxcmVtIC44cmVtO1xcbiAgICBib3JkZXI6IDFweCAjYjRiNGI0IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0YXNrLW5hbWUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1ib3R0b206IC44cmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jaGVjayB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgd2lkdGg6IDEuMTVlbTtcXG4gICAgaGVpZ2h0OiAxLjE1ZW07XFxuICAgIGJvcmRlcjogMC4xNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4xNWVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaGVjazo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwLjY1ZW07XFxuICAgIGhlaWdodDogMC42NWVtO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tZm9ybS1jb250cm9sLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQ2FudmFzVGV4dDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbn1cXG5cXG4uY2hlY2s6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLmNoZWNrOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbWF4KDJweCwgMC4xNWVtKSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiBtYXgoMnB4LCAwLjE1ZW0pO1xcbiAgfVxcblxcbi5mb3JtIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSwgc2VsZWN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGJvcmRlcjogMXB4ICNjN2M3Yzcgc29saWQ7XFxuICAgIGNvbG9yOiAjNjQ2NDY0O1xcbn1cXG5cXG4uZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmRhdGUtcHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5kYXRlLXByaW9yaXR5IGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgY29sb3I6ICM2ZDZkNmQ7XFxufVxcblxcbi5idXR0b25zIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYnV0dG9ucyBidXR0b24ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnV0dG9ucyAuY2FuY2VsLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxufVxcblxcbi5idXR0b25zIC5jYW5jZWwtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXG59XFxuXFxuLmJ1dHRvbnMgLmFkZC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE0NTNiO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5idXR0b25zIC5hZGQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I2M2EzMTtcXG59XFxuXFxuLmJ1dHRvbnMgLmFkZC1idG4uZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGY4NDdlO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4ICNjN2M3Yzcgc29saWQ7XFxuICAgIC8qIHBhZGRpbmctYm90dG9tOiAuNXJlbTsgKi9cXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcblxcbi50YXNrLWluZm8gcC50YXNrLXByaW9yaXR5MSB7XFxuICAgIGNvbG9yOiAjZDE0NTNiO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udGFzay1pbmZvIHAudGFzay1wcmlvcml0eTIge1xcbiAgICBjb2xvcjogI2ViODkwOTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRhc2staW5mbyBwLnRhc2stcHJpb3JpdHkzIHtcXG4gICAgY29sb3I6ICMyNDZmZTA7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50YXNrLWluZm8gcC50YXNrLXByaW9yaXR5NCB7XFxuICAgIGNvbG9yOiAjNjY2O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udGFzay1pbmZvIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRhc2staW5mbyBwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiwgLmRhdGUsIC5wcmlvcml0eSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICM4ODg4ODg7XFxufVxcblxcbi50YXNrIC5jbG9zZSBpIHtcXG4gICAgY29sb3I6ICM4ODg4ODg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50YXNrOmhvdmVyIC5jbG9zZSBpIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2sgLmNsb3NlIGk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjYzc0NDNiO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE0NTNiO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5n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Z0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxNDUzYjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG59XFxuXFxuYXNpZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5hc2lkZSBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmEubWVudS1saW5rIHtcXG4gICAgcGFkZGluZzogLjhyZW0gLjhyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IC4xcztcXG59XFxuXFxuLm1lbnUtbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjN2M3O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAuMCAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgaDMge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjN2M3OyAqL1xcbn1cXG5cXG4ucHJvamVjdHMgaDMge1xcbiAgICBwYWRkaW5nOiAuOHJlbSAuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjU2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjFzO1xcbn1cXG5cXG4ucHJvamVjdHMgYSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNTYpO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW0gLjVyZW0gLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG59XFxuXFxuLnByb2plY3QgaDQge1xcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjU2KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJvamVjdCBoNCBpIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMDgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjN2M3O1xcbn1cXG5cXG4uc2VsZWN0ZWQtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIGkge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucHJvamVjdCBpOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NzEpO1xcbiAgICBcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0xNTAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA1MDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5mb3JtLWRpdi5wb3AtdXAge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wcm9qZWN0cy1mb3JtIHtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0cy1mb3JtIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtZm9ybSBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5wcm9qZWN0cy1mb3JtIGxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdHMtZm9ybSBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IC4zcmVtIC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCAjODg4ODg4NGYgc29saWQ7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG59XFxuXFxuLnByb2plY3RzLWZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAxcHggIzg4ODg4OCBzb2xpZDtcXG59XFxuXFxuLnByb2plY3RzLWZvcm0gLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTQ1M2I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3RzLWZvcm0gLmFkZC1wcm9qZWN0LWJ0bi5kaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZjg0N2U7XFxufVxcblxcbi5wcm9qZWN0cy1mb3JtIC5hZGQtcHJvamVjdC1idG46ZGlzYWJsZWQge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG5hc2lkZTpob3ZlciAucHJvamVjdHMgYSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbm1haW4ge1xcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbm1haW4gaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5tYWluIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjODA4MDgwO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbn1cXG5cXG5tYWluIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xcbiAgICBjb2xvcjogI2QxNDUzYjtcXG59XFxuXFxubWFpbiBhOmhvdmVyIHtcXG4gICAgY29sb3I6ICNkMTQ1M2I7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgcGFkZGluZzogMXJlbSAuOHJlbTtcXG4gICAgYm9yZGVyOiAxcHggI2I0YjRiNCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdGFzay1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuOHJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2hlY2sge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICAgIHdpZHRoOiAxLjE1ZW07XFxuICAgIGhlaWdodDogMS4xNWVtO1xcbiAgICBib3JkZXI6IDAuMTVlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA3NWVtKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2s6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMC42NWVtO1xcbiAgICBoZWlnaHQ6IDAuNjVlbTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLWZvcm0tY29udHJvbC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IENhbnZhc1RleHQ7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcXG59XFxuXFxuLmNoZWNrOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5jaGVjazpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG1heCgycHgsIDAuMTVlbSkgc29saWQgY3VycmVudENvbG9yO1xcbiAgICBvdXRsaW5lLW9mZnNldDogbWF4KDJweCwgMC4xNWVtKTtcXG4gIH1cXG5cXG4uZm9ybSBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sIHNlbGVjdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBib3JkZXI6IDFweCAjYzdjN2M3IHNvbGlkO1xcbiAgICBjb2xvcjogIzY0NjQ2NDtcXG59XFxuXFxuLmZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gICAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5kYXRlLXByaW9yaXR5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZGF0ZS1wcmlvcml0eSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGNvbG9yOiAjNmQ2ZDZkO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ1dHRvbnMgLmNhbmNlbC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbn1cXG5cXG4uYnV0dG9ucyAuY2FuY2VsLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxufVxcblxcbi5idXR0b25zIC5hZGQtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxNDUzYjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYnV0dG9ucyAuYWRkLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNjNhMzE7XFxufVxcblxcbi5idXR0b25zIC5hZGQtYnRuLmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmODQ3ZTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCAjYzdjN2M3IHNvbGlkO1xcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogLjVyZW07ICovXFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG5cXG4udGFzay1pbmZvIHAudGFzay1wcmlvcml0eTEge1xcbiAgICBjb2xvcjogI2QxNDUzYjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRhc2staW5mbyBwLnRhc2stcHJpb3JpdHkyIHtcXG4gICAgY29sb3I6ICNlYjg5MDk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50YXNrLWluZm8gcC50YXNrLXByaW9yaXR5MyB7XFxuICAgIGNvbG9yOiAjMjQ2ZmUwO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udGFzay1pbmZvIHAudGFzay1wcmlvcml0eTQge1xcbiAgICBjb2xvcjogIzY2NjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRhc2staW5mbyB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi50YXNrLWluZm8gcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24sIC5kYXRlLCAucHJpb3JpdHkge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjODg4ODg4O1xcbn1cXG5cXG4udGFzayAuY2xvc2UgaSB7XFxuICAgIGNvbG9yOiAjODg4ODg4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udGFzazpob3ZlciAuY2xvc2UgaSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrIC5jbG9zZSBpOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogI2M3NDQzYjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxNDUzYjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgSW5ib3ggZnJvbSBcIi4vaW5ib3hcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGFuZGxlSW5ib3goKSB7XG4gICAgY29uc3QgaW5ib3ggPSBuZXcgSW5ib3goKTtcblxuICAgIGNvbnN0IGNyZWF0ZUl0ZW0gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIGluYm94LmFkZEl0ZW0oaXRlbSk7XG4gICAgICAgIEl0ZW0uaWQrKztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGluYm94LmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuICdJbmJveCc7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IChpZCkgPT4ge1xuICAgICAgICBpbmJveC5kZWxldGVJdGVtKGlkKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VDaGVja1N0YXR1cyA9IChpZCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtcyA9IGluYm94LmdldEl0ZW1zKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmNoYW5nZUNoZWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVJdGVtLCBnZXRJdGVtcywgZ2V0TmFtZSwgZGVsZXRlSXRlbSwgY2hhbmdlQ2hlY2tTdGF0dXMgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW1cIjtcblxubGV0IHNlbGVjdGVkUHJvamVjdElkID0gMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhhbmRsZVByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpXG4gICAgICAgIFByb2plY3QuaWQrKztcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0c1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0c1tzZWxlY3RlZFByb2plY3RJZF0ubmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdElkID0gaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgSXRlbS5pZCsrO1xuICAgICAgICBwcm9qZWN0c1tzZWxlY3RlZFByb2plY3RJZF0uYWRkSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzW3NlbGVjdGVkUHJvamVjdElkXS5nZXRJdGVtcygpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaWQpID0+IHtcbiAgICAgICAgcHJvamVjdHNbc2VsZWN0ZWRQcm9qZWN0SWRdLmRlbGV0ZUl0ZW0oaWQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZUNoZWNrU3RhdHVzID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvamVjdHNbc2VsZWN0ZWRQcm9qZWN0SWRdLmdldEl0ZW1zKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmNoYW5nZUNoZWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgY3JlYXRlUHJvamVjdCwgXG4gICAgICAgIGRlbGV0ZVByb2plY3QsIFxuICAgICAgICBnZXRQcm9qZWN0cywgXG4gICAgICAgIGdldE5hbWUsXG4gICAgICAgIHNlbGVjdFByb2plY3QsIFxuICAgICAgICBzZWxlY3RlZFByb2plY3RJZCxcbiAgICAgICAgY3JlYXRlSXRlbSxcbiAgICAgICAgZ2V0SXRlbXMsXG4gICAgICAgIGRlbGV0ZUl0ZW0sXG4gICAgICAgIGNoYW5nZUNoZWNrU3RhdHVzLFxuICAgIH1cbn1cblxuZXhwb3J0IHsgc2VsZWN0ZWRQcm9qZWN0SWQgfTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmJveCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIGRlbGV0ZUl0ZW0oaXRlbUlkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0uaWQgPT09IGl0ZW1JZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLml0ZW1zW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0ge1xuICAgIHN0YXRpYyBpZCA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuaWQgPSBJdGVtLmlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNoZWNrTGlzdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNoYW5nZUNoZWNrKCkge1xuICAgICAgICB0aGlzLmNoZWNrTGlzdCA9IHRoaXMuY2hlY2tMaXN0ID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgSW5ib3ggZnJvbSBcIi4vaW5ib3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCBleHRlbmRzIEluYm94IHtcbiAgICBzdGF0aWMgaWQgPSAwO1xuXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkID0gUHJvamVjdC5pZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG59IiwiXG5mdW5jdGlvbiBIYW5kbGVUYXNrVUkoaW5zdGFuY2UpIHtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcblxuICAgIC8vIFNob3cgZm9ybVxuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgIFxuICAgIC8vIEZvcm0gYnV0dG9uc1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtYnRuJyk7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4nKTtcblxuICAgIC8vIGFkZEJ0bi5yZXBsYWNlV2l0aChhZGRCdG4uY2xvbmVOb2RlKHRydWUpKTsgICBcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cbiAgICAgICAgYWRkQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7IFxuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpO1xuXG4gICAgYWRkQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTsgICAgXG5cbiAgICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XG4gICAgICAgIGlmKG5hbWUudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICBhZGRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGFkZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpOyAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgICAgICBcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcblxuICAgICAgICBcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlSXRlbShuYW1lLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUsIGZhbHNlKTtcbiAgICAgICAgc2hvd1Rhc2tVSShpbnN0YW5jZSwgaW5zdGFuY2UuZ2V0TmFtZSgpKTtcbiAgICAgICAgZGVsZXRlVGFzayhpbnN0YW5jZSk7XG4gICAgICAgIGNoZWNrVGFzayhpbnN0YW5jZSk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG4gICAgICAgIG5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9ICcnO1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9ICcwJztcblxuICAgICAgICBhZGRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTsgICAgXG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGluc3RhbmNlKSB7XG4gICAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKTtcbiAgICBcbiAgICBkZWxldGVCdG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXG4gICAgICAgICAgICBlcmFzZVRhc2soZSwgaW5zdGFuY2UpOyBcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59XG5cbmZ1bmN0aW9uIGVyYXNlVGFzayhlLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IHRhc2sgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCBpZCA9ICt0YXNrLmRhdGFzZXQuaWQ7XG5cbiAgICBpbnN0YW5jZS5kZWxldGVJdGVtKGlkKTtcbiAgICB0YXNrLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBjaGVja1Rhc2soaW5zdGFuY2UpIHtcbiAgICBjb25zdCBjaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XG5cbiAgICBjaGVja0JveGVzLmZvckVhY2goY2hlY2tCb3ggPT4ge1xuICAgICAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4geyBcbiAgICAgICAgICAgIGNoYW5nZVN0YXR1cyhlLCBpbnN0YW5jZSlcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VTdGF0dXMoZSwgaW5zdGFuY2UpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgaWQgPSArdGFzay5kYXRhc2V0LmlkO1xuXG4gICAgICAgIGluc3RhbmNlLmRlbGV0ZUl0ZW0oaWQpO1xuICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDaGVja1N0YXR1cyhpZCk7XG4gICAgfSwgNTAwKVxufVxuXG5cblxuZnVuY3Rpb24gc2hvd1Rhc2tVSShpbnN0YW5jZSwgdGl0bGUpIHsgICAgXG5cbiAgICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10aXRsZScpO1xuICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgY29uc3QgaXRlbXMgPSBpbnN0YW5jZS5nZXRJdGVtcygpO1xuICAgIGNvbnNvbGUubG9nKHRpdGxlLCBpdGVtcyk7XG5cbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICAgIHRhc2tzLmlubmVySFRNTCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIFxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICB0YXNrRGl2LmRhdGFzZXQuaWQgPSBpdGVtc1tpXS5pZDtcbiAgICBcbiAgICAgICAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgY2hlY2submFtZSA9ICdjaGVjayc7XG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gICAgXG4gICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGNoZWNrKTtcblxuICAgIFxuICAgICAgICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtc1tpXS50aXRsZTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbXNbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGl0ZW1zW2ldLmR1ZURhdGU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICAgICAgaWYgKGl0ZW1zW2ldLnByaW9yaXR5ICE9PSAnMCcpIHtcbiAgICAgICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5ICR7aXRlbXNbaV0ucHJpb3JpdHl9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoaXRlbXNbaV0ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHkxJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5MicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eTMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHk0Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIFxuICAgICAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuXG4gICAgICAgIGNvbnN0IGNsb3NlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNsb3NlRGl2LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG5cbiAgICAgICAgY29uc3QgcEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdmYS14bWFyaycpO1xuICAgICAgICBwSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICAgICAgcEljb24uYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgY2xvc2VEaXYuYXBwZW5kQ2hpbGQocEljb24pO1xuICAgIFxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGlucHV0RGl2KTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY2xvc2VEaXYpO1xuICAgIFxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrRGl2KTsgICAgICAgIFxuICAgIH1cblxuICAgIGRlbGV0ZVRhc2soaW5zdGFuY2UpO1xuICAgIGNoZWNrVGFzayhpbnN0YW5jZSk7XG5cbn1cblxuZXhwb3J0IHtcbiAgICBIYW5kbGVUYXNrVUksXG4gICAgc2hvd1Rhc2tVSVxufTsiLCJpbXBvcnQgSGFuZGxlSW5ib3ggZnJvbSAnLi4vSGFuZGxlSW5ib3gnO1xuaW1wb3J0IHsgSGFuZGxlVGFza1VJLCBzaG93VGFza1VJIH0gZnJvbSAnLi9IYW5kbGVUYXNrVUknO1xuXG5cbi8vICBpbmJveC5jcmVhdGVJdGVtKFwiVGFyZWFcIiwgXCJIYWNlciBsYSB0YXJlYVwiLCBcIjA0LzAxLzIwMjNcIiwgNCk7XG4vLyAgaW5ib3guY3JlYXRlSXRlbSgyLCBcIkJhcnJlclwiLCBcIkhhY2VyIGxhIHRhcmVhXCIsIFwiMDQvMDEvMjAyM1wiLCA0LCBcIm5vdGFzXCIsIGZhbHNlKTtcbi8vICBpbmJveC5nZXRJdGVtcygpO1xuLy8gIGluYm94LmNoYW5nZUNoZWNrU3RhdHVzKDEpO1xuXG4vLyBjb25zdCBwcm9qZWN0cyA9IEhhbmRsZVByb2plY3RzKCk7XG4vLyBwcm9qZWN0cy5jcmVhdGVQcm9qZWN0KFwiUHJvZ3JhbW1pbmdcIik7XG4vLyBwcm9qZWN0cy5jcmVhdGVQcm9qZWN0KFwiR29hbHNcIik7XG4vLyBwcm9qZWN0cy5zZWxlY3RQcm9qZWN0KDApO1xuLy8gcHJvamVjdHMuY3JlYXRlSXRlbShcIlRhcmVhXCIsIFwiSGFjZXIgbGEgdGFyZWFcIiwgXCIwNC8wMS8yMDIzXCIsIDQsIFwibm90YXNcIiwgZmFsc2UpO1xuLy8gcHJvamVjdHMuc2VsZWN0UHJvamVjdCgxKTtcbi8vIHByb2plY3RzLmNyZWF0ZUl0ZW0oXCJUYXJlYVwiLCBcIkhhY2VyIGxhIHRhcmVhXCIsIFwiMDQvMDEvMjAyM1wiLCA0LCBcIm5vdGFzXCIsIGZhbHNlKTtcbi8vIHByb2plY3RzLmNyZWF0ZUl0ZW0oXCJUYXJlYVwiLCBcIkhhY2VyIGxhIHRhcmVhXCIsIFwiMDQvMDEvMjAyM1wiLCA0LCBcIm5vdGFzXCIsIGZhbHNlKTtcbi8vIHByb2plY3RzLmdldFByb2plY3RzKCk7XG5jb25zdCBpbmJveCA9IEhhbmRsZUluYm94KCk7XG5cbmV4cG9ydCB7XG4gICAgaW5ib3gsXG4gICAgSGFuZGxlVGFza1VJLFxuICAgIHNob3dUYXNrVUksXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEhhbmRsZVByb2plY3RzLCB7IHNlbGVjdGVkUHJvamVjdElkIH1mcm9tICcuL21vZHVsZXMvSGFuZGxlUHJvamVjdHMnO1xuaW1wb3J0IHsgaW5ib3gsIEhhbmRsZVRhc2tVSSwgc2hvd1Rhc2tVSSB9IGZyb20gJy4vbW9kdWxlcy91aS9JbmJveFVJJztcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IHByb2plY3QgPSBIYW5kbGVQcm9qZWN0cygpO1xuXG5mdW5jdGlvbiBIYW5kbGVQcm9qZWN0VUkoKSB7XG4gICAgcHJvamVjdC5jcmVhdGVQcm9qZWN0KCdJbmJveCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmJveCcpLmRhdGFzZXQuaWQgPSAwO1xuXG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1wcm9qZWN0Jyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1kaXYnKTtcblxuICAgIGNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ3BvcC11cCcpO1xuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7ICAgICAgICBcbiAgICB9KTtcblxuICAgIC8vIEZvcm0gYnV0dG9uc1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtcHJvamVjdC1idG4nKTtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7ICAgIFxuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcC11cCcpO1xuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7ICAgICAgICBcbiAgICB9KTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG5cbiAgICBhZGRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpOyAgICBcblxuICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHtcbiAgICAgICAgaWYobmFtZS52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGFkZEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYWRkQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7ICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBwcm9qZWN0LmNyZWF0ZVByb2plY3QobmFtZS52YWx1ZSk7ICAgICAgXG5cbiAgICAgICAgY29uc3QgbGFzdFByb2plY3QgPSBwcm9qZWN0LmdldFByb2plY3RzKCkuc2xpY2UoLTEpO1xuICAgICAgICBwcm9qZWN0LnNlbGVjdFByb2plY3QobGFzdFByb2plY3RbMF0uaWQpO1xuICAgICAgICBcbiAgICAgICAgc2hvd1Byb2plY3RVSSgpO1xuICAgICAgICBIYW5kbGVDaGFuZ2VQcm9qZWN0KCk7XG4gICAgICAgIGRlbGV0ZVByb2plY3QoKTtcbiAgICAgICAgc2hvd1Rhc2tVSShwcm9qZWN0LCBsYXN0UHJvamVjdFswXS5uYW1lKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBzZWxlY3RlZC1wcm9qZWN0IGNsYXNzIGZyb20gdGhlIG90aGVyIHByb2plY3RzXG4gICAgICAgIGlmIChzZWxlY3RlZFByb2plY3RJZCAhPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbGFzdFByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdHMoKS5zbGljZSgtMilbMF0uaWR9XCJdYCk7XG4gICAgICAgICAgICBsYXN0UHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtcHJvamVjdCcpO1xuICAgICAgICB9IFxuXG4gICAgICAgIGNvbnN0IHByb2plY3RzRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTsgICAgICAgICAgICAgICAgXG4gICAgICAgIHByb2plY3RzRE9NLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXByb2plY3QnKSk7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGxhc3RQcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtzZWxlY3RlZFByb2plY3RJZH1cIl1gKTtcbiAgICAgICAgbGFzdFByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXByb2plY3QnKTtcbiAgICAgICAgXG5cblxuICAgICAgICBhZGRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTsgIFxuXG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcC11cCcpO1xuICAgICAgICBuYW1lLnZhbHVlID0gJyc7XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgICBcblxuICAgICAgICAgIFxuICAgIH0pO1xuXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gICAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtcHJvamVjdCcpO1xuXG4gICAgZGVsZXRlQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gK3Byb2plY3REaXYuZGF0YXNldC5pZDtcblxuICAgICAgICAgICAgc2hvd1Rhc2tVSShpbmJveCwgJ0luYm94Jyk7XG4gICAgICAgICAgICBwcm9qZWN0LnNlbGVjdFByb2plY3QoMCk7XG5cbiAgICAgICAgICAgIHByb2plY3QuZGVsZXRlUHJvamVjdChpZCk7XG4gICAgICAgICAgICBwcm9qZWN0RGl2LnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdFVJKCkge1xuICAgIC8vIDxkaXYgY2xhc3M9XCJwcm9qZWN0XCI+XG4gICAgLy8gICAgIDxoND5Qcm9qZWN0IDEgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT48L2g0PlxuICAgIC8vIDwvZGl2PlxuXG4gICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0LmdldFByb2plY3RzKCk7XG5cbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTtcbiAgICBsZXQgaSA9IHByb2plY3RzLmxlbmd0aCA9PT0gMCA/IDAgOiBwcm9qZWN0cy5sZW5ndGggLSAxO1xuXG4gICAgZm9yICg7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpOyAgICAgICAgXG4gICAgICAgIHByb2plY3REaXYuZGF0YXNldC5pZCA9IHByb2plY3RzW2ldLmlkO1xuICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIFxuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5uYW1lO1xuICAgIFxuICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XG4gICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZmEteG1hcmsnKTtcbiAgICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdCcpOyAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICB9XG4gICAgXG4gICAgXG59XG5cbmZ1bmN0aW9uIEhhbmRsZUNoYW5nZVByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdHNET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuXG4gICAgcHJvamVjdHNET00uZm9yRWFjaChwcm9qZWN0VGFiID0+IHtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdHNET00uZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtcHJvamVjdCcpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1wcm9qZWN0Jyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICtwcm9qZWN0VGFiLmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBwcm9qZWN0LnNlbGVjdFByb2plY3QoaWQpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0FyciA9IHByb2plY3QuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0c0FycltpXS5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Rhc2tVSShwcm9qZWN0LCBwcm9qZWN0c0FycltpXS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH0pO1xufVxuXG5cbkhhbmRsZVByb2plY3RVSSgpO1xuSGFuZGxlVGFza1VJKHByb2plY3QpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==