import { Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appFadeHeader]',
  //standalone: true
})
export class FadeHeaderDirective implements OnInit {
  
  @Input('appFadeHeader') toolbar: any;
  

  constructor(private domController: DomController) { }

  ngOnInit() {
    this.toolbar = this.toolbar.el; // access toolbar element
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    let scrollTop = $event.detail.scrollTop;
    if (scrollTop >= 240) {
      scrollTop = 240;
    }

    const alphaValue = Math.round((scrollTop / 240) * 255);
    const hexDist = alphaValue.toString(16).padStart(2, '0').toUpperCase();// parseInt(scrollTop,10).toString(16); // hex string
    this.domController.write(() => {
      this.toolbar.style.setProperty('--background', `#CFEEF9${hexDist}`);
    })
  }

}


// Scroll-Out:
// import { Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
// import { DomController } from '@ionic/angular';

// @Directive({
//   selector: '[appFadeHeader]',
//   //standalone: true
// })
// export class FadeHeaderDirective implements OnInit {
  
//   @Input('appFadeHeader') toolbar: any;
//   private toolbarHeight = 56;

//   constructor(
//     private renderer: Renderer2,
//     private domController: DomController
//   ) { }

//   ngOnInit() {
//     this.toolbar = this.toolbar.el;
//     this.domController.read(() => {
//       this.toolbarHeight = this.toolbar.clientHeight;
//     })
//   }

//   @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
//     const scrollTop = $event.detail.scrollTop;
//     let newPosition = - (scrollTop / 5); // scroll speed
    
//     if (newPosition < -this.toolbarHeight) { // hide toolbar
//       newPosition = -this.toolbarHeight;
//     }

//     let newOpacity = 1 - (newPosition / -this.toolbarHeight); // change opacity when scrolling

//     this.domController.write(() => {
//         this.renderer.setStyle(this.toolbar, 'top', `${newPosition}px`);
//         this.renderer.setStyle(this.toolbar, 'opacity', newOpacity);
//     });
//   }

// }
