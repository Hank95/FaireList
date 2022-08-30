export type list = {
  id: number;
  createdAt: string;
  userId: string;
  listName: string;
};

export type listItem = {
  id: number;
  createdAt: string;
  item_title: string;
  item_description: string;
  completed: boolean;
  user_id: string;
};
