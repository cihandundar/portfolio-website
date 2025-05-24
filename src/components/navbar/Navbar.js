"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activePath, setActivePath] = useState("");

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
  ];

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <header className="py-5">
      <div className="container mx-auto flex justify-center">
        <nav>
          <ul className="flex gap-5">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className={`${
                    activePath === item.path ? "text-red-600" : "text-white"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
