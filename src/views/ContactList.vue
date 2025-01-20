<template>
  <div class="contact-list">
    <BreadCrumb :links="['Contacts']" />
    <h1>Contact List</h1>
    <div class="contacts-grid">
      <div v-for="contact in contacts" :key="contact.id" class="contact-card">
        <h3>{{ contact.firstName }} {{ contact.lastName }}</h3>
        <p>{{ contact.email }}</p>
        <button @click="editContact(contact.id)">Edit</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import BreadCrumb from '@/components/Breadcrumb.vue'
import { fetchContacts, Contact } from '@/services/api'

export default defineComponent({
  components: { BreadCrumb },
  setup() {
    const contacts = ref<Contact[]>([])
    const router = useRouter()

    const editContact = (id: string) => {
      router.push({ name: 'ContactDetail', params: { id } })
    }

    onMounted(async () => {
      try {
        contacts.value = await fetchContacts()
      } catch (error) {
        console.log('failed', error)
      }
    })

    return { contacts, editContact }
  },
})
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
