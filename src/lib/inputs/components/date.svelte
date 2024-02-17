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

<label for={data.field_name}>
    {data.field_description}
    <input
        class="fecha"
        name={data.field_id}
        type="date"
        bind:value={data.field_default_value}
        readonly={data.field_readonly}
    />
</label>
