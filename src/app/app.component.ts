import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   tasks = ['task 1', 'task 2', 'task 3', 'task 4', 'task 5', 'task 6', 'task 7'];

   newTodo = '';

   addTodo() {
     this.tasks.push(this.newTodo);
     this.resetTodo();
   };

   resetTodo() {
    this.newTodo = '';
   }

}
