import React from 'react'
import { Formik, Form } from 'formik';
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
import HealingIcon from '@material-ui/icons/Healing';

//Config
import { BASE_URL } from './../../config/config';

//CustomHooks
import { useFetch } from './../../hooks/useFetch';
import { useSnackbar } from './../../hooks/useSnackbar';

import { FormikNumberField } from '../../components/FormikField/NumberField';
import { FormikDecimalNumberField } from '../../components/FormikField/DecimalNumberField'; 
import { FormikThreeDecimalNumberField } from '../../components/FormikField/ThreeDecimalNumber';

import makeStyles from './makeStylesCustom';

import { Input1 } from '../../models/DiabetesInterface';


const useStyles = makeStyles

const SignupSchema = Yup.object().shape({
    embarazos: Yup.number()
        .moreThan(-1)
        .required('Required'),
    glucosa: Yup.number()
        .moreThan(0)
        .required('Required'),
    presion_sanguinea: Yup.number()
        .moreThan(0)
        .required('Required'),
    pliegue_cutaneo: Yup.number()
        .moreThan(0)
        .required('Required'),
    insulina: Yup.number()
        .moreThan(0)
        .required('Required'),
    indice_de_masa_corporal: Yup.number()
        .moreThan(0)
        .required('Required'),
    pedigri_diabetes: Yup.number()
        .moreThan(0)
        .required('Required'),
    edad: Yup.number()
        .moreThan(0)
        .required('Required'),
});

export const IndexForm: React.FC = () => {

    const classes = useStyles();

    const initialValues: Input1 = {
        embarazos: 0,
        glucosa: 0,
        presion_sanguinea: 0,
        pliegue_cutaneo: 0,
        insulina: 0,
        indice_de_masa_corporal: 0,
        pedigri_diabetes: 0,
        edad: 0,
    };

    //API
    const {state, callApi } = useFetch(`${BASE_URL}/api/diabetes/predict`, initialValues);
    const { loading, data } = state;

    //Snackbar
    const { open, handleClose, handleOpen} = useSnackbar();

    //Submit
    const handleSubmit = (values: any) => { 
        handleClose();
        callApi( values ,() => handleOpen());
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
                {({ dirty, isValid, errors, touched }) => {
                    return (
                        <Container component="main" maxWidth="sm">
                            <CssBaseline />
                            <div className={classes.paper}>

                                <Avatar className={classes.avatar}>
                                    <HealingIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    ¿Tienes Diabetes?
                                </Typography>
                                
                                <Form className={classes.form}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={4}>
                                            <FormikNumberField
                                                touched={touched.embarazos}
                                                error={errors.embarazos}
                                                name="embarazos"
                                                label="Embarazos" />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <FormikNumberField
                                                touched={touched.edad}
                                                error={errors.edad}
                                                name="edad"
                                                label="Edad" />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <FormikNumberField
                                                touched={touched.glucosa}
                                                error={errors.glucosa}
                                                name="glucosa"
                                                label="Glucosa" />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <FormikDecimalNumberField
                                                touched={touched.indice_de_masa_corporal}
                                                error={errors.indice_de_masa_corporal}
                                                name="indice_de_masa_corporal"
                                                label="I. Masa Coporal" />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <FormikNumberField
                                                touched={touched.insulina}
                                                error={errors.insulina}
                                                name="insulina"
                                                label="Insulina" />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <FormikThreeDecimalNumberField
                                                touched={touched.pedigri_diabetes}
                                                error={errors.pedigri_diabetes}
                                                name="pedigri_diabetes"
                                                label="Pedigri Diabetes" />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <FormikNumberField
                                                touched={touched.pliegue_cutaneo}
                                                error={errors.pliegue_cutaneo}
                                                name="pliegue_cutaneo"
                                                label="Pliegue Cutaneo" />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <FormikNumberField
                                                touched={touched.presion_sanguinea}
                                                error={errors.presion_sanguinea}
                                                name="presion_sanguinea"
                                                label="Presion Sanguinea" />
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
                                </Form>
                            </div>
                        </Container>
                    )
                }}
            </Formik>
        </div>
    );
}
