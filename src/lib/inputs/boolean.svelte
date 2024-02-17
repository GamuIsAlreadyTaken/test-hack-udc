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

<div>
    <label for={data.field_name}>
        <input
            class="check"
            name={data.field_id}
            type="checkbox"
            bind:checked={$value}
            required={data.field_required}
            disabled={data.field_readonly}
        />
        {data.field_description}
    </label>
</div>

<style>
    div {
        display: flex;
        align-items: center;
    }
    label {
        display: flex;
        align-items: left;
        margin-top: 5px;
        margin-left: 0px;
        margin-bottom: 5px;
    }
</style>
