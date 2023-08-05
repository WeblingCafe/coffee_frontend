import 'styled-components';
import { ColorsTypes, FontTypes, BoxTypes, PaddingTypes, LayoutTypes } from './Theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorsTypes;
    font: FontTypes;
    box: BoxTypes;
    padding: PaddingTypes;
    layout: LayoutTypes;
  }
}
