<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 q-mb-lg">
      <q-icon name="animation" class="q-mr-sm" />
      Animações
    </div>

    <!-- Transition Animations Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="play_arrow" class="q-mr-sm" />
          Animações de Transição
        </div>
        <div class="text-body2 q-mb-md">
          Animações suaves para entrada e saída de elementos.
        </div>
        
        <div class="q-gutter-md q-mb-lg">
          <q-btn @click="toggleFade" color="primary" label="Fade" />
          <q-btn @click="toggleSlideUp" color="secondary" label="Slide Up" />
          <q-btn @click="toggleSlideDown" color="positive" label="Slide Down" />
          <q-btn @click="toggleSlideLeft" color="warning" label="Slide Left" />
          <q-btn @click="toggleSlideRight" color="negative" label="Slide Right" />
          <q-btn @click="toggleScale" color="info" label="Scale" />
          <q-btn @click="toggleRotate" color="purple" label="Rotate" />
          <q-btn @click="toggleFlip" color="teal" label="Flip" />
        </div>

        <div class="row q-gutter-lg">
          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">Fade</div>
            <div class="animation-container">
              <transition
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
              >
                <q-card v-if="showFade" class="animation-card bg-primary text-white">
                  <q-card-section>
                    <div class="text-h6">Fade</div>
                    <div>Animação de opacidade</div>
                  </q-card-section>
                </q-card>
              </transition>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">Slide Up</div>
            <div class="animation-container">
              <transition
                enter-active-class="animated slideInUp"
                leave-active-class="animated slideOutDown"
              >
                <q-card v-if="showSlideUp" class="animation-card bg-secondary text-white">
                  <q-card-section>
                    <div class="text-h6">Slide Up</div>
                    <div>Desliza de baixo para cima</div>
                  </q-card-section>
                </q-card>
              </transition>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">Slide Down</div>
            <div class="animation-container">
              <transition
                enter-active-class="animated slideInDown"
                leave-active-class="animated slideOutUp"
              >
                <q-card v-if="showSlideDown" class="animation-card bg-positive text-white">
                  <q-card-section>
                    <div class="text-h6">Slide Down</div>
                    <div>Desliza de cima para baixo</div>
                  </q-card-section>
                </q-card>
              </transition>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">Scale</div>
            <div class="animation-container">
              <transition
                enter-active-class="animated zoomIn"
                leave-active-class="animated zoomOut"
              >
                <q-card v-if="showScale" class="animation-card bg-info text-white">
                  <q-card-section>
                    <div class="text-h6">Scale</div>
                    <div>Animação de escala</div>
                  </q-card-section>
                </q-card>
              </transition>
            </div>
          </div>
        </div>

        <div class="row q-gutter-lg q-mt-md">
          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">Slide Left</div>
            <div class="animation-container">
              <transition
                enter-active-class="animated slideInLeft"
                leave-active-class="animated slideOutRight"
              >
                <q-card v-if="showSlideLeft" class="animation-card bg-warning text-white">
                  <q-card-section>
                    <div class="text-h6">Slide Left</div>
                    <div>Desliza da esquerda</div>
                  </q-card-section>
                </q-card>
              </transition>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">Slide Right</div>
            <div class="animation-container">
              <transition
                enter-active-class="animated slideInRight"
                leave-active-class="animated slideOutLeft"
              >
                <q-card v-if="showSlideRight" class="animation-card bg-negative text-white">
                  <q-card-section>
                    <div class="text-h6">Slide Right</div>
                    <div>Desliza da direita</div>
                  </q-card-section>
                </q-card>
              </transition>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">Rotate</div>
            <div class="animation-container">
              <transition
                enter-active-class="animated rotateIn"
                leave-active-class="animated rotateOut"
              >
                <q-card v-if="showRotate" class="animation-card bg-purple text-white">
                  <q-card-section>
                    <div class="text-h6">Rotate</div>
                    <div>Animação de rotação</div>
                  </q-card-section>
                </q-card>
              </transition>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">Flip</div>
            <div class="animation-container">
              <transition
                enter-active-class="animated flipInX"
                leave-active-class="animated flipOutX"
              >
                <q-card v-if="showFlip" class="animation-card bg-teal text-white">
                  <q-card-section>
                    <div class="text-h6">Flip</div>
                    <div>Animação de flip</div>
                  </q-card-section>
                </q-card>
              </transition>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Bounce Animations Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="sports_basketball" class="q-mr-sm" />
          Animações Bounce
        </div>
        <div class="text-body2 q-mb-md">
          Animações com efeito de "quique" ou elasticidade.
        </div>
        
        <div class="q-gutter-md q-mb-lg">
          <q-btn @click="toggleBounce" color="primary" label="Bounce" />
          <q-btn @click="toggleBounceIn" color="secondary" label="Bounce In" />
          <q-btn @click="toggleBounceInDown" color="positive" label="Bounce In Down" />
          <q-btn @click="toggleBounceInUp" color="warning" label="Bounce In Up" />
          <q-btn @click="toggleBounceInLeft" color="negative" label="Bounce In Left" />
          <q-btn @click="toggleBounceInRight" color="info" label="Bounce In Right" />
        </div>

        <div class="row q-gutter-lg">
          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Bounce</div>
            <div class="animation-container">
              <q-card 
                :class="{ 'animated bounce': animateBounce }" 
                class="animation-card bg-primary text-white"
              >
                <q-card-section>
                  <div class="text-h6">Bounce</div>
                  <div>Efeito de quique no lugar</div>
                </q-card-section>
              </q-card>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Bounce In</div>
            <div class="animation-container">
              <transition
                enter-active-class="animated bounceIn"
                leave-active-class="animated bounceOut"
              >
                <q-card v-if="showBounceIn" class="animation-card bg-secondary text-white">
                  <q-card-section>
                    <div class="text-h6">Bounce In</div>
                    <div>Entrada com bounce</div>
                  </q-card-section>
                </q-card>
              </transition>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Bounce In Down</div>
            <div class="animation-container">
              <transition
                enter-active-class="animated bounceInDown"
                leave-active-class="animated bounceOutUp"
              >
                <q-card v-if="showBounceInDown" class="animation-card bg-positive text-white">
                  <q-card-section>
                    <div class="text-h6">Bounce Down</div>
                    <div>Bounce de cima para baixo</div>
                  </q-card-section>
                </q-card>
              </transition>
            </div>
          </div>
        </div>

        <div class="row q-gutter-lg q-mt-md">
          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Bounce In Up</div>
            <div class="animation-container">
              <transition
                enter-active-class="animated bounceInUp"
                leave-active-class="animated bounceOutDown"
              >
                <q-card v-if="showBounceInUp" class="animation-card bg-warning text-white">
                  <q-card-section>
                    <div class="text-h6">Bounce Up</div>
                    <div>Bounce de baixo para cima</div>
                  </q-card-section>
                </q-card>
              </transition>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Bounce In Left</div>
            <div class="animation-container">
              <transition
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceOutRight"
              >
                <q-card v-if="showBounceInLeft" class="animation-card bg-negative text-white">
                  <q-card-section>
                    <div class="text-h6">Bounce Left</div>
                    <div>Bounce da esquerda</div>
                  </q-card-section>
                </q-card>
              </transition>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Bounce In Right</div>
            <div class="animation-container">
              <transition
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutLeft"
              >
                <q-card v-if="showBounceInRight" class="animation-card bg-info text-white">
                  <q-card-section>
                    <div class="text-h6">Bounce Right</div>
                    <div>Bounce da direita</div>
                  </q-card-section>
                </q-card>
              </transition>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Attention Seekers Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="visibility" class="q-mr-sm" />
          Animações de Atenção
        </div>
        <div class="text-body2 q-mb-md">
          Animações para chamar atenção para elementos específicos.
        </div>
        
        <div class="q-gutter-md q-mb-lg">
          <q-btn @click="triggerPulse" color="primary" label="Pulse" />
          <q-btn @click="triggerShake" color="secondary" label="Shake" />
          <q-btn @click="triggerTada" color="positive" label="Tada" />
          <q-btn @click="triggerWobble" color="warning" label="Wobble" />
          <q-btn @click="triggerJello" color="negative" label="Jello" />
          <q-btn @click="triggerHeartBeat" color="info" label="HeartBeat" />
          <q-btn @click="triggerFlash" color="purple" label="Flash" />
          <q-btn @click="triggerRubberBand" color="teal" label="RubberBand" />
        </div>

        <div class="row q-gutter-lg">
          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">Pulse</div>
            <div class="animation-container">
              <q-card 
                :class="{ 'animated pulse': animatePulse }" 
                class="animation-card bg-primary text-white"
              >
                <q-card-section>
                  <div class="text-h6">Pulse</div>
                  <div>Efeito de pulsação</div>
                </q-card-section>
              </q-card>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">Shake</div>
            <div class="animation-container">
              <q-card 
                :class="{ 'animated shake': animateShake }" 
                class="animation-card bg-secondary text-white"
              >
                <q-card-section>
                  <div class="text-h6">Shake</div>
                  <div>Efeito de tremor</div>
                </q-card-section>
              </q-card>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">Tada</div>
            <div class="animation-container">
              <q-card 
                :class="{ 'animated tada': animateTada }" 
                class="animation-card bg-positive text-white"
              >
                <q-card-section>
                  <div class="text-h6">Tada</div>
                  <div>Efeito de celebração</div>
                </q-card-section>
              </q-card>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">Wobble</div>
            <div class="animation-container">
              <q-card 
                :class="{ 'animated wobble': animateWobble }" 
                class="animation-card bg-warning text-white"
              >
                <q-card-section>
                  <div class="text-h6">Wobble</div>
                  <div>Efeito de oscilação</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>

        <div class="row q-gutter-lg q-mt-md">
          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">Jello</div>
            <div class="animation-container">
              <q-card 
                :class="{ 'animated jello': animateJello }" 
                class="animation-card bg-negative text-white"
              >
                <q-card-section>
                  <div class="text-h6">Jello</div>
                  <div>Efeito gelatinoso</div>
                </q-card-section>
              </q-card>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">HeartBeat</div>
            <div class="animation-container">
              <q-card 
                :class="{ 'animated heartBeat': animateHeartBeat }" 
                class="animation-card bg-info text-white"
              >
                <q-card-section>
                  <div class="text-h6">HeartBeat</div>
                  <div>Efeito de batimento</div>
                </q-card-section>
              </q-card>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">Flash</div>
            <div class="animation-container">
              <q-card 
                :class="{ 'animated flash': animateFlash }" 
                class="animation-card bg-purple text-white"
              >
                <q-card-section>
                  <div class="text-h6">Flash</div>
                  <div>Efeito de flash</div>
                </q-card-section>
              </q-card>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="text-subtitle2 q-mb-sm">RubberBand</div>
            <div class="animation-container">
              <q-card 
                :class="{ 'animated rubberBand': animateRubberBand }" 
                class="animation-card bg-teal text-white"
              >
                <q-card-section>
                  <div class="text-h6">RubberBand</div>
                  <div>Efeito elástico</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Custom Animations Section -->
    <q-card>
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="auto_fix_high" class="q-mr-sm" />
          Animações Customizadas
        </div>
        <div class="text-body2 q-mb-md">
          Exemplos de animações CSS customizadas.
        </div>
        
        <div class="q-gutter-md q-mb-lg">
          <q-btn @click="triggerCustomSpin" color="primary" label="Custom Spin" />
          <q-btn @click="triggerCustomGlow" color="secondary" label="Custom Glow" />
          <q-btn @click="triggerCustomFloat" color="positive" label="Custom Float" />
        </div>

        <div class="row q-gutter-lg">
          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Custom Spin</div>
            <div class="animation-container">
              <q-card 
                :class="{ 'custom-spin': animateCustomSpin }" 
                class="animation-card bg-primary text-white"
              >
                <q-card-section>
                  <div class="text-h6">Spin</div>
                  <div>Rotação customizada</div>
                </q-card-section>
              </q-card>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Custom Glow</div>
            <div class="animation-container">
              <q-card 
                :class="{ 'custom-glow': animateCustomGlow }" 
                class="animation-card bg-secondary text-white"
              >
                <q-card-section>
                  <div class="text-h6">Glow</div>
                  <div>Efeito de brilho</div>
                </q-card-section>
              </q-card>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Custom Float</div>
            <div class="animation-container">
              <q-card 
                :class="{ 'custom-float': animateCustomFloat }" 
                class="animation-card bg-positive text-white"
              >
                <q-card-section>
                  <div class="text-h6">Float</div>
                  <div>Efeito flutuante</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

// Transition animations
const showFade = ref(true);
const showSlideUp = ref(true);
const showSlideDown = ref(true);
const showSlideLeft = ref(true);
const showSlideRight = ref(true);
const showScale = ref(true);
const showRotate = ref(true);
const showFlip = ref(true);

// Bounce animations
const animateBounce = ref(false);
const showBounceIn = ref(true);
const showBounceInDown = ref(true);
const showBounceInUp = ref(true);
const showBounceInLeft = ref(true);
const showBounceInRight = ref(true);

// Attention seekers
const animatePulse = ref(false);
const animateShake = ref(false);
const animateTada = ref(false);
const animateWobble = ref(false);
const animateJello = ref(false);
const animateHeartBeat = ref(false);
const animateFlash = ref(false);
const animateRubberBand = ref(false);

// Custom animations
const animateCustomSpin = ref(false);
const animateCustomGlow = ref(false);
const animateCustomFloat = ref(false);

// Transition animation functions
function toggleFade() {
  showFade.value = !showFade.value;
}

function toggleSlideUp() {
  showSlideUp.value = !showSlideUp.value;
}

function toggleSlideDown() {
  showSlideDown.value = !showSlideDown.value;
}

function toggleSlideLeft() {
  showSlideLeft.value = !showSlideLeft.value;
}

function toggleSlideRight() {
  showSlideRight.value = !showSlideRight.value;
}

function toggleScale() {
  showScale.value = !showScale.value;
}

function toggleRotate() {
  showRotate.value = !showRotate.value;
}

function toggleFlip() {
  showFlip.value = !showFlip.value;
}

// Bounce animation functions
function toggleBounce() {
  animateBounce.value = true;
  setTimeout(() => {
    animateBounce.value = false;
  }, 1000);
}

function toggleBounceIn() {
  showBounceIn.value = !showBounceIn.value;
}

function toggleBounceInDown() {
  showBounceInDown.value = !showBounceInDown.value;
}

function toggleBounceInUp() {
  showBounceInUp.value = !showBounceInUp.value;
}

function toggleBounceInLeft() {
  showBounceInLeft.value = !showBounceInLeft.value;
}

function toggleBounceInRight() {
  showBounceInRight.value = !showBounceInRight.value;
}

// Attention seeker functions
function triggerAnimation(animationRef: Ref<boolean>) {
  animationRef.value = true;
  setTimeout(() => {
    animationRef.value = false;
  }, 1000);
}

function triggerPulse() {
  triggerAnimation(animatePulse);
}

function triggerShake() {
  triggerAnimation(animateShake);
}

function triggerTada() {
  triggerAnimation(animateTada);
}

function triggerWobble() {
  triggerAnimation(animateWobble);
}

function triggerJello() {
  triggerAnimation(animateJello);
}

function triggerHeartBeat() {
  triggerAnimation(animateHeartBeat);
}

function triggerFlash() {
  triggerAnimation(animateFlash);
}

function triggerRubberBand() {
  triggerAnimation(animateRubberBand);
}

// Custom animation functions
function triggerCustomSpin() {
  triggerAnimation(animateCustomSpin);
}

function triggerCustomGlow() {
  triggerAnimation(animateCustomGlow);
}

function triggerCustomFloat() {
  triggerAnimation(animateCustomFloat);
}
</script>

<style scoped>
.animation-container {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
}

.animation-card {
  width: 100%;
  max-width: 200px;
  min-height: 100px;
}

/* Custom Animations */
.custom-spin {
  animation: customSpin 2s linear;
}

@keyframes customSpin {
  from {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.2);
  }
  to {
    transform: rotate(360deg) scale(1);
  }
}

.custom-glow {
  animation: customGlow 2s ease-in-out;
}

@keyframes customGlow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6);
  }
}

.custom-float {
  animation: customFloat 3s ease-in-out;
}

@keyframes customFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-10px) rotateZ(-2deg);
  }
  50% {
    transform: translateY(-20px) rotateZ(0deg);
  }
  75% {
    transform: translateY(-10px) rotateZ(2deg);
  }
}

/* Ensure animations work properly */
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.animated.infinite {
  animation-iteration-count: infinite;
}
</style>