<script lang="ts">
  import { onMount } from "svelte";

  import { range } from "../utlls";
  import { firstDay, lastDay, MILLISECONDS_IN_DAY } from "../constants";

  export const totalNumberOfDays = range(
    (lastDay - firstDay) / MILLISECONDS_IN_DAY
  ).map((day) => new Date(firstDay + day * MILLISECONDS_IN_DAY).toDateString());
  export let remainingDays = 0;
  export let alreadyGradudated = false;

  onMount(() => {
    const today = new Date().getTime();
    remainingDays = Math.floor((lastDay - today) / MILLISECONDS_IN_DAY);
    alreadyGradudated = remainingDays < 0;
    remainingDays = alreadyGradudated ? 0 : remainingDays;
  });
</script>

<section id="days">
  {#if alreadyGradudated}
    <h2>X = Days = Already Graduated 🥳</h2>
  {:else}
    <h2>X = Days = {remainingDays}</h2>
  {/if}
  <div id="days-grid">
    {#each totalNumberOfDays as date, i}
      <div
        data-tooltip={date}
        class={`${
          totalNumberOfDays.length - i <= remainingDays ? "not-yet" : ""
        } ${
          [0, 1, 2, 3, 4].some((offset) => (i - offset) % 30 === 0)
            ? "left"
            : ""
        } ${
          [1, 2, 3, 4].some((offset) => (i + offset) % 30 === 0) ? "right" : ""
        } 
        `}
      />
    {/each}
  </div>
</section>

<style>
  #days {
    padding-bottom: 1rem;
  }
  h2 {
    color: black;
  }

  #days-grid {
    display: grid;
    justify-content: space-between;
    grid-row-gap: 0.4rem;
    row-gap: 0.4rem;
    grid-template-columns: repeat(30, 1rem);
  }

  #days-grid > div {
    height: 1rem;
    width: 1rem;
    background-color: #67b821;
    border-radius: 20%;
  }

  @media (min-width: 800px) {
    h2 {
      padding-left: 2rem;
      padding-top: 2rem;
    }
    #days-grid {
      padding: 2rem;
      padding-top: 0;
    }
  }

  @media (max-width: 800px) {
    #days-grid {
      grid-row-gap: 0.3rem;
      row-gap: 0.3rem;
      grid-template-columns: repeat(30, 0.5rem);
    }

    #days-grid > div {
      height: 0.5rem;
      width: 0.5rem;
    }
  }
  #days-grid > div:hover {
    cursor: pointer;
  }

  #days-grid > div.not-yet {
    background-color: black;
  }
</style>
