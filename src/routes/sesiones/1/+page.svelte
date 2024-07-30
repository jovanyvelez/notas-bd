<script>
	import Temp from '$lib/posts/clase1.md';
</script>

<svelte:head>
	<title>Clases 1 y 2</title>
</svelte:head>
<!-- <div class="inicio">
    <p class="my-element">Creado por Jovany 2024</p>
</div> -->

<Temp />

<h1>Recursos para la clase</h1>
<p class="padding"><a href="https://cs50.harvard.edu/sql/2024/notes/0/">Notas Harvard</a></p>

<p><a href="https://sqliteonline.com/" target="_blank">Herramienta de práctica</a></p>

<p>
	<a href="https://cdn.cs50.net/sql/2023/x/lectures/0/src0/longlist.db">Base de datos de ejemplo1</a
	>
</p>

<h2 class="subtitulo">Trabajo Recuperación Clase #1</h2>
<div class="dark">

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
	.my-element {
		@apply bg-blue-200;
		@apply text-xs;
		@apply text-right;
	}

	.inicio {
		@apply flex;
		@apply justify-end;
		@apply bg-blue-200;
	}

  .subtitulo {
    @apply my-5;
  }

	.padding {
		margin-top: 10px;
	}

	.dark {
		@apply bg-slate-800;
		@apply px-5;
		color: #e0e0e0;
		padding-top: 20px;
		padding-bottom: 20px;
	}
</style>
