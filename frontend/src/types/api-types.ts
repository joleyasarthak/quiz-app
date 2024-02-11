import { Quiz } from "./types";

export type MessageResponse = {
    success: boolean;
    message: string;
  };

export type AllQuizResponse = {
    success: boolean;
    quiz: Quiz[]
};

export type QuizResponse = {
    success: boolean;
    quiz: Quiz
}

export type QuizRequest = {
    quizId: string
}

export type NewQuizRequest = {
    name: string,
    subjectName: string;
    testDate: string;
    studentClass: string;
}