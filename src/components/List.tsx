import { TListItem, ListItem } from "./ListItem";

interface ListProps {
  items: TListItem[];
}

export const List = ({ items }: ListProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem item={item} key={index} />
      ))}
    </ul>
  );
};
