<template>
  <Layout>
    <section
      id="container-centre"
      class="column centre flex-1 px-32 py-14 overflow-auto"
    >
      <h1 class="page-title text-center">Blog</h1>

      <BlogPostList :posts="$page.posts.edges" />

      <dropdown />
    </section>
  </Layout>
</template>

<script>
import BlogPostList from "~/components/BlogPostList.vue";
import dropdown from "@/components/Dropdown/dropdown";


export default {
  metaInfo: {
    title: "Blog",
  },
  components: {
    BlogPostList,
    dropdown,
  },
};
</script>

<page-query>
query {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        date (format: "MMMM D, YYYY")
        excerpt
        path
        tags
        author
        cover_image
        flag
        religion
      }
    }
  }
}
</page-query>
