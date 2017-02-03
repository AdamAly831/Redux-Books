export function selectBook(book){
//select book is an action creator it need to reutnr an action and obj with a type prop

  return {
    type: 'BOOK_SELECTED',
    payload:book
  };
}
