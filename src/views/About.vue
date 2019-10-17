<template>
  <div class="about">
    <p>{{ $d(new Date(), 'short') }}</p>
    <p>{{ $d(new Date(), 'long') }}</p>
    <p>{{ $tc('candy', model.count, { count: model.count }) }}</p>
    <h1>This is an about page</h1>
    <h2>i18n: {{ $t('about') }}</h2>

    <code>Route Params</code>
    <pre>{{ $route.params }}</pre>

    <label for="input-name">Input Name</label>
    <input
      id="input-name"
      v-model="model.name"
      type="text"
      name="Input Name"
      placeholder="What's your name?"
      @input="say(model.name)"
    />
    <button @click="model.count += 1">+1</button>
    <button @click="resetModel">Reset Model</button>
    <button @click="setModel(model)">Persist Model</button>
    <p>{{ $n(model.count, 'currency') }}</p>
    <p>{{ $n(model.count / 100, 'percent') }}</p>
    <pre>model: {{ model }}</pre>
  </div>
</template>

<script>
// This is a helper
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    // I mapped model/getModel getter to this.model
    ...mapGetters('model', {
      model: 'getData'
    })
  },

  methods: {
    ...mapActions('model', {
      setModel: 'setData',
      resetModel: 'resetData'
    }),

    async say(something) {
      const fn = async () => {
        // const resp = await this.$services.tiposEquipamento.findBySearch(filter);

        alert(something)
        // this.tiposEquipamento = resp._embedded.content;
        // this.page = resp.page;
      }

      this.$debounce(fn)
    }
  }
}
</script>

<style lang="postcss" scoped></style>
