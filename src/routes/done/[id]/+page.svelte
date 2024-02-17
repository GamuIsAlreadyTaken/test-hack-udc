<script lang="ts">
    import FormHidrator from "$lib/components/form-hidrator.svelte";
    import { getWritables, groupElements } from "$lib/inputs/module.js";
    import FormBuilder from "$lib/components/form-builder.svelte";
    import type { PageData } from "./$types";
    import { setContext, getContext } from "svelte";
    import Chargeicon from "$lib/assets/chargeicon.svelte";
    import { writable, type Writable } from "svelte/store";

    export let data: PageData;

    let { parsedData, schema } = data;

    let values = getWritables(schema.form_fields ?? []);
    let groups = groupElements(schema.form_fields ?? []);

    let loading = writable<boolean>(true);
    setContext("loading", loading);
</script>

{#if $loading}
    <Chargeicon />
{/if}

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
