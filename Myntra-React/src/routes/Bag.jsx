import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";
const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  // const finalItems=items.filter(item=>item.id===bagItems) //Didn't work bcoz bagitems is also an array

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItem key={item.id} item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
