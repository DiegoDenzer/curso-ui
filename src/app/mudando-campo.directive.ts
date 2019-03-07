import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMudandoCampo]',
  exportAs: 'campoFocado'
})
export class MudandoCampoDirective {

  @HostBinding('style.backgroundColor') corFundo: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    
  }

  @HostListener('focus') onFocus() {
    this.corFundo = '#B0C4DE';
  }

  @HostListener('focus') mudar() {
    this.corFundo = '#B0C4DE'; 
  }

  @HostListener('blur') onblur() {
    this.corFundo =  'transparent';  
  }

}
