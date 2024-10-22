<script>

    import {onMount} from "svelte";
    import {scoreStore} from "$lib/stores/scoreStore.ts";

    let playerName = undefined;
    let range = 100;
    let result = 0;

    onMount(async () => {
        const jQuery = await import('jquery');
        const $ = jQuery.default;

        window.$ = $;
        window.jQuery = $;
    });

    async function roll() {

        toggleLoading();

        result = Math.floor(Math.random() * (range + 1));

        await new Promise(r => setTimeout(r, 3000));

        toggleLoading();
        window.$(".result").text(`Result : ${result}/${range}`)

        scoreStore.add(playerName, result)
    }

    function toggleLoading(){
        window.$(".loader").toggleClass("disabled");
        window.$(".player").toggleClass("disabled");
    }

</script>

<div class="container">
    <div class="loader disabled">
        <svg class="circular-loader" viewBox="0 0 30 30">
            <circle class="loader-path" cx="15" cy="15" r="5" fill="none" stroke="#f1ecec" stroke-width="0.7" />
        </svg>
        <div class="info">Rolling a random numbers within range 0-{range}...</div>
    </div>

    <div class="player">
        <input class="name" placeholder="Your name" bind:value={playerName}/>
        <button on:click={roll}>Let's roll !</button>
        <div class="result"></div>
    </div>
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

    .disabled
    {
        display: none;
    }

    .player
    {
        gap: 2vh;
    }

    .name
    {
        width: 17vw;
        height: 6vh;
        border: 2px solid #A1674A;
        border-radius: 10px;
        box-shadow: 0 0 10px #343232;
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

    button
    {
        color: black;
        width: 18vw;
        height: 15vh;
        border-radius: 10px;
        background-color: #f1ecec;
        border: 2px solid #A1674A;
        box-shadow: 0 0 10px #343232;
    }

    .name:hover, button:hover{
        transform: scale(1.1);
    }

    @keyframes rotate {
        to{transform: rotate(360deg)}
    }

</style>