export interface BookItem {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  pages: number;
  genre: string;
  dateRead: string;
  review: string;
}

export const bookJournalData: BookItem[] = [
  {
    id: "nolongerhuman",
    title: "No Longer Human",
    author: "Osamu Dazai",
    cover: "/image/book-journal/9780811232432.jpg",
    rating: 4.5,
    pages: 176,
    genre: "Literary Fiction",
    dateRead: "1/2/2024",
    review: ""
  },
  {
    id: "kokoro",
    title: "Kokoro",
    author: "Natsume Souseki",
    cover: "/image/book-journal/9781101195819.jpg",
    rating: 5,
    pages: 256,
    genre: "Fiction",
    dateRead: "1/5/2024",
    review: ""
  },
  {
    id: "web-design",
    title: "Web Design in easy steps",
    author: "Sean McManus",
    cover: "/image/book-journal/GUEST_773681c8-e3ac-4069-bea4-3e317df50564.jpg",
    rating: 3.5,
    pages: 228,
    genre: "Reference Work",
    dateRead: "1/13/2024",
    review: ""
  },
  {
    id: "hellbound-heart",
    title: "The Hellbound Heart",
    author: "Clive Barker",
    cover: "/image/book-journal/61WuDamPP8L._AC_UF1000,1000_QL80_.jpg",
    rating: 4.0,
    pages: 186,
    genre: "Horror, gothic fiction",
    dateRead: "1/16/2024",
    review: ""
  },
  {
    id: "house-of-leaves",
    title: "House of Leaves",
    author: "Mark Z. Danielewski",
    cover: "/image/book-journal/house-of-leaves.jpg",
    rating: 4.0,
    pages: 736,
    genre: "Novel, Horror fiction, Ergodic literature",
    dateRead: "1/21/2024",
    review: ""
  },
  {
    id: "quartet",
    title: "Quartet: Intermediate Japanese Across the Four Language Skills Vol. 1",
    author: "Akemi Yasui, Yuriko Ide, Miyuki Doi, Hideki Hamada",
    cover: "/image/book-journal/71GZt9xMqKL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.5,
    pages: 259,
    genre: "Textbook, Reference Work",
    dateRead: "3/6/2024",
    review: ""
  },
  {
    id: "asimov-clock",
    title: "The Clock We Live On",
    author: "Isaac Asimov",
    cover: "/image/book-journal/1709915922206-641dae2a-0618-401b-a503-16b6c43e603a_1.jpg",
    rating: 4.0,
    pages: 172,
    genre: "History, Reference Work",
    dateRead: "3/8/2024",
    review: ""
  },
  {
    id: "house-of-leaves",
    title: "Stoner",
    author: "John Williams",
    cover: "/image/book-journal/stoner.jpg",
    rating: 5,
    pages: 278,
    genre: "Novel",
    dateRead: "6/17/2024",
    review: ""
  }
];