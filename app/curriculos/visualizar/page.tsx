"use client";

import { useEffect, useState } from "react";
import { getCurriculos } from "@/lib/storage";
import CardCurriculo from "@/components/CardCurriculo";
import SkeletonCard from "@/components/SkeletonCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ListCurriculos() {
  const [curriculos, setCurriculos] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCurriculos(getCurriculos());
      setLoading(false);
    }, 1000);
  }, []);

  const filtrados = curriculos.filter((c) =>
    c.nome.toLowerCase().includes(search.toLowerCase()) ||
    c.cargo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Currículos</h2>

        <Button asChild>
          <Link href="/curriculos/cadastrar">+ Novo</Link>
        </Button>
      </div>

      <Input
        placeholder="Buscar por nome ou cargo..."
        className="mb-6"
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && (
        <>
          {[1, 2, 3].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </>
      )}

      {!loading && curriculos.length === 0 && (
        <div className="text-center mt-10">
          <p className="mb-4 text-gray-500">
            Nenhum currículo encontrado
          </p>

          <Button asChild>
            <Link href="/curriculos/cadastrar">
              Criar meu primeiro currículo
            </Link>
          </Button>
        </div>
      )}

      {!loading && curriculos.length > 0 && (
        <div>
          {filtrados.length === 0 ? (
            <p className="text-gray-500">
              Nenhum resultado encontrado
            </p>
          ) : (
            filtrados.map((c) => (
              <CardCurriculo key={c.id} curriculo={c} />
            ))
          )}
        </div>
      )}
    </div>
  );
}