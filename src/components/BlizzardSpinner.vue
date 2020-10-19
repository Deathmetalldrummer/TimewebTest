<template lang="pug">
.spinner.spinner--bnet.spinner--size128
  .spinner__circle
</template>

<script>
export default {
  name: 'BlizzardSpinner'
}
</script>

<style scoped lang="scss">
/*
Spinner configuration
*/
$animation-duration: 700ms;
$sizes: 8, 16, 24, 32, 48, 64, 128;

body {
  background: #4a4a4a;
}

.spinner {

  position: relative;
  width: 32px;
  height: 32px;

  /*
    Themes
  */
  &.spinner--bnet {
    .spinner__circle,
    &::before,
    &::after {
      border-top-color: #04AFFF;
      border-left-color: #04AFFF;
  }
}

  &.spinner--wow {
  .spinner__circle,
  &::before,
  &::after {
    border-top-color: #ffb100;
    border-left-color: #ffb100;
  }
}

  &.spinner--d3 {
    .spinner__circle,
    &::before,
    &::after {
      border-top-color: #CF590B;
      border-left-color: #CF590B;
  }
}

  /*
    Sizes
  */
  @for $i from 1 through length($sizes) {
    &.spinner--size#{nth($sizes, $i)} {
      transform: scale(nth($sizes, $i)/32);
  }
}

  .spinner__circle,
  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    perspective: 600px;
    border-top-width: 4px;
    border-left-width: 2px;
    border-top-color: #04AFFF;
    border-left-color: #04AFFF;
    border-top-style: solid;
    border-left-style: solid;
    border-radius: 32px;
    width: 32px;
    height: 32px;
    animation-duration: $animation-duration;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

  .spinner__circle {
    animation-name: rotation1;
}

  &::before {
    animation-name: rotation2;
}

  &::after {
    animation-name: rotation3;
}

  /* For Codepen layout  */
  display: inline-block;
  margin: 32px;
}

@keyframes rotation1 {
  0% {
    transform: rotateX(65deg) rotateZ(45deg);
  }
  100% {
    transform: rotateX(65deg) rotateZ(405deg);
  }
}

@keyframes rotation2 {
  0% {
    transform: rotateX(-45deg) rotateY(45deg) rotateZ(180deg);
  }
  100% {
    transform: rotateX(-45deg) rotateY(45deg) rotateZ(540deg);
  }
}

@keyframes rotation3 {
  0% {
    transform: rotateX(45deg) rotateY(45deg) rotateZ(270deg);
  }
  100% {
    transform: rotateX(45deg) rotateY(45deg) rotateZ(630deg);
  }
}

</style>
