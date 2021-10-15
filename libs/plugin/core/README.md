# Clean Architecture with Nx workspaces

## Install

```sh
npm i -D @nx-clean/plugin-core
```

## Generators


### Domain - Generate

| Property   | Value                      | Description                     |
| ---------- | -------------------------- | ------------------------------- |
| name       | domain                     | Name or last directory in tree  |
| entity     | user                       | Entity of domain                |
| repository | true                       | To add a repository             |
| usecases   | true                       | To add a usecases               |
| directory  | account                    | Where the project is placed     |
| tags       | type:domain,scope:account  | Tags (used for linting)         |

#### Domain - Command

```sh
nx generate @nx-clean/plugin-core:domain --name=domain --entity=user --directory=account  --repository --usecases --tags=type:domain,scope:account
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

| Property   | Value                      | Description                     |
| ---------- | -------------------------- | ------------------------------- |
| name       | data-access                | Name or last directory in tree  |
| entity     | user                       | Entity of domain                |
| domain     | account-domain             | Domain library                  |
| inmemory   | true                       | To add a in memory data access  |
| directory  | account                    | Where the project is placed     |
| tags       | type:data,scope:account    | Tags (used for linting)         |

#### Data - Command

```sh
nx generate @nx-clean/plugin-core:data --name=data-access --domain=account-domain --entity=user --directory=account --inmemory --tags=type:data,scope:account
```

#### Data - Result

```sh
CREATE libs/account/data-access/README.md
CREATE libs/account/data-access/.babelrc
CREATE libs/account/data-access/src/index.ts
CREATE libs/account/data-access/src/lib/account-data.spec.ts
CREATE libs/account/data-access/src/lib/account-data.ts
CREATE libs/account/data-access/tsconfig.json
CREATE libs/account/data-access/tsconfig.lib.json
UPDATE tsconfig.base.json
UPDATE workspace.json
UPDATE nx.json
CREATE libs/account/data-access/.eslintrc.json
CREATE libs/account/data-access/jest.config.js
CREATE libs/account/data-access/tsconfig.spec.json
UPDATE jest.config.js
CREATE libs/account/data-access/src/lib/inmemory/user.inmemory.repository.spec.ts
CREATE libs/account/data-access/src/lib/inmemory/user.inmemory.repository.ts
CREATE libs/account/data-access/src/lib/inmemory/dto/user-mock.dto.ts
CREATE libs/account/data-access/src/lib/inmemory/mapper/user-mock.mapper.ts
CREATE libs/account/data-access/src/lib/localstorage/user.localstorage.repository.ts
```

#### Data - Folder structure

```sh
libs/account/data-access
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

| Property   | Value                              | Description                     |
| ---------- | ---------------------------------- | ------------------------------- |
| name       | presentation                       | Name or last directory in tree  |
| entity     | user                               | Entity of domain                |
| domain     | account-domain                     | Domain library                  |
| data       | account-data-access                | Data library                    |
| directory  | account                            | Where the project is placed     |
| tags       | type:presentation,scope:account    | Tags (used for linting)         |

#### Presentation - Command

```sh
nx generate @nx-clean/plugin-core:presentation --name=presentation --domain=account-domain --entity=user --directory=account --data=account-data-access --tags=type:presentation,scope:account
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
