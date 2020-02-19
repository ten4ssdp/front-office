const onDelete = async (endpoint: string, id: string | number) => {
  const deletedItem = await fetch(
    `http://localhost:5000/api/${endpoint}/${id}`,
    {
      method: 'DELETE'
    }
  );

  return deletedItem;
};

export default onDelete;
