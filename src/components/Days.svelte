<script lang="ts">
	import { range } from '../utlls';
	import { firstDay, lastDay, MILLISECONDS_IN_DAY } from '../constants';

	const today = new Date().getTime();
	export const totalNumberOfDays = range((lastDay - firstDay) / MILLISECONDS_IN_DAY);
	export let remainingDays = Math.floor((lastDay - today) / MILLISECONDS_IN_DAY);
	export const alreadyGradudated = remainingDays < 0;
	remainingDays = alreadyGradudated ? 0 : remainingDays;
</script>

<section id="days">
	{#if alreadyGradudated}
		<h2>X = Days = Already Graduated 🥳</h2>
	{:else}
		<h2>X = Days = {remainingDays}</h2>
	{/if}
	<div id="days-grid">
		{#each totalNumberOfDays as _, i}
			<div class={totalNumberOfDays.length - i <= remainingDays ? 'not-yet' : ''} />
		{/each}
	</div>
</section>

<style>
	#days {
		padding-bottom: 1rem;
	}
	h2 {
		color: #67b821;
	}

	#days-grid {
		display: grid;
		justify-content: space-between;
		grid-row-gap: 0.1rem;
		row-gap: 0.1rem;
		grid-template-columns: repeat(40, 1rem);
	}

	#days-grid > div {
		height: 1rem;
		width: 1rem;
		background-color: black;
	}

	#days-grid > div.not-yet {
		background-color: #67b821;
	}
</style>
