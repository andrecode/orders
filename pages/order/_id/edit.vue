<template>
  <section>
    <h2>Редактировать заказ</h2>
    <form v-on:submit.prevent="updateOrder">
      <order-form :the-order="order"></order-form>
      <button type="submit" class="btn btn-primary">Сохранить</button>
      <nuxt-link to="/" class="btn btn-default">Отмена</nuxt-link>
    </form>
  </section>
</template>

<script>
 import OrderForm from '../../../components/order-form.vue'

export default {
  components: { OrderForm },
  layout: 'vue-crud',
  data () {
    return {order: JSON.parse(JSON.stringify(this.$store.state.orders.find(order => order.id === this.$route.params.id)))};
  },
  methods: {
    updateOrder (e) {
      this.$store.commit('UPDATE_ORDER', this.order);
      this.$router.push('/')
    }
  }
}
</script>

