<script>
    import LeaderBoard from "$lib/components/LeaderBoard.svelte";
    import {scoreStore} from "$lib/stores/scoreStore.ts";
    import {onMount} from "svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";

    let { data } = $props()

    onMount(async () => {
        scoreStore.load(data.leaderboard)
    })


</script>

<PageTitle>Qui va y passer ?</PageTitle>
<LeaderBoard bind:scores={$scoreStore}></LeaderBoard>