import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadComponent } from './load.component';
import { LoadService } from './load.service';

export * from './load.component';
export * from './load.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadComponent,
  ],
  exports: [
    LoadComponent,
  ]
})
export class LoadModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoadModule,
      providers: [LoadService]
    };
  }
}
