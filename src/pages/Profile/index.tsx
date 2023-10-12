import { Input } from '@/components/Input';
import { useUser } from '@/contexts/user';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  EditUserValidationSchema,
  editUserValidationSchema,
} from './validations';

export function Profile(): JSX.Element {
  const { user } = useUser();
  const { email, name } = user;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUserValidationSchema>({
    defaultValues: {
      name,
      email,
    },
    resolver: zodResolver(editUserValidationSchema),
  });

  const onSubmit = (data: EditUserValidationSchema) => {
    console.info(data);
  };

  return (
    <div className="h-full pt-6 flex flex-col gap-6">
      <h2 className="text-3xl font-bold text-center">Profile</h2>
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <label className="avatar">
            <div className="!flex flex-col items-center justify-center w-10 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
              <span>{name[0].toUpperCase()}</span>
            </div>
          </label>
          <form
            className="flex flex-col gap-4 items-center w-fit md:w-72"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              id="name"
              label="Name"
              {...register('name')}
              errors={errors.name}
            />
            <Input
              id="email"
              label="Email"
              {...register('email')}
              errors={errors.email}
            />
            <button
              className="btn btn-accent w-full disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed"
              type="submit"
              disabled={Object.entries(errors).length > 0}
            >
              SALVAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
