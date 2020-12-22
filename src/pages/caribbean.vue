<template>
  <Layout>
    <section class="px-32 py-14 overflow-auto">
      <div id="background" class="container m-auto">
        <h1 class="ml-8 mt-3 sub-title">
          Caribbean Family History Resourses
        </h1>

        <br />

        <div class="grid sm:flex">
          <barbados />
          <bermuda />
        </div>

        <br />
      </div>
    </section>
  </Layout>
</template>

<script>
import barbados from "@/components/Caribbean/barbados";
import bermuda from "@/components/Caribbean/bermuda";


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
    bermuda,

    dropdown,
  },
};
</script>
