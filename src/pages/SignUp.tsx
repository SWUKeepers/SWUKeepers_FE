import Layout from '@/layouts/Layout';
import { Button, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

interface ISignUpForm {
  email: string;
  password: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignUpForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: ISignUpForm) => {
    console.log(data);
    reset();
  };

  return (
    <Layout>
      <Stack
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
        direction='column'
        spacing={2}
        sx={{ margin: 'auto' }}
        alignItems={'center'}
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
    </Layout>
  );
};

export default SignUp;
