<script lang="ts">
    import type { TextFormFieldSchema } from '$lib/inputs/processors/text.processor';
	import Text from './../lib/inputs/components/text.svelte';
	import type { CheckboxFormFieldSchema } from './../lib/inputs/processors/checkbox.processor';
	
	let data: TextFormFieldSchema ={
		field_description: "patata",

		field_id: 3,

		field_type: "text",

		field_order: 4,

		field_name: "",

		field_readonly:false,
		
		field_default_value:"hola"
	}


</script>
<h1>Reto de disashop</h1>

<Text {data}></Text>

