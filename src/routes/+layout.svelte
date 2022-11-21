<script>
	import './styles.css';
	export const ssr = false;
</script>

<!-- <Header /> -->
<svelte:head>
	<meta name="twitter:image" content="/celenheit/favicon.png" />
	<meta name="apple-touch-icon" content="/celenheit/favicon.png" />
	<title>Celenheit Calculator</title>
	<meta name="description" content="Celenheit Calculator" />
</svelte:head>

<main>
	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 24px;
		text-align: center;
		min-width: 100%;
	}
</style>
