export default function BtnCancel({ text = "", setCancelItem }) {
  return (
    <button
      onClick={() => setCancelItem(null)}
      className="py-2.5 w-full rounded-2xl bg-red-200 cursor-pointer duration-1000 border border-red-400 text-(--primary-color2) hover:bg-(--primary-color2) hover:text-white"
    >
      {text}
    </button>
  );
}
