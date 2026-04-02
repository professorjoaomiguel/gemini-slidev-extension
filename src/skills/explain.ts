import type { BaseSkill } from "./base.js";

export const ExplainSkill: BaseSkill = {
  name: "explain",
  description:
    "Read slides.md, identify the current slide or selected content, and provide a detailed explanation of its technical concepts formatted as speaker notes.",
  systemPrompt:
    "Você é um professor universitário. Explique os conceitos deste slide de forma didática para que o professor use como guia de fala.",
  prompt: `I want to understand the technical concepts in my current slide.
1. Read the 'slides.md' file to identify all slides.
2. Ask me which slide number or content block I want explained (or use the currently focused slide if provided).
3. Analyze the technical concepts present in that slide.
4. Produce a detailed, didactic explanation of those concepts formatted as speaker notes, following Slidev's HTML comment convention:
   <!--
   [Your explanation here]
   -->
5. Suggest adding or updating the speaker notes section of that slide in 'slides.md' with the generated explanation.`,
};
