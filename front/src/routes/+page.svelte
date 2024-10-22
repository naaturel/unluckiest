<script>
    import {scoreStore} from "$lib/stores/scoreStore.ts"
    import LeaderBoard from "$lib/components/LeaderBoard.svelte";

</script>

<LeaderBoard bind:scores={$scoreStore}></LeaderBoard>