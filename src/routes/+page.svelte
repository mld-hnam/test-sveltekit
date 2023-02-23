<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<h1>prerender = 'auto'</h1>
<p>
  ID: {data.id}
</p>

<ul>
  <li><a href="/no-prerender">no prerender set (doesn't work)</a></li>
  <li><a href="/prerender-auto">prerender set to auto (doesn't work)</a></li>
  <li><a href="/api-test-no-prerender">API route (doesn't work)</a></li>
  <li><a href="/api-test-prerender">prerender set to auto on API route (doesn't work)</a></li>
</ul>
