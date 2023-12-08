import { Widget } from "./components/Widget";
import { List } from "./components/List";
import cards from "./components/cards.json";

import "./App.css";

export default function App() {
  const items = cards;
  return (
    <div className="contaiter">
      <Widget>
        <List items={items} />
      </Widget>
    </div>
  );
}
