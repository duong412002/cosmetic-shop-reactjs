const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

export default FormatPrice;