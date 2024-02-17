<script lang="ts">
    import { goto } from "$app/navigation";
    import FormPreview from "$lib/components/form-preview.svelte";
    import FormTypePreview, {
        type FormRequestEvent,
    } from "$lib/components/form-type-preview.svelte";
</script>

<div>
    <h1>Reto para</h1>
    <img
        src="https://www.disashop.com/es/wp-content/uploads/sites/2/2022/10/logo_header_v3.png"
        alt="DisaShop Logo"
    />
</div>

<section>
    <p>
        Generación de formularios arbitrarios a partir de una definición en json
    </p>
    <!-- Pedir un formularios distintos -->
    <!-- Cojer la lista de todos los posibles forms y mostrarla para elegir cual quieres -->
    <!-- al clicar uno de ellos se carga el formulario para ser rellenado -->
    <FormTypePreview
        on:formRequest={(event) => goto("/forms/" + event.detail.id)}
    />

    <!-- Al rellenarlo, mostrar una preview en modo no editar, tipo revision de datos -->
    <!-- Quizá guardar en local una copia de los datos que se subieron para hacer un `enviados` -->
    <FormPreview on:formRequest={(event) => goto("/done/" + event.detail.id)} />
</section>

<!-- Una sección de enviados, remarcar si estan en local o pillados de la api -->
<!-- Hacer un hidratador, GET a /forms y que saque que formType es, lo carge y rellene los datos 
    en modo vista solo -->

<style>
    h1 {
        text-align: center;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
    }
    section {
        max-width: 600px;
        align-self: center;
        position: relative;
        left: 50%;
        translate: -50%;
    }
</style>
