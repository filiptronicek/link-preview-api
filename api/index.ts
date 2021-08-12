import { VercelRequest, VercelResponse } from "@vercel/node";
import { getLinkPreview } from "link-preview-js";

import isURL from "validator/lib/isURL";

export default (request: VercelRequest, response: VercelResponse) => {
  const { url } = request.query;
  if (url) {
    const stringifiedURL = url.toString();
    if (isURL(stringifiedURL)) {
      getLinkPreview(stringifiedURL).then((data) => {
        response.status(200).send(data);
      });
    } else {
      response.status(400).send({
        status: "error",
        message: "Invalid URL provided",
      });
    }
  } else {
    response.status(400).send({
      status: "error",
      message:
        "No URL provided, to start making requests, refer to https://github.com/filiptronicek/link-preview-api#how-to-use-this-api",
    });
  }
};
