# Clean Architecture with Nx workspaces

## Install

```sh
npm i @nx-clean/plugin-core
```

## Generators

### Core - Generate

```sh
nx generate @nx-clean/plugin-core:core --name=common --directory=core --tags=scope:core,type:common
```

#### Core - Result

```sh
UPDATE workspace.json
UPDATE nx.json
CREATE libs/core/common/README.md
CREATE libs/core/common/jest.config.js
CREATE libs/core/common/package.json
CREATE libs/core/common/src/index.ts
CREATE libs/core/common/src/lib/common/mapper.ts
CREATE libs/core/common/src/lib/domain/service/localstorage.service.ts
CREATE libs/core/common/src/lib/domain/usecase/usecase.ts
CREATE libs/core/common/src/lib/presentation/presenter.ts
CREATE libs/core/common/src/lib/presentation/view-model.ts
CREATE libs/core/common/tsconfig.json
CREATE libs/core/common/tsconfig.lib.json
CREATE libs/core/common/tsconfig.spec.json
```

#### Core - Folder structure

```sh
libs/core/common
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

---

### Domain - Generate

| Property   | Value                      | Description                     |
| ---------- | -------------------------- | ------------------------------- |
| name       | domain                     | Name or last directory in tree  |
| entity     | user                       | Entity of domain                |
| project    | core-common                | Common core library             |
| directory  | account                    | Where the project is placed     |
| tags       | type:domain,scope:account  | Tags (used for linting)         |

```sh
nx generate @nx-clean/plugin-core:domain --name=domain --entity=user --project=core --directory=account --tags=type:domain,scope:account
```

#### Domain - Result

```sh
UPDATE workspace.json
UPDATE nx.json
CREATE libs/account/domain/README.md
CREATE libs/account/domain/jest.config.js
CREATE libs/account/domain/package.json
CREATE libs/account/domain/src/index.ts
CREATE libs/account/domain/src/lib/entity/user.entity.spec.ts
CREATE libs/account/domain/src/lib/entity/user.entity.ts
CREATE libs/account/domain/src/lib/repository/user.repository.ts
CREATE libs/account/domain/src/lib/usecase/add-user.usecase.ts
CREATE libs/account/domain/src/lib/usecase/get-user-by-id.usecase.ts
CREATE libs/account/domain/src/lib/usecase/get-active-users-count.usecase.ts
CREATE libs/account/domain/src/lib/usecase/get-active-users.usecase.ts
CREATE libs/account/domain/src/lib/usecase/get-all-users.usecase.ts
CREATE libs/account/domain/src/lib/usecase/remove-user-id.usecase.ts
CREATE libs/account/domain/src/lib/usecase/update-user.usecase.ts
CREATE libs/account/domain/tsconfig.json
CREATE libs/account/domain/tsconfig.lib.json
CREATE libs/account/domain/tsconfig.spec.json
```

#### Domain - Folder structure

```sh
libs/account/domain
├── README.md
├── jest.config.js
├── package.json
├── src
│   ├── index.ts
│   └── lib
│       ├── entity
│       │   ├── user.entity.spec.ts
│       │   └── user.entity.ts
│       ├── repository
│       │   └── user.repository.ts
│       └── usecase
│           ├── add-user.usecase.ts
│           ├── get-active-users-count.usecase.ts
│           ├── get-active-users.usecase.ts
│           ├── get-all-users.usecase.ts
│           ├── get-user-by-id.usecase.ts
│           ├── remove-user-id.usecase.ts
│           └── update-user.usecase.ts
├── tsconfig.json
├── tsconfig.lib.json
└── tsconfig.spec.json
```

---

This project was generated using [Nx Clean](https://github.com/guiseek/nx-clean).
