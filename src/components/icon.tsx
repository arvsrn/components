import type { JSX } from 'solid-js';

type IconName =
  | 'plus'
  | 'circle-check'
  | 'warning'
  | 'arrow-down-to-line'
  | 'dot-grid'
  | 'help'
  | 'check'
  | 'circle-x';

interface IconProps {
  name: IconName;
  size?: 'small' | 'normal';
}

function glyphFor(name: IconName): string {
  switch (name) {
    case 'plus':
      return '+';
    case 'circle-check':
    case 'check':
      return '✓';
    case 'warning':
      return '!';
    case 'arrow-down-to-line':
      return '↓';
    case 'dot-grid':
      return '⋯';
    case 'help':
      return '?';
    case 'circle-x':
      return '×';
    default:
      return '•';
  }
}

export function Icon(props: IconProps): JSX.Element {
  const pixelSize = props.size === 'small' ? 14 : 16;
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-flex',
        width: `${pixelSize}px`,
        height: `${pixelSize}px`,
        'align-items': 'center',
        'justify-content': 'center',
        'font-size': `${pixelSize - 2}px`,
        'line-height': '1',
        'font-weight': '600',
      }}
    >
      {glyphFor(props.name)}
    </span>
  );
}
