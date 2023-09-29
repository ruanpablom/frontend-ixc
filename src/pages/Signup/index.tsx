import { Input } from '@/components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
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

  const onSubmit: SubmitHandler<SignUpValidationSchema> = data => {
    console.info(data);
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

          <input
            className="btn btn-outline btn-accent w-full disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed"
            type="submit"
            value="CADASTRAR"
            disabled={Object.entries(errors).length > 0}
          />
        </form>
      ) : (
        <></>
      )}
    </div>
  );
}
