"use client";

import { useEffect, useState } from "react";
import { getCurriculos } from "@/lib/storage";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Detalhe({ params }: any) {
  const [curriculo, setCurriculo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const data = getCurriculos().find(
        (c: any) => c.id === Number(params.id)
      );
      setCurriculo(data);
      setLoading(false);
    }, 1000);
  }, [params.id]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto">
        <Skeleton className="w-40 h-40 mb-4" />
        <Skeleton className="h-6 w-1/2 mb-2" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  if (!curriculo) {
    return (
      <div className="text-center mt-10">
        <p>Currículo não encontrado</p>
        <Link href="/curriculos/visualizar">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Button asChild className="mb-4">
        <Link href="/curriculos/visualizar">← Voltar</Link>
      </Button>

      <Card>
        <CardContent className="p-6">
          {curriculo.imagem && (
            <img
              src={curriculo.imagem}
              className="w-40 h-40 rounded mb-4"
            />
          )}

          <h2 className="text-2xl font-bold">
            {curriculo.nome}
          </h2>
          <p className="text-gray-500">{curriculo.cargo}</p>

          <Separator className="my-4" />

          <p>{curriculo.resumo}</p>

          <Separator className="my-4" />

          <h3 className="font-bold">Contato</h3>
          <p>{curriculo.email}</p>
          <p>{curriculo.telefone}</p>

          <Separator className="my-4" />

          <h3 className="font-bold mb-2">Experiências</h3>

          {curriculo.experiencias?.map((exp: any, i: number) => (
            <div key={i} className="border p-2 mb-2 rounded">
              <p><strong>Empresa:</strong> {exp.empresa}</p>
              <p><strong>Cargo:</strong> {exp.cargo}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}