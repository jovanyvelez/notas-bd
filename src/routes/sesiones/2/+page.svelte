<script lang="ts">
	//import Notas from '$lib/posts/Clases3-4.md'
	import Notas from '$lib/components/SQLTextArea.svelte';
	import Subqueries from '$lib/components/Subqueries.svelte';
	import Joins from '$lib/components/Joins.svelte';
	let mostrarKey = $state(false);
	let mostrarSubquery = $state(false);

	let mostrar = $state([false, false, false]);
	let panel = $state(false);

	const show = (valor: number) => {

		if (mostrar[valor]) {
			mostrar[valor] = false;
			panel = false;
			return;
		}

		for(let i = 0; i < mostrar.length; i++){
			mostrar[i] = false;
		}

		mostrar[valor] = true;
		panel = true;
		return;
	};
</script>

<svelte:head>
	<title>Clases 3 y 4</title>
</svelte:head>

<div class="titulo">
	<span>Notas de Clase - Sesión 4,5 y 6: Modelo Entidad-Relacion.</span>
</div>

<h1>Notas de Clase</h1>
<div style="background: #1e293b;">
<div class="font-size container">
	<button class="link-button" onclick={() => show(0)}>Claves Primarias y Foraneas</button>

	<button class="link-button" onclick={() => show(1)}>Subconsultas</button>

	<button class="link-button" onclick={() => show(2)}>Joins</button>
</div>
</div>
{#if panel}
	<div class="dark container">
		{#if mostrar[0]}
			<div class="dark fontSize">
				<Notas />
			</div>
		{/if}

		{#if mostrar[1]}
			<div class="dark fontSize">
				<Subqueries />
			</div>
		{/if}

		{#if mostrar[2]}
			<div class="dark fontSize">
				<Joins />
			</div>
		{/if}
	</div>
{/if}

<h1>Recursos para la clase</h1>
<div class="dark">
	<p>
		<a href="/projects/1" target="_blank" class="etiquetasA"
			>Consultas SQL A la base de datos longlist</a
		>
	</p>

	<p>
		<a href="https://cdn.cs50.net/sql/2023/x/lectures/1/src1/sea_lions.db" class="etiquetasA">Descarga sea_lions.db</a>
	</p>

	<p>
		<a href="https://cs50.harvard.edu/sql/2024/notes/1/" class="etiquetasA">Notas Harvard</a>
	</p>
</div>

<!-- <div class="dark">
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
</div> -->

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
		@apply text-slate-300;
		@apply hover:text-slate-100;
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
		color: #cbd5e1;
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
		font-size: 20px;
	}
</style>
