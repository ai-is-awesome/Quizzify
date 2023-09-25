// Imports the Google Cloud client library

import { Translate } from "@google-cloud/translate/build/src/v2/index.js";
// Creates a client
const translate = new Translate({
  clientOptions: {
    api_key: "AIzaSyDHFNd6a-UsgDxGH_XYBdTRD1DrAiej2xQ",
    quota_project_id: "skilled-index-381505",
  },
});

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const text = "HELLO WORLD";
const target = "ru";

async function translateText() {
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];
  console.log("Translations:");
  translations.forEach((translation, i) => {
    console.log(`${text[i]} => (${target}) ${translation}`);
  });
}

translateText();
