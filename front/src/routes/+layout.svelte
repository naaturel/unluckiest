<script>
    import github_mark from '$lib/assets/github-mark-white.svg';
    import twitter_mark from '$lib/assets/twitter-mark-white.svg';
    import leaderboard from '$lib/assets/leaderboard.svg';
    import dice from '$lib/assets/dice.svg';
    import about from '$lib/assets/about.svg';
    import logo from '$lib/assets/logo.svg'
    import arrow from '$lib/assets/arrow.svg'

    import {onMount} from "svelte";
    import SplashScreen from "$lib/components/SplashScreen.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";

    onMount(async () => {
        window.$(".expander").click(function () {
            window.$(".menu").toggleClass("menu-collapsed menu-expanded");
        });
    });

</script>

<SplashScreen/>

<div class="menu menu-collapsed">

        <a class="expander">
            <img class="item-hint" src={arrow}
                 height="30"
                 width="30"
                 alt="arrow">
        </a>

        <a href="/" class="menu-item">
            <img class="item-hint" src={leaderboard}
                 height="30"
                 width="30"
                 alt="leaderboard">
            <div class="item-title">Revue nécrologique</div>
        </a>

        <a href="/play" class="menu-item">
            <img class="item-hint" src={dice}
                 height="30"
                 width="30"
                 alt="dice">
            <div class="item-title">Tenter sa chance</div>
        </a>

        <a href="/about" class="menu-item">
            <img class="item-hint" src={about}
                 height="30"
                 width="30"
                 alt="about"
            >
            <div class="item-title">A propos</div>
        </a>

</div>

<div class="container">
        <slot></slot>
</div>

<footer>

    <img class="footer-logo" src="{logo}" alt="Logo">

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
