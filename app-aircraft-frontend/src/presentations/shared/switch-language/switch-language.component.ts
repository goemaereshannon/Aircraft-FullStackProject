import { Component, isDevMode, LOCALE_ID, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-switch-language',
  template: `
    <select
      [(ngModel)]="siteLocale"
      #language
      (change)="onChange(language.value)"
    >
      <option *ngFor="let lang of languageList" [value]="lang.code">
        {{ lang.label }}
      </option>
    </select>
  `,
  styleUrls: ['./switch-language.component.scss'],
})
export class SwitchLanguageComponent implements OnInit {
  siteLanguage: string;
  siteLocale: string;
  IsDefault: boolean;
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'fr', label: 'français' },
    { code: 'zh', label: '中国人' },
    { code: 'es', label: 'español' },
  ];
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      locale = params.lang;
      console.log(locale);
      this.siteLocale = locale;
      this.siteLocale = params.lang;
    });
  }

  ngOnInit(): void {
    this.siteLocale = window.location.pathname.split('/')[3];
    this.siteLanguage = this.languageList.find(
      (f) => f.code === this.siteLocale
    )?.label;
    if (!this.siteLanguage) {
      this.onChange(this.languageList[0].code);
    }
  }

  onChange(selectedLangCode: string) {
    window.location.href = `reservation/travelerinfo/${selectedLangCode}`;
  }
}
