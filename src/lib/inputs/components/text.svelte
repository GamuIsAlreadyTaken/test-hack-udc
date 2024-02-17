<script lang="ts" context="module">
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";
    import type {
        Format,
        MaxLength,
        MinLength,
    } from "$lib/types/form-validations";

    export type TextFormFieldSchema = GenericFormFieldSchema & {
        field_type: "text";
        field_default_value?: string;
        field_validations?:
            | MinLength
            | MaxLength
            | (MinLength & MaxLength)
            | Format;
    };
</script>

<script lang="ts">
    export let data: TextFormFieldSchema;
</script>

<label>{data.field_description}<br /></label>

{#if data.field_readonly}
    <input
        class="textbox"
        type="text"
        bind:value={data.field_default_value}
        readonly
    />
{:else}
    <input class="textbox" type="text" bind:value={data.field_default_value} />
{/if}
