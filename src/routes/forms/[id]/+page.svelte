<script lang="ts">
    import { getWritables, groupElements } from "$lib/inputs/module.js";
    import FormBuilder from "$lib/components/form-builder.svelte";
    import type { PageData, ActionData } from "./$types";

    export let data: PageData;
    export let form: ActionData;

    let schema = data;
    let values = getWritables(data.form_fields ?? []);
    let groups = groupElements(data.form_fields ?? []);
</script>

<FormBuilder {schema} {values} groupedFields={groups} route={"?/postForm"} />
{#if form?.message}
    <p>Error al enviar los datos, {form.message}</p>
{/if}
