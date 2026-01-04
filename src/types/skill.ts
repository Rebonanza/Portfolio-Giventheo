export interface Skill {
  name: string;
  category: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}
