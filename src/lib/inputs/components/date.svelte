<script lang="ts" context="module">
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";
    import type { NoValidation } from "$lib/types/form-validations";

    export type DateFormFieldSchema = GenericFormFieldSchema & {
        field_type: "date";
        field_default_value?: Date;
        field_validations?: NoValidation;
    };
</script>

<script lang="ts">
    export let data: DateFormFieldSchema;
</script>

{#if data.field_readonly}
    <input
        class="fecha"
        type="date"
        bind:value={data.field_default_value}
        readonly
    />
{:else}
    <input class="fecha" type="date" bind:value={data.field_default_value} />
{/if}

<label>{data.field_description}</label>
