<script lang="ts">
  export let name: string = "World";
</script>

<main>
  <h1 class="text-center text-red-500">Hello {name}!</h1>
  <p class="text-center">
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
