<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Fa from 'svelte-fa';

	export let data;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div id="Main" class="flex justify-center items-center p-4">
		<div class="space-y-5 flex-col p-4">
			<h1 class="h1">Some extra-curricular stuff I was a part of 🎒</h1>
			<h3>Not every page will have a not-so-funny comment:</h3>
			<Accordion autocollapse class="card p-4 text-token">
				{#each data.responsibilities as resp, i}
					<AccordionItem open={i == 0}>
						<svelte:fragment slot="lead"><Fa icon={resp.logo} size="1.5x" /></svelte:fragment>
						<svelte:fragment slot="summary">
							<div class="flex justify-between items-center">
								{resp.title}
								<div>
									{resp.org}
								</div>
							</div>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<div>
								{resp.detail}
							</div>
						</svelte:fragment>
					</AccordionItem>
				{/each}
			</Accordion>
		</div>
	</div>
</div>
