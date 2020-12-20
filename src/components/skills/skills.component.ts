import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  template: `
  <section class="page-section">
    <div class="container">
      <div class="skills-container" class="row col-lg-12 col-md-12 col-sm-12">
        <skills-progress-bar class="col-lg-4 col-md-6 col-sm-6" title="Ionic" percentage="80"></skills-progress-bar>
        <skills-progress-bar class="col-lg-4 col-md-6 col-sm-6" title="Angular" percentage="80"></skills-progress-bar>
        <skills-progress-bar class="col-lg-4 col-md-6 col-sm-6" title="HTML / CSS" percentage="80"></skills-progress-bar>
      </div>
    </div>
  </section>`,
  styles: [`.skills-container {
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-around;
}`],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
