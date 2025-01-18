<script lang="ts">
	import { filterStates } from '$lib/states/filter.svelte.ts';

	const jobtypes: string[] = ['Job', 'Internship', 'Workshop'];
	const modes: string[] = ['Offline', 'Online', 'Hybrid'];
	const sectors: string[] = ['Private', 'Government'];
</script>

<div class="flex justify-center gap-4 p-4">
	<select
		class="select select-bordered max-w-xs"
		onchange={(e) => filterStates.setType((e.target as HTMLSelectElement).value)}
	>
		<option disabled selected>Type</option>
		{#each jobtypes as job}
			<option value={job} id={job}>{job}</option>
		{/each}
	</select>

	<select
		class="select select-bordered max-w-xs"
		onchange={(e) => filterStates.setMode((e.target as HTMLSelectElement).value)}
	>
		<option disabled selected>Modes</option>
		{#each modes as mode}
			<option value={mode} id={mode}>{mode}</option>
		{/each}
	</select>

	<select
		class="select select-bordered max-w-xs"
		onchange={(e) => filterStates.setSector((e.target as HTMLSelectElement).value)}
	>
		<option disabled selected>Sector</option>
		{#each sectors as sector}
			<option value={sector} id={sector}>{sector}</option>
		{/each}
	</select>
</div>
