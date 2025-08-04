<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 q-mb-lg">
      <q-icon name="power" class="q-mr-sm" />
      Plugins do Quasar
    </div>

    <!-- Notify Plugin Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="notifications" class="q-mr-sm" />
          Notify Plugin
        </div>
        <div class="text-body2 q-mb-md">
          Sistema de notificações toast para feedback ao usuário.
        </div>
        <div class="q-gutter-md">
          <q-btn color="positive" label="Sucesso" @click="showSuccessNotify" />
          <q-btn color="negative" label="Erro" @click="showErrorNotify" />
          <q-btn color="warning" label="Aviso" @click="showWarningNotify" />
          <q-btn color="info" label="Informação" @click="showInfoNotify" />
          <q-btn color="primary" label="Customizada" @click="showCustomNotify" />
          <q-btn color="secondary" label="Com Ações" @click="showActionNotify" />
          <q-btn color="purple" label="Posição" @click="showPositionNotify" />
          <q-btn color="teal" label="Multiline" @click="showMultilineNotify" />
        </div>
      </q-card-section>
    </q-card>

    <!-- Dialog Plugin Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="chat_bubble" class="q-mr-sm" />
          Dialog Plugin
        </div>
        <div class="text-body2 q-mb-md">
          Sistema de diálogos modais para confirmações e prompts.
        </div>
        <div class="q-gutter-md">
          <q-btn color="primary" label="Alerta" @click="showAlert" />
          <q-btn color="secondary" label="Confirmação" @click="showConfirm" />
          <q-btn color="positive" label="Prompt" @click="showPrompt" />
          <q-btn color="warning" label="Dialog Customizado" @click="showCustomDialog" />
        </div>
      </q-card-section>
    </q-card>

    <!-- Loading Plugin Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="hourglass_empty" class="q-mr-sm" />
          Loading Plugin
        </div>
        <div class="text-body2 q-mb-md">
          Indicador de carregamento global para operações assíncronas.
        </div>
        <div class="q-gutter-md">
          <q-btn color="primary" label="Loading Simples" @click="showSimpleLoading" />
          <q-btn color="secondary" label="Loading com Mensagem" @click="showMessageLoading" />
          <q-btn color="positive" label="Loading Customizado" @click="showCustomLoading" />
          <q-btn color="warning" label="Loading com Delay" @click="showDelayLoading" />
        </div>
      </q-card-section>
    </q-card>

    <!-- LoadingBar Plugin Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="linear_scale" class="q-mr-sm" />
          LoadingBar Plugin
        </div>
        <div class="text-body2 q-mb-md">
          Barra de progresso no topo da página para indicar carregamento.
        </div>
        <div class="q-gutter-md">
          <q-btn color="primary" label="Iniciar" @click="startLoadingBar" />
          <q-btn color="secondary" label="Incrementar" @click="incrementLoadingBar" />
          <q-btn color="positive" label="Parar" @click="stopLoadingBar" />
          <q-btn color="negative" label="Simular Erro" @click="simulateError" />
        </div>
      </q-card-section>
    </q-card>

    <!-- Storage Plugins Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="storage" class="q-mr-sm" />
          Storage Plugins (LocalStorage & SessionStorage)
        </div>
        <div class="text-body2 q-mb-md">
          Gerenciamento de dados no navegador com LocalStorage e SessionStorage.
        </div>
        
        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">LocalStorage</div>
            <q-input
              v-model="localStorageValue"
              label="Valor para LocalStorage"
              class="q-mb-sm"
            />
            <div class="q-gutter-sm q-mb-md">
              <q-btn color="primary" label="Salvar" @click="saveToLocalStorage" />
              <q-btn color="secondary" label="Carregar" @click="loadFromLocalStorage" />
              <q-btn color="negative" label="Remover" @click="removeFromLocalStorage" />
              <q-btn color="warning" label="Limpar Tudo" @click="clearLocalStorage" />
            </div>
            <div class="text-caption">
              Valor atual: {{ localStorageDisplay }}
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">SessionStorage</div>
            <q-input
              v-model="sessionStorageValue"
              label="Valor para SessionStorage"
              class="q-mb-sm"
            />
            <div class="q-gutter-sm q-mb-md">
              <q-btn color="primary" label="Salvar" @click="saveToSessionStorage" />
              <q-btn color="secondary" label="Carregar" @click="loadFromSessionStorage" />
              <q-btn color="negative" label="Remover" @click="removeFromSessionStorage" />
              <q-btn color="warning" label="Limpar Tudo" @click="clearSessionStorage" />
            </div>
            <div class="text-caption">
              Valor atual: {{ sessionStorageDisplay }}
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Cookies Plugin Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="cookie" class="q-mr-sm" />
          Cookies Plugin
        </div>
        <div class="text-body2 q-mb-md">
          Gerenciamento de cookies do navegador.
        </div>
        
        <div class="row q-gutter-md q-mb-md">
          <div class="col-12 col-md-4">
            <q-input v-model="cookieName" label="Nome do Cookie" />
          </div>
          <div class="col-12 col-md-4">
            <q-input v-model="cookieValue" label="Valor do Cookie" />
          </div>
          <div class="col-12 col-md-4">
            <q-input v-model="cookieExpires" type="number" label="Expiração (dias)" />
          </div>
        </div>
        
        <div class="q-gutter-md q-mb-md">
          <q-btn color="primary" label="Definir Cookie" @click="setCookie" />
          <q-btn color="secondary" label="Obter Cookie" @click="getCookie" />
          <q-btn color="negative" label="Remover Cookie" @click="removeCookie" />
          <q-btn color="warning" label="Listar Todos" @click="getAllCookies" />
        </div>
        
        <div class="text-caption">
          Resultado: {{ cookieResult }}
        </div>
      </q-card-section>
    </q-card>

    <!-- Dark Mode Plugin Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="brightness_6" class="q-mr-sm" />
          Dark Mode Plugin
        </div>
        <div class="text-body2 q-mb-md">
          Controle do modo escuro da aplicação.
        </div>
        
        <div class="q-gutter-md q-mb-md">
          <q-btn 
            :color="$q.dark.isActive ? 'orange' : 'primary'"
            :label="$q.dark.isActive ? 'Modo Claro' : 'Modo Escuro'"
            :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
            @click="$q.dark.toggle()"
          />
          <q-btn color="secondary" label="Definir Claro" @click="$q.dark.set(false)" />
          <q-btn color="grey-8" label="Definir Escuro" @click="$q.dark.set(true)" />
          <q-btn color="purple" label="Auto (Sistema)" @click="$q.dark.set('auto')" />
        </div>
        
        <div class="text-caption">
          Estado atual: {{ $q.dark.isActive ? 'Modo Escuro' : 'Modo Claro' }}
        </div>
      </q-card-section>
    </q-card>

    <!-- Platform Plugin Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="devices" class="q-mr-sm" />
          Platform Plugin
        </div>
        <div class="text-body2 q-mb-md">
          Detecção de plataforma e características do dispositivo.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <q-list bordered>
              <q-item-label header>Informações da Plataforma</q-item-label>
              <q-item>
                <q-item-section>
                  <q-item-label>Sistema Operacional</q-item-label>
                  <q-item-label caption>{{ getPlatformOS() }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Navegador</q-item-label>
                  <q-item-label caption>{{ getPlatformBrowser() }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Tipo de Dispositivo</q-item-label>
                  <q-item-label caption>{{ getDeviceType() }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Touch Screen</q-item-label>
                  <q-item-label caption>{{ $q.platform.has.touch ? 'Sim' : 'Não' }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          
          <div class="col-12 col-md-6">
            <q-list bordered>
              <q-item-label header>Características</q-item-label>
              <q-item v-for="feature in platformFeatures" :key="feature.name">
                <q-item-section avatar>
                  <q-icon 
                    :name="feature.value ? 'check_circle' : 'cancel'"
                    :color="feature.value ? 'positive' : 'negative'"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ feature.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Meta Plugin Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="info" class="q-mr-sm" />
          Meta Plugin
        </div>
        <div class="text-body2 q-mb-md">
          Gerenciamento dinâmico de meta tags da página.
        </div>
        
        <div class="row q-gutter-md q-mb-md">
          <div class="col-12 col-md-6">
            <q-input v-model="metaTitle" label="Título da Página" />
          </div>
          <div class="col-12 col-md-6">
            <q-input v-model="metaDescription" label="Descrição" />
          </div>
        </div>
        
        <div class="q-gutter-md">
          <q-btn color="primary" label="Atualizar Meta Tags" @click="updateMetaTags" />
          <q-btn color="secondary" label="Resetar" @click="resetMetaTags" />
        </div>
      </q-card-section>
    </q-card>

    <!-- App Visibility Plugin Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="visibility" class="q-mr-sm" />
          App Visibility Plugin
        </div>
        <div class="text-body2 q-mb-md">
          Detecta quando a aplicação está visível ou oculta.
        </div>
        
        <div class="text-body1">
          Estado da aplicação: 
          <q-chip 
            :color="$q.appVisible ? 'positive' : 'negative'"
            text-color="white"
            :icon="$q.appVisible ? 'visibility' : 'visibility_off'"
          >
            {{ $q.appVisible ? 'Visível' : 'Oculta' }}
          </q-chip>
        </div>
        
        <div class="text-caption q-mt-sm">
          Mude para outra aba ou minimize a janela para testar.
        </div>
      </q-card-section>
    </q-card>

    <!-- Bottom Sheet Plugin Section -->
    <q-card>
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="vertical_align_bottom" class="q-mr-sm" />
          Bottom Sheet Plugin
        </div>
        <div class="text-body2 q-mb-md">
          Painel que desliza a partir da parte inferior da tela.
        </div>
        
        <div class="q-gutter-md">
          <q-btn color="primary" label="Bottom Sheet Simples" @click="showSimpleBottomSheet" />
          <q-btn color="secondary" label="Com Lista" @click="showListBottomSheet" />
          <q-btn color="positive" label="Com Grid" @click="showGridBottomSheet" />
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

// Storage values
const localStorageValue = ref('');
const sessionStorageValue = ref('');
const localStorageDisplay = ref('Nenhum valor');
const sessionStorageDisplay = ref('Nenhum valor');

// Cookie values
const cookieName = ref('test-cookie');
const cookieValue = ref('test-value');
const cookieExpires = ref(7);
const cookieResult = ref('Nenhuma operação realizada');

// Meta values
const metaTitle = ref('Quasar Reference Project');
const metaDescription = ref('Projeto de referência completo do Quasar Framework');

// Platform features
const platformFeatures = computed(() => [
  { name: 'Touch', value: $q.platform.has.touch },
  { name: 'WebStorage', value: $q.platform.has.webStorage }
]);

// Notify functions
function showSuccessNotify() {
  $q.notify({
    type: 'positive',
    message: 'Operação realizada com sucesso!',
    icon: 'check_circle'
  });
}

function showErrorNotify() {
  $q.notify({
    type: 'negative',
    message: 'Erro ao realizar operação!',
    icon: 'error'
  });
}

function showWarningNotify() {
  $q.notify({
    type: 'warning',
    message: 'Atenção: Verifique os dados!',
    icon: 'warning'
  });
}

function showInfoNotify() {
  $q.notify({
    type: 'info',
    message: 'Informação importante',
    icon: 'info'
  });
}

function showCustomNotify() {
  $q.notify({
    color: 'purple',
    textColor: 'white',
    icon: 'star',
    message: 'Notificação customizada!',
    timeout: 3000,
    progress: true
  });
}

function showActionNotify() {
  $q.notify({
    message: 'Você tem uma nova mensagem',
    icon: 'mail',
    color: 'primary',
    actions: [
      {
        label: 'Ver',
        color: 'white',
        handler: () => {
          $q.notify('Abrindo mensagem...');
        }
      },
      {
        label: 'Fechar',
        color: 'white',
        handler: () => {}
      }
    ]
  });
}

function showPositionNotify() {
  $q.notify({
    message: 'Notificação no centro',
    position: 'center',
    color: 'teal'
  });
}

function showMultilineNotify() {
  $q.notify({
    message: 'Esta é uma notificação com múltiplas linhas de texto para demonstrar como o componente se comporta com conteúdo maior.',
    multiLine: true,
    color: 'purple',
    timeout: 5000
  });
}

// Dialog functions
function showAlert() {
  $q.dialog({
    title: 'Alerta',
    message: 'Esta é uma mensagem de alerta simples.',
    ok: 'Entendi'
  });
}

function showConfirm() {
  $q.dialog({
    title: 'Confirmação',
    message: 'Você tem certeza que deseja continuar?',
    cancel: true,
    persistent: true
  }).onOk(() => {
    $q.notify('Confirmado!');
  }).onCancel(() => {
    $q.notify('Cancelado!');
  });
}

function showPrompt() {
  $q.dialog({
    title: 'Prompt',
    message: 'Digite seu nome:',
    prompt: {
      model: '',
      type: 'text'
    },
    cancel: true,
    persistent: true
  }).onOk(data => {
    $q.notify(`Olá, ${data}!`);
  });
}

function showCustomDialog() {
  $q.dialog({
    title: 'Dialog Customizado',
    message: 'Este dialog tem opções customizadas.',
    options: {
      type: 'checkbox',
      model: [],
      items: [
        { label: 'Opção 1', value: 'opt1' },
        { label: 'Opção 2', value: 'opt2' },
        { label: 'Opção 3', value: 'opt3' }
      ]
    },
    cancel: true
  }).onOk(data => {
    $q.notify(`Selecionado: ${data.join(', ')}`);
  });
}

// Loading functions
function showSimpleLoading() {
  $q.loading.show();
  setTimeout(() => {
    $q.loading.hide();
  }, 2000);
}

function showMessageLoading() {
  $q.loading.show({
    message: 'Carregando dados...',
    boxClass: 'bg-grey-2 text-grey-9',
    spinnerColor: 'primary'
  });
  setTimeout(() => {
    $q.loading.hide();
  }, 3000);
}

function showCustomLoading() {
  $q.loading.show({
    spinnerColor: 'red',
    spinnerSize: 140,
    backgroundColor: 'purple',
    message: 'Processando...',
    messageColor: 'white'
  });
  setTimeout(() => {
    $q.loading.hide();
  }, 4000);
}

function showDelayLoading() {
  $q.loading.show({
    delay: 1000,
    message: 'Loading com delay de 1 segundo'
  });
  setTimeout(() => {
    $q.loading.hide();
  }, 5000);
}

// LoadingBar functions
function startLoadingBar() {
  $q.loadingBar.start();
}

function incrementLoadingBar() {
  $q.loadingBar.increment(0.2);
}

function stopLoadingBar() {
  $q.loadingBar.stop();
}

function simulateError() {
  $q.loadingBar.start();
  setTimeout(() => {
    $q.loadingBar.stop();
    $q.notify({
      type: 'negative',
      message: 'Erro simulado!'
    });
  }, 1000);
}

// Storage functions
function saveToLocalStorage() {
  $q.localStorage.set('quasar-demo', localStorageValue.value);
  $q.notify('Salvo no LocalStorage!');
  loadFromLocalStorage();
}

function loadFromLocalStorage() {
  const value = $q.localStorage.getItem('quasar-demo');
  localStorageDisplay.value = value ? (typeof value === 'string' ? value : JSON.stringify(value)) : 'Nenhum valor';
}

function removeFromLocalStorage() {
  $q.localStorage.remove('quasar-demo');
  localStorageDisplay.value = 'Nenhum valor';
  $q.notify('Removido do LocalStorage!');
}

function clearLocalStorage() {
  $q.localStorage.clear();
  localStorageDisplay.value = 'Nenhum valor';
  $q.notify('LocalStorage limpo!');
}

function saveToSessionStorage() {
  $q.sessionStorage.set('quasar-demo', sessionStorageValue.value);
  $q.notify('Salvo no SessionStorage!');
  loadFromSessionStorage();
}

function loadFromSessionStorage() {
  const value = $q.sessionStorage.getItem('quasar-demo');
  sessionStorageDisplay.value = value ? (typeof value === 'string' ? value : JSON.stringify(value)) : 'Nenhum valor';
}

function removeFromSessionStorage() {
  $q.sessionStorage.remove('quasar-demo');
  sessionStorageDisplay.value = 'Nenhum valor';
  $q.notify('Removido do SessionStorage!');
}

function clearSessionStorage() {
  $q.sessionStorage.clear();
  sessionStorageDisplay.value = 'Nenhum valor';
  $q.notify('SessionStorage limpo!');
}

// Cookie functions
function setCookie() {
  $q.cookies.set(cookieName.value, cookieValue.value, {
    expires: cookieExpires.value
  });
  cookieResult.value = `Cookie '${cookieName.value}' definido com valor '${cookieValue.value}'`;
  $q.notify('Cookie definido!');
}

function getCookie() {
  const value = $q.cookies.get(cookieName.value);
  cookieResult.value = value ? `Valor: ${value}` : 'Cookie não encontrado';
}

function removeCookie() {
  $q.cookies.remove(cookieName.value);
  cookieResult.value = `Cookie '${cookieName.value}' removido`;
  $q.notify('Cookie removido!');
}

function getAllCookies() {
  const cookies = $q.cookies.getAll();
  cookieResult.value = `Cookies: ${JSON.stringify(cookies, null, 2)}`;
}

// Platform functions
function getPlatformOS() {
  if ($q.platform.is.win) return 'Windows';
  if ($q.platform.is.mac) return 'macOS';
  if ($q.platform.is.linux) return 'Linux';
  if ($q.platform.is.android) return 'Android';
  if ($q.platform.is.ios) return 'iOS';
  return 'Desconhecido';
}

function getPlatformBrowser() {
  if ($q.platform.is.chrome) return 'Chrome';
  if ($q.platform.is.firefox) return 'Firefox';
  if ($q.platform.is.safari) return 'Safari';
  if ($q.platform.is.edge) return 'Edge';
  if ($q.platform.is.ie) return 'Internet Explorer';
  return 'Desconhecido';
}

function getDeviceType() {
  if ($q.platform.is.mobile) return 'Mobile';
  if ($q.platform.is.desktop) return 'Desktop';
  return 'Desconhecido';
}

// Meta functions
function updateMetaTags() {
  // Simulação de atualização de meta tags
  document.title = metaTitle.value;
  const metaDescriptionEl = document.querySelector('meta[name="description"]');
  if (metaDescriptionEl) {
    metaDescriptionEl.setAttribute('content', metaDescription.value);
  }
  $q.notify('Meta tags atualizadas!');
}

function resetMetaTags() {
  metaTitle.value = 'Quasar Reference Project';
  metaDescription.value = 'Projeto de referência completo do Quasar Framework';
  updateMetaTags();
}

// Bottom Sheet functions
function showSimpleBottomSheet() {
  $q.bottomSheet({
    message: 'Este é um Bottom Sheet simples',
    actions: [
      {
        label: 'Ação 1',
        icon: 'star',
        id: 'action1'
      },
      {
        label: 'Ação 2',
        icon: 'favorite',
        id: 'action2'
      },
      {},
      {
        label: 'Cancelar',
        icon: 'cancel',
        color: 'negative',
        id: 'cancel'
      }
    ]
  }).onOk(action => {
    $q.notify(`Ação selecionada: ${action.label}`);
  });
}

function showListBottomSheet() {
  $q.bottomSheet({
    title: 'Selecione uma opção',
    grid: false,
    actions: [
      { label: 'Compartilhar', icon: 'share' },
      { label: 'Copiar Link', icon: 'link' },
      { label: 'Editar', icon: 'edit' },
      { label: 'Excluir', icon: 'delete', color: 'negative' }
    ]
  }).onOk(action => {
    $q.notify(`${action.label} selecionado`);
  });
}

function showGridBottomSheet() {
  $q.bottomSheet({
    title: 'Escolha uma ação',
    grid: true,
    actions: [
      { label: 'Câmera', icon: 'camera_alt' },
      { label: 'Galeria', icon: 'photo_library' },
      { label: 'Arquivo', icon: 'attach_file' },
      { label: 'Localização', icon: 'location_on' },
      { label: 'Contato', icon: 'contact_phone' },
      { label: 'Calendário', icon: 'event' }
    ]
  }).onOk(action => {
    $q.notify(`${action.label} selecionado`);
  });
}

// Load initial storage values
loadFromLocalStorage();
loadFromSessionStorage();
</script>