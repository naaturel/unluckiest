<script>
    import {scoreStore} from "$lib/stores/scoreStore.ts"
    import LeaderBoard from "$lib/components/LeaderBoard.svelte";

</script>

<button on:click={() => {scoreStore.reset()}}>Clear leaderboard</button>

<LeaderBoard bind:scores={$scoreStore}></LeaderBoard>