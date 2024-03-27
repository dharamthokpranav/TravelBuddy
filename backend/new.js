const express = require("express");
const app = express();

const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const items = [
  { id: 1, name: "item1", description: "This is item 1" },
  { id: 2, name: "item2", description: "This is item 2" },
  { id: 3, name: "item3", description: "This is item 3" },
  { id: 4, name: "item4", description: "This is item 4" },
];

app.get("/getitem/:id", (req, res) => {
  const itemId = req.params.id;
  const item = items.find((i) => i.id == itemId);
  if (item) res.json({ success: true, item: item });
  else res.status(404).json({ success: false, message: "item not found" });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
