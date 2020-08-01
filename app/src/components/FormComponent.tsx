import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import HealingIcon from '@material-ui/icons/Healing';
import Typography from '@material-ui/core/Typography';
import makeStyles from './makeStylesCustom';
import Container from '@material-ui/core/Container';

//Alert
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import { useForm } from "react-hook-form";
import { Input1 } from './DiabetesInterface';

import { NumberFormatCustom, NumberFormatDecimalCustom } from './FormikField/custom/NumberFormatCustom';

const useStyles = makeStyles

export default function FormComponent() {

    const classes = useStyles();

    const { register, errors, handleSubmit } = useForm<Input1>();

    const [output, setOutput] = useState("");

    const [open, setOpen] = React.useState(false);

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const [loading, setLoading] = useState(false);

    const onSubmit = (data: Input1) => {
        setLoading(true);
        let payload: Object = {
            inputs: {
                input1: [data],
                globalParameters: {}
            }
        }
        console.log(payload);

        fetch('http://localhost:8080/api/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Create Success: ", data);
                setLoading(false);
                setOutput(`Usted ${data.results.output1[0].scored_labels} tiene diabetes`);
                setOpen(true);

            })
            .catch((error) => {
                console.error("ERROR: ", error);
                setLoading(false);
                setOutput("ubo un error")
                setOpen(true);
            })
    };

    console.log("Renderiza", errors);

    return (
        <Container component="main" maxWidth="sm">
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                onClose={handleClose}
                message={output}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <HealingIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    ¿Tienes Diabetes?
                </Typography>

                <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                id="embarazos"
                                label="Embarazos"
                                name="embarazos"
                                variant="outlined"
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                autoFocus
                                error={errors.embarazos ? true : false}
                                helperText={errors.embarazos ? errors.embarazos.message : ""}
                                inputRef={register({    required: "Campo requerido", 
                                                        max: { value: 999, message: "Numero muy grande" },
                                                        maxLength: {value: 3, message:"leasdas"}
                                                    })}
                                InputProps={{
                                    inputComponent: NumberFormatCustom as any,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="glucosa"
                                label="Glucosa"
                                name="glucosa"
                                autoComplete="glucosa"
                                error={errors.glucosa ? true : false}
                                helperText={errors.glucosa ? errors.glucosa.message : ""}
                                inputRef={register({ required: "Campo requerido", maxLength: 10 })}
                                InputProps={{
                                    inputComponent: NumberFormatCustom as any,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="presion_sanguinea"
                                label="Presion Sanguinea"
                                name="presion_sanguinea"
                                autoComplete="presion_sanguinea"
                                error={errors.presion_sanguinea ? true : false}
                                helperText={errors.presion_sanguinea ? errors.presion_sanguinea.message : ""}
                                inputRef={register({ required: "Campo requerido", max: { value: 999, message: "Numero muy grande" } })}
                                InputProps={{
                                    inputComponent: NumberFormatCustom as any,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="pliegue_cutaneo"
                                label="Pliegue Cutaneo"
                                name="pliegue_cutaneo"
                                autoComplete="pliegue_cutaneo"
                                error={errors.pliegue_cutaneo ? true : false}
                                helperText={errors.pliegue_cutaneo ? errors.pliegue_cutaneo.message : ""}
                                inputRef={register({ required: "Campo requerido", max: { value: 999, message: "Numero muy grande" } })}
                                InputProps={{
                                    inputComponent: NumberFormatCustom as any,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="insulina"
                                label="Insulina"
                                name="insulina"
                                autoComplete="insulina"
                                error={errors.insulina ? true : false}
                                helperText={errors.insulina ? errors.insulina.message : ""}
                                inputRef={register({ required: "Campo requerido", max: { value: 999, message: "Numero muy grande" } })}
                                InputProps={{
                                    inputComponent: NumberFormatCustom as any,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="indice_de_masa_corporal"
                                label="I. Masa Corporal"
                                name="indice_de_masa_corporal"
                                autoComplete="indice_de_masa_corporal"
                                error={errors.indice_de_masa_corporal ? true : false}
                                helperText={errors.indice_de_masa_corporal ? errors.indice_de_masa_corporal.message : ""}
                                inputRef={register({ required: "Campo requerido", max: { value: 999, message: "Numero muy grande" } })}
                                InputProps={{
                                    inputComponent: NumberFormatDecimalCustom as any,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="pedigri_diabetes"
                                label="Pedigri Diabetes"
                                name="pedigri_diabetes"
                                autoComplete="pedigri_diabetes"
                                error={errors.pedigri_diabetes ? true : false}
                                helperText={errors.pedigri_diabetes ? errors.pedigri_diabetes.message : ""}
                                inputRef={register({ required: "Campo requerido", max: { value: 999, message: "Numero muy grande" } })}
                                InputProps={{
                                    inputComponent: NumberFormatDecimalCustom as any,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="edad"
                                label="Edad"
                                name="edad"
                                autoComplete="edad"
                                error={errors.edad ? true : false}
                                helperText={errors.edad ? errors.edad.message : ""}
                                inputRef={register({ required: "Campo requerido", max: { value: 999, message: "Numero muy grande" } })}
                                InputProps={{
                                    inputComponent: NumberFormatCustom as any,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            {
                                loading ?
                                    "Loading..."
                                    :
                                    <Button
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
                    </Grid>
                </form>
            </div>
        </Container>
    );
}