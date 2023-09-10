<script>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-vintage.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell, AppBar, Avatar, Drawer, drawerStore } from '@skeletonlabs/skeleton';

	import Navigation from '$lib/Navigation/Navigation.svelte';

	function drawerOpen() {
		drawerStore.open({});
	}
</script>

<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
				</div>
			</svelte:fragment>
			<strong class="h1 uppercase">Garvit Kansal</strong>
			<svelte:fragment slot="trail">
				<Avatar
					src="https://media.licdn.com/dms/image/D4D03AQHGwoeajIZjqg/profile-displayphoto-shrink_800_800/0/1688441056547?e=1697673600&v=beta&t=Qol-Z8T8-62n39mXtV_v0_ws5HDaYORD25ToAr_PYaY"
					width="w-16"
					rounded="rounded-full"
				/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- <svelte:fragment slot="footer">lorem100</svelte:fragment> -->
</AppShell>
