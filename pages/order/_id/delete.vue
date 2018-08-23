<template>
    <section>
        <h2>Удалить заказ №{{ order.id }}</h2>
        <form v-on:submit.prevent="deleteOrder">
            <p>Внимание! Это действие не обратимо.</p>
            <button type="submit" class="btn btn-danger">Удалить</button>
            <nuxt-link to="/" class="btn btn-default">Отмена</nuxt-link>
        </form>
    </section>
</template>

<script>

    export default {
        layout: 'vue-crud',
        data() {
            return {order: this.$store.state.orders.find(order => order.id === this.$route.params.id)};
        },
        methods: {
            deleteOrder(e) {
                this.$store.commit('DELETE_ORDER', this.order);
                this.$router.push('/');
            }
        }
    }
</script>
