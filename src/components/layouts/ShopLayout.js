
// Components
import SideBar from '../templates/shop/sidebar/SideBar'


// Backend
import connectToDB from '@/configs/db'
import CollectionModel from '@/models/Collection'
import ProductModel from '@/models/Product'

export default async function ShopLayout({ children }) {

    connectToDB()
    const collections = await CollectionModel.find({})
        .sort({ _id: -1 })
        .lean()

    const products = await ProductModel.find({}, 'name price images')
        .sort({ _id: -1 })
        .limit(4)
        .lean()

        

    return (
        <div className=" bg-[url('/images/jpg/product.jpg')] bg-cover bg-center bg-no-repeat min-h-screen">
            <div className="  container mx-auto  flex flex-col  xl:flex-row justify-center items-start p-5 ">
                <SideBar collections={JSON.parse(JSON.stringify(collections))} products={JSON.parse(JSON.stringify(products))}/>
                <div className="p-5 w-full rounded mt-5">
                    {children}
                </div>
            </div>
        </div>
    )
}
