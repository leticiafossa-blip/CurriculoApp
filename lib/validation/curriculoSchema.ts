import * as yup from "yup";

export const curriculoSchema = yup.object({
  nome: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  telefone: yup.string().required("Telefone é obrigatório"),
  cargo: yup.string().required("Cargo é obrigatório"),
  resumo: yup
    .string()
    .min(10, "Resumo deve ter no mínimo 10 caracteres")
    .required("Resumo é obrigatório"),

  experiencias: yup.array().of(
    yup.object({
      empresa: yup.string().required("Empresa obrigatória"),
      cargo: yup.string().required("Cargo obrigatório"),
    })
  ),
});