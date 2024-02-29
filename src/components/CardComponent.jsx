import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Paper } from '@mui/material';

const CardComponent = ({ name, music }) => {
  return (
    <Paper elevation={4} style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ minWidth: '100%' }}>
        <CardContent>
          <Typography textAlign={'center'} variant="h6" >
            Información
          </Typography>
          <Typography  variant="body1">
            Hola {name}!!!
          </Typography>
          <Typography variant="body1" >
            Te gusta este genero de musica: {music}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default CardComponent;
