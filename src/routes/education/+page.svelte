<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Fa from 'svelte-fa';

	export let data;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div id="Main" class="flex justify-center items-center p-4">
		<div class="space-y-5 flex-col p-4">
			<h1 class="h1">A software developer that barely passed 5th grade 🧮...</h1>
			<h3>Proudly passed with flying colors from the following:</h3>
			<Accordion autocollapse class="card p-4 text-token">
				{#each data.education as edu, i}
					<AccordionItem open={i == 0}>
						<svelte:fragment slot="lead"><Fa icon={edu.logo} size="1.5x" /></svelte:fragment>
						<svelte:fragment slot="summary">
							<div class="flex justify-between items-center">
								{edu.title}
								<div>
									{edu.year}
								</div>
							</div>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<div>
								{edu.description}
							</div>
						</svelte:fragment>
					</AccordionItem>
				{/each}
			</Accordion>
		</div>
	</div>
</div>
