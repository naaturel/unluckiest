<ul class="leaderboard">

    <li class="item">
        <div class="name"><img src="" alt=""/> Player 1</div><div class="score">0 pts.</div>
    </li>

    <li class="item">
        <div class="name"><img src="" alt=""/> Player 2</div><div class="score">1 pts.</div>
    </li>

    <li class="item">
        <div class="name"><img src="" alt=""/> Player 3</div><div class="score">2 pts.</div>
    </li>

    <li class="item">
        <div class="name"><img src="" alt=""/> Player 4</div><div class="score">3 pts.</div>
    </li>

    <li class="item">
        <div class="name"><img src="" alt=""/> Player 5</div><div class="score">4 pts.</div>
    </li>

    <li class="item">
        <div class="name"><img src="" alt=""/> Player 6</div><div class="score">5 pts.</div>
    </li>

    <li class="item">
        <div class="name"><img src="" alt=""/> Player 7</div><div class="score">6 pts.</div>
    </li>

    <li class="item">
        <div class="name"><img src="" alt=""/> Player 8</div><div class="score">7 pts.</div>
    </li>

    <li class="item">
        <div class="name"><img src="" alt=""/> Player 9</div><div class="score">8 pts.</div>
    </li>

    <li class="item">
        <div class="name"><img src="" alt=""/> Player 10</div><div class="score">9 pts.</div>
    </li>

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
        color: #424242;
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