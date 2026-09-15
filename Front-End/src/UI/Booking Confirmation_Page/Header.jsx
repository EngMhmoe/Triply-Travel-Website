export default function Header({ title }) {
  return (
    <h3 className="text-start border-b-2 border-black/15 pb-3 font-bold text-2xl text-(--primary-color2) mb-4">
      {title}
    </h3>
  );
}
