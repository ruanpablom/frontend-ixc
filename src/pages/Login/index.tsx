import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/Input';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '@/services/axios-instance';
import { useUser } from '@/contexts/user';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginValidationSchema, LoginValidationSchema } from './validations';

interface LoginData {
  username: string;
  password: string;
}

export function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValidationSchema>({
    resolver: zodResolver(loginValidationSchema),
  });
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.id) {
      navigate('/');
    }
  }, [user, navigate]);

  const queryClient = useQueryClient();

  const mutation = useMutation<
    any,
    { code: string; message: string; responseStatus: string },
    LoginData
  >({
    mutationFn: async ({ username, password }) => {
      try {
        const res = await axiosInstance.post(
          '/login',
          { username, password },
          { withCredentials: true },
        );
        return res.data;
      } catch (error: any) {
        // eslint-disable-next-line no-throw-literal
        throw {
          code: error.code,
          message: error.response.data.message,
          responseStatus: error.response?.status,
        };
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const onSubmit: SubmitHandler<LoginValidationSchema> = data =>
    // console.info(data);
    mutation.mutate({ ...data });

  return (
    <div className="flex flex-col border border-accent rounded px-12 py-7 text-accent gap-5 max-w-xs md:max-w-lg">
      <h1 className="text-accent text-2xl font-semibold">LOGIN</h1>
      {mutation.isError ? (
        <div className="text-red-500">{mutation.error.message}</div>
      ) : null}
      <form
        className="flex flex-col gap-4 w-fit md:w-72 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="username"
          label="Email"
          placeholder="email@email.com"
          {...register('username')}
          errors={errors.username}
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          placeholder="********"
          {...register('password')}
          errors={errors.password}
        />

        <button
          className="btn btn-outline btn-accent w-full disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed"
          type="submit"
          disabled={Object.entries(errors).length > 0}
        >
          {mutation.isLoading ? (
            <span className="loading loading-spinner loading-lg" />
          ) : (
            'ENTRAR'
          )}
        </button>
      </form>
    </div>
  );
}
