import React from 'react'
import { TextField } from '@material-ui/core'
import { Field, ErrorMessage } from 'formik'
import { NumberFormatDecimalCustom } from './custom/NumberFormatCustom';

interface FormikFieldProps {
    name: string,
    label: string,
    error: any,
    touched: any,
}

export const FormikDecimalNumberField: React.FC<FormikFieldProps> = ({ touched, error, name, label}) => {
    return (
        <div>
            <Field
                autoComplete="off"
                required
                id="embarazos"
                label={label}
                name={name}
                variant="outlined"
                margin="normal"
                size="small"
                as={TextField}
                error={error && touched ? true : false}
                helperText={<ErrorMessage name={name}/>}
                InputProps={{
                    inputComponent: NumberFormatDecimalCustom as any,
                }} />
        </div>
    )
}
