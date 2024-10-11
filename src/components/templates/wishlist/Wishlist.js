
// Components
import Alert from "@/components/modules/alert/Alert";
import ProductList from "@/components/modules/productList/ProductList";

export default function Wishlist({wishes}) {
    
  return (
    <div className=" container mx-auto flex justify-center items-center flex-wrap gap-5 mt-28 p-5 ">
        {
            wishes.length > 0 ? (
                wishes.map(wish => (
                    <ProductList key={wish._id} {...wish.product}/>
                ))
            ) : (
                <Alert text={'محصولی در لیست علاقه مندی ها یافت نشد.'}/>
            )
        }
    </div>
  )
}
