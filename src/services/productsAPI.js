import localProducts from "../data/products";

export const fetchProducts = async () => {
  try {
    const res = await fetch("https://sheetdb.io/api/v1/zn8pcz91rmxdc");
    if (!res.ok) throw new Error(`SheetDB responded with ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.warn("SheetDB fetch failed — using local fallback data.", err.message);
    return localProducts;
  }
};
