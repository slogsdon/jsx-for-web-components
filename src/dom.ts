/**
 * DOM manipulation functions
 *
 * @module jsx-for-web-components/dom
 */

/**
 * Define module imports/exports
 */
import { setProps } from "./properties";
import { NodeLike, StatelessComponent } from "./types";

/**
 * Creates a `template` element with the given `node`
 * attached as the document fragment.
 *
 * @param node The current `NodeLike` from which to create the raw DOM node.
 */
export function createTemplate(node: NodeLike) {
  const template = document.createElement("template");
  const element = createElement(node);

  if (!element) {
    throw new Error("No node was created");
  }

  template.content.appendChild(element);
  return template;
}

/**
 * Creates a raw DOM node from a `node`.
 *
 * @param node The current `NodeLike` from which to create the raw DOM node.
 */
export function createElement(node?: NodeLike): undefined | Text | Element {
  if (typeof node === "undefined") {
    return;
  }

  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  if (isArray(node)) {
    return (node as any).map(createElement);
  }

  // allow functions as elements
  if (typeof node.type === "function") {
    node.props.children = node.children;

    let component: NodeLike;
    const result = Reflect.construct(node.type, [node.props]);

    if (result instanceof StatelessComponent) {
      component = result.render();
    } else {
      component = result;
    }

    return createElement(component);
  }

  if (!node.type) {
    return;
  }

  // create DOM element
  const el = document.createElement(node.type);

  // set props as DOM element attributes
  setProps(el, node.props);

  // create children
  if (node.children) {
    node.children.map(createElement).forEach(appendTo(el));
  }

  return el;
}

/**
 * Test if a value is an array
 *
 * @param obj Value to test
 */
function isArray(obj: any) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

/**
 * Wraps `Element.appendChild` to handle array-like children.
 *
 * @param el Parent element
 */
function appendTo(el: Element) {
  return (child: undefined | Text | Element) => {
    if (!child) {
      return;
    }

    if (isArray(child)) {
      (child as any).map(appendTo(el));
      return;
    }

    el.appendChild(child);
  };
}
