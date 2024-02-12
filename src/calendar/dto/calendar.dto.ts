import { Transform, Type } from "class-transformer";
import { IsDate, IsInstance, IsNumber, IsString, ValidateNested, isDate, isNumber } from "class-validator";


export class CalendarDto{

  @IsString()
  centerFullname: string

  @ValidateNested()
  @Type(() => ColorCount)
  clearRecord: ColorCount[]

  @IsString()
  dailyMemo: string

  @IsDate()  
  clearDate: Date // datetime, 수정시간, 수정한 사람, url

  @IsNumber()
  workoutHour: number

  @IsNumber()
  workoutMinute: number

  @IsString()
  image_url: "dflk2@kdjfiwopaour"
}

export class ColorCount {
  @IsString()
  grade: number;

  @IsString()
  color: string;

  @IsNumber()
  count: number;
}