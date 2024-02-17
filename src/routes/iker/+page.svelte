<script lang="ts">
    import type { TextFormFieldSchema } from "$lib/inputs/processors/text.processor";
    import Text from "$lib/inputs/components/text.svelte";
  
    let data: TextFormFieldSchema = {
        field_description: "patata",
        field_id: 3,
        field_type: "text",
        field_order: 4,
        field_name: "",
        field_readonly: false,
        field_default_value: "hola",
        

        field_validations:{
            max_length:40,
            min_length:1
        }
    };


</script>

<Text {data}>
</Text>
