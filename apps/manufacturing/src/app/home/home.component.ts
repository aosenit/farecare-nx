import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '@farecare-workspace/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AuthComponent],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
