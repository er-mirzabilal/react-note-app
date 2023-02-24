import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setSearchText } from "../redux/noteSlice";

const useSearchText = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.notes.searchText);

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchText(event.target.value));
  };

  return { searchText, handleSearchTextChange };
};

export default useSearchText;
