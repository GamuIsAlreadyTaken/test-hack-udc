<script lang="ts" context="module">
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";
    import type { NoValidation } from "$lib/types/form-validations";
    import { readable, writable, type Writable } from "svelte/store";

    export type CheckboxFormFieldSchema = GenericFormFieldSchema & {
        field_type: "boolean";
        field_default_value?: boolean;
        field_validations?: NoValidation;
    };
</script>

<script lang="ts">
    export let data: CheckboxFormFieldSchema;
    export let value: Writable<boolean> = writable(data.field_default_value);
</script>

<label for={data.field_name}>
    {data.field_description}
    <input
        class="check"
        name={data.field_id}
        type="checkbox"
        bind:checked={$value}
        disabled={data.field_readonly}
    />
</label>
