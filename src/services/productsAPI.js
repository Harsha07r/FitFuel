export const fetchProducts = async () => {
  const res = await fetch("https://sheetdb.io/api/v1/zn8pcz91rmxdc");
  const data = await res.json();
  return data;
};