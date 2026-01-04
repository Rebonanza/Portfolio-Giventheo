export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  featured: boolean;
  repositoryUrl?: string;
  demoUrl?: string;
}
