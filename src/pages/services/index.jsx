import { useState } from "react";

// Assets
import { links } from "../../assets/js/pages/services";

export default function Services() {
  const [page, setPage] = useState(links[0].component);

  const current = page.type.name;

  console.log(page);
  function add_link(link, i) {
    return (
      <span
        key={i}
        className={`cursor-pointer p-4 ${current === link.name && "bg-sky-700"}`}
        onClick={() => setPage(link.component)}
      >
        {link.label}
      </span>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold border-l-4 border-sky-500 px-3">
        Services
      </h2>

      <nav className="bg-sky-500 text-sky-100 flex gap-4">
        {links.map(add_link)}
      </nav>

      {page}
    </div>
  );
}
