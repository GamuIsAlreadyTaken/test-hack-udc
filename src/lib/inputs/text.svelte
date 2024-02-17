<script lang="ts" context="module">
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";
    import type {
        Format,
        MaxLength,
        MinLength,
    } from "$lib/types/form-validations";
    import { writable, type Writable } from "svelte/store";

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
    export let value: Writable<string> = writable(data.field_default_value);
    export let readOnly: boolean = false;

    let minlength = (data.field_validations as MinLength)?.min_length;
    let maxlength = (data.field_validations as MaxLength)?.max_length;
    let pattern = (data.field_validations as Format)?.format;
</script>

<div>
    <label for={data.field_name}
        >{data.field_description}{data.field_required ? "*" : ""}</label
    >
    {#if $value.length < 20}
        <input
            class="textbox"
            name={data.field_id}
            type="text"
            bind:value={$value}
            {minlength}
            {maxlength}
            {pattern}
            readonly={data.field_readonly || readOnly}
            size={$value.length}
        />
        {$value.length}
    {:else}
        <input
            class="textbox"
            name={data.field_id}
            type="textarea"
            bind:value={$value}
            {minlength}
            {maxlength}
            {pattern}
            readonly={data.field_readonly || readOnly}
        />
    {/if}
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
        max-width: 100%;
        text-wrap: balance;
        resize: vertical;
    }
</style>
