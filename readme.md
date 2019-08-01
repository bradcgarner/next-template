Green Roof Diagnostics website.

React app with Next.js server-side rendering.
Major component is integration with Butter CMS blog engine.
Hosted on Heroku.

The Purple-Roof website was forked from this, and the two were developed in tandem.  Though I try to keep styling distinctly different (which is hard), I try to keep the code consistent between the two. For many core functions, when I update one, I can copy and paste to update the other.

Later I might find places where shared helper functions can be migrated to NPM.

Folder structure is pretty simple.
* The `pages` folder contains all pages that the server renders.  
* The `components` folder should contain all components and only components. 
* The `static` folder contains static assets, such as favicons and  sitmap.xml.
* The `helpers` folder should contain everything else.

App structure and app content are pretty well separated.  Currently there is a `content.js` file in helpers, which is a JS file (JSON format, but allowing JS features) that Anna and Brad edit. We'll see how long this seems reasonable. A next thought is migrating this to a Mongo database with a simple UI that recursively reads the JSON file. Currently, this works just fine. 

Canonical url is https://www.greenroofdiagnostics.com.  We need the www because Dreamhost is unable to redirect the root directory to a Heroku DNS target, which is not a static IP address.  So the DNS entries direct the root directory to www, and then www redirects to Heroku.

Server enforces https, so when http://www lands here, the server kicks that to https://www via `express-sslify`.

Server caches via `lru-cache`. When a rendered page is request, the server checks its cache first, and sends that if found. If not, the server renders. This is done for speed.  Cache empties when server reboots. Cache has size limits and max age.

Server compresses via `compression`. Before enabling compression, cache headers were not present, now they are. I have not read up on this thorougly (because it's working), but it seems that compression knows what you are trying to do, and sets headers for you by default.

Lazy load is used throughout.  I generally am only using it for images, not components. Lazy loading the component does not seem to reduce the size of initial JS sent, nor does it seem to have any speed benefit beyond lazy loading the image, but it does seem to create a small SEO hit due to reduced content.

App must be allowed to ping StormWatch to use monitoring.

App must be able to ping site-support, a separate Node server that accepts posts from the contact us page, and then relays those requests to the appropriate party. Site-support also saves all contacts in a database.

Server dynamically creates `sitemap.xml` and `sitemap-dyanmic.js` on start. The `sitemap-static.js` file includes static (non blog post) site information, which must be updated by the developer.  The dynamic portion of the work is fetching all blog posts (currently limted to 100) and adding blog posts to the sitemap.  The -static and -dynamic JS files are used to create the sitemap page.  Due to SEO recommendations, the sitemap is also rendered as an HTML page, AND due to same recommendations, the page can be addressed as .html.

