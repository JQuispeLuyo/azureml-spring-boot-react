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
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

//Material Icons
import CloseIcon from '@material-ui/icons/Close';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

//Config
import { BASE_URL } from './../../config/config';

//CustomHooks
import { useFetchMl } from '../hooks/useFetchMl';
import { useSnackbar } from '../hooks/useSnackbar';

import { FormikNumberField } from './FormikField/FormikNumberField';
import FormikSelect from './FormikField/FormikSelectField';

import makeStyles from './makeStylesCustom';

import { Inputdata } from '../models/Ml';



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

export const IndexForm: React.FC = () => {

    const classes = useStyles();

    const initialValues: Inputdata = {
        ingresos: 0,
        ahorros: 0,
        hijos: 0,
        trabajo: 0,
        financiar: 0,
        plataforma: "A"
    };

    //API
    const { state, callApi } = useFetchMl(`${BASE_URL}`);
    const { loading, data } = state;

    //Snackbar
    const { open, handleClose, handleOpen } = useSnackbar();

    //Submit
    const handleSubmit = (values: any) => {
        handleClose();

        const platform = values.plataforma === "A" ? "azureml" : "bigml";
        console.log(platform, values);

        callApi(`/api/${platform}/predict`, values, () => handleOpen());
    }

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                onClose={handleClose}
                message={data}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />


            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={SignupSchema}
            >
                {({ values, dirty, isValid, errors, touched, setFieldValue }) => {
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
                                            {({ field, form, meta }: FieldProps) => (
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
        </div>
    );
}
