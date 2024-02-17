<script lang="ts">
	import Number from './../lib/inputs/components/number.svelte';
    import type { NumberFormFieldSchema } from '$lib/inputs/processors/number.processor';
	
	let dataP: NumberFormFieldSchema ={
		field_description: "",

		field_id: 3,

		field_type: "number",

		field_order: 4,

		field_name: "date",

		field_readonly:false,
		
		field_default_value:2,


		field_validations:{
			max_value:5,


			min_value:1
		}
	}
	
	</script>

<h1>Reto de disashop</h1>

<Number data = {dataP}> </Number>