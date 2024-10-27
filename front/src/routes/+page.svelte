<script>
    import LeaderBoard from "$lib/components/LeaderBoard.svelte";
    import {scoreStore} from "$lib/stores/scoreStore.ts";
    import {onMount} from "svelte";

    let { data } = $props()

    onMount(async () => {
        scoreStore.load(data.leaderboard)
    } )

</script>

<LeaderBoard bind:scores={$scoreStore}></LeaderBoard>

