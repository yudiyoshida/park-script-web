import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, NgxSpinnerModule],
  template: `
    <app-toolbar />
    <router-outlet />
    <ngx-spinner />
  `,
})
export class AppComponent { }
