<script>
	import './styles.css';
	export const ssr = false;
</script>

<!-- <Header /> -->

<body>
	<main>
		<slot />
	</main>
</body>

<style>
	main {
		margin: 2px;
		display: flex;
		min-width: 100vw;
		flex-direction: column;
		min-height: 100vh;
		align-items: center;
		font-size: 24px;
	}

	body {
		background-color: #dc81a3;
		color: #1c2833;
	}
</style>
