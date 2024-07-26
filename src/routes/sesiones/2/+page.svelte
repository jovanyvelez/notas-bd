<script>
	//import Notas from '$lib/posts/Clases3-4.md'
	import Notas from '$lib/components/SQLTextArea.svelte'
</script>

<svelte:head>
	<title>Clases 3 y 4</title>
</svelte:head>

<div class="titulo">
	<span>Notas de Clase - Sesión 3 y 4: Modelo Entidad-Relacion.</span>
</div>

<div class="dark fontSize">
	<Notas />
</div>

<div class="fontSize">
	
	<p>
		<a href="/projects/1" target="_blank" class="etiquetasA">Consultas SQL A la base de datos longlist</a>
	</p>
	
<!-- 	<p>
	
		<a href="https://cdn.cs50.net/sql/2023/x/lectures/1/src1/longlist.db"
			>Base de datos de ejemplo</a
		>
	</p>
	
	<p>
		<a href="https://cdn.cs50.net/sql/2023/x/lectures/1/src1/sea_lions.db"
			>Base de datos sea_lions</a
		>
	</p> -->
</div>


<div class="dark">
	<h2>Trabajo Recuperación Clase #1</h2>
	
<ul style="margin-bottom: 20px; margin-left: 20px">
	<li>
		<p><a href="/tareas/1" target="_blank" style="color: white ;">Trabajo Práctico Recuperación Clase 1</a></p>
	</li>
	<li>
		<p><a href="https://cdn.cs50.net/sql/2024/x/psets/0/views/views.db" target="_blank" style="color: white ;">Base de datos para el taller</a></p>
	</li>
	
</ul>
</div>
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
</style>
