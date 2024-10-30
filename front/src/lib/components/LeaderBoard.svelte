<script>

    export let scores = []

</script>

<ul class="leaderboard">

    {#if scores.length === 0}
        No scores for now...
    {/if}

    {#each scores as score, i}
        {#if i <= 100}
            <li class="item">
                <div class="position">{i+1}</div>
                <div class="name"> {score.owner} </div>
                <div class="score"> {score.value}%</div>
            </li>
        {/if}
    {/each}

</ul>

<style>

    .leaderboard
    {
        display: flex;
        flex-direction: column;

        width: 75vw;
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
        outline: none;
    }

    .item:hover
    {
        background-color: #dd3328;
        transform: scale(1.075);
    }

    .position, .name, .score
    {
        flex-basis: 0;
    }

    .name, .score
    {
        padding-left: 7px;
        border-left: 1px solid #A1674A;
    }

    .position
    {
        flex-grow: 5;
        margin-right: 10px;
        text-align: center;
    }

    .name
    {
        word-break: break-word;
        flex-grow: 100;
    }

    .score
    {
        flex-grow: 10;
        text-align: center;
    }

    @media screen and (min-width: 601px) {
        .leaderboard { width: 55vw; }
    }

</style>