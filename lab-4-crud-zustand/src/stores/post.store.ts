import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export interface Post {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface PostStore {
  posts: Post[];
  // Actions
  addPost: (post: Omit<Post, "id" | "createdAt" | "updatedAt">) => void;
  updatePost: (
    id: string,
    post: Partial<Omit<Post, "id" | "createdAt">>
  ) => void;
  deletePost: (id: string) => void;
  getPostById: (id: string) => Post | undefined;
  togglePublished: (id: string) => void;
}

// Initial mock data
const initialPosts: Post[] = [
  {
    id: uuidv4(),
    title: "Welcome to My Blog",
    content:
      "This is my first blog post. I'm excited to share my thoughts and experiences with you!",
    published: true,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: uuidv4(),
    title: "Learning React and Zustand",
    content:
      "Today I'm exploring React with Zustand for state management. It's incredibly simple and powerful!",
    published: true,
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-01-20"),
  },
  {
    id: uuidv4(),
    title: "Draft: Future Plans",
    content: "This is a draft post about my future plans and goals.",
    published: false,
    createdAt: new Date("2024-01-25"),
    updatedAt: new Date("2024-01-25"),
  },
];

export const usePostStore = create<PostStore>((set, get) => ({
  posts: initialPosts,

  addPost: (postData) => {
    const newPost: Post = {
      ...postData,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    set((state) => ({
      posts: [newPost, ...state.posts],
    }));
  },

  updatePost: (id, updateData) => {
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id
          ? { ...post, ...updateData, updatedAt: new Date() }
          : post
      ),
    }));
  },

  deletePost: (id) => {
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    }));
  },

  getPostById: (id) => {
    return get().posts.find((post) => post.id === id);
  },

  togglePublished: (id) => {
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id
          ? { ...post, published: !post.published, updatedAt: new Date() }
          : post
      ),
    }));
  },
}));
