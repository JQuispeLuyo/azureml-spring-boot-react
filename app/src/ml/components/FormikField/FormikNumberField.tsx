import React from 'react'
import { TextField } from '@material-ui/core'
import { Field, ErrorMessage } from 'formik'
import { NumberFormatCustom } from './custom/NumberFormatCustom';

interface FormikFieldProps {
    name: string,
    label: string,
    error: any,
    touched: any,
}

export const FormikNumberField: React.FC<FormikFieldProps> = ({ touched, error, name, label }) => {
    return (
        <div>
            <Field
                fullWidth
                autoComplete="off"
                required
                label={label}
                name={name}
                variant="outlined"
                margin="normal"
                size="small"
                as={TextField}
                error={error && touched ? true : false}
                helperText={<ErrorMessage name={name}/>}
                InputProps={{
                    inputComponent: NumberFormatCustom as any,
                }} />
        </div>
    )
}
