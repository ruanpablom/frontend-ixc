import * as z from 'zod';

export const editUserValidationSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Você deve preencher o nome' })
    .regex(/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/, {
      message: 'Digite o nome completo',
    }),
  email: z.string().min(1, { message: 'Você deve preencher o e-mail' }).email({
    message: 'Deve ser um e-mail válido',
  }),
});

export type EditUserValidationSchema = z.infer<typeof editUserValidationSchema>;
