[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/wB8UOIKh)
# React JS - Lab Day 4

**Goal:** Create a multi-page CRUD application with React and Zustand.

## Instructions ✅

1. Create a new React project by running `npm create vite@latest lab-4-crud-zustand`.
2. Create at least five routes for your application with `react-router-dom`:

    - Home `/`
    - Blog Listing `/blog`
    - Blog Detail `/blog/1` (where 1 is the id)
    - Add Post `/blog/new`
    - Edit Post `/blog/edit/1` (where 1 is the id)

3. Implement CRUD functionality for the blog. Store the data and CRUD functions inside a Zustand store like `post.store.ts`. For the article properties, you can have:

    - id `string` (uuid)
    - title `string`
    - content `string`
    - published `boolean`

4. Add a **Create** button to the blog listing page which redirects you to the *Add Post* route.
5. Add an **Edit** button inside the blog detail page which redirects you to the *Edit Post* route to modify the title and content.
6. Add a **Delete** button inside the blog detail page which just removes the article from the Zustand store array. You can install a toast package such as `react-hot-toast` for the deletion notification.
7. Commit and push your changes once you are done.

Good luck! 🎉🎉🎉
