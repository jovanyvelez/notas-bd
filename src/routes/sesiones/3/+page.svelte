<script lang="ts">
	//import Notas from '$lib/posts/Clases3-4.md'
	import Sesion3 from '$lib/components/Sesion3.svelte';
	import Tarea3 from '$lib/components/Tarea3.svelte';
</script>

<svelte:head>
	<title>Clases 7 y 8</title>
</svelte:head>

<div class="titulo">
	<span>Notas de Clase - Sesión 7,8: Diseño y creación de base de datos.</span>
</div>

<h1>Notas de Clase</h1>

<div class="dark container">
	<div class="dark fontSize">
		<Sesion3 />
	</div>
</div>


<Tarea3 />

<h1>Recursos para la clase</h1>
<div class="dark">


	<p>
		<a href="https://cdn.cs50.net/sql/2023/x/lectures/1/src1/longlist.db" class="etiquetasA"
			>Descarga de longlist -version mejorada</a
		>
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
	.my-element {
		@apply bg-blue-200;
		@apply text-xs;
		@apply text-right;
		@apply text-blue-500;
	}
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

	.inicio {
		@apply flex;
		@apply justify-end;
		@apply bg-blue-200;
		@apply py-2;
	}

	.dark {
		@apply bg-slate-800;
		@apply px-5;
		color: #e0e0e0;
		padding-top: 20px;
		padding-bottom: 20px;
	}

	.textColor {
		color: #e0e0e0;
	}

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
