import type { Preview } from 'storybook-solidjs-vite'
import '../src/index.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    frameBackground: '#fff',
    framePadding: '24px',
    frameHeight: '240px',
  },
  decorators: [
    (Story, context) => {
      const frameBackground = context.parameters.frameBackground ?? '#fff'
      const framePadding = context.parameters.framePadding ?? '24px'
      const frameHeight = context.parameters.frameHeight ?? '240px'
      const theme = context.globals.theme ?? 'light'

      return (
        <div
          data-theme={theme}
          style={{
            background: frameBackground,
            padding: framePadding,
            'min-height': frameHeight,
            width: '100%',
            'box-sizing': 'border-box',
          }}
        >
          <Story />
        </div>
      )
    },
  ],
}

export default preview
