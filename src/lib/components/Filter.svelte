<script lang="ts">
	export let jobtypes: string[] = [];
	export let modes: string[] = [];
	export let sectors: string[] = [];
</script>

<div class="join flex justify-center p-4">
	<select class="select select-bordered max-w-xs">
		<option disabled selected>Type</option>
		{#each jobtypes as job}
			<option value={job} id={job}>{job}</option>
		{/each}
	</select>

	<select class="select select-bordered max-w-xs">
		<option disabled selected>Modes</option>
		{#each modes as mode}
			<option value={mode} id={mode}>{mode}</option>
		{/each}
	</select>

	<select class="select select-bordered max-w-xs">
		<option disabled selected>Sector</option>
		{#each sectors as sector}
			<option value={sector} id={sector}>{sector}</option>
		{/each}
	</select>
</div>
