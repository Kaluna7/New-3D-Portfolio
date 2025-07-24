export function Navbar() {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 w-[50rem] bg-black p-4 text-[#34E0A1] rounded-4xl font-bold z-40">
      <ul className="flex flex-row gap-10 items-center justify-center list-none">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Project</a></li>
        <li><a href="">Experience</a></li>
        <li><a href="">Certificate</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  );
}
