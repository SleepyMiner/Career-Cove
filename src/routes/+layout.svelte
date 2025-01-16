<script lang="ts">
	import '../app.css';
	import { theme } from '$lib/states/theme.svelte.js';
	import Theme from '$lib/states/theme.svelte';
	import Filter from '$lib/components/Filter.svelte';
	import { getImageURL } from '$lib/utils';
	import { Ellipsis } from 'lucide-svelte';

	let themeVal: string | null = $derived(theme.getTheme());
	let { children, data } = $props();
</script>

<div data-theme={themeVal}>
	<div class="navbar bg-base-100">
		<div class="hidden flex-1 lg:flex">
			<a class="btn btn-ghost text-xl" href="/">Carrer Cove</a>
		</div>

		<div class="flex-none gap-2">
			<input
				type="text"
				placeholder="Search"
				name="imageTitle"
				class="input input-bordered w-full max-w-xs rounded-full"
				oninput={(e: Event) => console.log((e.target as HTMLInputElement).value)}
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
						class="menu dropdown-content menu-sm rounded-box bg-base-100 z-[1] mt-3 w-52 p-2 shadow"
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
						<div class="w-10">
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
						class="menu dropdown-content menu-sm rounded-box bg-base-100 z-[1] mt-3 w-52 p-2 shadow"
					>
						<li><a href="/profile">Profile</a></li>
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
	<Filter />

	{@render children()}
</div>
