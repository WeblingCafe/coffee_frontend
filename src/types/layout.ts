export interface ITabList {
  label: string;
  iconPath: string;
  path: Path;
  subMenu?: {
    index: number;
    path: string;
    name: string;
  }[];
}

export type Path = '' | '/menu' | '/settlement' | '/orders' | '/announcement';
