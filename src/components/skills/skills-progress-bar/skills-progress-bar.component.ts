import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skills-progress-bar',
  templateUrl: './skills-progress-bar.component.html',
  styleUrls: ['./skills-progress-bar.component.scss'],
})
export class SkillsProgressBarComponent implements OnInit {
  @Input() title!: string;
  @Input() percentage!: string;


  constructor() {}

  ngOnInit() {}
}
