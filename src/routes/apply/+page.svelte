<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll, goto } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';

	let { data } = $props();
	console.log(data);
	let loading: boolean = $state(false);

	const submitLogin = () => {
		loading = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					toast.success('Application submitted successfully');
					await invalidateAll();
					if (result.data.redirect) {
						await goto(result.data.redirect);
					}
					break;
				case 'error':
					toast.error(result.message);

					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};
</script>

<svelte:head>
	<title>Apply - Career Cove</title>
</svelte:head>

<h1 class="text-center text-xl lg:text-3xl">Apply Career Cove</h1>
<form
	action="?/apply"
	method="POST"
	class="mt-10 flex flex-col items-center justify-center"
	enctype="multipart/form-data"
	use:enhance={submitLogin}
>
	<div class="flex w-full flex-col items-center space-y-2 pt-4">
		<!------------------------Personal Information------------------------------------>
		<h1 class="text-center text-lg font-bold lg:text-2xl">Personal Information</h1>
		<div class="form-control w-full max-w-md">
			<label for="name" class="label pb-1 font-medium">
				<span class="label-text">Full Name</span>
			</label>
			<input type="text" name="name" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="form-control w-full max-w-md">
			<label for="email" class="label pb-1 font-medium">
				<span class="label-text">Email</span>
			</label>
			<input type="email" name="email" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="form-control w-full max-w-md">
			<label for="number" class="label pb-1 font-medium">
				<span class="label-text">Phone Number</span>
			</label>
			<input type="text" name="number" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="form-control w-full max-w-md">
			<label for="address" class="label pb-1 font-medium">
				<span class="label-text">Address</span>
			</label>
			<input type="text" name="address" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="form-control w-full max-w-md">
			<label for="linkedIn" class="label pb-1 font-medium">
				<span class="label-text">LinkedIn Profile</span>
			</label>
			<input type="url" name="linkedIn" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="form-control w-full max-w-md">
			<label for="portfolioSite" class="label pb-1 font-medium">
				<span class="label-text">Portfolio Site</span>
			</label>
			<input type="url" name="portfolioSite" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="form-control w-full max-w-md">
			<label for="resume" class="label pb-1 font-medium">
				<span class="label-text">Upload Resume</span>
			</label>
			<input type="file" name="resume" class="file-input file-input-bordered w-full max-w-xs" />
		</div>

		<!------------------------Education------------------------------------>
		<h1 class="pt-10 text-center text-lg font-bold lg:text-2xl">Education</h1>
		<div class="form-control w-full max-w-md">
			<label for="graduation" class="label pb-1 font-medium">
				<span class="label-text">Highest level of Education</span>
			</label>
			<input type="text" name="graduation" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="form-control w-full max-w-md">
			<label for="university" class="label pb-1 font-medium">
				<span class="label-text">School/University Name</span>
			</label>
			<input type="text" name="university" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="form-control w-full max-w-md">
			<label for="degree" class="label pb-1 font-medium">
				<span class="label-text">Degree Name</span>
			</label>
			<input type="text" name="degree" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="form-control w-full max-w-md">
			<label for="graduationDate" class="label pb-1 font-medium">
				<span class="label-text">Graduation Date</span>
			</label>
			<input type="date" name="graduationDate" class="input input-bordered w-full max-w-md" />
		</div>
	</div>

	<div class="w-full max-w-xs pt-4">
		<button type="submit" class="btn btn-primary w-full" disabled={loading}>Apply</button>
	</div>

	<Toaster />
</form>
