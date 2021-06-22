import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';

import {
  faCog,
  faBars,
  faRocket,
  faPowerOff,
  faUserCircle,
  faPlayCircle,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook
} from '@fortawesome/free-solid-svg-icons';
import {
  faDiscord,
  faGithub,
  faInstagram,
  faMediumM,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    FontAwesomeModule,
  ]
})
export class FortawesomeModule {
  constructor(
    faIconLibrary: FaIconLibrary
  ) {
    faIconLibrary.addIcons(
      faBars,
      faBook,
      faCaretDown,
      faCaretUp,
      faCheck,
      faCog,
      faEdit,
      faExclamationTriangle,
      faFilter,
      faLanguage,
      faLightbulb,
      faPaintBrush,
      faPlayCircle,
      faPlus,
      faPowerOff,
      faRocket,
      faSquare,
      faStream,
      faTasks,
      faTimes,
      faTrash,
      faUserCircle,
      faWindowMaximize,

      faDiscord,
      faGithub,
      faInstagram,
      faMediumM,
      faTwitter,
      faYoutube
    );
  }
}
