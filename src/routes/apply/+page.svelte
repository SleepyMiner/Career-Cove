<script lang="ts">
	import { formSchema } from '$lib/schemas.ts';
	let formData = {
		name: '',
		email: '',
		number: '',
		address: '',
		linkedIn: '',
		portfolioSite: '',
		resume: '',
		graduation: '',
		university: '',
		degree: '',
		graduationDate: '',
		skills: {},
		workExperience: {},
		certifications: {}
	};

	const addSkill = () => {
		const newKey = `skills-${Object.keys(formData.skills).length}`;
		formData.skills = { ...formData.skills, [newKey]: '' };
	};

	const addWorkExperience = () => {
		const index = Object.keys(formData.workExperience).length / 4;
		formData.workExperience = {
			...formData.workExperience,
			[`workExperience-title-${index}`]: '',
			[`workExperience-company-${index}`]: '',
			[`workExperience-dates-${index}`]: '',
			[`workExperience-responsibilities-${index}`]: ''
		};
	};

	const addCertification = () => {
		const index = Object.keys(formData.certifications).length / 3;
		formData.certifications = {
			...formData.certifications,
			[`certifications-name-${index}`]: '',
			[`certifications-org-${index}`]: '',
			[`certifications-date-${index}`]: ''
		};
	};
</script>

<svelte:head>
	<title>Apply - Career Cove</title>
</svelte:head>

<h1 class="text-center text-xl lg:text-3xl">Apply Career Cove</h1>
<form action="?/apply" method="POST" class="mt-10 flex flex-col items-center justify-center">
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

		<!----------------------------Skills------------------------------------------------>
		<h1 class="pt-10 text-center text-lg font-bold lg:text-2xl">Skills</h1>
		{#each Object.entries(formData.skills) as [key, skill]}
			<div class="form-control mb-4 w-full max-w-md">
				<label for={key} class="label pb-1 font-medium">
					<span class="label-text">Skill</span>
				</label>
				<input
					id={key}
					type="text"
					name={key}
					class="input input-bordered w-full max-w-md"
					bind:value={formData.skills[key]}
				/>
			</div>
		{/each}
		<button onclick={addSkill} type="button" class="btn btn-primary">Add Skill</button>

		<!------------------------Work Experience------------------------------------>
		<h1 class="pt-10 text-center text-lg font-bold lg:text-2xl">Work Experience</h1>
		{#each Object.keys(formData.workExperience) as key, index}
			{#if key.includes(`${index}`)}
				<div class="form-control mb-4 w-full max-w-md">
					<label for={key} class="label pb-1 font-medium">
						<span class="label-text"
							>{key
								.split('-')[1]
								.replace('title', 'Job Title')
								.replace('company', 'Company Name')
								.replace('dates', 'Employment Dates')
								.replace('responsibilities', 'Job Responsibilities')}</span
						>
					</label>
					<input
						id={key}
						type="text"
						name={key}
						class="input input-bordered w-full max-w-md"
						bind:value={formData.workExperience[key]}
					/>
				</div>
			{/if}
		{/each}
		<button onclick={addWorkExperience} type="button" class="btn btn-primary"
			>Add Work Experience</button
		>

		<!------------------------Certifications--------------------->
		<h1 class="pt-10 text-center text-lg font-bold lg:text-2xl">Certifications</h1>
		{#each Object.keys(formData.certifications) as key, index}
			{#if key.includes(`${index}`)}
				<div class="form-control mb-4 w-full max-w-md">
					<label for={key} class="label pb-1 font-medium">
						<span class="label-text"
							>{key
								.split('-')[1]
								.replace('name', 'Certification Name')
								.replace('org', 'Issuing Organization')
								.replace('date', 'Issue Date')}</span
						>
					</label>
					<input
						id={key}
						type="text"
						name={key}
						class="input input-bordered w-full max-w-md"
						bind:value={formData.certifications[key]}
					/>
				</div>
			{/if}
		{/each}
		<button onclick={addCertification} type="button" class="btn btn-primary"
			>Add Certification</button
		>
	</div>

	<div class="w-full max-w-xs pt-4">
		<button type="submit" class="btn btn-primary w-full">Login</button>
	</div>
</form>
