import { Post } from "./Post";
import { Header } from "./components/Header";

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Renata Dellamatriz"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dolores eum voluptatibus pariatur. Veniam reprehenderit obcaecati deleniti sunt molestiae error nobis, corporis facere quos? Similique corporis maiores dolorem sapiente eius."
      />
    </>
  );
}
