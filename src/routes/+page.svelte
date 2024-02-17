<script lang="ts">
	import Date from './../lib/inputs/components/date.svelte';
    import type { DateFormFieldSchema } from '$lib/inputs/processors/date.processor';
	
	let dataP: DateFormFieldSchema ={
		field_description: "",

		field_id: 3,

		field_type: "date",

		field_order: 4,

		field_name: "date",

		field_readonly:true,
		
		field_default_value:null
	}
	</script>

<h1>Reto de disashop</h1>

<Date data = {dataP}></Date>
