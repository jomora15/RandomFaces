import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  progress: number;
  label: string;
  image: any;

  ngOnInit() {
    this._LoadFaces();
  }

  _LoadFaces() {
    const face = Math.random().toString(36).substring(7);
    this.image = 'https://api.adorable.io/avatars/500/' + face + '.png';

    window.setTimeout(() => this._LoadFaces(), 2000);
  }
}
