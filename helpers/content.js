import {contact}         from './content/contact';
import {fallProtection}  from './content/fall-protection';
import {gir}             from './content/gir';
import {livingWalls}     from './content/living-walls';
import {main}            from './content/_main';
import {privacy}         from './content/privacy';
import {solar}           from './content/solar';
import {stormwater}      from './content/stormwater';
import {trellis}         from './content/trellis';
import {vegetation}      from './content/vegetation';
import {error}           from './content/error';
import {socialHandles}   from './content/social-handles';
import {footer}          from './content/footer';

/*
 * This file - with few, small exceptions - includes ALL "static" content for the Purple-Roof site, i.e. all content that is not a blog post or image or file.
 * Blog posts and images are in the CMS.
 * Files (such as Word documents for spec downloads), are saved at ____ (currently TBD).
 * When editing this file MAINTAIN FILE STRUCTURE!!!
 * The site is hard-coded to read the structure of this file, structure mostly being object structure (data types, what is an object, what are object keys, etc)
 * Arrays may change length. Array length is not object structure.  E.g. if there are 2 lines of text in an array, and we want 5 lines, change to 5 lines; this does not affect "structure".
 * ALL OTHER COMMENTS ARE IN-LINE
 */


const thisUrl = process.env.THIS_URL;
const thisDomain = process.env.THIS_DOMAIN;

export default {

  contact,
  fallProtection,
  gir,
  livingWalls,
  main,
  privacy,
  solar,
  stormwater,
  trellis,
  vegetation,
  socialHandles,
  footer,
  error,
};