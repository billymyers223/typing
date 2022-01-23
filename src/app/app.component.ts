import { Component } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  text = '';
  same = false;
  onChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.text = target.value
    console.log(target.value);
    if(this.text == this.randomText){
      this.same = true;
    }
  }
  compare(randomLetter: string, enteredletter: string){
    if(!enteredletter){
      return 'pending';
    }
    return randomLetter === enteredletter? 'correct' : 'incorrect';
  }

}
