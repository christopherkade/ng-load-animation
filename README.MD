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

// Import your library
import { SampleModule } from 'ng-load-animation';

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

```html
// Where evenColor changes the color of even numbered squares and oddColor the odd numbered squares.
// All color codes work, color names supported:
// red, blue, yellow, teal
<ng-load evenColor="#F44336" oddColor="#2196F3"></ng-load>
```


## License

MIT © [Christopher Kadé](mailto:c.kade96@gmail.com)
