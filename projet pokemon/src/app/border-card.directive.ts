import { Directive, ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

  constructor(private el:ElementRef) {
    this.setHeight(220);
    this.setBorder('#f5f5f5');
  }

    @HostListener('mouseenter') onMouseEnter(){
      this.setBorder('#009688');
    }
    @HostListener('mouseleave') onMouseLeave(){
      this.setBorder('#f5f5f5');
    }

    private setHeight(height : number){
      this.el.nativeElement.style.height = `${height}px`;
    }
   
    private setBorder(color: string){
      let border = 'solide 4 px' +color;
      this.el.nativeElement.style.border = border;
    }
}
