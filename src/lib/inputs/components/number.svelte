<script lang="ts" context="module">
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";
    import type { MaxValue, MinValue } from "$lib/types/form-validations";

    export type NumberFormFieldSchema = GenericFormFieldSchema & {
        field_type: "number";
        field_default_value?: number;
        field_validations?: MinValue | MaxValue | (MinValue & MaxValue);
    };
</script>

<script lang="ts">
    export let data: NumberFormFieldSchema;

    let min = (data.field_validations as MinValue).min_value;
    let max = (data.field_validations as MaxValue).max_value;
</script>

{#if data.field_readonly}
    <input
        class="numero"
        type="number"
        bind:value={data.field_default_value}
        {min}
        {max}
        readonly
    />
{:else}
    <input
        class="numero"
        type="number"
        bind:value={data.field_default_value}
        {min}
        {max}
    />
{/if}

<label>{data.field_description}</label>
