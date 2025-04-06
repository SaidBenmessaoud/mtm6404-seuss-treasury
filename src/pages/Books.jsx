import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(res => res.json())
      .then(data => {
        console.log("📚 LIVRES REÇUS :", data);
        setBooks(data);
      });
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Seuss Treasury 📚
      </h1>

      <h2>Books</h2>
      <div className="books-grid">
        {books.map(book => (
          <Link key={book.id} to={`/books/${book.id}`} className="book-card">
            <img src={book.image} alt={book.title} />
            <p>{book.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Books;
