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
<!--
    {#if scores.length > 10}
        <div class="paging">

            <svg class="paging-arrow" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 256 512" fill="#fcdcab" width="50" height="50">
                <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/>
            </svg>

            <svg class="paging-arrow" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 256 512" fill="#fcdcab" width="50" height="50">
                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/>
            </svg>

        </div>
    {/if}
-->
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
        color: #4b0611;
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

</style>