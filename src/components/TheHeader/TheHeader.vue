<template>
  <nav class="bg-teal-500 flex items-center justify-between flex-wrap p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <g-link to="/" aria-label="back to home"
        ><g-image
          class="w-12"
          src="@/images/logotreerobin.svg"
          alt="logo family tree"
      /></g-link>
      <span class="font-semibold text-2xl tracking-tight"
        ><g-link class="text-white hover:text-purple-900" to="/"
          >Family History</g-link
        >
      </span>
    </div>
    <div aria-label="menu" class="block lg:hidden">
      <button
        @click="isOpen = !isOpen"
        type="button"
        class="block text-teal-100 hover:text-white focus:text-white focus:outline-none"
      >
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path
            v-if="isOpen"
            fill-rule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
          <path
            v-if="!isOpen"
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>
    </div>

    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-lg lg:flex-grow"></div>

      <div>
        <g-link
          to="/"
          class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-purple-900 text-xl font-semibold"
        >
          Home
        </g-link>
        <g-link
          to="/general"
          class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-purple-900 text-xl font-semibold"
        >
          General
        </g-link>

        <g-link
          to="/australasia"
          class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-purple-900 text-xl font-semibold"
        >
          Australasia
        </g-link>

        <g-link
          to="/caribbean"
          class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-purple-900 text-xl font-semibold"
        >
          Caribbean
        </g-link>

        <g-link
          to="/europe"
          class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-purple-900 text-xl font-semibold"
        >
          Europe
        </g-link>

        <g-link
          to="/northamerica"
          class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-purple-900 text-xl font-semibold"
        >
          North America
        </g-link>
        <g-link
          to="/shoah"
          class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-purple-900 text-xl font-semibold"
        >
          Shoah
        </g-link>
      </div>

      <g-link
        to="/blog"
        class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-purple-900 text-xl font-semibold"
      >
        Blog
      </g-link>

      <g-link
        to="/video"
        class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-purple-900 text-xl font-semibold"
      >
        Video
      </g-link>

      <g-link
        to="/contact"
        class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-purple-900 text-xl font-semibold"
      >
        Contact
      </g-link>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
<style scoped></style>
