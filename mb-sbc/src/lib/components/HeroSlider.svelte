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

	export let box = false;

	export let progress = false;
	export let pColor = 'bg-primary-500/50';
	export let pbgColor = 'bg-primary-900';
	export let pHeight = 'h-2';

	const mainOptions = {
		autoplay: true,
		lazyLoad: 'nearby',
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
		<div class="{pbgColor}">
			<SplideTrack>
				{#each images as { imgurl, name, attribution }}
					<SplideSlide>
						<div
							class={`hero-img grid aspect-square bg-no-repeat bg-slate-100 bg-right-bottom`}
							style="background-image: url({imgurl});"
						>
							{#if box}
								<div class="z-50 grid p-6 transition-all duration-200 items-end text-white">
									<div class="min-h-12 max-w-[80vw] pb-4">
										<p class="w-fit max-w-fit text-5xl font-bold break-words pb-4">{name}</p>
										<p class="w-fit md:max-w-md break-words">
											{@html attribution}
										</p>
									</div>
								</div>
							{/if}
						</div>
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
		background: linear-gradient(180deg, rgba(255, 0, 36, 0) 45%, rgba(255, 0, 20, 1) 99%);
		opacity: 0.85;
	}
</style>
