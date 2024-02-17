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



<label for={data.field_name}>
    <input
    class="numero"
    name={data.field_id}
    type="number"
    bind:value={data.field_default_value}
    {min}
    {max}
    readonly={data.field_readonly}
/>
    {data.field_description}
</label>
