<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Notas de clase</title>
</svelte:head>

<main class=" w-11/12 sm:w-8/12 mx-5 sm:mx-auto my-10">
	{@render children()}
	<div class="marca">Creado por Jovany 2024</div>
</main>

<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	.marca {
      display: flex;
      justify-content: end;
			background-color: #bfdbfe;
			margin-left: auto;
			margin-right: auto;
			
			padding: 0.5rem;
			border-radius: 8px;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
			max-width: 800px;
			width: 100%;
			box-sizing: border-box;
			margin: 20px;
		}
</style>
