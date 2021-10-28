import { mode } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: props => ({
      bg: mode('primary', 'secondary')(props),
      color: mode('lightLink', 'darkLink')(props),
      transition: 'all 200ms ease',
      _hover: {
        boxShadow: 'md',
        bg: mode('secondary', 'primary')(props),
        color: mode('darkLink', 'lightLink')(props),
        transform: 'scale(1.02)',
      },
    }),
    primaryOutline: props => ({
      bg: 'transparent',
      border: '1px solid',
      borderColor: mode('primary', 'secondary')(props),
      color: mode('primary', 'secondary')(props),
      transition: 'all 200ms ease',
      _hover: {
        borderColor: mode('secondary', 'primary')(props),
        color: mode('secondary', 'primary')(props),
        boxShadow: 'md',
        transform: 'scale(1.02)',
      },
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {},
};
