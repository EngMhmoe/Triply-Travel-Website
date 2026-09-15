export default function Blockquote({ author, quote }) {
  return (
    <section className="border-l-4 border-orange-500 bg-(--secondary-color) p-5 my-10 rounded-r-2xl">
      <p className="italic text-gray-500 mb-3">{quote}</p>

      {/* ////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////// */}

      <span className="flex items-center gap-2 text-sm font-bold">
        <span className="w-8 h-0.5 bg-gray-400 block" />
        {author}
      </span>
    </section>
  );
}
