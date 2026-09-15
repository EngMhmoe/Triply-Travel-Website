//import material UI
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

//import Stor usePagination
import { usePagination } from "../../../Store/APIS/usePaginationStor";
import FadeUpMotion from "../../FreeMotions/FadeUpMotion";

export default function PaginationComponentUI() {
  const { pagination, setPagination } = usePagination();

  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////

  const handleChange = (event, value) => {
    setPagination({
      ...pagination,
      page: value,
    });
  };

  return (
    <FadeUpMotion>
      <div className="flex justify-center mt-20">
        <Stack spacing={2}>
          <Pagination
            // count={4} // عدد الصفحات
            count={pagination.pageCount || 4}
            page={pagination.page} // الصفحة الحالية
            onChange={handleChange}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white",
                backgroundColor: "#ff6200",
              },

              "& .Mui-selected": {
                backgroundColor: "red !important",
                color: "white",
              },

              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "red",
              },
            }}
          />
        </Stack>
      </div>
    </FadeUpMotion>
  );
}
