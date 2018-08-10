'use strict';

import './index.less'

import index from './index.hbs'
document.body.innerHTML = index({ info: 'World!' })
