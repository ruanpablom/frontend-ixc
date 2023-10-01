import * as z from 'zod';

export const loginValidationSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'Você deve preencher o e-mail' })
    .email({
      message: 'Deve ser um e-mail válido',
    }),
  password: z
    .string()
    .min(6, { message: 'Senha deve possuir pelo menos 6 caracteres' }),
});

export type LoginValidationSchema = z.infer<typeof loginValidationSchema>;
