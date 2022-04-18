import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioDanyCorea';

  showModal(){
    Swal.fire({
      
      padding: '0px',
      width:'600px',
      imageHeight: 200,
      showConfirmButton:false,
      showCloseButton: true,
      color: '#151515',
      html:`<div class="modal-popup">
      <img src="assets/images/portfolio/gallery/fosforera_inventory.png" width="100%" height="200px" alt="" />

      <div class="modal-popup__desc">
          <h5>Droplet</h5>
          <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
          <ul class="modal-popup__cat">
              <li>Branding</li>
              <li>Product Design</li>
          </ul>
      </div>

      <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
  </div>`,
    
  
  imageAlt: 'Custom image',
      background: '#fff url(/images/trees.png)',
      backdrop: `
      #151515
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
  }
}
