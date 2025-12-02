export type ExecId = "vera" | "chandan" | "tomek" | "shehan";

export interface Persona {
  id: ExecId;
  displayName: string;
  role: string;
  summary: string;
  topicsOfInterest: string[];
  toneKeywords: string[]; // how they write/post
  postingGoals: string[]; // what they aim to achieve with posts
}

export interface NewsSource {
  id: string;
  name: string;
  url: string; // RSS feed URL or API endpoint
  homepage: string; // main site URL
}

export interface Article {
  id: string; // stable hash of URL + publishedAt
  title: string;
  url: string;
  sourceId: string;
  sourceName: string;
  publishedAt: string; // ISO date
  summary: string;
  topics: string[]; // optional tags
}

export interface PersonaScore {
  personaId: ExecId;
  scorePercent: number; // 0–100
  stars: number; // 1–5
  reasoning?: string; // brief explanation from model
}

export interface ScoredArticle extends Article {
  scores: PersonaScore[];
  examplePosts?: Record<string, string>; // personaId -> example post
}

