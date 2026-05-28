<script lang="ts">
</script>

<section
	class="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#E6C7FA]"
>
	<!-- Background image overlay -->
	<img
		src="/untitled325.png"
		alt=""
		class="absolute inset-0 h-full w-full object-cover opacity-50"
	/>

	<!-- Hero content -->
	<div class="relative z-10 flex flex-col items-center gap-4 px-4 md:gap-6">
		<div class="mb-4">
			<h1
				class="text-center leading-tight font-bold text-[#6E52B3]"
				style="font-size: clamp(2rem, 5vw, 10rem)"
			>
				Ruang Sibuk
			</h1>
			<p class="text-center text-[#6E52B3]" style="font-size: clamp(1rem, 1.67vw, 3rem)">
				untukmu yang cari kesibukan
			</p>
		</div>

		<img
			src="/avatar-1.png"
			alt=""
			class="pointer-events-none mt-2 w-[min(40vw,321px)] translate-y-[-8%] rounded-full select-none"
		/>
		<!-- CTA Button -->
		<button
			class="group relative cursor-pointer overflow-hidden rounded-[255px_15px_225px_15px/15px_225px_15px_255px] border-[3px] border-gray-800 bg-transparent px-6 py-3 font-bold text-gray-800 transition-transform duration-200 hover:scale-105 sm:px-8 sm:py-4 md:px-11 md:py-4"
			style="font-size: clamp(0.875rem, 1.25vw, 1.5rem)"
			onclick={() => (window.location.href = '#join')}
		>
			<span class="relative z-10">Gabung Sekarang</span>

			<svg
				class="absolute inset-0 z-0 h-full w-full"
				preserveAspectRatio="none"
				viewBox="0 0 100 100"
			>
				<path
					class="fill-transparent stroke-yellow-400 stroke-30 transition-all duration-600 ease-in-out [stroke-dasharray:1] [stroke-dashoffset:1] group-hover:[stroke-dashoffset:0]"
					stroke-linecap="round"
					stroke-linejoin="round"
					pathLength="1"
					d="M -10,20 L 110,10 L -10,40 L 110,30 L -10,60 L 110,50 L -10,80 L 110,70 L -10,105 L 110,95"
				/>
			</svg>
		</button>
	</div>

	<!-- Bottom wave -->
	<img
		src="/group-6.svg"
		alt=""
		class="pointer-events-none absolute bottom-0 left-0 w-full select-none"
	/>
</section>
