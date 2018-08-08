import { Injectable } from "@angular/core";

@Injectable()
export class AppHelper {
  currentColor: string = "primary";
  currentIndex: number = 0;
  colors=["primary","secondary","danger","light","dark"];

  constructor(
  ) { }

  insertCurrentColor(index: number){
    this.currentColor = this.colors[index];
    this.currentIndex = index;
  }
}