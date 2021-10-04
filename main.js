(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./app/app.element.ts":
/*!****************************!*\
  !*** ./app/app.element.ts ***!
  \****************************/
/*! exports provided: AppElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppElement", function() { return AppElement; });
/* harmony import */ var _core_decorators_autonomous__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/decorators/autonomous */ "./core/decorators/autonomous.ts");
/* harmony import */ var _core_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/html */ "./core/html.ts");
/* harmony import */ var _core_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/css */ "./core/css.ts");
let _dec,
    _class,
    _ = t => t,
    _t,
    _t2;




let AppElement = (_dec = Object(_core_decorators_autonomous__WEBPACK_IMPORTED_MODULE_0__["Autonomous"])({
  selector: 'nx-clean-root',
  mode: 'open'
}), _dec(_class = class AppElement extends HTMLElement {
  constructor(...args) {
    super(...args);
    this.styles = Object(_core_css__WEBPACK_IMPORTED_MODULE_2__["css"])(_t || (_t = _`
    :host {
      display: block;
      font-family: sans-serif;
      min-width: 300px;
      max-width: 600px;
      margin: 50px auto;
    }

    .gutter-left {
      margin-left: 9px;
    }

    .col-span-2 {
      grid-column: span 2;
    }

    .flex {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    header {
      background-color: #143055;
      color: white;
      padding: 5px;
      border-radius: 3px;
    }

    main {
      padding: 0 36px;
    }

    p {
      text-align: center;
    }

    h1 {
      text-align: center;
      margin-left: 18px;
      font-size: 24px;
    }

    h2 {
      text-align: center;
      font-size: 20px;
      margin: 40px 0 10px 0;
    }

    .resources {
      text-align: center;
      list-style: none;
      padding: 0;
      display: grid;
      grid-gap: 9px;
      grid-template-columns: 1fr 1fr;
    }

    .resource {
      color: #0094ba;
      height: 36px;
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      padding: 3px 9px;
      text-decoration: none;
    }

    .resource:hover {
      background-color: rgba(68, 138, 255, 0.04);
    }

    pre {
      padding: 9px;
      border-radius: 4px;
      background-color: black;
      color: #eee;
    }

    details {
      border-radius: 4px;
      color: #333;
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid rgba(0, 0, 0, 0.12);
      padding: 3px 9px;
      margin-bottom: 9px;
    }

    summary {
      cursor: pointer;
      outline: none;
      height: 36px;
      line-height: 36px;
    }

    .github-star-container {
      margin-top: 12px;
      line-height: 20px;
    }

    .github-star-container a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #333;
    }

    .github-star-badge {
      color: #24292e;
      display: flex;
      align-items: center;
      font-size: 12px;
      padding: 3px 10px;
      border: 1px solid rgba(27, 31, 35, 0.2);
      border-radius: 3px;
      background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
      margin-left: 4px;
      font-weight: 600;
    }

    .github-star-badge:hover {
      background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);
      border-color: rgba(27, 31, 35, 0.35);
      background-position: -0.5em;
    }
    .github-star-badge .material-icons {
      height: 16px;
      width: 16px;
      margin-right: 4px;
    }
  `));
    this.template = Object(_core_html__WEBPACK_IMPORTED_MODULE_1__["html"])(_t2 || (_t2 = _`
    <header class="flex">
      <h1>Welcome to Demos!</h1>
    </header>
    <main>
      <h2>Business rules &amp; Any framework</h2>
      <p>Really reuse your business rules with Nx Clean ♥</p>
      <ul class="resources">
        <li class="col-span-2">
          <a class="resource flex" href="/angular/"> Angular </a>
        </li>
        <li class="col-span-2">
          <a class="resource flex" href="/react/"> React </a>
        </li>
      </ul>

      <h2>Next Steps</h2>
      <p>Code example for dependency injection with Nx Clean.</p>

      <details>
        <summary>Configure dependencies</summary>
        <pre>
export const injector = Injector.create([
  {
    provide: TodoRepository,
    useFactory: () => {
      return new TodoInMemoryRepository([
        { id: '1', title: 'Opa', completed: true },
      ]);
    },
  },
  {
    provide: TodoPresenter,
    useFactory: (repo: TodoRepository) => {
      return new TodoDefaultPresenter(repo);
    },
    deps: [TodoRepository],
  },
]);
        </pre>
      </details>
      <details>
        <summary>Using dependency</summary>
        <pre>
const presenter = injector.get<TodoPresenter>(TodoPresenter);
        </pre>
      </details>
    </main>
  `));
  }

}) || _class);

/***/ }),

/***/ "./app/todo/todo-item/todo-item.element.ts":
/*!*************************************************!*\
  !*** ./app/todo/todo-item/todo-item.element.ts ***!
  \*************************************************/
/*! exports provided: TodoItemElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemElement", function() { return TodoItemElement; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core */ "./core/index.ts");
let _dec,
    _class,
    _ = t => t,
    _t;


let TodoItemElement = (_dec = Object(_core__WEBPACK_IMPORTED_MODULE_0__["BuiltIn"])({
  selector: 'todo-item',
  extends: 'li'
}), _dec(_class = class TodoItemElement extends HTMLLIElement {
  constructor(...args) {
    super(...args);
    this.observed = ['todo', 'is'];
    this.is = 'todo-item';
    this.todo = void 0;
    this.template = Object(_core__WEBPACK_IMPORTED_MODULE_0__["html"])(_t || (_t = _`
    <div class="view">
      <input type="checkbox" class="toggle" />
      <label></label>
      <button class="destroy">x</button>
    </div>
  `));
  }

  query(selector) {
    return this.querySelector(selector);
  }

  connected() {
    if (this.todo && this.todo.name) {
      this.query('label').textContent = this.todo.name;
    }

    this.querySelector('input').onclick = ({
      target
    }) => {
      const input = target;
      this.dispatchEvent(new CustomEvent('toggle', {
        detail: input.checked
      }));
    };

    this.querySelector('button').onclick = () => {
      console.log('remove');
      this.dispatchEvent(new CustomEvent('remove'));
    };
  }

}) || _class);

/***/ }),

/***/ "./core/css.ts":
/*!*********************!*\
  !*** ./core/css.ts ***!
  \*********************/
/*! exports provided: css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony import */ var _utils_concat_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/concat-values */ "./core/utils/concat-values.ts");

/**
 * Cria um elemento HTMLStyleElement vinculando seu CSS ao mesmo.
 * Caso você adicione algo dinâmico por meio de variáveis JS / TS
 * também é posicionada no seu devido local.
 *
 * @export
 * @param {TemplateStringsArray} strings
 * @param {...unknown[]} values
 * @returns {HTMLStyleElement}
 */

function css(strings, ...values) {
  const style = document.createElement('style');
  style.textContent = Object(_utils_concat_values__WEBPACK_IMPORTED_MODULE_0__["concatValues"])(strings, values);
  return style;
}

/***/ }),

/***/ "./core/decorators/autonomous.ts":
/*!***************************************!*\
  !*** ./core/decorators/autonomous.ts ***!
  \***************************************/
/*! exports provided: Autonomous */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autonomous", function() { return Autonomous; });
/* harmony import */ var _home_runner_work_nx_clean_nx_clean_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /home/runner/work/nx-clean/nx-clean/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _utils_clone_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/clone-template */ "./core/utils/clone-template.ts");
/* harmony import */ var _utils_parse_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/parse-value */ "./core/utils/parse-value.ts");
/* harmony import */ var _utils_lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/lifecycle */ "./core/utils/lifecycle.ts");

const _excluded = ["selector"];



function Autonomous(_ref) {
  let {
    selector
  } = _ref,
      opts = Object(_home_runner_work_nx_clean_nx_clean_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  return function (target) {
    const disconnected = _utils_lifecycle__WEBPACK_IMPORTED_MODULE_3__["lifecycle"].disconn(target);
    const connected = _utils_lifecycle__WEBPACK_IMPORTED_MODULE_3__["lifecycle"].conn(target);
    const attribute = _utils_lifecycle__WEBPACK_IMPORTED_MODULE_3__["lifecycle"].attr(target);
    target.selector = selector;
    const styles = target == null ? void 0 : target.styles;
    const template = target == null ? void 0 : target.template;
    const observed = target == null ? void 0 : target.observed;
    target.observedAttributes = observed;

    target.prototype.attributeChangedCallback = function (name, prev, next) {
      this[name] = Object(_utils_parse_value__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(next);

      if (this.attributeChanged) {
        this.attributeChanged(name, prev, Object(_utils_parse_value__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(next));
      }

      attribute.call(name, prev, Object(_utils_parse_value__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(next));
    };

    target.prototype.connectedCallback = function () {
      var _this$template;

      const shadow = this.attachShadow({
        mode: opts.mode
      });

      if (styles || this.styles) {
        shadow.appendChild(styles || this.styles);
      }

      if (template != null && template.content || (_this$template = this.template) != null && _this$template.content) {
        shadow.appendChild(Object(_utils_clone_template__WEBPACK_IMPORTED_MODULE_1__["cloneTemplate"])(template || this.template));
      }

      shadow.querySelectorAll('slot').forEach(({
        name
      }) => {
        const assignable = this.querySelector(name);

        if (assignable && !assignable.slot) {
          assignable.setAttribute('slot', name);
        }
      });

      if (this.connected) {
        this.connected.call(this);
      }

      connected.call(this);
    };

    target.prototype.disconnectedCallback = function () {
      disconnected.call(this);
    };

    customElements.define(selector, target);
  };
}

/***/ }),

/***/ "./core/decorators/built-in.ts":
/*!*************************************!*\
  !*** ./core/decorators/built-in.ts ***!
  \*************************************/
/*! exports provided: BuiltIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuiltIn", function() { return BuiltIn; });
/* harmony import */ var _home_runner_work_nx_clean_nx_clean_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /home/runner/work/nx-clean/nx-clean/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _utils_clone_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/clone-template */ "./core/utils/clone-template.ts");
/* harmony import */ var _utils_parse_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/parse-value */ "./core/utils/parse-value.ts");
/* harmony import */ var _utils_lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/lifecycle */ "./core/utils/lifecycle.ts");

const _excluded = ["selector"];



function BuiltIn(_ref) {
  let {
    selector
  } = _ref,
      opts = Object(_home_runner_work_nx_clean_nx_clean_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  return function (target) {
    const connected = _utils_lifecycle__WEBPACK_IMPORTED_MODULE_3__["lifecycle"].conn(target);
    const disconnected = _utils_lifecycle__WEBPACK_IMPORTED_MODULE_3__["lifecycle"].disconn(target);
    const attribute = _utils_lifecycle__WEBPACK_IMPORTED_MODULE_3__["lifecycle"].attr(target);
    target.is = opts.extends;
    target.selector = selector;
    const styles = target == null ? void 0 : target.styles;
    const template = target == null ? void 0 : target.template;
    const observed = target == null ? void 0 : target.observed;
    target.observedAttributes = observed;

    target.prototype.attributeChangedCallback = function (name, prev, next) {
      this[name] = Object(_utils_parse_value__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(next);

      if (this.attributeChanged) {
        this.attributeChanged(name, prev, Object(_utils_parse_value__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(next));
      }

      attribute.call(name, prev, Object(_utils_parse_value__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(next));
    };

    target.prototype.connectedCallback = function () {
      var _this$template;

      if (styles || this.styles) {
        this.appendChild(styles || this.styles);
      }

      if (template != null && template.content || (_this$template = this.template) != null && _this$template.content) {
        this.appendChild(Object(_utils_clone_template__WEBPACK_IMPORTED_MODULE_1__["cloneTemplate"])(template || this.template));
      }

      if (this.connected) {
        this.connected.call(this);
      }

      connected.call(this);
    };

    target.prototype.disconnectedCallback = function () {
      disconnected.call(this);
    };

    customElements.define(selector, target, {
      extends: opts.extends
    });
  };
}

/***/ }),

/***/ "./core/decorators/index.ts":
/*!**********************************!*\
  !*** ./core/decorators/index.ts ***!
  \**********************************/
/*! exports provided: Autonomous, BuiltIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autonomous__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autonomous */ "./core/decorators/autonomous.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autonomous", function() { return _autonomous__WEBPACK_IMPORTED_MODULE_0__["Autonomous"]; });

/* harmony import */ var _built_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./built-in */ "./core/decorators/built-in.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuiltIn", function() { return _built_in__WEBPACK_IMPORTED_MODULE_1__["BuiltIn"]; });




/***/ }),

/***/ "./core/html.ts":
/*!**********************!*\
  !*** ./core/html.ts ***!
  \**********************/
/*! exports provided: html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony import */ var _utils_concat_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/concat-values */ "./core/utils/concat-values.ts");

/**
 * Esta função `template literals` por enquanto apenas cria
 * um elemento de template já vinculando seu html a ele, e
 * também posiciona cada variável em seu devido local validando
 * a possibilidade de null ou undefined, substituindo por ''.
 *
 * Aproveitei o nome html, pois utilizando a extensão do LitElement
 * no VSCode permite que escrevamos o html com syntax highlight
 *
 * @export
 * @param {TemplateStringsArray} strings
 * @param {...unknown[]} values
 * @returns {HTMLTemplateElement}
 */

function html(strings, ...values) {
  const template = document.createElement('template');
  template.innerHTML = template.innerHTML = Object(_utils_concat_values__WEBPACK_IMPORTED_MODULE_0__["concatValues"])(strings, values);
  return template;
}

/***/ }),

/***/ "./core/index.ts":
/*!***********************!*\
  !*** ./core/index.ts ***!
  \***********************/
/*! exports provided: Autonomous, BuiltIn, Component, cloneTemplate, concatValues, isFakeBoolean, lifecycle, noop, parseValue, css, html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators */ "./core/decorators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autonomous", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["Autonomous"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuiltIn", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["BuiltIn"]; });

/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "./core/interfaces/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./core/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneTemplate", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["cloneTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatValues", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["concatValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFakeBoolean", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["isFakeBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lifecycle", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["lifecycle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["parseValue"]; });

/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css */ "./core/css.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _css__WEBPACK_IMPORTED_MODULE_3__["css"]; });

/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html */ "./core/html.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _html__WEBPACK_IMPORTED_MODULE_4__["html"]; });







/***/ }),

/***/ "./core/interfaces/component.ts":
/*!**************************************!*\
  !*** ./core/interfaces/component.ts ***!
  \**************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
class Component {
  constructor() {
    this.is = void 0;
    this.selector = void 0;
    this.template = void 0;
    this.styles = void 0;
    this.observed = void 0;
  } //   // new (...params: string[]): string[]


}

/***/ }),

/***/ "./core/interfaces/index.ts":
/*!**********************************!*\
  !*** ./core/interfaces/index.ts ***!
  \**********************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./core/interfaces/component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["Component"]; });

/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lifecycle */ "./core/interfaces/lifecycle.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./core/interfaces/options.ts");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "./core/interfaces/lifecycle.ts":
/*!**************************************!*\
  !*** ./core/interfaces/lifecycle.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./core/interfaces/options.ts":
/*!************************************!*\
  !*** ./core/interfaces/options.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./core/utils/clone-template.ts":
/*!**************************************!*\
  !*** ./core/utils/clone-template.ts ***!
  \**************************************/
/*! exports provided: cloneTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneTemplate", function() { return cloneTemplate; });
function cloneTemplate(template) {
  return template.content.cloneNode(true);
}

/***/ }),

/***/ "./core/utils/concat-values.ts":
/*!*************************************!*\
  !*** ./core/utils/concat-values.ts ***!
  \*************************************/
/*! exports provided: concatValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatValues", function() { return concatValues; });
/**
 * Concatena template strings adicionando
 * values em suas devidas posiçoes
 *
 * @export
 * @param {TemplateStringsArray} strings
 * @param {...unknown[]} values
 * @returns
 */
function concatValues(strings, ...values) {
  return strings.map((str, i) => {
    var _values$i;

    return str + ((_values$i = values[i]) != null ? _values$i : '');
  }).join('');
}

/***/ }),

/***/ "./core/utils/index.ts":
/*!*****************************!*\
  !*** ./core/utils/index.ts ***!
  \*****************************/
/*! exports provided: cloneTemplate, concatValues, isFakeBoolean, lifecycle, noop, parseValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clone_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone-template */ "./core/utils/clone-template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneTemplate", function() { return _clone_template__WEBPACK_IMPORTED_MODULE_0__["cloneTemplate"]; });

/* harmony import */ var _concat_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat-values */ "./core/utils/concat-values.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatValues", function() { return _concat_values__WEBPACK_IMPORTED_MODULE_1__["concatValues"]; });

/* harmony import */ var _isk_fake_boolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isk-fake-boolean */ "./core/utils/isk-fake-boolean.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFakeBoolean", function() { return _isk_fake_boolean__WEBPACK_IMPORTED_MODULE_2__["isFakeBoolean"]; });

/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lifecycle */ "./core/utils/lifecycle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lifecycle", function() { return _lifecycle__WEBPACK_IMPORTED_MODULE_3__["lifecycle"]; });

/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noop */ "./core/utils/noop.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _noop__WEBPACK_IMPORTED_MODULE_4__["noop"]; });

/* harmony import */ var _parse_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parse-value */ "./core/utils/parse-value.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return _parse_value__WEBPACK_IMPORTED_MODULE_5__["parseValue"]; });








/***/ }),

/***/ "./core/utils/isk-fake-boolean.ts":
/*!****************************************!*\
  !*** ./core/utils/isk-fake-boolean.ts ***!
  \****************************************/
/*! exports provided: isFakeBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFakeBoolean", function() { return isFakeBoolean; });
function isFakeBoolean(value) {
  return value === 'true' || value === 'false';
}

/***/ }),

/***/ "./core/utils/lifecycle.ts":
/*!*********************************!*\
  !*** ./core/utils/lifecycle.ts ***!
  \*********************************/
/*! exports provided: lifecycle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycle", function() { return lifecycle; });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop */ "./core/utils/noop.ts");

const lifecycle = {
  conn: target => {
    var _target$prototype$con;

    return (_target$prototype$con = target.prototype.connectedCallback) != null ? _target$prototype$con : _noop__WEBPACK_IMPORTED_MODULE_0__["noop"];
  },
  disconn: target => {
    var _target$prototype$dis;

    return (_target$prototype$dis = target.prototype.disconnectedCallback) != null ? _target$prototype$dis : _noop__WEBPACK_IMPORTED_MODULE_0__["noop"];
  },
  attr: target => {
    var _target$prototype$att;

    return (_target$prototype$att = target.prototype.attributeChangedCallback) != null ? _target$prototype$att : _noop__WEBPACK_IMPORTED_MODULE_0__["noop"];
  }
};

/***/ }),

/***/ "./core/utils/noop.ts":
/*!****************************!*\
  !*** ./core/utils/noop.ts ***!
  \****************************/
/*! exports provided: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
const noop = () => null;

/***/ }),

/***/ "./core/utils/parse-value.ts":
/*!***********************************!*\
  !*** ./core/utils/parse-value.ts ***!
  \***********************************/
/*! exports provided: parseValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return parseValue; });
/* harmony import */ var _isk_fake_boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isk-fake-boolean */ "./core/utils/isk-fake-boolean.ts");
/* harmony import */ var json5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json5 */ "../../../node_modules/json5/dist/index.js");
/* harmony import */ var json5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json5__WEBPACK_IMPORTED_MODULE_1__);


function parseValue(value) {
  const tmpValue = isNaN(+value) ? value : +value;

  if (typeof tmpValue === 'number') {
    return tmpValue;
  }

  if (Object(_isk_fake_boolean__WEBPACK_IMPORTED_MODULE_0__["isFakeBoolean"])(tmpValue)) {
    return value == 'false' ? false : true;
  }

  try {
    return Object(json5__WEBPACK_IMPORTED_MODULE_1__["parse"])(value);
  } catch (err) {
    return value;
  }
}

/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_todo_todo_item_todo_item_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/todo/todo-item/todo-item.element */ "./app/todo/todo-item/todo-item.element.ts");
/* harmony import */ var _app_app_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.element */ "./app/app.element.ts");



/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/nx-clean/nx-clean/apps/demos/src/main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map