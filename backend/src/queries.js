import mongoose from "mongoose";
import Category from "./models/Category.js";
import Quiz from "./models/Quiz.js";

class QuizManager {
  constructor() {}

  async deleteAllQuizzes() {
    await Quiz.deleteMany({});
  }

  async getAllQuizzes() {
    return Quiz.find({}).select("name");
  }

  async getQuizzesByQuery(query, select = {}) {
    return Quiz.find(query).select(select);
  }

  async getQuizById(quizId, selectQuery) {
    try {
      const quiz = await Quiz.findById(quizId).select(selectQuery);
      return quiz;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async submitQuiz(quizPayload) {
    try {
      this.verifyQuizPayload(quizPayload);
    } catch (e) {
      throw new Error(e);
    }
  }

  verifyQuizPayload(quizPayload) {
    if (!quizPayload) {
      throw new Error("No Quiz payload found");
    }
    if (!quizPayload.quizId) {
      throw new Error("No Quiz Id found");
    }
  }

  async create_quiz(quizData, userData) {
    const userObjectId = new mongoose.Types.ObjectId(userData._id);
    const names = await Quiz.find({
      created_by: userObjectId,
    }).select("name");

    const found = names.find((doc) => doc.name === quizData.quizName);
    if (found) {
      throw new Error("Quiz name already exists.");
    }

    const category = await Category.findOne({ name: quizData.category });
    if (!category) {
      throw new Error("Category does not exist.");
    }

    // Creating new Quiz Object
    const q = new Quiz({
      name: quizData.quizName,
      questions: [],
      numberOfQuestions: 0,
      category: category._id,
      isTimed: quizData.isTimed,
      created_by: userData._id,
      description: quizData.description,
    });
    const callback = await q.save();
    return callback;
  }
}

export default QuizManager;
