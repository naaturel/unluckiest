<script>

    import github_mark from '$lib/assets/github-mark-white.svg';
    import twitter_mark from '$lib/assets/twitter-mark-white.svg';

    import NavLink from "$lib/components/NavLink.svelte";
    import {onMount} from "svelte";

    onMount(async () => {
        const jQuery = await import('jquery');
        const $ = jQuery.default;

        window.$ = $;
        window.jQuery = $;

        window.$(".menu-collapsed").click(function () {
            window.$(this).toggleClass("menu-expanded");
        });
    });

</script>

<div class="menu-collapsed">
    <div class="burger"></div>
    <nav>

        <a href="/">Leaderboard</a>
        <a href="/play">Play</a>
        <a href="/about">About</a>

    </nav>
</div>

<div class="container">
        <slot></slot>
</div>

<footer>
    <a href="https://github.com/naaturel">
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
    </a>
</footer>