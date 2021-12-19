// import {
//   ChangeDetectionStrategy,
//   Component,
//   Input,
//   OnInit,
// } from '@angular/core';
// import { Router } from '@angular/router';
// import { MakeupListItem } from '../../models';

// @Component({
//   selector: 'app-makeup-list-item',
//   templateUrl: './makeup-list-item.component.html',
//   styleUrls: ['./makeup-list-item.component.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class MakeupListItemComponent implements OnInit {
//   @Input() item: MakeupListItem | undefined;

//   constructor(private router: Router) {}

//   goToDetails() {
//     this.router.navigate([`content/${this.item?.data.id}`]);
//   }

//   ngOnInit() {}
// }
