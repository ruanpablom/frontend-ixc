import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/Input';
import { loginValidationSchema, LoginValidationSchema } from './validations';

export function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValidationSchema>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<LoginValidationSchema> = data =>
    console.info(data);

  return (
    <div className="flex flex-col border border-accent rounded px-12 py-7 text-accent gap-5 max-w-xs md:max-w-lg">
      <h1 className="text-accent text-2xl font-semibold">LOGIN</h1>
      <form
        className="flex flex-col gap-4 w-fit md:w-72 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="username"
          label="Email"
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

        <input
          className="btn btn-outline btn-accent w-full disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed"
          type="submit"
          value="ENTRAR"
          disabled={Object.entries(errors).length > 0}
        />
      </form>
    </div>
  );
}
