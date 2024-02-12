import { platform } from "os";
import { Center } from "src/entities/Center";
import { CenterLogo } from "src/entities/CenterLogo";
import { DifficultyPerCenter } from "src/entities/DifficultyPerCenter";
import { Member } from "src/entities/Member";
import { Platform } from "src/entities/Platform";
import { Profile } from "src/entities/Profile";
import { RefreshTokens } from "src/entities/RefreshTokens";
import { TodayClear } from "src/entities/TodayClear";
import { WorkoutNote } from "src/entities/WorkoutNote";
import { WorkoutTime } from "src/entities/WorkoutTime";
import { DataSource } from "typeorm"

export const mysqlDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "climber",
    entities: [
        Center, 
        CenterLogo,
        DifficultyPerCenter,
        Member,
        Platform,
        Profile,
        RefreshTokens,
        TodayClear,
        WorkoutNote,
        WorkoutTime
    ]
})

mysqlDataSource.initialize();