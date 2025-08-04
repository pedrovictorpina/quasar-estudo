<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 q-mb-lg">
      <q-icon name="code" class="q-mr-sm" />
      Diretivas
    </div>

    <!-- Ripple Directive -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="touch_app" class="q-mr-sm" />
          v-ripple
        </div>
        <div class="text-body2 q-mb-md">
          Adiciona efeito ripple (ondulação) aos elementos quando clicados.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Ripple Básico</div>
            <div class="ripple-demo-container">
              <div 
                v-ripple 
                class="ripple-demo bg-primary text-white cursor-pointer"
              >
                <div class="text-center q-pa-lg">
                  <q-icon name="touch_app" size="2em" class="q-mb-sm" />
                  <div class="text-h6">Clique aqui</div>
                  <div class="text-caption">Ripple padrão</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Ripple Customizado</div>
            <div class="ripple-demo-container">
              <div 
                v-ripple="{ color: 'orange', center: true }"
                class="ripple-demo bg-secondary text-white cursor-pointer"
              >
                <div class="text-center q-pa-lg">
                  <q-icon name="star" size="2em" class="q-mb-sm" />
                  <div class="text-h6">Ripple Central</div>
                  <div class="text-caption">Cor laranja, centro</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="q-mt-md">
          <div class="text-subtitle2 q-mb-sm">Ripple em Botões</div>
          <div class="q-gutter-md">
            <q-btn 
              v-ripple="{ color: 'red' }"
              color="primary" 
              label="Ripple Vermelho" 
            />
            <q-btn 
              v-ripple="{ color: 'yellow', center: true }"
              color="secondary" 
              label="Ripple Central Amarelo" 
            />
            <q-btn 
              v-ripple.stop
              color="positive" 
              label="Sem Ripple" 
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Touch Pan Directive -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="pan_tool" class="q-mr-sm" />
          v-touch-pan
        </div>
        <div class="text-body2 q-mb-md">
          Detecta gestos de arrastar (pan) em elementos.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Pan Básico</div>
            <div 
              v-touch-pan.prevent.mouse="handlePan"
              class="pan-demo bg-blue-2"
              :style="{ transform: `translate(${panPosition.x}px, ${panPosition.y}px)` }"
            >
              <div class="text-center q-pa-lg">
                <q-icon name="open_with" size="2em" class="q-mb-sm" />
                <div class="text-h6">Arraste-me</div>
                <div class="text-caption">
                  X: {{ panPosition.x }}px, Y: {{ panPosition.y }}px
                </div>
              </div>
            </div>
            <q-btn 
              @click="resetPanPosition" 
              color="primary" 
              label="Reset Posição" 
              class="q-mt-sm"
            />
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Pan Horizontal</div>
            <div 
              v-touch-pan.prevent.mouse.horizontal="handleHorizontalPan"
              class="pan-demo bg-green-2"
              :style="{ transform: `translateX(${horizontalPanPosition}px)` }"
            >
              <div class="text-center q-pa-lg">
                <q-icon name="swap_horiz" size="2em" class="q-mb-sm" />
                <div class="text-h6">Arraste Horizontal</div>
                <div class="text-caption">
                  X: {{ horizontalPanPosition }}px
                </div>
              </div>
            </div>
            <q-btn 
              @click="resetHorizontalPan" 
              color="secondary" 
              label="Reset Horizontal" 
              class="q-mt-sm"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Touch Swipe Directive -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="swipe" class="q-mr-sm" />
          v-touch-swipe
        </div>
        <div class="text-body2 q-mb-md">
          Detecta gestos de deslizar (swipe) em diferentes direções.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Swipe em Todas as Direções</div>
            <div 
              v-touch-swipe.mouse="handleSwipe"
              class="swipe-demo bg-purple-2"
            >
              <div class="text-center q-pa-lg">
                <q-icon name="swipe" size="3em" class="q-mb-sm" />
                <div class="text-h6">Deslize aqui</div>
                <div class="text-caption q-mb-sm">
                  Última direção: {{ lastSwipeDirection || 'Nenhuma' }}
                </div>
                <div class="text-caption">
                  Total de swipes: {{ swipeCount }}
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Swipe Horizontal</div>
            <div 
              v-touch-swipe.mouse.horizontal="handleHorizontalSwipe"
              class="swipe-demo bg-orange-2"
            >
              <div class="text-center q-pa-lg">
                <q-icon name="swap_horiz" size="3em" class="q-mb-sm" />
                <div class="text-h6">Swipe Horizontal</div>
                <div class="text-caption q-mb-sm">
                  Direção: {{ horizontalSwipeDirection || 'Nenhuma' }}
                </div>
                <div class="text-caption">
                  Contador: {{ horizontalSwipeCount }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="q-mt-md">
          <q-btn 
            @click="resetSwipeCounters" 
            color="negative" 
            label="Reset Contadores" 
          />
        </div>
      </q-card-section>
    </q-card>

    <!-- Touch Hold Directive -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="timer" class="q-mr-sm" />
          v-touch-hold
        </div>
        <div class="text-body2 q-mb-md">
          Detecta quando um elemento é pressionado e mantido por um tempo.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Hold Básico (600ms)</div>
            <div 
              v-touch-hold.mouse="handleHold"
              class="hold-demo bg-red-2"
              :class="{ 'hold-active': isHolding }"
            >
              <div class="text-center q-pa-lg">
                <q-icon name="touch_app" size="2em" class="q-mb-sm" />
                <div class="text-h6">Pressione e Segure</div>
                <div class="text-caption q-mb-sm">
                  Status: {{ isHolding ? 'Segurando' : 'Solto' }}
                </div>
                <div class="text-caption">
                  Holds detectados: {{ holdCount }}
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Hold Customizado (1000ms)</div>
            <div 
              v-touch-hold:1000.mouse="handleLongHold"
              class="hold-demo bg-teal-2"
              :class="{ 'hold-active': isLongHolding }"
            >
              <div class="text-center q-pa-lg">
                <q-icon name="schedule" size="2em" class="q-mb-sm" />
                <div class="text-h6">Hold Longo (1s)</div>
                <div class="text-caption q-mb-sm">
                  Status: {{ isLongHolding ? 'Segurando' : 'Solto' }}
                </div>
                <div class="text-caption">
                  Long holds: {{ longHoldCount }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Touch Repeat Directive -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="repeat" class="q-mr-sm" />
          v-touch-repeat
        </div>
        <div class="text-body2 q-mb-md">
          Executa uma função repetidamente enquanto o elemento está sendo pressionado.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Contador com Repeat</div>
            <div class="text-center q-mb-md">
              <div class="text-h3 q-mb-sm">{{ repeatCounter }}</div>
              <div class="q-gutter-sm">
                <q-btn 
                  v-touch-repeat.mouse="incrementCounter"
                  color="positive" 
                  icon="add" 
                  label="Incrementar"
                  size="lg"
                />
                <q-btn 
                  v-touch-repeat.mouse="decrementCounter"
                  color="negative" 
                  icon="remove" 
                  label="Decrementar"
                  size="lg"
                />
              </div>
              <q-btn 
                @click="resetRepeatCounter" 
                color="grey" 
                label="Reset" 
                class="q-mt-sm"
              />
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Volume Control</div>
            <div class="text-center">
              <div class="volume-display q-mb-md">
                <q-icon name="volume_up" size="2em" class="q-mr-sm" />
                <span class="text-h4">{{ volume }}%</span>
              </div>
              <q-linear-progress 
                :value="volume / 100" 
                color="primary" 
                size="20px" 
                class="q-mb-md"
              />
              <div class="q-gutter-sm">
                <q-btn 
                  v-touch-repeat.mouse="increaseVolume"
                  color="primary" 
                  icon="volume_up" 
                  label="+"
                  :disable="volume >= 100"
                />
                <q-btn 
                  v-touch-repeat.mouse="decreaseVolume"
                  color="primary" 
                  icon="volume_down" 
                  label="-"
                  :disable="volume <= 0"
                />
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Intersection Directive -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="visibility" class="q-mr-sm" />
          v-intersection
        </div>
        <div class="text-body2 q-mb-md">
          Detecta quando um elemento entra ou sai da viewport.
        </div>
        
        <div class="intersection-demo-container">
          <div class="text-subtitle2 q-mb-sm">Elementos com Intersection Observer</div>
          <div class="intersection-scroll-area">
            <div 
              v-for="n in 10" 
              :key="n"
              v-intersection="(entry) => handleIntersection(entry, n)"
              class="intersection-item"
              :class="{ 'visible': visibleItems.includes(n) }"
            >
              <div class="text-center q-pa-md">
                <q-icon 
                  :name="visibleItems.includes(n) ? 'visibility' : 'visibility_off'" 
                  size="2em" 
                  :color="visibleItems.includes(n) ? 'positive' : 'grey'"
                  class="q-mb-sm"
                />
                <div class="text-h6">Item {{ n }}</div>
                <div class="text-caption">
                  {{ visibleItems.includes(n) ? 'Visível' : 'Oculto' }}
                </div>
              </div>
            </div>
          </div>
          <div class="text-caption q-mt-sm">
            Role para cima/baixo para ver os elementos entrando e saindo da viewport.
            Itens visíveis: {{ visibleItems.length }}/10
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Scroll Directive -->
    <q-card>
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="mouse" class="q-mr-sm" />
          v-scroll
        </div>
        <div class="text-body2 q-mb-md">
          Detecta eventos de scroll em elementos ou na janela.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Scroll Info</div>
            <q-list bordered>
              <q-item>
                <q-item-section>
                  <q-item-label>Posição Y</q-item-label>
                  <q-item-label caption>{{ scrollInfo.position }}px</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Direção</q-item-label>
                  <q-item-label caption>{{ scrollInfo.direction }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Velocidade</q-item-label>
                  <q-item-label caption>{{ scrollInfo.velocity }}px/s</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>No Topo</q-item-label>
                  <q-item-label caption>{{ scrollInfo.isFirst ? 'Sim' : 'Não' }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Scroll em Container</div>
            <div 
              v-scroll="handleContainerScroll"
              class="scroll-container"
            >
              <div v-for="n in 20" :key="n" class="scroll-item">
                <div class="text-center q-pa-md">
                  <q-icon name="article" class="q-mr-sm" />
                  Item de Scroll {{ n }}
                </div>
              </div>
            </div>
            <div class="text-caption q-mt-sm">
              Posição do container: {{ containerScrollPosition }}px
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Pan state
const panPosition = ref({ x: 0, y: 0 });
const horizontalPanPosition = ref(0);

// Swipe state
const lastSwipeDirection = ref('');
const swipeCount = ref(0);
const horizontalSwipeDirection = ref('');
const horizontalSwipeCount = ref(0);

// Hold state
const isHolding = ref(false);
const holdCount = ref(0);
const isLongHolding = ref(false);
const longHoldCount = ref(0);

// Repeat state
const repeatCounter = ref(0);
const volume = ref(50);

// Intersection state
const visibleItems = ref<number[]>([]);

// Scroll state
const scrollInfo = ref({
  position: 0,
  direction: 'down',
  velocity: 0,
  isFirst: true
});
const containerScrollPosition = ref(0);

// Pan handlers
interface PanEvent {
  evt?: Event;
  touch?: boolean;
  mouse?: boolean;
  position?: {
    top?: number;
    left?: number;
  };
  direction?: 'up' | 'down' | 'left' | 'right';
  isFirst?: boolean;
  isFinal?: boolean;
  duration?: number;
  distance?: {
    x?: number;
    y?: number;
  };
  offset?: {
    x?: number;
    y?: number;
  };
  delta?: {
    x?: number;
    y?: number;
  };
}

function handlePan(evt: PanEvent) {
  panPosition.value = {
    x: panPosition.value.x + (evt.delta?.x || 0),
    y: panPosition.value.y + (evt.delta?.y || 0)
  };
}

function handleHorizontalPan(evt: PanEvent) {
  horizontalPanPosition.value += (evt.delta?.x || 0);
}

function resetPanPosition() {
  panPosition.value = { x: 0, y: 0 };
}

function resetHorizontalPan() {
  horizontalPanPosition.value = 0;
}

// Swipe handlers
interface SwipeEvent {
  evt?: Event;
  touch?: boolean;
  mouse?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  distance?: {
    x?: number;
    y?: number;
  };
}

function handleSwipe(evt: SwipeEvent) {
  lastSwipeDirection.value = evt.direction || 'unknown';
  swipeCount.value++;
}

function handleHorizontalSwipe(evt: SwipeEvent) {
  horizontalSwipeDirection.value = evt.direction || 'unknown';
  horizontalSwipeCount.value++;
}

function resetSwipeCounters() {
  lastSwipeDirection.value = '';
  swipeCount.value = 0;
  horizontalSwipeDirection.value = '';
  horizontalSwipeCount.value = 0;
}

// Hold handlers
function handleHold() {
  isHolding.value = true;
  holdCount.value++;
  setTimeout(() => {
    isHolding.value = false;
  }, 200);
}

function handleLongHold() {
  isLongHolding.value = true;
  longHoldCount.value++;
  setTimeout(() => {
    isLongHolding.value = false;
  }, 200);
}

// Repeat handlers
function incrementCounter() {
  repeatCounter.value++;
}

function decrementCounter() {
  repeatCounter.value--;
}

function resetRepeatCounter() {
  repeatCounter.value = 0;
}

function increaseVolume() {
  if (volume.value < 100) {
    volume.value = Math.min(100, volume.value + 2);
  }
}

function decreaseVolume() {
  if (volume.value > 0) {
    volume.value = Math.max(0, volume.value - 2);
  }
}

// Intersection handler
function handleIntersection(entry: IntersectionObserverEntry, itemNumber: number): boolean {
  if (entry.isIntersecting) {
    if (!visibleItems.value.includes(itemNumber)) {
      visibleItems.value.push(itemNumber);
    }
  } else {
    const index = visibleItems.value.indexOf(itemNumber);
    if (index > -1) {
      visibleItems.value.splice(index, 1);
    }
  }
  return entry.isIntersecting;
}

// Scroll handlers
function handleScroll(verticalPosition: number) {
  scrollInfo.value = {
    position: verticalPosition,
    direction: verticalPosition > (scrollInfo.value.position || 0) ? 'down' : 'up',
    velocity: Math.abs(verticalPosition - (scrollInfo.value.position || 0)),
    isFirst: verticalPosition === 0
  };
}

function handleContainerScroll(verticalPosition: number) {
  containerScrollPosition.value = verticalPosition;
}

// Mount scroll listener
onMounted(() => {
  // Add scroll listener to window
  const scrollHandler = (evt: Event) => {
    const target = evt.target as Document;
    const scrollTop = target.documentElement.scrollTop || document.body.scrollTop;
    handleScroll(scrollTop);
  };
  
  document.addEventListener('scroll', scrollHandler);
  
  onUnmounted(() => {
    document.removeEventListener('scroll', scrollHandler);
  });
});
</script>

<style scoped>
.ripple-demo-container {
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 8px;
}

.ripple-demo {
  border-radius: 8px;
  transition: transform 0.2s;
  user-select: none;
}

.ripple-demo:hover {
  transform: scale(1.02);
}

.pan-demo {
  border-radius: 8px;
  cursor: move;
  user-select: none;
  transition: box-shadow 0.2s;
  border: 2px solid transparent;
}

.pan-demo:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-color: #1976d2;
}

.swipe-demo {
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s;
  border: 2px dashed #999;
}

.swipe-demo:hover {
  transform: scale(1.02);
}

.hold-demo {
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;
  border: 2px solid transparent;
}

.hold-demo:hover {
  transform: scale(1.02);
}

.hold-demo.hold-active {
  transform: scale(0.95);
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
  border-color: #4caf50;
}

.volume-display {
  display: flex;
  align-items: center;
  justify-content: center;
}

.intersection-demo-container {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
}

.intersection-scroll-area {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.intersection-item {
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: #f5f5f5;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.intersection-item.visible {
  background-color: #e8f5e8;
  border-color: #4caf50;
  transform: scale(1.02);
}

.scroll-container {
  height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.scroll-item {
  border-bottom: 1px solid #eee;
  background-color: #fafafa;
}

.scroll-item:nth-child(even) {
  background-color: #f0f0f0;
}

.scroll-item:hover {
  background-color: #e3f2fd;
}
</style>