<script>
    import LeaderBoard from "$lib/components/LeaderBoard.svelte";
    import {scoreStore} from "$lib/stores/scoreStore.ts";
    import {onMount} from "svelte";

    let { data } = $props()

    onMount(async () => {
        scoreStore.load(data.leaderboard)
    })

</script>

<h1>Phrase d'accroche</h1>
<LeaderBoard bind:scores={$scoreStore}></LeaderBoard>

<style>

    h1
    {
        color: #4b0611;
        text-decoration: underline;
    }

</style>