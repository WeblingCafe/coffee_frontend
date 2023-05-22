export interface ITabList {
  label: string;
  iconPath: string;
  path: Path;
}

export type Path = '' | '/menu' | '/settlement' | '/orders' | '/announcement';
