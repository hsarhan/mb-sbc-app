<script lang="ts">
	import { page } from '$app/stores';
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';

	let mID = 'G-KGHJT8ZS6J';
	//G-KGHJT8ZS6J, ...GTM-WS9QRR4

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', mID, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-WS9QRR4');
	</script>

	<script async src="https://www.googletagmanager.com/gtag/js?id={mID}">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', { mID });
	</script>
</svelte:head>

<GoogleAnalytics properties={[mID]} />
