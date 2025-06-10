import { route } from 'preact-router';

export default function HomePage() {
  const handleClick = () => {
    route('/dashboard');
  };

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center text-white gap-10">
      <button
        className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600"
        onClick={handleClick}
      >
        Explore
      </button>
    </div>
  );
}
