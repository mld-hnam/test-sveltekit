<script lang="ts">
    let id = 'not set'

    async function fetchFromAPI() {
        const res = await fetch("/api-prerender")
        const data = await res.json()
        id = data.id
    }
</script>

<h1>API route with prerender = 'auto'</h1>
<p>
  ID: {id}
</p>
<button on:click={fetchFromAPI}>Fetch from API</button>
<p>
  This should change every 15 seconds, but it always changes
</p>
