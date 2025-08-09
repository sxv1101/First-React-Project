const intl = new Intl.NumberFormat("en-US", {
  stlye: "currency",
  currency: "PHP",
});
export const priceConverter = (price) => intl.format(price);

export default function useCurrency(price) {
  return priceConverter(price);
}
