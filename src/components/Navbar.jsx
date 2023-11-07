import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Students</Link>
        </li>
        <li>
          <Link href="/new-student">Add Student</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
