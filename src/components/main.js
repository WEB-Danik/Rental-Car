'use strict'

import {renderHeaderMenu} from "./header.js";

const wrapper = document.getElementById('wrapper')
wrapper.insertAdjacentHTML('afterbegin', renderHeaderMenu());