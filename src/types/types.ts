
// TODO: delete this interface and use BookProps
export interface BookUI {
  id: string;
  image: string;
  order: number;
}

// TODO: rename to BookProps
export interface BookComponent {
  id: string;
  image: string;
  order: number;
}

export interface BookStore {
  bookList: BookUI[];
  currentBook: BookUI | null;
}
