<script>

import PageTitle from "$lib/components/PageTitle.svelte";
</script>
<PageTitle>A propos</PageTitle>

<div class="container">

    <div class="about">
        <p>
            La Revue Secrète est un projet de création éditoriale en série limitée, singulier et créatif permettant
            aux étudiant·e·s de l’option Design Graphique du Bachelier en Techniques Graphiques de la HEPL de se familiariser
            à des concepts propres au monde de l’édition et plus particulièrement, de la microédition, mais également
            à des techniques d’impression non conventionnelles et/ou manuelles artistiques, dans un contexte professionnel.
        </p>

        <p>
            Cette publication réalisée par des étudiant·e·s pour des étudiant·e·s, est entièrement pensée et façonnée par
            leurs soins aussi bien dans sa forme graphique que pour ses contenus rédactionnels : sa forme dépasse le simple
            cahier classique pour offrir un ensemble d’objets édités et rassemblés dans une boite « secrète » !
        </p>

        <hr/>

    </div>

    <div class="credit">
        <div class="section">
            <h2>Design</h2>
            <p>Arwen Hirsoux</p>
        </div>

        <div class="section">
            <h2>Développement</h2>
            <p>Laurent Crema</p>
        </div>
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
        overflow: scroll;
        overflow-x: hidden;
    }

    .container::-webkit-scrollbar {
        display: none;
    }

    .section
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>