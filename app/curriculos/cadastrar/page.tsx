"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { curriculoSchema } from "@/lib/validation/curriculoSchema";
import { saveCurriculo } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Cadastrar() {
  const router = useRouter();
  const [imagem, setImagem] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // 🧠 Máscaras
  function formatTelefone(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value;
  }

  function formatCPF(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return value;
  }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(curriculoSchema),
    mode: "onChange",
    defaultValues: {
      experiencias: [{ empresa: "", cargo: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiencias",
  });

  // 📸 Upload fake
  function handleImage(e: any) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImagem(reader.result as string);
    reader.readAsDataURL(file);
  }

  // 💾 Sucesso
  function onSubmit(data: any) {
    setLoading(true);

    saveCurriculo({ ...data, imagem });

    toast.success("Currículo cadastrado com sucesso!");

    setTimeout(() => {
      setLoading(false);
      router.push("/curriculos/visualizar");
    }, 800);
  }

  // ❌ Erro
  function onError(errors: any) {
    const firstError = Object.values(errors)[0] as any;
    toast.error(firstError?.message || "Erro no formulário");
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Cadastrar Currículo
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="space-y-4"
      >
        {/* NOME */}
        <div>
          <Label>Nome</Label>
          <Input {...register("nome")} />
          <span className="text-red-500 text-sm">
            {errors.nome?.message}
          </span>
        </div>

        {/* EMAIL */}
        <div>
          <Label>Email</Label>
          <Input type="email" {...register("email")} />
          <span className="text-red-500 text-sm">
            {errors.email?.message}
          </span>
        </div>

        {/* TELEFONE */}
        <div>
          <Label>Telefone</Label>
          <Input
            placeholder="(00) 00000-0000"
            {...register("telefone")}
            onChange={(e) => {
              e.target.value = formatTelefone(e.target.value);
            }}
          />
          <span className="text-red-500 text-sm">
            {errors.telefone?.message}
          </span>
        </div>

        {/* CPF */}
        <div>
          <Label>CPF</Label>
          <Input
            placeholder="000.000.000-00"
            {...register("cpf")}
            onChange={(e) => {
              e.target.value = formatCPF(e.target.value);
            }}
          />
        </div>

        {/* CARGO */}
        <div>
          <Label>Cargo</Label>
          <Input {...register("cargo")} />
          <span className="text-red-500 text-sm">
            {errors.cargo?.message}
          </span>
        </div>

        {/* RESUMO */}
        <div>
          <Label>Resumo</Label>
          <Textarea {...register("resumo")} />
          <span className="text-red-500 text-sm">
            {errors.resumo?.message}
          </span>
        </div>

        {/* FOTO */}
        <div>
          <Label>Foto</Label>
          <Input type="file" onChange={handleImage} />
          {imagem && (
            <img
              src={imagem}
              className="w-32 h-32 mt-2 rounded"
            />
          )}
        </div>

        {/* EXPERIÊNCIAS */}
        <div>
          <h3 className="font-bold mb-2">Experiências</h3>

          {fields.map((field, index) => (
            <div key={field.id} className="border p-3 mb-2 rounded">
              <Input
                placeholder="Empresa"
                {...register(`experiencias.${index}.empresa`)}
                className="mb-2"
              />
              <Input
                placeholder="Cargo"
                {...register(`experiencias.${index}.cargo`)}
                className="mb-2"
              />

              <Button
                type="button"
                variant="destructive"
                onClick={() => remove(index)}
              >
                Remover
              </Button>
            </div>
          ))}

          <Button
            type="button"
            onClick={() => append({ empresa: "", cargo: "" })}
          >
            + Adicionar Experiência
          </Button>
        </div>

        {/* BOTÃO */}
        <Button type="submit" disabled={!isValid || loading}>
          {loading ? "Salvando..." : "Salvar Currículo"}
        </Button>
      </form>
    </div>
  );
}