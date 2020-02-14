import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Dashboard ',
      url: '/home',
      icon: 'ios-clipboard'
    },
    {
      title: 'Meu Painel',
      url: '/painel',
      icon: 'md-browsers'
    },
    {
      title: 'Relatórios',
      url: '/relatorio',
      icon: 'ios-create'
    },
    {
      title: 'Curral',
      url: '/curral',
      icon: 'logo-octocat'
    },
    {
      title: 'Sair',
      url: '/login',
      icon: 'md-exit'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
