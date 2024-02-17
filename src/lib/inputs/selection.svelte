<script lang="ts" context="module">
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";
    import type {
        AllowMultipleOptions,
        Options,
    } from "$lib/types/form-validations";
    import { getContext } from "svelte";
    import { writable, type Writable } from "svelte/store";

    export type SelectFormFieldSchema = GenericFormFieldSchema & {
        field_type: "select";
        field_default_value?: string;
        field_validations?: Options | (AllowMultipleOptions & Options);
    };
</script>

<script lang="ts">
    export let data: SelectFormFieldSchema;
    export let value: Writable<string> = writable(data.field_default_value);
    let opciones = data.field_validations?.options ?? [];
    let readOnly = getContext<boolean>('readOnly') ?? false
    let allowMultiple: boolean = (
        data.field_validations as AllowMultipleOptions
    )?.allow_multiple_options;
</script>

<div>
    <label for={data.field_name}>
        {data.field_description}{data.field_required ? "*" : ""}
    </label>
    {#if allowMultiple}
        <select
            class="select"
            name={data.field_id}
            bind:value={$value}
            required={data.field_required}
            disabled={data.field_readonly || readOnly}
            multiple
        >
            {#each opciones as opt}
                <option value={opt} selected={opt == data.field_default_value}
                    >{opt}</option
                >
            {/each}
        </select>
    {:else}
        <select
            class="select"
            name={data.field_id}
            bind:value={$value}
            required={data.field_required}
            disabled={data.field_readonly || readOnly}
        >
            {#each opciones as opt}
                <option value={opt} selected={opt == data.field_default_value}>
                    {opt}
                </option>
            {/each}
        </select>
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
    select {
        border-radius: 5px;
        text-align: left;
        font-size: 1rem;
        line-height: 1rem;
        background-color: rgba(255, 255, 255, 0.556);
        margin-top: 2px;
        margin-bottom: 10px;
    }
</style>
