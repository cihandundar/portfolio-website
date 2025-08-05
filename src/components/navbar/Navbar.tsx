"use client";
import React, { useState, useEffect } from "react";

type MenuItem = {
  name: string;
  path: string;
};

const Navbar = () => {
  const [activePath, setActivePath] = useState<string>("");

  const menuItems: MenuItem[] = [
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
                  className={`${activePath === item.path ? "text-white" : "text-gray-300"
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
