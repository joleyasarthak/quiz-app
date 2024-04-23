const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);

export async function generate(prompt: string) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  try{
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const jsonString = text.substring(text.indexOf("["),text.lastIndexOf("]")+1);
    const questions = JSON.parse(jsonString);
    return questions;
  }
  catch(e){
    console.error(e);
  }
}
