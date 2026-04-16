import Link from "next/link";

export default function CardCurriculo({ curriculo }: any) {
  return (
    <div className="border p-4 mb-4 rounded shadow">
      <h3 className="text-xl font-bold">{curriculo.nome}</h3>
      <p>{curriculo.cargo}</p>
      <p className="text-sm text-gray-600">{curriculo.resumo}</p>

      <Link
        href={`/curriculos/visualizar/${curriculo.id}`}
        className="text-blue-500"
      >
        Ver detalhes
      </Link>

      {curriculo.imagem && (
     <img
        src={curriculo.imagem}
        alt="Foto"
        className="w-20 h-20 object-cover mb-2"
        />
        )}
    </div>
  );
}