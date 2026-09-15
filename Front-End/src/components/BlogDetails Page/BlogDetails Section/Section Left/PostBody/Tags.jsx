export default function Tags({ tags, FilterTag }) {
  return (
    <div className="flex flex-wrap items-center gap-5 py-5 border-t border-b  border-orange-500/30 mt-4">
      <span className="font-medium">Tags :</span>

      {/* ////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////// */}

      {tags?.map((tag) => (
        <span
          onClick={() => FilterTag(tag.name)}
          key={tag.id}
          className="px-6 py-1 border border-gray-200 rounded-full bg-red-100 text-(--primary-color2) 
                     duration-1000 hover:border-none hover:bg-(--primary-color2) hover:text-white cursor-pointer transition-all"
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}
