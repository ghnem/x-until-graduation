<script lang="ts">
  import { onMount } from "svelte";

  import { range } from "../utlls";
  import { firstDay, lastDay, MILLISECONDS_IN_WEEK } from "../constants";

  export const totalNumberOfWeeks = range(
    Math.ceil((lastDay - firstDay) / MILLISECONDS_IN_WEEK)
  );
  export let remainingWeeks = 0;
  export let alreadyGradudated = false;

  onMount(() => {
    const today = new Date().getTime();
    remainingWeeks = Math.ceil((lastDay - today) / MILLISECONDS_IN_WEEK);
    alreadyGradudated = remainingWeeks < 0;
    remainingWeeks = alreadyGradudated ? 0 : remainingWeeks;
  });
</script>

<section id="weeks">
  {#if alreadyGradudated}
    <h2>X = Weeks = Already Graduated 🥳</h2>
  {:else}
    <h2>X = Weeks = {remainingWeeks}</h2>
  {/if}
  <div id="weeks-grid">
    {#each totalNumberOfWeeks as _, i}
      <div
        class={totalNumberOfWeeks.length - i <= remainingWeeks ? "not-yet" : ""}
      />
    {/each}
  </div>
</section>

<style>
  #weeks {
    padding-bottom: 1rem;
  }
  h2 {
    color: #67b821;
  }

  #weeks-grid {
    display: grid;
    justify-content: space-between;
    grid-row-gap: 0.1rem;
    row-gap: 0.1rem;
    grid-template-columns: repeat(40, 1rem);
  }

  #weeks-grid > div {
    height: 1rem;
    width: 1rem;
    background-color: black;
  }

  @media (max-width: 800px) {
    #weeks-grid {
      grid-row-gap: 0.3rem;
      row-gap: 0.3rem;
      grid-template-columns: repeat(30, 0.5rem);
    }

    #weeks-grid > div {
      height: 0.5rem;
      width: 0.5rem;
    }
  }

  #weeks-grid > div.not-yet {
    background-color: #67b821;
  }
</style>
