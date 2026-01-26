import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { disabled } from '@angular/forms/signals';
import { first } from 'rxjs';

@Component({
  selector: 'app-status-row',
  imports: [NgClass],
  templateUrl: './status-row.html',
  styleUrl: './status-row.css',
})
export class StatusRow {
  actived = true;
  enabled = false;

  isFirst = false;
  isLast = true;

  rowClasses = {
    highlight: this.actived,
    disabled: !this.enabled,

    first: this.isFirst,
    'last bold': this.isLast
  }
}
