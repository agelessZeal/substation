import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'html-marker',
    template: `
    <div class="ev-html-marker">
        <h4>{{ data.name }}</h4>
        <p>ID: {{data.id}}</p>
        <p>Date:{{ data.date }}</p>
        <p>Remark:{{ data.remark }}</p>
        <p>Cause:{{ data.cause }}</p>
    </div>    
  `
})
export class HTMLMarkerComponent {
    @Input() data;
}
