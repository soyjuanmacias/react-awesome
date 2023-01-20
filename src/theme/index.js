import { extendTheme } from '@chakra-ui/react';
import { foundations } from './foundations';
import global from './global';
import semanticTokens from './semanticTokens';
import colors from './foundations/colors';
import components from './components';
import config from './config';

const overrides = {
  ...foundations,
  semanticTokens,
  colors,
  components,
  config,
  global,
};

export default extendTheme(overrides);
