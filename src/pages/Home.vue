<template>
  <div class="home">
    <!-- TODO -->

    <MySection icon="default" :title="$t('section.default')"></MySection>
    <MySection icon="education" :title="$t('section.education')"></MySection>
    <MySection icon="logos" :title="$t('section.logos')"></MySection>
    <MySection icon="projects" :title="$t('section.projects')"></MySection>
    <MySection icon="softwares" :title="$t('section.softwares')">
      <ul>
        <!-- http://agped.com.br/#/ -->
        <!-- https://app.teamslux.com/#/ -->
        <li class="agped">AGPeD <em>BR 51 2018 001387-2</em></li>
        <li class="teams">TEAMS <em>BR 51 2019 000559-7</em></li>
        <li class="tit">Teach in Touch <em>BR 51 2019 000910-0</em></li>
      </ul>
    </MySection>
    <MySection icon="where" :title="$t('section.where')"></MySection>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// @ is an alias to /src
import { MySection } from '@/components'

export default {
  name: 'Home',

  components: {
    MySection
  },

  computed: {
    ...mapGetters('model', {
      model: 'getData'
    })
  }
}
</script>

<style lang="postcss" scoped>
@import '../styles/pages/home.css';
</style>
