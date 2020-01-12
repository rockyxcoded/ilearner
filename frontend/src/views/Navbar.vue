<template>
  <nav class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
    <div class="flex-1 flex justify-between items-center">
      <a
        href="/"
        class="font-bold"
      >
        iLearner
      </a>
    </div>

    <label
      for="menu-toggle"
      class="pointer-cursor lg:hidden block"
    ><svg
        class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg></label>
    <input
      class="hidden"
      type="checkbox"
      id="menu-toggle"
    />

    <div
      class="hidden lg:flex lg:items-center lg:w-auto w-full"
      id="menu"
    >
      <nav>
        <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
          <li><a
              class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
              href="/login"
            >Login</a></li>
          <li>
            <router-link
              to="/register"
              class="px-3 py-1 bg-blue-600 text-white rounded inline-block font-semibold"
            >Register </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    const menuTarget = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("[data-menu]");

    menuTarget.addEventListener("click", event => {
      event.preventDefault();
      menuTarget.lastElementChild.classList.toggle("text-brand");
      menu.classList.toggle("hidden");
    });
  }
};
</script>
