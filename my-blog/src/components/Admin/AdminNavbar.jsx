import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav>
      <ul>
        <Link>articles List</Link>
        <Link>add article</Link>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
