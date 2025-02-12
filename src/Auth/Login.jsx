import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { TextField, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useSigninQuery } from '../Hooks/React Query/useReactQuery';
import { login } from '../Redux toolkit/Slice/authSlice';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  padding: theme.spacing(3),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: -7,
  },
}));

const backgroundVideoStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover', 
  zIndex: -2,  
};

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  padding: '40px',
  width: '100%',
  maxWidth: '400px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
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
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
}));

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const schema = yup.object({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const { mutate } = useSigninQuery();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    setErrorMessage("");

    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    mutate(formData, {
      onSuccess: (response) => {
        setIsLoading(false);
        if (response?.token) {
          dispatch(login(response.token)); // Save token
          navigate("/home");
        } else {
          setErrorMessage("Invalid login credentials.");
        }
      },
      onError: (error) => {
        setIsLoading(false);
        setErrorMessage("Login failed. Please check your email and password.");
      },
    });
  };

  return (
    <Root>
       <video style={backgroundVideoStyle} autoPlay muted loop>
        <source src="https://cdn.pixabay.com/video/2023/09/21/181537-866999852_large.mp4" type="video/mp4" />
      </video>
      <StyledCard>
        <CardContent>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, color: 'white' }}>
            Welcome Back!
          </Typography>
          {errorMessage && (
            <Typography color="error" sx={{ textAlign: 'center', mb: 2 }}>
              {errorMessage}
            </Typography>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledTextField
              label="Email"
              variant="outlined"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <StyledTextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <StyledButton type="submit" disabled={isLoading}>
              {isLoading ? 'LOADING...' : 'LOG IN'}
            </StyledButton>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                Don't have an account? <span style={{ color: '#FF5722', cursor: 'pointer' }} onClick={() => navigate("/signup")}>Sign Up</span>
              </Typography>
              <StyledButton
                variant="outlined"
                color="primary"
                onClick={() => navigate("/signup")}
              >
                SIGN UP
              </StyledButton>
            </Box>
          </form>
        </CardContent>
      </StyledCard>
    </Root>
  );
};

export default Login;
