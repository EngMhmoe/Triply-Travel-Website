import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const RATING_LABELS = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${RATING_LABELS[value]}`;
}

export default function HoverRating({ setRating, value, setValue }) {
  const [hover, setHover] = React.useState(-1);

  React.useEffect(() => {
    setRating(value);
  }, [value]);

  return (
    <Box sx={{ width: 300, display: "flex", alignItems: "center" }}>
      <Rating
        size="large"
        className=""
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue || 0);
          setRating(newValue || 0);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2, fontSize: "20px", color: "red" }}>
          {RATING_LABELS[hover !== -1 ? hover : value]}
        </Box>
      )}
    </Box>
  );
}
