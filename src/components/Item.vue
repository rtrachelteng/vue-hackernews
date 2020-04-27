<template>
  <li>
    <a :href='item.url'>{{ item.title }}</a>{{ item.url }} {{ item.by }} {{ item.score }}
  </li>
</template>

<script>
export default {
  props: ['item']
}
</script>
