<script lang="ts">
	import { resolve } from '$app/paths';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<!-- Fixed sticky nav - overlays all sections -->
<nav
	class="fixed top-0 right-0 left-0 z-50 flex items-center justify-between bg-[#F6EFEA]/[.95] px-[5.5%] py-3 shadow-md backdrop-blur-sm md:py-4"
>
	<a href={resolve('/')} class="shrink-0">
		<img
			src="/desain-tanpa-judul-6.png"
			alt="Ruang Sibuk logo"
			class="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10"
		/>
	</a>

	<div class="flex items-center gap-3 sm:gap-6 md:gap-10 lg:gap-14">
		<a
			href="#about"
			class="text-[#6E52B3] transition-opacity hover:opacity-70"
			style="font-size: clamp(0.75rem, 1.25vw, 1.75rem)"
		>
			about
		</a>
		<a
			href="#join"
			class="text-[#6E52B3] transition-opacity hover:opacity-70"
			style="font-size: clamp(0.75rem, 1.25vw, 1.75rem)"
		>
			bergabung
		</a>
		<a
			href="#credits"
			class="text-[#6E52B3] transition-opacity hover:opacity-70"
			style="font-size: clamp(0.75rem, 1.25vw, 1.75rem)"
		>
			credits
		</a>
	</div>

	<img
		src="/avatar-1.png"
		alt="User avatar"
		class="h-7 w-7 rounded-full md:h-10 md:w-10 lg:h-12 lg:w-12"
	/>
</nav>

{@render children()}
