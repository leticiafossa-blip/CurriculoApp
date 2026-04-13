import Nav from "./Nav";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold">Sistema de Currículos</h1>
      <Nav />
    </header>
  );
}