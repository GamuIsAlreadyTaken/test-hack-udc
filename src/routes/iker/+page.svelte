<script lang="ts">
	import Text from '$lib/inputs/components/text.svelte';
import type { TextFormFieldSchema } from '$lib/inputs/components/text.svelte';
  
    let data: TextFormFieldSchema = {
        field_description: "",
        field_id: 3,
        field_type: "text",
        field_order: 4,
        field_name: "",
        field_readonly: false,
        field_default_value: "hol",
        field_validations:{
            max_length:5,
            min_length:3,
            format:"[a-zA-Z0-9]+"
        }
    };


</script>

<Text {data}></Text>