<script>
    import { onMount } from 'svelte';
    import { scoreStore } from "$lib/stores/scoreStore.ts";
    import LeaderBoard from "$lib/components/LeaderBoard.svelte";

    onMount(async () => {
        await scoreStore.loadData();
    });

</script>

<LeaderBoard bind:scores={$scoreStore}></LeaderBoard>

