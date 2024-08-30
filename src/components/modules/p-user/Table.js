
// Components
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";

export default function Table({ title, linkText, route, children }) {
    return (
        <div className=" flex flex-col gap-3 grow bg-white p-5 rounded-2xl">
            <SectionHeader title={title} linkText={linkText} route={route} />
            {children}
        </div>
    )
}
