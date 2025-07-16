import { Component } from '@angular/core';
import { Home } from "./components/home/home";

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cvcesaralt';
}
