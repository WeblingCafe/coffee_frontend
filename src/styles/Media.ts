import { css, CSSObject, CSSProp, SimpleInterpolation } from 'styled-components';

type DeviceType = 'large' | 'medium' | 'small' | 'xSmall';

const sizes: Record<DeviceType, number> = {
  large: 1632,
  medium: 1280,
  small: 1024,
  xSmall: 768,
};

const Media = Object.entries(sizes).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: (first: CSSObject | TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  }),
  {}
) as Record<DeviceType, (l: TemplateStringsArray, ...p: []) => CSSProp>;

export { Media };
