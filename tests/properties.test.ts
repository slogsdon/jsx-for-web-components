import {
  isCustomProp,
  setProp,
  setProps,
} from "../src/properties";
import { IProps } from "../src/types";

describe("isCustomProp", () => {
  it("should return false", () => {
    expect(isCustomProp("a")).toBe(false);
  });
});

describe("setProp", () => {
  let el: Element | undefined;

  beforeEach(() => {
    el = document.createElement("div");
  });

  afterEach(() => {
    if (el) {
      el.innerHTML = "";
    }

    el = undefined;
  });

  it("should set className prop", () => {
    if (el === undefined) {
      return;
    }

    setProp(el, "className", "class list");

    expect(el.hasAttribute("class")).toBe(true);
    expect(el.getAttribute("class")).toBe("class list");
  });

  it("should set data prop", () => {
    if (el === undefined) {
      return;
    }

    setProp(el, "data-property", "value");

    expect(el.hasAttribute("data-property")).toBe(true);
    expect(el.getAttribute("data-property")).toBe("value");
  });

  it("should set boolean prop", () => {
    if (el === undefined) {
      return;
    }

    setProp(el, "property", false);

    expect(el.hasAttribute("property")).toBe(false);
    expect((el as any).property).toBe(false);

    setProp(el, "property", true);

    expect(el.hasAttribute("property")).toBe(true);
    expect((el as any).property).toBe(true);

    setProp(el, "property", false);

    expect(el.hasAttribute("property")).toBe(true);
    expect((el as any).property).toBe(false);
  });
});

describe("setProps", () => {
  let el: Element | undefined;

  beforeEach(() => {
    el = document.createElement("div");
  });

  afterEach(() => {
    if (el) {
      el.innerHTML = "";
    }

    el = undefined;
  });

  it("should set list of props", () => {
    if (el === undefined) {
      return;
    }

    // tslint:disable:object-literal-key-quotes
    const newProps = {
      className: "class list",
      "data-property": "value",
      property: true,
    };
    // tslint:enable:object-literal-key-quotes

    setProps(el, newProps);

    expect(el.hasAttribute("class")).toBe(true);
    expect(el.getAttribute("class")).toBe("class list");
    expect(el.hasAttribute("data-property")).toBe(true);
    expect(el.getAttribute("data-property")).toBe("value");
    expect(el.hasAttribute("property")).toBe(true);
    expect((el as any).property).toBe(true);
  });

  it("should return empty list for no props", () => {
    if (el === undefined) {
      return;
    }

    expect(setProps(el, (undefined as unknown as IProps))).toHaveLength(0);
  });
});
