<script lang="ts">
	import { SelectFormFieldSchema } from './../lib/inputs/processors/selection.processor.ts';
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
<<<<<<< HEAD
=======
		
		field_default_value:"hola"
	}

	let data_sel: SelectFormFieldSchema={
		field_description: "patata",

		field_id: 3,

		field_type: "text",

		field_order: 4,

		field_name: "",

		field_readonly:false,
>>>>>>> 11b584eb353ab94e5bb6e26b9f2d09968b4d9f9a
		
		field_default_value:"hola"
	}


</script>
<h1>Reto de disashop</h1>

<Text {data}></Text>

