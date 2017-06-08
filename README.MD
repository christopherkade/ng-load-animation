# ng-load-animation

A simple animation in Angular 2

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

```
evenColor: Change the color of even numbered squares.

oddColor: Change the color of odd numbered squares.

    All color codes work, color names supported:
    red, blue, yellow, teal

width: Change the width of each square.

height: Change the hright of each square.
```

Example:

```html
<ng-load evenColor="#F44336" oddColor="#2196F3" width=50 height=50></ng-load>
```


## License

MIT © [Christopher Kadé](mailto:c.kade96@gmail.com)
