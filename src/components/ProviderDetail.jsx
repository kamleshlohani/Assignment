// src/components/ProviderDetail.js
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProviders } from '../data/providerService';
import { Container, Typography, Rating, Button, Box } from '@mui/material';

const ProviderDetail = () => {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    fetchProviders().then((data) => {
      setProvider(data.find((p) => p.id === id));
    });
  }, [id]);

  if (!provider) return <Container>Loading...</Container>;

  return (
    <Container sx={{ py: 4 }}>
      <Box
        sx={{
          border: '3px solid #ccc',
          borderRadius: '8px',
          padding: '24px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant="h5" gutterBottom>
          {provider.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Specialization: {provider.specialization}
        </Typography>
        <Typography variant="subtitle1">
          Location: {provider.location}
        </Typography>
        <Rating value={provider.rating} readOnly sx={{ my: 1 }} />
        <Typography variant="body1" paragraph>
          {provider.longDescription}
        </Typography>
        <Typography>Email: {provider.contactEmail}</Typography>
        <Typography>Phone: {provider.phoneNumber}</Typography>
        <Box sx={{ mt: 3 }}>
          <Button component={Link} to="/providers" variant="contained">
            Back to List
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProviderDetail;
