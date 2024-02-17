<script lang="ts" context="module">
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";
    import type { NoValidation } from "$lib/types/form-validations";
    import { getContext } from "svelte";
    import { writable, type Writable } from "svelte/store";

    export type CheckboxFormFieldSchema = GenericFormFieldSchema & {
        field_type: "boolean";
        field_default_value?: boolean;
        field_validations?: NoValidation;
    };
</script>

<script lang="ts">
    export let data: CheckboxFormFieldSchema;
    export let value: Writable<boolean> = writable(data.field_default_value);
    let readOnly = getContext<boolean>("readOnly") ?? false;
</script>

<div>
    <label for={data.field_name}
        >{data.field_description}{data.field_required ? "*" : ""}</label
    >
    <input
        class="check"
        name={data.field_id}
        type="checkbox"
        bind:checked={$value}
        required={data.field_required}
        disabled={data.field_readonly || readOnly}
    />
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        align-items: baseline;
    }
    label {
        text-align: left;
        width: 280px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>
