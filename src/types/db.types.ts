export type User = {
  username: string;
  email: string;
  password: string;
};

export type Project = {
  user_id: number;
  project_name: string;
};

export type Issue = {
  project_id: number;
  title: string;
  description: string;
};

export type Comment = {
  user_id: number;
  issue_id: number;
  comment: string;
};
