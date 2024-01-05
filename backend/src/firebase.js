// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
import admin from "firebase-admin";
import "dotenv/config";
import { applicationDefault } from "firebase-admin/app";

export const initializeFirebase = () => {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  console.log("Service account ID : ", serviceAccount.project_id);
  const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  return app;
};

export const getFirebaseAuth = () => {
  return admin.auth();
};

export const getUIDFromIDToken = (token) => {
  return new Promise((res, rej) => {
    getFirebaseAuth()
      .verifyIdToken(token)
      .then((decoded) => res(decoded.uid))
      .catch((e) => rej(e));
  });
};
