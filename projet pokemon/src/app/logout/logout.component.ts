import { Component } from "@angular/core";

@Component({
  selector: "app-logout",
  template: `
    <a
      class="btn-floating btn-large waves-effect waves-light red z-depth-3"
      style="position: fixed; top: 25px; right: 25px;"
    >
      ➕
    </a>
  `,
  styles: [],
})
export class LogoutComponent {}
