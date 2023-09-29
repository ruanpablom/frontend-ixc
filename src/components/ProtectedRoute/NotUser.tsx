import { NavLink } from 'react-router-dom';

export function NotUser(): JSX.Element {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className="text-4xl font-semibold text-center">
        Você Precisa estar logado na aplicação
      </h1>
      <NavLink
        className="text-accent cursor-pointer text-xl underline"
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
}
