<script lang="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';
	import { onMount } from 'svelte';

	import { entries } from './imageData/+server.js';

  	let images = entries

	let slider: Splide;
	$: bar = '';

	export let sNum = 1;
	export let duration = 5000;
	export let nav = false;
	export let pag = false;

	export let box = true;

	export let progress = false;
	export let pColor = 'bg-primary-500/50';
	export let pbgColor = 'bg-primary-900';
	export let pHeight = 'h-2';

	const mainOptions = {
		autoplay: true,
		interval: duration,
		type: 'loop',
		perPage: sNum,
		perMove: 1,
		gap: '0.01rem',
		arrows: nav,
		pagination: pag
	};

	onMount(() => {
		uSlide();
	});

	const uSlide = () => {
		let ls = slider.splide;
		let end = ls.Components.Controller.getEnd() + 1;
		let rate = Math.min((ls.index + 1) / end, 1);
		bar = String(100 * rate) + '%';
	};
</script>

<div id="hero-wrapper" class="font-sans">
	<Splide
		options={mainOptions}
		hasTrack={false}
		aria-label="SplideSlider"
		bind:this={slider}
		on:move={uSlide}
	>
		<div class="relative {pbgColor}">
			<SplideTrack>
				{#each images as { imgurl, name, attribution }}
					<SplideSlide>
						<div
							class={`hero-img aspect-square bg-no-repeat bg-slate-100 bg-right-bottom`}
							style="background-image: url({imgurl});"
						>
						</div>
						{#if box}
							<div class="absolute w-full left-0 bottom-0 p-8 lg:p-12 text-white">
								<div class="text-5xl lg:text-6xl font-bold break-words w-fit max-w-[13ch] pb-4 leading-12">
									{@html name}
								</div>
								<p class="text-lg lg:text-xl break-words w-fit max-w-[28ch] leading-5">{@html attribution}</p>
							</div>
						{/if}
					</SplideSlide>
				{/each}
			</SplideTrack>
		</div>
		{#if progress}
			<div class="progress {pbgColor}">
				<div
					class="progress-bar transition-all duration-300 ease-out {pColor} {pHeight}"
					style="width: {bar};"
				/>
			</div>
		{/if}
	</Splide>
</div>

<style>
	.progress-bar {
		width: 0;
	}

	.hero-img {
		position: relative;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.hero-img::after {
		content: ' ';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgb(2, 0, 36);
		background: linear-gradient(180deg, rgba(255, 0, 0, 0) 45%, rgba(99, 19, 19, 1) 99%);
		opacity: 0.85;
	}
</style>
