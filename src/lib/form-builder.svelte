<script lang="ts">
    import type { SvelteComponent } from "svelte";
    import type {
        FormFieldType,
        FormSchema,
        GenericFormFieldSchema,
    } from "./api-schema";

    import data from "./targets.json";

    import Checkbox from "./inputs/components/checkbox.svelte";
    import Number from "./inputs/components/number.svelte";
    import Text from "./inputs/components/text.svelte";
    import Date from "./inputs/components/date.svelte";
    import Selection from "./inputs/components/selection.svelte";
    import { svelte } from "@sveltejs/vite-plugin-svelte";

    const url =
        "https://0fcd2366-7de6-464f-b389-b9a5533ed9af.mock.pstmn.io/api/v1/formTypes";

    // const req = fetch(url, { method: "GET" });
    const fields = data.form_fields as GenericFormFieldSchema[];

    const processors: Record<
        FormFieldType,
        ConstructorOfATypedSvelteComponent
    > = {
        checkbox: Checkbox,
        number: Number,
        text: Text,
        date: Date,
        select: Selection,
    };

    function getFieldType(field: GenericFormFieldSchema): FormFieldType {
        return field.field_type;
    }
</script>

{#each fields as field}
    {@const type = getFieldType(field)}
    <svelte:component this={processors[type]}></svelte:component>
{/each}
