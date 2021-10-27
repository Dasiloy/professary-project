import { extendTheme } from '@chakra-ui/react';
import styles from './styles';
import colors from './foundation/colors';
import fonts from './foundation/fonts';
import fontSizes from './foundation/fontSizes';
import fontWeights from './foundation/fontWeights';
import lineHeights from './foundation/lineHeights';
import letterSpacings from './foundation/letterSpacings';
import space from './foundation/spaces';
import sizes from './foundation/sizes';
import zIndices from './foundation/zIndices';
import radii from './foundation/radii';
import { ButtonStyles as Button } from './components/ButtonStyles';
import { HeadingStyles as Heading } from './components/HeadingStyles';
import { TextStyles as Text } from './components/TextStyles';

const theme = extendTheme({
  styles,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  space,
  sizes,
  zIndices,
  radii,
  components: {
    Button,
    Heading,
    Text,
  },
});

export default theme;
