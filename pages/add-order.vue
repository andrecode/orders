<template>
    <section>
        <h2>Новый заказ</h2>
        <form v-on:submit.prevent="createOrder">
            <order-form :the-order="order"></order-form>
            <button type="submit"
                    class="btn btn-primary">
                Создать
            </button>
            <nuxt-link to="/"
                       class="btn btn-default">
                Отмена
            </nuxt-link>
        </form>
    </section>
</template>

<script>
    import OrderForm from '../components/order-form.vue'

    export default {
        components: {OrderForm},
        layout: 'vue-crud',
        data() {
            return {order: {id: null, key: null, source: '', destination: '', create_date: ''}}
        },
        methods: {
            createOrder(e) {
                this.$store.commit('ADD_ORDER', this.order);
                this.$router.push('/')
            }
        }
    }
</script>

