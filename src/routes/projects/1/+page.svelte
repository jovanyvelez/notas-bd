<script>
	import { enhance } from '$app/forms';

	import cambiar from '$lib/propias/textToSQL'


	let queryKeys;

	let myQuery = { result: false, datos: [] };

	let sqlText = '';

	const cambiaSQL = () => {
		sqlText = cambiar(sqlText);
	}

</script>

<svelte:head>
	<title>Consultas Longlist</title>
</svelte:head>
<div>
	<form
		method="POST"
		action="?/login"
		use:enhance={({ formElement, formData, action, cancel, submitter }) => {
			myQuery.result = false;
			return async ({ result, update }) => {
				// `result` is an `ActionResult` object
				if (result.type === 'success') {
					const Query = { result: true, datos: result.data };
					myQuery.result = true;
					myQuery.datos = Query.datos?.sqlRows;
					queryKeys = Object.keys(myQuery.datos[0]);
				}
			};
		}}
	>
		<label for="email"> Consulta </label>
		<div class="grid">
			<textarea
				name="consulta"
				placeholder="Ingresa tu consulta SQL"
				id="responsive-textarea"
				bind:value={sqlText}
				on:keydown={() => cambiaSQL()}
			></textarea>
		</div>
		<button formaction="?/query" class="marginYComponent">Enviar</button>
	</form>
</div>

<div class="myDiv">
	{#if myQuery.datos}
		{#each myQuery.datos as row}
			<div>
				{#each queryKeys as key}
					<p>
						<span class="column">{key}</span>{': ' + row[key]}
					</p>
				{/each}
			</div>
			--
		{/each}
	{/if}
</div>



<style>
	.column {
		font-weight: bold;
		color: red;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 2rem auto;
	}

	.marginYComponent {
		margin: 0.5rem 0.2rem;
	}

	.myDiv {
		display: flex;
		flex-direction: column;
		margin: 1rem 20px;
	}
	#responsive-textarea {
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        height: auto;
        min-height: 100px;
        padding: 10px;
        box-sizing: border-box;
        resize: vertical;
        font-size: 1em;
    }
    .grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1em;
        height: 100%;
		width: 100%;
		background-color: papayawhip;
    }

</style>
