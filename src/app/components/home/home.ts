import { Component } from '@angular/core';
import { Profile } from '../profile/profile';
import { Nav } from '../nav/nav';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import {
  diAngularOriginal,
  diBootstrapOriginal,
  diCss3Original,
  diDockerOriginal,
  diGithubOriginal,
  diHtml5Original,
  diJavaOriginal,
  diJavascriptOriginal,
  diMysqlOriginal,
  diPostmanOriginal,
  diSpringOriginal,
  diTypescriptOriginal,
} from '@ng-icons/devicon/original'; // Removed: not exported

@Component({
  selector: 'app-home',
  imports: [Profile, Nav, NgIcon],
  templateUrl: './home.html',
  styleUrl: './home.css',
  viewProviders: [
    provideIcons({
      featherAirplay,
      diJavascriptOriginal,
      diTypescriptOriginal,
      diCss3Original,
      diHtml5Original,
      diSpringOriginal,
      diBootstrapOriginal, 
      diAngularOriginal,
      diJavaOriginal,
      diMysqlOriginal,diPostmanOriginal,
      diGithubOriginal,diDockerOriginal


    }),
  ],
  standalone: true,
})
export class Home {}
