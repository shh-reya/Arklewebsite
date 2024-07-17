import React from 'react';
import Footer from '../Components/Footer'
import { Container, Box, Typography, TextField, Grid,Button } from '@mui/material';
import { Phone, MailOutline, LocationOn, Facebook,  Instagram } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import logo from '../assets/home-contact.jpg';

const Contactus = () => {
  

  return (
    <div>
    <Box sx={{marginTop:{xs:"50px",md:'auto'},marginBottom:{xs:"50px",md:'auto'}, position: 'relative', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
     {/* Background Image  */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',    
        filter: 'blur(8px)',
        zIndex: -1,
      }}
    ></Box>
    
    {/* Foreground Content */}
    <Container
      maxWidth="md"
      sx={{
        position: 'relative',
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: {md:'10px', sm:'0px',xs:'0px'},
        
        padding: { xs: 2, md: 4 },
        color: 'white',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: 'center',
           padding: 2,
            borderRight:'1px solid white'}}>
            <Typography variant="h4" gutterBottom>
              Contact Information
            </Typography>
            <Typography gutterBottom>
              Fill up the form and then click send
            </Typography>
            <Typography gutterBottom>
              <Phone sx={{ color: 'aqua', mr: 1 }} /> +91-8107998081
            </Typography>
            <Typography gutterBottom>
              <MailOutline sx={{ color: 'aqua', mr: 1 }} /> arkleconsultancy@gmail.com
            </Typography>
            <Typography gutterBottom>
              <LocationOn sx={{ color: 'aqua', mr: 1 }} /> Bhawani Singh Ln, Jyothi Nagar, Lalkothi, Jaipur, Rajasthan 302005
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Facebook sx={{ mx: '5px' }} />
              < XIcon sx={{ mx: '5px' }} />
              <Instagram sx={{ mx: '5px' }} />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="first-name"
                label="First Name"
                variant="standard"
                fullWidth
                sx={{
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                  '& .MuiInput-underline:after': { borderBottomColor: 'white' },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="last-name"
                label="Last Name"
                variant="standard"
                fullWidth
                sx={{
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                  '& .MuiInput-underline:after': { borderBottomColor: 'white' },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="email"
                label="E-mail"
                variant="standard"
                fullWidth
                sx={{
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                  '& .MuiInput-underline:after': { borderBottomColor: 'white' },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                label="Phone#"
                variant="standard"
                fullWidth
                sx={{
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                  '& .MuiInput-underline:after': { borderBottomColor: 'white' },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="message"
                label="Message"
                variant="standard"
                multiline
                rows={4}
                fullWidth
                sx={{
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                  '& .MuiInput-underline:after': { borderBottomColor: 'white' },
                }}
              />
             <Button variant="outlined" sx={{mt:'20px',
                                           left:'30%'
               }}>Send Message</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Box>

         <Footer/>
        </div>
    )
    
    } 
 export default Contactus;    
    