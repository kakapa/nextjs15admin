import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function CardSkeleton() {
    return (
        <Card>
            <CardHeader className="flex flex-row space-y-0 space-x-3">
                <Skeleton className="w-6 h-6 rounded-full" />
                <Skeleton className="w-20 h-6" />
            </CardHeader>
            <CardContent>
                <Skeleton className="w-full h-10" />
            </CardContent>
        </Card>
    )
}

export function CardsSkeleton() {
    return (
        <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </>
    )
}

export function RevenueChartSkeleton() {
    return (
        <Card className="w-full md:col-span-4">
            <CardHeader>
                <Skeleton className="w-36 h-6 mb-4" />
            </CardHeader>
            <CardContent>
                <Skeleton className="grid grid-cols-12 gap-2 h-[450px] sm:grid-cols-13 md:gap-4 rounded-md items-end p-4 mt-0" />
            </CardContent>
        </Card>
    )
}

export function InvoicesSkeleton() {
    return (
        <div className="flex flex-row items-center justify-between border-b py-4">
            <div className="flex items-center space-x-4">
                <Skeleton className="w-6 h-6 rounded-full" />
                <div className="min-w-0 space-y-2">
                    <Skeleton className="w-20 h-6" />
                    <Skeleton className="w-20 h-6" />
                </div>
            </div>
            <Skeleton className="w-20 h-6" />
        </div>
    )
}

export function LatestInvoicesSkeleton() {
    return (
        <Card className="flex flex-col w-full md:col-span-4">
            <CardHeader>
                <Skeleton className="w-36 h-6 mb-4" />
            </CardHeader>
            <CardContent>
                <div>
                    <InvoicesSkeleton />
                    <InvoicesSkeleton />
                    <InvoicesSkeleton />
                    <InvoicesSkeleton />
                    <InvoicesSkeleton />
                </div>
            </CardContent>
        </Card>
    )
}

export default function DashboardSkeleton() {
    return (
        <>
            <Skeleton className="w-36 h-6 mb-4" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <CardsSkeleton />
                <CardsSkeleton />
                <CardsSkeleton />
                <CardsSkeleton />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8 mt-6">
                <RevenueChartSkeleton />
                <LatestInvoicesSkeleton />
            </div>
        </>
    )
}