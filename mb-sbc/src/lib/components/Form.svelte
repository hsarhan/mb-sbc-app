<script>
	import { fly, fade } from 'svelte/transition';

	let submitStatus = "";
	let hasError = false;
	let isSuccessVisible = false;
	let submitted = false;

	const errMessage = 'Erro! Verifique os campos.';

	const submitForm = async (data) => {
		submitStatus = 'submitting';
		isSuccessVisible = true;

		const formData = new FormData(data.currentTarget);

		const res = await fetch('/contact_mbsbc', {
			method: 'POST',
			body: formData
		});

		const { message } = await res.json();
		submitStatus = message;

		setTimeout(function () {
			isSuccessVisible = false;
		}, 4500);
	};

</script>
<div class="grid gap-4 lg:gap-12 content-between lg:content-center md:content-start bg-surface-100 dark:bg-primary-700 p-8 lg:px-12 xl:px-16 aspect-square md:aspect-auto lg:aspect-square">
    <h2
        class="text-gray-500 dark:text-surface-50 font-light text-3xl lg:text-4xl 2xl:text-6xl mb-4 max-w-[75vw] md:max-w-full lg:max-w-[25ch] xl:max-w-full"
    >
        Conheça e se apaixone pelo nosso espaço e nossa metodologia
    </h2>
    <div class="">
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
				<p>Dados enviados com sucesso! Obrigado.</p>
			{:else}
				<form on:submit|preventDefault={submitForm} class="grid gap-4 md:grid-cols-2 dark:text-surface-50">
					<div class="grid gap-2">
						<label for="name" class="text-xs">Seu Nome <span class="text-slate-400 dark:text-slate-300">• Your name</span></label>
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
						<label for="child" class="text-xs">Nome da criança <span class="text-slate-400 dark:text-slate-300">• Child's name</span></label>
						<input
							type="text"
							name="child"
							aria-label="child"
							placeholder="Nome da criança"
							class="input text-sm"
							required
						/>
					</div>

					<div class="grid gap-2">
						<label for="grade" class="text-xs">Escolaridade <span class="text-slate-400 dark:text-slate-300">• Grade</span></label>				
						
						<select 
							name="grade"
							aria-label="grade"
							class="input text-sm" >
							<option value="Educação Infantil">Educação Infantil • Preschool</option>
							<option value="Ensino Fundamental I">Ensino Fundamental I • Elementary</option>
							<option value="Ensino Fundamental II">Ensino Fundamental II • Middle Years</option>
							<option value="Ensino Médio">Ensino Médio • High School</option>
						</select>
							
					</div>

					<div class="grid gap-2">
						<label for="email" class="text-xs">Seu e-mail <span class="text-slate-400 dark:text-slate-300">• E-mail</span></label>
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
						<label for="phone" class="text-xs">Seu telefone <span class="text-slate-400 dark:text-slate-300">• Phone</span></label>
						<input
							name="phone"
							type="text"
							class="input text-sm"
							placeholder="+55 (11) 99876 5432"
							aria-label="phone"
							required
						/>
					</div>

					<div class="pt-3 md:pt-0 grid gap-2">
						<button type="submit" on:click={() => (submitted = true)} class="mt-6 btn rounded-md text-white bg-primary-400 dark:bg-primary-500"
							>Enviar <span class="text-slate-100 ml-1"> • Send</span></button
						>
					</div>
				</form>
			{/if}
        </div>
    </div>
</div>