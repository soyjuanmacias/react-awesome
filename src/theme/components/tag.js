const Tag = {
  baseStyle: {
    fontFamily: 'body',
  },
  variants: {
    custom: {
      container: {
        color: 'white',
        rounded: 'xl',
        bg: 'red.400',
        _dark: {},
      },
    },
  },
  sizes: {
    md: {
      container: {},
    },
  },
  defaultProps: {
    size: 'md',
  },
};

export default Tag;
