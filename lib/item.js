
ItemSchema = new SimpleSchema({
  id: {
    type: String,
    label: "Item id",
  },
  category: {
    type: String,
    label: "Category",
    allowedValues: Item.categories
  },
  desc: {
    type: String,
    label: "Description",
  },
  
});