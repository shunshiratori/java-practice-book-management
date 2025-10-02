import { useEffect, useState } from "react";
import "./App.css";

type Book = {
  id: number;
  title: string;
  author: string;
};

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const apiUrl = "https://book-api-cgu2.onrender.com/books";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author }),
    })
      .then((res) => res.json())
      .then((newBook) => {
        setBooks([...books, newBook]);
        setTitle("");
        setAuthor("");
      });
  };

  return (
    <div className="App">
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>

      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="autour"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
