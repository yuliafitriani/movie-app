import { apiClient } from "./axios";

export type Account = {
  id: number;
  name: string;
  username: string;
};

export const getAccount = async (): Promise<Account> => {
  const res = await apiClient.get<Account>("/account");
  return res.data;
};
