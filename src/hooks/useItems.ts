import { useState } from "react";
import { Item, ItemId } from "../commons/Interfaces";

const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Books 📚",
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Games 🎮",
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Movies 🎬",
  },
];

export const useItems = () => {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const createHandleRemoveItem = (id: ItemId) => {
    return () => {
      setItems((prevItems) => {
        return prevItems.filter((el) => el.id != id);
      });
    };
  };

  return {
    items,
    setItems,
    createHandleRemoveItem,
  };
};
