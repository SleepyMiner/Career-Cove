<script lang="ts">
	import Filter from '$lib/components/Filter.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>Career Connect</title>
	<meta name="description" content="Career Connect" />
</svelte:head>

<div class="flex flex-wrap justify-center gap-4">
	{#each data.jobData as job}
		<div class="card bg-base-200 w-96 shadow-xl" id={job.id}>
			<div class="card-body">
				<h2 class="card-title flex justify-between">
					{job.title}
					<div class="tooltip" data-tip={job.orgName}>
						<div class="avatar">
							<div class="w-8 rounded-full">
								<img src={`https://ui-avatars.com/api/?name=${job.orgName}`} alt={job.orgName} />
							</div>
						</div>
					</div>
				</h2>
				<p>{job.description}</p>
				<div class="card-actions justify-end">
					{#each job.skills as skill}
						<div class="badge badge-outline badge-primary">{skill}</div>
					{/each}
					<div class="card-actions p-2">
						<button class="btn btn-primary">Apply</button>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
<footer class="footer footer-center bg-base-300 text-base-content mt-10 p-4">
	<aside>
		<p>Copyright © {new Date().getFullYear()} - All right reserved by Career Cove @SleepyMiner</p>
	</aside>
</footer>
