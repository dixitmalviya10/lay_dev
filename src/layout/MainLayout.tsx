import { Outlet } from "react-router";
import Header from "../components/header/Header";
import { Sidepanel } from "../components/sidepanel/Sidepanel";
import { useState } from "react";

const MainLayout = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div>
      <Header setVisible={setVisible} />
      <div className="flex pt-8 relative">
        <Sidepanel visible={visible} />
        <main className={`mt-2 mb-4 ${visible ? 'mx-4' : 'content-left-margin mr-4'} flex-1`}>
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
      {/* <MobileSidePanel {...props} /> */}
    </div>
  );
};

export default MainLayout;
