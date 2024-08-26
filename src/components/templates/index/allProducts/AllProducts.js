"use client"
// Components
import ProductBox from '@/components/modules/productBox/ProductBox'
import SectionHeader from '@/components/modules/sectionHeader/SectionHeader'



export default function AllProducts({ products }) {

    return (
        <div className=' flex justify-center items-center mt-28 bg-[url("/images/jpg/products.jpg")] bg-cover bg-center bg-no-repeat'>
            <div className="container mx-auto">
                <SectionHeader title={"محصولات ما"} route={"/shop"} linkText={"همه محصولات"} />
                <div className=' flex justify-center items-center my-10'>

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
