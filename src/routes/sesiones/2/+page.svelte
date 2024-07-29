<script lang="ts">
	//import Notas from '$lib/posts/Clases3-4.md'
	import Notas from '$lib/components/SQLTextArea.svelte';
	import Subqueries from '$lib/components/Subqueries.svelte';
	let mostrarKey = $state(false);
	let mostrarSubquery = $state(false);

	const show = (valor: number) => {
		if (valor === 1 && !mostrarKey) {
			mostrarKey = !mostrarKey;
			mostrarSubquery = !mostrarKey;
			return;
		}

		if (valor === 1 && mostrarKey) {
			mostrarKey = false;
		}

		if (valor == 2 && !mostrarSubquery) {
			mostrarSubquery = !mostrarSubquery;
			mostrarKey= !mostrarSubquery
			return;
		}

		if(valor == 2 && mostrarSubquery) {
			mostrarSubquery = false;
		} 

	};
</script>

<svelte:head>
	<title>Clases 3 y 4</title>
</svelte:head>

<div class="titulo">
	<span>Notas de Clase - Sesión 3 y 4: Modelo Entidad-Relacion.</span>
</div>

{mostrarKey}
{mostrarSubquery}
<div class="container">
	<button class="link-button" onclick={() => show(1)}>Claves Primarias y Foraneas</button>

	<button class="link-button" onclick={() => show(2)}>Subconsultas</button>
</div>

<div class="dark fontSize">
{#if mostrarKey}
	<div class="dark fontSize">
		<Notas />
	</div>
{/if}

{#if mostrarSubquery}
	<div class="dark fontSize">
		<Subqueries />
	</div>
{/if}

</div>

<div class="fontSize">
	<p>
		<a href="/projects/1" target="_blank" class="etiquetasA"
			>Consultas SQL A la base de datos longlist</a
		>
	</p>


	<p>
	
		<a href="https://cs50.harvard.edu/sql/2024/notes/1/"
			>Notas Harvard</a
		>
	</p>
	

</div>

<div class="dark">
	<h2>Trabajo Recuperación Clase #1</h2>

	<ul style="margin-bottom: 20px; margin-left: 20px">
		<li>
			<p>
				<a href="/tareas/1" target="_blank" style="color: white ;"
					>Trabajo Práctico Recuperación Clase 1</a
				>
			</p>
		</li>
		<li>
			<p>
				<a
					href="https://cdn.cs50.net/sql/2024/x/psets/0/views/views.db"
					target="_blank"
					style="color: white ;">Base de datos para el taller</a
				>
			</p>
		</li>
	</ul>
</div>

<style lang="postcss">
	/* 	.my-element {
		@apply bg-blue-200;
		@apply text-xs;
		@apply text-right;
		@apply text-blue-500;
	} */
	.etiquetasA {
		@apply link;
		@apply link-primary;
	}

	.titulo {
		@apply text-3xl;
		@apply text-blue-500;
		@apply font-bold;
		@apply mb-2;
		@apply py-10;
	}

	/* 	.inicio {
		@apply flex;
		@apply justify-end;
		@apply bg-blue-200;
		@apply py-2;
	} */

	.dark {
		@apply bg-slate-800;
		@apply px-5;
		color: #e0e0e0;
		padding-top: 20px;
		padding-bottom: 20px;
	}

	/* .textColor {
		color: #e0e0e0;
	}
 */
	.fontSize {
		font-size: 20px;
	}

	.link-button {
		background-color: transparent;
		border: none;
		color: #007bff;
		cursor: pointer;
		font-size: 1.2rem;
		padding: 0;
		text-decoration: underline;
		display: inline-block;
		margin: 1rem 0;
	}

	.link-button:hover {
		text-decoration: none;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		padding: 20px;
		max-width: 1000px;
		width: 100%;
		box-sizing: border-box;
	}
</style>
