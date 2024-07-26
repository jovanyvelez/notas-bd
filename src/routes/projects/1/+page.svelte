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
		<div class="myDiv">
			<textarea
				name="consulta"
				placeholder="Enter query"
				cols="60"
				rows="10"
				style="background-color: papayawhip; padding: 1rem; color: black"
				bind:value={sqlText}
				on:keydown={() => cambiaSQL()}
			></textarea>
			<button formaction="?/query" class="marginYComponent">Enviar</button>
		</div>
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


</style>
