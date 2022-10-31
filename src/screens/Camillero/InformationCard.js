import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const InformationCard = ({description, imageSrc, codeUrgency}) => {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                component="img"
                height="180"
                image={imageSrc}
                alt= {codeUrgency}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Traslado solicitado
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>

                <Button variant="contained" color="success">
                    Aceptar
                </Button>
                <Button variant="outlined" color="error">
                    Rechazar
                </Button>
            </CardContent>
        </Card>
    );
}

