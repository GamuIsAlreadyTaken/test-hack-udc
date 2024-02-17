<script lang="ts">
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";
    import { derived, type Writable } from "svelte/store";

    export let component: ConstructorOfATypedSvelteComponent;
    export let data: GenericFormFieldSchema;
    export let value: any;

    export let dependantValue: Writable<any>;

    const show = derived(
        [dependantValue],
        ([dependantValue]) =>
            data.field_dependent_on == undefined ||
            dependantValue == data.field_dependent_on.field_value,
    );
</script>

{#if $show}
    <svelte:component this={component} key={component} {data} bind:value />
{/if}
