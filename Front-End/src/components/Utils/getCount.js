export const getCount = (data, key, value) => {
  return data.filter(
    (item) => item[key]?.toLowerCase().trim() === value.toLowerCase().trim()
  ).length;
};