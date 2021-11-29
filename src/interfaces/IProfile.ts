export interface IProfile {
  id: string;
  fullName: string;
  email: string;
  role: string;
  loginToken: string | undefined | null;
  expirationLoginToken: string | undefined | null;
  stripeCustomerId: string | undefined | null;
  stripeAccountId: string | undefined | null;
  createdAt: string;
  updatedAt: string;
}