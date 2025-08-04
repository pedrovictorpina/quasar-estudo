<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 q-mb-lg">
      <q-icon name="feedback" class="q-mr-sm" />
      Componentes de Feedback
    </div>

    <!-- Spinners Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="refresh" class="q-mr-sm" />
          Spinners
        </div>
        <div class="text-body2 q-mb-md">
          Indicadores de carregamento com diferentes estilos e animações.
        </div>
        
        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Spinners Básicos</div>
            <div class="q-gutter-md row items-center">
              <q-spinner color="primary" size="3em" />
              <q-spinner-audio color="green" size="3em" />
              <q-spinner-ball color="purple" size="3em" />
              <q-spinner-bars color="orange" size="3em" />
              <q-spinner-box color="red" size="3em" />
              <q-spinner-clock color="blue" size="3em" />
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Spinners Avançados</div>
            <div class="q-gutter-md row items-center">
              <q-spinner-comment color="teal" size="3em" />
              <q-spinner-cube color="pink" size="3em" />
              <q-spinner-dots color="indigo" size="3em" />
              <q-spinner-facebook color="blue" size="3em" />
              <q-spinner-gears color="brown" size="3em" />
              <q-spinner-grid color="cyan" size="3em" />
            </div>
          </div>
        </div>

        <div class="q-mt-lg">
          <div class="text-subtitle2 q-mb-sm">Mais Spinners</div>
          <div class="q-gutter-md row items-center">
            <q-spinner-hearts color="red" size="3em" />
            <q-spinner-hourglass color="amber" size="3em" />
            <q-spinner-infinity color="deep-purple" size="3em" />
            <q-spinner-ios color="grey" size="3em" />
            <q-spinner-orbit color="light-green" size="3em" />
            <q-spinner-oval color="deep-orange" size="3em" />
            <q-spinner-pie color="lime" size="3em" />
            <q-spinner-puff color="yellow" size="3em" />
            <q-spinner-radio color="light-blue" size="3em" />
            <q-spinner-rings color="purple" size="3em" />
            <q-spinner-tail color="green" size="3em" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Progress Bars Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="trending_up" class="q-mr-sm" />
          Progress Bars
        </div>
        <div class="text-body2 q-mb-md">
          Barras de progresso para mostrar o andamento de operações.
        </div>
        
        <div class="q-gutter-lg">
          <div>
            <div class="text-subtitle2 q-mb-sm">Progress Linear Básico</div>
            <q-linear-progress :value="progress1" color="primary" class="q-mb-sm" />
            <q-linear-progress :value="progress2" color="secondary" class="q-mb-sm" />
            <q-linear-progress :value="progress3" color="positive" class="q-mb-sm" />
            <div class="q-gutter-sm">
              <q-btn @click="animateProgress" color="primary" label="Animar" />
              <q-btn @click="resetProgress" color="grey" label="Reset" />
            </div>
          </div>

          <div>
            <div class="text-subtitle2 q-mb-sm">Progress com Stripe e Buffer</div>
            <q-linear-progress
              :value="progress1"
              :buffer="progress1 + 0.2"
              color="warning"
              stripe
              class="q-mb-sm"
            />
            <q-linear-progress
              :value="progress2"
              color="info"
              stripe
              reverse
              class="q-mb-sm"
            />
            <q-linear-progress
              indeterminate
              color="purple"
              class="q-mb-sm"
            />
          </div>

          <div>
            <div class="text-subtitle2 q-mb-sm">Progress Circular</div>
            <div class="row q-gutter-md items-center">
              <q-circular-progress
                :value="progress1"
                size="50px"
                :thickness="0.22"
                color="teal"
                track-color="grey-3"
                class="q-ma-md"
              />
              <q-circular-progress
                :value="progress2"
                size="80px"
                :thickness="0.1"
                color="orange"
                track-color="orange-1"
                class="q-ma-md"
              >
                {{ Math.round(progress2 * 100) }}%
              </q-circular-progress>
              <q-circular-progress
                :value="progress3"
                size="100px"
                :thickness="0.15"
                color="red"
                track-color="red-1"
                class="q-ma-md"
              >
                <q-icon name="cloud_download" size="32px" />
              </q-circular-progress>
              <q-circular-progress
                indeterminate
                size="60px"
                color="purple"
                class="q-ma-md"
              />
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Skeleton Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="view_module" class="q-mr-sm" />
          Skeleton
        </div>
        <div class="text-body2 q-mb-md">
          Placeholders animados para indicar carregamento de conteúdo.
        </div>
        
        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Skeleton Básico</div>
            <div class="q-pa-md" style="max-width: 300px">
              <q-skeleton height="150px" square />
              <q-skeleton height="60px" class="q-mt-md" />
              <q-skeleton height="20px" width="50%" class="q-mt-sm" />
              <q-skeleton height="20px" width="75%" class="q-mt-sm" />
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Skeleton com Avatar</div>
            <div class="q-pa-md" style="max-width: 300px">
              <div class="row items-center q-gutter-md">
                <q-skeleton type="QAvatar" size="50px" />
                <div class="col">
                  <q-skeleton type="text" width="60%" />
                  <q-skeleton type="text" width="40%" />
                </div>
              </div>
              <q-skeleton height="100px" class="q-mt-md" />
              <div class="row q-gutter-sm q-mt-md">
                <q-skeleton type="QBtn" />
                <q-skeleton type="QBtn" />
              </div>
            </div>
          </div>
        </div>

        <div class="q-mt-lg">
          <div class="text-subtitle2 q-mb-sm">Skeleton de Lista</div>
          <div class="q-pa-md" style="max-width: 400px">
            <div v-for="n in 3" :key="n" class="row items-center q-gutter-md q-mb-md">
              <q-skeleton type="QAvatar" />
              <div class="col">
                <q-skeleton type="text" width="80%" />
                <q-skeleton type="text" width="60%" />
              </div>
              <q-skeleton type="QBtn" />
            </div>
          </div>
        </div>

        <div class="q-mt-lg">
          <div class="text-subtitle2 q-mb-sm">Demonstração com Toggle</div>
          <q-toggle v-model="showSkeleton" label="Mostrar Skeleton" class="q-mb-md" />
          
          <div class="q-pa-md border" style="max-width: 400px">
            <template v-if="showSkeleton">
              <div class="row items-center q-gutter-md q-mb-md">
                <q-skeleton type="QAvatar" size="60px" />
                <div class="col">
                  <q-skeleton type="text" width="70%" />
                  <q-skeleton type="text" width="50%" />
                </div>
              </div>
              <q-skeleton height="120px" class="q-mb-md" />
              <div class="row q-gutter-sm">
                <q-skeleton type="QBtn" />
                <q-skeleton type="QBtn" />
                <q-skeleton type="QBtn" />
              </div>
            </template>
            <template v-else>
              <div class="row items-center q-gutter-md q-mb-md">
                <q-avatar size="60px">
                  <img src="https://cdn.quasar.dev/img/avatar1.jpg">
                </q-avatar>
                <div class="col">
                  <div class="text-h6">João Silva</div>
                  <div class="text-caption">Desenvolvedor Frontend</div>
                </div>
              </div>
              <div class="text-body2 q-mb-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div class="row q-gutter-sm">
                <q-btn color="primary" label="Seguir" />
                <q-btn color="secondary" label="Mensagem" />
                <q-btn flat color="grey" label="Mais" />
              </div>
            </template>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Tooltips Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="help_outline" class="q-mr-sm" />
          Tooltips
        </div>
        <div class="text-body2 q-mb-md">
          Dicas contextuais que aparecem ao passar o mouse sobre elementos.
        </div>
        
        <div class="q-gutter-lg">
          <div>
            <div class="text-subtitle2 q-mb-sm">Tooltips Básicos</div>
            <div class="q-gutter-md">
              <q-btn color="primary" label="Tooltip Básico">
                <q-tooltip>Este é um tooltip básico</q-tooltip>
              </q-btn>
              
              <q-btn color="secondary" label="Tooltip com Delay">
                <q-tooltip :delay="1000">Tooltip com delay de 1 segundo</q-tooltip>
              </q-btn>
              
              <q-btn color="positive" label="Tooltip Rico">
                <q-tooltip class="bg-purple text-white">
                  <div class="text-h6">Tooltip Rico</div>
                  <div>Com conteúdo HTML personalizado</div>
                </q-tooltip>
              </q-btn>
            </div>
          </div>

          <div>
            <div class="text-subtitle2 q-mb-sm">Posições do Tooltip</div>
            <div class="q-gutter-md">
              <q-btn color="info" label="Top">
                <q-tooltip anchor="top middle" self="bottom middle">Tooltip no topo</q-tooltip>
              </q-btn>
              
              <q-btn color="warning" label="Bottom">
                <q-tooltip anchor="bottom middle" self="top middle">Tooltip embaixo</q-tooltip>
              </q-btn>
              
              <q-btn color="negative" label="Left">
                <q-tooltip anchor="center left" self="center right">Tooltip à esquerda</q-tooltip>
              </q-btn>
              
              <q-btn color="purple" label="Right">
                <q-tooltip anchor="center right" self="center left">Tooltip à direita</q-tooltip>
              </q-btn>
            </div>
          </div>

          <div>
            <div class="text-subtitle2 q-mb-sm">Tooltips em Ícones</div>
            <div class="q-gutter-md">
              <q-icon name="home" size="md" color="primary" class="cursor-pointer">
                <q-tooltip>Página Inicial</q-tooltip>
              </q-icon>
              
              <q-icon name="settings" size="md" color="grey" class="cursor-pointer">
                <q-tooltip>Configurações</q-tooltip>
              </q-icon>
              
              <q-icon name="help" size="md" color="orange" class="cursor-pointer">
                <q-tooltip>Central de Ajuda</q-tooltip>
              </q-icon>
              
              <q-icon name="account_circle" size="md" color="green" class="cursor-pointer">
                <q-tooltip>Perfil do Usuário</q-tooltip>
              </q-icon>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Popover Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="chat_bubble_outline" class="q-mr-sm" />
          Popover
        </div>
        <div class="text-body2 q-mb-md">
          Painéis flutuantes com conteúdo mais rico que tooltips.
        </div>
        
        <div class="q-gutter-md">
          <q-btn color="primary" label="Popover Simples">
            <q-popup-proxy>
              <q-banner class="bg-primary text-white">
                <template v-slot:avatar>
                  <q-icon name="info" />
                </template>
                Este é um popover simples com mais conteúdo.
              </q-banner>
            </q-popup-proxy>
          </q-btn>

          <q-btn color="secondary" label="Menu Popover">
            <q-popup-proxy>
              <q-list style="min-width: 200px">
                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-icon name="edit" />
                  </q-item-section>
                  <q-item-section>Editar</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-icon name="share" />
                  </q-item-section>
                  <q-item-section>Compartilhar</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-icon name="delete" />
                  </q-item-section>
                  <q-item-section>Excluir</q-item-section>
                </q-item>
              </q-list>
            </q-popup-proxy>
          </q-btn>

          <q-btn color="positive" label="Formulário Popover">
            <q-popup-proxy>
              <q-card style="width: 300px">
                <q-card-section>
                  <div class="text-h6">Contato Rápido</div>
                </q-card-section>
                <q-card-section>
                  <q-input v-model="popoverForm.name" label="Nome" class="q-mb-md" />
                  <q-input v-model="popoverForm.email" label="Email" type="email" class="q-mb-md" />
                  <q-input v-model="popoverForm.message" label="Mensagem" type="textarea" />
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn flat label="Cancelar" v-close-popup />
                  <q-btn color="primary" label="Enviar" @click="submitPopoverForm" />
                </q-card-actions>
              </q-card>
            </q-popup-proxy>
          </q-btn>
        </div>
      </q-card-section>
    </q-card>

    <!-- Inner Loading Section -->
    <q-card>
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="hourglass_empty" class="q-mr-sm" />
          Inner Loading
        </div>
        <div class="text-body2 q-mb-md">
          Indicador de carregamento dentro de componentes específicos.
        </div>
        
        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Card com Loading</div>
            <q-card class="relative-position" style="height: 200px">
              <q-inner-loading :showing="cardLoading">
                <q-spinner-gears size="50px" color="primary" />
              </q-inner-loading>
              
              <q-card-section>
                <div class="text-h6">Conteúdo do Card</div>
                <div class="text-body2">
                  Este card pode mostrar um indicador de carregamento interno.
                </div>
              </q-card-section>
              
              <q-card-actions>
                <q-btn 
                  :loading="cardLoading" 
                  @click="toggleCardLoading" 
                  color="primary" 
                  :label="cardLoading ? 'Carregando...' : 'Simular Loading'"
                />
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Lista com Loading</div>
            <q-list bordered class="relative-position" style="height: 200px">
              <q-inner-loading :showing="listLoading" label="Carregando dados..." label-class="text-teal" label-style="font-size: 1.1em">
                <q-spinner-facebook size="50px" color="teal" />
              </q-inner-loading>
              
              <q-item v-for="n in 5" :key="n">
                <q-item-section avatar>
                  <q-avatar color="primary" text-color="white">{{ n }}</q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Item {{ n }}</q-item-label>
                  <q-item-label caption>Descrição do item {{ n }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            
            <q-btn 
              class="q-mt-md" 
              :loading="listLoading" 
              @click="toggleListLoading" 
              color="teal" 
              :label="listLoading ? 'Carregando...' : 'Recarregar Lista'"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

// Progress values
const progress1 = ref(0);
const progress2 = ref(0);
const progress3 = ref(0);
let progressInterval: NodeJS.Timeout | null = null;

// Skeleton
const showSkeleton = ref(true);

// Popover form
const popoverForm = ref({
  name: '',
  email: '',
  message: ''
});

// Inner loading
const cardLoading = ref(false);
const listLoading = ref(false);

function animateProgress() {
  if (progressInterval) {
    clearInterval(progressInterval);
  }
  
  progress1.value = 0;
  progress2.value = 0;
  progress3.value = 0;
  
  progressInterval = setInterval(() => {
    progress1.value = Math.min(progress1.value + 0.02, 1);
    progress2.value = Math.min(progress2.value + 0.015, 1);
    progress3.value = Math.min(progress3.value + 0.01, 1);
    
    if (progress1.value >= 1 && progress2.value >= 1 && progress3.value >= 1) {
      clearInterval(progressInterval!);
      progressInterval = null;
    }
  }, 50);
}

function resetProgress() {
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
  progress1.value = 0;
  progress2.value = 0;
  progress3.value = 0;
}

function submitPopoverForm() {
  $q.notify({
    type: 'positive',
    message: `Mensagem de ${popoverForm.value.name} enviada!`,
    icon: 'send'
  });
  
  // Reset form
  popoverForm.value = {
    name: '',
    email: '',
    message: ''
  };
}

function toggleCardLoading() {
  cardLoading.value = true;
  setTimeout(() => {
    cardLoading.value = false;
    $q.notify('Card carregado!');
  }, 3000);
}

function toggleListLoading() {
  listLoading.value = true;
  setTimeout(() => {
    listLoading.value = false;
    $q.notify('Lista recarregada!');
  }, 2500);
}

onMounted(() => {
  // Start with some initial progress
  progress1.value = 0.3;
  progress2.value = 0.6;
  progress3.value = 0.8;
});

onUnmounted(() => {
  if (progressInterval) {
    clearInterval(progressInterval);
  }
});
</script>

<style scoped>
.border {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.cursor-pointer {
  cursor: pointer;
}
</style>