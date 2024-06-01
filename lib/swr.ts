import swr, { SWRResponse } from "swr";
import fetchAxios from "./axios";

export const fetchSWR = (endpoint: string | null): SWRResponse => {
  return swr(endpoint, () => fetchAxios.get(endpoint as string));
};
