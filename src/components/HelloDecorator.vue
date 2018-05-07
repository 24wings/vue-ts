<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Http } from "../service/http";
@Component
export default class HelloDecorator extends Vue {
  @Prop() name: string;
  @Prop() initialEnthusiasm;

  enthusiasm = this.initialEnthusiasm;

  increment() {
    this.enthusiasm++;
  }
  decrement() {
    if (this.enthusiasm > 1) {
      this.enthusiasm--;
    }
  }

  get exclamationMarks(): string {
    return Array(this.enthusiasm + 1).join("!");
  }
  async beforeCreate() {
    let http = new Http();
    let data = await http.Get("/data.json");
    console.log(data);
  }
}
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>
