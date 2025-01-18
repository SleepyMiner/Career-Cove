<script lang="ts">
	import '../app.css';
	import { theme } from '$lib/states/theme.svelte.js';
	import Theme from '$lib/states/theme.svelte';
	import { getImageURL } from '$lib/utils.ts';
	import { filterStates } from '$lib/states/filter.svelte.ts';
	import { Ellipsis } from 'lucide-svelte';

	let themeVal: string | null = $derived(theme.getTheme());
	let { children, data } = $props();
</script>

<div data-theme={themeVal} class="min-h-screen">
	<div class="navbar bg-base-100">
		<div class="flex-1">
			<a class="btn btn-ghost text-lg lg:text-xl" href="/">Carrer Cove</a>
		</div>

		<div class="flex-none gap-2">
			<input
				type="text"
				placeholder="Search"
				name="imageTitle"
				class="input input-bordered w-36 max-w-xs rounded-full lg:w-full"
				oninput={(e: Event) => filterStates.setSearchQuery((e.target as HTMLInputElement).value)}
			/>

			{#if !data.user}
				<div class="hidden gap-2 lg:flex">
					<a href="/register" class="btn btn-primary">Register</a>
					<a href="/login" class="btn btn-secondary">Login</a>
				</div>
				<div class="dropdown dropdown-end lg:hidden">
					<div tabindex="0" role="button" class="btn btn-ghost">
						<div class="w-6">
							<Ellipsis />
						</div>
					</div>
					<ul
						class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
					>
						<li>
							<a href="/login" class="justify-between">Login</a>
						</li>
						<li><a href="/register">Register</a></li>
					</ul>
				</div>
			{:else}
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-circle btn-ghost">
						<div class="w-8 lg:w-10">
							<div class="flex justify-center rounded-full">
								<img
									src={data.user?.avatar
										? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
										: `https://ui-avatars.com/api/?name=${data.user?.name}`}
									alt="Profile"
									class="rounded-full"
								/>
							</div>
						</div>
					</div>
					<ul
						class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
					>
						<li><a href="/profile">Profile</a></li>
						<li><a href="/appliedJobs">Applied Jobs</a></li>
						<li>
							<form action="/logout" method="post">
								<button type="submit"> Logout </button>
							</form>
						</li>
					</ul>
				</div>
			{/if}
			<Theme />
		</div>
	</div>

	{@render children()}
	<footer class="footer footer-center mt-36 bg-base-300 p-4 text-base-content">
		<aside>
			<p>
				Copyright © {new Date().getFullYear()} - All right reserved by Career Cove @SleepyMiner
			</p>
		</aside>
	</footer>
</div>
