import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

// import itemImage from "../images/1.jpg"
const HomeItem = ({item}) => {
  const bagItems=useSelector(store=>store.bag);
  // console.log(item.id ,bagItems.includes(item.id));
  const dispatch=useDispatch();

  const handleAddToBag=()=>{
    dispatch(bagActions.addToBag(item.id))
  }

  const handleDeleteBag=()=>{
    dispatch(bagActions.deleteFromBag(item.id));
  }

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {bagItems.includes(item.id)?<button className="btn-add-bag remove-btn" onClick={handleDeleteBag}>
        Delete From Bag
      </button>:<button className="btn-add-bag" onClick={handleAddToBag}>
        Add To Bag
      </button>}
    </div>
  );
};

export default HomeItem;
