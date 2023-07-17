<script>
	import Footer from "$lib/components/Footer.svelte";
	import Form from "$lib/components/Form.svelte";
	import HeroSlider from "$lib/components/HeroSlider.svelte";
	// import Slider from "$lib/components/Slider.svelte";
</script>

<div class="container grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 gap-0 lg:mt-[5vh] mx-auto bg-surface-50 overflow-hidden">
	<div class="">
		<HeroSlider />
	</div>
	<div class="border-x border-surface-400 lg:border-t-2 lg:border-r-1 lg:border-surface-500 dark:border-0 dark:bg-primary-700">
		<Form />
	</div>
</div>

<Footer />

