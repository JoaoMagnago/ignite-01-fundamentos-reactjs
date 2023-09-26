import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="João Magnago"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusantium illum delectus beatae, nihil maxime iure tempore velit mollitia facilis quos, libero ex reiciendis. Reprehenderit nihil iste laborum amet delectus!"
      />

      <Post author="Gabriel Pires" content="Um novo post muito legal" />
    </div>
  );
}
