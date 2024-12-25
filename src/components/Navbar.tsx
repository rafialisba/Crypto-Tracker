import React from "react";

const Navbar = () => {
  // Mengembangkan fitur coin list dan chart setelah UPM
  const navItems = [
    { name: "Home", link: "/home" },
    { name: "Coin List", link: "coinlist" },
    { name: "Chart", link: "/chart" },
  ];

  return (
    <nav className="flex justify-center gap-4 py-4">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="text-neutral-400 hover:underline hover:underline-offset-4"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
