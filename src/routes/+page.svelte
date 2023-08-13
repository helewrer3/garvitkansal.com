<script lang="ts">
	import Fa from 'svelte-fa';

	export let data;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div id="Main" class="flex justify-center items-center">
		<div class="space-y-5 flex-col p-4">
			<h1 class="h1">Hi 👋, Nice to meet you!</h1>
			<h2>More places where you can meet me:</h2>
			<section class="w-full">
				<div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-0.5">
					{#each data.contact as contact}
						<a class="logo-item bg-initial" href={contact.link} target="_blank" rel="noreferrer">
							<Fa icon={contact.logo} size="2x" />
							<span><h3>{contact.name}</h3></span>
						</a>
					{/each}
				</div>
			</section>
		</div>
	</div>
</div>
