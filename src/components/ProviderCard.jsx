// src/components/ProviderCard.js
import { Card, CardContent, Typography, Button, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const ProviderCard = ({ provider }) => (
  <Card sx={{ minWidth: 275, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>{provider.name}</Typography>
      <Typography variant="body2" color="text.secondary">{provider.specialization}</Typography>
      <Typography variant="body2" color="text.secondary">{provider.location}</Typography>
      <Rating value={provider.rating} readOnly />
      <Button
        component={Link}
        to={`/providers/${provider.id}`}
        sx={{ mt: 2 }}
        variant="outlined"
      >
        More Info
      </Button>
    </CardContent>
  </Card>
);

export default ProviderCard;
