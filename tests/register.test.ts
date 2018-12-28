// tslint:disable:max-classes-per-file

import { JSXCustomElement } from "../src/jsx-custom-element";

it("should reject when not named", async () => {
  expect.assertions(2);

  try {
    await (class extends JSXCustomElement {}).register();
  } catch (e) {
    expect(e).toBeInstanceOf(Error);
    expect(e.message).toBe("No defined name");
  }
});

it.skip("should register JSXCustomElement classes", () => {
  class TestElement extends JSXCustomElement {
    public static elementName = "test-element";
  }
  TestElement.register();

  expect(window.customElements.get(TestElement.elementName)).not.toBeUndefined();
});
