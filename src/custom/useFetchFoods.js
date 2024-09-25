import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchFoods = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError('Failed to fetch foods');
    } finally {
      setLoading(false);
    }
  };

  // Post data
  const postData = async (newFood) => {
    try {
      const response = await axios.post(url, newFood);
      setData((prevData) => [...prevData, response.data]); // Append the new item to the data
    } catch (err) {
      setError('Failed to add food');
    }
  };

  // Delete data
  const deleteData = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setData((prevData) => prevData.filter((item) => item._id !== id)); // Remove deleted item by id
    } catch (err) {
      setError('Failed to delete food');
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on initial load
  }, [url]);

  return { data, error, loading, postData, deleteData };
};

export default useFetchFoods;
