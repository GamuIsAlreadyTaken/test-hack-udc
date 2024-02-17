<script lang="ts">
    import FormBuilder from "$lib/components/form-builder.svelte";
    import FormTypePreview, {
        type FormRequestEvent,
    } from "$lib/components/form-type-preview.svelte";
    let modal = false;
    let form_id: string;
    function launchForm(event: CustomEvent<FormRequestEvent["formRequest"]>) {
        modal = true;
        form_id = event.detail.id;
    }
</script>

<h1>Reto de disashop</h1>
<p>Generación de formularios arbitrarios a partir de una definición en json</p>

<!-- Pedir un formularios distintos -->
<!-- Cojer la lista de todos los posibles forms y mostrarla para elegir cual quieres -->
<!-- al clicar uno de ellos se carga el formulario para ser rellenado -->
<FormTypePreview on:formRequest={launchForm} />
{#if modal}
    <button class="back" on:click={() => (modal = false)}>
        <div class="container">
            <FormBuilder {form_id} />
        </div>
    </button>
{/if}

<!-- Al rellenarlo, mostrar una preview en modo no editar, tipo revision de datos -->
<!-- Quizá guardar en local una copia de los datos que se subieron para hacer un `enviados` -->

<!-- Una sección de enviados, remarcar si estan en local o pillados de la api -->
<!-- Hacer un hidratador, GET a /forms y que saque que formType es, lo carge y rellene los datos 
en modo vista solo -->

<style>
    .back {
        position: absolute;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: #7777;
        z-index: 1;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        position: relative;
        background-color: #7777;
        width: 500px;
    }
</style>
