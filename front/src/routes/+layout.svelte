<script>
    import github_mark from '$lib/assets/github-mark-white.svg';
    import twitter_mark from '$lib/assets/twitter-mark-white.svg';
    import leaderboard from '$lib/assets/leaderboard.svg';
    import dice from '$lib/assets/dice.svg';
    import about from '$lib/assets/about.svg';
    import logo from '$lib/assets/logo2.png'

    import {onMount} from "svelte";
    import SplashScreen from "$lib/components/SplashScreen.svelte";

    onMount(async () => {
        /*window.$(".menu-collapsed").click(function () {
            window.$(this).toggleClass("menu-expanded");
        });*/
    });

</script>

<SplashScreen/>-

<div class="menu">

    <div class="burger"></div>

    <nav>
        <a href="/">
            <img src={leaderboard}
                height="30"
                width="30"
                alt="leaderboard"
            >
            <div>Leaderboard</div>
        </a>

        <a href="/play">
            <img src={dice}
                height="30"
                width="30"
                alt="dice"
            >
            <div>Play</div>
        </a>

        <a href="/about">
            <img src={about}
                height="30"
                width="30"
                alt="about"
            >
            <div>About</div>
        </a>
    </nav>

</div>

<div class="container">
        <slot></slot>
</div>

<footer>

    <img src="{logo}"
         height="175px"
         width="auto"
         alt="Logo">

    <!--<a href="https://github.com/naaturel">
        <img
                src={github_mark}
                height="30"
                width="30"
                alt="Github mark"/>
    </a>

    <a href="https://twitter.com/naaturel_">
        <img
                src="{twitter_mark}"
                height="30"
                width="30"
                alt="Twitter mark"/>
    </a>-->
</footer>