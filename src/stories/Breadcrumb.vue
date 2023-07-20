<template>
  <ul class="breadcrumb">
    <li v-for="(item, key) in itens" :key="key"><a :href="item.link">{{item.name}}</a></li>
  </ul>
</template>

<script>
import './breadcrumb.css'
import { reactive } from 'vue';

export default {
  name: 'my-breadcrumb',

  props: {
    itens: {
      type: Array,
      required: true,
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      onClick() {
        emit('click');
      },
    };
  },
};
</script>
