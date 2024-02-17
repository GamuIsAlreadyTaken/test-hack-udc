<script lang="ts">
    import type { Writable } from "svelte/store";
    import DependentElement from "./dependent-element.svelte";
    import { getFieldType, processors } from "./inputs/module";
    import type { GenericFormFieldSchema } from "./types/api-schema";

    export let data: GenericFormFieldSchema;
    export let dependees: Record<string, Writable<any>>;

    const component = processors[getFieldType(data)];
</script>

{#if data.field_dependent_on}
    <DependentElement
        {component}
        {data}
        dependantValue={dependees[data.field_dependent_on.field_id]}
        bind:value={dependees[data.field_id]}
    />
{:else}
    <svelte:component
        this={component}
        {data}
        bind:value={dependees[data.field_id]}
    />
{/if}
