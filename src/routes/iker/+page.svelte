<script lang="ts">
    import type { NumberFormFieldSchema } from '$lib/inputs/components/number.svelte';
    import Number from '$lib/inputs/components/number.svelte';
  
    let data: NumberFormFieldSchema = {
        field_description: "Descripcion:",
        field_id: "3",
        field_type: "number",
        field_order: 4,
        field_name: "",
        field_readonly: false,
        field_default_value: 2,
        field_validations:{
            max_value: 4,

            min_value: 1           
        }
    };


</script>

<Number {data}></Number>