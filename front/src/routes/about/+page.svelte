<script>

import PageTitle from "$lib/components/PageTitle.svelte";
</script>
<PageTitle>A propos</PageTitle>

<div class="container">
    <div class="section">
        <h2>Design</h2>
        <p>Arwen Hirsoux</p>
    </div>

    <hr/>

    <div class="section">
        <h2>Développement</h2>
        <p>Laurent Crema</p>
    </div>

</div>


<style>

    hr
    {
        width: 75%;
    }

    .container
    {
        border-radius: 7px;
        background: rgb(252, 220, 171, 0.85);
        width: 85%;
        height: fit-content;
        padding: 25px;
    }

    .section
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }



</style>