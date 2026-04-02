import { ExplainSkill } from "./skills/explain.js";
import { GenerateSkill } from "./skills/generate.js";
import type { BaseSkill } from "./skills/base.js";

export const skills: BaseSkill[] = [GenerateSkill, ExplainSkill];

export { GenerateSkill, ExplainSkill };
export type { BaseSkill };
