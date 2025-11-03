export interface AnimeItem {
  id: string;
  title: string;
  cover: string;
  rating: number;
  duration: number | string;
  special?: string;
  backgroundImage?: string;
}

export const animeRankingData: AnimeItem[] = [
  {
    id: "jjba",
    title: "Jojo's Bizarre Adventure",
    cover: "/image/anime-covers/JoJo_Part_1_Phantom_Blood.jpg",
    rating: 10,
    duration: 190,
    special: "masterpiece",
    backgroundImage: "/image/blog-img/blog-thumbnails/madeinheaven.jpg"
  },
  {
    id: "akira",
    title: "AKIRA",
    cover: "/image/anime-covers/akira.jpg",
    rating: 10,
    duration: "Movie",
    backgroundImage: "/image/anime-covers/akira-back.jpg"
  },
  {
    id: "mob",
    title: "Mob Psycho 100",
    cover: "/image/anime-covers/mob.jpg",
    rating: 10,
    duration: 37,
    backgroundImage: "/image/anime-covers/mob_back.jpg"
  },
  {
    id: "look_back",
    title: "Look Back",
    cover: "/image/anime-covers/lookback.jpg",
    rating: 10,
    duration: "Movie",
    backgroundImage: "/image/anime-covers/look-back.png"
  },
  {
    id: "eva",
    title: "End of Evangelion",
    cover: "/image/anime-covers/51XFaesw92L._AC_UF894,1000_QL80_.jpg",
    rating: 10,
    duration: "Movie",
    backgroundImage: "/image/anime-covers/eva2.jpg"
  },
  {
    id: "reze",
    title: "Chainsawman: Reze Arc",
    cover: "/image/anime-covers/reze.jpg",
    rating: 10,
    duration: "Movie",
    backgroundImage: "/image/anime-covers/Chainsaw-Man-Reze-Arc-Image-8.jpg"
  },
  {
    id: "meshi",
    title: "Delicious in Dungeon",
    cover: "/image/anime-covers/dungeon.jpg",
    rating: 10,
    duration: 24,
    backgroundImage: "/image/anime-covers/meshi-back.jpg"
  },
  {
    id: "nge",
    title: "Neon Genesis Evangelion",
    cover: "/image/anime-covers/evangelion.jpg",
    rating: 8,
    duration: 26,
    backgroundImage: "/image/anime-covers/nge.png"
  },
  {
    id: "lain",
    title: "Serial Experiments Lain",
    cover: "/image/anime-covers/lain.jpg",
    rating: 8,
    duration: 13,
    backgroundImage: "/image/anime-covers/laincover.png"
  },
  {
    id: "cowboy",
    title: "Cowboy Bebop",
    cover: "/image/anime-covers/cowboy.jpg",
    rating: 8,
    duration: 26,
    backgroundImage: "/image/anime-covers/cowboy-back.jpg"
  },
  {
    id: "dandadan",
    title: "Dandadan",
    cover: "/image/anime-covers/ddd.png",
    rating: 9,
    duration: 12
  },
  {
    id: "aot",
    title: "Attack on Titan",
    cover: "/image/anime-covers/attack_on_titan.jpg",
    rating: 9,
    duration: 94
  },
  {
    id: "deathnote",
    title: "Death note",
    cover: "/image/anime-covers/deathnote.jpg",
    rating: 9,
    duration: 37
  },
  {
    id: "csm",
    title: "Chainsawman",
    cover: "/image/anime-covers/csm.jpg",
    rating: 10,
    duration: 12
  },
  {
    id: "bocchi",
    title: "Bocchi the Rock!",
    cover: "/image/anime-covers/bocchi.jpg",
    rating: 10,
    duration: 12
  },
  {
    id: "flcl",
    title: "FLCL",
    cover: "/image/anime-covers/FLCL.jpg",
    rating: 8,
    duration: 6
  },
  {
    id: "yourname",
    title: "Your Name",
    cover: "/image/anime-covers/yourname.jpg",
    rating: 9,
    duration: "Movie"
  },
  {
    id: "perfectblue",
    title: "Perfect blue",
    cover: "/image/anime-covers/Perfectblueposter.png",
    rating: 9,
    duration: "Movie"
  },
  {
    id: "paranoia",
    title: "Paranoia Agent",
    cover: "/image/anime-covers/Paranoia_Agent.png",
    rating: 8,
    duration: 13
  },
  {
    id: "flowers",
    title: "Flowers of Evil",
    cover: "/image/anime-covers/flowers-of-evil.jpg",
    rating: 8,
    duration: 13
  },
  {
    id: "inuyashiki",
    title: "Inuyashiki",
    cover: "/image/anime-covers/inuyashiki.jpg",
    rating: 8,
    duration: 11
  },
  {
    id: "jjk",
    title: "Jujutsu Kaisen",
    cover: "/image/anime-covers/jjk.jpg",
    rating: 7,
    duration: 47
  },
  {
    id: "skip",
    title: "Skip and Loafer",
    cover: "/image/anime-covers/skip.jpg",
    rating: 9,
    duration: 12
  },
  {
    id: "nhk",
    title: "Welcome to the N.H.K",
    cover: "/image/anime-covers/nhk.jpg",
    rating: 7,
    duration: 24
  },
  {
    id: "vinland",
    title: "Vinland Saga",
    cover: "/image/anime-covers/vinland.jpg",
    rating: 8,
    duration: 48
  },
  {
    id: "opm",
    title: "One Punch Man",
    cover: "/image/anime-covers/opm.jpg",
    rating: 6,
    duration: 24
  },
  {
    id: "weathering",
    title: "Weathering with You",
    cover: "/image/anime-covers/weather.jpg",
    rating: 8,
    duration: "Movie"
  },
  {
    id: "trigun",
    title: "Trigun",
    cover: "/image/anime-covers/trigun.jpg",
    rating: 6,
    duration: 26
  },
  {
    id: "erased",
    title: "Erased",
    cover: "/image/anime-covers/erased.jpg",
    rating: 8,
    duration: 13
  },
  {
    id: "heavenly",
    title: "Heavenly Delusion",
    cover: "/image/anime-covers/heavenly.jpg",
    rating: 6,
    duration: 13
  },
  {
    id: "cyber",
    title: "Cyberpunk: Edgerunners",
    cover: "/image/anime-covers/cyber.jpg",
    rating: 6,
    duration: 10
  },
  {
    id: "demonslayer",
    title: "Demon Slayer",
    cover: "/image/anime-covers/demonslayer.jpg",
    rating: 6,
    duration: 55
  },
  {
    id: "terror",
    title: "Terror in Resonance",
    cover: "/image/anime-covers/terror.jpg",
    rating: 6,
    duration: 11
  },
  {
    id: "eva3plus1",
    title: "Evangelion 3.0 + 1.0",
    cover: "/image/anime-covers/eva3+1.jpg",
    rating: 6,
    duration: "Movie"
  },
  {
    id: "thusspoke",
    title: "Thus Spoke Kishbe Rohan",
    cover: "/image/anime-covers/thusspoke.jpg",
    rating: 6,
    duration: 4
  },
  {
    id: "deathparade",
    title: "Death Parade",
    cover: "/image/anime-covers/deathparade.jpg",
    rating: 7,
    duration: 12
  },
  {
    id: "cat",
    title: "The Masterful Cat is Depressed Again Today",
    cover: "/image/anime-covers/cat.jpg",
    rating: 7,
    duration: 13
  },
  {
    id: "stbs",
    title: "Stranger by the Shore",
    cover: "/image/anime-covers/stbs.jpg",
    rating: 5,
    duration: 1
  },
  {
    id: "eva333",
    title: "Evangelion 3.33",
    cover: "/image/anime-covers/eva3.jpg",
    rating: 4,
    duration: "Movie"
  },
  {
    id: "ranking",
    title: "Ranking of Kings",
    cover: "/image/anime-covers/ranking.jpg",
    rating: 5,
    duration: 33
  },
  {
    id: "jjk0",
    title: "Jujutsu Kaisen 0",
    cover: "/image/anime-covers/jjk0.jpg",
    rating: 5,
    duration: "Movie"
  },
  {
    id: "komi",
    title: "Komi Can't Communicate",
    cover: "/image/anime-covers/komi.jpg",
    rating: 6,
    duration: 24
  },
  {
    id: "mieruko",
    title: "Mieruko-chan",
    cover: "/image/anime-covers/mieruko.jpg",
    rating: 3,
    duration: 12
  },
  {
    id: "devilman",
    title: "Devilman: Crybaby",
    cover: "/image/anime-covers/devilman.jpg",
    rating: 4,
    duration: 12
  },
  {
    id: "boygirl",
    title: "Can a Boy-Girl Friendship Survive",
    cover: "/image/anime-covers/boy-girl.jpg",
    rating: 3,
    duration: 12
  },
  {
    id: "wonderegg",
    title: "Wonder Egg Priority",
    cover: "/image/anime-covers/wonder-egg.jpg",
    rating: 3,
    duration: 13
  },
  {
    id: "eva222",
    title: "Evangelion 2.22",
    cover: "/image/anime-covers/eva222.jpg",
    rating: 4,
    duration: "Movie"
  },
  {
    id: "eva1",
    title: "Evangelion 1.0",
    cover: "/image/anime-covers/eva1.jpg",
    rating: 3,
    duration: "Movie"
  },
  {
    id: "mha",
    title: "My Hero Academia",
    cover: "/image/anime-covers/mha.jpg",
    rating: 3,
    duration: 88
  },
  {
    id: "pnl",
    title: "Promised neverland",
    cover: "/image/anime-covers/pnl.jpg",
    rating: 4,
    duration: 24
  },
  {
    id: "hells",
    title: "Hell's paradise",
    cover: "/image/anime-covers/hells-paradise.jpg",
    rating: 2,
    duration: 13
  },
  {
    id: "danganronpa",
    title: "Danganronpa",
    cover: "/image/anime-covers/terrible.jpg",
    rating: 1,
    duration: 13
  },
  {
    id: "bubble",
    title: "Bubble",
    cover: "/image/anime-covers/Bubble_film_poster.jpg",
    rating: 2,
    duration: "Movie"
  }
];