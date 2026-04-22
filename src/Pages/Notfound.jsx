import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[#F8FAFC]">
      <h1 className="text-[120px] md:text-[180px] font-black text-[#1E293B] leading-none mb-4 tracking-tighter">
        404
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-4 tracking-tight">
        Page Not Found
      </h2>
      <p className="text-[#64748B] text-lg mb-10 max-w-md mx-auto">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-[#244D3F] text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
      >
        Go Back Home
      </button>
    </div>
  );
}
