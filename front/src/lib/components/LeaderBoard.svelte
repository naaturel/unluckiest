<script>

    export let scores = []

</script>

<ul class="leaderboard">

    {#if scores.length === 0}
        No scores for now...
    {/if}

    {#each scores as score, i}
        <li class="item">
            <div class="name"> {score.owner} </div><div class="score"> {score.value} pts.</div>
        </li>
    {/each}

</ul>

<style>

    .leaderboard
    {
        display: flex;
        flex-direction: column;

        width: 60vw;
        height: 65vh;

        padding: 0 2vw 2vw 2vw;
        overflow: scroll;
        overflow-x: hidden;
    }

    .leaderboard::-webkit-scrollbar {
        display: none;
    }

    .item
    {
        display: flex;
        justify-content: space-around;
        padding: 1.25vh;
        margin: 1.5vh;
        background-color: #fcdcab;
        border: 3px solid #4b0611;
        border-radius: 10px;
        box-shadow: 5px 5px #4b0611;
        text-align: left;
        outline: none;
    }

    div.item
    {
        width: 55vw;
    }

    .item:hover
    {
        background-color: #dd3328;
        transform: scale(1.075);
    }

    .name, .score
    {
        color: #4b0611;
        margin-left: 3vh;
    }

    .name
    {
        flex-grow: 100;
        border-right: 1px solid #A1674A;
    }

    .score
    {
        flex-grow: 20;
        text-align: center;
    }

</style>