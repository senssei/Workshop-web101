# Add some JavaScript magic

This part is tricky. Don't panic.

There is a loot to learn. Be persistent and open-minded.

## 1. Use Angular binding to evaluate sum of 2+2

In file `src\app\app.component.html` at the end just add `{{2+2}}` at the end.

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
      <li>task 1</li>
      <li>task 2</li>
      <li>task 3</li>
      <li>task 4</li>
    </ul>
  </div>
</div>
{{ 2+2 }}
```


## 2. Open TypeScript file

Open file `src\app\app.component.ts` and add new variable to `class` AppComponent

```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  sample = 'hello world!';
}
```

## 3. Use Angular binding to use this in html

In file `src\app\app.component.html` at the end just add 

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
      <li>task 1</li>
      <li>task 2</li>
      <li>task 3</li>
      <li>task 4</li>
    </ul>
  </div>
</div>
{{ 2+2 }}
{{sample}}
```

## 4. Let's play with that

Clean up both bindings from html.

```html
{{ 2+2 }}
{{sample}}
```

And in TypeScript add `2+2` instead `'hello world!'` in sample variable.

```js
sample = 2+2;
```

