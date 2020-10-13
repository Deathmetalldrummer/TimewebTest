<template lang="pug">
div
  PageHeader(title="Страницы:" actionAddText="Добавить страницу")
  .ml-4(v-if="!pages.length") Empty
  v-card(tile v-else)
    v-list
      v-list-item-group(color='dark')
        v-list-item(v-for='(item, i) in pages' :key='i' :to="{name: 'PageGenerator', params: {id: item.id}}")
          v-list-item-icon
            v-icon mdi-home
          v-list-item-content
            v-list-item-title {{item.title}}
          v-list-item-action
            v-btn(icon)
              v-icon(color='grey') mdi-pencil
          v-list-item-action
            v-btn(icon @click="remove($event, item.id)")
              v-icon(color='grey') mdi-delete
</template>

<script>
import PageHeader from '@/components/PageHeader'
export default {
  name: 'PageList',
  components: {
    PageHeader
  },
  data () {
    return {
      message: 'Слава Одину, PageList работает!',
      pages: [
        { title: 'Page #1', id: 1 },
        { title: 'Page #2', id: 2 },
        { title: 'Page #3', id: 4 },
        { title: 'Page #4', id: 5 },
        { title: 'Page #5', id: 6 },
        { title: 'Page #6', id: 3 }
      ]
    }
  },
  computed: {
    id () { return this.$route.params.id }
  },
  methods: {
    handleItem ({ id, name }) {
      this.$router.push({ name: 'page', params: { id } })
    },
    remove ($event, id) {
      $event.preventDefault()
      confirm('Remove? ' + id)
    }
  }
}
</script>

<style scoped lang='sass'>
.pageList
  display: flex
  flex-flow: row wrap
  justify-content: flex-start
  align-items: center
  &__
    width: 25%
    padding: 1em
</style>
