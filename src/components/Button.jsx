export function Button({ label, link }) {
  return (
    <a 
      href={link}
      className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-600"
    >
      {label}
    </a>
  );
}
