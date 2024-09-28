import { lusitana } from "@/components/shared/fonts";
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from "@/components/shared/skeletons";

export default async function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <CardsSkeleton />
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8 mt-6">
                <RevenueChartSkeleton />
                <LatestInvoicesSkeleton />
            </div>
        </main>
    )
}