# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### How to work on 

edit file `docs/index.mdx`

generate new version with `npm run docusaurus docs:version X.X.X`
check version inside `docusaurus.config.js`, `versions.json`
edit `script.js` with new version

**sdk has changed of version**

update the link of new sdk's version : 
`<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/sline-io/web-sdk@2.2/sline-sdk.min.js"></script>`

create a file inside `static/js/vX.X.X` copied from older and add new things from newest sdk version

**things to know**

`static/CNAME` is the domain name of sdk, update it only if sdk has changed of domain name 

if problem of deploy like 404 in prod: 
`github` -> `github settings` -> `pages` -> `customDomain` -> `sdk.sline.io`