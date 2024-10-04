import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarMenuComponent } from './components/toolbar-menu/toolbar-menu.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [
    MatToolbarModule,
    ToolbarMenuComponent,
  ],
})
export class ToolbarComponent {

}
