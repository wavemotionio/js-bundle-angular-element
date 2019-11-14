import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-recently-viewed-sales',
  templateUrl: './recently-viewed-sales.component.html',
  styleUrls: ['./recently-viewed-sales.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RecentlyViewedSalesComponent implements OnInit {
	title = "Chuck Norris App";
	quote = "";
	iconUrl = "";
	url = "https://api.chucknorris.io/jokes/random";
	
	constructor(private http: HttpClient) {}
	
	getQuote() {
		return this.http.get(this.url).subscribe(res => {
			this.quote = res["value"];
			this.iconUrl = res["icon_url"];
		});
	}

	ngOnInit() {
		this.getQuote(); 
	}
}
