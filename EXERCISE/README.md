# URL to form

Take a look at the files and folders - there is already a home page created. Use [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) to display the home page whenever the user goes to `/`.

The home page displays a form. Your task is to prefill this form based on the query parameters that come from the URL.

For example the following URL:

http://localhost:3000/?language=english

should prefill the form with the language checkbox English selected.

You must add the appropriate values to each input and link the form fields with the component state and update it as soon as the page loads.

If no query params are present, the form remains empty.

## Other example URLs:

http://localhost:3000/?customerRating=5&bookType=paperback,hardcover&language=english,german

http://localhost:3000/?customerRating=3&bookType=e-book,hardcover&language=english&searchTerm=robin%20hobb

Feel free to test with more URLs.

## Extra

Extract form into a separate component