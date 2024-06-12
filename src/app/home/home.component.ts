import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';

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

  private http = inject(HttpClient)
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

  data:any
  api() {

    const name:any = document.getElementById('name')
    const containerPoem:any = document.getElementById('containerPoem')
    const hearts:any = document.getElementById('hearts')
    const personName:any = document.getElementById('personName')
    const poemText:any = document.getElementById('poem')

    let poem = ""
    this.http.get('https://poetrydb.org/author,title/Shakespeare;Sonnet').subscribe(config => {
      
      console.log(config)

      this.data = config

      const random = Math.floor(Math.random() * 153)

      poem = this.data[random]['lines']

      personName.innerHTML = `To ${name.value.toLowerCase()}`
      containerPoem.style.display = "flex"
      poemText.innerHTML = poem

      console.log(poem)

      if(personName.innerHTML == "To clarissa") {

        hearts.style.display = "flex"

      }


    });



  }

  close() {

    window.location.reload()

  }

}
