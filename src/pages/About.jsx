import { Link, Outlet, useHref } from "react-router-dom";

export default function About() {


  const url = useHref();

  return (
    <div>
      <h2 className="text-3xl font-bold border-l-4 border-sky-500 px-3">
        About
      </h2>

      <nav className="p-4 bg-sky-500 text-sky-100 flex gap-4">
        <Link to=''>About</Link>
        <Link to='mission'>Mission</Link>
        <Link to='vision'>Vision</Link>
        <Link to='future'>Future</Link>
      </nav>


      {
        url === '/about'
          ? <p><strong>About our company</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vero numquam commodi, animi perferendis saepe fuga ab autem enim illum reiciendis consequuntur officia? Earum sequi aspernatur, beatae repellendus delectus nisi nemo similique iure reiciendis ut at quaerat quia sunt voluptatum eos sapiente modi molestias rem consequuntur qui ex asperiores quidem provident excepturi! Recusandae cumque.</p>
          : <Outlet />
      }

    </div>
  )
}
