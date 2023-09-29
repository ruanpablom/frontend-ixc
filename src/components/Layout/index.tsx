/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useUser } from '@/contexts/user';
import { NavLink, Outlet } from 'react-router-dom';
import { BiMessageSquareDetail } from 'react-icons/bi';

export function Layout(): JSX.Element {
  const { user } = useUser();

  return (
    <div>
      <div className="navbar bg-neutral flex justify-center">
        <div className="max-w-7xl w-full ">
          <div className="flex-1">
            <NavLink to="/" className="btn btn-ghost normal-case text-xl">
              <BiMessageSquareDetail size={32} />
              ChatIXC
            </NavLink>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="!flex flex-col items-center justify-center w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <span>
                    {user.username && user.username[0]
                      ? user.username[0].toUpperCase()
                      : 'A'}
                  </span>
                  {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-neutral rounded-box w-52"
              >
                <li>
                  {user ? (
                    <NavLink to="/login" className="justify-between">
                      Login
                    </NavLink>
                  ) : (
                    <NavLink to="/signup">Signup</NavLink>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-7xl w-full h-[calc(100vh-100px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}