// import url from "../model/url.model.js";
const url = require("../model/url.model.js");

function createRandomString(num) {
  let s = "";
  for (let i = 0; i < num; i++) {
    const ch = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    s += ch;
  }

  return s;
}
function fixURL(url) {
  if (!url.startsWith("https://") && !url.startsWith("http://")) {
    url = "https://" + url;
  }
  return url;
}
async function getShortLink(req, res) {
  try {
    let { redirectURL } = req.body;
    if (!redirectURL) {
      return res.status(400).json({
        error: "URL is required",
      });
    }
    const size = 8;
    const shortID = createRandomString(size);

    redirectURL = fixURL(redirectURL);

    const entry = await url.create({
      shortID,
      redirectURL,
    });

    if (!entry) {
      return res.status(400).json({
        error: "Something went wrong",
      });
    }

    return res.status(201).json({
      ShortURL: shortID,
    });
  } catch (error) {
    // throw new Error("Something went wrong", error);
    console.log("Something went wrong", error);

    return res
      .status(400)
      .json({ error: "Something went wrong in while creating the link" });
  }
}

async function redirectRequest(req, res) {
  try {
    const shortID = await req.params.shortID;

    if (!shortID) {
      return res.status(400).json({
        error: "Provide Shorten URL",
      });
    }
    const entry = await url.findOneAndUpdate(
      {
        shortID: shortID,
      },
      {
        $push: {
          history: { lastAccessed: new Date() },
        },
      },
      {
        new: true,
      }
    );

    if (!entry) {
      return res.status(404).json({ error: "Short URL not found" });
    }
    // console.log(entry);

    return res.status(200).redirect(`${entry.redirectURL}`);
  } catch (error) {
    console.log("Something went wrong", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}

// export { getShortLink, redirectRequest };
module.exports = { getShortLink, redirectRequest };
