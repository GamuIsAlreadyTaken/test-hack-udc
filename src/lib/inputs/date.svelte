<script lang="ts" context="module">
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";
    import type { NoValidation } from "$lib/types/form-validations";
    import { writable, type Writable } from "svelte/store";

    export type DateFormFieldSchema = GenericFormFieldSchema & {
        field_type: "date";
        field_default_value?: Date;
        field_validations?: NoValidation;
    };
</script>

<script lang="ts">
    export let data: DateFormFieldSchema;
    export let value: Writable<Date> = writable(data.field_default_value);
</script>

<label for={data.field_name}>
    {data.field_description}<br/>
    <input
        class="fecha"
        name={data.field_id}
        type="date"
        bind:value={$value}
        required={data.field_required}
        readonly={data.field_readonly}
    />
</label>


<style>
    label{
      display: flex;
      align-items: left;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 5px;
    }
    input {
      text-align: left;
      flex-grow: 1;
      font-size: 1rem;
      line-height: 1rem;
      vertical-align: center;
      background-color: rgba(255, 255, 255, 0.556);
      margin-top: 2px;
      margin-bottom: 10px;
    }

</style>