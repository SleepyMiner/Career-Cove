<script lang="ts">
	let { data } = $props();

	const formatDate = (dateStr: string) => {
		const date = new Date(dateStr);

		const formattedDate = date.toLocaleString('en-US', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			timeZone: 'UTC'
		});
		return formattedDate;
	};
</script>

<svelte:head>
	<title>Applied Jobs - Career Cove</title>
</svelte:head>

<h1 class="m-10 text-center text-xl lg:text-3xl">Applied Jobs</h1>

<div class="flex flex-wrap justify-center gap-4">
	{#each data.userApplications as application}
		<div class="card w-96 bg-base-300 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">{application.jobTitle}</h2>
				<p>{application.orgName}</p>
				{#if application.accepted}
					<p class="badge badge-success">Accepted</p>
				{:else}
					<p class="badge badge-warning">Pending</p>
				{/if}
				<div class="card-actions justify-end">
					<p>{`Applied on: ${formatDate(application.created)}`}</p>
				</div>
			</div>
		</div>
	{/each}
</div>
