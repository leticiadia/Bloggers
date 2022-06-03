import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ContentEditorComponent } from './components/content-editor/content-editor.component';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [
    ContentEditorComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    EditorModule
  ],
  exports: [
    ContentEditorComponent
  ],
})
export class DashboardModule { }
