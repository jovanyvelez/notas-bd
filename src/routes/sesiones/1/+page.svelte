<script>
    import Temp from '$lib/posts/clase1.md'
</script>


<div class="inicio">
    <a href="/">Atras</a>
    <p class="my-element">Creado por Jovany 2024</p>
</div>

<Temp />

<p class="my-element">Creado por Jovany 2024</p>

<style lang="postcss">
    .my-element {
      @apply bg-blue-200;
      @apply text-xs;
      @apply text-right;
    }

    .inicio {
      @apply flex;
      @apply justify-between;
      @apply bg-blue-200;

    }
</style>
