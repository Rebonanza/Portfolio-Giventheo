export * from './project';
export * from './skill';

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  socialLinks: SocialLink[];
}
