<script lang="ts" context="module">
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";
    import type { MaxValue, MinValue } from "$lib/types/form-validations";
    import { getContext } from "svelte";
    import { writable, type Writable } from "svelte/store";

    export type NumberFormFieldSchema = GenericFormFieldSchema & {
        field_type: "number";
        field_default_value?: number;
        field_validations?: MinValue | MaxValue | (MinValue & MaxValue);
    };
</script>

<script lang="ts">
    export let data: NumberFormFieldSchema;
    export let value: Writable<number> = writable(data.field_default_value);
    let readOnly = getContext<boolean>("readOnly") ?? false;

    let min = (data.field_validations as MinValue).min_value;
    let max = (data.field_validations as MaxValue).max_value;
</script>

<div>
    <label for={data.field_name}>
        {data.field_description}{data.field_required ? '*' : ''}
    </label>
    <input
        class="numero"
        name={data.field_id}
        type="number"
        bind:value={$value}
        {min}
        {max}
        required={data.field_required}
        readonly={data.field_readonly || readOnly}
    />
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: baseline;
    }
    label {
        margin-bottom: 5px;
    }
    input {
        border-radius: 5px;
        text-align: left;
        font-size: 1rem;
        line-height: 1rem;
        background-color: rgba(255, 255, 255, 0.556);
        margin-top: 2px;
        margin-bottom: 10px;
    }
</style>
