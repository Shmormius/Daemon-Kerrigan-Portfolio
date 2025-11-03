import { BlogDetail } from '../types';
import { animeRankingData } from './animeData';
import { bookJournalData } from './bookData';

export const blogDetails: Record<string, BlogDetail> = {
  "book-journal": {
    id: "book-journal",
    title: "Book Journal",
    excerpt: "Record of Books I've Read. Originally started as a 2024 New Years Resolution to read more.",
    customCss: "book-journal",
    sections: [
      {
        type: 'text',
        title: 'Introduction',
        content: 'Here is a list of the books I read in 2024. I intend to restart this in 2026.',
        className: 'intro-section'
      },
      {
        type: 'custom',
        component: 'BookJournalList',
        data: bookJournalData,
        className: 'book-journal-list'
      }
    ]
  },
  
  "anime-ranking": {
    id: "anime-ranking",
    title: "Anime Ranking",
    subtitle: "Every Anime I've Ever Watched.",
    excerpt: "This a list of every anime I've ever seen, ranked from best to worst.",
    customCss: "anime-ranking",
    sections: [
      {
        type: 'text',
        title: 'My ranking based on enjoyment',
        content: 'This a list of every anime I\'ve ever seen, ranked from best to worst. I do not recommend or endorse some of the entries on this list.'
      },
      {
        type: 'custom',
        component: 'AnimeRankingList',
        data: animeRankingData,
        className: 'anime-rankings'
      }
    ]
  }
};

export function getBlogDetail(id: string): BlogDetail | undefined {
  return blogDetails[id];
}

export function getAllBlogDetails(): BlogDetail[] {
  return Object.values(blogDetails);
}