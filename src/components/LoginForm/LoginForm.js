import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operation";
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
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
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
};


export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
     const form = e.currentTarget;
    dispatch(logIn({ email, password }));
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
      <b>Welcome!</b>
    </Typography>
    <Typography level="body2">Sign in to continue.</Typography>
  </div>
  <form onSubmit={handleSubmit} autoComplete="off">
    <FormLabel>Email</FormLabel>
    <Input
      name="email"
      type="email"
      placeholder="johndoe@email.com"
      onChange={handleEmailChange}
    />
    <FormLabel>Password</FormLabel>
    <Input
      name="password"
      type="password"
      placeholder="password"
      onChange={handlePasswordChange}
    />
   <Button type="submit" sx={{ mt: 1 }}>
    Log in
  </Button>
  </form>


  <Typography
    endDecorator={<Link href="/register">Sign up</Link>}
    fontSize="sm"
    sx={{ alignSelf: 'center' }}
  >
    Don&apos;t have an account?
  </Typography>
</Sheet>

  </main>
</CssVarsProvider>
</> )
}

  //   <form onSubmit={handleSubmit} autoComplete="off">
  //     <label>
  //       Email
  //       <input type="email" name="email" onChange={handleEmailChange} />
  //     </label>
  //     <label>
  //       Password
  //       <input
  //         type="password"
  //         name="password"
  //         onChange={handlePasswordChange}
  //       />
  //     </label>
  //     <button type="submit">Log In</button>
  //   </form>
  // );