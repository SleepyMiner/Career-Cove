<script>
	import { enhance, applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { getImageURL } from '$lib/utils';

	let { data } = $props();
	let loading = $state(false);

	const showPreview = (event) => {
		const target = event.target;
		const files = target.files;

		if (files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			const preview = document.getElementById('avatar-preview');
			preview.src = src;
		}
	};

	const handleSubmit = () => {
		loading = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};
</script>

<svelte:head>
	<title>Profile - Career Cove</title>
</svelte:head>

<h1 class="text-center text-2xl">Profile</h1>
<div class="mt-10 flex justify-center">
	<div class="avatar items-center gap-6">
		<div class="w-24 rounded-full">
			<img
				src={data.user?.avatar
					? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
					: `https://ui-avatars.com/api/?name=${data.user?.name}`}
				alt="Profile"
				class="rounded-full"
				id="avatar-preview"
			/>
		</div>
		<form
			action="?/profile"
			method="POST"
			class="flex flex-col gap-6"
			enctype="multipart/form-data"
			use:enhance={handleSubmit}
		>
			<input
				type="file"
				class="file-input file-input-bordered file-input-xs w-full max-w-xs"
				accept=".jpg,.jpeg,.png,.gif"
				name="avatar"
				disabled={loading}
			/>

			{#if loading}
				<div class="flex items-center justify-center">
					<span class="loading loading-spinner loading-xs"></span>
				</div>
			{:else}
				<button type="submit" class="btn-base-100 btn btn-xs justify-center" disabled={loading}
					>Upload</button
				>
			{/if}
		</form>
	</div>
</div>

<h1 class="mt-10 text-center text-xl">Personal Details</h1>

<div class="flex flex-col items-center justify-center">
	<label for="name" class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text text-lg"> Name: </span>
		</div>
	</label>
	<p id="name" class="w-full max-w-xs rounded-full bg-base-200 p-2 text-lg">
		{data.userData?.name}
	</p>
	<label for="email" class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text text-lg"> Email: </span>
		</div>
	</label>
	<p id="email" class="w-full max-w-xs rounded-full bg-base-200 p-2 text-lg">
		{data.userData?.email}
	</p>
</div>
