<script lang="ts">
    import Chargeicon from "$lib/assets/chargeicon.svelte";
    import FormBuilder from "$lib/components/form-builder.svelte";
    import FormHidrater from "$lib/components/form-hidrater.svelte";
    import FormPreview from "$lib/components/form-preview.svelte";
    import FormTypePreview, {
        type FormRequestEvent,
    } from "$lib/components/form-type-preview.svelte";
    import { getFormTypeProcessedData } from "$lib/inputs/module";
    let modal = false;
    let hidrate = false;
    let id: string;
    function launchForm(event: CustomEvent<FormRequestEvent["formRequest"]>) {
        modal = true;
        id = event.detail.id;
    }
    function hidrateForm(event: CustomEvent<FormRequestEvent["formRequest"]>) {
        modal = true;
        hidrate = true;
        id = event.detail.id;
    }
</script>

<h1>Reto de disashop</h1>
<p>Generación de formularios arbitrarios a partir de una definición en json</p>

<!-- Pedir un formularios distintos -->
<!-- Cojer la lista de todos los posibles forms y mostrarla para elegir cual quieres -->
<!-- al clicar uno de ellos se carga el formulario para ser rellenado -->
<!-- <FormTypePreview on:formRequest={launchForm} /> -->

<!-- Al rellenarlo, mostrar una preview en modo no editar, tipo revision de datos -->
<!-- Quizá guardar en local una copia de los datos que se subieron para hacer un `enviados` -->
<!-- <FormPreview on:formRequest={hidrateForm} /> -->
<!-- Una sección de enviados, remarcar si estan en local o pillados de la api -->
<!-- Hacer un hidratador, GET a /forms y que saque que formType es, lo carge y rellene los datos 
    en modo vista solo -->
<!-- {#if modal}
    <button class="back" on:click|self={() => (modal = false)}>
        <div class="container">
            {#if hidrate}
                <FormHidrater form_id={id} />
            {:else}
                {#await getFormTypeProcessedData(id)}
                    <Chargeicon />
                {:then [schema, groups, values]}
                    <FormBuilder {schema} groupedFields={groups} {values} />
                {/await}
            {/if}
        </div>
    </button>
{/if} -->

<style>
    .back {
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        background-color: #7777;
    }

    .container {
        position: relative;
        background-color: var(--background);
        width: 500px;
        height: 100vh;
        overflow-y: scroll;
    }
</style>
