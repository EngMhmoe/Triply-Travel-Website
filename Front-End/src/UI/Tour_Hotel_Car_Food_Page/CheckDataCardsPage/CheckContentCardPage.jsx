//import Component IsNot_contentCard
import IsNot_contentCard from "./IsNot_contentCard";

//import Store usePagination
import { usePagination } from "../../../Store/APIS/usePaginationStor";
import FadeUpMotion from "../../FreeMotions/FadeUpMotion";

export default function CheckContentCardPage({ Is_contentCards }) {
  const { pagination } = usePagination();

  return (
    <FadeUpMotion>
      <div>{pagination.total ? Is_contentCards : <IsNot_contentCard />}</div>
    </FadeUpMotion>
  );
}
