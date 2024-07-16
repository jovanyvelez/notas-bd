<script>
	import '../app.css'
    let {children} = $props();
</script>

<svelte:head>
	<title>Notas de clase</title>
</svelte:head>

<main class=" w-11/12 sm:w-8/12 mx-5 sm:mx-auto my-10">
	{@render children()}
</main>

<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
