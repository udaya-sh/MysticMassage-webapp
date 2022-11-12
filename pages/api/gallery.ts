import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  gallery: Photo[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const gallery = await sanityClient.fetch(query);
}
