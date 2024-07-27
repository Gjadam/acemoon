
// Components
import Navbar from "@/components/modules/navbar/Navbar";
import AllProducts from "@/components/templates/index/allProducts/AllProducts";
import Categories from "@/components/templates/index/categories/Categories";
import Header from "@/components/templates/index/header/Header";
import Introduction from "@/components/templates/index/Introduction/Introduction";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Categories/>
    <AllProducts/>
    <Introduction/>
    </>
  );
}
