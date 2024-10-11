<script>

    export let link = ""

</script>

<a class="bordered" href={link}>
    <slot/>
</a>

<style>

    a
    {
        color: #303633;
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 1vh 2vh;

        width: var(--width, fit-content);
        height: var(--height, 3vh);

        text-decoration: var(--text-decoration, none);
        margin-top: var(--margin-top, 0vh);

    }

    a:hover
    {
        transform: scale(1.1);
        color: #f1ecec;
    }


</style>