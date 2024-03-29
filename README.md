# ssg-test-3-qwik

A test to see which of the Static Site Generators I should use for my personal website and blog.

Tutorial here: <https://blog.openreplay.com/build-fast-web-apps-using-qwik-city/>

[![Netlify Status](https://api.netlify.com/api/v1/badges/c85a117f-77ff-4fc2-b028-85f2859c4833/deploy-status)](https://app.netlify.com/sites/ssg-test-3-qwik/deploys)

## Integrations to look at

1. [Partytown](https://qwik.builder.io/docs/integrations/partytown/) for external scripts
2. [Playwright](https://qwik.builder.io/docs/integrations/playwright/) for end to end testing
3. [Vitest](https://qwik.builder.io/docs/integrations/vitest/) for unit testing
4. [i18n via `$localize`](https://qwik.builder.io/docs/integrations/i18n/) for internationalization
5. [Image optimization via `@unpic/qwik`](https://qwik.builder.io/docs/integrations/image-optimization/) for optimizing images
6. [Icons via `qwikest/icons`](https://qwik.builder.io/docs/integrations/icons/) for icons
7. [Netlify Edge](https://qwik.builder.io/docs/deployments/netlify-edge/) or [Vercel Edge](https://qwik.builder.io/docs/deployments/vercel-edge/) for faster edge deploys
8. [MDX for Markdown](https://qwik.builder.io/docs/guides/mdx/) or [Prisma for MongoDB](https://qwik.builder.io/docs/integrations/prisma/) or [Supabase for SQL](https://qwik.builder.io/docs/integrations/supabase/) for some sort of database for hundreds of links and their metadata (or it could just be a massive JSON but that doesn't have pagination)
9. [Sitemaps via Netlify adapter](https://qwik.builder.io/docs/advanced/sitemaps/) for generating `sitemap.xml`
10. [404](https://qwik.builder.io/docs/advanced/routing/) page handling
11. What else?...

# Qwik App ⚡️

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik Github](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)
- [Partytown](https://partytown.builder.io/)
- [Mitosis](https://github.com/BuilderIO/mitosis)
- [Builder.io](https://www.builder.io/)

---

## Project Structure

Inside of you project, you'll see the following directories and files:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory based routing, which can include a hierarchy of `layout.tsx` layout files, and `index.tsx` files as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Add Integrations

Use the `pnpm qwik add` command to add other integrations. Some examples of integrations include as a Cloudflare, Netlify or Vercel server, and the Static Site Generator (SSG).

```
pnpm qwik add
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). For Qwik during development, the `dev` command will also server-side render (SSR) the output. The client-side development modules loaded by the browser.

```
pnpm dev
```

> Note: during dev mode, Vite will request many JS files, which does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, production build of `src/entry.preview.tsx`, and create a local server. The preview server is only for convenience to locally preview a production build, but it should not be used as a production server.

```
pnpm preview
```

## Production

The production build should generate the client and server modules by running both client and server build commands. Additionally, the build command will use Typescript run a type check on the source.

```
pnpm build
```

## Netlify

This starter site is configured to deploy to [Netlify Edge Functions](https://docs.netlify.com/edge-functions/overview/), which means it will be rendered at an edge location near to your users.

### Local development

The [Netlify CLI](https://docs.netlify.com/cli/get-started/) can be used to preview a production build locally. To do so: First build your site, then to start a local server, run:

1. Install Netlify CLI globally `npm i -g netlify-cli`.
2. Build your site with both ssr and static `pnpm build`.
3. Start a local server with `pnpm serve`.
   In this project, `pnpm serve` uses the `netlify dev` command to spin up a server that can handle Netlify's Edge Functions locally.
4. Visit [http://localhost:8888/](http://localhost:8888/) to check out your site.

### Edge Functions Declarations

[Netlify Edge Functions declarations](https://docs.netlify.com/edge-functions/declarations/)
can be configured to run on specific URL patterns. Each edge function declaration associates
one site path pattern with one function to execute on requests that match the path. A single request can execute a chain of edge functions from a series of declarations. A single edge function can be associated with multiple paths across various declarations.

This is useful to determine if a page response should be Server-Side Rendered (SSR) or
if the response should use a static-site generated (SSG) `index.html` file instead.

By default, the Netlify Edge adaptor will generate a `.netlify/edge-middleware/manifest.json` file, which is used by the Netlify deployment to determine which paths should, and should not, use edge functions.

To override the generated manifest, you can [add a declaration](https://docs.netlify.com/edge-functions/declarations/#add-a-declaration) to the `netlify.toml` using the `[[edge_functions]]` config. For example:

```toml
[[edge_functions]]
  path = "/admin"
  function = "auth"
```

### Addition Adapter Options

Netlify-specific option fields that can be passed to the adapter options:

- `excludedPath` this option accepts a `string` glob pattern that represents which path pattern should not go through the generated Edge Functions.

### Deployments

You can [deploy your site to Netlify](https://docs.netlify.com/site-deploys/create-deploys/) either via a Git provider integration or through the Netlify CLI. This starter site includes a `netlify.toml` file to configure your build for deployment.

#### Deploying via Git

Once your site has been pushed to your Git provider, you can either link it [in the Netlify UI](https://app.netlify.com/start) or use the CLI. To link your site to a Git provider from the Netlify CLI, run the command:

```shell
netlify link
```

This sets up [continuous deployment](https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git) for your site's repo. Whenever you push new commits to your repo, Netlify starts the build process..

#### Deploying manually via the CLI

If you wish to deploy from the CLI rather than using Git, you can use the command:

```shell
netlify deploy --build
```

You must use the `--build` flag whenever you deploy. This ensures that the Edge Functions that this starter site relies on are generated and available when you deploy your site.

Add `--prod` flag to deploy to production.

## Static Site Generator (Node.js)

```
pnpm build.server
```
