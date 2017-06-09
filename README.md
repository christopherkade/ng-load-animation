# ng-load-animation

A simple animation component in Angular 2

![](https://user-images.githubusercontent.com/15229355/26939918-24364778-4c79-11e7-8dab-447cab3fe500.gif)

## Using ng-load-animation

Start by installing it to your Angular2+ project:

```bash
$ npm install ng-load-animation
```

and then add the following to your `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { LoadComponent, LoadService } from 'ng-load-animation';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // module
    LoadModule
  ],
  providers: [

    // service
    LoadService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

and for your Angular `component`:

```typescript
export class AppComponent {

  constructor(private loadService: LoadService) {}

  // use the method 'animate' to display or hide the animation
  start() {
        this.loadService.animate(true);
  }

  stop() {
       this.loadService.animate(false);
  }
}
```

Finally, you can use its components, in your Angular application:

```html
...
<ng-load></ng-load>
...
```

You can modify the animation with the following:

```
evenColor: Change the color of even numbered squares.

oddColor: Change the color of odd numbered squares.

width: Change the width of each square.

height: Change the hright of each square.

shape: Change the shape of the elements in the animation (default: square)
       Available shapes: "circle", "square"
```

Example:

```html
<ng-load evenColor="red" oddColor="teal" width=50 height=50 shape="circle"></ng-load>
```

## License

MIT © [Christopher Kadé](mailto:c.kade96@gmail.com)
