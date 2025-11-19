export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
  link?: string;
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