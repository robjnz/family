<template>
  <Layout>
    <section class="px-32 py-14 overflow-auto">
      <div id="background" class="container m-auto">
        <h1 class="ml-8 mt-3 sub-title">
          <g-image
            class="h-10 w-12 inline-block"
            src="https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1608290955/bermuda-flag_rgvbdd.png"
            alt="image of burmuda flag"
          />
          Bermuda Family History Resourses
        </h1>

        <div class="grid sm:flex">
          <bermuda />
          <nationalbermuda />
          <bermudaState />
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
import bermuda from "@/components/Caribbean/General/bermuda";
import nationalbermuda from "@/components/Caribbean/General/nationalbermuda";
import bermudaState from "@/components/Caribbean/General/bermudaState";

import dropdown from "@/components/Dropdown/dropdown";

export default {
  metaInfo: {
    title: "Bermuda",
    meta: [
      {
        name: "description",
        content:
          "Bermuda Family history where to find records of birth death and marriages",
      },
    ],
  },
  components: {
    bermuda,
    nationalbermuda,
    bermudaState,
    dropdown,
  },
};
</script>
