// src/components/ProviderList.js
import { useEffect, useState } from 'react';
import { fetchProviders } from '../data/providerService';
import ProviderCard from './ProviderCard';
import { Grid, Typography, TextField, Container } from '@mui/material';

const ProviderList = () => {
    const [providers, setProviders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchProviders().then(setProviders);
    }, []);

    const filteredProviders = providers.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>Support Providers</Typography>
            <TextField
                label="Search by name or specialization"
                variant="outlined"
                margin="normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="small"
                style={{ marginBottom: '40px', width: '400px' }}
            />

            <Grid container spacing={10} >
                {filteredProviders.map((provider) => (
                    <Grid item xs={12} sm={6} md={4} key={provider.id}>
                        <ProviderCard provider={provider} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProviderList;
