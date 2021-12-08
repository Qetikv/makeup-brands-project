import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MustMatchDirective } from './directives/must-match.directive';

@NgModule({
  declarations: [MustMatchDirective],
  exports: [TranslateModule, MustMatchDirective],
  imports: [CommonModule],
})
export class SharedModule {}
