<template lang="pug">
  div
    h1 Vue
    router-link(tag='a' :to="{name: 'projects'}") To site list
</template>

<script>

export default {
  name: 'Home'
}
</script>
