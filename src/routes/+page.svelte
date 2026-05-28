<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import About from '$lib/About.svelte';
	import InviteLink from '$lib/InviteLink.svelte';
	import BottomPage from '$lib/BottomPage.svelte';

	function handleJoin() {
		document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<Hero onJoin={handleJoin} />

<section id="about">
	<About />
</section>

<InviteLink />

<section id="credits">
	<BottomPage />
</section>
