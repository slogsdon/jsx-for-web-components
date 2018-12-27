/**
 * Library types
 *
 * @module jsx-for-web-components/types
 */

/**
 * Acceptable node types
 */
export type NodeLike = INode | string;

/**
 * Acceptable references to elements
 *
 * When a `string` is used, it refers to intrinsic elements
 * (DOM native).
 *
 * When a `function` is used, it refers to functional components.
 *
 * TODO: Support classes for components.
 */
export type NodeType = string | ((props: IProps) => NodeLike);

/**
 * Acceptable property value types
 */
export type PropValue = boolean | string | NodeLike[];

/**
 * Describe potential component properties
 *
 * TODO: explicitly set allowed property names?
 */
export interface IProps {
  [key: string]: PropValue;
}

/**
 * Describe the DOM tree node
 */
export interface INode {
  children: NodeLike[];
  props: IProps;
  type: NodeType;
}

/**
 * A stateless component
 */
export class StatelessComponent<P> {
  public props: P;

  public constructor(props: P) {
    this.props = props;
  }

  public render(): NodeLike {
    return "";
  }
}
