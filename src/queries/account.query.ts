import { useQuery } from "@tanstack/react-query";
import { getAccount } from "../api/account.api";

export const useAccount = () =>
  useQuery({
    queryKey: ["account"],
    queryFn: getAccount,
  });
