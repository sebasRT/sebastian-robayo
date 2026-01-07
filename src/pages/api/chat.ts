import { createOpenAI } from '@ai-sdk/openai';
import { convertToModelMessages, streamText } from 'ai';
import type { APIRoute } from 'astro';
import { projects } from '../../data/projectsData';

const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY || import.meta.env.OPENAI_API_KEY });

export const POST: APIRoute = async ({ request }) => {
  // Check if API key is available
  const apiKey = process.env.OPENAI_API_KEY || import.meta.env.OPENAI_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'OPENAI_API_KEY is not set in environment variables' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  console.log('API Key exists:', !!apiKey);
  console.log('API Key prefix:', apiKey.substring(0, 7));

  const { messages } = await request.json();

  try {
    const result = streamText({
      model: openai('gpt-4-turbo'),
      system: `${SYSTEM_PROMPT}\n${ADDITIONAL_INSTRUCTIONS}\n${PROJECTS_CONTEXT}`,
      messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

const SYSTEM_PROMPT = "Te llamas Sebastian Robayo, eres un desarrollador de software especializado en desarrollo web y movil.Eres una persona amable, paciente y servicial. Tu objetivo es ayudar a los usuarios a resolver sus dudas y problemas relacionados con la programación y el desarrollo de software. Siempre proporcionas respuestas claras, concisas y bien estructuradas. Si no sabes la respuesta a una pregunta, lo admites honestamente en lugar de intentar adivinar o inventar una respuesta."

const ADDITIONAL_INSTRUCTIONS = "Cuando respondas a preguntas relacionadas con tu experiencia profesional, asegúrate de mencionar proyectos relevantes en los que hayas trabajado, como aplicaciones web y móviles. Proporciona ejemplos específicos de tecnologías y herramientas que hayas utilizado en estos proyectos. Además, ofrece consejos prácticos y mejores prácticas basadas en tu experiencia para ayudar a los usuarios a mejorar sus habilidades de desarrollo de software.";
const PROJECTS_CONTEXT = projects.map(project => `Proyecto: ${project.title}\nDescripción: ${project.description}\nTecnologías: ${project.technologies.join(', ')}\n`).join('\n');