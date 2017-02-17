# Adding some action


## 1. Add place to store new data

In our `AppComponent` let's add new *string* variable for user input.

```js
export class AppComponent {
   tasks = ['task 1', 'task 2', 'task 3', 'task 4', 'task 5', 'task 6', 'task 7'];

   newTodo = '';

}
```

## 2. Modify html to reflect new binding

In our html `app.component.html`, let's connect variable with `<input>` 
via special type of binding -  `[(ngModel)]`

```html
<h1>My todo app</h1>
<div>
  <div>
    <h2>Add new</h2>
    <div>
      <input type="text" name="todo" [(ngModel)]="newTodo" placeholder="Add your task here">
      <input type="button" value="Add">
    </div>
  </div>
  <div>
    <h2>List</h2>
    <ul>
      <li *ngFor="let task of tasks; let i = index">{{task}}</li>
    </ul>
  </div>
</div>
```

## 3. Add some action - functions

Now connect button `Add` action `click` with `AppComponent`.

In html we need to add new special binding for functions - `(click)`

```html
<h1>My todo app</h1>
<div>
  <div>
    <h2>Add new</h2>
    <div>
      <input type="text" name="todo" [(ngModel)]="newTodo" placeholder="Add your task here">
      <input type="button" value="Add" (click)="addTodo()">
    </div>
  </div>
  <div>
    <h2>List</h2>
    <ul>
      <li *ngFor="let task of tasks; let i = index">{{task}}</li>
    </ul>
  </div>
</div>
```

## 4. Heavy lifting part

In `AppComponent` add function `addTodo` that will be run after `click` action.

This function should add state of `newTodo` - user input - to existing *Array* `tasks`
using standard `Array` function called `push`.

Please remember to use `this.` prefix in `AppComponent`.

```js
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
   };

}
```

## 5. Cleaning things up

Last but not the least to create function in `AppComponent` for cleaning input after
adding content to `Array`.

First step is to create function called `resetTodo` inside it set `this.newTodo` to
empty `string`.

```js
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
   };

   resetTodo() {
    this.newTodo = '';
   }

}
```

Second step is to call this `resetTodo()` function inside of out existing `addTodo()`.

```js
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
```

Now you can test the code. :)

Ps. Please be aware that, if you do refresh manually browser - via F5 - all added data will
go back to old state. This is because, we store data only in memory. 

To store them with persistence - for longer time -  we need other tools like databases.




