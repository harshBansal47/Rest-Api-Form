import React, { useState } from "react";
import { Box, TextField ,RadioGroup,FormControlLabel,Button,Radio,Typography,FormControl,FormLabel, Container,Grid} from '@mui/material'
import validator from "validator";
import { width } from "@mui/system";

const Form = () =>{

  const [name,setName] =  useState({
    value:"",error:false
  });

  const [email,setEmail] = useState({
    value:"",error:false
  });
  const emailValidation = (email)=>{
    return validator.isEmail(email);
  }

  const [password,setPassword] = useState({
    value:"",error:false
  });

  const [age,setAge] = useState({
    value:"",error:false
  });
  const ageValidation = (age)=>{
    return age>=18 && age <=67;
  }

  const [batch,setBatch] = useState("b1");

  const [nameOnCard, setNameOnCard] = useState({
    value:"",error:false
  })

  const [cardNumber,setCardNumber] = useState({
    value:"",error:false
  });

  const [expDate,setExpDate] = useState({
    value:"",error:false
  });

  const [cvv,setCvv] = useState({
    value:"",error:false
  });

  const [jsonData,setJsonData] = useState(JSON.stringify({}))
  // Submit and Validation
  const handleSubmit =(e)=>{
    e.preventDefault();
    // Validating a email
    if(!emailValidation(email.value)||email.value===""){
      setEmail({...email,error:true})
    }
    // validating  age
    if(!ageValidation(age.value)||age.value===""){
      setAge({...age,error:true})
    }
    //validating name
    if(name.value===""){
      setName({...name,error:true})
    }
    //validating password
    if(password.value===""){
      setPassword({...password,error:true})
    }
    //validating name on card 
    if(nameOnCard.value===""){
      setNameOnCard({...nameOnCard,error:true})
    }
    //validating card number
    if(cardNumber.value===""){
      setCardNumber({...cardNumber,error:true})
    }
    //validating expdate
    if(expDate.value===""){
      setExpDate({...expDate,error:true})
    }
    //validating  cvv
    if(cvv.value===""){
      setCvv({...cvv,error:true})
    }
    //storing data
    let dataObj = {
      name:name.value,
      email:email.value,
      password:password.value,
      age:age.value,
      batch:batch,
      paymentDetails:{
        nameOnCard:nameOnCard.value,
        cardNumber:cardNumber.value,
        expDate:expDate.value,
        cvv:cvv.value
      }
    }
    setJsonData(JSON.stringify(dataObj))
  }
  return (
   <Container component="main">
     <Box component="form" onSubmit={handleSubmit} sx={{
      my: 4,
      mx:4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width:'80%'
    }}>
    <Typography variant="h4" gutterBottom>
        Admission Form
    </Typography>

    <TextField 
     fullWidth
     label = "Full Name" 
     name="name"
     id="name"   
     margin="normal"
     onChange={(e)=>{setName({...name,value:e.target.value})}}
     value = {name.value}
     error = {name.error}
     helperText = {name.error&&"You must enter a name"}
     />

     <TextField
     fullWidth
     id="email"
     label="Email Address"
     name="email" 
     margin="normal"
     onChange={(e)=>{setEmail({...email,value:e.target.value})}}
     value = {email.value}
     error = {email.error}
     helperText = {email.error&&"You must enter a valid email"}
     />

     <TextField 
     fullWidth     
     name="password"
     label="Password"
     type="password"
     id="password"
     margin="normal"
     onChange={(e)=>{setPassword({...password,value:e.target.value})}}
     value = {password.value}
     error = {password.error}
     helperText = {password.error&&"Enter Password"}
     />

     <TextField
     fullWidth 
     name = "age"
     label = "Age"
     id = "age"
     margin="normal"
     onChange={(e)=>{setAge({...age,value:e.target.value})}}
     value = {age.value}
     error = {age.error}
     helperText = {age.error&&"Age should be between 18-67"}
     />

    <FormControl sx = {{display: 'flex',flexDirection: 'column',
      alignItems: 'center',justifyContent:"center", margin:"2rem 0"}}>
    <Typography variant="h4">
      Batch :: 
    </Typography>
      <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
        value={batch} onChange = {(e)=>{setBatch(e.target.value)}}
        sx = {{display: 'flex',flexDirection: 'column',
      alignItems: 'center',justifyContent:"center"}}>
        <FormControlLabel value="6-7 AM" control={<Radio />} label="6-7 AM" />
        <FormControlLabel value="7-8 AM" control={<Radio />} label="7-8 AM" />
        <FormControlLabel value="8-9 AM" control={<Radio />} label="8-9 AM" />
        <FormControlLabel value="5-6 PM" control={<Radio />} label="5-6 PM" />
      </RadioGroup>
    </FormControl>


   <Box sx = {{margin:"2rem 0",display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',}}>
   <Typography variant="h4" gutterBottom sx = {{textDecoration:"underline"}}>
        Payment Details
    </Typography>
    <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={(e)=>{setNameOnCard({...nameOnCard,value:e.target.value})}}
            value = {nameOnCard.value}
            error = {nameOnCard.error}
            helperText = {nameOnCard.error&&"Enter Full Name"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={(e)=>{setCardNumber({...cardNumber,value:e.target.value})}}
            value = {cardNumber.value}
            error = {cardNumber.error}
            helperText = {cardNumber.error&&"Enter Card Number"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={(e)=>{setExpDate({...expDate,value:e.target.value})}}
            value = {expDate.value}
            error = {expDate.error}
            helperText = {expDate.error&&"Enter Expiry Date"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            label="CVV"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={(e)=>{setCvv({...cvv,value:e.target.value})}}
            value = {cvv.value}
            error = {cvv.error}
            helperText = {cvv.error&&"Enter Expiry Date"}
            type = "password"
          />
        </Grid>
      </Grid>
   </Box>

    <Button variant="outlined" type="submit"  color="secondary"  sx={{mt:2}}>Next</Button>
    </Box>
   </Container>

  );
};
export default Form;