export const getCompliments = async () => {
  const URL = "https://complimentr.com/api";

  const response = await fetch(URL, { method: "GET" });
  return await response.json();
};

export const getAdvice = async () => {
  const URL = "https://api.adviceslip.com/advice";

  const response = await fetch(URL, { method: "GET" });
  return await response.json();
};
