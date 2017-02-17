# JavaScript strikes back

This time we will use JS to model our application data.

## 1. Data store

Let's add `Array` of `string` called `task` into our `AppComponent` class.

```js
export class AppComponent {
   tasks = ['task 1', 'task 2', 'task 3', 'task 4', 'task 5'];
}
```

This will be data store for our tasks.

## 2. HTML binding

Not we need to change html to read data from `AppComponent`.

```html
<h1>My todo app</h1>
<div>
  <div>
    <h2>Add new</h2>
    <div>
      <input type="text" name="todo" placeholder="Add your task here">
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

We need to clean up some of our code from last time. Then on single `<li>` tag we
add *Angular* `*ngFor` *directive*. This is responsible for create elements based 
on our code.

In this case it creates `<li>` elements, that are based on our `Array`.

## 3. Let's play

We can change `tasks` *Array* by adding new task.

```js
tasks = ['task 1', 'task 2', 'task 3', 'task 4', 'task 5', 'task 6', 'task 7'];
```
