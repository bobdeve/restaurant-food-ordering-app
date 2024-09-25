import React, { useCallback, useEffect, useState } from 'react';

const sendHttpRequest = async (url, config) => {

  const response = await fetch(url, config);

  if (response.ok) {
    return response.json();
  } else {
    const resData = await response.json();
    throw new Error(resData.message || 'Something went wrong');
  }
};

export const useHttp = (url, config, initialData) => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);

  const clearData = () => {
    setData(initialData);
  };


  

  const sendRequest = useCallback(async (body) => {
    setIsLoading(true);
    try {
      // For PUT requests, include the body
      const resData = await sendHttpRequest(url, { ...config, body });
      setData(resData);
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, [url, config]);

  useEffect(() => {
    if (config.method === 'GET' || !config.method) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData
  };
};
