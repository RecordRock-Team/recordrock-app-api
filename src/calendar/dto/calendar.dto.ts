import { IsDate, IsNumber, IsString } from "class-validator";


export class CalendarDto{
  @IsString()
  centerFullname: string;
  
  @IsString()
  clearRecord: ColorCount[];
  
  @IsString()
  dailyMemo: string;

  @IsNumber()
  day: number;

  @IsNumber()
  workoutTimeHour: number;

  @IsNumber()
  workoutTimeMinute: number;

  @IsDate()
  modifiedTime: Date;

  @IsString()
  modifyingUser: String;

}

export class ColorCount {
  @IsString()
  color: string;

  @IsNumber()
  count: number;
}

