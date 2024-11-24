import { Component } from "@angular/core";

@Component({
  selector: "app-example",
  standalone: true,
  template: `
    <div class="flex flex-col justify-center p-4 border items-center my-5">
      <p>Hi! I am Angular component!</p>

      @if (show) {
        <div>
          <p>Angular lets you start small on a well-lit path and supports you as your team and apps grow.</p>
        </div>
      }

      <button (click)="toggle()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {{ show ? "Hide" : "Read more" }}
      </button>
    </div>
  `,
})
export class ExampleComponent {
  show = false;

  toggle() {
    this.show = !this.show;
  }
}
