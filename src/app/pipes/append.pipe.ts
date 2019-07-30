import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "append"
})
export class AppendPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log("value received", value, args);
    return args[0] + value + args[1];
  }
}
