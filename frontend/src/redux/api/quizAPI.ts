import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";
import { AllQuizResponse, MessageResponse, NewQuizRequest, QuizRequest, QuizResponse } from "../../types/api-types";

const quiz = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3001/"
    }),
    tagTypes:["quiz"],
    endpoints:(builder)=>({
        getAllQuiz: builder.query<AllQuizResponse,string>({
            query: () => "quiz", providesTags: ["quiz"]
        }),
        getQuizById: builder.query<QuizResponse,QuizRequest>({
            query: ({quizId}) => `quiz/${quizId}`
        }),
        addNewQuiz: builder.mutation<MessageResponse,NewQuizRequest>({
            query: ({formData}) => ({
                url: "/createQuiz"
            })
        })
    })
})