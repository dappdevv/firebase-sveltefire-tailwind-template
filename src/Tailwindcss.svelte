<style global>
  @tailwind base;
  @tailwind components;

  /* Navbar styles */

  .header-menu-icon {
    @apply h-12 w-12 fill-current text-pal-beach-blue cursor-pointer;
  }

  .menu-container {
    @apply p-2 w-full h-screen bg-gray-900 text-pal-beach-blue text-center;
  }

  .menu-list li {
    @apply py-2 text-lg;
  }
  .menu-list li:hover {
    @apply bg-gray-800;
  }

  /* Home page styles */

  .colordiv {
    @apply w-full h-56 p-2 m-2 rounded-lg shadow-lg;
  }

  .colordiv:hover {
      @apply opacity-75;
  }

  /* Responsive styles */

  h1 {
    @apply text-white text-xl;
  }

  .main-container {
    @apply max-w-full;
  }

  .colordiv-container {
    @apply flex flex-row flex-wrap;
  }

  .colordiv p {
    @apply p-2 font-semibold bg-white rounded-lg text-pal-beach-blue;
  }

  @screen mob {
    .colordiv-container {
      @apply flex flex-row flex-wrap justify-around;
    }
    .colordiv {
      @apply w-5/12;
    }
    .colordiv p {
      @apply text-pal-beach-yellow;
    }
  }

  @screen tab {
    .colordiv-container {
      @apply flex flex-row flex-wrap justify-center;
    }
    .colordiv {
      @apply w-72 h-56;
    }
    .colordiv p {
      @apply text-pal-beach-orange;
    }
  }

  @screen lg {
    .menu-container {
      @apply w-1/4 absolute mt-16 right-0;
    }
    .colordiv-container {
      @apply flex flex-row flex-wrap justify-start;
    }
    .colordiv {
      @apply w-72 h-56;
    }
    .colordiv p {
      @apply text-pal-beach-purple;
    }
  }

  @tailwind utilities;
</style>