import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '5a3ed57f81c1c7709ea71faee7eeeb15536fca65', queries,  });
export default client;
  