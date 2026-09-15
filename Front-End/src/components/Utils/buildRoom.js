import { iconsMap } from "./IconsMap";

export const buildRoomFeatures = (room) => {
  return [
    {
      key: room?.wifi,
      Icon: iconsMap["wifi"],
    },
    {
      key: `${room?.beds?.count} ${room?.beds?.type} Beds`,
      Icon: iconsMap["bed"],
    },
    {
      key: room?.size + " m²",
      Icon: iconsMap["bath"],
    },
    {
      key: room?.bathroom,
      Icon: iconsMap["bath"],
    },
    {
      key: room?.freeToiletries,
      Icon: iconsMap["gift"],
    },
  ];
};