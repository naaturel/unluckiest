<script>
    import bomb from '$lib/assets/bomb.svg';
    import {Game, GameState} from "$lib/models/game.ts";

    let scores;
    let game = new Game();

    $: isRunning = game.state === GameState.Running;
    $: hasBeenPlayed = game.state === GameState.Played;

    async function roll(){
        game.state = GameState.Running;
        await game.play()
        await new Promise(r => setTimeout(r, 3000));
        game.state = GameState.Played;
    }

</script>

<div class="container">

    {#if isRunning}
        <div class="loader">
            <svg class="circular-loader" viewBox="0 0 30 30">
                <circle class="loader-path" cx="15" cy="15" r="5" fill="none" stroke="#4b0611" stroke-width="0.7" />
            </svg>
            <div class="info">Massacre en cours...</div>
        </div>
    {/if}

    {#if !isRunning && !hasBeenPlayed}
        <h1>Evaluez vos chances de survie</h1>
        <div class="player">
            <input class="name" placeholder="Nom de la victime..." bind:value={game.name}/>

            <img class="roll" src={bomb} on:click={roll} alt="Bomb"/>

        </div>
    {/if}

    {#if hasBeenPlayed}
        <div class="result">Vous avez {game.result}% de chance de mourir</div>
    {/if}

</div>

<style>

    .container, .player
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .player
    {
        gap: 2vh;
    }

    .name, .roll
    {
        min-width: 210px;
        width: 22vmax;
    }

    .name
    {
        color: #424242;
        background-color: #fcdcab;

        height: 6vh;
        min-height: 50px;

        border: 3px solid #4b0611;
        border-radius: 10px;
        box-shadow: 5px 5px #4b0611;

        text-align: left;

        margin: 1.5vh;
        padding-left: 30px;
        padding-right: 30px;

        outline: none;
    }

    .result
    {
        font-size: 24px;
    }

    .circular-loader
    {
        stroke-dasharray: 100, 125;
        stroke-dashoffset: -5;
        animation: rotate 2s ease-in-out infinite;
        stroke-linecap: round;
    }

    .loader-path {
        width: 25vw;
        height: 25vh;
    }

    .name:hover, .roll:hover{
        transform: scale(1.1);
    }

    @keyframes rotate {
        to{transform: rotate(360deg)}
    }

</style>