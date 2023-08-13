<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Fa from 'svelte-fa';

	export let data;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div id="Main" class="flex justify-center items-center p-4">
		<div class="space-y-5 flex-col p-4">
			<h1 class="h1">I have worked for a quite a few companies over the years 💼</h1>
			<h3>Served as a Proud corporate slave for the following:</h3>
			<Accordion autocollapse class="card p-4 text-token">
				{#each data.workEx as exp, i}
					<AccordionItem open={i == 0}>
						<svelte:fragment slot="lead"><Fa icon={exp.logo} size="1.5x" /></svelte:fragment>
						<svelte:fragment slot="summary">
							<div class="flex justify-between items-center">
								{exp.name}
								<div>
									{exp.duration}
								</div>
							</div>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<div>
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<span class="chip variant-soft hover:variant-filled" on:click={null}>
									<span>{exp.position}</span>
								</span>
							</div>
							<div>
								{exp.work}
							</div>
							<div>
								{#each exp.tech as tech}
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<span class="chip variant-soft hover:variant-filled" on:click={null}>
										<span>{tech}</span>
									</span>
								{/each}
							</div>
						</svelte:fragment>
					</AccordionItem>
				{/each}
			</Accordion>
		</div>
	</div>
</div>
