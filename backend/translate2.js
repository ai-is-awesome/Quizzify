import {
  TranslateClient,
  TranslateTextCommand,
} from "@aws-sdk/client-translate";

const client = new TranslateClient({ region: "us-east-1" });

const translate = async (
  text = "Foreign Language Learning is awesome",
  sourceLanguageCode = "en",
  TargetLanguageCode = "fr"
) => {
  const input = {
    // TranslateTextRequest
    Text: text, // required
    TerminologyNames: [],
    SourceLanguageCode: sourceLanguageCode, // required
    TargetLanguageCode: TargetLanguageCode, // required
    Settings: {
      // TranslationSettings
      Formality: "FORMAL" || "INFORMAL",
      Profanity: "MASK",
    },
  };

  const command = new TranslateTextCommand(input);
  const result = await client.send(command);
  return result;
};

export default translate;
