export function AccessDenied(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-semibold">Acesso negado</h1>
      <p className="text-xl font-medium">Você não tem acesso a essa página</p>
    </div>
  );
}
