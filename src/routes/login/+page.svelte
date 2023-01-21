<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#if data.is_logged_in}
	<span>already logged in</span>
{:else}
	<form method="post">
		<button>login</button>
	</form>
{/if}
