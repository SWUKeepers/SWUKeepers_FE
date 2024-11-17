import Layout from '@/layouts/Layout';
import { Button, Stack, SxProps, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

interface ISignUpForm {
  email: string;
  password: string;
}

const fieldStyle: SxProps = {
  width: '100%',
  height: '100%',
};

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
    mode: 'onChange',
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
        alignItems={'center'}
        sx={{
          width: '80%',
          height: 'fit-content',
          p: 2,
          borderRadius: '1.5rem',
          border: '1px solid #ccc',
          margin: '0 auto',
        }}
      >
        <TextField
          label='Email'
          size={'small'}
          sx={fieldStyle}
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email', {
            required: '이메일을 입력하세요',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: '잘못된 이메일 형식입니다',
            },
          })}
        />
        <TextField
          label='Password'
          type='password'
          size={'small'}
          sx={fieldStyle}
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register('password', { required: '비밀번호를 입력하세요' })}
        />
        <Button type='submit' variant='contained' sx={{ width: '10rem' }}>
          회원가입
        </Button>
      </Stack>
    </Layout>
  );
};

export default SignUp;
