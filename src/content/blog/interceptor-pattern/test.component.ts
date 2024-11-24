import { NgIf } from "@angular/common";
import { Component, Input, signal } from "@angular/core";

@Component({
  selector: "app-hello",
  standalone: true,
  template: `
    <p>Hello from Angular!!</p>

    @if (show()) {
      <p>{{ helpText }}</p>
    }

    <button (click)="toggle()">Toggle</button>
  `,
})
export class HelloComponent {
  @Input() helpText = "help";

  show = signal(false);

  toggle() {
    console.log("toggle");
    this.show.update((v) => !v);
  }
}
