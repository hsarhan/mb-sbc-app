<script lang='ts'>
	import '../mapleBear-theme.postcss'; 
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Analytics from '$lib/analytics.svelte';
</script>

<!-- App Shell -->

<AppShell>
	<Analytics />

	<slot />
</AppShell>
