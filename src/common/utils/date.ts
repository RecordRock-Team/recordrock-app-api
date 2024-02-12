export class Utils {
  static yearFromDatetime = (date: Date): number => date.getFullYear();
  static monthFromDatetime = (date: Date): number => date.getMonth()+1;
  static dayFromDatetime = (date: Date): number => date.getDate();
}