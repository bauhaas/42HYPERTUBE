import { styled } from '@slicknode/stylemapper';

export const Avatar = styled(
  'img',

  {
    variants: {
      variant: {
        rounded: 'rounded-full',
        square: 'rounded-md',
      },

      rounded: {
        true: 'rounded-full',
      },

      size: {
        sm: 'h-8 w-8',
        md: 'h-12 w-12',
        lg: 'h-16 w-16',
        xl: 'h-20 w-20',
        xxl: 'h-24 w-24',
      },
    },

    defaultVariants: {
      variant: 'square',
      size: 'md',
    },
  },
);
