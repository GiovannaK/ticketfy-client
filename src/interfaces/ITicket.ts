export interface ITicket {
  title: string;
  description: string;
  price: number | string;
  quantity: number | string;
  date: string;
  hour: string;
  isOnline?: boolean;
  isFree?: boolean;
  category: string;
  address?: string;
  link?: string;
}