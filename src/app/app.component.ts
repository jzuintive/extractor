import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items = [1, 2, 3, 4];

  ngOnInit(){
      setInterval(() => {
        this.items = [...this.items, Math.random()];
      }, 1000);
  }
}
