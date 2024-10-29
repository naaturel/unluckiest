<script>
    import logo from '$lib/assets/logo.svg'

</script>

    <div class="splash" >
        <img class="footer-logo" src={logo} alt="Splashscreen">
    </div>

<style>

    .splash
    {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 2;
        width: 100vw;
        height: 100vh;
        background-color: #4b0611;
        animation: fadeout 2.5s forwards;
    }

    .footer-logo
    {
        width: auto;
        height: 25%;
    }

    @keyframes fadeout {
        0%, 45%  { opacity: 1; }
        100% {
            opacity: 0;
            display: none;
        }
    }

    @keyframes slide {
        0%  { translate: 0; }
        100% {
            translate: 100%;
            display: none;
        }
    }

</style>