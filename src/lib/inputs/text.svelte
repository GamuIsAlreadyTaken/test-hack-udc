<script lang="ts" context="module">
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";
    import type {
        Format,
        MaxLength,
        MinLength,
    } from "$lib/types/form-validations";

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

    let minlength = (data.field_validations as MinLength).min_length;
    let maxlength = (data.field_validations as MaxLength).max_length;
    let pattern = (data.field_validations as Format).format;
</script>

<label for={data.field_name}>
    {data.field_description}<br />
    <div class="prueba">
      <input
      class="textbox"
      name={data.field_id}
      type="text"
      bind:value={data.field_default_value}
      {minlength}
      {maxlength}
      {pattern}
      readonly={data.field_readonly}
      />
    </div>
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
      background-color: rgba(57, 63, 84, 0.8);
      margin-top: 2px;
      margin-bottom: 10px;
    }
</style>

