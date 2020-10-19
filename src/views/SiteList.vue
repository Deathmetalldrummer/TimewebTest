<template lang="pug">
div
  PageHeader(title="My sites:"
             actionAddText="Create site"
             @add="dialogCreate = true"
             @back="$router.push('/')")
  .pageSiteList__sites
    .siteList.ml-4(v-if="!cards.length") Empty
    .siteList(v-else)
      .siteList__(v-for="(card, index) in cards")
        v-card(:to="{name: 'project', params: {projectID: card.id}}").card
          v-img.white--text.align-end(:src="'https://picsum.photos/200/300?random=' + index"
            gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.6)"
            height="200px")
            v-card-title(v-text="card.title")
          v-card-actions
            v-btn(text @click.prevent="openEdit(card)")
              v-icon(small) mdi-pencil
              span.ml-1 Edit
            v-spacer
            v-btn(text @click.prevent="openDelete(card)")
              v-icon(small) mdi-delete
              span.ml-1 Delete
  Modal(title="Create site" :model="dialogCreate" @submit="submitCreate($event)")
    br
    v-text-field(label="Name" outlined v-model="valueCreate" )
  Modal(title="Update site" :model="dialogEdit" @submit="submitEdit($event)")
    br
    v-text-field(label="Name" outlined v-model="valueEdit && valueEdit.title" )
  Modal(title="Delete site" :model="dialogDelete" @submit="submitDelete($event)")
    p Delete this site "{{valueDelete && valueDelete.title}}"?
</template>

<script>
import PageHeader from '@/components/PageHeader'
import Modal from '@/components/Modal'

export default {
  name: 'SiteList',
  components: {
    PageHeader,
    Modal
  },
  data () {
    return {
      message: 'Слава Одину, SiteList работает!',
      dialogCreate: false,
      dialogEdit: false,
      dialogDelete: false,
      valueCreate: null,
      valueEdit: null,
      valueDelete: null
    }
  },
  computed: {
    cards () { return this.$store.getters.sites || [] }
  },
  methods: {
    openEdit (card) {
      this.dialogEdit = true
      this.valueEdit = { ...card }
    },
    openDelete (card) {
      this.dialogDelete = true
      this.valueDelete = card
    },
    submitCreate (value) {
      if (value) {
        this.$store.dispatch('siteCreate', {
          title: this.valueCreate
        })
      }
      this.valueCreate = null
      this.dialogCreate = false
    },
    submitEdit (value) {
      if (value) {
        this.$store.dispatch('sitesUpdate', this.valueEdit)
        this.valueEdit = null
      }
      this.dialogEdit = false
    },
    submitDelete (value) {
      if (value) {
        this.$store.dispatch('siteDelete', this.valueDelete.id)
      }
      this.dialogDelete = false
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
.card
  position: relative
.card__topBar
  position: absolute
  top: 0
</style>
