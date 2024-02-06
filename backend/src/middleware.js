import { getUIDFromIDToken } from "./firebase.js";

export function verify_token() {
  return async (req, res, next) => {
    // console.log("hit verify otken middle");
    try {
      if (!req.body.token) {
        return res.status(400).json({ error: "No token provided" });
      }
      const uid = await getUIDFromIDToken(req.body.token);
      req.firebaseUID = uid;
      // console.log("UID : ", uid);
      next();
    } catch (e) {
      console.log("ERROR", e.message);
      return res.status(400).json(e);
    }
  };
}

export const requireParams = (params) => {
  // console.log("Require params executed");
  return (req, res, next) => {
    const missing = [];
    params.forEach((param) => {
      // console.log("param is : ", param);
      if (!(param in req.body)) {
        missing.push(param);
      }
    });

    if (missing.length > 0) {
      return res
        .status(400)
        .json({ error: `missing required parameters: ${missing.join(", ")}` });
    }
    next();
  };
};
