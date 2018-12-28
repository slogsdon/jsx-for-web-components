export function renderToStaticMarkup(root: Element) {
  if (!root) {
    return "";
  }

  const tagName = root.tagName.toLocaleLowerCase();
  let result = `<${tagName}`;

  if (root.hasAttributes()) {
    result += renderAttributes(root);
  }

  result += ">";

  if (root.shadowRoot && root.shadowRoot.hasChildNodes()) {
    result += renderChildren(root.shadowRoot.childNodes);
  }

  if (root.hasChildNodes()) {
    result += renderChildren(root.childNodes);
  }

  return `${result}</${tagName}>`;
}

function renderAttributes(element: Element) {
  const attributes = element.getAttributeNames();
  let result = "";

  for (const name of attributes) {
    const value = element.getAttribute(name);
    result += ` ${name}="${value}"`;
  }

  return result;
}

function renderChildren(children: NodeList) {
  const childCount = children.length - 1;
  let result = "";

  for (let i = childCount; i >= 0; i--) {
    const child = children[i];

    if (child.nodeType === Node.TEXT_NODE) {
      result += child.textContent;
    }

    if (child.nodeType === Node.ELEMENT_NODE) {
      result += renderToStaticMarkup(child as Element);
    }
  }

  return result;
}
