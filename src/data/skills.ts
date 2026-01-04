import type { SkillCategory } from '@type/skill';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    icon: 'dns',
    color: 'purple-400',
    skills: [
      { name: 'Go', category: 'Language', icon: 'data_object' },
      { name: 'Node.js', category: 'Runtime', icon: 'terminal' },
      { name: 'Python', category: 'Language', icon: 'code' },
      { name: 'PHP', category: 'Language', icon: 'php' },
      { name: 'Laravel', category: 'Framework', icon: 'layers' },
      { name: 'PostgreSQL', category: 'Database', icon: 'database' },
    ],
  },
  {
    title: 'Frontend',
    icon: 'web',
    color: 'primary',
    skills: [
      { name: 'TypeScript', category: 'Language', icon: 'integration_instructions' },
      { name: 'Vue JS', category: 'Framework', icon: 'token' },
      { name: 'React JS', category: 'Library', icon: 'data_object' },
      { name: 'Astro', category: 'Framework', icon: 'rocket_launch' },
      { name: 'Tailwind CSS', category: 'Styling', icon: 'palette' },
      { name: 'Next.js', category: 'Framework', icon: 'keyboard_command_key' },
    ],
  },
  {
    title: 'Tools & Others',
    icon: 'settings_system_daydream',
    color: 'cyan-400',
    skills: [
      { name: 'Git', category: 'Version Control', icon: 'account_tree' },
      { name: 'Docker', category: 'Containerization', icon: 'inventory_2' },
      { name: 'AWS', category: 'Cloud Provider', icon: 'cloud_queue' },
      { name: 'Linux', category: 'OS', icon: 'terminal' },
    ],
  },
];
