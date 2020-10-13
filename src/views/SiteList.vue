<template lang="pug">
div
  PageHeader(title="Мои сайты:" actionAddText="Создать сайт")
  .pageSiteList__sites
    .siteList.ml-4(v-if="!cards.length") Empty
    .siteList(v-else)
      .siteList__(v-for="(card, index) in cards")
        v-card(:to="{name: 'project', params: {id: card.id}}")
          v-img.white--text.align-end(:src='"https://picsum.photos/200/300?random=" + index'
            gradient='to bottom, rgba(0,0,0,.2), rgba(0,0,0,.6)'
            height='200px')
            v-app-bar(flat color='rgba(0, 0, 0, 0)').mb-16
              v-spacer
              v-btn(color='white' icon @click="remove($event, card.id)")
                v-icon mdi-delete
            v-card-title(v-text='card.title').pt-7
          v-card-actions
            v-btn(text :to="{name: 'PageGenerator', params: {id: card.id}}")
              v-icon(small) mdi-pencil
              span.ml-1 Edit
            v-spacer
            v-btn(text :to="{name: 'PageGenerator', params: {id: card.id}}")
              v-icon(small) mdi-open-in-new
              span.ml-1 Link
</template>

<script>
import PageHeader from '@/components/PageHeader'
export default {
  name: 'SiteList',
  components: {
    PageHeader
  },
  data () {
    return {
      message: 'Слава Одину, SiteList работает!',
      cards: [
        { title: 'Site #1', id: 1 },
        { title: 'Site #2', id: 2 },
        { title: 'Site #3', id: 4 },
        { title: 'Site #4', id: 5 },
        { title: 'Site #5', id: 6 },
        { title: 'Site #6', id: 3 }
      ]
    }
  },
  methods: {
    handleItem ({ id, name }) {
      this.$router.push({ name: 'project', params: { id } })
    },
    remove ($event, id) {
      $event.preventDefault()
      confirm('Remove?')
    }
  }
}
</script>

<style scoped lang='sass'>
@import "../assets/sass/variable"
@import "../assets/sass/mixin"
.pageSiteList__header
  display: flex
  justify-content: space-between
  align-items: center
.siteList
  display: flex
  flex-flow: row wrap
  justify-content: flex-start
  align-items: center
  &__
    padding: 1em
    +_mr($xs)
      width: 100%
    +_mr_($xs, $sm)
      width: (100%/3)
    +mr_($sm)
      width: 25%
</style>
