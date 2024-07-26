<script>
    import Temp from '$lib/posts/clase1.md'
</script>

<svelte:head>
	<title>Clases 1 y 2</title>
</svelte:head>
<!-- <div class="inicio">
    <p class="my-element">Creado por Jovany 2024</p>
</div> -->

<Temp />

<p class="padding"><a href="https://cs50.harvard.edu/sql/2024/notes/0/" >Referencia a SQL</a></p>


<p><a href="https://sqliteonline.com/" target="_blank">Herramienta de práctica</a></p>

<p>
  <a href="https://cdn.cs50.net/sql/2023/x/lectures/0/src0/longlist.db">Base de datos de ejemplo1</a>
</p>





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

    .padding {
      margin-top: 10px;
    }


</style>
