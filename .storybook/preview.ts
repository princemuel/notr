import { withThemeByDataAttribute } from '@storybook/addon-themes';

import type { Preview } from '@storybook/svelte';

import '../src/app.css';

const preview: Preview = {
	parameters: {
		docs: { toc: true },
		controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } }
	}
};

export default preview;

export const decorators = [
	withThemeByDataAttribute({
		themes: { light: 'light', dark: 'dark' },
		defaultTheme: 'light',
		attributeName: 'data-scheme'
	})
];
