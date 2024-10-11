'use client'
import { useState } from "react";
// Components
import Alert from "@/components/modules/alert/Alert";
import Product from "./Product";
import Pagination from "@/components/modules/pagination/Pagination";

export default function Products({ products, collections }) {
    const [paginateProducts, setPaginateProducts] = useState(products)
    return (
        <div className=' bg-white p-5 rounded-2xl mt-5'>
            {
                products.length > 0 ? (
                    <>
                        {
                            paginateProducts.slice(0, 9).map(product => (
                                <Product key={product._id} product={product} collections={collections} />
                            ))
                        }
                        <Pagination items={products} setShowItems={setPaginateProducts} />
                    </>
                ) : (
                    <Alert text={'محصولی یافت نشد'} />
                )
            }
        </div>
    )
}
