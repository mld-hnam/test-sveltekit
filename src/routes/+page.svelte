<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<ul>
  <li><a href="/no-prerender">no prerender set (doesn't work)</a></li>
  <li><a href="/prerender-auto">prerender set to auto (works)</a></li>
  <li><a href="/api-test">prerender set to auto on API route (doesn't work)</a></li>
</ul>
