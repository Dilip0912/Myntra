import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/ItemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch=useDispatch();
//   console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetched) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({items}) => {
          dispatch(fetchStatusActions.markFetched())
          // console.log("Items from backend",items);
          dispatch(fetchStatusActions.markFetchingEnded());
          dispatch(itemsActions.addInitialItems(items))
        });
        
        }, [fetchStatus]);

//   return <div>Fetching:{fetchStatus.fetched}</div>;
};

export default FetchItems;
