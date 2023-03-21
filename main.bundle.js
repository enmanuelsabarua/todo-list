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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    height: 100%;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    position: relative;\n}\n\nh1 {\n    font-size: 3rem;\n}\n\nheader {\n    background-color: #d1453b;\n    color: white;\n    padding: 1rem 2rem;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    height: 100%; \n}\n\naside {\n    background-color: #ececec;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n}\n\naside a {\n    text-decoration: none;\n    color: black;\n}\n\n.menu-link {\n    padding: .8rem .8rem;\n    border-radius: 10px;\n    transition: .1s;\n}\n\n.menu-link:hover {\n    background-color: #c7c7c7;\n}\n\n.active {\n    background-color: #c7c7c7;\n}\n\n.projects {\n    margin-top: 1rem;\n    padding: .0 1rem;\n}\n\n.projects h3 {\n    /* background-color: #c7c7c7; */\n}\n\n.projects h3 {\n    padding: .8rem .2rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: rgba(0,0,0,0.56);\n    border-radius: 10px;\n    transition: .1s;\n}\n\n.projects a {\n    font-size: 1.1rem;\n    opacity: 0;\n    transition: .2s;\n    color: rgba(0,0,0,0.56);\n}\n\n.project {\n    padding: .5rem 1rem .5rem .5rem;\n    border-radius: 10px;\n    transition: .2s;\n}\n\n.project h4 {\n    color: rgba(0,0,0,0.56);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-weight: 400;\n}\n\n.project h4 i {\n    color: rgba(0, 0, 0, 0.308);\n    opacity: 0;\n    transition: .2s;\n}\n\n.project:hover {\n    cursor: pointer;\n    background-color: #c7c7c7;\n}\n\n.project:hover i {\n    opacity: 1;\n}\n\n.project i:hover {\n    color: rgba(0, 0, 0, 0.671);\n    \n}\n\n.form-div {\n    position: absolute;\n    top: -150%;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: #00000050;\n    opacity: 0;\n    transition: opacity .2s;\n}\n\n.form-div.pop-up {\n    top: 0;\n    opacity: 1;\n}\n\n.projects-form {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    position: absolute;\n    background-color: white;\n    border-radius: 15px;\n    padding: 1rem;\n}\n\n.projects-form {\n    width: 300px;\n}\n\n.projects-form h2 {\n    margin-bottom: 1rem;\n}\n\n.projects-form label {\n    display: block;\n    margin-bottom: .5rem;\n}\n\n.projects-form input {\n    padding: .3rem .5rem;\n    width: 100%;\n    border-radius: 5px;\n    border: 1px #8888884f solid;\n    transition: .2s;\n}\n\n.projects-form input:focus {\n    outline: transparent;\n    border: 1px #888888 solid;\n}\n\n.projects-form .add-project-btn {\n    background-color: #d1453b;\n    color: white;\n}\n\n.projects-form .add-project-btn.disabled {\n    background-color: #df847e;\n}\n\n.projects-form .add-project-btn:disabled {\n    cursor: not-allowed;\n}\n\naside:hover .projects a {\n    opacity: 1;\n}\n\nmain {\n    padding: 1rem 3rem;\n    max-width: 800px;\n}\n\nmain h2 {\n    margin-bottom: 1rem;\n}\n\nmain a {\n    text-decoration: none;\n    color: #808080;\n    font-size: .9rem;\n}\n\nmain i {\n    margin-right: .5rem;\n    color: #d1453b;\n}\n\nmain a:hover {\n    color: #d1453b;\n}\n\n.form {\n    padding: 1rem .8rem;\n    border: 1px #b4b4b4 solid;\n    border-radius: 10px;\n}\n\n.hide {\n    display: none;\n}\n\n#task-name {\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.form input[type=\"text\"] {\n    border: none;\n    margin-bottom: .8rem;\n    display: block;\n    width: 100%;\n}\n\n.check {\n    appearance: none;\n    background-color: #fff;\n    margin: 0;\n    font: inherit;\n    color: currentColor;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.15em solid currentColor;\n    border-radius: 0.15em;\n    transform: translateY(-0.075em);\n    display: grid;\n    place-content: center;\n}\n\n.check::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n    background-color: CanvasText;\n    transform-origin: bottom left;\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\n.check:checked::before {\n    transform: scale(1);\n}\n\n.check:focus {\n    outline: max(2px, 0.15em) solid currentColor;\n    outline-offset: max(2px, 0.15em);\n  }\n\n.form input[type=\"date\"], select {\n    border-radius: 5px;\n    padding: 2px;\n    border: 1px #c7c7c7 solid;\n    color: #646464;\n}\n\n.form input[type=\"text\"]:focus {\n    outline: transparent;\n}\n\n.date-priority {\n    display: flex;\n    gap: 2rem;\n}\n\n.date-priority label {\n    font-size: .9rem;\n    color: #6d6d6d;\n}\n\n.buttons {\n    margin-top: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.buttons button {\n    flex: 1;\n    padding: .5rem 1rem;\n    border: none;\n    border-radius: 8px;\n    font-weight: 700;\n}\n\n.buttons button:hover {\n    cursor: pointer;\n}\n\n.buttons .cancel-btn {\n    background-color: #f0f0f0;\n}\n\n.buttons .cancel-btn:hover {\n    background-color: #d4d4d4;\n}\n\n.buttons .add-btn {\n    background-color: #d1453b;\n    color: white;\n}\n\n.buttons .add-btn:hover {\n    background-color: #b63a31;\n}\n\n.buttons .add-btn.disabled {\n    background-color: #df847e;\n    cursor: not-allowed;\n}\n\n.task {\n    display: flex;\n    gap: 1rem;\n    border-bottom: 1px #c7c7c7 solid;\n    /* padding-bottom: .5rem; */\n    margin-bottom: .5rem;\n}\n\n.task-info p.task-priority1 {\n    color: #d1453b;\n    font-weight: 700;\n}\n\n.task-info p.task-priority2 {\n    color: #eb8909;\n    font-weight: 700;\n}\n\n.task-info p.task-priority3 {\n    color: #246fe0;\n    font-weight: 700;\n}\n\n.task-info p.task-priority4 {\n    color: #666;\n    font-weight: 700;\n}\n\n.task-info {\n    flex: 1;\n}\n\n.task-info p {\n    margin-bottom: 6px;\n}\n\n.task-description, .date, .priority {\n    font-size: 14px;\n    color: #888888;\n}\n\n.task .close i {\n    color: #888888;\n    opacity: 0;\n    transition: .2s;\n    font-size: 1.3rem;\n}\n\n.task:hover .close i {\n    opacity: 1;\n}\n\n.task .close i:hover {\n    cursor: pointer;\n    color: #c7443b;\n}\n\nfooter {\n    background-color: #d1453b;\n    padding: 1rem;\n    display: flex;\n    justify-content: center;\n    color: white;\n    font-size: 1.2rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    height: 100%;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    position: relative;\n}\n\nh1 {\n    font-size: 3rem;\n}\n\nheader {\n    background-color: #d1453b;\n    color: white;\n    padding: 1rem 2rem;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    height: 100%; \n}\n\naside {\n    background-color: #ececec;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n}\n\naside a {\n    text-decoration: none;\n    color: black;\n}\n\n.menu-link {\n    padding: .8rem .8rem;\n    border-radius: 10px;\n    transition: .1s;\n}\n\n.menu-link:hover {\n    background-color: #c7c7c7;\n}\n\n.active {\n    background-color: #c7c7c7;\n}\n\n.projects {\n    margin-top: 1rem;\n    padding: .0 1rem;\n}\n\n.projects h3 {\n    /* background-color: #c7c7c7; */\n}\n\n.projects h3 {\n    padding: .8rem .2rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: rgba(0,0,0,0.56);\n    border-radius: 10px;\n    transition: .1s;\n}\n\n.projects a {\n    font-size: 1.1rem;\n    opacity: 0;\n    transition: .2s;\n    color: rgba(0,0,0,0.56);\n}\n\n.project {\n    padding: .5rem 1rem .5rem .5rem;\n    border-radius: 10px;\n    transition: .2s;\n}\n\n.project h4 {\n    color: rgba(0,0,0,0.56);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-weight: 400;\n}\n\n.project h4 i {\n    color: rgba(0, 0, 0, 0.308);\n    opacity: 0;\n    transition: .2s;\n}\n\n.project:hover {\n    cursor: pointer;\n    background-color: #c7c7c7;\n}\n\n.project:hover i {\n    opacity: 1;\n}\n\n.project i:hover {\n    color: rgba(0, 0, 0, 0.671);\n    \n}\n\n.form-div {\n    position: absolute;\n    top: -150%;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: #00000050;\n    opacity: 0;\n    transition: opacity .2s;\n}\n\n.form-div.pop-up {\n    top: 0;\n    opacity: 1;\n}\n\n.projects-form {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    position: absolute;\n    background-color: white;\n    border-radius: 15px;\n    padding: 1rem;\n}\n\n.projects-form {\n    width: 300px;\n}\n\n.projects-form h2 {\n    margin-bottom: 1rem;\n}\n\n.projects-form label {\n    display: block;\n    margin-bottom: .5rem;\n}\n\n.projects-form input {\n    padding: .3rem .5rem;\n    width: 100%;\n    border-radius: 5px;\n    border: 1px #8888884f solid;\n    transition: .2s;\n}\n\n.projects-form input:focus {\n    outline: transparent;\n    border: 1px #888888 solid;\n}\n\n.projects-form .add-project-btn {\n    background-color: #d1453b;\n    color: white;\n}\n\n.projects-form .add-project-btn.disabled {\n    background-color: #df847e;\n}\n\n.projects-form .add-project-btn:disabled {\n    cursor: not-allowed;\n}\n\naside:hover .projects a {\n    opacity: 1;\n}\n\nmain {\n    padding: 1rem 3rem;\n    max-width: 800px;\n}\n\nmain h2 {\n    margin-bottom: 1rem;\n}\n\nmain a {\n    text-decoration: none;\n    color: #808080;\n    font-size: .9rem;\n}\n\nmain i {\n    margin-right: .5rem;\n    color: #d1453b;\n}\n\nmain a:hover {\n    color: #d1453b;\n}\n\n.form {\n    padding: 1rem .8rem;\n    border: 1px #b4b4b4 solid;\n    border-radius: 10px;\n}\n\n.hide {\n    display: none;\n}\n\n#task-name {\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.form input[type=\"text\"] {\n    border: none;\n    margin-bottom: .8rem;\n    display: block;\n    width: 100%;\n}\n\n.check {\n    appearance: none;\n    background-color: #fff;\n    margin: 0;\n    font: inherit;\n    color: currentColor;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.15em solid currentColor;\n    border-radius: 0.15em;\n    transform: translateY(-0.075em);\n    display: grid;\n    place-content: center;\n}\n\n.check::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n    background-color: CanvasText;\n    transform-origin: bottom left;\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\n.check:checked::before {\n    transform: scale(1);\n}\n\n.check:focus {\n    outline: max(2px, 0.15em) solid currentColor;\n    outline-offset: max(2px, 0.15em);\n  }\n\n.form input[type=\"date\"], select {\n    border-radius: 5px;\n    padding: 2px;\n    border: 1px #c7c7c7 solid;\n    color: #646464;\n}\n\n.form input[type=\"text\"]:focus {\n    outline: transparent;\n}\n\n.date-priority {\n    display: flex;\n    gap: 2rem;\n}\n\n.date-priority label {\n    font-size: .9rem;\n    color: #6d6d6d;\n}\n\n.buttons {\n    margin-top: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.buttons button {\n    flex: 1;\n    padding: .5rem 1rem;\n    border: none;\n    border-radius: 8px;\n    font-weight: 700;\n}\n\n.buttons button:hover {\n    cursor: pointer;\n}\n\n.buttons .cancel-btn {\n    background-color: #f0f0f0;\n}\n\n.buttons .cancel-btn:hover {\n    background-color: #d4d4d4;\n}\n\n.buttons .add-btn {\n    background-color: #d1453b;\n    color: white;\n}\n\n.buttons .add-btn:hover {\n    background-color: #b63a31;\n}\n\n.buttons .add-btn.disabled {\n    background-color: #df847e;\n    cursor: not-allowed;\n}\n\n.task {\n    display: flex;\n    gap: 1rem;\n    border-bottom: 1px #c7c7c7 solid;\n    /* padding-bottom: .5rem; */\n    margin-bottom: .5rem;\n}\n\n.task-info p.task-priority1 {\n    color: #d1453b;\n    font-weight: 700;\n}\n\n.task-info p.task-priority2 {\n    color: #eb8909;\n    font-weight: 700;\n}\n\n.task-info p.task-priority3 {\n    color: #246fe0;\n    font-weight: 700;\n}\n\n.task-info p.task-priority4 {\n    color: #666;\n    font-weight: 700;\n}\n\n.task-info {\n    flex: 1;\n}\n\n.task-info p {\n    margin-bottom: 6px;\n}\n\n.task-description, .date, .priority {\n    font-size: 14px;\n    color: #888888;\n}\n\n.task .close i {\n    color: #888888;\n    opacity: 0;\n    transition: .2s;\n    font-size: 1.3rem;\n}\n\n.task:hover .close i {\n    opacity: 1;\n}\n\n.task .close i:hover {\n    cursor: pointer;\n    color: #c7443b;\n}\n\nfooter {\n    background-color: #d1453b;\n    padding: 1rem;\n    display: flex;\n    justify-content: center;\n    color: white;\n    font-size: 1.2rem;\n}"],"sourceRoot":""}]);
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
        addTaskButton.classList.remove('hide');

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
        
        instance.createItem(name.value, description.value, dueDate.value, priority.value, false);
        showTaskUI(instance);
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

    });
}


function deleteTask(instance) {
    const deleteBtns = document.querySelectorAll('.delete');

    
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => { eraseTask(e, instance)} );
    });

}

function eraseTask(e, instance) {
    const task = e.target.parentNode.parentNode.parentNode;
    const id = +task.dataset.id;

    console.log(task);

    instance.deleteItem(id);
    task.remove();
}

function checkTask(instance) {
    const checkBoxes = document.querySelectorAll('.check');

    checkBoxes.forEach(checkBox => {
        checkBox.addEventListener('change', (e) => { changeStatus(e, instance)});
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

// HandleTaskUI(inbox);
// showTaskUI(inbox);



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
// import HandleInbox from './modules/HandleInbox';





const project = (0,_modules_HandleProjects__WEBPACK_IMPORTED_MODULE_0__["default"])();

function HandleProjectUI() {
    const createProjectBtn = document.querySelector('.create-project');
    const projectForm = document.querySelector('.form-div');

    createProjectBtn.addEventListener('click', e => {
        e.preventDefault();

        projectForm.classList.add('pop-up');
        
    });

    // Form buttons
    const cancelBtn = document.querySelector('.cancel-project-btn');
    const addBtn = document.querySelector('.add-project-btn');

    cancelBtn.addEventListener('click', e => {
        projectForm.classList.remove('pop-up');
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
        showProjectUI();
        deleteProject();

        projectForm.classList.remove('pop-up');
        name.value = '';
    });

}

function deleteProject() {
    const deleteBtns = document.querySelectorAll('.delete-project');

    deleteBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            const projectDiv = e.target.parentNode.parentNode;
            const id = +projectDiv.dataset.id;

            console.log(projectDiv);

            project.deleteProject(id);
            projectDiv.remove();
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

HandleProjectUI();

(0,_modules_ui_InboxUI__WEBPACK_IMPORTED_MODULE_1__.HandleTaskUI)(_modules_ui_InboxUI__WEBPACK_IMPORTED_MODULE_1__.inbox);
(0,_modules_ui_InboxUI__WEBPACK_IMPORTED_MODULE_1__.showTaskUI)(_modules_ui_InboxUI__WEBPACK_IMPORTED_MODULE_1__.inbox, 'Inbox');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtB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QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVyxxQkFBcUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBWSxDQUFDLHNEQUFLO0FBQ2xCLCtEQUFVLENBQUMsc0RBQUssVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9IYW5kbGVJbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9IYW5kbGVQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdWkvSGFuZGxlVGFza1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpL0luYm94VUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTQ1M2I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxuICAgIGhlaWdodDogMTAwJTsgXFxufVxcblxcbmFzaWRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuYXNpZGUgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubWVudS1saW5rIHtcXG4gICAgcGFkZGluZzogLjhyZW0gLjhyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IC4xcztcXG59XFxuXFxuLm1lbnUtbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjN2M3O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAuMCAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgaDMge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjN2M3OyAqL1xcbn1cXG5cXG4ucHJvamVjdHMgaDMge1xcbiAgICBwYWRkaW5nOiAuOHJlbSAuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjU2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjFzO1xcbn1cXG5cXG4ucHJvamVjdHMgYSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNTYpO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW0gLjVyZW0gLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG59XFxuXFxuLnByb2plY3QgaDQge1xcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjU2KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJvamVjdCBoNCBpIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMDgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjN2M3O1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciBpIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByb2plY3QgaTpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjcxKTtcXG4gICAgXFxufVxcblxcbi5mb3JtLWRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTUwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xcbn1cXG5cXG4uZm9ybS1kaXYucG9wLXVwIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucHJvamVjdHMtZm9ybSB7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMtZm9ybSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLnByb2plY3RzLWZvcm0gaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMtZm9ybSBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLnByb2plY3RzLWZvcm0gaW5wdXQge1xcbiAgICBwYWRkaW5nOiAuM3JlbSAuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggIzg4ODg4ODRmIHNvbGlkO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxufVxcblxcbi5wcm9qZWN0cy1mb3JtIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMXB4ICM4ODg4ODggc29saWQ7XFxufVxcblxcbi5wcm9qZWN0cy1mb3JtIC5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE0NTNiO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0cy1mb3JtIC5hZGQtcHJvamVjdC1idG4uZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGY4NDdlO1xcbn1cXG5cXG4ucHJvamVjdHMtZm9ybSAuYWRkLXByb2plY3QtYnRuOmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuYXNpZGU6aG92ZXIgLnByb2plY3RzIGEge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG5tYWluIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxubWFpbiBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzgwODA4MDtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxubWFpbiBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcXG4gICAgY29sb3I6ICNkMTQ1M2I7XFxufVxcblxcbm1haW4gYTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZDE0NTNiO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIHBhZGRpbmc6IDFyZW0gLjhyZW07XFxuICAgIGJvcmRlcjogMXB4ICNiNGI0YjQgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rhc2stbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjhyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNoZWNrIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgICB3aWR0aDogMS4xNWVtO1xcbiAgICBoZWlnaHQ6IDEuMTVlbTtcXG4gICAgYm9yZGVyOiAwLjE1ZW0gc29saWQgY3VycmVudENvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVlbSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDAuNjVlbTtcXG4gICAgaGVpZ2h0OiAwLjY1ZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1mb3JtLWNvbnRyb2wtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXNUZXh0O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxufVxcblxcbi5jaGVjazpjaGVja2VkOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uY2hlY2s6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBtYXgoMnB4LCAwLjE1ZW0pIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IG1heCgycHgsIDAuMTVlbSk7XFxuICB9XFxuXFxuLmZvcm0gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLCBzZWxlY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgYm9yZGVyOiAxcHggI2M3YzdjNyBzb2xpZDtcXG4gICAgY29sb3I6ICM2NDY0NjQ7XFxufVxcblxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZGF0ZS1wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmRhdGUtcHJpb3JpdHkgbGFiZWwge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogIzZkNmQ2ZDtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9ucyBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b25zIC5jYW5jZWwtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG59XFxuXFxuLmJ1dHRvbnMgLmNhbmNlbC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xcbn1cXG5cXG4uYnV0dG9ucyAuYWRkLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTQ1M2I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJ1dHRvbnMgLmFkZC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjYzYTMxO1xcbn1cXG5cXG4uYnV0dG9ucyAuYWRkLWJ0bi5kaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZjg0N2U7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggI2M3YzdjNyBzb2xpZDtcXG4gICAgLyogcGFkZGluZy1ib3R0b206IC41cmVtOyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLnRhc2staW5mbyBwLnRhc2stcHJpb3JpdHkxIHtcXG4gICAgY29sb3I6ICNkMTQ1M2I7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50YXNrLWluZm8gcC50YXNrLXByaW9yaXR5MiB7XFxuICAgIGNvbG9yOiAjZWI4OTA5O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udGFzay1pbmZvIHAudGFzay1wcmlvcml0eTMge1xcbiAgICBjb2xvcjogIzI0NmZlMDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRhc2staW5mbyBwLnRhc2stcHJpb3JpdHk0IHtcXG4gICAgY29sb3I6ICM2NjY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udGFzay1pbmZvIHAge1xcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uLCAuZGF0ZSwgLnByaW9yaXR5IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzg4ODg4ODtcXG59XFxuXFxuLnRhc2sgLmNsb3NlIGkge1xcbiAgICBjb2xvcjogIzg4ODg4ODtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRhc2s6aG92ZXIgLmNsb3NlIGkge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzayAuY2xvc2UgaTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICNjNzQ0M2I7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTQ1M2I7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lB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eUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsMkJBQTJCO0lBQzNCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTQ1M2I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxuICAgIGhlaWdodDogMTAwJTsgXFxufVxcblxcbmFzaWRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuYXNpZGUgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubWVudS1saW5rIHtcXG4gICAgcGFkZGluZzogLjhyZW0gLjhyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IC4xcztcXG59XFxuXFxuLm1lbnUtbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2M3Yzc7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjN2M3O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAuMCAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgaDMge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjN2M3OyAqL1xcbn1cXG5cXG4ucHJvamVjdHMgaDMge1xcbiAgICBwYWRkaW5nOiAuOHJlbSAuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjU2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjFzO1xcbn1cXG5cXG4ucHJvamVjdHMgYSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNTYpO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW0gLjVyZW0gLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG59XFxuXFxuLnByb2plY3QgaDQge1xcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjU2KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJvamVjdCBoNCBpIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMDgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjN2M3O1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciBpIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByb2plY3QgaTpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjcxKTtcXG4gICAgXFxufVxcblxcbi5mb3JtLWRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTUwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xcbn1cXG5cXG4uZm9ybS1kaXYucG9wLXVwIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucHJvamVjdHMtZm9ybSB7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMtZm9ybSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLnByb2plY3RzLWZvcm0gaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMtZm9ybSBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLnByb2plY3RzLWZvcm0gaW5wdXQge1xcbiAgICBwYWRkaW5nOiAuM3JlbSAuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggIzg4ODg4ODRmIHNvbGlkO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxufVxcblxcbi5wcm9qZWN0cy1mb3JtIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMXB4ICM4ODg4ODggc29saWQ7XFxufVxcblxcbi5wcm9qZWN0cy1mb3JtIC5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE0NTNiO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0cy1mb3JtIC5hZGQtcHJvamVjdC1idG4uZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGY4NDdlO1xcbn1cXG5cXG4ucHJvamVjdHMtZm9ybSAuYWRkLXByb2plY3QtYnRuOmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuYXNpZGU6aG92ZXIgLnByb2plY3RzIGEge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG5tYWluIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxubWFpbiBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzgwODA4MDtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxubWFpbiBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcXG4gICAgY29sb3I6ICNkMTQ1M2I7XFxufVxcblxcbm1haW4gYTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZDE0NTNiO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIHBhZGRpbmc6IDFyZW0gLjhyZW07XFxuICAgIGJvcmRlcjogMXB4ICNiNGI0YjQgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rhc2stbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjhyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNoZWNrIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgICB3aWR0aDogMS4xNWVtO1xcbiAgICBoZWlnaHQ6IDEuMTVlbTtcXG4gICAgYm9yZGVyOiAwLjE1ZW0gc29saWQgY3VycmVudENvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVlbSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDAuNjVlbTtcXG4gICAgaGVpZ2h0OiAwLjY1ZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1mb3JtLWNvbnRyb2wtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXNUZXh0O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxufVxcblxcbi5jaGVjazpjaGVja2VkOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uY2hlY2s6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBtYXgoMnB4LCAwLjE1ZW0pIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IG1heCgycHgsIDAuMTVlbSk7XFxuICB9XFxuXFxuLmZvcm0gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLCBzZWxlY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgYm9yZGVyOiAxcHggI2M3YzdjNyBzb2xpZDtcXG4gICAgY29sb3I6ICM2NDY0NjQ7XFxufVxcblxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZGF0ZS1wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmRhdGUtcHJpb3JpdHkgbGFiZWwge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogIzZkNmQ2ZDtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9ucyBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b25zIC5jYW5jZWwtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG59XFxuXFxuLmJ1dHRvbnMgLmNhbmNlbC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xcbn1cXG5cXG4uYnV0dG9ucyAuYWRkLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTQ1M2I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJ1dHRvbnMgLmFkZC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjYzYTMxO1xcbn1cXG5cXG4uYnV0dG9ucyAuYWRkLWJ0bi5kaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZjg0N2U7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggI2M3YzdjNyBzb2xpZDtcXG4gICAgLyogcGFkZGluZy1ib3R0b206IC41cmVtOyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLnRhc2staW5mbyBwLnRhc2stcHJpb3JpdHkxIHtcXG4gICAgY29sb3I6ICNkMTQ1M2I7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50YXNrLWluZm8gcC50YXNrLXByaW9yaXR5MiB7XFxuICAgIGNvbG9yOiAjZWI4OTA5O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udGFzay1pbmZvIHAudGFzay1wcmlvcml0eTMge1xcbiAgICBjb2xvcjogIzI0NmZlMDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRhc2staW5mbyBwLnRhc2stcHJpb3JpdHk0IHtcXG4gICAgY29sb3I6ICM2NjY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udGFzay1pbmZvIHAge1xcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uLCAuZGF0ZSwgLnByaW9yaXR5IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzg4ODg4ODtcXG59XFxuXFxuLnRhc2sgLmNsb3NlIGkge1xcbiAgICBjb2xvcjogIzg4ODg4ODtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRhc2s6aG92ZXIgLmNsb3NlIGkge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzayAuY2xvc2UgaTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICNjNzQ0M2I7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTQ1M2I7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEluYm94IGZyb20gXCIuL2luYm94XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhhbmRsZUluYm94KCkge1xuICAgIGNvbnN0IGluYm94ID0gbmV3IEluYm94KCk7XG5cbiAgICBjb25zdCBjcmVhdGVJdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBpbmJveC5hZGRJdGVtKGl0ZW0pO1xuICAgICAgICBJdGVtLmlkKys7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbmJveC5nZXRJdGVtcygpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaWQpID0+IHtcbiAgICAgICAgaW5ib3guZGVsZXRlSXRlbShpZCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlQ2hlY2tTdGF0dXMgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBpbmJveC5nZXRJdGVtcygpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpdGVtc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5jaGFuZ2VDaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlSXRlbSwgZ2V0SXRlbXMsIGRlbGV0ZUl0ZW0sIGNoYW5nZUNoZWNrU3RhdHVzIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhhbmRsZVByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gW107XG4gICAgbGV0IHNlbGVjdGVkUHJvamVjdElkID0gMDtcblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSlcbiAgICAgICAgUHJvamVjdC5pZCsrO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb2plY3RzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdElkID0gaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgSXRlbS5pZCsrO1xuICAgICAgICBwcm9qZWN0c1tzZWxlY3RlZFByb2plY3RJZF0uYWRkSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbc2VsZWN0ZWRQcm9qZWN0SWRdLmdldEl0ZW1zKCkpO1xuICAgICAgICByZXR1cm4gcHJvamVjdHNbc2VsZWN0ZWRQcm9qZWN0SWRdLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IChpZCkgPT4ge1xuICAgICAgICBwcm9qZWN0c1tzZWxlY3RlZFByb2plY3RJZF0uZGVsZXRlSXRlbShpZCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlQ2hlY2tTdGF0dXMgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBwcm9qZWN0c1tzZWxlY3RlZFByb2plY3RJZF0uZ2V0SXRlbXMoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNbaV0uY2hhbmdlQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgICBjcmVhdGVQcm9qZWN0LCBcbiAgICAgICAgZGVsZXRlUHJvamVjdCwgXG4gICAgICAgIGdldFByb2plY3RzLCBcbiAgICAgICAgc2VsZWN0UHJvamVjdCwgXG4gICAgICAgIGNyZWF0ZUl0ZW0sXG4gICAgICAgIGdldEl0ZW1zLFxuICAgICAgICBkZWxldGVJdGVtLFxuICAgICAgICBjaGFuZ2VDaGVja1N0YXR1cyxcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5ib3gge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfVxuXG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICBkZWxldGVJdGVtKGl0ZW1JZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLmlkID09PSBpdGVtSWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodGhpcy5pdGVtc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIHtcbiAgICBzdGF0aWMgaWQgPSAwO1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLmlkID0gSXRlbS5pZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jaGVja0xpc3QgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjaGFuZ2VDaGVjaygpIHtcbiAgICAgICAgdGhpcy5jaGVja0xpc3QgPSB0aGlzLmNoZWNrTGlzdCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IEluYm94IGZyb20gXCIuL2luYm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3QgZXh0ZW5kcyBJbmJveCB7XG4gICAgc3RhdGljIGlkID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pZCA9IFByb2plY3QuaWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxufSIsImZ1bmN0aW9uIEhhbmRsZVRhc2tVSShpbnN0YW5jZSkge1xuICAgIC8vIGNyZWF0ZUl0ZW0sIGdldEl0ZW1zLCBkZWxldGVJdGVtLCBjaGFuZ2VDaGVja1N0YXR1c1xuXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuXG4gICAgLy8gU2hvdyBmb3JtXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0pO1xuICAgIFxuICAgIC8vIEZvcm0gYnV0dG9uc1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtYnRuJyk7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4nKTtcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cbiAgICAgICAgYWRkQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7IFxuICAgIH0pO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUnKTtcblxuICAgIGFkZEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7ICAgIFxuXG4gICAgbmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4ge1xuICAgICAgICBpZihuYW1lLnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgYWRkQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTsgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSk7XG5cbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICAgICAgXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcblxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgICAgIFxuICAgICAgICBpbnN0YW5jZS5jcmVhdGVJdGVtKG5hbWUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgZmFsc2UpO1xuICAgICAgICBzaG93VGFza1VJKGluc3RhbmNlKTtcbiAgICAgICAgZGVsZXRlVGFzayhpbnN0YW5jZSk7XG4gICAgICAgIGNoZWNrVGFzayhpbnN0YW5jZSk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG4gICAgICAgIG5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9ICcnO1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9ICcwJztcblxuICAgICAgICBhZGRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTsgICAgXG5cbiAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGluc3RhbmNlKSB7XG4gICAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKTtcblxuICAgIFxuICAgIGRlbGV0ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBlcmFzZVRhc2soZSwgaW5zdGFuY2UpfSApO1xuICAgIH0pO1xuXG59XG5cbmZ1bmN0aW9uIGVyYXNlVGFzayhlLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IHRhc2sgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCBpZCA9ICt0YXNrLmRhdGFzZXQuaWQ7XG5cbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcblxuICAgIGluc3RhbmNlLmRlbGV0ZUl0ZW0oaWQpO1xuICAgIHRhc2sucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVGFzayhpbnN0YW5jZSkge1xuICAgIGNvbnN0IGNoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKTtcblxuICAgIGNoZWNrQm94ZXMuZm9yRWFjaChjaGVja0JveCA9PiB7XG4gICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7IGNoYW5nZVN0YXR1cyhlLCBpbnN0YW5jZSl9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlU3RhdHVzKGUsIGluc3RhbmNlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGlkID0gK3Rhc2suZGF0YXNldC5pZDtcblxuICAgICAgICBpbnN0YW5jZS5kZWxldGVJdGVtKGlkKTtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ2hlY2tTdGF0dXMoaWQpO1xuICAgIH0sIDUwMClcbn1cblxuXG5cbmZ1bmN0aW9uIHNob3dUYXNrVUkoaW5zdGFuY2UsIHRpdGxlKSB7XG4gICAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tdGl0bGUnKTtcbiAgICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGNvbnN0IGl0ZW1zID0gaW5zdGFuY2UuZ2V0SXRlbXMoKTtcbiAgICBjb25zb2xlLmxvZyhpdGVtcyk7XG5cbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICAgIGxldCBpID0gaXRlbXMubGVuZ3RoID09PSAwID8gMCA6IGl0ZW1zLmxlbmd0aCAtIDE7XG5cbiAgICBmb3IgKDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgXG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgIHRhc2tEaXYuZGF0YXNldC5pZCA9IGl0ZW1zW2ldLmlkO1xuICAgIFxuICAgICAgICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBjaGVjay5uYW1lID0gJ2NoZWNrJztcbiAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgICBcbiAgICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoY2hlY2spO1xuXG4gICAgXG4gICAgICAgIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW1zW2ldLnRpdGxlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtc1tpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gaXRlbXNbaV0uZHVlRGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICAgICAgICBpZiAoaXRlbXNbaV0ucHJpb3JpdHkgIT09ICcwJykge1xuICAgICAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHkgJHtpdGVtc1tpXS5wcmlvcml0eX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChpdGVtc1tpXS5wcmlvcml0eSkge1xuICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eTEnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHkyJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5MycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eTQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgdGFza0luZm8uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG5cbiAgICAgICAgY29uc3QgY2xvc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2xvc2VEaXYuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcblxuICAgICAgICBjb25zdCBwSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXhtYXJrJyk7XG4gICAgICAgIHBJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgICAgICBwSWNvbi5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICBjbG9zZURpdi5hcHBlbmRDaGlsZChwSWNvbik7XG4gICAgXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjbG9zZURpdik7XG4gICAgXG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKHRhc2tEaXYpOyAgICAgICAgXG4gICAgfVxuXG59XG5cbi8vIEhhbmRsZVRhc2tVSShpbmJveCk7XG4vLyBzaG93VGFza1VJKGluYm94KTtcblxuZXhwb3J0IHtcbiAgICBIYW5kbGVUYXNrVUksXG4gICAgc2hvd1Rhc2tVSVxufTsiLCJpbXBvcnQgSGFuZGxlSW5ib3ggZnJvbSAnLi4vSGFuZGxlSW5ib3gnO1xuaW1wb3J0IHsgSGFuZGxlVGFza1VJLCBzaG93VGFza1VJIH0gZnJvbSAnLi9IYW5kbGVUYXNrVUknO1xuXG5cbi8vICBpbmJveC5jcmVhdGVJdGVtKFwiVGFyZWFcIiwgXCJIYWNlciBsYSB0YXJlYVwiLCBcIjA0LzAxLzIwMjNcIiwgNCk7XG4vLyAgaW5ib3guY3JlYXRlSXRlbSgyLCBcIkJhcnJlclwiLCBcIkhhY2VyIGxhIHRhcmVhXCIsIFwiMDQvMDEvMjAyM1wiLCA0LCBcIm5vdGFzXCIsIGZhbHNlKTtcbi8vICBpbmJveC5nZXRJdGVtcygpO1xuLy8gIGluYm94LmNoYW5nZUNoZWNrU3RhdHVzKDEpO1xuXG4vLyBjb25zdCBwcm9qZWN0cyA9IEhhbmRsZVByb2plY3RzKCk7XG4vLyBwcm9qZWN0cy5jcmVhdGVQcm9qZWN0KFwiUHJvZ3JhbW1pbmdcIik7XG4vLyBwcm9qZWN0cy5jcmVhdGVQcm9qZWN0KFwiR29hbHNcIik7XG4vLyBwcm9qZWN0cy5zZWxlY3RQcm9qZWN0KDApO1xuLy8gcHJvamVjdHMuY3JlYXRlSXRlbShcIlRhcmVhXCIsIFwiSGFjZXIgbGEgdGFyZWFcIiwgXCIwNC8wMS8yMDIzXCIsIDQsIFwibm90YXNcIiwgZmFsc2UpO1xuLy8gcHJvamVjdHMuc2VsZWN0UHJvamVjdCgxKTtcbi8vIHByb2plY3RzLmNyZWF0ZUl0ZW0oXCJUYXJlYVwiLCBcIkhhY2VyIGxhIHRhcmVhXCIsIFwiMDQvMDEvMjAyM1wiLCA0LCBcIm5vdGFzXCIsIGZhbHNlKTtcbi8vIHByb2plY3RzLmNyZWF0ZUl0ZW0oXCJUYXJlYVwiLCBcIkhhY2VyIGxhIHRhcmVhXCIsIFwiMDQvMDEvMjAyM1wiLCA0LCBcIm5vdGFzXCIsIGZhbHNlKTtcbi8vIHByb2plY3RzLmdldFByb2plY3RzKCk7XG5jb25zdCBpbmJveCA9IEhhbmRsZUluYm94KCk7XG5cbmV4cG9ydCB7XG4gICAgaW5ib3gsXG4gICAgSGFuZGxlVGFza1VJLFxuICAgIHNob3dUYXNrVUksXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW1wb3J0IEhhbmRsZUluYm94IGZyb20gJy4vbW9kdWxlcy9IYW5kbGVJbmJveCc7XG5pbXBvcnQgSGFuZGxlUHJvamVjdHMgZnJvbSAnLi9tb2R1bGVzL0hhbmRsZVByb2plY3RzJztcbmltcG9ydCB7IGluYm94LCBIYW5kbGVUYXNrVUksIHNob3dUYXNrVUkgfSBmcm9tICcuL21vZHVsZXMvdWkvSW5ib3hVSSc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBwcm9qZWN0ID0gSGFuZGxlUHJvamVjdHMoKTtcblxuZnVuY3Rpb24gSGFuZGxlUHJvamVjdFVJKCkge1xuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXByb2plY3QnKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWRpdicpO1xuXG4gICAgY3JlYXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgncG9wLXVwJyk7XG4gICAgICAgIFxuICAgIH0pO1xuXG4gICAgLy8gRm9ybSBidXR0b25zXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1wcm9qZWN0LWJ0bicpO1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1idG4nKTtcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdwb3AtdXAnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG5cbiAgICBhZGRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpOyAgICBcblxuICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHtcbiAgICAgICAgaWYobmFtZS52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGFkZEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYWRkQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7ICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBwcm9qZWN0LmNyZWF0ZVByb2plY3QobmFtZS52YWx1ZSk7XG4gICAgICAgIHNob3dQcm9qZWN0VUkoKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdCgpO1xuXG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcC11cCcpO1xuICAgICAgICBuYW1lLnZhbHVlID0gJyc7XG4gICAgfSk7XG5cbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1wcm9qZWN0Jyk7XG5cbiAgICBkZWxldGVCdG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgY29uc3QgaWQgPSArcHJvamVjdERpdi5kYXRhc2V0LmlkO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0RGl2KTtcblxuICAgICAgICAgICAgcHJvamVjdC5kZWxldGVQcm9qZWN0KGlkKTtcbiAgICAgICAgICAgIHByb2plY3REaXYucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0VUkoKSB7XG4gICAgLy8gPGRpdiBjbGFzcz1cInByb2plY3RcIj5cbiAgICAvLyAgICAgPGg0PlByb2plY3QgMSA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPjwvaDQ+XG4gICAgLy8gPC9kaXY+XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3QuZ2V0UHJvamVjdHMoKTtcblxuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuICAgIGxldCBpID0gcHJvamVjdHMubGVuZ3RoID09PSAwID8gMCA6IHByb2plY3RzLmxlbmd0aCAtIDE7XG5cbiAgICBmb3IgKDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7ICAgICAgICBcbiAgICAgICAgcHJvamVjdERpdi5kYXRhc2V0LmlkID0gcHJvamVjdHNbaV0uaWQ7XG4gICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLm5hbWU7XG4gICAgXG4gICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS14bWFyaycpO1xuICAgICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0Jyk7ICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIH1cbiAgICBcbiAgICBcbn1cblxuSGFuZGxlUHJvamVjdFVJKCk7XG5cbkhhbmRsZVRhc2tVSShpbmJveCk7XG5zaG93VGFza1VJKGluYm94LCAnSW5ib3gnKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=