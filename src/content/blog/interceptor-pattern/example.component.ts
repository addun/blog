import { Component } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";

@Component({
  standalone: true,
  template: `<h1>Test</h1>`,
})
export class ExampleComponent {
  static clientProviders = [];
  static renderProviders = [provideClientHydration()];
}
