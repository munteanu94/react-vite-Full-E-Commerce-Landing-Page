import React from "react";
import FirstBlock from "../component/homeComponent/firstContainer/FirstBlock";
import TabList from "../component/homeComponent/secondContainer/TabList";
import PopularProducts from "../component/homeComponent/FirdContainer/PopularProducts";
export default function Home() {
  return (
    <>
      <FirstBlock />
      <TabList />
      <PopularProducts />
    </>
  );
}
