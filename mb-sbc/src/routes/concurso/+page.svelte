<script>
	//import Bolsas from '$lib/components/Bolsas.svelte';
	import Closing from '$lib/components/Closing.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroSlider from '$lib/components/HeroSlider.svelte';
</script>

<svelte:head>
	<title>Maple Bear SBC - Concurso de Bolsas</title>
	<meta
		name="description"
		content="Maple Bear São Bernardo do Campo - Concurso de Bolsas para o 9º e 10º anos!"
	/>
	<!-- Facebook Meta Tags -->
	<meta property="og:image" content="/favicon.png" />
	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="/favicon.png" />
	<!-- Meta Tags Generated via https://www.opengraph.xyz -->
</svelte:head>

<div
	class="container grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 gap-0 lg:mt-[5vh] mx-auto bg-surface-50 overflow-hidden"
>
	<div class="relative">
		<div class="grid gap-1 absolute top-3 left-3 z-40">
			<img
				src="mb-sbc-flags.webp"
				alt="Admisson"
				width="128"
				height="22"
				class="w-32 h-auto lg:w-40"
			/>
		</div>
		<div class="grid gap-1 absolute top-0 right-0 lg:-right-12 2xl:-right-16 z-50">
			<img
				src="mb-sbc-admission.webp"
				alt="Admisson"
				width="96"
				height="96"
				class="animate-ping w-24 h-24 2xl:w-32 2xl:h-32"
			/>
			<img
				src="mb-sbc-certify.webp"
				alt="Certificates"
				width="96"
				height="96"
				class="animate-ping w-24 h-24 2xl:w-32 2xl:h-32 mx-auto"
			/>
		</div>
		<HeroSlider />
	</div>
	<div
		class="border-x border-surface-400 lg:border-t-2 lg:border-r-1 lg:border-surface-500 dark:border-0 dark:bg-primary-700"
	>
		<Closing />
	</div>
</div>

<Footer />
