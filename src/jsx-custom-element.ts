import { createTemplate } from "./dom";

export class JSXCustomElement extends HTMLElement {
  private template: HTMLTemplateElement;

  constructor() {
    super();

    this.template = createTemplate(this.render());
    this.attachShadow({ mode: "open" });
  }

  public connectedCallback() {
    if (!this.shadowRoot || !this.isConnected) {
      return;
    }

    this.shadowRoot.appendChild(
      this.template.content.cloneNode(true),
    );
  }

  public render() {
    return "";
  }
}
