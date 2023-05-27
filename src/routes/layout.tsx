import { component$, Slot } from '@builder.io/qwik'; // useStyles$
import { routeLoader$ } from '@builder.io/qwik-city';

/*
import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';
*/

// import styles from './styles.css?inline';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
	// useStyles$(styles);
	return (
		<>
			header
			<main>
			<Slot />
			</main>
			footer
		</>
	);
});
