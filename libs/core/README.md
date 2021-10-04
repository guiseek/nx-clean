# core

Podemos começar falando das abstrações fornecidas no pacote `@nx-clean/core`, que são usadas como base nas camadas geradas a partir do plugin `@nx-clean/plugin-core`. Recentamente também foi adicionado um recurso para injeção de dependência, chamado `Injector`, você pode ver o [código fonte dele aqui](src/lib/di/injector.ts). Falaremos mais sobre ele a seguir.


## Injector

Na engenharia de software, injeção de dependência é uma técnica na qual um objeto recebe outros objetos dos quais depende, chamados de dependências. Normalmente, o objeto receptor é chamado de cliente e o objeto passado ou _injetado_ é chamado de serviço. O código que passa o serviço ao cliente é denominado _injetor_. Em vez de o cliente especificar qual serviço usará, o injetor informa ao cliente qual serviço usar. A 'injeção' refere-se à passagem de uma dependência (um serviço) para o cliente (serviço ou componente) que o usa.

O serviço faz parte do estado do cliente. Passar o serviço para o cliente (serviço ou componente), em vez de permitir que um cliente construa ou encontre o serviço, é o requisito fundamental do padrão.

### Como usa-lo com React


`app.provider.ts`
```ts
import { TodoInMemoryRepository } from '@nx-clean/todo-data-access';
import { TodoRepository } from '@nx-clean/todo-domain';
import { Injector } from '@nx-clean/core';
import {
  TodoPresenter,
  TodoDefaultPresenter,
} from '@nx-clean/todo-presentation';

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
```

`app.tsx`
```ts
import { TodoVM, TodoPresenter } from '@nx-clean/todo-presentation';
import { injector } from './app.provider';
import React, { useEffect } from 'react';
import styles from './app.module.scss';

const presenter = injector.get<TodoPresenter>(TodoPresenter);

export function App() {
  const [value, setValue] = React.useState('');
  const [state, setState] = React.useState<TodoVM[]>([]);

  useEffect(() => {
    presenter.getAllTodos().subscribe(setState).unsubscribe();

    const subscription = presenter.todos$.subscribe(setState);

    return () => subscription.unsubscribe();
  }, []);
  
  // ...
}

export default App;
```

---

### Como usa-lo com Angular

`app.module.ts`
```ts
import { TodoInMemoryRepository } from '@nx-clean/todo-data-access';
import { TodosComponent } from './todos/todos.component';
import { TodoRepository } from '@nx-clean/todo-domain';
import { NgModule } from '@angular/core';
import {
  TodoDefaultPresenter,
  TodoPresenter,
} from '@nx-clean/todo-presentation';

@NgModule({
  // ...
  providers: [
    {
      provide: TodoRepository,
      useFactory: () => {
        return new TodoInMemoryRepository([
          { id: '1', title: 'Opa', completed: false },
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
  ],
})
export class AppModule {}
```

`app.component.ts.`

```ts
import { ActivatedRoute } from '@angular/router';
import { TodoPresenter, TodoVM } from '@nx-clean/todo-presentation';
import { Component } from '@angular/core';

@Component({
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  todos$ = this.presenter.todos$;
  filter$ = this.presenter.filter$;

  constructor(private presenter: TodoPresenter) { }

  // ...
}
```

### Demos

Você pode ver funcionando no endereço [clean-architecture.design](https://clean-architecture.design)

