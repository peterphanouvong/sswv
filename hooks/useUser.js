import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export function useUser(id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
