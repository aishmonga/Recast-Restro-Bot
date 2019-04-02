import { Component, OnInit } from "@angular/core";
import { BotService } from "../bot.service";

@Component({
  selector: "app-recast",
  templateUrl: "./recast.component.html",
  styleUrls: ["./recast.component.css"]
})
export class RecastComponent {
  constructor(private recast: BotService) {
    // this.recast.interactWithRecast();
  }
  question;
  // response = null;
  // let response = new Array(10);
  responseArr: any = [];
  check = false;
  askQuestion() {
    this.recast.interactWithRecast(this.question).subscribe(data => {
      console.log(data);
      // this.responseArr.push(data);
      console.log("resp : ", this.responseArr.push(data));
      this.check = true;
    });
  }
}
