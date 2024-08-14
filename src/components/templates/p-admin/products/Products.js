// Components
import PanelCard from '@/components/modules/panelCard/PanelCard'
import PanelCardButton from '@/components/modules/panelCard/panelCardButton/PanelCardButton'


export default async function Products({products}) {

    return (
        <div className=' bg-white p-5 rounded-2xl mt-5'>
            {
                products.map(product => (
            <PanelCard title={product.name} date={product.createdAt}>
                <PanelCardButton text='مشاهده' bgColor='bg-sky-500' />
                <PanelCardButton text='ویرایش' bgColor='bg-blue-500' />
                <PanelCardButton text='حذف' bgColor='bg-red-500' />
            </PanelCard>
                ))
            }
        </div>
    )
}
