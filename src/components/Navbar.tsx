import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const loacation = useLocation();

  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            className={cn('navbar-item',
              { 'has-background-grey-lighter': loacation.pathname === '/' })}
            to="/"
          >
            Home
          </Link>

          <Link
            className={cn('navbar-item',
              {
                'has-background-grey-lighter':
                loacation.pathname.includes('/people'),
              })}
            to="/people"
          >
            People
          </Link>
        </div>
      </div>
    </nav>
  );
};