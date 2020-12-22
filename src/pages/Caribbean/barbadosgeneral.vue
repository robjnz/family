<template>
  <Layout>
    <section class="px-32 py-14 overflow-auto">
      <div id="background" class="container m-auto">
        <h1 class="ml-8 mt-3 sub-title">
          <g-image
            class="h-10 w-12 inline-block"
            src="https://res.cloudinary.com/dzhbfdfa5/image/upload/v1608289948/barbados-flag_mngc34.png"
            alt="image of barbados flag"
          />
          Barbados Family History Resourses
        </h1>

        <div class="grid sm:flex">
          <barb />
          <bfh />
          <barbState />
        </div>

        <br />
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
      </div>
    </section>
  </Layout>
</template>

<script>
import barb from "@/components/Caribbean/General/barb";
import barbState from "@/components/Caribbean/General/barbState";
import bfh from "@/components/Caribbean/General/bfh";

import dropdown from "@/components/Dropdown/dropdown";

export default {
  metaInfo: {
    title: "Barbados",
    meta: [
      {
        name: "description",
        content:
          "Barbados Family history where to find records of birth death and marriages",
      },
    ],
  },
  components: {
    barb,
    barbState,
    bfh,

    dropdown,
  },
};
</script>
