import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for the database / data source.');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      })
    }, 1000);
  }, [url])// The square brackets (known as the dependency array) will make sure that the useEffect runs just once on the first render! It won't run when the state changes, else, without the brackets, the useEffect would've run again.
  //The useEffect function will run for the state mentioned in the dependency array!

  return { data, isPending, error };
}
 
export default useFetch;