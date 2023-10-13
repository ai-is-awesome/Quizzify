import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import LanguagePack from "./models/LanguagePack.js";
import cors from "cors";
import Choice from "./models/Choice.js";
import Question from "./models/Question.js";
import connectToDb from "./db.js";
import translate from "./translate2.js";
import { rateLimit } from "express-rate-limit";
import Word from "./models/Word.js";

const app = express();
app.use(express.json());

app.use(cors());

// mongoose.connect(process.env.MONGO_DB_URL).then(() => {
//   console.log("Connected to db");
// });

connectToDb();

// Window time in ms
const windowMS = 1 * 60 * 1000;
// Max requests per windows time
const max = 5;

const apiLimiter = rateLimit({
  windowMs: windowMS, // 1 minutes
  max: max, // Limit each IP to 1 requests per `window` (here, per 1 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false,
  message: async (req, res) => {
    return `You can make ${max} request(s) every ${windowMS} ms(s). `;
  }, // Disable the `X-RateLimit-*` headers
});

app.use("/translate", apiLimiter);

app.get("/status", async (req, res) => {
  const state = mongoose.connection.readyState;
  let state_string = "";
  if (state === 0) {
    state_string = "Disconnected";
  } else if (state === 1) {
    state_string = "Connected";
  } else if (state === 2) {
    state_string = "Connecting";
  } else {
    state_string = "Disconnecting";
  }
  return res.json({ Status: "Service is running", DB_state: state_string });
});

app.post("/add_quiz", async (req, res) => {
  console.log(req.body);
  try {
    // Validation
    const quiz = await LanguagePack.find({ quizName: req.body.name });
    console.log("Quiz: ", quiz);
    if (quiz.length) {
      return res.json({ message: "Quiz name already exists" });
    }

    // Creating new Quiz Object
    const q = new LanguagePack({
      quizName: req.body.name,
      questions: [],
      numberOfQuestions: 0,
    });
    const callback = await q.save();
    return res.json(callback);
  } catch (e) {
    return res.json({ message: e.message });
  }
});

app.post("/get_random_word_of_the_day", async (req, res) => {
  const count = await Word.count({});
  const random = Math.floor(Math.random() * count);

  const word = await Word.findOne().skip(random);
  return res.json(word);
});

app.post("/submit_quiz", async (req, res) => {
  return res.json({});
});

app.post("/translate", async (req, res) => {
  const text = req.body.text;
  console.log(req.body);
  const result = await translate(text);
  return res.json({ text: result.TranslatedText, data: result });
});

app.get("/get_all_quiz", async (req, res) => {
  console.log("get request: ");
  try {
    const quizzes = await LanguagePack.find({});
    return res.json(quizzes);
  } catch (e) {
    return res.json({ message: e.message });
  }
});

app.post("/get_quiz_by_id", async (req, res) => {
  try {
    const quizId = req.body.quizId;
    console.log(quizId);
    const quiz = await LanguagePack.findById({ _id: quizId }).populate([
      { path: "questions", populate: [{ path: "choices" }] },
    ]);
    return res.json(quiz);
  } catch (e) {
    return res.json({ error: e.message });
  }
});

app.post("/add_question_to_quiz", async (req, res) => {
  try {
    const body = req.body;
    const quizId = body.quizId;
    const choices = body.choices;
    const question = new Question({
      questionText: body.questionText,
      questionType: body.questionType,
      category: body.category,
    });
    for (const choice of choices) {
      const choiceDoc = new Choice({ choiceText: choice.choiceText });
      const choiceDocCreated = await choiceDoc.save();
      question.choices.push(choiceDocCreated._id);
    }

    const questionDoc = await question.save();

    const quiz = await LanguagePack.findById(quizId);
    console.log(mongoose.Types.ObjectId.isValid(questionDoc._id));
    quiz.questions.push(questionDoc._id);
    quiz.numberOfQuestions = quiz.numberOfQuestions + 1;
    console.log("quiz is : ", quiz);
    await quiz.save();
    return res.json(questionDoc);
  } catch (e) {
    console.log(e);
    return res.json({ error: "An error is encountered", e });
  }
});

app.post("/signup", async (req, res) => {
  const { firstName, lastName, password, languagePackLanguage } = req.body;

  return res.json("hello");
});

app.post("/login", async (req, res) => {
  return res.json("hello");
});

app.listen(3001, () => {
  console.log("Listening to 3001");
});
