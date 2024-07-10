import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '@farecare-workspace/auth';

@Component({
  standalone: true,
  imports: [RouterModule, AuthComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
