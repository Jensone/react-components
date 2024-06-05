export default function Hero({ title, subtitle, image }) {
  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-slate-50 p-10 rounded-2xl mx-10">
      <img src={image} alt="hero" className="w-96" />
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-lg text-slate-600">{subtitle}</p>
    </div>
  );
}
