export default function Title({ title }) {
  return (
    <h1 className="text-2xl md:text-3xl font-bold text-(--primary-color) mb-4">
      {title}
    </h1>
  );
}
