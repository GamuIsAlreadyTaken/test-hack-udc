<script lang="ts" context="module">
    import type { GenericFormFieldSchema } from "$lib/types/api-schema";
    import type {
        Format,
        MaxLength,
        MinLength,
    } from "$lib/types/form-validations";
    import type { Writable } from "svelte/store";

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
    export let value: Writable<string>;

    let minlength = (data.field_validations as MinLength).min_length;
    let maxlength = (data.field_validations as MaxLength).max_length;
    let pattern = (data.field_validations as Format).format;
</script>

<label for={data.field_name}>
    {data.field_description}<br />
    <div class="prueba">
        <input
            name={data.field_id}
            type="text"
            bind:value={$value}
            {minlength}
            {maxlength}
            {pattern}
            required={data.field_required}
            readonly={data.field_readonly}
        />
    </div>
</label>

<style>
    label{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 10vh;
      flex-direction: column;
      margin-bottom: 5px;
    }

    @keyframes gradient {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 100% 0;
        }
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    div {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        border-radius: 2px;
        &:after {
            content: "";
            position: absolute;
            left: 0px;
            right: 0px;
            bottom: 0px;
            z-index: 999;
            height: 4px;
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;
            background-position: 0% 0%;
            background: linear-gradient(
                to right,
                #b294ff,
                #57e6e6,
                #feffb8,
                #57e6e6,
                #b294ff,
                #57e6e6
            );
            background-size: 500% auto;
            animation: gradient 3s linear infinite;
        }
    }

    input {
        flex-grow: 1;
        font-size: 1.8rem;
        line-height: 2.4rem;
        vertical-align: middle;
        background-color: rgba(57, 63, 84, 0.8);
    }
</style>

