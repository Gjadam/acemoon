
// Components
import Navbar from "@/components/modules/navbar/Navbar";
import AllProducts from "@/components/templates/index/allProducts/AllProducts";
import Banner from "@/components/templates/index/banner/Banner";
import Categories from "@/components/templates/index/categories/Categories";
import Header from "@/components/templates/index/header/Header";
import Introduction from "@/components/templates/index/Introduction/Introduction";

export default function Home() {
  return (
    <>
    <Header/>
    <Categories/>
    <AllProducts/>
    <Introduction/>
    <Banner/>
    </>
  );
}
