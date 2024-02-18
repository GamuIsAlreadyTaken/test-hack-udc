<script lang="ts">
    import FormHidrator from "$lib/components/form-hidrator.svelte";
    import { getWritables, groupElements } from "$lib/inputs/module.js";
    import FormBuilder from "$lib/components/form-builder.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    let { parsedData, schema } = data;

    let values = getWritables(schema.form_fields ?? []);
    let groups = groupElements(schema.form_fields ?? []);

</script>

<svelte:head>
    <title>{schema.form_type_name}</title>
</svelte:head>

{#if parsedData}
    <FormHidrator data={parsedData} {values} />
{/if}

<FormBuilder
    {schema}
    readOnly
    {values}
    groupedFields={groups}
    route={"?/postForm"}
/>
