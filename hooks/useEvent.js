import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export function useEvent(id) {
  const { data, error } = useSWR(`/api/event/${id}`, fetcher);

  return {
    event: data,
    isLoading: !error && !data,
    isError: error,
  };
}
