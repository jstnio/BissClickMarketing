import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function chatWithAgent(message: string, context?: string) {
  try {
    const systemMessage = `You are a knowledgeable marketing expert at BissClick, a digital marketing agency. 
    Your role is to help potential clients understand our services and provide valuable marketing insights.
    Always be professional, helpful, and focus on how BissClick can help solve their marketing challenges.
    Keep responses concise but informative.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemMessage },
        ...(context ? [{ role: "assistant", content: context }] : []),
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return {
      message: response.choices[0].message.content,
      success: true
    };
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return {
      message: "I apologize, but I'm having trouble processing your request at the moment. Please try again later.",
      success: false
    };
  }
}
