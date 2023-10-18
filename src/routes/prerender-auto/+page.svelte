<script>
  export let data;
  $: user = data?.name.first + " " + data?.name.last;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

{#if user}
  <h1>Name: {user}</h1>
{:else}
  <h1>error getting user</h1>
{/if}
