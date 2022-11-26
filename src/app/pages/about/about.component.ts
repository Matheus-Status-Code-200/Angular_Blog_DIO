import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  photCover:string="https://avatars.githubusercontent.com/u/64912877?v=4";
  contentTitle:string='';
  contentDescriptio:string='Nascido em Duque de Caxias Rio de janeiro formou-se como mecanico e atuou como metalúrgico por muitos anos, decidido iniciou uma nova jornada com o propósito de migrar de carreira e se aventurar na área de TI área tão apreciada que era vista como hobby pois lhe trazia muita alegria consegurir rodar um novo código ou aprender uma nova tecologia, e isso logo viraria sua novas profissão. ';
  constructor() { }
  ngOnInit(): void {
  }
}