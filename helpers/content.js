'use strict';

const {contact}         = require('./content/contact');
const {fallProtection}  = require('./content/fall-protection');
const {gir}             = require('./content/gir');
const {livingWalls}     = require('./content/living-walls');
const {home}            = require('./content/_main');
const {privacy}         = require('./content/privacy');
const {solar}           = require('./content/solar');
const {stormwater}      = require('./content/stormwater');
const {trellis}         = require('./content/trellis');
const {vegetation}      = require('./content/vegetation');
const {error}           = require('./content/error');
const {socialHandles}   = require('./content/social-handles');
const {footer}          = require('./content/footer');

/*
 * This file - with few, small exceptions - includes ALL "static" content for the Purple-Roof site, i.e. all content that is not a blog post or image or file.
 * Blog posts and images are in the CMS.
 * Files (such as Word documents for spec downloads), are saved at ____ (currently TBD).
 * When editing this file MAINTAIN FILE STRUCTURE!!!
 * The site is hard-coded to read the structure of this file, structure mostly being object structure (data types, what is an object, what are object keys, etc)
 * Arrays may change length. Array length is not object structure.  E.g. if there are 2 lines of text in an array, and we want 5 lines, change to 5 lines; this does not affect "structure".
 * ALL OTHER COMMENTS ARE IN-LINE
 */

module.exports = {
  contact,
  fallProtection,
  gir,
  livingWalls,
  home,
  privacy,
  solar,
  stormwater,
  trellis,
  vegetation,
  socialHandles,
  footer,
  error,
};