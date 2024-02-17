<script lang="ts" context="module">
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";
    import type {
        AllowMultipleOptions,
        Options,
    } from "$lib/types/form-validations";
    import { writable, type Writable } from "svelte/store";

    export type SelectFormFieldSchema = GenericFormFieldSchema & {
        field_type: "select";
        field_default_value?: string; // TODO si está vacio, es el primero, chequear si da igual
        field_validations?: Options | (AllowMultipleOptions & Options);
    };
</script>

<script lang="ts">
    export let data: SelectFormFieldSchema;
    export let value: Writable<string> = writable(data.field_default_value);
    let opciones = data.field_validations?.options ?? [];
</script>

<label for={data.field_name}>
    {data.field_description}
    <select
        class="select"
        name={data.field_id}
        bind:value={$value}
        disabled={data.field_readonly}
    >
        {#each opciones as opt}
            <option value={opt}>{opt}</option>
        {/each}
    </select>
</label>

<style>
    label{
        align-items: center;
        justify-content: center;
        height: 10vh;
        flex-direction: column;
        margin-bottom: 5px;
        display: flex;
    }
</style>
