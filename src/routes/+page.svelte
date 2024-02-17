<script lang="ts">
	import type{ SelectFormFieldSchema } from './../lib/inputs/processors/selection.processor.ts';
    import type { TextFormFieldSchema } from '$lib/inputs/processors/text.processor';
	import Text from './../lib/inputs/components/text.svelte';
	import type { CheckboxFormFieldSchema } from './../lib/inputs/processors/checkbox.processor';
    import Selection from '$lib/inputs/components/selection.svelte';
	
	let data: TextFormFieldSchema ={
		field_description: "patata",

		field_id: 3,

		field_type: "text",

		field_order: 4,

		field_name: "",

		field_readonly:false,
		
		field_default_value:"hola"


	}

	let data_sel: SelectFormFieldSchema={
		field_description: "patata",

		field_id: 3,

		field_type: "select",

		field_order: 4,

		field_name: "",

		field_readonly:false,
		
		field_default_value:"hola",

		field_validations:{
			options:[
				"Africa",
				"ASia",
				"Europa",
			]
		}
	}


</script>

<h1>Reto de disashop</h1>

<!-- <Text {data}></Text> -->
<Selection data={data_sel}></Selection>

