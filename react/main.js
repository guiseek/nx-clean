(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../../libs/core/src/index.ts":
/*!******************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/index.ts ***!
  \******************************************************************/
/*! exports provided: InjectionToken, Injectable, Inject, Injector, LocalStorageService, HttpService, Presenter, ViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_di_core_injection_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/di/core/injection-token */ "../../../../libs/core/src/lib/di/core/injection-token.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionToken", function() { return _lib_di_core_injection_token__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]; });

/* harmony import */ var _lib_di_interfaces_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/di/interfaces/provider */ "../../../../libs/core/src/lib/di/interfaces/provider.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_di_interfaces_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/di/interfaces/type */ "../../../../libs/core/src/lib/di/interfaces/type.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_di_types_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/di/types/token */ "../../../../libs/core/src/lib/di/types/token.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_di_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/di/decorators */ "../../../../libs/core/src/lib/di/decorators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injectable", function() { return _lib_di_decorators__WEBPACK_IMPORTED_MODULE_4__["Injectable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Inject", function() { return _lib_di_decorators__WEBPACK_IMPORTED_MODULE_4__["Inject"]; });

/* harmony import */ var _lib_di_injector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/di/injector */ "../../../../libs/core/src/lib/di/injector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return _lib_di_injector__WEBPACK_IMPORTED_MODULE_5__["Injector"]; });

/* harmony import */ var _lib_common_mapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/common/mapper */ "../../../../libs/core/src/lib/common/mapper.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_domain_service_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/domain/service/localstorage.service */ "../../../../libs/core/src/lib/domain/service/localstorage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _lib_domain_service_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]; });

/* harmony import */ var _lib_domain_service_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/domain/service/http.service */ "../../../../libs/core/src/lib/domain/service/http.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _lib_domain_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]; });

/* harmony import */ var _lib_domain_usecase_usecase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/domain/usecase/usecase */ "../../../../libs/core/src/lib/domain/usecase/usecase.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_presentation_presenter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/presentation/presenter */ "../../../../libs/core/src/lib/presentation/presenter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Presenter", function() { return _lib_presentation_presenter__WEBPACK_IMPORTED_MODULE_10__["Presenter"]; });

/* harmony import */ var _lib_presentation_view_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/presentation/view-model */ "../../../../libs/core/src/lib/presentation/view-model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewModel", function() { return _lib_presentation_view_model__WEBPACK_IMPORTED_MODULE_11__["ViewModel"]; });














/***/ }),

/***/ "../../../../libs/core/src/lib/common/mapper.ts":
/*!******************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/common/mapper.ts ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../../libs/core/src/lib/di/core/injection-token.ts":
/*!****************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/di/core/injection-token.ts ***!
  \****************************************************************************************/
/*! exports provided: InjectionToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectionToken", function() { return InjectionToken; });
class InjectionToken {
  constructor(injectionIdentifier) {
    this.injectionIdentifier = injectionIdentifier;
  }

}

/***/ }),

/***/ "../../../../libs/core/src/lib/di/decorators/index.ts":
/*!************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/di/decorators/index.ts ***!
  \************************************************************************************/
/*! exports provided: Injectable, Inject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _injectable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./injectable */ "../../../../libs/core/src/lib/di/decorators/injectable.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injectable", function() { return _injectable__WEBPACK_IMPORTED_MODULE_0__["Injectable"]; });

/* harmony import */ var _inject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inject */ "../../../../libs/core/src/lib/di/decorators/inject.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Inject", function() { return _inject__WEBPACK_IMPORTED_MODULE_1__["Inject"]; });




/***/ }),

/***/ "../../../../libs/core/src/lib/di/decorators/inject.ts":
/*!*************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/di/decorators/inject.ts ***!
  \*************************************************************************************/
/*! exports provided: Inject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inject", function() { return Inject; });
/* harmony import */ var _utils_injection_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/injection-token */ "../../../../libs/core/src/lib/di/utils/injection-token.ts");

function Inject(token) {
  return function (target, _, index) {
    Reflect.defineMetadata(_utils_injection_token__WEBPACK_IMPORTED_MODULE_0__["INJECT_METADATA_KEY"], token, target, `index-${index}`);
    return target;
  };
}

/***/ }),

/***/ "../../../../libs/core/src/lib/di/decorators/injectable.ts":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/di/decorators/injectable.ts ***!
  \*****************************************************************************************/
/*! exports provided: Injectable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Injectable", function() { return Injectable; });
/* harmony import */ var _utils_injectable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/injectable */ "../../../../libs/core/src/lib/di/utils/injectable.ts");

function Injectable() {
  return function (target) {
    // o target, neste caso, é a classe que está sendo decorada.
    Reflect.defineMetadata(_utils_injectable__WEBPACK_IMPORTED_MODULE_0__["INJECTABLE_METADATA_KEY"], true, target);
    return target;
  };
}

/***/ }),

/***/ "../../../../libs/core/src/lib/di/injector.ts":
/*!****************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/di/injector.ts ***!
  \****************************************************************************/
/*! exports provided: Injector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return Injector; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/provider */ "../../../../libs/core/src/lib/di/utils/provider.ts");
/* harmony import */ var _utils_injection_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/injection-token */ "../../../../libs/core/src/lib/di/utils/injection-token.ts");
/* harmony import */ var _core_injection_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/injection-token */ "../../../../libs/core/src/lib/di/core/injection-token.ts");
/* harmony import */ var _utils_injectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/injectable */ "../../../../libs/core/src/lib/di/utils/injectable.ts");
/* harmony import */ var _utils_reflect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/reflect */ "../../../../libs/core/src/lib/di/utils/reflect.ts");







class Injector {
  constructor(providers) {
    this.providers = new Map();
    providers.forEach(provider => {
      this.assertInjectableIfClassProvider(provider);
      this.providers.set(provider.provide, provider);
    });
  }

  addProvider(provider) {
    this.assertInjectableIfClassProvider(provider);
    this.providers.set(provider.provide, provider);
  }

  static create(providers) {
    if (!Injector.instance) {
      Injector.instance = new Injector(providers);
    }

    return Injector.instance;
  }

  assertInjectableIfClassProvider(provider) {
    if (Object(_utils_provider__WEBPACK_IMPORTED_MODULE_2__["isClassProvider"])(provider) && !Object(_utils_injectable__WEBPACK_IMPORTED_MODULE_5__["isInjectable"])(provider.useClass)) {
      throw new Error(`Cannot provide ${this.getTokenName(provider.provide)} using class ${this.getTokenName(provider.useClass)}, ${this.getTokenName(provider.useClass)} isn't injectable`);
    }
  } // Retorna um nome para o token.


  getTokenName(token) {
    return token instanceof _core_injection_token__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"] ? token.injectionIdentifier : token.name;
  }

  get(type) {
    const provider = this.providers.get(type);
    return this.injectWithProvider(type, provider);
  }

  injectWithProvider(type, provider) {
    if (provider === undefined) {
      throw new Error(`No provider for type ${this.getTokenName(type)}`);
    }

    if (Object(_utils_provider__WEBPACK_IMPORTED_MODULE_2__["isClassProvider"])(provider)) {
      return this.injectClass(provider);
    } else if (Object(_utils_provider__WEBPACK_IMPORTED_MODULE_2__["isValueProvider"])(provider)) {
      return this.injectValue(provider);
    } else {
      // Fornecedor da factory por processo de eliminação
      return this.injectFactory(provider, provider.deps);
    }
  }

  injectValue(valueProvider) {
    return valueProvider.useValue;
  }

  injectFactory(valueProvider, tokens = []) {
    return valueProvider.useFactory(...tokens.map(token => this.get(token)));
  }

  injectClass(classProvider) {
    const target = classProvider.useClass;
    const params = this.getInjectedParams(target);
    return Reflect.construct(target, params);
  }

  getInjectedParams(target) {
    const argTypes = Reflect.getMetadata(_utils_reflect__WEBPACK_IMPORTED_MODULE_6__["REFLECT_PARAMS"], target);

    if (argTypes === undefined) {
      return [];
    }

    return argTypes.map((argType, index) => {
      // A API reflet-metadata falha em dependências circulares e,
      // em vez disso, retorna indefinido para o argumento.
      // Até resolver isso melhor, apenas lançamos um erro.
      if (argType === undefined) {
        throw new Error(`Injection error. Recursive dependency detected in constructor for type ${target.name} with parameter at index ${index}`);
      } // Verifique se um 'Inject(INJECTION_TOKEN)' foi adicionado ao parâmetro.
      // Ele sempre tem prioridade sobre os tipos de parâmetros.


      const overrideToken = Object(_utils_injection_token__WEBPACK_IMPORTED_MODULE_3__["getInjectionToken"])(target, index);
      const actualToken = overrideToken === undefined ? argType : overrideToken;
      const provider = this.providers.get(actualToken);
      return this.injectWithProvider(actualToken, provider);
    });
  }

}
Injector.instance = void 0;

/***/ }),

/***/ "../../../../libs/core/src/lib/di/interfaces/provider.ts":
/*!***************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/di/interfaces/provider.ts ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../../libs/core/src/lib/di/interfaces/type.ts":
/*!***********************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/di/interfaces/type.ts ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../../libs/core/src/lib/di/types/token.ts":
/*!*******************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/di/types/token.ts ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../../libs/core/src/lib/di/utils/injectable.ts":
/*!************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/di/utils/injectable.ts ***!
  \************************************************************************************/
/*! exports provided: INJECTABLE_METADATA_KEY, isInjectable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECTABLE_METADATA_KEY", function() { return INJECTABLE_METADATA_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInjectable", function() { return isInjectable; });
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../../../../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ "../../../../node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);

 // Este decorador de classe adiciona uma propriedade booleana
// aos metadados da classe, marcando-a como 'injetável'.
// Ele usa a API reflet-metadata.

const INJECTABLE_METADATA_KEY = Symbol('INJECTABLE_KEY'); // Também fornecemos uma maneira fácil de consultar se uma classe é injetável.
// Nosso contêiner rejeitará classes que não são marcadas como injetáveis.

function isInjectable(target) {
  return Reflect.getMetadata(INJECTABLE_METADATA_KEY, target) === true;
}

/***/ }),

/***/ "../../../../libs/core/src/lib/di/utils/injection-token.ts":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/di/utils/injection-token.ts ***!
  \*****************************************************************************************/
/*! exports provided: INJECT_METADATA_KEY, getInjectionToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_METADATA_KEY", function() { return INJECT_METADATA_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInjectionToken", function() { return getInjectionToken; });
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../../../../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ "../../../../node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);


const INJECT_METADATA_KEY = Symbol('INJECT_KEY'); // Este é um decorador de parâmetro, é necessário um token para mapear o parâmetro.

function getInjectionToken(target, index) {
  return Reflect.getMetadata(INJECT_METADATA_KEY, target, `index-${index}`);
}

/***/ }),

/***/ "../../../../libs/core/src/lib/di/utils/provider.ts":
/*!**********************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/di/utils/provider.ts ***!
  \**********************************************************************************/
/*! exports provided: isClassProvider, isValueProvider, isFactoryProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClassProvider", function() { return isClassProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueProvider", function() { return isValueProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFactoryProvider", function() { return isFactoryProvider; });
function isClassProvider(provider) {
  return provider.useClass !== undefined;
}
function isValueProvider(provider) {
  return provider.useValue !== undefined;
}
function isFactoryProvider(provider) {
  return provider.useFactory !== undefined;
}

/***/ }),

/***/ "../../../../libs/core/src/lib/di/utils/reflect.ts":
/*!*********************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/di/utils/reflect.ts ***!
  \*********************************************************************************/
/*! exports provided: REFLECT_PARAMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFLECT_PARAMS", function() { return REFLECT_PARAMS; });
const REFLECT_PARAMS = 'design:paramtypes';

/***/ }),

/***/ "../../../../libs/core/src/lib/domain/service/http.service.ts":
/*!********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/domain/service/http.service.ts ***!
  \********************************************************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
class HttpService {}

/***/ }),

/***/ "../../../../libs/core/src/lib/domain/service/localstorage.service.ts":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/domain/service/localstorage.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
class LocalStorageService {}

/***/ }),

/***/ "../../../../libs/core/src/lib/domain/usecase/usecase.ts":
/*!***************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/domain/usecase/usecase.ts ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../../libs/core/src/lib/presentation/presenter.ts":
/*!***************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/presentation/presenter.ts ***!
  \***************************************************************************************/
/*! exports provided: Presenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presenter", function() { return Presenter; });
class Presenter {
  onDestroy() {
    return;
  }

}

/***/ }),

/***/ "../../../../libs/core/src/lib/presentation/view-model.ts":
/*!****************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/core/src/lib/presentation/view-model.ts ***!
  \****************************************************************************************/
/*! exports provided: ViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModel", function() { return ViewModel; });
class ViewModel {}

/***/ }),

/***/ "../../../../libs/todo/data-access/src/index.ts":
/*!******************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/data-access/src/index.ts ***!
  \******************************************************************************/
/*! exports provided: TodoLocalStorageRepository, TodoInMemoryRepository, TodoMockMapper, TodoMockDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_localstorage_todo_localstorage_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/localstorage/todo.localstorage.repository */ "../../../../libs/todo/data-access/src/lib/localstorage/todo.localstorage.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoLocalStorageRepository", function() { return _lib_localstorage_todo_localstorage_repository__WEBPACK_IMPORTED_MODULE_0__["TodoLocalStorageRepository"]; });

/* harmony import */ var _lib_inmemory_todo_inmemory_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/inmemory/todo.inmemory.repository */ "../../../../libs/todo/data-access/src/lib/inmemory/todo.inmemory.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoInMemoryRepository", function() { return _lib_inmemory_todo_inmemory_repository__WEBPACK_IMPORTED_MODULE_1__["TodoInMemoryRepository"]; });

/* harmony import */ var _lib_inmemory_mapper_todo_mock_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/inmemory/mapper/todo-mock.mapper */ "../../../../libs/todo/data-access/src/lib/inmemory/mapper/todo-mock.mapper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoMockMapper", function() { return _lib_inmemory_mapper_todo_mock_mapper__WEBPACK_IMPORTED_MODULE_2__["TodoMockMapper"]; });

/* harmony import */ var _lib_inmemory_dto_todo_mock_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/inmemory/dto/todo-mock.dto */ "../../../../libs/todo/data-access/src/lib/inmemory/dto/todo-mock.dto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoMockDto", function() { return _lib_inmemory_dto_todo_mock_dto__WEBPACK_IMPORTED_MODULE_3__["TodoMockDto"]; });






/***/ }),

/***/ "../../../../libs/todo/data-access/src/lib/inmemory/dto/todo-mock.dto.ts":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/data-access/src/lib/inmemory/dto/todo-mock.dto.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TodoMockDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoMockDto", function() { return TodoMockDto; });
class TodoMockDto {
  // <-- different as in todo domain entity
  constructor(params) {
    this.id = void 0;
    this.title = void 0;
    this.completed = void 0;
    this.id = params.id;
    this.title = params.title;
    this.completed = params.completed; // Object.assign(this, params);
  }

}

/***/ }),

/***/ "../../../../libs/todo/data-access/src/lib/inmemory/mapper/todo-mock.mapper.ts":
/*!*************************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/data-access/src/lib/inmemory/mapper/todo-mock.mapper.ts ***!
  \*************************************************************************************************************/
/*! exports provided: TodoMockMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoMockMapper", function() { return TodoMockMapper; });
/* harmony import */ var _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nx-clean/todo-domain */ "../../../../libs/todo/domain/src/index.ts");

class TodoMockMapper {
  mapFrom(input) {
    return {
      id: input == null ? void 0 : input.id,
      title: input == null ? void 0 : input.name,
      completed: input == null ? void 0 : input.completed
    };
  }

  mapTo(input) {
    const todo = _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_0__["TodoEntity"].create({
      id: input == null ? void 0 : input.id,
      name: input == null ? void 0 : input.title,
      completed: input == null ? void 0 : input.completed
    });
    return todo;
  }

}

/***/ }),

/***/ "../../../../libs/todo/data-access/src/lib/inmemory/todo.inmemory.repository.ts":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/data-access/src/lib/inmemory/todo.inmemory.repository.ts ***!
  \**************************************************************************************************************/
/*! exports provided: TodoInMemoryRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoInMemoryRepository", function() { return TodoInMemoryRepository; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "../../../../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mapper_todo_mock_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapper/todo-mock.mapper */ "../../../../libs/todo/data-access/src/lib/inmemory/mapper/todo-mock.mapper.ts");
/* harmony import */ var _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nx-clean/todo-domain */ "../../../../libs/todo/domain/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../../../node_modules/@nrwl/web/node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../../../node_modules/@nrwl/web/node_modules/rxjs/_esm5/operators/index.js");







class TodoInMemoryRepository {
  constructor(data = []) {
    this.data = data;
    this.mapper = new _mapper_todo_mock_mapper__WEBPACK_IMPORTED_MODULE_3__["TodoMockMapper"]();
  }

  getAllTodos() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(mocks => mocks.map(this.mapper.mapTo)));
  }

  getCompletedTodos() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.data.filter(todo => todo.completed)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(mocks => mocks.map(this.mapper.mapTo)));
  }

  getActiveTodos() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.data.filter(todo => !todo.completed)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(mocks => mocks.map(this.mapper.mapTo)));
  }

  getActiveTodosCount() {
    return this.getActiveTodos().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(todos => todos.length));
  }

  addTodo(name) {
    const id = 'item-' + new Date().getTime();
    const todo = _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_4__["TodoEntity"].create({
      id,
      name,
      completed: false
    });
    this.data.push(this.mapper.mapFrom(todo));
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(todo);
  }

  getTodoById(id) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.data.find(todo => todo.id === id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.mapper.mapTo));
  }

  removeTodo(id) {
    const idx = this.data.findIndex(t => t.id === id);
    const todo = this.data.find(t => t.id === id);
    this.data.splice(idx, 1);
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(todo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.mapper.mapTo));
  }

  removeCompletedTodos() {
    const activeTodos = this.data.filter(todo => !todo.completed);
    this.data = [...activeTodos];
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(activeTodos).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(mocks => mocks.map(this.mapper.mapTo)));
  }

  markTodoAsCompleted(id, isCompleted) {
    const todo = this.data.find(t => t.id === id);
    todo.completed = isCompleted;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(todo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.mapper.mapTo));
  }

  markAllTodosAsCompleted() {
    this.data = this.data.map(todo => Object.assign({}, todo, {
      completed: true
    }));
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(mocks => mocks.map(this.mapper.mapTo)));
  }

  markAllTodosAsActive() {
    this.data = this.data.map(todo => Object.assign({}, todo, {
      completed: false
    }));
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(mocks => mocks.map(this.mapper.mapTo)));
  }

}

/***/ }),

/***/ "../../../../libs/todo/data-access/src/lib/localstorage/todo.localstorage.repository.ts":
/*!**********************************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/data-access/src/lib/localstorage/todo.localstorage.repository.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: TodoLocalStorageRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoLocalStorageRepository", function() { return TodoLocalStorageRepository; });
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../../../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nx-clean/todo-domain */ "../../../../libs/todo/domain/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../../../node_modules/@nrwl/web/node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../../../node_modules/@nrwl/web/node_modules/rxjs/_esm5/operators/index.js");






class TodoLocalStorageRepository {
  constructor(localStorageService) {
    this.localStorageService = localStorageService;
  }

  getAllTodos() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.localStorageService.getItem('todos'));
  }

  getCompletedTodos() {
    throw Error('not implemented');
  }

  getActiveTodos() {
    throw Error('not implemented');
  }

  getActiveTodosCount() {
    return this.getActiveTodos().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(todos => todos.length));
  }

  addTodo(name) {
    const todos = this.localStorageService.getItem('todos') || [];
    const todo = _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_3__["TodoEntity"].create({
      id: Math.random().toString(),
      name,
      completed: false
    });
    this.localStorageService.setItem('todos', [...todos, todo]);
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(todo);
  }

  getTodoById(id) {
    const todos = this.localStorageService.getItem('todos');
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(todos.find(todo => todo.id === id));
  }

  removeTodo(id) {
    throw Error(id + 'not implemented');
  }

  removeCompletedTodos() {
    throw Error('not implemented');
  }

  markTodoAsCompleted(id, isCompleted) {
    throw Error(id + isCompleted + 'not implemented');
  }

  markAllTodosAsCompleted() {
    throw Error('not implemented');
  }

  markAllTodosAsActive() {
    throw Error('not implemented');
  }

}

/***/ }),

/***/ "../../../../libs/todo/domain/src/index.ts":
/*!*************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/index.ts ***!
  \*************************************************************************/
/*! exports provided: TodoEntity, TodoRepository, AddTodoUseCase, FilterTodosUseCase, GetActiveTodosCountUseCase, GetActiveTodosUseCase, GetAllTodosUseCase, GetCompletedTodosUseCase, GetTodoByIdUseCase, MarkAllTodosAsActiveUseCase, MarkAllTodosAsCompletedUseCase, MarkTodoAsActiveUseCase, MarkTodoAsCompletedUseCase, RemoveCompletedTodosUseCase, RemoveTodoUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_entity_todo_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/entity/todo.entity */ "../../../../libs/todo/domain/src/lib/entity/todo.entity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoEntity", function() { return _lib_entity_todo_entity__WEBPACK_IMPORTED_MODULE_0__["TodoEntity"]; });

/* harmony import */ var _lib_repository_todo_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/repository/todo.repository */ "../../../../libs/todo/domain/src/lib/repository/todo.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoRepository", function() { return _lib_repository_todo_repository__WEBPACK_IMPORTED_MODULE_1__["TodoRepository"]; });

/* harmony import */ var _lib_usecase_add_todo_usecase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/usecase/add-todo.usecase */ "../../../../libs/todo/domain/src/lib/usecase/add-todo.usecase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddTodoUseCase", function() { return _lib_usecase_add_todo_usecase__WEBPACK_IMPORTED_MODULE_2__["AddTodoUseCase"]; });

/* harmony import */ var _lib_usecase_filter_todos_usecase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/usecase/filter-todos.usecase */ "../../../../libs/todo/domain/src/lib/usecase/filter-todos.usecase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterTodosUseCase", function() { return _lib_usecase_filter_todos_usecase__WEBPACK_IMPORTED_MODULE_3__["FilterTodosUseCase"]; });

/* harmony import */ var _lib_usecase_get_active_todos_count_usecase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/usecase/get-active-todos-count.usecase */ "../../../../libs/todo/domain/src/lib/usecase/get-active-todos-count.usecase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetActiveTodosCountUseCase", function() { return _lib_usecase_get_active_todos_count_usecase__WEBPACK_IMPORTED_MODULE_4__["GetActiveTodosCountUseCase"]; });

/* harmony import */ var _lib_usecase_get_active_todos_usecase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/usecase/get-active-todos.usecase */ "../../../../libs/todo/domain/src/lib/usecase/get-active-todos.usecase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetActiveTodosUseCase", function() { return _lib_usecase_get_active_todos_usecase__WEBPACK_IMPORTED_MODULE_5__["GetActiveTodosUseCase"]; });

/* harmony import */ var _lib_usecase_get_all_todos_usecase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/usecase/get-all-todos.usecase */ "../../../../libs/todo/domain/src/lib/usecase/get-all-todos.usecase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAllTodosUseCase", function() { return _lib_usecase_get_all_todos_usecase__WEBPACK_IMPORTED_MODULE_6__["GetAllTodosUseCase"]; });

/* harmony import */ var _lib_usecase_get_completed_todos_usecase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/usecase/get-completed-todos.usecase */ "../../../../libs/todo/domain/src/lib/usecase/get-completed-todos.usecase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCompletedTodosUseCase", function() { return _lib_usecase_get_completed_todos_usecase__WEBPACK_IMPORTED_MODULE_7__["GetCompletedTodosUseCase"]; });

/* harmony import */ var _lib_usecase_get_todo_by_id_usecase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/usecase/get-todo-by-id.usecase */ "../../../../libs/todo/domain/src/lib/usecase/get-todo-by-id.usecase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetTodoByIdUseCase", function() { return _lib_usecase_get_todo_by_id_usecase__WEBPACK_IMPORTED_MODULE_8__["GetTodoByIdUseCase"]; });

/* harmony import */ var _lib_usecase_mark_all_todos_as_active_usecase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/usecase/mark-all-todos-as-active.usecase */ "../../../../libs/todo/domain/src/lib/usecase/mark-all-todos-as-active.usecase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkAllTodosAsActiveUseCase", function() { return _lib_usecase_mark_all_todos_as_active_usecase__WEBPACK_IMPORTED_MODULE_9__["MarkAllTodosAsActiveUseCase"]; });

/* harmony import */ var _lib_usecase_mark_all_todos_as_completed_usecase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/usecase/mark-all-todos-as-completed.usecase */ "../../../../libs/todo/domain/src/lib/usecase/mark-all-todos-as-completed.usecase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkAllTodosAsCompletedUseCase", function() { return _lib_usecase_mark_all_todos_as_completed_usecase__WEBPACK_IMPORTED_MODULE_10__["MarkAllTodosAsCompletedUseCase"]; });

/* harmony import */ var _lib_usecase_mark_todo_as_active_usecase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/usecase/mark-todo-as-active.usecase */ "../../../../libs/todo/domain/src/lib/usecase/mark-todo-as-active.usecase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkTodoAsActiveUseCase", function() { return _lib_usecase_mark_todo_as_active_usecase__WEBPACK_IMPORTED_MODULE_11__["MarkTodoAsActiveUseCase"]; });

/* harmony import */ var _lib_usecase_mark_todo_as_completed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/usecase/mark-todo-as-completed */ "../../../../libs/todo/domain/src/lib/usecase/mark-todo-as-completed.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkTodoAsCompletedUseCase", function() { return _lib_usecase_mark_todo_as_completed__WEBPACK_IMPORTED_MODULE_12__["MarkTodoAsCompletedUseCase"]; });

/* harmony import */ var _lib_usecase_remove_completed_todos_usecase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/usecase/remove-completed-todos.usecase */ "../../../../libs/todo/domain/src/lib/usecase/remove-completed-todos.usecase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveCompletedTodosUseCase", function() { return _lib_usecase_remove_completed_todos_usecase__WEBPACK_IMPORTED_MODULE_13__["RemoveCompletedTodosUseCase"]; });

/* harmony import */ var _lib_usecase_remove_todo_id_usecase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/usecase/remove-todo-id.usecase */ "../../../../libs/todo/domain/src/lib/usecase/remove-todo-id.usecase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveTodoUseCase", function() { return _lib_usecase_remove_todo_id_usecase__WEBPACK_IMPORTED_MODULE_14__["RemoveTodoUseCase"]; });

















/***/ }),

/***/ "../../../../libs/todo/domain/src/lib/entity/todo.entity.ts":
/*!******************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/lib/entity/todo.entity.ts ***!
  \******************************************************************************************/
/*! exports provided: TodoEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEntity", function() { return TodoEntity; });
class TodoEntity {
  constructor(params) {
    this.id = void 0;
    this.name = void 0;
    this.completed = void 0;
    this.id = params == null ? void 0 : params.id;
    this.name = params == null ? void 0 : params.name;
    this.completed = params == null ? void 0 : params.completed;
  }

  static create(params) {
    return new this(params);
  }

}

/***/ }),

/***/ "../../../../libs/todo/domain/src/lib/repository/todo.repository.ts":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/lib/repository/todo.repository.ts ***!
  \**************************************************************************************************/
/*! exports provided: TodoRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoRepository", function() { return TodoRepository; });
class TodoRepository {}

/***/ }),

/***/ "../../../../libs/todo/domain/src/lib/usecase/add-todo.usecase.ts":
/*!************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/lib/usecase/add-todo.usecase.ts ***!
  \************************************************************************************************/
/*! exports provided: AddTodoUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoUseCase", function() { return AddTodoUseCase; });
class AddTodoUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  execute(request) {
    return this.todoRepository.addTodo(request.name);
  }

}

/***/ }),

/***/ "../../../../libs/todo/domain/src/lib/usecase/filter-todos.usecase.ts":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/lib/usecase/filter-todos.usecase.ts ***!
  \****************************************************************************************************/
/*! exports provided: FilterTodosUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTodosUseCase", function() { return FilterTodosUseCase; });
class FilterTodosUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  execute(request) {
    if (request.filter === 'active') {
      return this.todoRepository.getActiveTodos();
    } else if (request.filter === 'completed') {
      return this.todoRepository.getCompletedTodos();
    } else {
      return this.todoRepository.getAllTodos();
    }
  }

}

/***/ }),

/***/ "../../../../libs/todo/domain/src/lib/usecase/get-active-todos-count.usecase.ts":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/lib/usecase/get-active-todos-count.usecase.ts ***!
  \**************************************************************************************************************/
/*! exports provided: GetActiveTodosCountUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetActiveTodosCountUseCase", function() { return GetActiveTodosCountUseCase; });
class GetActiveTodosCountUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  execute() {
    return this.todoRepository.getActiveTodosCount();
  }

}

/***/ }),

/***/ "../../../../libs/todo/domain/src/lib/usecase/get-active-todos.usecase.ts":
/*!********************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/lib/usecase/get-active-todos.usecase.ts ***!
  \********************************************************************************************************/
/*! exports provided: GetActiveTodosUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetActiveTodosUseCase", function() { return GetActiveTodosUseCase; });
class GetActiveTodosUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  execute() {
    return this.todoRepository.getActiveTodos();
  }

}

/***/ }),

/***/ "../../../../libs/todo/domain/src/lib/usecase/get-all-todos.usecase.ts":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/lib/usecase/get-all-todos.usecase.ts ***!
  \*****************************************************************************************************/
/*! exports provided: GetAllTodosUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllTodosUseCase", function() { return GetAllTodosUseCase; });
class GetAllTodosUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  execute() {
    return this.todoRepository.getAllTodos();
  }

}

/***/ }),

/***/ "../../../../libs/todo/domain/src/lib/usecase/get-completed-todos.usecase.ts":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/lib/usecase/get-completed-todos.usecase.ts ***!
  \***********************************************************************************************************/
/*! exports provided: GetCompletedTodosUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompletedTodosUseCase", function() { return GetCompletedTodosUseCase; });
class GetCompletedTodosUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  execute() {
    return this.todoRepository.getCompletedTodos();
  }

}

/***/ }),

/***/ "../../../../libs/todo/domain/src/lib/usecase/get-todo-by-id.usecase.ts":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/lib/usecase/get-todo-by-id.usecase.ts ***!
  \******************************************************************************************************/
/*! exports provided: GetTodoByIdUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTodoByIdUseCase", function() { return GetTodoByIdUseCase; });
class GetTodoByIdUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  execute(request) {
    return this.todoRepository.getTodoById(request.id);
  }

}

/***/ }),

/***/ "../../../../libs/todo/domain/src/lib/usecase/mark-all-todos-as-active.usecase.ts":
/*!****************************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/lib/usecase/mark-all-todos-as-active.usecase.ts ***!
  \****************************************************************************************************************/
/*! exports provided: MarkAllTodosAsActiveUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkAllTodosAsActiveUseCase", function() { return MarkAllTodosAsActiveUseCase; });
class MarkAllTodosAsActiveUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  execute() {
    return this.todoRepository.markAllTodosAsActive();
  }

}

/***/ }),

/***/ "../../../../libs/todo/domain/src/lib/usecase/mark-all-todos-as-completed.usecase.ts":
/*!*******************************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/lib/usecase/mark-all-todos-as-completed.usecase.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: MarkAllTodosAsCompletedUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkAllTodosAsCompletedUseCase", function() { return MarkAllTodosAsCompletedUseCase; });
class MarkAllTodosAsCompletedUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  execute() {
    return this.todoRepository.markAllTodosAsCompleted();
  }

}

/***/ }),

/***/ "../../../../libs/todo/domain/src/lib/usecase/mark-todo-as-active.usecase.ts":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/lib/usecase/mark-todo-as-active.usecase.ts ***!
  \***********************************************************************************************************/
/*! exports provided: MarkTodoAsActiveUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkTodoAsActiveUseCase", function() { return MarkTodoAsActiveUseCase; });
class MarkTodoAsActiveUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  execute(request) {
    return this.todoRepository.markTodoAsCompleted(request.id, false);
  }

}

/***/ }),

/***/ "../../../../libs/todo/domain/src/lib/usecase/mark-todo-as-completed.ts":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/lib/usecase/mark-todo-as-completed.ts ***!
  \******************************************************************************************************/
/*! exports provided: MarkTodoAsCompletedUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkTodoAsCompletedUseCase", function() { return MarkTodoAsCompletedUseCase; });
class MarkTodoAsCompletedUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  execute(request) {
    return this.todoRepository.markTodoAsCompleted(request.id, true);
  }

}

/***/ }),

/***/ "../../../../libs/todo/domain/src/lib/usecase/remove-completed-todos.usecase.ts":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/lib/usecase/remove-completed-todos.usecase.ts ***!
  \**************************************************************************************************************/
/*! exports provided: RemoveCompletedTodosUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveCompletedTodosUseCase", function() { return RemoveCompletedTodosUseCase; });
class RemoveCompletedTodosUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  execute() {
    return this.todoRepository.removeCompletedTodos();
  }

}

/***/ }),

/***/ "../../../../libs/todo/domain/src/lib/usecase/remove-todo-id.usecase.ts":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/domain/src/lib/usecase/remove-todo-id.usecase.ts ***!
  \******************************************************************************************************/
/*! exports provided: RemoveTodoUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveTodoUseCase", function() { return RemoveTodoUseCase; });
class RemoveTodoUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  execute(request) {
    return this.todoRepository.removeTodo(request.id);
  }

}

/***/ }),

/***/ "../../../../libs/todo/presentation/src/index.ts":
/*!*******************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/presentation/src/index.ts ***!
  \*******************************************************************************/
/*! exports provided: TodoDefaultPresenter, TodoStateVM, TodoPresenter, TodoViewModelMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_presenter_todo_default_presenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/presenter/todo-default.presenter */ "../../../../libs/todo/presentation/src/lib/presenter/todo-default.presenter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoDefaultPresenter", function() { return _lib_presenter_todo_default_presenter__WEBPACK_IMPORTED_MODULE_0__["TodoDefaultPresenter"]; });

/* harmony import */ var _lib_viewmodel_todos_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/viewmodel/todos.viewmodel */ "../../../../libs/todo/presentation/src/lib/viewmodel/todos.viewmodel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoStateVM", function() { return _lib_viewmodel_todos_viewmodel__WEBPACK_IMPORTED_MODULE_1__["TodoStateVM"]; });

/* harmony import */ var _lib_presenter_todo_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/presenter/todo.presenter */ "../../../../libs/todo/presentation/src/lib/presenter/todo.presenter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoPresenter", function() { return _lib_presenter_todo_presenter__WEBPACK_IMPORTED_MODULE_2__["TodoPresenter"]; });

/* harmony import */ var _lib_mapper_todo_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/mapper/todo.mapper */ "../../../../libs/todo/presentation/src/lib/mapper/todo.mapper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoViewModelMapper", function() { return _lib_mapper_todo_mapper__WEBPACK_IMPORTED_MODULE_3__["TodoViewModelMapper"]; });






/***/ }),

/***/ "../../../../libs/todo/presentation/src/lib/mapper/todo.mapper.ts":
/*!************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/presentation/src/lib/mapper/todo.mapper.ts ***!
  \************************************************************************************************/
/*! exports provided: TodoViewModelMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoViewModelMapper", function() { return TodoViewModelMapper; });
class TodoViewModelMapper {
  mapFrom(input) {
    return {
      id: input.id,
      name: input.name,
      completed: input.completed
    };
  }

  mapTo(input) {
    return {
      id: input.id,
      name: input.name,
      completed: input.completed
    };
  }

}

/***/ }),

/***/ "../../../../libs/todo/presentation/src/lib/presenter/todo-default.presenter.ts":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/presentation/src/lib/presenter/todo-default.presenter.ts ***!
  \**************************************************************************************************************/
/*! exports provided: TodoDefaultPresenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDefaultPresenter", function() { return TodoDefaultPresenter; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "../../../../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _viewmodel_todos_viewmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewmodel/todos.viewmodel */ "../../../../libs/todo/presentation/src/lib/viewmodel/todos.viewmodel.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../../../node_modules/@nrwl/web/node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mapper_todo_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mapper/todo.mapper */ "../../../../libs/todo/presentation/src/lib/mapper/todo.mapper.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../../../node_modules/@nrwl/web/node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nx-clean/todo-domain */ "../../../../libs/todo/domain/src/index.ts");








class TodoDefaultPresenter {
  // internal state
  // use cases
  constructor(repository) {
    this.repository = repository;
    this.todos$ = void 0;
    this.activeTodosCount$ = void 0;
    this.filter$ = void 0;
    this.state = new _viewmodel_todos_viewmodel__WEBPACK_IMPORTED_MODULE_3__["TodoStateVM"]();
    this.dispatch = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.state);
    this.mapper = new _mapper_todo_mapper__WEBPACK_IMPORTED_MODULE_5__["TodoViewModelMapper"]();
    this.filterTodosUC = void 0;
    this.getAllTodosUC = void 0;
    this.getCompletedTodosUC = void 0;
    this.getActiveTodosUC = void 0;
    this.getActiveTodosCountUC = void 0;
    this.addTodoUC = void 0;
    this.markTodoAsCompletedUC = void 0;
    this.markTodoAsActiveUC = void 0;
    this.removeTodoUC = void 0;
    this.removeCompletedTodosUC = void 0;
    this.markAllTodosAsCompletedUC = void 0;
    this.markAllTodosAsActiveUC = void 0;
    this.filterTodosUC = new _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_7__["FilterTodosUseCase"](this.repository);
    this.getAllTodosUC = new _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_7__["GetAllTodosUseCase"](this.repository);
    this.getCompletedTodosUC = new _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_7__["GetCompletedTodosUseCase"](this.repository);
    this.getActiveTodosUC = new _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_7__["GetActiveTodosUseCase"](this.repository);
    this.getActiveTodosCountUC = new _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_7__["GetActiveTodosCountUseCase"](this.repository);
    this.addTodoUC = new _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_7__["AddTodoUseCase"](this.repository);
    this.markTodoAsCompletedUC = new _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_7__["MarkTodoAsCompletedUseCase"](this.repository);
    this.markTodoAsActiveUC = new _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_7__["MarkTodoAsActiveUseCase"](this.repository);
    this.markAllTodosAsCompletedUC = new _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_7__["MarkAllTodosAsCompletedUseCase"](this.repository);
    this.markAllTodosAsActiveUC = new _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_7__["MarkAllTodosAsActiveUseCase"](this.repository);
    this.removeTodoUC = new _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_7__["RemoveTodoUseCase"](this.repository);
    this.removeCompletedTodosUC = new _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_7__["RemoveCompletedTodosUseCase"](this.repository); // state selectors

    this.todos$ = this.dispatch.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(state => state.todos));
    this.filter$ = this.dispatch.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(state => state.filter));
    this.activeTodosCount$ = this.dispatch.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(state => state.activeTodosCount));
  }

  getAllTodos() {
    const todos$ = this.getAllTodosUC.execute().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(todos => todos.map(this.mapper.mapFrom)));
    const count$ = this.getActiveTodosCountUC.execute();
    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([todos$, count$]).subscribe(([todos, activeTodosCount]) => {
      this.dispatch.next(this.state = Object.assign({}, this.state, {
        todos,
        filter: 'all',
        activeTodosCount
      }));
    });
    return todos$;
  }

  getCompletedTodos() {
    const todos$ = this.getCompletedTodosUC.execute();
    const count$ = this.getActiveTodosCountUC.execute();
    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([todos$, count$]).subscribe(([todos, count]) => {
      this.dispatch.next(this.state = Object.assign({}, this.state, {
        todos: todos.map(this.mapper.mapFrom),
        filter: 'completed',
        activeTodosCount: count
      }));
    });
  }

  getActiveTodos() {
    const todos$ = this.getActiveTodosUC.execute();
    const count$ = this.getActiveTodosCountUC.execute();
    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([todos$, count$]).subscribe(([todos, count]) => {
      this.dispatch.next(this.state = Object.assign({}, this.state, {
        todos: todos.map(this.mapper.mapFrom),
        filter: 'active',
        activeTodosCount: count
      }));
    });
  }

  addTodo(name) {
    const add$ = this.addTodoUC.execute({
      name
    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.mapper.mapFrom));
    const count$ = this.getActiveTodosCountUC.execute();
    const todos$ = this.filterTodosUC.execute({
      filter: this.state.filter
    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(todos => todos.map(this.mapper.mapFrom)));
    add$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(count$, todos$))).subscribe(([activeTodosCount, todos]) => {
      this.dispatch.next(this.state = Object.assign({}, this.state, {
        todos,
        activeTodosCount
      }));
    });
    return add$;
  }

  markTodoAsCompleted(id) {
    const mark$ = this.markTodoAsCompletedUC.execute({
      id
    });
    const count$ = this.getActiveTodosCountUC.execute();
    const todos$ = this.filterTodosUC.execute({
      filter: this.state.filter
    });
    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([mark$, count$, todos$]).subscribe(([, count, todos]) => {
      this.dispatch.next(this.state = Object.assign({}, this.state, {
        todos: todos.map(this.mapper.mapFrom),
        activeTodosCount: count
      }));
    });
  }

  markTodoAsActive(id) {
    const mark$ = this.markTodoAsActiveUC.execute({
      id
    });
    const count$ = this.getActiveTodosCountUC.execute();
    const todos$ = this.filterTodosUC.execute({
      filter: this.state.filter
    });
    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([mark$, count$, todos$]).subscribe(([, count, todos]) => {
      this.dispatch.next(this.state = Object.assign({}, this.state, {
        todos: todos.map(this.mapper.mapFrom),
        activeTodosCount: count
      }));
    });
  }

  markAllTodosAsCompleted() {
    const mark$ = this.markAllTodosAsCompletedUC.execute();
    const count$ = this.getActiveTodosCountUC.execute();
    const todos$ = this.filterTodosUC.execute({
      filter: this.state.filter
    });
    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([mark$, count$, todos$]).subscribe(([, count, todos]) => {
      this.dispatch.next(this.state = Object.assign({}, this.state, {
        todos: todos.map(this.mapper.mapFrom),
        activeTodosCount: count
      }));
    });
  }

  markAllTodosAsActive() {
    const mark$ = this.markAllTodosAsActiveUC.execute();
    const count$ = this.getActiveTodosCountUC.execute();
    const todos$ = this.filterTodosUC.execute({
      filter: this.state.filter
    });
    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([mark$, count$, todos$]).subscribe(([, count, todos]) => {
      this.dispatch.next(this.state = Object.assign({}, this.state, {
        todos: todos.map(this.mapper.mapFrom),
        activeTodosCount: count
      }));
    });
  }

  removeTodo(id) {
    const remove$ = this.removeTodoUC.execute({
      id
    });
    const count$ = this.getActiveTodosCountUC.execute();
    const todos$ = this.filterTodosUC.execute({
      filter: this.state.filter
    });
    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([remove$, count$, todos$]).subscribe(([, count, todos]) => {
      this.dispatch.next(this.state = Object.assign({}, this.state, {
        todos: todos.map(this.mapper.mapFrom),
        activeTodosCount: count
      }));
    });
  }

  removeCompletedTodos() {
    const remove$ = this.removeCompletedTodosUC.execute();
    const count$ = this.getActiveTodosCountUC.execute();
    const todos$ = this.filterTodosUC.execute({
      filter: this.state.filter
    });
    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([remove$, count$, todos$]).subscribe(([, count, todos]) => {
      this.dispatch.next(this.state = Object.assign({}, this.state, {
        todos: todos.map(this.mapper.mapFrom),
        activeTodosCount: count
      }));
    });
  }

  updateTodos(todos) {
    this.dispatch.next(this.state = Object.assign({}, this.state, {
      todos
    }));
  }

  onDestroy() {
    console.log('destroy');
  }

}

/***/ }),

/***/ "../../../../libs/todo/presentation/src/lib/presenter/todo.presenter.ts":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/presentation/src/lib/presenter/todo.presenter.ts ***!
  \******************************************************************************************************/
/*! exports provided: TodoPresenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPresenter", function() { return TodoPresenter; });
class TodoPresenter {
  constructor() {
    this.todos$ = void 0;
    this.activeTodosCount$ = void 0;
    this.filter$ = void 0;
  }

}

/***/ }),

/***/ "../../../../libs/todo/presentation/src/lib/viewmodel/todos.viewmodel.ts":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/libs/todo/presentation/src/lib/viewmodel/todos.viewmodel.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TodoStateVM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoStateVM", function() { return TodoStateVM; });
class TodoStateVM {
  constructor() {
    this.filter = 'all';
    this.todos = [];
    this.activeTodosCount = 0;
  }

}

/***/ }),

/***/ "../../../../node_modules/@nrwl/web/node_modules/css-loader/dist/cjs.js?!../../../../node_modules/@nrwl/web/node_modules/sass-loader/dist/cjs.js?!./app/app.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/@nrwl/web/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!/home/runner/work/nx-clean/nx-clean/node_modules/@nrwl/web/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-1-2!./app/app.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/@nrwl/web/node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/@nrwl/web/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".app_app__3YmFv {\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n\n.app_app__3YmFv .view {\n  gap: 14px;\n  display: flex;\n  align-items: center;\n}\n.app_app__3YmFv .view button {\n  border-width: 0.5px;\n  border-radius: 50%;\n}\n\n.app_app__3YmFv .flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.app_app__3YmFv header {\n  background-color: #143055;\n  color: white;\n  padding: 5px;\n  border-radius: 3px;\n}\n\n.app_app__3YmFv main {\n  padding: 36px 18px 8px 18px;\n}\n.app_app__3YmFv main input[type=text] {\n  width: calc(100% - 8px);\n}\n\n.app_app__3YmFv footer {\n  padding: 8px 18px;\n}", ""]);
// Exports
exports.locals = {
	"app": "app_app__3YmFv"
};
module.exports = exports;


/***/ }),

/***/ "../../../../node_modules/@nrwl/web/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/@nrwl/web/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "../../../../node_modules/core-js/internals/a-possible-prototype.js":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/a-possible-prototype.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/add-to-unscopables.js":
/*!************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/add-to-unscopables.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../../node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../../../../node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../../node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/an-object.js":
/*!***************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/an-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/array-includes.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/array-includes.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../../node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../../../node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../../../node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/classof-raw.js":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/classof-raw.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/copy-constructor-properties.js":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../../node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../../../../node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../../node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/correct-prototype-getter.js":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "../../../../node_modules/core-js/internals/create-iterator-constructor.js":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/create-iterator-constructor.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "../../../../node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "../../../../node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../../node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../../node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../../node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!************************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/create-property-descriptor.js":
/*!********************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/create-property-descriptor.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/define-iterator.js":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/define-iterator.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../../node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../../../../node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../../../node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../../../node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../../node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../../node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../../node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../../node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "../../../../node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/descriptors.js":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../../node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "../../../../node_modules/core-js/internals/document-create-element.js":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/document-create-element.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../../node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/dom-iterables.js":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/dom-iterables.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/engine-user-agent.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/engine-user-agent.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "../../../../node_modules/core-js/internals/engine-v8-version.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/engine-v8-version.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../../node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../../../node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "../../../../node_modules/core-js/internals/enum-bug-keys.js":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/enum-bug-keys.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../../../../node_modules/core-js/internals/export.js":
/*!************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/export.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../../node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../../node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../../../../node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../../../node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/fails.js":
/*!***********************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/fails.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/get-built-in.js":
/*!******************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/get-built-in.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "../../../../node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../../node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/global.js":
/*!************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/global.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "../../../../node_modules/core-js/internals/has.js":
/*!*********************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/has.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../../node_modules/core-js/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/hidden-keys.js":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/hidden-keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/html.js":
/*!**********************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/html.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "../../../../node_modules/core-js/internals/ie8-dom-define.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/ie8-dom-define.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../../node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../../node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "../../../../node_modules/core-js/internals/indexed-object.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/indexed-object.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../../node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../../../node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "../../../../node_modules/core-js/internals/inspect-source.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/inspect-source.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "../../../../node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "../../../../node_modules/core-js/internals/internal-state.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/internal-state.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../../../../node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "../../../../node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "../../../../node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../../node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../../node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/is-forced.js":
/*!***************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/is-forced.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../../node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../../../../node_modules/core-js/internals/is-object.js":
/*!***************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/is-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/is-pure.js":
/*!*************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/is-pure.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../../../../node_modules/core-js/internals/iterators-core.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/iterators-core.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../../../../node_modules/core-js/internals/fails.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../../../node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../../node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/iterators.js":
/*!***************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/iterators.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/native-symbol.js":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/native-symbol.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../../../node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../../node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "../../../../node_modules/core-js/internals/native-weak-map.js":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/native-weak-map.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../../node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../../node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "../../../../node_modules/core-js/internals/object-assign.js":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/object-assign.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../../node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../../../node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../../../node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../../../node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../../node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../../../node_modules/core-js/internals/indexed-object.js");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "../../../../node_modules/core-js/internals/object-create.js":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/object-create.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../../node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../../../../node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../../node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../../node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "../../../../node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../../node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../../node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/object-define-properties.js":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/object-define-properties.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../../node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../../node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../../../node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/object-define-property.js":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/object-define-property.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../../node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../../../node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../../node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../../../node_modules/core-js/internals/to-primitive.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!****************************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../../node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../../../node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../../node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../../node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../../../node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../../node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../../../node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/object-get-own-property-names.js":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!*************************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../../../node_modules/core-js/internals/object-get-prototype-of.js":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../../node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../../node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../../node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../../../../node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/object-keys-internal.js":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/object-keys-internal.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../../node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../../node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "../../../../node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../../node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/object-keys.js":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/object-keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../../node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "../../../../node_modules/core-js/internals/object-set-prototype-of.js":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../../node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../../../../node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "../../../../node_modules/core-js/internals/own-keys.js":
/*!**************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/own-keys.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../../node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../../../../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../../../node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../../node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/path.js":
/*!**********************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/path.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../../node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "../../../../node_modules/core-js/internals/redefine.js":
/*!**************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/redefine.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../../node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../../node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../../node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../../node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "../../../../node_modules/core-js/internals/regexp-flags.js":
/*!******************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/regexp-flags.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../../node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/require-object-coercible.js":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/require-object-coercible.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/set-global.js":
/*!****************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/set-global.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../../node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/set-to-string-tag.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/set-to-string-tag.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../../../../node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "../../../../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/shared-key.js":
/*!****************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/shared-key.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "../../../../node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../../../node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/shared-store.js":
/*!******************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/shared-store.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../../node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../../node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../../../../node_modules/core-js/internals/shared.js":
/*!************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/shared.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../../node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../../../../node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../../../node_modules/core-js/internals/to-absolute-index.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/to-absolute-index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../../node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/to-indexed-object.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/to-indexed-object.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../../../node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../../node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/to-integer.js":
/*!****************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/to-integer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/to-length.js":
/*!***************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/to-length.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../../node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/to-object.js":
/*!***************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/to-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../../node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/to-primitive.js":
/*!******************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/to-primitive.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../../node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/uid.js":
/*!*********************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/uid.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "../../../../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../../../node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "../../../../node_modules/core-js/internals/well-known-symbol.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/internals/well-known-symbol.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../../node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../../../../node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../../node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../../../node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../../../node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../../../../node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "../../../../node_modules/core-js/modules/es.array.iterator.js":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/modules/es.array.iterator.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../../node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../../../node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../../node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../../node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../../../node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../../../../node_modules/core-js/modules/es.object.assign.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/modules/es.object.assign.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../../../node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "../../../../node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "../../../../node_modules/core-js/modules/es.regexp.to-string.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/modules/es.regexp.to-string.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../../node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../../node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../../node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "../../../../node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "../../../../node_modules/core-js/modules/es.symbol.description.js":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/modules/es.symbol.description.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "../../../../node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../../node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../../node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../../node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../../node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../../../../node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../../../../node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "../../../../node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!********************************************************************************************************!*\
  !*** /home/runner/work/nx-clean/nx-clean/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../../node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../../../../node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "../../../../node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./app/app.module.scss":
/*!*****************************!*\
  !*** ./app/app.module.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/@nrwl/web/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!../../../../../node_modules/@nrwl/web/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-1-2!./app.module.scss */ "../../../../node_modules/@nrwl/web/node_modules/css-loader/dist/cjs.js?!../../../../node_modules/@nrwl/web/node_modules/sass-loader/dist/cjs.js?!./app/app.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/@nrwl/web/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/@nrwl/web/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/app.provider.ts":
/*!*****************************!*\
  !*** ./app/app.provider.ts ***!
  \*****************************/
/*! exports provided: injector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return injector; });
/* harmony import */ var _nx_clean_todo_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nx-clean/todo-data-access */ "../../../../libs/todo/data-access/src/index.ts");
/* harmony import */ var _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nx-clean/todo-domain */ "../../../../libs/todo/domain/src/index.ts");
/* harmony import */ var _nx_clean_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nx-clean/core */ "../../../../libs/core/src/index.ts");
/* harmony import */ var _nx_clean_todo_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nx-clean/todo-presentation */ "../../../../libs/todo/presentation/src/index.ts");




const injector = _nx_clean_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create([{
  provide: _nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_1__["TodoRepository"],
  useFactory: () => {
    return new _nx_clean_todo_data_access__WEBPACK_IMPORTED_MODULE_0__["TodoInMemoryRepository"]([{
      id: '1',
      title: 'Opa',
      completed: true
    }]);
  }
}, {
  provide: _nx_clean_todo_presentation__WEBPACK_IMPORTED_MODULE_3__["TodoPresenter"],
  useFactory: repo => {
    return new _nx_clean_todo_presentation__WEBPACK_IMPORTED_MODULE_3__["TodoDefaultPresenter"](repo);
  },
  deps: [_nx_clean_todo_domain__WEBPACK_IMPORTED_MODULE_1__["TodoRepository"]]
}]);

/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _nx_clean_todo_presentation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nx-clean/todo-presentation */ "../../../../libs/todo/presentation/src/index.ts");
/* harmony import */ var _app_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.provider */ "./app/app.provider.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.module.scss */ "./app/app.module.scss");
/* harmony import */ var _app_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/runner/work/nx-clean/nx-clean/apps/todo/react/src/app/app.tsx";





const presenter = _app_provider__WEBPACK_IMPORTED_MODULE_1__["injector"].get(_nx_clean_todo_presentation__WEBPACK_IMPORTED_MODULE_0__["TodoPresenter"]);
console.log(presenter);
function App() {
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('');
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    presenter.getAllTodos().subscribe(setState).unsubscribe();
    const subscription = presenter.todos$.subscribe(setState);
    return () => subscription.unsubscribe();
  }, []);

  function handleAddTodo(event) {
    if (event.key === 'Enter') {
      presenter.addTodo(value);
      setValue('');
    }
  }

  function onToggleItem(input, id) {
    if (input.checked) {
      presenter.markTodoAsCompleted(id);
    } else {
      presenter.markTodoAsActive(id);
    }
  }

  function onShowAll() {
    presenter.getAllTodos();
  }

  function onShowActive() {
    presenter.getActiveTodos();
  }

  function onShowCompleted() {
    presenter.getCompletedTodos();
  }

  function onClearCompleted() {
    presenter.removeCompletedTodos();
  }

  function onRemoveItem(todo) {
    presenter.removeTodo(todo.id);
  }

  const renderTodoItem = todo => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "view",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          id: todo.id,
          type: "checkbox",
          className: "toggle",
          checked: todo.completed,
          onChange: event => onToggleItem(event.target, todo.id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          htmlFor: todo.id,
          children: todo.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          className: "destroy",
          onClick: () => onRemoveItem(todo),
          children: "x"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)
    }, todo.id, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: _app_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.app,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("header", {
      className: "flex",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        children: "Welcome to react!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("nav", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h3", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
          href: "/",
          children: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        type: "text",
        autoFocus: true,
        value: value,
        placeholder: "O que falta finalizar?",
        onChange: event => setValue(event.target.value),
        onKeyPress: event => handleAddTodo(event)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
        children: state.map(renderTodoItem)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("footer", {
      className: "footer",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        className: "todo-count",
        children: ["Faltam ", state.length, " itens pra finalizar"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
        className: "filters",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
            onClick: onShowAll,
            children: "Todos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
            onClick: onShowActive,
            children: "Ativos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
            onClick: onShowCompleted,
            children: "Finalizados"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        onClick: onClearCompleted,
        children: "Limpar finalizados"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/runner/work/nx-clean/nx-clean/apps/todo/react/src/main.tsx";





react_dom__WEBPACK_IMPORTED_MODULE_1__["render"]( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_app_app__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/nx-clean/nx-clean/apps/todo/react/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map