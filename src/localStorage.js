export const getItems = () => {
  try {
    const items = localStorage.getItem("items");
    if (items === null) {
      return undefined;
    }
    return JSON.parse(items);
  } catch (err) {
    return undefined;
  }
};

export const saveItems = (items) => {
  try {
    const itemsToSave = JSON.stringify(items);
    localStorage.setItem("items", itemsToSave);
  } catch (err) {
    console.log(err);
  }
}
