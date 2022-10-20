<script lang="ts">
	let ch = 0;
	let c = 0;
	let f = 32;

	const ramCopy = async () => {
		await navigator.clipboard.writeText('🐏');
	};
</script>

<svelte:head>
	<title>Celenheit Calculator</title>
	<meta name="description" content="Celenheit Calculator" />
</svelte:head>

<h2>Celenheit Calculator</h2>

<div class="box">
	<label for="celenheit"
		>Celenheit (Ch or <span on:keypress={() => ramCopy()} on:click={() => ramCopy()}>🐏</span
		>)</label
	>
	<input
		name="celenheit"
		type="number"
		bind:value={ch}
		on:change={(e) => {
			c = Number((ch / (45 / 17)).toFixed(1));
			f = Number((ch / (25 / 17) + 32).toFixed(0));
		}}
	/>
</div>
<div class="box">
	<label for="celsius">Celsius (°C)</label>
	<input
		name="celsius"
		type="number"
		bind:value={c}
		on:change={(e) => {
			ch = Number((c * (45 / 17)).toFixed(1));
			f = Number((c * 1.8 + 32).toFixed(0));
		}}
	/>
</div>
<div class="box">
	<label for="fahrenheit">Fahrenheit (°F)</label>
	<input
		name="fahrenheit"
		type="number"
		bind:value={f}
		on:change={(e) => {
			ch = Number(((f - 32) * (25 / 17)).toFixed(1));
			c = Number(((f - 32) / 1.8).toFixed(1));
		}}
	/>
</div>

<p>Click the ram to copy it to your clipboard.</p>

<style>
	.box {
		padding: 2px;
		text-align: center;
		width: 22rem;
		display: flex;
		align-items: center;
		align-content: space-between;
		font-weight: bold;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}

	label {
		flex: 2;
	}

	input {
		flex-grow: 0;
		max-width: 5rem;
		font-size: 24px;
		width: 5rem;
		font-family: 'Times New Roman', Times, serif;
	}
</style>
