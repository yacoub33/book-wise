import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/books" render={() => <Books books={books} />} />
      <Route path="/books/1" element={<BookInfo books={books} />} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
