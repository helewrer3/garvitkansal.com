<script lang="ts">
	import { Accordion, AccordionItem, TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let data;

	let tabSet: number = 0;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div id="Main" class="flex justify-center items-center p-4">
		<div class="space-y-5 flex-col p-4">
			<h1 class="h1">As you can see, I am somewhat of a software developer 👨🏻‍💻</h1>
			<h2>Fun Fact: BFS is my study mantra.</h2>
			<TabGroup justify="justify-center">
				{#each data.metaData as meta, i}
					<Tab bind:group={tabSet} name="tab${i + 1}" value={i}>
						<svelte:fragment slot="lead"><Fa icon={meta.logo} /></svelte:fragment>
						<span>{meta.domain}</span>
					</Tab>
				{/each}
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					<Accordion autocollapse class="card p-4 text-token">
						{#each data.projects.filter((e) => e.domainId == tabSet) as project, i}
							<AccordionItem open={i == 0}>
								<svelte:fragment slot="lead">
									<Fa icon={project.logo} size="1.5x" />
								</svelte:fragment>
								<svelte:fragment slot="summary">
									<div class="flex justify-between items-center">
										{project.name}
										<div>
											<a href={project.link} target="_blank" rel="noreferrer">
												<button type="button" class="btn variant-soft hover:variant-filled">
													<Fa icon={faArrowUpRightFromSquare} />
												</button>
											</a>
										</div>
									</div>
								</svelte:fragment>
								<svelte:fragment slot="content">
									<div>
										{project.summary}
									</div>
									<div>
										{#each project.tech as tech}
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
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>
