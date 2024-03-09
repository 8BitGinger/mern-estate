import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6dl mx-auto p-3">
        <h1 className="font-bold text-sm sm:texct-xl flex flex-wrap">
          <span className="text-slate-500">HomeBase</span>
          <span className="text-slate-700"> Realty </span>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 text-slate-600 placeholder-slate-600"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <nav>
          <ul className="flex gap-4">
            <Link to="/">
              <li className="hidden sm:inline text-slate-700 hover:underline">
                Home
              </li>
            </Link>

            <Link to="/about">
              <li className="hidden sm:inline text-slate-700 hover:underline">
                About
              </li>
            </Link>

            <Link to="/profile">
              <li className="hidden sm:inline text-slate-700 hover:underline">
                Profile
              </li>
            </Link>

            <Link to="/signin">
              <li className=" text-slate-700 hover:underline">Sign In</li>
            </Link>

            <Link to="/signup">
              <li className="hidden sm:inline text-slate-700 hover:underline">
                Sign Up
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
