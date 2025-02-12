
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Container, Input, TextField, Box, Typography, Card } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { updateProductQuery, useProductdetailQuery, useFetchProductQuery } from '../Hooks/React Query/useProductQuery';
import { image } from '../API/endpoints/endpoints';
import { styled } from '@mui/material/styles';
import Footer from './Footer';

const Root = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundImage: 'url(https://images.unsplash.com/photo-1498887960847-2a5e46312788?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '20px',
});

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  borderRadius: '12px',
  padding: '40px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(15px)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1.5),
  backgroundColor: '#3f51b5',
  color: '#fff',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#303f9f',
  },
  marginTop: theme.spacing(3),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    borderRadius: '8px',
  },
}));

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useProductdetailQuery(id);
  const { mutate } = updateProductQuery();
  const [images, setImages] = useState(null);
  const { refetch } = useFetchProductQuery(); 

  const schema = yup.object({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
  });

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("title", data?.data?.title);
    setValue("description", data?.data?.description);
  }, [data, setValue]);

  const onSubmit = (formData) => {
    const updatedData = new FormData();
    updatedData.append('title', formData.title);
    updatedData.append('description', formData.description);
    updatedData.append('id', id);

    if (images) {
      updatedData.append('image', images);
    }
    console.log(formData);

    mutate(updatedData, {
      onSuccess: () => {
        refetch();
        navigate("/products");
      },
    });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
    <Root>
      <StyledCard>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px', color: '#fff' }}>
          Update Product
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledTextField
            label="Product Title"
            variant="outlined"
            fullWidth
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          <StyledTextField
            label="Description"
            variant="outlined"
            fullWidth
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          <Box sx={{ marginBottom: 2 }}>
            <Input
              type="file"
              onChange={(e) => setImages(e.target.files[0])}
              sx={{ display: 'block', marginBottom: 2 }}
            />
            {images ? (
              <img src={URL.createObjectURL(images)} alt="Selected" style={{ height: "45px", width: "50px", objectFit: "cover" }} />
            ) : data?.data?.image ? (
              <img src={image(data?.data?.image)} alt="Product Image" style={{ height: "45px", width: "50px", objectFit: "cover" }} />
            ) : null}
          </Box>

          <StyledButton variant="contained" type="submit">
            Update Product
          </StyledButton>
        </form>
      </StyledCard>
    </Root>
    <Footer/>
   </>
  );
};

export default UpdateProduct;
