# ng-load-animation

A simple animation in Angular 2

## Installation

To install this library, run:

```bash
$ npm install ng-load-animation --save
```

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

    // and service
    LoadService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

and for your Angular `component`:

```typescript
export class AppComponent {

  // public service
  constructor(public loadService: LoadService) {}

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
<ng-load [animate]="loadService.animating"></ng-load>
...
```

## License

MIT © [Christopher Kadé](mailto:c.kade96@gmail.com)
