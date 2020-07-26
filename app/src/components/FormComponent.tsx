import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import HealingIcon from '@material-ui/icons/Healing';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function FormComponent() {
    const classes = useStyles();

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

                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="embarazos"
                                label="Embarazos"
                                name="embarazos"
                                autoComplete="embarazos"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="glucosa"
                                label="Glucosa"
                                name="glucosa"
                                autoComplete="glucosa"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="presion_sanguinea"
                                label="Presion Sanguinea"
                                name="presion_sanguinea"
                                autoComplete="presion_sanguinea"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="pliegue_cutaneo"
                                label="Pliegue Cutaneo"
                                name="pliegue_cutaneo"
                                autoComplete="pliegue_cutaneo"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="insulina"
                                label="Insulina"
                                name="insulina"
                                autoComplete="insulina"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="indice_de_masa_corporal"
                                label="I. Masa Corporal"
                                name="indice_de_masa_corporal"
                                autoComplete="indice_de_masa_corporal"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="pedigri_diabetes"
                                label="Pedigri Diabetes"
                                name="pedigri_diabetes"
                                autoComplete="pedigri_diabetes"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="edad"
                                label="Edad"
                                name="edad"
                                autoComplete="edad"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="diabetes"
                                label="Diabetes"
                                name="diabetes"
                                autoComplete="diabetes"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="medicacion_previa"
                                label="Medicacion Previa"
                                name="medicacion_previa"
                                autoComplete="medicacion_previa"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="observaciones"
                                label="Observaciones"
                                name="observaciones"
                                autoComplete="observaciones"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="fecha_de_diagnostico"
                                label="Fec. diagnostico"
                                name="fecha_de_diagnostico"
                                autoComplete="fecha_de_diagnostico"
                                autoFocus
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Consultar
          </Button>
                </form>
            </div>
        </Container>
    );
}