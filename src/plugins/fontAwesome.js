import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { faExpandArrowsAlt, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faVuejs,faLinkedin,faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

var i = [ faExpandArrowsAlt, faCheckSquare, faFileDownload ];
var b = [ faGithub, faVuejs ,faLinkedin,faFacebook ];
[...i, ...b].forEach(i => library.add(i));

Vue.component('fa-icon', FontAwesomeIcon)