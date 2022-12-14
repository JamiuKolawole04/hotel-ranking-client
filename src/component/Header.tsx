import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <section className="d-flex align-items-center justify-content-betwen">
        <Link to="/">
          <h1>Hotel ranking</h1>
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/create">CREATE</Link>
            </li>

            <li>
              <Link to="/brand">BRANDS</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};
