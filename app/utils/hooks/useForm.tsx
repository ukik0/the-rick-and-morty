import {useState} from 'react';

interface UseForm<Value> {
    initialValues: Value;
    onSubmit?: (values: Value) => void;
}
type FieldError = string | null;
type Form<Values> = {
    values: Values;
    errors?: {
        [Key in keyof Values]?: FieldError;
    };
};

export const useForm = <Values,>({initialValues}: UseForm<Values>) => {
    const [form, setForm] = useState<Form<Values>>({ values: initialValues });

    const setFieldValue = <Field extends keyof Values>(field: Field, value: Values[Field]) => {
        setForm({ ...form, values: { ...form.values, [field]: value } });
    };

    const setFieldError = <Field extends keyof Values>(field: Field, error: string) => {
        setForm({ ...form, errors: { ...form.errors, [field]: error } });
    };

    return {
        ...form,
        setFieldValue,
        setFieldError,
    };
};
