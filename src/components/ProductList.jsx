import React from 'react';
import { useDeleteProductQuery, useFetchProductQuery } from '../Hooks/React Query/useProductQuery';
import { Button, Card, CardContent, CardActions, Typography, Grid } from '@mui/material';
import { image } from '../API/endpoints/endpoints';
import { useNavigate } from 'react-router-dom';


const ProductList = () => {

  const navigate = useNavigate();
  
  const { data, isLoading, isFetching } = useFetchProductQuery();
  const { mutate } = useDeleteProductQuery();

  const handleEdit = (id) => {
    navigate(`/product/detail/${id}`);
  };

  const handleDelete = (_id) => {
    mutate(_id);
  };
  
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isFetching) {
    return <h1>Fetching...</h1>;
  }

  return (
    <>
    <div style={{ 
        paddingTop: '100px', 
        paddingLeft:'50px', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1682063188370-5884c8c2863d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed', 
        minHeight: '100vh' 
    }}>
      <Grid container spacing={3} justifyContent="left">
        {data?.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{
              maxWidth: 345,
              marginLeft:"50px",
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: 'rgba(30, 30, 30, 0.8)',
              color: '#fff',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 8,
              },
            }}>
              <img src={image(item.image)} alt={item.title} style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
              }} />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#fff' }}>
                  {item.title}
                </Typography>
                <b><Typography variant="body2" color="text.secondary" sx={{ mt: 1, color: '#b0b0b0' }}>
                  {item.description}
                </Typography></b>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', padding: '0 16px 16px' }}>
                
                <Button 
                  onClick={() => handleEdit(item._id)} 
                  variant='contained' 
                  color='secondary' 
                  size="small"
                  sx={{
                    backgroundColor: 'green',
                    '&:hover': {
                      backgroundColor: '#007200',
                    },
                  }}
                >
                  EDIT
                </Button>
                <Button 
                  onClick={() => handleDelete(item._id)} 
                  variant='contained' 
                  color='error' 
                  size="small" 
                  sx={{
                    backgroundColor: '#f44336',
                    '&:hover': {
                      backgroundColor: '#d32f2f',
                    },
                  }}
                >
                  DELETE
                </Button>




              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
     
    </div>
    
    </>
  );
};

export default ProductList;
