'use client'
import { useState } from "react";

// Components
import Alert from "@/components/modules/alert/Alert";
import Pagination from "@/components/modules/pagination/Pagination";
import ProductList from "@/components/modules/productList/ProductList";

export default function Collection({ products }) {

    const [paginateProducts, setPaginateProducts] = useState(products)

    return (
        <div className=" flex justify-center items-center flex-wrap gap-5 overflow-x-hidden">
            {
                products.length > 0 ? (
                    <>
                        {
                            paginateProducts.slice(0, 9).map(product => (
                                <ProductList key={product._id} {...product} />
                            ))
                        }
                        <Pagination items={products} setShowItems={setPaginateProducts} />
                    </>
                ) : (
                    <Alert text={'هیچ محصولی در این دسته بندی وجود ندارد.'} />
                )
            }
        </div>
    )
}
