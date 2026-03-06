export interface MethodStep {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
  link?: string;
  impact: string;
  impactProof: string;
  metrics: string[];
  method: MethodStep[];
  tools: string[];
  visuals: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface FavoriteItem {
  category: string;
  value: string;
  icon: string;
  bgColor: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
  isThinking?: boolean;
}