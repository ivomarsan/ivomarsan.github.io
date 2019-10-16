<template>
  <nav>
    <div class="menu" @click="toggle = !toggle">
      <span class="hamburguer" :class="toggle ? 'on' : 'off'"></span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',

  data() {
    return {
      toggle: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
.menu {
  background: var(--menu-bg);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  box-shadow: 0 0 0 0 #ff0, 0 0 0 0 #ff0;
  transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    box-shadow: 0 0 0 8px #ff0, 0 0 0 8px #ff0;
  }
}

.hamburguer {
  --menu-color: #000;

  position: relative;
  display: block;
  background: var(--menu-color);
  width: 30px;
  height: 2px;
  top: 29px;
  left: 15px;
  transition: 0.5s ease-in-out;

  &::before,
  &::after {
    background: var(--menu-color);
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
  }

  &::before {
    top: -10px;
  }

  &::after {
    bottom: -10px;
  }
}

.hamburguer.on {
  --menu-color: crimson;

  transform: rotate(45deg);
  background-color: var(--menu-color);

  &::before,
  &::after {
    transform: rotate(90deg);
    background-color: var(--menu-color);
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
}

/* .hamburguer.off {
  --menu-color: var(--purple);
} */
</style>
