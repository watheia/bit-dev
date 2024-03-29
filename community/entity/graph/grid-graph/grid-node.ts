import { ComponentID } from '@teambit/component-id';
import { getAttrValidId } from './attr-id';
import { DependencyEdge, Dependency } from './dependency-edge';

export type NodePosition = 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left';

export type GridNodeType<T = {}> = {
  id: string,
  dependencies?: Dependency[],
  row?: number,
  col?: number,
  position?: NodePosition,
  payload?: T
};

export class GridNode<T> {
  constructor(
    readonly id: ComponentID,
    readonly dependencies: DependencyEdge[] = [],
    readonly row?: number,
    readonly col?: number,
    readonly position?: NodePosition,
    readonly payload?: T
  ) {}

  get attrId() {
    return getAttrValidId(this.id.toStringWithoutVersion());
  }

  static fromPlain<T>({ id, dependencies = [], ...rest }: GridNodeType<T>): GridNode<T> {
    return new GridNode(
      ComponentID.fromString(id),
      dependencies.map((dep => DependencyEdge.fromPlain(dep))),
      rest.row,
      rest.col,
      rest.position,
      rest.payload
    );
  }
}
