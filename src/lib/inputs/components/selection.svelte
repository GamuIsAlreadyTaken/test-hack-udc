<script lang="ts" context="module">
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";
    import type { AllowMultipleOptions, Options } from "$lib/types/form-validations";

    export type SelectFormFieldSchema = GenericFormFieldSchema & {
        field_type: "select";
        field_default_value?: string; // TODO si está vacio, es el primero, chequear si da igual
        field_validations?: Options | (AllowMultipleOptions & Options);
    };
</script>

<script lang="ts">
    export let data: SelectFormFieldSchema;
    let opciones = data.field_validations?.options ?? [];
</script>

{#if data.field_readonly}
    <select name="select" bind:value={data.field_default_value} disabled>
        {#each opciones as opt}
            <option value={opt}>{opt}</option>
        {/each}
    </select>
{:else}
    <select name="select" bind:value={data.field_default_value}>
        {#each opciones as opt}
            <option value={opt}>{opt}</option>
        {/each}
    </select>
{/if}

<label>{data.field_description}</label>
