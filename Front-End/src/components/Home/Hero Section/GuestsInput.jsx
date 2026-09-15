/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// React
//============================================================
import { useState } from "react";

//============================================================
// Material UI
//============================================================
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";

//============================================================
// Material Icons
//============================================================
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import GroupsIcon from "@mui/icons-material/Groups";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function GuestsSelect() {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { t } = useTranslation();

  /*==================================================================================================
  Constants
  ==================================================================================================*/

  const PRIMARY_COLOR = "#f26f55";
  const MAX_GUESTS = 8;

  /*==================================================================================================
  State
  ==================================================================================================*/

  const [open, setOpen] = useState(false);

  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
  });

  /*==================================================================================================
  Handlers
  ==================================================================================================*/

  function handleGuests(type, action) {
    setGuests((prev) => {
      const totalGuests = prev.adults + prev.children;

      const nextValue = action === "inc" ? prev[type] + 1 : prev[type] - 1;

      if (action === "inc" && totalGuests >= MAX_GUESTS) {
        return prev;
      }

      if (action === "dec" && nextValue < (type === "adults" ? 1 : 0)) {
        return prev;
      }

      return {
        ...prev,
        [type]: nextValue,
      };
    });
  }

  /*==================================================================================================
  Helpers
  ==================================================================================================*/

  function renderGuestsValue() {
    const values = [];

    if (guests.adults > 0) {
      values.push(`${guests.adults} ${t("adults")}`);
    }

    if (guests.children > 0) {
      values.push(`${guests.children} ${t("child")}`);
    }

    return values.join(" · ") || t("guests");
  }

  /*==================================================================================================
  Counter Component
  ==================================================================================================*/

  function Counter({ label, subtitle, value, min, type }) {
    return (
      <MenuItem disableRipple sx={{ pointerEvents: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box>
            <Typography fontWeight={600} color={PRIMARY_COLOR}>
              {label}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          </Box>

          <Stack direction="row" spacing={0} alignItems="center">
            <IconButton
              size="small"
              disabled={value <= min}
              onClick={() => handleGuests(type, "dec")}
              sx={{
                border: "1px solid #ddd",
                color: PRIMARY_COLOR,
                "&:disabled": {
                  color: "#ccc",
                },
              }}
            >
              <RemoveIcon fontSize="small" />
            </IconButton>

            <Typography width={24} textAlign="center">
              {value}
            </Typography>

            <IconButton
              size="small"
              onClick={() => handleGuests(type, "inc")}
              disabled={guests.adults + guests.children >= MAX_GUESTS}
              sx={{
                border: "1px solid #ddd",
                color: PRIMARY_COLOR,
              }}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </MenuItem>
    );
  }

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>{t("guests")}</InputLabel>

        <Select
          value="Guests"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          displayEmpty
          input={<OutlinedInput label={t("guests")} />}
          MenuProps={{
            disableScrollLock: true,
          }}
          renderValue={() => (
            <Stack direction="row" spacing={1} alignItems="center">
              <GroupsIcon fontSize="small" sx={{ color: PRIMARY_COLOR }} />

              <Typography fontWeight={500}>{renderGuestsValue()}</Typography>
            </Stack>
          )}
          sx={{
            borderRadius: 1,
          }}
        >
          <Counter
            type="adults"
            label={t("adults")}
            subtitle={t("age 13+")}
            value={guests.adults}
            min={1}
          />

          <Counter
            type="children"
            label={t("children")}
            subtitle={t("age 2–12")}
            value={guests.children}
            min={0}
          />

          <MenuItem
            disableRipple
            sx={{
              justifyContent: "center",
              pointerEvents: "auto",
            }}
          >
            <Button
              onClick={() => setOpen(false)}
              sx={{
                backgroundColor: PRIMARY_COLOR,
                color: "#fff",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: PRIMARY_COLOR,
                },
              }}
            >
              {t("done")}
            </Button>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
