import { ReliableFetchFunction } from "./types";
import fetchTimeout from "./fetchTimeout";

const fetchHedged: ReliableFetchFunction = async (input, init) => {
  let response: Response;
  try {
    response = await fetchTimeout(input, { ...init });
  } catch (error: unknown) {
    const { name } = error as Error;
    if (name !== "AbortError") {
      throw error;
    }
    response = await fetch(input, init);
  }
  return response;
};

export default fetchHedged;
