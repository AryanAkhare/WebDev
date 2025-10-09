import './Item.css'
function Item(props) {
    let itemName=props.name;
  return (
    <div>
      <p className="name">{itemName}</p>
      
    </div>
  );
}

export default Item;
