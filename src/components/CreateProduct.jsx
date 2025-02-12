import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button, Container, Input, TextField, Typography, Grid, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useCreateProductQuery } from '../Hooks/React Query/useProductQuery'
import Footer from './Footer'

const CreateProduct = () => {

  const navigate = useNavigate();
  const { mutate } = useCreateProductQuery()

  const schema = yup.object({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required")
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
  const [image, setImage] = useState(null);

  const onsubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append('title', data?.title || "");
    formData.append('description', data?.description || "");
    formData.append('image', image);

    mutate(formData);
    navigate("/products")
  }

  return (
    <>
    <Box 
      sx={{ 
        minHeight: "100vh", 
        backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Container maxWidth="sm" sx={{ padding: "40px", backgroundColor: "rgba(255, 255, 255, 0.52)", borderRadius: "10px" }}>
        <Typography 
          variant="h4" 
          component="h1" 
          align="center" 
          color="primary" 
          sx={{
            marginBottom: "20px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "500", 
            fontSize: "3rem", 
            letterSpacing: "2px", 
            textTransform: "uppercase", 
            color: "#333", 
            textShadow: "2px 2px 5px rgb(255, 255, 255)", 
            lineHeight: "1.2",
          }}
        >
          Create Product
        </Typography>

        <form onSubmit={handleSubmit(onsubmit)}>

          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title ? errors.title.message : ""}
          />
          
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description ? errors.description.message : ""}
          />
          
          
          <Box sx={{ marginBottom: "20px" }}>
            <Input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              inputProps={{ accept: "image/*" }}
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            
            {image && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ marginRight: "10px" }}>Image Preview:</Typography>
                <img 
                  src={URL.createObjectURL(image)} 
                  alt="Preview"
                  style={{
                    height: "80px", 
                    width: "80px", 
                    objectFit: "cover", 
                    borderRadius: "5px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                  }} 
                />
              </Box>
            )}
          </Box>

          <Button 
            variant="contained" 
            color="success" 
            type="submit" 
            fullWidth
            sx={{
              padding: "12px",
              fontSize: "16px",
              backgroundColor: "orange",
              '&:hover': {
                backgroundColor: "#388E3c"
              },
            }}
          >
            Create Product
          </Button>
          
        </form>
      </Container>
    </Box>
    <Footer/>
    </>
  )
}

export default CreateProduct
