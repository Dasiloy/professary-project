import { mode } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: props => ({
      borderRadius: 'lg',
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
      borderRadius: 'lg',
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
    pagination: props => ({
      bg: mode('primary', 'secondary')(props),
      color: mode('lightLink', 'darkLink')(props),
      borderRadius: 'lg',
      transition: 'all 200ms ease',
      _hover: {
        // bg: mode('secondary', 'primary')(props),
        // color: mode('darkLink', 'lightLink')(props),
        transform: 'scale(1.02)',
      },
    }),
    numberPagination: props => ({
      bg: mode('lightBodyGray', 'darkBodyGray')(props),
      color: mode('primary', 'secondary')(props),
      borderRadius: 'lg',
      transition: 'all 200ms ease',
      _hover: {
        // bg: mode('secondary', 'primary')(props),
        // color: mode('darkLink', 'lightLink')(props),
        transform: 'scale(1.02)',
      },
    }),
    filtered: props => ({
      border: 'none',
      borderRadius:'none',
      bg: mode('transparent', 'transparent')(props),
      color: mode('#6E7191', '#6E7191')(props),
      transition: 'all 200ms ease',
      _hover: {
        color: mode('primary', 'secondary')(props),
      },
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {},
};


