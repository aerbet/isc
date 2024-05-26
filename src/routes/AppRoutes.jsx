import {Route, Routes} from "react-router-dom";

import OurPage from "../pages/OurPage/OurPage.jsx";
import ForPage from "../pages/ForPage/ForPage.jsx";
import App from "../Components/App/App.jsx";
import ItemPage from "../pages/CoffeePage/ItemPage.jsx";


const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<App />}/>
        
          <Route path="/our" element={<OurPage />}/>
          <Route path="/for" element={<ForPage />}/>
        
          <Route path="/item" element={<ItemPage />}/>
      </Routes>
  );
};

export default AppRoutes;