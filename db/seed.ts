import '@/db/env-config';
import { customers, invoices, revenue, users } from "@/lib/placeholder-data";
import db from "./drizzle";
import * as schema from "./schema";
import { exit } from "process";

const main = async () => {
    try {
        await db.transaction(async (trx) => {
            await trx.delete(schema.revenue)
            await trx.delete(schema.invoices)
            await trx.delete(schema.customers)
            await trx.delete(schema.users)

            await trx.insert(schema.users).values(users)
            await trx.insert(schema.customers).values(customers)
            await trx.insert(schema.invoices).values(invoices)
            await trx.insert(schema.revenue).values(revenue)
        });

        console.log('Data seeded successfully');
        exit(0);
    } catch (error) {
        console.error(error);
        throw new Error('Error while seeding data');
    }
}

main()