/**
 * Handle component properties
 *
 * @module jsx-for-web-components/properties
 */

/**
 * Define module imports/exports
 */
import { IProps, PropValue } from "./types";

/**
 * Tests if a property name matches to that of a custom property
 *
 * @param name The property name to test.
 */
export function isCustomProp(name: string) {
  return false;
}

/**
 * Sets a boolean property
 *
 * Boolean properties are special. Their attribute is set with their
 * name, while their property value is a true boolean.
 *
 * @param el The current DOM node set.
 * @param name The boolean property.
 * @param value The property's value.
 */
export function setBooleanProp(el: Element, name: string, value: boolean) {
  if (value) {
    el.setAttribute(name, name);
    (el as any)[name] = true;
  } else {
    (el as any)[name] = false;
  }
}

/**
 * Sets a single property
 *
 * @param el The target DOM node.
 * @param name The property name.
 * @param value The property value.
 */
export function setProp(el: Element, name: string, value: PropValue) {
  if (isCustomProp(name)) {
    return;
  }

  if (typeof value === "boolean") {
    return setBooleanProp(el, name, value);
  }

  if (typeof value === "string") {
    return el.setAttribute(name === "className" ? "class" : name, value);
  }
}

/**
 * Sets all property values
 *
 * @param el The target DOM node.
 * @param props The property set.
 */
export function setProps(el: Element, props: IProps) {
  if (!props) {
    return [];
  }

  return Object.keys(props).map((name) => setProp(el, name, props[name]));
}
