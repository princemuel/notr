import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf',
		'@storybook/addon-themes',
		'@storybook/addon-a11y',
		'@chromatic-com/storybook',
		'@storybook/experimental-addon-test'
	],
	framework: { name: '@storybook/sveltekit', options: {} }
};
export default config;
