import {
  Directive,
  ElementRef,
  OnInit,
  HostBinding,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appDecorate]"
})
export class DecorateDirective implements OnInit {
  // constructor(public elementRef: ElementRef) {

  @HostBinding("style.backgroundColor") color;

  @HostListener("click") mouseClick() {
    console.log("mouseClicked");
  }

  @HostListener("mouseenter") mouseEnter() {
    this.color = "blue";
  }

  @HostListener("mouseleave") mouseLeave() {
    this.color = "yellow";
  }

  constructor() {
    //console.log("elementRef", elementRef);
  }

  ngOnInit() {
    this.color = "yellow";
    //this.elementRef.nativeElement.style.backgroundColor = "red";
  }
}
