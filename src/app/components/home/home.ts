import { Component } from '@angular/core';
import { Profile } from "../profile/profile";
import { Nav } from "../nav/nav";

@Component({
  selector: 'app-home',
  imports: [Profile, Nav],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
