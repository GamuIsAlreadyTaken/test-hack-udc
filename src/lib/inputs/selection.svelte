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
        required={data.field_required}
        disabled={data.field_readonly}
    >
        {#each opciones as opt}
            <option value={opt}>{opt}</option>
        {/each}
    </select>
</label>