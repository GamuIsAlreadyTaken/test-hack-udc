<script lang="ts">
    import type { Writable } from "svelte/store";
    import DependentElement from "$lib/components/dependent-element.svelte";
    import { getFieldType, processors } from "$lib/inputs/module";
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";

    export let data: GenericFormFieldSchema;
    export let dependees: Record<string, Writable<any>>;
    export let readOnly: boolean = false;

    const component = processors[getFieldType(data)];
</script>

{#if data.field_dependent_on}
    <DependentElement
        {readOnly}
        {component}
        {data}
        dependantValue={dependees[data.field_dependent_on.field_id]}
        bind:value={dependees[data.field_id]}
    />
{:else}
    <svelte:component
        this={component}
        {data}
        {readOnly}
        bind:value={dependees[data.field_id]}
    />
{/if}
