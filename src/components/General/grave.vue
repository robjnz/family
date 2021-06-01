<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <h1 class="text-2xl text-white">
        Find A Grave
      </h1>

      <g-image
        class="h-32 w-full object-fill"
        src="@/images/europe/graves.jpg"
        alt="image of a cemetery "
      />
      <br />
      <p>Searchable cemetery <br />records around the world.</p>
      <br />

        <g-link
        class="text-white hover:text-yellow-500"
        to="/blog/how-to-find-where-a-jewish-person-is-buried-in-london-uk/"
        target="_blank"
      >
        Read Article
      </g-link>
      <br />
      <g-link
        class="text-white hover:text-yellow-500"
        to="http://bit.ly/2I5p6M2"
      >
        Open Website
      </g-link>

    </div>
  </div>
</template>
