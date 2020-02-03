<script>
    import { fade, fly } from 'svelte/transition';
    let isOpen = false;
</script>

<div class="header fixed z-10 h-16 top-0 w-full bg-gray-900">
    <div class="header-menu absolute top-0 right-0 p-2 text-center">
        {#if !isOpen}
        <svg on:click={ () => isOpen = true }
            class="header-menu-icon"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
        {:else}
        <svg on:click={ () => isOpen = false }
            class="header-menu-icon"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        {/if}
    </div>
    {#if isOpen}
    <div transition:fade="{{ duration: 200 }}" class="menu-container">
        <ul class="menu-list mt-20" on:click={ () => isOpen = false }>
            <li><a href="#/">Home</a></li>
            <li><a href="#/about">About</a></li>
            <li><a href="#/">Page</a></li>
            <li><a href="#/">Login</a></li>
        </ul>
    </div>
    {/if}
</div>