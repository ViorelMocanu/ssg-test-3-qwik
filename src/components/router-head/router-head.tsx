import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
	const head = useDocumentHead();
	const loc = useLocation();

	return (
		<>
			<title>{head.title}</title>

			<link rel="canonical" href={loc.url.href} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
			{head.meta.map((m) => (
				<meta key={m.key} {...m} />
			))}
			<meta name="og:site_name" content="SSG Test 3: Qwik" />
			<meta name="og:type" content="website" />
			<meta name="og:url" content={loc.url.href} />
			<meta name="og:locale" content="en_US" />
			<meta name="og:image:width" content="1200" />
			<meta name="og:image:height" content="630" />
			<meta name="og:email" content="salut@viorelmocanu.ro" />
			<meta name="article:publisher" content="ViorelMocanu.ro" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="msapplication-TileColor" content="#fefefe" />
			<meta name="theme-color" content="#fefefe" />

			{head.links.map((l) => (
				<link key={l.key} {...l} />
			))}
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
			<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" />

			{/*head.styles.map((s) => (
				<style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
			))*/}
		</>
	);
});
