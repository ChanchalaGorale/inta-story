import { Story } from "./story";

export interface User {
    id: number;
    name: string;
    avatarUrl: string;
    stories: Story[];
    seen: boolean;
  }