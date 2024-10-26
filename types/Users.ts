export interface UserRegistory {
  id: number;
  name: string;
  slug: string;
  active: boolean;
  popular: boolean;
  showInTopMenu: boolean;
  sort: number;
  games: string[];
  createdAt: string;
  updatedAt: string;
  createdBy?: string;
  updatedBy?: string;
}

export interface UserAuth {
  id: number;
  name: string;
  code: string;
}

export interface User {
  id: number;
  name: string;
  slug: string;
  active: boolean;
  popular: boolean;
  showInTopMenu: boolean;
  sort: number;
  icon?: string;
  color1?: string;
  color2?: string;
  currentGames?: string[];
  createdAt: string;
  updatedAt: string;
  createdBy?: string;
  updatedBy?: string;
}
