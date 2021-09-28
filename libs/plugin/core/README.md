# Clean Architecture with Nx workspaces

## Install

```sh
npm i @nx-clean/plugin-core
```

## Generators

### Core - Generate

| Property  | Value                  | Description                    |
| --------- | ---------------------- | ------------------------------ |
| name      | common                 | Name or last directory in tree |
| directory | core                   | Where the project is placed    |
| tags      | type:common,scope:core | Tags (used for linting)        |

#### Core - Command

```sh
nx generate @nx-clean/plugin-core:core --name=common --directory=core --tags=type:common,scope:core
```

#### Core - Result

```sh
CREATE libs/core/common/README.md
CREATE libs/core/common/.babelrc
CREATE libs/core/common/package.json
CREATE libs/core/common/src/index.ts
CREATE libs/core/common/src/lib/core-common.spec.ts
CREATE libs/core/common/src/lib/core-common.ts
CREATE libs/core/common/tsconfig.json
CREATE libs/core/common/tsconfig.lib.json
UPDATE tsconfig.base.json
UPDATE workspace.json
UPDATE nx.json
CREATE libs/core/common/.eslintrc.json
CREATE libs/core/common/jest.config.js
CREATE libs/core/common/tsconfig.spec.json
UPDATE jest.config.js
CREATE libs/core/common/src/lib/common/mapper.ts
CREATE libs/core/common/src/lib/domain/service/localstorage.service.ts
CREATE libs/core/common/src/lib/domain/usecase/usecase.ts
CREATE libs/core/common/src/lib/presentation/presenter.ts
CREATE libs/core/common/src/lib/presentation/view-model.ts
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
│       ├── core-common.spec.ts
│       ├── core-common.ts
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

| Property  | Value                     | Description                    |
| --------- | ------------------------- | ------------------------------ |
| name      | domain                    | Name or last directory in tree |
| entity    | user                      | Entity of domain               |
| project   | core-common               | Common core library            |
| directory | account                   | Where the project is placed    |
| tags      | type:domain,scope:account | Tags (used for linting)        |

#### Domain - Command

```sh
nx generate @nx-clean/plugin-core:domain --name=domain --entity=user --project=core-common --directory=account --tags=type:domain,scope:account
```

#### Domain - Result

```sh
CREATE libs/account/domain/README.md
CREATE libs/account/domain/.babelrc
CREATE libs/account/domain/src/index.ts
CREATE libs/account/domain/src/lib/account-domain.spec.ts
CREATE libs/account/domain/src/lib/account-domain.ts
CREATE libs/account/domain/tsconfig.json
CREATE libs/account/domain/tsconfig.lib.json
UPDATE tsconfig.base.json
UPDATE workspace.json
UPDATE nx.json
CREATE libs/account/domain/.eslintrc.json
CREATE libs/account/domain/jest.config.js
CREATE libs/account/domain/tsconfig.spec.json
UPDATE jest.config.js
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
```

#### Domain - Folder structure

```sh
libs/account/domain
├── README.md
├── jest.config.js
├── src
│   ├── index.ts
│   └── lib
│       ├── account-domain.spec.ts
│       ├── account-domain.ts
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

### Data - Generate

| Property  | Value                   | Description                    |
| --------- | ----------------------- | ------------------------------ |
| name      | data                    | Name or last directory in tree |
| entity    | user                    | Entity of domain               |
| project   | core-common             | Common core library            |
| domain    | account-domain          | Domain library                 |
| directory | account                 | Where the project is placed    |
| tags      | type:data,scope:account | Tags (used for linting)        |

#### Data - Command

```sh
nx generate @nx-clean/plugin-core:data --name=data --domain=account-domain --entity=user --project=core-common --directory=account --tags=type:data,scope:account
```

#### Data - Result

```sh
CREATE libs/account/data/README.md
CREATE libs/account/data/.babelrc
CREATE libs/account/data/src/index.ts
CREATE libs/account/data/src/lib/account-data.spec.ts
CREATE libs/account/data/src/lib/account-data.ts
CREATE libs/account/data/tsconfig.json
CREATE libs/account/data/tsconfig.lib.json
UPDATE tsconfig.base.json
UPDATE workspace.json
UPDATE nx.json
CREATE libs/account/data/.eslintrc.json
CREATE libs/account/data/jest.config.js
CREATE libs/account/data/tsconfig.spec.json
UPDATE jest.config.js
CREATE libs/account/data/src/lib/inmemory/user.inmemory.repository.spec.ts
CREATE libs/account/data/src/lib/inmemory/user.inmemory.repository.ts
CREATE libs/account/data/src/lib/inmemory/dto/user-mock.dto.ts
CREATE libs/account/data/src/lib/inmemory/mapper/user-mock.mapper.ts
CREATE libs/account/data/src/lib/localstorage/user.localstorage.repository.ts
```

#### Data - Folder structure

```sh
libs/account/data
├── README.md
├── jest.config.js
├── src
│   ├── index.ts
│   └── lib
│       ├── account-data.spec.ts
│       ├── account-data.ts
│       ├── inmemory
│       │   ├── dto
│       │   │   └── user-mock.dto.ts
│       │   ├── mapper
│       │   │   └── user-mock.mapper.ts
│       │   ├── user.inmemory.repository.spec.ts
│       │   └── user.inmemory.repository.ts
│       └── localstorage
│           └── user.localstorage.repository.ts
├── tsconfig.json
├── tsconfig.lib.json
└── tsconfig.spec.json
```

---

### Presentation - Generate

| Property  | Value                   | Description                    |
| --------- | ----------------------- | ------------------------------ |
| name      | presentation            | Name or last directory in tree |
| entity    | user                    | Entity of domain               |
| project   | core-common             | Common core library            |
| domain    | account-domain          | Domain library                 |
| data      | account-data            | Data library                   |
| directory | account                 | Where the project is placed    |
| tags      | type:data,scope:account | Tags (used for linting)        |

#### Presentation - Command

```sh
nx generate @nx-clean/plugin-core:presentation --name=presentation --domain=account-domain --entity=user --project=core-common --directory=account --data=account-data --tags=type:presentation,scope:account
```

#### Presentation - Result

```sh
CREATE libs/account/presentation/README.md
CREATE libs/account/presentation/.babelrc
CREATE libs/account/presentation/src/index.ts
CREATE libs/account/presentation/src/lib/account-presentation.spec.ts
CREATE libs/account/presentation/src/lib/account-presentation.ts
CREATE libs/account/presentation/tsconfig.json
CREATE libs/account/presentation/tsconfig.lib.json
UPDATE tsconfig.base.json
UPDATE workspace.json
UPDATE nx.json
CREATE libs/account/presentation/.eslintrc.json
CREATE libs/account/presentation/jest.config.js
CREATE libs/account/presentation/tsconfig.spec.json
UPDATE jest.config.js
CREATE libs/account/presentation/src/lib/mapper/user.mapper.ts
CREATE libs/account/presentation/src/lib/presenter/user-default.presenter.spec.ts
CREATE libs/account/presentation/src/lib/presenter/user-default.presenter.ts
CREATE libs/account/presentation/src/lib/presenter/user.presenter.ts
CREATE libs/account/presentation/src/lib/viewmodel/users.viewmodel.ts
```

#### Presentation - Folder structure

```sh
libs/account/presentation
├── README.md
├── jest.config.js
├── src
│   ├── index.ts
│   └── lib
│       ├── account-presentation.spec.ts
│       ├── account-presentation.ts
│       ├── mapper
│       │   └── user.mapper.ts
│       ├── presenter
│       │   ├── user-default.presenter.spec.ts
│       │   ├── user-default.presenter.ts
│       │   └── user.presenter.ts
│       └── viewmodel
│           └── users.viewmodel.ts
├── tsconfig.json
├── tsconfig.lib.json
└── tsconfig.spec.json
```

---

This project was generated using [Nx Clean](https://github.com/guiseek/nx-clean).
