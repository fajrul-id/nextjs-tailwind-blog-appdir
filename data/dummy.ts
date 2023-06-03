export interface iPropsCategories {
  name?: string;
  slug?: string;
}
export interface iPropsPosts {
  author?: {
    name?: string;
    photo?: { url: string };
  };
  postImage?: {
    url?: string;
  };
  title?: string;
  slug?: string;
  createdAt?: string;

  categories?: iPropsCategories[];
}

export const categories: iPropsCategories[] = [
  { name: "kategori 1", slug: "kategori-1" },
  { name: "kategori 2", slug: "kategori-2" },
  { name: "kategori 3", slug: "kategori-3" },
  { name: "kategori 4", slug: "kategori-4" },
  { name: "kategori 5", slug: "kategori-5" },
];

export const Posts: iPropsPosts[] = [
  {
    author: {
      name: "amin",
      photo: {
        url: "/author.png",
      },
    },
    postImage: {
      url: "/bg.webp",
    },
    title: "post pertama",
    slug: "post-pertama",
    createdAt: "1 jan 2022",
    categories: [
      {
        name: "kategori 1",
        slug: "kategori-1",
      },
      {
        name: "kategory 2",
        slug: "kategori-2",
      },
    ],
  },
  {
    author: {
      name: "amin",
      photo: {
        url: "/author.png",
      },
    },
    postImage: {
      url: "/bg.webp",
    },
    title: "post kedua",
    slug: "post-kedua",
    createdAt: "2 jan 2022",
    categories: [
      {
        name: "kategori 1",
        slug: "kategori-1",
      },
      {
        name: "kategory 2",
        slug: "kategori-2",
      },
    ],
  },
  {
    author: {
      name: "amin",
      photo: {
        url: "/author.png",
      },
    },
    postImage: {
      url: "/bg.webp",
    },
    title: "post kedua",
    slug: "post-kedua",
    createdAt: "2 jan 2022",
    categories: [
      {
        name: "kategori 1",
        slug: "kategori-1",
      },
      {
        name: "kategory 2",
        slug: "kategori-2",
      },
    ],
  },
  {
    author: {
      name: "amin",
      photo: {
        url: "/author.png",
      },
    },
    postImage: {
      url: "/bg.webp",
    },
    title: "post kedua",
    slug: "post-kedua",
    createdAt: "2 jan 2022",
    categories: [
      {
        name: "kategori 1",
        slug: "kategori-1",
      },
      {
        name: "kategory 2",
        slug: "kategori-2",
      },
    ],
  },
  {
    author: {
      name: "amin",
      photo: {
        url: "/author.png",
      },
    },
    postImage: {
      url: "/bg.webp",
    },
    title: "post kedua",
    slug: "post-kedua",
    createdAt: "2 jan 2022",
    categories: [
      {
        name: "kategori 1",
        slug: "kategori-1",
      },
      {
        name: "kategory 2",
        slug: "kategori-2",
      },
    ],
  },
  {
    author: {
      name: "amin",
      photo: {
        url: "/author.png",
      },
    },
    postImage: {
      url: "/bg.webp",
    },
    title: "post ketiga",
    slug: "post-ketiga",
    createdAt: "3 jan 2022",
    categories: [
      {
        name: "kategori 1",
        slug: "kategori-1",
      },
      {
        name: "kategory 2",
        slug: "kategori-2",
      },
    ],
  },
];
