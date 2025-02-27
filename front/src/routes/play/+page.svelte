<script>
    import bomb from '$lib/assets/bomb.svg';
    import {Game, GameState} from "$lib/models/game.ts";
    import {scoreStore} from "$lib/stores/scoreStore.ts";
    import PageTitle from "$lib/components/PageTitle.svelte";
    import { goto } from '$app/navigation';

    let game = new Game();

    $: isRunning = game.state === GameState.Running;
    $: hasBeenPlayed = game.state === GameState.Played;

    let timer;

    const debounce = inputValue => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            try{
                sanitize(inputValue)
                validate(inputValue)
                game.playerName = inputValue;
            } catch (e){
                displayError(e.message)
            }
        }, 150);
    }

    async function roll(){

        try{
            game.sanitizeName();
            validate(game.playerName)
            game.state = GameState.Running;
            game.play()
            await scoreStore.add(game.playerName, game.result)
            await new Promise(r => setTimeout(r, 3000));
            game.state = GameState.Played;

            redirectAfterPlaying();

        } catch (e){
            displayError(e.message)
        }
    }

    function sanitize(data){
        return data
            .trim()
            .replace(/\s+/g, ' ')
            .replace(/[^a-zA-Z0-9\- ]/g, '');;
    }

    function validate(data){
        if(!data) throw new Error("Veuillez indiquer votre nom.");
        $scoreStore.forEach(v => {
            if(v.owner && v.owner.toLowerCase() === data.toLowerCase()) throw new Error("Cette personne a déjà été évaluée.");
        })
    }

    function displayError(message){
        window.$(".player").attr('tooltip', message)
        setTimeout(() => {
            clearError();
        }, 3000)
    }

    function clearError(){
        window.$('.player').removeAttr('tooltip');
    }

    function redirectAfterPlaying(){
        setTimeout(() => {
            goto('/');
        }, 3000)
    }

</script>

<PageTitle>Évaluez vos chances de survie</PageTitle>
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

        <div class="player"
             tooltip=""
             flow="up">
            <input class="name" placeholder="Nom de la victime..."
                   bind:value={game.playerName}
                   on:input={({ target: { value } }) => debounce(value)}
                   on:blur={({ target: { value } }) => debounce(value)}
            />
            <img class="roll" src={bomb} on:click={roll} alt="Bomb"/>
        </div>

    {/if}

    {#if hasBeenPlayed}
        <div class="result">Vous avez {game.result}% de chance de mourir</div>
    {/if}

</div>

<style>

    .container
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .player
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

        margin: 0 1.5vh 1.5vh 1.5vh;
        padding-left: 30px;
        padding-right: 30px;

        outline: none;
    }

    .result
    {
        font-size: 24px;
    }

    .result
    {
        border-radius: 7px;
        background: rgb(252, 220, 171, 0.6);
        width: 85%;
        height: fit-content;
        padding: 25px;
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

    /*=============TOOLTIP=============*/

    /* START TOOLTIP STYLES */
    [tooltip] {
        position: relative; /* opinion 1 */
    }

    /* Applies to all tooltips */
    [tooltip]::before,
    [tooltip]::after {
        text-transform: none; /* opinion 2 */

        line-height: 1;
        user-select: none;
        pointer-events: none;
        position: absolute;
        display: none;
        opacity: 0;
    }
    [tooltip]::before {
        content: '';
        border: 5px solid transparent; /* opinion 4 */
        z-index: 1001; /* absurdity 1 */
    }
    [tooltip]::after {
        content: attr(tooltip); /* magic! */

        /* most of the rest of this is opinion */
        text-align: center;

        /*
          Let the content set the size of the tooltips
          but this will also keep them from being obnoxious
          */
        min-width: 3em;
        max-width: 21em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 1ch 1.5ch;
        border-radius: .3ch;
        box-shadow: 0 1em 2em -.5em rgba(0, 0, 0, 0.35);
        background: #333;
        color: #fff;
        z-index: 1000; /* absurdity 2 */
    }

    /* Make the tooltips respond to hover */
    [tooltip]::before,
    [tooltip]::after {
        display: block;
    }

    /* don't show empty tooltips */
    [tooltip='']::before,
    [tooltip='']::after {
        display: none !important;
    }

    /* FLOW: UP */
    [tooltip]:not([flow])::before,
    [tooltip][flow^="up"]::before {
        bottom: 100%;
        border-bottom-width: 0;
        border-top-color: #333;
    }
    [tooltip]:not([flow])::after,
    [tooltip][flow^="up"]::after {
        bottom: calc(100% + 5px);
    }
    [tooltip]:not([flow])::before,
    [tooltip]:not([flow])::after,
    [tooltip][flow^="up"]::before,
    [tooltip][flow^="up"]::after {
        left: 50%;
        transform: translate(-50%, -.5em);
    }

    /* KEYFRAMES */
    @keyframes tooltips-vert {
        to {
            opacity: .9;
            transform: translate(-50%, 0);
        }
    }

    /* FX All The Things */
    [tooltip]:not([flow])::before,
    [tooltip]:not([flow])::after,
    [tooltip][flow^="up"]::before,
    [tooltip][flow^="up"]::after {
        animation: tooltips-vert 300ms ease-out forwards;
    }

</style>