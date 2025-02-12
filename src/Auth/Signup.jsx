import React, { useState } from 'react';
import { Button, Container, FormControl, Input, InputLabel, TextField, Box, Typography, Card, CardContent } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { newSignupQuery } from '../Hooks/React Query/useReactQuery';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: 'url(https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat center center fixed',
  backgroundSize: 'cover',
  padding: theme.spacing(3),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  padding: '40px',
  width: '100%',
  maxWidth: '400px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fully transparent
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  backdropFilter: 'blur(15px)',
  color: '#fff',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#3f51b5',
  color: '#fff',
  padding: theme.spacing(1.5),
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#303f9f',
  },
  marginBottom: theme.spacing(2),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent input fields
    color: '#fff',
  },
  '& .MuiInputLabel-root': {
    color: '#fff',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#fff',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ddd',
  },
}));

const Signup = () => {
  const { mutate } = newSignupQuery();
  const navigate = useNavigate();

  const schema = yup.object({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [img, setImg] = useState(null);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('profile_pic', img);

    mutate(formData);
    navigate("/login");
  };

  return (
    <Root>
      <StyledCard>
        <CardContent>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, color: '#fff' }}>
            Create Account
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledTextField
              label="First Name"
              variant="outlined"
              fullWidth
              {...register("first_name")}
              error={!!errors.first_name}
              helperText={errors.first_name?.message}
            />

            <StyledTextField
              label="Last Name"
              variant="outlined"
              fullWidth
              {...register("last_name")}
              error={!!errors.last_name}
              helperText={errors.last_name?.message}
            />

            <StyledTextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <StyledTextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="profile-pic" sx={{ color: '#fff' }}>Profile Picture</InputLabel>
              <Input
                id="profile-pic"
                type="file"
                onChange={(e) => setImg(e.target.files[0])}
                inputProps={{ accept: "image/*" }}
                sx={{ color: '#fff' }}
              />
              {img && (
                <Box sx={{ marginTop: 2 }}>
                  <img
                    src={URL.createObjectURL(img)}
                    alt="Selected file"
                    style={{ height: 45, width: 50, objectFit: "cover" }}
                  />
                </Box>
              )}
            </FormControl>

            <StyledButton type="submit">
              Create Account
            </StyledButton>
          </form>
        </CardContent>
      </StyledCard>
    </Root>
  );
};

export default Signup;
