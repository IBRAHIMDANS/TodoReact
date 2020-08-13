import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';

export default function AddItem() {
    const { addTodo } = useContext(AppContext);
    return (
        <Formik
            initialValues={{ items: '' }}
            onSubmit={(values, actions) => {
                // console.log({ values, actions });
                // alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
                actions.resetForm({});
                addTodo(values.items);

            }}
            render={() => (
                <FormComponent>
                    <Field
                        name="items"
                        render={({ field, form, meta }) => (
                            <>
                                <TextField id="outlined-basic" label="Add todo" {...field} variant="outlined"/>
                                {meta.touched && meta.error && meta.error}
                            </>
                        )}
                    />
                </FormComponent>
            )}
        />);
}
const FormComponent = styled(Form)`
display: flex;
margin-top: 1em;
flex-direction: column;
`;
