import { valuesVisible } from "~/store/user";

export const formatAsMoney = (value: number): string => {
  if (!value) {
    return "";
  }

  if (!valuesVisible.value) return "F$ ***";

  value = value / 100; // Convert cents to falsos

  const formattedValue = value
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace("R$", "F$");
  return formattedValue;
};

export const formatDate = (date: Date | string): string => {
  if (!date) {
    return "";
  }

  const dateObj = typeof date === "string" ? new Date(date) : date;

  return dateObj.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
