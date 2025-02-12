import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Typography,
    Container,
    FormControl,
    Input,
    InputLabel,
    Paper
} from '@mui/material';
import { getProfileDetailsQuery } from '../Hooks/React Query/useReactQuery';
import { profile_pic } from '../API/endpoints/endpoints';
import { Edit } from '@mui/icons-material';
import Footer from './Footer';

const ProfileDetails = () => {
  const { data, isLoading, isFetching } = getProfileDetailsQuery();

  if (isLoading) {
    return <Typography variant="h5" align="center" color="primary">Loading...</Typography>;
  }

  if (isFetching) {
    return <Typography variant="h5" align="center" color="primary">Fetching...</Typography>;
  }

  return (
    <>
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 3,
          }}
        >
          <Avatar 
            src={profile_pic(data.data.profile_pic)} 
            alt="Profile Picture" 
            sx={{
              

              width: 120,
              height: 120,
              margin: 'auto',
              border: '3px solid #3f51b5',
              marginBottom: 2,
            }} 
          />
          <Typography variant="h5" gutterBottom  style={{color:"white",}}>
            {data.data.first_name} {data.data.last_name}
          </Typography>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel htmlFor="first-name"  style={{color:"red",}}>First Name</InputLabel>
            <Input id="first-name"  style={{color:"white",}} value={data.data.first_name} readOnly />
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: 2 }} >
            <InputLabel htmlFor="last-name"  style={{color:"red",}}>Last Name</InputLabel>
            <Input id="last-name"  style={{color:"white",}} value={data.data.last_name} readOnly />
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel htmlFor="email"  style={{color:"red",}}>Email</InputLabel>
            <Input id="email"  style={{color:"white",}} value={data.data.email} readOnly />
          </FormControl>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<Edit />} 
            sx={{ width: '100%', marginTop: 2 }}
            onClick={() => alert("Edit functionality can be implemented here.")}
          >
            Edit Profile
          </Button>
        </Paper>
      </Container>
    </Box>
    <Footer/>
    </>
  );
};

export default ProfileDetails;
