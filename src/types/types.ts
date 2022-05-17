export interface BookProps {
  id: string;
  image: string;
  order: number;
}

export interface BookStore {
  bookList: BookProps[];
  currentBook: BookProps | null;
}
