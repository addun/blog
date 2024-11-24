import { Component, signal } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { defer, delay, EMPTY, map, pipe, tap, timer } from "rxjs";
import { AsyncActionDirective } from "./async-action.directive";

@Component({
  selector: "app-to-do-list",
  imports: [AsyncActionDirective, ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <div class="relative">
        <input
          #input
          formControlName="todo"
          type="text"
          class="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add new todo"
        />
        <button
          [appAsyncAction]="addToDo$"
          (start)="input.readOnly = true"
          (complete)="input.readOnly = false"
          (error)="input.readOnly = false"
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add
        </button>
      </div>
    </form>

    <ul class="ps-0">
      @for (todo of todos(); track $index) {
        <li class="flex justify-between">
          <span>{{ todo }}</span>

          <button
            [appAsyncAction]="remove$"
            [appAsyncActionData]="$index"
            type="button"
            class="ml-10 text-blue-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <!-- prettier-ignore -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
          </button>
        </li>
      }
    </ul>
  `,
})
export default class ToDoListComponent {
  todos = signal(["Buy milk", "Buy eggs", "Buy bread"]);
  form = new FormGroup({
    todo: new FormControl("Buy butter", { validators: [Validators.required], nonNullable: true }),
  });

  remove$ = pipe(
    delay(2500),
    tap((index) => this.todos.update((v) => v.filter((_, i) => i !== index))),
    map(() => void 0),
  );

  addToDo$ = defer(() => {
    if (this.form.invalid) {
      return EMPTY;
    }

    return timer(2500);
  }).pipe(
    tap(() => {
      this.todos.update((v) => [...v, this.form.controls.todo.value]);
      this.form.controls.todo.reset();
    }),
  );
}
