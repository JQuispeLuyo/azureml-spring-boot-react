import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import HealingIcon from '@material-ui/icons/Healing';
import Typography from '@material-ui/core/Typography';
import makeStyles from './makeStylesCustom';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import moment from 'moment'

//Alert
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { KeyboardDatePicker } from "@material-ui/pickers";

import { useForm, Controller } from "react-hook-form";
import { Input1 } from './DiabetesInterface';

const useStyles = makeStyles

export default function FormComponent() {

    const classes = useStyles();

    const { register, errors, handleSubmit, control } = useForm<Input1>();

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
        let fec: any = data.fecha_de_diagnostico;
        data.fecha_de_diagnostico = typeof (fec) == 'string'
            ? fec
            : moment(fec._d).format('MM-DD-YYYY')
        let payload: Object = {
            inputs: {
                input1: [data],
                globalParameters: {}
            }
        }
        console.log(payload);

        fetch('http://localhost:8080/api/predict/only-result', {
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
                                type="number"
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="embarazos"
                                label="Embarazos"
                                name="embarazos"
                                autoComplete="embarazos"
                                autoFocus
                                error={errors.embarazos ? true : false}
                                helperText={errors.embarazos ? errors.embarazos.message : ""}
                                inputRef={register({ required: "Campo requerido", max: { value: 999, message: "Numero muy grande" } })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                type="number"
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="glucosa"
                                label="Glucosa"
                                name="glucosa"
                                autoComplete="glucosa"
                                autoFocus
                                error={errors.glucosa ? true : false}
                                helperText={errors.glucosa ? errors.glucosa.message : ""}
                                inputRef={register({ required: "Campo requerido", maxLength: 10 })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                type="number"
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="presion_sanguinea"
                                label="Presion Sanguinea"
                                name="presion_sanguinea"
                                autoComplete="presion_sanguinea"
                                autoFocus
                                error={errors.presion_sanguinea ? true : false}
                                helperText={errors.presion_sanguinea ? errors.presion_sanguinea.message : ""}
                                inputRef={register({ required: "Campo requerido", max: { value: 999, message: "Numero muy grande" } })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                type="number"
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="pliegue_cutaneo"
                                label="Pliegue Cutaneo"
                                name="pliegue_cutaneo"
                                autoComplete="pliegue_cutaneo"
                                autoFocus
                                error={errors.pliegue_cutaneo ? true : false}
                                helperText={errors.pliegue_cutaneo ? errors.pliegue_cutaneo.message : ""}
                                inputRef={register({ required: "Campo requerido", max: { value: 999, message: "Numero muy grande" } })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                type="number"
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="insulina"
                                label="Insulina"
                                name="insulina"
                                autoComplete="insulina"
                                autoFocus
                                error={errors.insulina ? true : false}
                                helperText={errors.insulina ? errors.insulina.message : ""}
                                inputRef={register({ required: "Campo requerido", max: { value: 999, message: "Numero muy grande" } })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                type="number"
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="indice_de_masa_corporal"
                                label="I. Masa Corporal"
                                name="indice_de_masa_corporal"
                                autoComplete="indice_de_masa_corporal"
                                autoFocus
                                error={errors.indice_de_masa_corporal ? true : false}
                                helperText={errors.indice_de_masa_corporal ? errors.indice_de_masa_corporal.message : ""}
                                inputRef={register({ required: "Campo requerido", max: { value: 999, message: "Numero muy grande" } })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                type="number"
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="pedigri_diabetes"
                                label="Pedigri Diabetes"
                                name="pedigri_diabetes"
                                autoComplete="pedigri_diabetes"
                                autoFocus
                                error={errors.pedigri_diabetes ? true : false}
                                helperText={errors.pedigri_diabetes ? errors.pedigri_diabetes.message : ""}
                                inputRef={register({ required: "Campo requerido", max: { value: 999, message: "Numero muy grande" } })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                type="number"
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="edad"
                                label="Edad"
                                name="edad"
                                autoComplete="edad"
                                autoFocus
                                error={errors.edad ? true : false}
                                helperText={errors.edad ? errors.edad.message : ""}
                                inputRef={register({ required: "Campo requerido", max: { value: 999, message: "Numero muy grande" } })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                type="number"
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="diabetes"
                                label="Diabetes"
                                name="diabetes"
                                autoComplete="diabetes"
                                autoFocus
                                select
                                inputRef={register}
                                defaultValue="No"
                            >
                                {['No', 'Sí'].map(x => (<MenuItem key={x} value={x}> {x} </MenuItem>))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                type="number"
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="medicacion_previa"
                                label="Medicacion Previa"
                                name="medicacion_previa"
                                autoComplete="medicacion_previa"
                                autoFocus
                                inputRef={register({ required: "Campo requerido", max: { value: 999, message: "Numero muy grande" } })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                type="number"
                                size="small"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="observaciones"
                                label="Observaciones"
                                name="observaciones"
                                autoComplete="observaciones"
                                autoFocus
                                inputRef={register({ required: "Campo requerido", max: { value: 999, message: "Numero muy grande" } })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Controller
                                name="fecha_de_diagnostico"
                                rules={{ required: true }}
                                control={control}

                                // here the magic happens
                                initialFocusedDate={null}
                                defaultValue={new Date()}

                                as={
                                    <KeyboardDatePicker
                                        size="small"
                                        error={errors.fecha_de_diagnostico ? true : false}
                                        helperText={errors.fecha_de_diagnostico ? errors.fecha_de_diagnostico.message : ""}
                                        autoOk
                                        variant="inline"
                                        inputVariant="outlined"
                                        format="DD/MM/yyyy"
                                        margin="normal"
                                        id="fecha_de_diagnostico"
                                        label="Fec. diagnostico"
                                        name="fecha_de_diagnostico"
                                        onChange={() => { }}
                                        value={() => { }}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            {/* <KeyboardDatePicker
                                size="small"
                                autoOk
                                variant="inline"
                                inputVariant="outlined"
                                format="DD/MM/yyyy"
                                margin="normal"
                                id="fecha_de_diagnostico"
                                label="Fec. diagnostico"
                                name="fecha_de_diagnostico"
                                value={selectedDate}
                                onChange={date => handleChange(date)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            /> */}
                        </Grid>
                    </Grid>
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

                </form>
            </div>
        </Container>
    );
}