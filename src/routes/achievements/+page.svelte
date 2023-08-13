<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Fa from 'svelte-fa';

	export let data;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div id="Main" class="flex justify-center items-center p-4">
		<div class="space-y-5 flex-col p-4">
			<h1 class="h1">Somehow with some achievements under the belt 🏆</h1>
			<h3>I still have no idea how I did any of this:</h3>
			<dl class="list-dl">
				{#each data.achievements as row}
					<div>
						<span class="badge variant-soft">></span>
						<span class="flex-auto">
							<dt>{row.event}</dt>
							<dd>{row.detail}</dd>
						</span>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>
