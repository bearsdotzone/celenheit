<script>
	let ch = 0;
	let c = 0;
	let f = 32;
</script>

<svelte:head>
	<title>Celenheit Calculator</title>
	<meta name="description" content="Celenheit Calculator" />
</svelte:head>

<span>
	<label for="celenheit">Celenheit</label>
	<input
		inputmode="numeric"
		name="celenheit"
		type="number"
		bind:value={ch}
		on:change={(e) => {
			c = Number((ch / (45 / 17)).toFixed(1));
			f = Number((ch / (25 / 17) + 32).toFixed(0));
		}}
	/>
</span>
<span>
	<label for="celsius">Celsius</label>
	<input
		inputmode="numeric"
		name="celsius"
		type="number"
		bind:value={c}
		on:change={(e) => {
			ch = Number((c * (45 / 17)).toFixed(1));
			f = Number((c * 1.8 + 32).toFixed(0));
		}}
	/>
</span>
<span>
	<label for="fahrenheit">Fahrenheit</label>
	<input
		inputmode="numeric"
		name="fahrenheit"
		type="number"
		bind:value={f}
		on:change={(e) => {
			ch = Number(((f - 32) * (25 / 17)).toFixed(1));
			c = Number(((f - 32) / 1.8).toFixed(1));
		}}
	/>
</span>

<style>
	span {
		margin: 2px;
		padding: 2px;
		text-align: center;
	}
</style>
