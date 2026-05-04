export const fetchUsers = async () => {
  try {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/randomusers",
    );

    const data = await res.json();
    return data.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
