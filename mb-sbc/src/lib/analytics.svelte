<script lang="ts">
  import { page } from '$app/stores'
  import { GoogleAnalytics } from '@beyonk/svelte-google-analytics'

  let mID = 'G-KGHJT8ZS6J';
  //G-KGHJT8ZS6J, ...GTM-WS9QRR4

  $: {
    if (typeof gtag !== 'undefined') {
      gtag('config', mID, {
        page_title: document.title,
        page_path: $page.url.pathname,
      })
    }
  }
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id={mID}">
  </script>
  <script>
    window.dataLayer = window.dataLayer || []

    function gtag() {
      dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', {mID})
  </script>
</svelte:head>

<GoogleAnalytics properties={[ mID ]} />