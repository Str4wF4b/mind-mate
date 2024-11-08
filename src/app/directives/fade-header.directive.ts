import { Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appFadeHeader]',
  //standalone: true
})
export class FadeHeaderDirective implements OnInit {
  @Input('appFadeHeader') toolbar: any; // toolbar element to which the fade effect will be applied
  
  /**
   * Constructor for the FadeHeaderDirective.
   * Initializes the directive with the DomController to manipulate DOM elements.
   * 
   * @param domController The DomController used to update the DOM asynchronously.
   */
  constructor(private domController: DomController) { }

  /**
   * Lifecycle hook that is called after the directive's initialization.
   * Sets the toolbar to the element passed in the input, providing access to it for DOM manipulation.
   */
  ngOnInit() {
    this.toolbar = this.toolbar.el; // access toolbar element
  }

  /**
   * HostListener for the `ionScroll` event.
   * It listens to the scroll events on the content and modifies the background color of the toolbar
   * based on the scroll position. The background fades as the user scrolls down.
   * 
   * @param $event The scroll event containing the scrollTop value, indicating the vertical scroll position.
   */
  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    let scrollTop = $event.detail.scrollTop;
    if (scrollTop >= 240) { //cap scrollTop at 240 to avoid exceeding the maximum alpha value
      scrollTop = 240;
    }

    const alphaValue = Math.round((scrollTop / 240) * 255); // calculate the alpha value (transparency) based on scroll position
    const hexDist = alphaValue.toString(16).padStart(2, '0').toUpperCase();// parseInt(scrollTop,10).toString(16); // convert the alpha value to a hexadecimal string and ensure it is 2 characters long
    this.domController.write(() => {
      this.toolbar.style.setProperty('--background', `#CFEEF9${hexDist}`); // apply the background color change using the calculated alpha value
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
