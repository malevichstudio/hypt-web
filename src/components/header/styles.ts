import { pxToRem } from '../../utils';

export const styles = {
  wrapper: (position: string) => ({
    position: position,
    top: { base: 0, xl: position === 'static' ? 0 : 5 },
    left: { base: 0, xl: 5 },
    right: { base: 0, xl: 5 },
    zIndex: 11,
    alignItems: 'center',
    bg: 'white',
    borderRadius: 4,
    marginX: { base: 0, xl: 6 },
    ps: { base: 4, xl: 6, '2xl': pxToRem(50) },
    pe: { base: 4, xl: 6, '2xl': pxToRem(30) },
    paddingY: { base: 3, xl: 5 },
    boxShadow: '0px 1px 12px rgba(0, 0, 0, 0.09)',
    mt: { base: 0, xl: position === 'static' ? 5 : 0 },
    mb: position === 'fixed' ? 0 : pxToRem(30),
  }),
  link: {
    fontSize: 'xs',
    fontFamily: 'medium',
    _hover: { color: 'primary.400' },
  },
  dot: (top = '0px', right = '0px') => ({
    position: 'absolute',
    top,
    right,
    width: 2,
    height: 2,
    borderRadius: 'full',
    backgroundColor: '#FF4D4D',
    border: '1px solid #fff',
  }),
};
