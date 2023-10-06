<script>
	import { ga } from '@beyonk/svelte-google-analytics';

	const backToForm = () => {
		ga.addEvent('back_to_form', {
			lead: 'from_internal_page'
		});
		// console.log('backToForm');
	};
</script>

<div
	class="grid gap-4 justify-self-center place-content-start lg:place-content-center lg:gap-12 bg-surface-100 dark:bg-primary-700 px-8 py-16 md:py-24 lg:px-12 xl:px-16 aspect-square md:aspect-auto lg:aspect-square"
>
	<h2
		class="text-gray-500 dark:text-surface-50 font-light text-6xl xl:text-8xl mb-4 max-w-[75vw] md:max-w-fit lg:max-w-[25ch] xl:max-w-full"
	>
		Thanks eh!
	</h2>
	<p class="text-xl xl:text-2xl text-primary-600 dark:text-surface-50 max-w-[36ch]">
		As inscrições para a o Concurso de Bolsas Ensino Médio 2024 já acabaram...
	</p>
	<p class="text-surface-800 dark:text-surface-50 max-w-[40ch]">
		A <span class="font-semibold">Maple Bear São Bernardo do Campo</span> realizará a prova no dia 7
		de outubro de 2023 e deseja boa sorte aos inscritos!
		<a class="text-primary-600 hover:underline" href="/" on:click={backToForm}>Agende uma visita</a
		>.
	</p>
</div>
