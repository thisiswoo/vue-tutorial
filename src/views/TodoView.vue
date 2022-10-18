<template>
  <div v-bind:class="nameClass">{{ name }}</div>
  <!-- <div class="name">{{ greet }}</div> -->
  <!-- <div>{{ greeting(name) }}</div> -->
  <!-- <div>{{ greeting("thisiswoo") }}</div> -->
  <input v-bind:type="type" v-bind:value="name" />
  <button class="btn btn-primary" v-on:click="updateName">click</button>
</template>

<script>
import { ref } from "vue";
// import { reactive } from "vue";

export default {
  // vue lifecycle의 가장 첫번째 setup() 함수
  // composition API
  setup() {
    const name = ref("thisiswoo");
    const type = ref("number");
    const nameClass = ref("name");
    // const type = ref("text");
    // const name = reactive({
    //   id: 1,
    // });

    // const greeting = (name) => {
    //   return "hello, " + name;
    // };

    const updateName = () => {
      // ref 사용할시 ref를 적어야 함.
      name.value = "thisiswoo~~~";
      type.value = "text";
      // reactive를 사용할 시 name에서 바로 접근 가능.
      //   name.id = 2;
      console.log(name);
    };

    // const greet = greeting(name);
    return {
      name,
      updateName,
      type,
      nameClass,
      //   greeting,
      //   greet,
    };
  },
};
</script>

<style>
.name {
  color: red;
}
</style>
