<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<h1>prerender = 'auto'</h1>
<p>
  ID: {data.id}
</p>
<p>
  This correctly changes every 5 seconds
</p>
<button on:click={() => window.location.reload()}>Refresh</button>
