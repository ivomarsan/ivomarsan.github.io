<template>
  <nav>
    <div class="menu" :class="toggle ? 'on' : 'off'" @click="toggle = !toggle">
      <span class="hamburguer" :class="toggle ? 'on' : 'off'"></span>
    </div>

    <ul :class="toggle ? 'on' : 'off'">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Work</a>
      </li>
    </ul>
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
  background: var(--white);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  box-shadow: 0 0 0 0 var(--menu-bg), 0 0 0 0 var(--menu-bg);
  transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    box-shadow: 0 0 0 8px var(--menu-bg), 0 0 0 8px var(--menu-bg);
  }
}
.menu.on {
  box-shadow: 0 0 0 130vw var(--menu-bg), 0 0 0 130vh var(--menu-bg);
}

.hamburguer {
  --menu-color: #000;
  --transition-time: 300ms;

  position: relative;
  display: block;
  background: var(--menu-color);
  width: 30px;
  height: 2px;
  top: 29px;
  left: 15px;
  transition: var(--transition-time) ease-in-out;

  &::before,
  &::after {
    background: var(--menu-color);
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: var(--transition-time) ease-in-out;
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

/* animação e estilo do menu */
ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  font-size: 45px;
  opacity: 0;
  transition: 0.25s 0.1s cubic-bezier(0, 1.07, 0, 1.02);
  z-index: 2;

  &.on {
    opacity: 1;
  }
}

a {
  color: #00cec9;
  display: block;
  margin-bottom: 1em;
  text-decoration: none;
}
</style>
