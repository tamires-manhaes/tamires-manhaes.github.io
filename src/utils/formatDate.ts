export const formatDate = (timestamp: number) => {
  const date = new Date(Number(timestamp));

  const formattedDate = date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return `${formattedDate} às ${formattedTime}`;
};
