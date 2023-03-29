import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBloqueRedondeado]'
})
export class BloqueRedondeadoDirective {

  constructor( public elementRef: ElementRef, public renderer2: Renderer2) { 
    console.log(elementRef);
    const elementoHTML = elementRef.nativeElement;

    renderer2.setStyle(elementoHTML, 'border-radius','100px');
    renderer2.setStyle(elementoHTML, 'background-color','yellow');
  }

}
