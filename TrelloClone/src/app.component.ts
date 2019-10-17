import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
names :string[] = ["Jim","Sara", "Steven"];
show : boolean = true;
toggle(){
this.show = !this.show;
}
}


