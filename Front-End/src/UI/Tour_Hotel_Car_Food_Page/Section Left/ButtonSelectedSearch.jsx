export default function ButtonSelectedSearch({
  BtnTitle,
  OpenSearch,
  SetOpenSearch,
  t = () => {},
  language = "",
}) {
  return (
    <button
      onClick={() => SetOpenSearch(!OpenSearch)}
      className={`w-full bg-white/10 p-2 rounded-lg capitalize ${language === "en" ? "text-left" : "text-right"}`}
    >
      {t(BtnTitle.trim().toLowerCase())} ▼
    </button>
  );
}
