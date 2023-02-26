import { Directive, Input, TemplateRef, ViewContainerRef, } from '@angular/core';

@Directive({
  selector: '[appStructure]'
})
export class StructureDirective {
  @Input() set appStructure(condition:boolean){
   if(!condition){ 
     this.view.createEmbeddedView(this.template)
   }
   else{
     this.view.clear()
   }
  }
  constructor(private template:TemplateRef<any>,private view:ViewContainerRef) { }

}
