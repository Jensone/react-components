export default function Card({ image, title, description, buttonText, link }) {
  return (
    <div className="flex items-center rounded-lg shadow-md bg-white p-4 max-w-md m-4 hover:shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer">
      <img
        src={image ? image : "https://placehold.it/150"}
        alt=""
        className="rounded-lg w-24 h-24"
      />
      <div className="p-3">
        <h2 className="font-semibold">{title}</h2>
        <p className="text-gray-500 text-sm italic">{description}</p>
        <a href={link} className="text-indigo-500 hover:opacity-50">
          {buttonText}
        </a>
      </div>
    </div>
  );
}
