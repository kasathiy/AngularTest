import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sample",
  templateUrl: "./sample.component.html",
  styleUrls: ["./sample.component.css"]
})
export class SampleComponent implements OnInit {
  name: string;
  arrayElem: string[];
  class = "submit";
  style = "green";

  date = new Date();

  constructor() {
    this.name = "sample";
    this.arrayElem = ["a", "b", "c", "d"];
  }

  onInputChanges(eventObj) {
    console.log("EventObj", eventObj);
    this.name = eventObj.target.value;
  }

  onSubmit() {
    this.class = "redColor";
    this.style = "yellow";
  }

  ngOnInit() {}
}
