<script>
	import './styles.css';
	export const ssr = false;
</script>

<!-- <Header /> -->

<main>
	<slot />
</main>

<style>
	main {
		margin: 2px;
		display: flex;
		max-width: 100vw;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
