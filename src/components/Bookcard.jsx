import '../css/Bookcard.css';
const BookCard=({ img, title, author,price_tag }) => {
    return (
     <article
      className='bookcard_container'
     >
      <img src={img} alt='book_image' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <h4>{price_tag}</h4>
     </article>
    );
};
export default BookCard
  