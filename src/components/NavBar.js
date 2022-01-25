import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const allLinks = links.map((link) => {
    let href = '#' + link
    return (
      <a key={link} href={href}>{link}</a>
    )
  })
  return (
  <nav>
    {allLinks}
  </nav>
  );
}

export default NavBar;
