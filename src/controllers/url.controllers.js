import url from "../model/url.model.js";

function createRandomString(num) {
  let s = "";
  for (let i = 0; i < num; i++) {
    const ch = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    s += ch;
  }

  return s;
}

async function getShortLink(req, res) {
  try {
    const { redirectURL } = req.body;
    if (!redirectURL) {
      return res.status(400).json({
        error: "URL is required",
      });
    }
    const size = 8;
    const shortID = createRandomString(size);
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
  }
}

async function redirectRequest(req, res) {
  try {
    const shortID = req.params.shortID;
    if (!shortID) {
      return res.status(400).json({
        error: "Provide Shorten URL",
      });
    }
    const entry = await url.findOneAndUpdate(
      {
        shortID,
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

    res.redirect(entry.redirectURL);
  } catch (error) {
    // throw new Error("Something went wrong", error);
    console.log("Something went wrong", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}

export { getShortLink, redirectRequest };
