export const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

export const formatDate = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return `${day}-${month}-${year}`;
};
