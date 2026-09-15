import FadeUpMotion from "../../FreeMotions/FadeUpMotion";

export default function Tour_Title({ Title, t = () => {} }) {
  return (
    <FadeUpMotion>
      <h1 className="font-semibold mb-3 text-(--primary-color)">
        {t(Title.toLowerCase())}
      </h1>
    </FadeUpMotion>
  );
}
