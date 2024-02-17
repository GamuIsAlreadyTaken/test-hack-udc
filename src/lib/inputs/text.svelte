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

@keyframes gradient { 
  0%{background-position:0 0}
  100%{background-position:100% 0}
}
    .prueba {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 2px;
  padding: 1.4rem 2rem 1.6rem;
  background: rgba(57, 63, 84, 0.8);
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(to right, #B294FF, #57E6E6, #FEFFB8, #57E6E6, #B294FF, #57E6E6);
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }
}

.textbox {
  flex-grow: 1;
  color: BFD2FF;
  font-size: 1.8rem;
  line-height: 2.4rem;
  vertical-align: middle;
  &::-webkit-input-placeholder {
    color: #7881A1;
  }
}


</style>



