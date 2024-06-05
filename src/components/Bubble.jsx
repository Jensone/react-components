export default function Bubble({ list }) {
  return (
    <div className="overflow-x-auto flex justify-between p-4">
      {list.map((item) => (
        <a
          href={item.link}
          key={item.title}
          className="bg-slate-50 py-2 px-4 rounded-full border-2 border-solid border-slate-400 text-sm text-slate-900"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}
