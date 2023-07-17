import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="flex text-2xl shadow-md border-2 justify-between">
        <Link to="/">
          <div className="h-12 flex items-center p-10 hover:bg-slate-100 w-full">
            Home
          </div>
        </Link>
        <Link to="multi-select">
          <div className="h-12 flex items-center p-10 hover:bg-slate-100">
            Multi Select
          </div>
        </Link>
        <Link to="IPLookUp">
          <div className="h-12 flex items-center p-10 hover:bg-slate-100">
            IPLookUp
          </div>
        </Link>
        <Link to="Pokemon">
          <div className="h-12 flex items-center p-10 hover:bg-slate-100">
            Pokemon
          </div>
        </Link>
        <Link to="JobSearch">
          <div className="h-12 flex items-center p-10 hover:bg-slate-100">
            Job Search
          </div>
        </Link>
        <Link to="cat">
          <div className="h-12 flex items-center p-10 hover:bg-slate-100">
            Cat
          </div>
        </Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
