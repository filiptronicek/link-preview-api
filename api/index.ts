import { VercelRequest, VercelResponse } from "@vercel/node";
import { getLinkPreview } from "link-preview-js";

import isURL from 'validator/lib/isURL';

export default (request: VercelRequest, response: VercelResponse) => {
  const { url = "https://github.com/" } = request.query;
  if (isURL(url)) {
    getLinkPreview(url).then((data) => {
        response.status(200).send(data);
      });
  } else {
    response.status(400).send({
        status: "error",
        message: "Invalid URL provided"
    })
  }
};
