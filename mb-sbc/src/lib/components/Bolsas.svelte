<script>
	import { fly, fade } from 'svelte/transition';
	import { ga } from '@beyonk/svelte-google-analytics';
	import Thanks from './Thanks.svelte';

	let submitStatus = '';
	let hasError = false;
	let isSuccessVisible = false;
	let isFormVisible = true;
	let submitted = false;

	let tks = false;

	const errMessage = 'Erro! Verifique os campos.';

	const formSuccess = () => {
		ga.addEvent('form_success', {
			lead: 'captured'
		});
	};

	const submitForm = async (data) => {
		submitStatus = 'submitting';
		isSuccessVisible = true;

		const formData = new FormData(data.currentTarget);

		const res = await fetch('/signup_mbsbc', {
			method: 'POST',
			body: formData
		});

		const { message } = await res.json();
		submitStatus = message;

		isFormVisible = false;

		setTimeout(function () {
			formSuccess();
			isSuccessVisible = false;
		}, 2500);

		setTimeout(function () {
			tks = true;
		}, 3750);
	};
</script>

<div
	class="grid gap-4 lg:gap-12 content-between lg:content-center md:content-start bg-surface-100 dark:bg-primary-700 p-8 lg:px-12 xl:px-16 aspect-square md:aspect-auto lg:aspect-square"
>
	{#if tks}
		<div in:fade={{ duration: 500 }} out:fade={{ duration: 450, delay: 500 }}>
			<Thanks />
		</div>
	{:else}
		<div class="">
			<h2
				class="text-gray-500 dark:text-surface-50 font-light text-3xl lg:text-4xl 2xl:text-6xl py-4 max-w-[75vw] md:max-w-full lg:max-w-[25ch] xl:max-w-full"
			>
				Inscreva seus filhos para o Concurso de Bolsas Maple Bear SBC 2024!
			</h2>
			<p class="text-sm text-gray-600">Inscrições até 5 de outubro de 2023.</p>
			<p class="text-sm text-secondary-400 font-semibold">Prova dia 7 de outubro de 2023.</p>
		</div>

		<div class="h-[36em] md:h-[20em] lg:h-full overflow-scroll scroll-m-12 px-2">
			<div class="text-gray-500 grid">
				{#if hasError == true}
					<p class="text-center text-error-800 border border-error-800 rounded-sm p-2 mb-4">
						{errMessage}
					</p>
				{:else if isSuccessVisible}
					<p
						class="text-center text-white bg-secondary-500 border border-secondary-500 rounded-sm p-2 mb-4"
						in:fly={{ y: -32, duration: 2000, delay: 500 }}
						out:fade={{ duration: 450, delay: 500 }}
					>
						Dados enviados com sucesso. Obrigado!
					</p>
				{/if}

				{#if submitStatus == 'submitting'}
					<div class="grid grid-cols-[auto_1fr] align-middle justify-start pb-2">
						<p>Enviando...</p>
					</div>
				{:else if submitStatus == 'failed'}
					<p>Erro! Dados não enviados</p>
				{:else if submitStatus == 'success'}
					<p>Dados enviados com sucesso. Obrigado!</p>
				{:else if isFormVisible}
					<form
						transition:fade
						on:submit|preventDefault={submitForm}
						class="grid gap-4 md:grid-cols-2 dark:text-surface-50"
						id="admission"
					>
						<div class="grid gap-2">
							<label for="name" class="text-xs"
								>Seu Nome <span class="text-slate-400 dark:text-slate-300">• Your name</span></label
							>
							<input
								type="text"
								name="name"
								aria-label="name"
								placeholder="Seu Nome"
								class="input text-sm"
								required
							/>
						</div>

						<div class="grid gap-2">
							<label for="child" class="text-xs"
								>Nome do aluno <span class="text-slate-400 dark:text-slate-300">• Child's name</span
								></label
							>
							<input
								type="text"
								name="child"
								aria-label="child"
								placeholder="Nome do aluno"
								class="input text-sm"
								required
							/>
						</div>

						<div class="grid gap-2">
							<label for="email" class="text-xs"
								>Seu e-mail <span class="text-slate-400 dark:text-slate-300">• E-mail</span></label
							>
							<input
								type="email"
								name="email"
								aria-label="email"
								placeholder="seunome@email.com.br"
								class="input text-sm email"
								required
							/>
						</div>

						<div class="grid gap-2">
							<label for="phone" class="text-xs"
								>Seu telefone <span class="text-slate-400 dark:text-slate-300">• Phone</span></label
							>
							<input
								name="phone"
								type="text"
								class="input text-sm"
								placeholder="+55 (11) 99876 5432"
								aria-label="phone"
								required
							/>
						</div>

						<div class="grid gap-2 lg:col-span-2">
							<label for="grade" class="text-xs"
								>Classe de 2024 <span class="text-slate-400 dark:text-slate-300"
									>• 2024's Class</span
								></label
							>

							<select name="grade" aria-label="grade" class="input text-sm">
								<option selected disabled>-- Selecione --</option>
								<option value="Y-9">9º ano - Year Nine</option>
								<option value="Y-10">10º ano - Year Ten</option>
							</select>
						</div>

						<div class="grid gap-2 lg:col-start-1 lg:col-end-2">
							<label for="grade" class="text-xs"
								>Inscrições <span class="text-slate-400 dark:text-slate-300">• Sign In</span></label
							>
							<div class="text-sm space-y-0">
								<label class="flex items-center space-x-2">
									<input
										class="checkbox"
										type="checkbox"
										checked
										name="signin"
										aria-label="signin"
										value="Inscrever aluno"
									/>
									<p>Inscrever aluno</p>
								</label>
							</div>
						</div>

						<div class="pt-3 md:pt-0 grid gap-2">
							<button
								type="submit"
								on:click={() => (submitted = true)}
								class="mt-6 btn rounded-md font-semibold text-white bg-primary-400 dark:bg-primary-500"
								>Enviar <span class="text-slate-100 font-normal ml-1"> • Send</span></button
							>
						</div>
					</form>
				{/if}
			</div>
		</div>
	{/if}
</div>
