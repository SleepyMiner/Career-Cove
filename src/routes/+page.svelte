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
		<div class="card card-compact w-96 bg-base-300 shadow-xl" id={job.id}>
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
						<div class="badge glass badge-primary badge-outline">{skill}</div>
					{/each}
					<div class="card-actions p-2">
						<button
							class="btn btn-primary"
							onclick={() => document.getElementById(`${job.id}_${job.title}`).showModal()}
							>View</button
						>
						<dialog id={`${job.id}_${job.title}`} class="modal modal-bottom sm:modal-middle">
							<div class="modal-box">
								<form method="dialog">
									<button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button>
								</form>
								<h3 class="flex items-center text-lg">
									<p>{job.title}</p>
									<p class="badge badge-accent badge-sm mr-4 rounded md:badge-md lg:badge-lg">
										{job.orgName}
									</p>
								</h3>
								<p class="py-4">{job.description}</p>
								<p class="p-2">Required Skills:</p>
								<div class="block gap-2 md:flex md:flex-wrap lg:flex lg:flex-wrap">
									{#each job.skills as skill}
										<div class="badge glass badge-primary badge-outline">{skill}</div>
									{/each}
								</div>
								<div class="join join-vertical mt-10">
									<div class="badge join-item">
										<p class="pr-2 font-bold">Openings:</p>
										{job.openings}
									</div>
									<div class="badge join-item">
										<p class="pr-2 font-bold">Type:</p>
										{job.type}
									</div>
									<div class="badge join-item">
										<p class="pr-2 font-bold">Sector:</p>
										{job.sector}
									</div>
								</div>
								<div class="mt-4 flex justify-end">
									<a
										class="btn btn-primary btn-sm md:btn-md lg:btn-md"
										href={`/apply?jobId=${job.id}`}>Apply</a
									>
								</div>
							</div>
						</dialog>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
