'use client'
import { useState } from 'react'
// Components
import ProductBox from '@/components/modules/productBox/ProductBox'
import Button from '@/components/modules/button/Button';
import ProductList from '@/components/modules/productList/ProductList';
import Pagination from '@/components/modules/pagination/Pagination';
import Alert from '@/components/modules/alert/Alert';

// Icons
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";

export default function Shop({ products }) {

    const [paginateProducts, setPaginateProducts] = useState(products)

    const [productsLayout, setProductsLayout] = useState('list')

    return (
        <>
            <div className=" flex justify-start items-center xl:border-b-1 border-rose-200 pb-3 ">
                <div className=" hidden xl:flex items-center gap-3">
                    <Button type={'circle'} onClick={() => setProductsLayout('grid')}>
                        <LuLayoutGrid />
                    </Button>
                    <Button type={'circle'} onClick={() => setProductsLayout('list')}>
                        <LuLayoutList />
                    </Button>
                </div>

            </div>
            <div className=" flex justify-center items-center flex-wrap gap-5 py-5 overflow-x-hidden">
                {
                    products.length > 0 ? (
                        <>
                            {
                                paginateProducts.slice(0, 9).map(product => (
                                    productsLayout === 'list' ? (
                                            <ProductList key={product._id} {...product} />
                                    ) : (
                                        <div data-aos='fade-right'>
                                            <ProductBox key={product._id} {...product} />
                                        </div>
                                    )
                                ))
                            }
                            <Pagination items={products} setShowItems={setPaginateProducts} />
                        </>
                    ) : (
                        <Alert text={'محصولی یافت نشد'} />
                    )
                }
            </div>
        </>
    )
}
