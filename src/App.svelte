<script>
	import Tailwindcss from './Tailwindcss.svelte';
	import Navbar from './Components/Navbar.svelte';
	import Router from 'svelte-spa-router';
	import routes from './routes.js';
</script>

<Tailwindcss />

<main class="main-container">
	<Navbar/>
	<Router {...routes} />
</main>