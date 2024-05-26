import {Route, Routes} from "react-router-dom";

import OurPage from "../pages/OurPage/OurPage.jsx";
import ForPage from "../pages/ForPage/ForPage.jsx";
import App from "../Components/App/App.jsx";
import ItemPage from "../pages/CoffeePage/ItemPage.jsx";


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<App />}/>
        </Route>
        
        <Route>
          <Route path="/our" element={<OurPage />}/>
          <Route path="/for" element={<ForPage />}/>
        </Route>
        
        <Route>
          <Route path="/item" element={<ItemPage />}/>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;