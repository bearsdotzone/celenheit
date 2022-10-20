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
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 24px;
		text-align: center;
		min-width: 100%;
	}
</style>
