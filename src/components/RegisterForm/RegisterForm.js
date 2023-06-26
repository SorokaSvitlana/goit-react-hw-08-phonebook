import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operation";
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }} >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
};

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleNameChange = e => {
      setName(e.target.value);
    };
    const handleEmailChange = e => {
      setEmail(e.target.value);
    };
    const handlePasswordChange = e => {
      setPassword(e.target.value);
     
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
  
      form.reset();
    };
    return (
      <>   
    <CssVarsProvider>
      <main>
        <ModeToggle />
        <Sheet
  sx={{
    width: 300,
    mx: 'auto',
    my: 4,
    py: 3,
    px: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    borderRadius: 'sm',
    boxShadow: 'md',
  }}
  variant="outlined"
>
  <div>
    <Typography level="h4" component="h1">
      <b>Please register!</b>
    </Typography>
  </div>
  <form onSubmit={handleSubmit} autoComplete="off">
    <FormLabel>Name</FormLabel>
    <Input
      name="name"
      type="text"
      placeholder="Adrian Cross"
      onChange={handleNameChange}
    />
    <FormLabel>Email</FormLabel>
    <Input
      name="email"
      type="email"
      placeholder="across@mail.com"
      onChange={handleEmailChange}
    />
    <FormLabel>Password</FormLabel>
    <Input
      name="password"
      type="password"
      placeholder="examplepwd12345"
      onChange={handlePasswordChange}
    />
      <Button type="submit" sx={{ mt: 1 }}>
    Register
  </Button>
  </form>


</Sheet>
      </main>
    </CssVarsProvider>
    </> )
  };

 