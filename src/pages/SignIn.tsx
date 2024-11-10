import { Button, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

interface ISignInForm {
  email: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: ISignInForm) => {
    console.log(data);
    reset();
  };

  return (
    <Stack
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
      direction='column'
      spacing={2}
      sx={{ margin: 'auto' }}
    >
      <TextField
        label='Email'
        sx={{ width: '10rem' }}
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register('email', { required: 'Email is required' })}
      />
      <TextField
        label='Password'
        type='password'
        sx={{ width: '10rem' }}
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register('password', { required: 'Password is required' })}
      />
      <Button type='submit' variant='contained' sx={{ width: '10rem' }}>
        회원가입
      </Button>
    </Stack>
  );
};

export default SignIn;
