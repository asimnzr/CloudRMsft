import { InMemoryDbService } from "angular-in-memory-web-api";
import { InMemoryDb } from "app/fake-db/in-memory-db";

export class InMemoryStudioDbService implements InMemoryDbService {
    createDb(): any {
        return {
            // In memory DB for the whole application
            "in-memory-customers": InMemoryDb.customers
        };
    }
}
