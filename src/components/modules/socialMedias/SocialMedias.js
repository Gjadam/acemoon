
// Components
import SectionHeader from '@/components/modules/sectionHeader/SectionHeader'
import Box from './Box'

export default function SocialMedias() {
    return (
        <div className=' container mx-auto mt-28'>
            <SectionHeader title={'ما را در فضای مجازی دنبال کنید'} />
            <div className=" flex justify-center xl:justify-between items-center flex-wrap gap-5 mt-10">
                <Box
                    imageUrl={'/images/png/social-1.png'}
                    socialImage={"/images/png/instagram.png"}
                    socialLink={"https://www.instagram.com/ladyshop7191"}
                />
                <Box
                    imageUrl={'/images/png/social-2.png'}
                    socialImage={"/images/png/rubika.png"}
                    socialLink={"https://rubika.ir/Ladyshop2222"}
                />
                <Box
                    imageUrl={'/images/png/social-3.png'}
                    socialImage={"/images/png/eitaa.png"}
                    socialLink={"https://eitaa.com/LadyShop7171"}
                />
            </div>
        </div>
    )
}
