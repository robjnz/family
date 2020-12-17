<template>
  <Layout>
    <section class="px-32 py-14 overflow-auto">
      <div id="background" class="container m-auto">
        <h1 class="ml-8 mt-3 sub-title">
          <g-image
            class="h-10 w-12 inline-block"
            src="@/images/europe/american-flag.jpg"
            alt="image of american flag"
          />
          USA Jewish Family History Resourses
        </h1>

        <br />

        <h2 class="ml-8 mt-3 sub-title">
          <g-image
            class="h-10 w-12 inline-block"
            src="@/images/europe/newyork.jpg"
            alt="image of new york flag"
          />
          New York
        </h2>

        <div class="grid sm:flex">
          <society />
        </div>

        <h2 class="ml-8 mt-6 mb-8 sub-title">
          <g-image
            class="h-10 w-12 inline-block"
            src="@/images/europe/newyork.jpg"
            alt="image of new york flag"
          />
          Jewish Cemeteries New York
        </h2>

        <cemNy />
      </div>
      <p>
        <dropdown />
      </p>
      <br />
      <p>
        Add
        <g-link
          class="text-red-600 hover:text-yellow-600"
          to="http://bit.ly/2SxWdgt"
          target="_blank"
        >
          google translate
        </g-link>
        to your browser extensions, to view foreign language web sites.
      </p>

      <br />
    </section>
  </Layout>
</template>

<script>
import society from "@/components/America/Jewish/society";
import cemNy from "@/components/America/Jewish/cemNy";

import dropdown from "@/components/Dropdown/dropdown";

export default {
  metaInfo: {
    title: "USA Jewish",
    meta: [
      {
        name: "description",
        content:
          "USA jewish family history where to find records of birth death and marriages",
      },
    ],
  },
  components: {
    society,
    cemNy,
    dropdown,
  },
};
</script>
