type Quiz = {
    _id: string;
    subject: string;
    name: string;
    studentClass: string;
    questions: Question[];
    startDate: string;
    endDate: string;
  };
  
  type Question = {
    _id: string;
    content: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctAnswer: string;
    score: number;
  };

  export type {Quiz,Question}