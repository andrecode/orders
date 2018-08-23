<template>
  <span>
    <div class="form-group">
      <label for="edit-source">
          Место отправления
      </label>
      <input v-model="theOrder.source"
             class="form-control"
             id="edit-source"
             required/>
    </div>
    <div class="form-group">
      <label for="edit-destination">
          Место назначения
      </label>
      <textarea v-model="theOrder.destination"
                id="edit-destination"
                class="form-control"
                rows="3"
                required>

      </textarea>
    </div>
    <div class="form-group">
        <label for="edit-create-date">Дата заявки</label>
        <masked-input
                id="edit-create-date"
                class="form-control"
                v-model="theOrder.create_date"
                placeholder="dd.mm.yyyy"
                mask="11.11.1111"
        >
        </masked-input>

    </div>
  </span>
</template>

<script>
    import maskedInput from 'vue-masked-input'
    import moment from 'moment'

    export default {
        name: 'OrderForm',
        props: ['theOrder'],
        components: {maskedInput},
        data() {
            return {}
        },
    }
</script>


