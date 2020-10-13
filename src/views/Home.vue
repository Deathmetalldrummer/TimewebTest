<template lang="pug">
  div
    h1 Vue
    router-link(tag='a' :to="{name: 'projects'}") К списку сайтов
</template>

<script>

export default {
  name: 'Home'
}
</script>
