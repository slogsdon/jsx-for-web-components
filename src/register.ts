import { JSXCustomElement } from "./jsx-custom-element";

export function register(constructor: typeof JSXCustomElement, options?: ElementDefinitionOptions) {
  if (constructor.elementName === undefined) {
    return Promise.reject(new Error("No defined name"));
  }

  if (!window.customElements) {
    return Promise.reject(new Error("window.customElements not available"));
  }

  const elementName = (constructor as any).elementName;
  const promise = window.customElements.whenDefined(elementName);
  const isDefined = window.customElements.get(elementName) !== undefined;

  if (!isDefined) {
    window.customElements.define(elementName, constructor, options);
  }

  return promise;
}
