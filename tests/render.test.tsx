import { createElement } from "../src/dom";
import { h } from "../src/helper";
import { renderToStaticMarkup } from "../src/render";

it("renders undefined as empty string", () => {
  const result = renderToStaticMarkup(undefined as unknown as Element);
  expect(result).toBe("");
});

it("renders", () => {
  const noAttributesNoChildren = createElement(<div></div>) as Element;
  const result = renderToStaticMarkup(noAttributesNoChildren);
  expect(result).toBe("<div></div>");
});

it("renders custom elements", () => {
  const noAttributesNoChildrenCustom = createElement(<x-div></x-div>) as Element;
  const result = renderToStaticMarkup(noAttributesNoChildrenCustom);
  expect(result).toBe("<x-div></x-div>");
});

it("renders text children", () => {
  const noAttributesTextChild = createElement(<div>test</div>) as Element;
  const result = renderToStaticMarkup(noAttributesTextChild);
  expect(result).toBe("<div>test</div>");
});

it("renders element children", () => {
  const noAttributesElementChild = createElement(<div><span></span></div>) as Element;
  const result = renderToStaticMarkup(noAttributesElementChild);
  expect(result).toBe("<div><span></span></div>");
});

it("renders custom element children", () => {
  const noAttributesCustomElementChild = createElement(<div><x-span></x-span></div>) as Element;
  const result = renderToStaticMarkup(noAttributesCustomElementChild);
  expect(result).toBe("<div><x-span></x-span></div>");
});

it("renders with attributes", () => {
  const attributesNoChildren = createElement(<div id="test" aria-enabled data-bool={true}></div>) as Element;
  const result = renderToStaticMarkup(attributesNoChildren);
  expect(result).toBe(`<div id="test" aria-enabled="aria-enabled" data-bool="data-bool"></div>`);
});

it("renders custom elements with attributes", () => {
  const attributesNoChildrenCustom = createElement(<x-div id="test" aria-enabled data-bool={true}></x-div>) as Element;
  const result = renderToStaticMarkup(attributesNoChildrenCustom);
  expect(result).toBe(`<x-div id="test" aria-enabled="aria-enabled" data-bool="data-bool"></x-div>`);
});

it("renders text children with attributes", () => {
  const attributesTextChild = createElement(<div id="wrapper">test</div>) as Element;
  const result = renderToStaticMarkup(attributesTextChild);
  expect(result).toBe(`<div id="wrapper">test</div>`);
});

it("renders element children with attributes", () => {
  const attributesElementChild = createElement(
    <div id="wrapper">
      <span id="test" aria-enabled data-bool={true}></span>
    </div>,
  ) as Element;
  const result = renderToStaticMarkup(attributesElementChild);
  expect(result).toBe(
    `<div id="wrapper"><span id="test" aria-enabled="aria-enabled" data-bool="data-bool"></span></div>`,
  );
});

it("renders custom element children with attributes", () => {
  const attributesCustomElementChild = createElement(
    <div id="wrapper">
      <x-span id="test" aria-enabled data-bool={true}></x-span>
    </div>,
  ) as Element;
  const result = renderToStaticMarkup(attributesCustomElementChild);
  expect(result).toBe(
    `<div id="wrapper"><x-span id="test" aria-enabled="aria-enabled" data-bool="data-bool"></x-span></div>`,
  );
});
