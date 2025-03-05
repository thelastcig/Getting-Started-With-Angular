import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AppComponent {
  userName: string = '';
  errorMessage: string = '';


  validateUserName(): void {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    if(!namePattern.test(this.userName)){
      this.errorMessage = 'Name must start with a capital letter and have at least 3 letters.';
    }else {
      this.errorMessage = '';
    }
  }
}
