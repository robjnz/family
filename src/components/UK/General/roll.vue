<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <h1 class="text-2xl text-white">
        Electoral Register
      </h1>

      <g-image
        class="h-32 w-full object-fill"
        src="@/images/europe/roll.jpg"
        alt="image of electorial roll"
      />

      <br />

      <iframe
        class="h-32 w-full object-fill"
        title="Electorial roll uk"
        src="https://www.youtube.com/embed/by1hNIjuKWM"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <br />
      <p>Current Electoral Register.</p>
      <br />

      <g-link
        class="text-white hover:text-yellow-500"
        to="/blog/how-to-find-a-person-on-the-electorial-register-in-the-uk/"
        target="_blank"
      >
        Read Article
      </g-link>
      <br />
      <g-link
        class="text-white hover:text-yellow-500"
        to="http://bit.ly/2FPDJAN"
      >
        Open Website
      </g-link>
    </div>
  </div>
</template>
