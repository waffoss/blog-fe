import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  imports: [MatCardModule],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
