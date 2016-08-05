import {bootstrap} from '@angular/platform-browser-dynamic';
// import {enableProdMode} from '@angular/core';

import {App} from './app/app';

// enableProdMode()

bootstrap(App, [])
.catch(err => console.error(err));
