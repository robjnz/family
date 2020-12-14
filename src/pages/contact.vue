<template>
  <Layout>
    <section class="container m-auto text-4xl text-blue-300">
    <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
      <br />
      <form action="https://usebasin.com/f/d3817e926c9d" method="POST">
        <p>
          <label
            >Name: <input class="text-black" type="text" name="name"
          /></label>
        </p>
        <br />
        <p>
          <label
            >Email: <input class="text-black" type="email" name="email"
          /></label>
        </p>
        <br />
        <p>
          <label
            >Message: <textarea class="text-black" name="message"></textarea
          ></label>
        </p>
        <br />
        <p>
          <input type="hidden" name="workmailaddress" value="" />
        </p>
        <p>
          <button class="text-purple-900 hover:text-white" type="submit">
            Send
          </button>
        </p>
      </form>
      <br /><br />
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "contact",
    meta: [
      {
        name: "description",
        content: "contact me",
      },
    ],
  },
};
</script>
