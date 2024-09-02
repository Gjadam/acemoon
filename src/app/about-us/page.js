
// Components
import MainLayout from "@/components/layouts/MainLayout";
import CategoryHeader from "@/components/modules/categoryHeader/CategoryHeader";

export default function page() {
    return (
        <MainLayout>
            <CategoryHeader title={'درباره ما'}/>
            <div className=" flex justify-center items-center p-5 mt-28">
                <p className="max-w-[40rem] text-lg text-center">
                    ما در ماه آس به دنبال ارائه محصولات با کیفیت و قیمت مناسب هستیم. هدف ما رضایت مشتریان و ایجاد تجربه خریدی لذت‌بخش است.  ما به شما این اطمینان را می‌دهیم که تمامی محصولات ما با دقت انتخاب شده‌اند و از استانداردهای بالای کیفی برخوردارند. تیم ما به طور مداوم در حال بررسی و به‌روزرسانی محصولات است تا بهترین گزینه‌ها را برای شما فراهم کند. به ما بپیوندید و تجربه‌ای متفاوت از خرید را با بهترین قیمت‌ها و کیفیت‌ها تجربه کنید!
                </p>
            </div>
        </MainLayout>
    )
}
