import { Route, Routes } from "react-router-dom";
import MainSiteContentScreen from "../screens/MainSiteContentScreen/MainSiteContentScreen";

const RootRouter = () => {
  return (
    <Routes>
      <Route path={"*"} element={<MainSiteContentScreen />} />
    </Routes>
  );
};

export default RootRouter;
