import { input, signal, inject, DestroyRef, Directive, output } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { finalize, isObservable, of, tap, type Observable, type OperatorFunction } from "rxjs";

type AsyncAction = Observable<unknown> | OperatorFunction<unknown, unknown>;

@Directive({
  selector: "[appAsyncAction]",
  host: {
    "(click)": "handleClick()",
    "[disabled]": "inProgress()",
  },
})
export class AsyncActionDirective {
  action = input.required<AsyncAction>({ alias: "appAsyncAction" });
  data = input<unknown>(undefined, { alias: "appAsyncActionData" });

  start = output<void>();
  next = output<unknown>();
  error = output<unknown>();
  complete = output<void>();

  private readonly inProgress = signal(false);
  private readonly destroyRef = inject(DestroyRef);

  handleClick() {
    if (this.inProgress()) {
      return;
    }

    this.start.emit();
    this.inProgress.set(true);

    const action$ = this.prepareAction();
    action$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.inProgress.set(false);
        }),
        tap({
          error: () => alert("Action failed"),
        }),
      )
      .subscribe({
        next: (value) => this.next.emit(value),
        error: (error) => this.error.emit(error),
        complete: () => this.complete.emit(),
      });
  }

  private prepareAction() {
    const action = this.action();

    if (isObservable(action)) {
      return action;
    }

    const context = this.data();

    if (context === undefined) {
      throw new Error("You have provided a operator function but not provided a context");
    }

    return of(context).pipe(action);
  }
}
