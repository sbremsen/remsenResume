import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
declare var tinymce: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  tinytext: string;
  public tiles: Card[] = [];
  public title = 'Cloud Applications Devevelopment';
  public header = 'Hosting and Web Services using Google Firebase and Microsoft Azure Cloud platforms.';
  public description = 'This screen will be updated to include components screen. '
  + 'that utilize Angular and data feeds from Restful Web API.';

  constructor() { }

  ngOnInit() {
   // this.setTinyMCEText();
    this.initTinyMCE();
   // this.setTinyMCEContent();
  }



  initTinyMCE() {
    tinymce.init({
      selector: '#editablediv',
      inline: false,
     // width: 400,
      height: 300,
      plugins: [
        'advlist autolink link image lists charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
        'table emoticons template paste help'
      ],
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist outdent indent | link image | print preview media fullpage | ' +
        'forecolor backcolor emoticons | help',
      menu: {
        favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons'}
      },
      menubar: 'favs file edit view insert format tools table help',
      content_css: 'css/content.css'
    });
  }

  setTinyMCEText() {
   // debugger;
    this.tinytext = '<h4><span style="text-decoration: underline;">' +
          'MCE Content</span></h4><p>UI Development</p>';
    let newText = '<table style="border-collapse: collapse; width: 100%;" border="1"><tbody> <tr> <td style="width: 50.1928%;"><img src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg" alt="" width="321" height="214" /></td> <td style="width: 49.1488%; text-align: left; vertical-align: top;"> <h4 style="text-align: center;"><span style="text-decoration: underline;">MCE Content</span></h4> <ul> <li>UI Development using Angular, NodeJS, Google Firebase Cloud Hosting/NoSQL data sources</li> <li>Styling using Boostrap Responsive Design</li> <li>This TinyMCE Text editor is free, and is helpful for content update...NO CODING NEEDED!&nbsp;</li> </ul> </td> </tr> <tr> <td style="width: 50.1928%;">&nbsp;</td> <td style="width: 49.1488%;"> <h4 style="text-align: center;"><span style="text-decoration: underline;">&nbsp;</span></h4> </td> </tr> <tr> <td style="width: 50.1928%;">&nbsp;</td> <td style="width: 49.1488%;">&nbsp;</td> </tr> </tbody> </table>';
  //  this.tinytext = newText;
  }

  setTinyMCEContent() {
    let element = document.getElementById('editablediv');
    console.log(element);
    console.log(element.innerText);
    element.innerText = this.tinytext;
    console.log('completed');
  }

}
