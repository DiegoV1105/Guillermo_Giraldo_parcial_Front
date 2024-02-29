import React,  { useEffect, useState }  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button, Grid, Paper, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Form = ({name, setName, music, setMusic, setReadyCard}) => {
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        setError(false)
        if(name.charAt(0) === ' ' || name.length < 3 || music.length < 6){
            setReadyCard(false)
            setErrorMessage('Formulario incorrecto')
            setError(true)
            return
        }
        setReadyCard(true)
    };

    useEffect(() => {
        setReadyCard(false);
    }, [name, music]); 

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} style={{padding: 20}} >
                <Grid item xs={12}>
                    <Typography style={{fontWeight: 'bold'}} variant='h6' textAlign={'center'}>Cargar Información</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        fullWidth 
                        id="name" 
                        label="Ingresa tu nombre" 
                        value={name} 
                        variant="outlined" 
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        fullWidth 
                        id="music"
                        label="Ingresa tu genero de musica favorito"
                        value={music}
                        variant="outlined" 
                        onChange={(e) => setMusic(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        fullWidth 
                        style={{height: 54}} 
                        variant="contained" 
                        endIcon={<SendIcon />}
                        type="submit"
                    >
                        Enviar
                    </Button>
                </Grid>
                {error && 
                    <Grid item xs={12}>
                        <Alert  severity="error">{errorMessage}</Alert>
                    </Grid>
                }
            </Grid>
        </form>
    );
}

export default Form