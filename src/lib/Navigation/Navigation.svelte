<script>
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose() {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose}>Homepage</a></li>
		<li><a href="/workExperience" on:click={drawerClose}>Work Experience</a></li>
		<li><a href="/projects" on:click={drawerClose}>Projects</a></li>
		<li><a href="/education" on:click={drawerClose}>Education</a></li>
		<li><a href="/achievements" on:click={drawerClose}>Achievements</a></li>
		<li><a href="/responsibilities" on:click={drawerClose}>Volunteer Work</a></li>
	</ul>
</nav>
