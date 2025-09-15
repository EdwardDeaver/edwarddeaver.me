// Format the date to a string
export const formatDate = (date: Date, format: 'long' | 'short' = 'short'): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: format === 'long' ? 'long' : 'short',
    year: 'numeric'
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};