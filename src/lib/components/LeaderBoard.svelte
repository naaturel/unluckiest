<script>

    export let scores = []

</script>

<ul class="leaderboard">

    {#each scores as score, i}
        <li class="item">
            <div class="name"><img src="" alt=""/> {score.playerName} </div><div class="score"> {score.value} pts.</div>
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

    li
    {
        display: flex;
        justify-content: space-around;
        padding: 1.25vh;
        margin: 1.5vh;
        border: 2px solid #A1674A;
        border-radius: 10px;
        background-color: #f1ecec;
        box-shadow: 0 0 10px #343232;
    }

    li:hover
    {
        transform: scale(1.075);
        background-color: #F5F5F5;
    }

    .name, .score
    {
        color: black;
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