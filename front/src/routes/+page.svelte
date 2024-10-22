<script>
    import { onMount } from 'svelte';
    import { scoreStore } from "$lib/stores/scoreStore.ts";
    import LeaderBoard from "$lib/components/LeaderBoard.svelte";

    let scores;

    onMount(async () => {
        scores = await scoreStore;
    });

</script>

{#if scores}
    <LeaderBoard bind:scores={$scores}></LeaderBoard>
{:else}
    <p>Loading leaderboard...</p>
{/if}