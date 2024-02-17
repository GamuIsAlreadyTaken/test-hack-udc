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


<label for={data.field_name}>
    {data.field_description}
    <input
    class="check"
    name={data.field_id}
    type="checkbox"
    bind:checked={data.field_default_value}
    disabled={data.field_readonly}
/>
</label>


