import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Service } from "../services/service";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
@Component({
  selector: "app-space-list",
  templateUrl: "./space-list.component.html",
  styleUrls: ["./space-list.component.css"],
})
export class SpaceListComponent implements OnInit, OnChanges {
  listdata$: Observable<any>;
  launchYear: any;
  launchSuccess: any;
  landSuccess: any;
  years = [2006,2007,2008,2009,2010,2012,2013,2014,2016, 2017, 2018, 2019, 2020];

  constructor(private Serive: Service) {}

  public ngOnChanges(changes: SimpleChanges): void {
    console.log("Widget ngOnChanges event-handler.");
  }

  ngOnInit(): void {
    this.getList();
  }

  clearAll(){
    this.landSuccess = undefined;
    this.launchYear = undefined;
    this.launchSuccess = undefined;
    this.getList()
  }

  getList() {
    const body: any = { limit: 100 };

    if (this.launchYear) {
      body["launch_year"] = this.launchYear;
    }
    if (this.landSuccess != undefined && (this.landSuccess || !this.landSuccess)) {
      body["land_success"] = this.landSuccess;
    }
    if (this.launchSuccess != undefined && (this.launchSuccess || !this.launchSuccess)) {
      body["launch_success"] = this.launchSuccess;
    }

    this.listdata$ = this.Serive.getlist(body).pipe(
      tap((res) => {
        console.log("res", res);
      })
    );
  }

  updateValues(name, value) {
    switch (name) {
      case "year":
        this.launchYear = value;
        this.launchSuccess = undefined;
        this.landSuccess = undefined 

        break;
      case "launch":
        this.launchSuccess = value;
        this.launchYear = undefined;
        this.landSuccess = undefined
        break;
      case "land":
        this.landSuccess = value;
        this.launchYear = undefined;
        this.launchSuccess = undefined;
        break;
    }
    this.getList();
  }
}
