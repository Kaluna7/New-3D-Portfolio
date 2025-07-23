export function Navbar() {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 w-[60rem] bg-black p-6 text-white rounded-4xl">
      <ul className="flex flex-row gap-10 items-center justify-center list-none">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Experience</a></li>
        <li><a href="">Certificate</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  );
}
