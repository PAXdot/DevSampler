export const truncateAddress = (address: string, maxLength: number = 8): string => {
  if (address.length <= maxLength) {
    return address;
  }
  const ellipsis = "…";
  const startLength = Math.ceil((maxLength + ellipsis.length) / 2) + 1;
  const endLength = Math.floor((maxLength + ellipsis.length) / 2);
  return address.slice(0, startLength) + ellipsis + address.slice(address.length - endLength);
};
