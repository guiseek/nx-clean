# @nx-clean/plugin-core

## Clean Architecture with Nx workspaces

### Install

```sh
npm i @nx-clean/plugin-core
```

### Using

```sh
nx generate @nx-clean/plugin-core:plugin-core --name=core

UPDATE workspace.json
UPDATE nx.json
CREATE libs/core/README.md
CREATE libs/core/jest.config.js
CREATE libs/core/package.json
CREATE libs/core/src/index.ts
CREATE libs/core/src/lib/core/mapper.ts
CREATE libs/core/src/lib/domain/service/localstorage.service.ts
CREATE libs/core/src/lib/domain/usecase/usecase.ts
CREATE libs/core/src/lib/presentation/presenter.ts
CREATE libs/core/src/lib/presentation/view-model.ts
CREATE libs/core/tsconfig.json
CREATE libs/core/tsconfig.lib.json
CREATE libs/core/tsconfig.spec.json
```

### Folder structure

```sh
libs/core
├── README.md
├── jest.config.js
├── package.json
├── src
│   ├── index.ts
│   └── lib
│       ├── common
│       │   └── mapper.ts
│       ├── domain
│       │   ├── service
│       │   │   └── localstorage.service.ts
│       │   └── usecase
│       │       └── usecase.ts
│       └── presentation
│           ├── presenter.ts
│           └── view-model.ts
├── tsconfig.json
├── tsconfig.lib.json
└── tsconfig.spec.json
```

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test core` to execute the unit tests via [Jest](https://jestjs.io).

---

This project was generated using [Nx Clean](https://github.com/guiseek/nx-clean).
