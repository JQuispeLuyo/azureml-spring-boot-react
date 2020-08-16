import React from 'react'

import { Formik, Form, Field, FieldProps } from 'formik';
import * as Yup from 'yup';

//Material Components
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

//Icons
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

// Components
import { FormikNumberField } from './../../FormikField/NumberField';
import { FormikSelect } from './../../FormikField/SelectField';

import makeStyles from './makeStylesCustom';
import { Inputdata } from '../../../models/Ml';


const useStyles = makeStyles

const SignupSchema = Yup.object().shape({
    ingresos: Yup.number()
        .moreThan(-1)
        .required('Required'),
    ahorros: Yup.number()
        .moreThan(-1)
        .required('Required'),
    hijos: Yup.number()
        .moreThan(-1)
        .required('Required'),
    trabajo: Yup.number()
        .moreThan(-1)
        .required('Required'),
    financiar: Yup.number()
        .moreThan(-1)
        .required('Required'),
});

interface FormikSelectItem {
    label: string;
    value: number;
}

const positionItems: FormikSelectItem[] = [
    {
        label: "Sin Empleo",
        value: 0
    },
    {
        label: "Autonomo - freelance",
        value: 1
    },
    {
        label: "Empleado",
        value: 2
    },
    {
        label: "Empresario",
        value: 3
    }
];



const MlForm = ({loading, handleSubmit}: any) => {

    const initialValues: Inputdata = {
        ingresos: 0,
        ahorros: 0,
        hijos: 0,
        trabajo: 0,
        financiar: 0,
        plataforma: "A"
    };
    

    const classes = useStyles();


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={SignupSchema}
        >
            {({dirty, isValid, errors, touched }) => {
                return (
                    <Container component="main" maxWidth="sm">
                        <CssBaseline />
                        <div className={classes.paper}>

                            <Avatar className={classes.avatar}>
                                <AttachMoneyIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                ¿Comprar o alquilar una casa?
                                </Typography>

                            <Form className={classes.form}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <FormikNumberField
                                            touched={touched.ingresos}
                                            error={errors.ingresos}
                                            name="ingresos"
                                            label="Ingresos" />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <FormikNumberField
                                            touched={touched.ahorros}
                                            error={errors.ahorros}
                                            name="ahorros"
                                            label="Ahorros" />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <FormikNumberField
                                            touched={touched.hijos}
                                            error={errors.hijos}
                                            name="hijos"
                                            label="Hijos" />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <FormikSelect
                                            name="trabajo"
                                            label="Trabajo"
                                            items={positionItems}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <FormikNumberField
                                            touched={touched.financiar}
                                            error={errors.financiar}
                                            name="financiar"
                                            label="Costo de Casa" />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    {
                                        loading ?
                                            "Loading..."
                                            :
                                            <Button
                                                disabled={!dirty || !isValid}
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                            >
                                                Consultar
                                                </Button>
                                    }
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Field name="plataforma">
                                        {({ field}: FieldProps) => (
                                            <>
                                                <div className="radio-item">
                                                    <input
                                                        {...field}
                                                        id="male"
                                                        value="A"
                                                        checked={field.value === 'A'}
                                                        name="plataforma"
                                                        type="radio"
                                                    />
                                                    <label htmlFor="male">azure</label>
                                                </div>

                                                <div className="radio-item">
                                                    <input
                                                        {...field}
                                                        id="female"
                                                        value="B"
                                                        name="plataforma"
                                                        checked={field.value === 'B'}
                                                        type="radio"
                                                    />
                                                    <label htmlFor="female">bigml</label>
                                                </div>
                                            </>
                                        )}
                                    </Field>
                                </Grid>
                            </Form>
                        </div>
                    </Container>
                )
            }}
        </Formik>
    )
}

export default MlForm
