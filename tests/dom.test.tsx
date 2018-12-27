import { createElement, createTemplate } from "../src/dom";
import { h } from "../src/helper";
import { IProps, StatelessComponent } from "../src/types";

describe("strings", () => {
  it("should return Text", () => {
    expect(createElement("hello")).toBeInstanceOf(Text);
  });

  it("should create templates", () => {
    expect(createTemplate("hello")).toBeInstanceOf(HTMLTemplateElement);
  });
});

describe("functions", () => {
  it("should return undefined when empty", () => {
    const Fn: any = jest.fn(() => undefined);
    const result = createElement(<Fn />);

    expect(Fn).toHaveBeenCalled();
    expect(result).toBe(undefined);
  });

  it("should not create templates when empty", () => {
    const Fn: any = jest.fn(() => undefined);

    expect(() => createTemplate(<Fn />)).toThrow(Error);
    expect(Fn).toHaveBeenCalled();
  });

  it("should return Element", () => {
    const Fn: any = jest.fn(({ children }) => <div>{children}</div>);
    const result = createElement(<Fn>hello</Fn>);

    expect(Fn).toHaveBeenCalled();
    expect(result).toBeInstanceOf(Element);

    if (result) {
      expect(result.childNodes).toHaveLength(1);
      expect(result.firstChild).toBeInstanceOf(Text);
    }
  });

  it("should create templates when not empty", () => {
    const Fn: any = jest.fn(({ children }) => <div>{children}</div>);
    const result = createTemplate(<Fn>hello</Fn>);

    expect(Fn).toHaveBeenCalled();
    expect(result).toBeInstanceOf(HTMLTemplateElement);

    if (result && result.firstChild) {
      expect(result.firstChild.childNodes).toHaveLength(1);
      expect(result.firstChild.firstChild).toBeInstanceOf(Text);
    }
  });
});

describe("classes", () => {
  class Component extends StatelessComponent<IProps> {
    public render() {
      return <div>{this.props.children}</div>;
    }
  }

  it("should return Element", () => {
    const result = createElement(<Component>hello</Component>);

    expect(result).toBeInstanceOf(Element);

    if (result) {
      expect(result.childNodes).toHaveLength(1);
      expect(result.firstChild).toBeInstanceOf(Text);
    }
  });

  it("should create templates", () => {
    const result = createTemplate(<Component>hello</Component>);

    expect(result).toBeInstanceOf(HTMLTemplateElement);

    if (result && result.firstChild) {
      expect(result.firstChild.childNodes).toHaveLength(1);
      expect(result.firstChild.firstChild).toBeInstanceOf(Text);
    }
  });
});
