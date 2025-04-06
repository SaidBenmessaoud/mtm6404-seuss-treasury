import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("📖 DÉTAIL DU LIVRE :", data);
        setBook(data);
      });
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{book.title}</h2>
      <img src={book.image} alt={book.title} width={200} />
      <p>{book.description}</p>
      <p><strong>Published:</strong> {book.year_published}</p>
    </div>
  );
}

export default BookDetails;
