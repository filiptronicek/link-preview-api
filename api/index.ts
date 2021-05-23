import { VercelRequest, VercelResponse } from "@vercel/node";
import { getLinkPreview } from "link-preview-js";

export default (request: VercelRequest, response: VercelResponse) => {
  const { url = "https://trnck.dev/" } = request.query;
  getLinkPreview(url).then((data) => {
    response.status(200).send(data);
  });
};
