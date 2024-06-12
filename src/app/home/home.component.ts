import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
      
    const name:any = document.getElementById('name')
    const labelStyle:any = document.getElementById('labelStyle')

    name.addEventListener('input', (event: { target: { value: any; }; }) => {

      if(event.target.value) {

        labelStyle.style.top = "0em"
        labelStyle.style.textShadow = "2px 2px 2px black"
        labelStyle.style.fontSize = "10px"

      } else {

        labelStyle.style.textShadow = "2px 2px 2px transparent"
           labelStyle.style.top = "0.8em"
        labelStyle.style.fontSize = "15px"
      }

    })

  }

  start() {

    const play:any = document.getElementById('play')
    const containerInput:any = document.getElementById('containerInput')

    play.style.transform = "rotate(90deg)"
    play.style.transition = "1s"
    containerInput.style.transition = "1s"
     containerInput.style.display = "block"
     
    setTimeout(() => {
      
 
      containerInput.style.opacity = "1"
     

    }, 1000);

  }

}
