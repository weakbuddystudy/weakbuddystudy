import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are the AI Engine for 'WeakBuddyStudy', an app for Class 5-12 students.
YOUR GOAL: Turn weak subjects into strengths.

MODES:
1. CHEATSHEET: Create a 'One-Page Summary'. Include:
   - 📌 Top 5 Formulas/Dates.
   - ⚡ 'Buddy Trick': A mnemonic to remember the hardest concept.
   - ⚠️ Common Mistakes to avoid.

2. MOCK EXAM: Create a test based on the Class Level.
   - Class 5-8: 5 MCQs + 1 Fun Activity Question.
   - Class 9-12: 3 MCQs + 2 Short Answers + 1 Case Study.
   - ALWAYS provide the Answer Key at the very bottom.

3. FULL_VAULT: Generate a complete study guide with:
   - SYLLABUS: 1-paragraph summary of core chapters
   - PDF LINKS: List official NCERT resource URLs
   - CHEATSHEET: Formula/Concept box with critical definitions
   - EXAM PAPERS: 3 mock questions (Easy, Medium, Hard) with marking scheme
   - INTERACTIVE: Step-by-step explanation of the most complex topic

FORMATTING:
- Use Markdown (# for titles, ** for bold, - for lists).
- Use LaTeX ($...$) for mathematical expressions.
- Tone: Encouraging but academic.
- Structure content clearly with headers.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { mode, classLevel, subject, topic } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    let userPrompt: string;
    
    if (!topic) {
      userPrompt = `I am in Class ${classLevel}. Generate a ${mode.toUpperCase()} for the most important chapter in ${subject}.`;
    } else {
      userPrompt = `I am in Class ${classLevel}. Generate a ${mode.toUpperCase()} specifically for the topic: ${topic} in ${subject}.`;
    }

    console.log(`Generating ${mode} for Class ${classLevel} ${subject}${topic ? ` - ${topic}` : ''}`);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted, please add credits to continue." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("generate-study-content error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
