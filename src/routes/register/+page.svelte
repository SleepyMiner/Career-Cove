<svelte:head>
	<title>Register - Career Cove</title>
</svelte:head>

<div class="flex h-full w-full flex-col items-center">
	<h2 class="text-base-content mt-2 text-center text-3xl font-bold tracking-tight">
		Register for an account
	</h2>
	<p class="mt-1 text-center">
		Or <a href="/login" class="text-primary font-medium hover:cursor-pointer hover:underline"
			>sign in</a
		> if you already have an account.
	</p>
	<form action="?/register" method="POST" class="flex w-full flex-col items-center space-y-2 pt-4">
		<div class="form-control w-full max-w-md">
			<label for="name" class="label pb-1 font-medium">
				<span class="label-text">Name</span>
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
			<label for="password" class="label pb-1 font-medium">
				<span class="label-text">Password</span>
			</label>
			<input type="password" name="password" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="form-control w-full max-w-md">
			<label for="passwordConfirm" class="label pb-1 font-medium">
				<span class="label-text">Confirm Password</span>
			</label>
			<input type="password" name="passwordConfirm" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="w-full max-w-md pt-2">
			<button type="submit" class="btn btn-primary w-full">Register</button>
		</div>
	</form>
</div>
