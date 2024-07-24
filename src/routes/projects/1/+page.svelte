<script>
	import { enhance } from '$app/forms';

	let queryKeys;

	let myQuery = { result: false, datos: [] };
</script>

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
					console.log(myQuery.datos);
				}
			};
			// `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
		}}
	>
		<label for="email"> Consulta </label>

		<textarea
			name="consulta"
			placeholder="Enter query"
			cols="60"
			rows="10"
			style="background-color: papayawhip; padding: 1rem; color: black"
		></textarea>
		<button formaction="?/query" class="marginYComponent">Enviar</button>
	</form>
</div>

<div class="myDiv">
	{#if myQuery.datos}
		{#each myQuery.datos as row}
			<div >
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
