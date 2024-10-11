<script>
	import '../app.css';
    import github_mark from '$lib/assets/github-mark-white.svg';
    import twitter_mark from '$lib/assets/twitter-mark-white.svg';
    import NavLink from "$lib/components/NavLink.svelte";
</script>

<nav>
    <NavLink --background-color="#f1ecec" link="/">Leaderboard</NavLink>
    <NavLink --background-color="#f1ecec" link="/play">Play</NavLink>
    <NavLink --background-color="#f1ecec" link="/about">About</NavLink>
</nav>

<hr/>

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