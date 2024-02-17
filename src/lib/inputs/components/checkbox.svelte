<script lang="ts" context="module">
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";
    import type { NoValidation } from "$lib/types/form-validations";

    export type CheckboxFormFieldSchema = GenericFormFieldSchema & {
        field_type: "checkbox";
        field_default_value?: boolean;
        field_validations?: NoValidation;
    };
</script>

<script lang="ts">
    export let data: CheckboxFormFieldSchema;
</script>

{#if data.field_readonly}
    <input
        class="check"
        type="checkbox"
        bind:checked={data.field_default_value}
        disabled
    />
{:else}
    <input
        class="check"
        type="checkbox"
        bind:checked={data.field_default_value}
    />
{/if}

<label>{data.field_description}</label>
