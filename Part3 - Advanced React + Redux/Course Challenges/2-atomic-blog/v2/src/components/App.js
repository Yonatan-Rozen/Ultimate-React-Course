import DarkModeButton from "./DarkModeButton";
import Archive from "./Archive";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { PostProvider } from "./PostContext";

export default function App() {
  return (
    //2) Provide value to child components
    <section>
      <DarkModeButton />
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}
