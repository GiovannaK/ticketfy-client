export interface ITicket {
  id: string
	title: string
	description: string,
	date: string,
	hour: string,
	isActive: true,
	hasVariation: false,
	priceStandard: null,
	pricePremium: null,
	price: number,
	isOnline: true,
	link: string,
	imageUrl: null,
	address: null,
	quantity: number,
	latitude: null,
	longitude: null,
	createdAt: string,
	updatedAt: string,
	sellerId: ISeller,
  ticketCategory: ITicketCategory
}

export interface ISeller{
  id: string,
	fullName: string,
	email: string,
	role: string,
	loginToken: null,
	expirationLoginToken: null,
	stripeCustomerId: null,
	stripeAccountId: string,
	createdAt: string,
	updatedAt: string
}

export interface ITicketCategory{
  id: string,
	title: string,
	createdAt: string,
	updatedAt: string,
}
