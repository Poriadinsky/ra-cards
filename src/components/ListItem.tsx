export type TListItem = {
  img?: string;
  alt?: string;
  title: string;
  description: string;
  buttonTitle: string;
  buttonLink: string;
};

interface ListItemProps {
  item: TListItem;
}

export const ListItem = ({ item }: ListItemProps) => {
  const { img, alt, title, description, buttonTitle, buttonLink } = item;
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={buttonLink} className="btn btn-primary">
          {buttonTitle}
        </a>
      </div>
    </div>
  );
};
