<script lang="ts">
    import FormBuilder from "$lib/components/form-builder.svelte";
    import type { PageData, ActionData } from "./$types";

    export let data: PageData;
    export let form: ActionData;

    let [schema, groups, values] = data;
</script>

<FormBuilder {schema} {values} groupedFields={groups} />

{#if form?.failStatus}
    <p>Error al enviar los datos, codigo de error {form.failStatus}</p>
{/if}
