import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { defaultIfEmpty, map } from 'rxjs/operators';
import { BreadcrumbDefinition, BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent implements OnInit {
  sectionTitle$!: Observable<string>;
  constructor(private bcService: BreadcrumbService) {}

  ngOnInit() {
    this.sectionTitle$ = this.bcService.breadcrumbs$.pipe(
      map((breadcrumbs) => {
        if (
          breadcrumbs.length > 0 &&
          breadcrumbs[breadcrumbs.length - 1].label &&
          breadcrumbs[breadcrumbs.length - 1].label !== 'Home'
        ) {
          return breadcrumbs[breadcrumbs.length - 1].label as string;
        }
        return '';
      })
    );
  }
}
