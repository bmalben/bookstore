export const addBook = (book) => ({
    type: 'ADD_BOOK',
    payload: book
  });
  
  export const deleteBook = (id) => ({
    type: 'DELETE_BOOK',
    payload: id
  });
  
  export const editBook = (id, updatedBook) => ({
    type: 'EDIT_BOOK',
    payload: { id, updatedBook }
  });
  