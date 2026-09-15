/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// React
//============================================================
import { Fragment, useState } from "react";

//============================================================
// Material UI
//============================================================
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Data
//============================================================
import topFilms from "../../../Data/Home/tourTypeInput";

/*====================================================================================================
Step 2 ==> Helper
======================================================================================================*/

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

/*====================================================================================================
Step 3 ==> Component
======================================================================================================*/

export default function TourTypeInput({
  value,
  onChange,
  label = "tour type",
}) {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { t } = useTranslation();

  /*==================================================================================================
  State
  ==================================================================================================*/

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [options, setOptions] = useState([]);

  /*==================================================================================================
  Handlers
  ==================================================================================================*/

  async function handleOpen() {
    setOpen(true);

    setLoading(true);

    await sleep(1000);

    setOptions([...topFilms]);

    setLoading(false);
  }

  function handleClose() {
    setOpen(false);

    setOptions([]);
  }

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <Autocomplete
      open={open}
      value={value}
      options={options}
      loading={loading}
      onOpen={handleOpen}
      onClose={handleClose}
      onChange={(_, newValue) => onChange?.(newValue)}
      isOptionEqualToValue={(option, currentValue) =>
        option.title === currentValue.title
      }
      getOptionLabel={(option) => t(option.title) || ""}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t(label)}
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <Fragment>
                  {loading && <CircularProgress color="inherit" size={20} />}

                  {params.InputProps.endAdornment}
                </Fragment>
              ),
            },
          }}
        />
      )}
    />
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
