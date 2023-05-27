import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
const metaTitle = 'SSG Test 3: Qwik';
const metaDescription = 'A test featuring Qwik to see which of the Static Site Generators I should use for my personal website and blog.';

/*
import Counter from '~/components/starter/counter/counter';
import Hero from '~/components/starter/hero/hero';
import Infobox from '~/components/starter/infobox/infobox';
import Starter from '~/components/starter/next-steps/next-steps';
*/

export default component$(() => {
	return (
		<>
			<h1>Hello world</h1>
		</>
	);
});

export const head: DocumentHead = {
	title: metaTitle,
	meta: [
		{
			name: 'description',
			content: metaDescription,
		},
		{
			name: 'keywords',
			content: 'test, Qwik, SSG, Static Site Generation, SEO, HTML, CSS, JS',
		},
		{
			name: 'author',
			content: 'salut@viorelmocanu.ro',
		},
		{
			name: 'og:title',
			content: metaTitle,
		},
		{
			name: 'og:description',
			content: metaDescription,
		},
		{
			name: 'og:image',
			content: '/img/index.jpg',
		},
		{
			name: 'og:image:alt',
			content: 'Image representing the index page of the SSG Qwik test.',
		},
	],
};
