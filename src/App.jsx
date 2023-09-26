import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import { Sidebar } from "./components/Sidebar";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="João Magnago"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusantium illum delectus beatae, nihil maxime iure tempore velit mollitia facilis quos, libero ex reiciendis. Reprehenderit nihil iste laborum amet delectus!"
          />

          <Post author="Gabriel Pires" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
