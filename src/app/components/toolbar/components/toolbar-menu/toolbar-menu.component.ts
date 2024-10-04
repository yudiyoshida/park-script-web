import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-toolbar-menu',
  standalone: true,
  templateUrl: './toolbar-menu.component.html',
  imports: [
    MatButtonModule,
    MatMenuModule,
  ],
})
export class ToolbarMenuComponent {

}
