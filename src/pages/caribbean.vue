<template>
  <Layout>
    <section class="px-32 py-14 overflow-auto">
      <div id="background" class="container m-auto">
        <h1 class="ml-8 mt-3 sub-title">
          Caribbean Family History Resourses
        </h1>

        <br />

        <h2 class="ml-8 mt-3 sub-title">
          <g-image
            class="h-10 w-12 inline-block"
            src="https://res.cloudinary.com/dzhbfdfa5/image/upload/v1608289948/barbados-flag_mngc34.png"
            alt="image of Barbados flag"
          />
          Barbados
        </h2>

        <div class="grid sm:flex">
          <barbadosState />
          <barbados />
          <bfh />
        </div>

        <br />
        <div class="border-b-4 border-gray-200"></div>
        <br />

        <h2 class="ml-8 mt-3 sub-title">
          <g-image
            class="h-10 w-12 inline-block"
            src="https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1608290955/bermuda-flag_rgvbdd.png"
            alt="image of Bermuda flag"
          />
          Bermuda
        </h2>

        <div class="grid sm:flex">
          <bermuda />
        </div>

        <dropdown />

        <br />
        <p>
          Add
          <g-link
            class="text-red-600 hover:text-yellow-600"
            to="http://bit.ly/2PeNSLm"
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
import barbados from "@/components/Caribbean/General/barbados";
import bfh from "@/components/Caribbean/General/bfh";
import bermuda from "@/components/Caribbean/General/bermuda";
import barbadosState from "@/components/Caribbean/General/barbadosState";

import dropdown from "@/components/Dropdown/dropdown";

export default {
  metaInfo: {
    title: "Caribbean",
    meta: [
      {
        name: "description",
        content:
          "Caribbean family history where to find records of birth death and marriages",
      },
    ],
  },
  components: {
    barbados,
    bfh,
    bermuda,
    barbadosState,

    dropdown,
  },
};
</script>
