<template lang="pug">
div
  PageHeader(title="Pages:"
          actionAddText="Add page"
          @add="dialogCreate = true"
          @back="$router.push('/projects')")
  .ml-4(v-if="!pages.length") Empty
  v-card(tile v-else)
    v-list
      v-list-item-group(color='dark')
        v-list-item(v-for='(item, i) in pages' :key='i' :to="{name: 'PageGenerator', params: {projectID, pageID: item.id}}")
          v-list-item-icon
            v-icon mdi-home
          v-list-item-content
            v-list-item-title {{item.title}}
          v-list-item-action
            v-btn(icon @click.prevent="openEdit(item)")
              v-icon(color='grey') mdi-pencil
          v-list-item-action
            v-btn(icon @click.prevent="openDelete(item)")
              v-icon(color='grey') mdi-delete
  Modal(title="Create page" :model="dialogCreate" @submit="submitCreate($event)")
    v-text-field(label='Name' outlined v-model="valueCreate" )
  Modal(title="Update page" :model="dialogEdit" @submit="submitEdit($event)")
    v-text-field(label='Name' outlined v-model="valueEdit && valueEdit.title" )
  Modal(title="Delete page" :model="dialogDelete" @submit="submitDelete($event)")
    p Delete this page "{{valueDelete && valueDelete.title}}"?
</template>

<script>
import PageHeader from '@/components/PageHeader'
import Modal from '@/components/Modal'

export default {
  name: 'PageList',
  components: {
    PageHeader,
    Modal
  },
  data () {
    return {
      message: 'Слава Одину, PageList работает!',
      dialogCreate: false,
      dialogEdit: false,
      dialogDelete: false,
      valueCreate: null,
      valueEdit: null,
      valueDelete: null,
      pages: [
        { title: 'Page #1', id: 1 }
      ]
    }
  },
  computed: {
    projectID () { return this.$route.params.projectID }
  },
  methods: {
    openEdit (page) {
      this.dialogEdit = true
      this.valueEdit = { ...page }
    },
    openDelete (page) {
      this.dialogDelete = true
      this.valueDelete = page
    },
    submitCreate (value) {
      if (value) {
        this.pages.push({
          title: this.valueCreate
        })
      }
      this.valueCreate = null
      this.dialogCreate = false
    },
    submitEdit (value) {
      if (value) {
        this.pages.map(item => {
          if (item.id === this.valueEdit.id) {
            item.title = this.valueEdit.title
          }
        })
        this.valueEdit = null
      }
      this.dialogEdit = false
    },
    submitDelete (value) {
      if (value) {
        this.pages = this.pages.filter(item => item.id !== this.valueDelete.id)
      }
      this.dialogDelete = false
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
