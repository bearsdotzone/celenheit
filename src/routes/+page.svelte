<script lang="ts">
	let ch = 0;
	let c = 0;
	let f = 32;

	const ramCopy = async () => {
		await navigator.clipboard.writeText('🐏');
	};
</script>

<div class="crop-target">
	<h2>Celenheit Calculator</h2>

	<div class="box">
		<label for="celenheit"
			>Celenheit (Ch or <span
				style="cursor: pointer;"
				role="button"
				tabindex="0"
				on:keypress={() => ramCopy()}
				on:click={() => ramCopy()}>🐏</span
			>)</label
		>
		<input
			id="celenheit"
			name="celenheit"
			type="number"
			bind:value={ch}
			on:keyup={(e) => {
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
			id="celsius"
			bind:value={c}
			on:keyup={(e) => {
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
			id="fahrenheit"
			bind:value={f}
			on:keyup={(e) => {
				ch = Number(((f - 32) * (25 / 17)).toFixed(1));
				c = Number(((f - 32) / 1.8).toFixed(1));
			}}
		/>
	</div>
</div>

<p>Click the ram to copy it to your clipboard.</p>

<style>
	.box {
		padding: 2px;
		text-align: right;
		display: flex;
		align-items: center;
		align-content: space-between;
		font-weight: bold;
		flex-grow: 0;
	}

	.crop-target {
		padding: 1.245em;
		padding-left: min((100% - (22rem)) / 2, 1.245em);
		padding-right: min((100% - (22rem)) / 2, 1.245em);
		max-width: 100%;
		width: 22rem;
		display: flex;
		flex-direction: column;
		align-items: end;
	}

	p {
		margin-top: 0rem;
	}

	h2 {
		margin-top: 0;
		min-width: 100%;
	}

	label {
		flex-grow: 0;
		margin-right: 2rem;
	}

	input {
		flex-grow: 0;
		max-width: 5rem;
		font-size: 24px;
		width: 5rem;
		font-family: 'Times New Roman', Times, serif;
	}
</style>
