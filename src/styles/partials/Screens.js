import { css } from 'styled-components';

const sizes = {
  // design for xs screens, then change for different sizes
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {});