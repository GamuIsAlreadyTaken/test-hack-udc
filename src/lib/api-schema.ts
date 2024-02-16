
export type FormSchema = {
    form_type_id: number,
    form_type_name: string,
    form_type_description: string,
    title_field: string,
    form_fields: GenericFormFieldSchema[],
    form_groups: GroupSchema[],
}

export type GroupSchema = {
    group_id: number,
    group_name: string,
    group_description: string,
    group_order: number,
}
/** Field Schema
 with generic `field_type` and 
 without `field_default_value` and `field_validations`
 */
export type GenericFormFieldSchema = {
    field_id: number,
    field_name: string,
    field_type: FormFieldType,
    field_order: number,
    field_required?: boolean,
    field_description: string,
    field_readonly?: boolean,
    field_group?: string,
    field_dependent_on?: FormFieldDependencies

    field_default_value?: never,
    field_validations?: never
}

export type FormFieldDependencies = {
    field_id: number,
    field_value: any
}

export type FormFieldType =
    'text' |
    'number' |
    'date' |
    'select' |
    'checkbox'

