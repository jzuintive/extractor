import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appExtractor]'
})
export class ExtractorDirective implements AfterViewInit{

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) { }

  public ngAfterViewInit() {
    this.removeHostElement();
  }
  private removeHostElement() {
    const htmlElement = (this.elementRef.nativeElement as HTMLElement);
    const htmlParentElement = this.elementRef.nativeElement.parentElement as HTMLElement;

    const nodes = this.findChildrenNodes(htmlElement);
    this.insertNodesToHigherElement(nodes, htmlParentElement, htmlElement);
    this.removeElementFromParent(htmlParentElement, htmlElement);
  }

  private removeElementFromParent(htmlParentElement: HTMLElement, component: HTMLElement) {
    this.renderer.removeChild(htmlParentElement, component);
  }

  private insertNodesToHigherElement(nodes: ChildNode[], parent: HTMLElement, component: HTMLElement){
    const insertToParent = (node: ChildNode) => parent.insertBefore(node, component);

    nodes.forEach(insertToParent);
  }
  private findChildrenNodes(element: HTMLElement): ChildNode[]{
    const nodes = this.toNodes(element.childNodes);
    return  nodes;
  }

  private toNodes(nodes: NodeListOf<ChildNode>): ChildNode[]{
    const items = [];
    nodes.forEach(_ => {
      items.push(_);
    });

    return items;
  }
}
