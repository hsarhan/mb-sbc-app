<script>
	import Footer from "$lib/components/Footer.svelte";
	import Form from "$lib/components/Form.svelte";
	import HeroSlider from "$lib/components/HeroSlider.svelte";
</script>

<div class="container grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 gap-0 lg:mt-[5vh] mx-auto bg-surface-50 overflow-hidden">
	<div class="relative">
		<div class="grid gap-1 absolute top-3 left-3 z-40">
			<img src="mb-sbc-flags.png" alt="Admisson" class="w-32 h-auto lg:w-40">
		</div>
		<div class="grid gap-1 absolute top-0 right-0 lg:-right-12 2xl:-right-16 z-50">
			<img src="mb-sbc-admission.png" alt="Admisson" class="animate-ping w-24 h-24 2xl:w-32 2xl:h-32">
			<img src="mb-sbc-certify.png" alt="Certificates" class="animate-ping w-24 h-24 2xl:w-32 2xl:h-32 mx-auto">
		</div>
		<HeroSlider />
	</div>
	<div class="border-x border-surface-400 lg:border-t-2 lg:border-r-1 lg:border-surface-500 dark:border-0 dark:bg-primary-700">
		<Form />
	</div>
</div>

<Footer />

