"use client"
// Components
import ProductBox from '@/components/modules/productBox/ProductBox'
import SectionHeader from '@/components/modules/sectionHeader/SectionHeader'



export default function AllProducts({ products }) {

    return (
        <div id='products' className=" flex justify-center items-center mt-28 overflow-x-hidden bg-[url('/images/jpg/product-flip.jpg')] bg-cover bg-no-repeat ">
            <div className="container mx-auto">
                <SectionHeader title={"محصولات ماه آس"} route={"/shop"} linkText={"همه محصولات"} />
                <div className=' flex justify-center items-center flex-wrap p-5 sm:p-0 my-10'>
                        {
                            products.map(product => (
                                    <ProductBox key={product._id} {...product} />
                            ))
                        }
                </div>
            </div>

        </div>
    )
}
