import connectToDb from "./db.js";
import Quiz from "./models/LanguagePack.js";
import fs from "fs";
import translate from "./translate2.js";
import Word from "./models/Word.js";
import User from "./models/User.js";

connectToDb();

const deleteAllQuiz = async () => {
  await Quiz.deleteMany({});
};

async function fe() {
  const rawData = fs.readFileSync("vocab_data.json");
  const data = JSON.parse(rawData);
  console.log(data.length);
  return;
  const outputArray = [];
  for (let i = 0; i < data.length; i++) {
    const output = await translate(data[i], "en", "ta");
    console.log(i);
    outputArray.push(output);
  }

  fs.writeFileSync("output-vocab-tamil.json", JSON.stringify(outputArray));
}

async function validateJSON(f1, f2) {
  const d1 = JSON.parse(fs.readFileSync("vocab_data.json", "utf-8"));
  const d2 = JSON.parse(fs.readFileSync("output-vocab.json", "utf-8"));
  return d1 === d2;
}

async function addWordsToDb(input, output, origin, target) {
  const f1 = JSON.parse(fs.readFileSync("vocab_data.json", "utf-8"));
  const f2 = JSON.parse(fs.readFileSync("output-vocab.json", "utf-8"));
  for (let i = 0; i < f1.length; i++) {
    const origin = "en";
    const translatedWord = f2[i]["TranslatedText"];
    const translatedWordOrigin = "fr";
    const word = new Word({
      word: f1[i],
      origin,
      translatedWord,
      translatedWordOrigin,
    });
    await word.save();
    console.log("I is : ", i);
  }
}

async function unboard() {
  const user = await User.findOne({
    firebaseUID: "x1NIWpPHWYTHb205fjjRC6buEgL2",
  });
  console.log(user);
  user.isOnboarded = false;
  const u = await user.save();
  return u;
}

async function getUser(obj) {
  const user = await User.findOne(obj);
  return user;
}

async function callAsyncOperation(func) {
  func()
    .then((d) => {
      console.log("-------------------------");
      console.log("async function successfully executed");
      console.log("Return output is \n----------------");
      console.log(d);
      console.log("-------------------------");
    })
    .catch((e) => console.log(e.message));
}

callAsyncOperation(() => unboard());
