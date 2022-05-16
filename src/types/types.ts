export interface BookUI {
  id: string;
  image: string;
  order: number;
}

export interface BookComponent {
  id: string;
  image: string;
  order: number;
}

export interface BookStore {
  bookList: BookUI[];
  currentBook: BookUI | null;
}
