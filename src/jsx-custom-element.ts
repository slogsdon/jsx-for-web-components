import { createTemplate } from "./dom";
import { register } from "./register";

export class JSXCustomElement extends HTMLElement {
  public static elementName: string | undefined = undefined;

  public static register() {
    return register(this);
  }

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
