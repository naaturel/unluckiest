<script>

    import {scoreStore} from "$lib/stores/scoreStore.ts";
    import bomb from '$lib/assets/bomb.svg';

    let scores;

    let playerName = undefined;
    let range = 100;
    let result = 0;

    async function roll() {

        toggleLoading();
        result = getRandomNumber();
        await new Promise(r => setTimeout(r, 3000));

        toggleLoading();
        window.$(".result").text(`Result : ${result}/${range}`)

        await scoreStore.add(playerName, result)
    }

    function getRandomNumber(){
        let unit = Math.floor(Math.random() * (range + 1));
        let dec = Math.floor(Math.random() * (range));
        return unit + (dec/100);
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
        <input class="name" placeholder="Nom de la victime..." bind:value={playerName}/>

        <img class="roll" src={bomb} on:click={roll} alt="Bomb"/>

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
        min-width: 210px;
        width: 22vmax;
        height: 5vh;
        background-color: #fcdcab;
        border: 3px solid #4b0611;
        border-radius: 10px;
        box-shadow: 5px 5px #4b0611;
        text-align: left;
        padding-left: 30px;
        padding-right: 30px;
        outline: none;
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

    .name::placeholder
    {
    }

    @keyframes rotate {
        to{transform: rotate(360deg)}
    }

</style>