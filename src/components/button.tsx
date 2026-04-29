import type { ComponentProps } from 'solid-js';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary';
};

export function Button(props: ButtonProps) {
  const { variant = 'primary', style, ...rest } = props;
  const background = variant === 'primary' ? '#111827' : '#ffffff';
  const color = variant === 'primary' ? '#ffffff' : '#111827';
  const border = variant === 'primary' ? '1px solid #111827' : '1px solid #d1d5db';

  return (
    <button
      {...rest}
      style={
        typeof style === 'string'
          ? style
          : {
              padding: '8px 12px',
              'border-radius': '8px',
              border,
              background,
              color,
              cursor: 'pointer',
              'font-size': '14px',
              'line-height': '20px',
              ...style,
            }
      }
    />
  );
}
