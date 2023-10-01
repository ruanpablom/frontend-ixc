import { Input } from '@/components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { axiosInstance } from '@/services/axios-instance';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Select } from '@/components/Select';
import { useMutation } from '@tanstack/react-query';
import { SignUpValidationSchema, signupValidationSchema } from './validations';

export function Signup(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValidationSchema>({
    resolver: zodResolver(signupValidationSchema),
  });
  const [message, setMessage] = useState<string>('');
  const [erro, setErro] = useState<{
    code: string;
    message: string;
    responseStatus: string;
  }>({} as any);

  const mutation = useMutation<
    any,
    { code: string; message: string; responseStatus: string },
    SignUpValidationSchema
  >({
    mutationFn: async data => {
      try {
        const res = await axiosInstance.post('/signup', data, {
          withCredentials: true,
        });
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
    onError: erro => {
      setErro(erro);
      setMessage('Erro ao cadastrar');
    },
    onSuccess: () => {
      setMessage('Cadastro realizado com sucesso');
    },
  });

  const onSubmit: SubmitHandler<SignUpValidationSchema> = data => {
    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col border border-accent rounded px-12 py-7 text-accent gap-5 max-w-xs md:max-w-lg">
      <h1 className="text-accent text-2xl font-semibold">Cadastro</h1>
      {!message ? (
        <form
          className="flex flex-col gap-4 items-center w-fit md:w-72"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            id="name"
            label="Nome"
            placeholder="Nome Completo"
            {...register('name')}
            errors={errors.name}
          />
          <Input
            id="username"
            label="E-mail"
            placeholder="email@email.com"
            {...register('email')}
            errors={errors.email}
          />
          <Input
            id="password"
            label="Senha"
            type="password"
            placeholder="********"
            {...register('password')}
            errors={errors.password}
          />
          <Input
            id="passwordConfirmation"
            label="Confirmação da senha"
            type="password"
            placeholder="********"
            {...register('passwordConfirmation')}
            errors={errors.passwordConfirmation}
          />
          <Select
            id="role"
            label="User Role"
            options={['ADMIN', 'USER']}
            {...register('role')}
            errors={errors.role}
          />

          <button
            className="btn btn-outline btn-accent w-full disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed"
            type="submit"
            disabled={Object.entries(errors).length > 0}
          >
            {mutation.isLoading ? (
              <span className="loading loading-spinner loading-lg" />
            ) : (
              'CADASTRAR'
            )}
          </button>
        </form>
      ) : (
        <>
          {!(Object.entries(erro).length > 0) ? (
            <p>{message}</p>
          ) : (
            <p className="text-red-500">{erro.message}</p>
          )}
        </>
      )}
    </div>
  );
}
