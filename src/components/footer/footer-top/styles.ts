export const styles = {
  title: {
    color: 'white',
    mb: '7',
    textTransform: 'uppercase',
    fontFamily: 'medium',
  },
  input: {
    color: 'white',
    borderRadius: 'sm',
    border: 'none',
    backgroundColor: '#1D1D1D',
  },
  link: {
    color: 'gray.400',
    fontSize: 'sm',
    mb: '4',
    _hover: { color: 'white' },
  },
  socialLink: {
    bg: 'transparent',
    border: '1px',
    borderColor: 'gray.600',
    color: 'gray.600',
    _hover: {
      bg: '#1163EE',
      color: 'white',
      borderColor: '#1163EE',
    },
  },
  descriptionWrapper: {
    flexDirection: { base: 'column', lg: 'row' },
    alignItems: { base: 'center', lg: 'flex-start' },
    mb: { base: '2.5', lg: '0' },
  },
  linksWrapper: {
    me: { base: '0', lg: 'auto' },
    flexDir: 'column',
    my: { base: '2.5', lg: '0' },
  },
  subscriptionWrapper: {
    ms: { base: 0, lg: '16' },
    mt: { base: '2.5', lg: '0' },
  },
};
