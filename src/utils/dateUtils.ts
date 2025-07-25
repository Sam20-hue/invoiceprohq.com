
export const formatDateToDDMMYYYY = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatDateToInputValue = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};
