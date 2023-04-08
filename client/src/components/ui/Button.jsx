import { styled } from '@slicknode/stylemapper';

export const Button = styled(
  'button',

  'rounded-lg h-fit',
  {
    variants: {
      disabled: {
        true: 'opacity-50 pointer-event-none',
      },

      variant: {
        primary:
          'bg-brand \
        hover:bg-brand-hover',
        neutral:
          'bg-mid \
          dark:hover:bg-dark-hover dark:bg-dark dark:text-light',
        danger:
          'bg-red-500 \
          hover:enabled:bg-red-600 \
          dark:text-light',
        success:
          'bg-green-500 \
          hover:enabled:bg-green-600 \
          dark:text-light',
      },

      fluid: {
        true: 'w-full',
        false: 'max-w-fit',
      },

      size: {
        sm: 'py-0.5 px-4',
        md: 'py-2 px-4',
        lg: 'py-4 px-8',
      },
    },
    compoundVariants: [
      {
        variant: 'success',
        outline: true,
        className:
          'bg-opacity-0  border-2 border-green-500 hover:enabled:bg-green-500',
      },
      {
        variant: 'danger',
        outline: true,
        className:
          'bg-opacity-0  border-2 border-red-500 hover:enabled:bg-red-500',
      },
    ],
    forwardProps: ['disabled', 'fluid'],
    defaultVariants: {
      variant: 'neutral',
      size: 'md',
      fluid: false,
    },
  },
);
