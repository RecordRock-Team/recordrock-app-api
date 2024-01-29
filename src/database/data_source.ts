import { TodayClear } from "src/entities/TodayClear";
import { DataSource } from "typeorm"

export const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "climber",
    entities: [TodayClear]
})

dataSource.initialize();