<script module>
	import { tv } from 'tailwind-variants';

	import type { WithElementRef } from 'bits-ui';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { VariantProps } from 'tailwind-variants';

	export const btn = tv({ base: 'flex items-center' });

	type Props = WithElementRef<HTMLButtonAttributes> & VariantProps<typeof btn> & {};
</script>

<script lang="ts">
	import { Button } from 'bits-ui';

	let { children, ...attrs }: Props = $props();
</script>

<Button.Root {...attrs} class={[attrs.class]}>
	{@render children?.()}
</Button.Root>
