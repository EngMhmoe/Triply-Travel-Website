//import Hook is useDocumentLanguage
import useDocumentLanguage from "./Hooks/Header/useDocumentLanguage";

//import RouterApp
import RouterApp from "./Routers/RouterApp";

export default function App() {
  //Dir APP
  useDocumentLanguage();

  return (
    <>
      <RouterApp />
    </>
  );
}
