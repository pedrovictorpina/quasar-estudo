<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 q-mb-lg">
      <q-icon name="functions" class="q-mr-sm" />
      Composables
    </div>

    <!-- useQuasar Composable -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="settings" class="q-mr-sm" />
          useQuasar
        </div>
        <div class="text-body2 q-mb-md">
          Acesso às configurações e funcionalidades globais do Quasar.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Informações da Plataforma</div>
            <q-list bordered>
              <q-item>
                <q-item-section>
                  <q-item-label>Plataforma</q-item-label>
                  <q-item-label caption>{{ $q.platform.is.name }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Mobile</q-item-label>
                  <q-item-label caption>{{ $q.platform.is.mobile ? 'Sim' : 'Não' }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Desktop</q-item-label>
                  <q-item-label caption>{{ $q.platform.is.desktop ? 'Sim' : 'Não' }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Touch</q-item-label>
                  <q-item-label caption>{{ $q.platform.has.touch ? 'Sim' : 'Não' }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Configurações do Quasar</div>
            <q-list bordered>
              <q-item>
                <q-item-section>
                  <q-item-label>Versão</q-item-label>
                  <q-item-label caption>{{ $q.version }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Modo Escuro</q-item-label>
                  <q-item-label caption>{{ $q.dark.isActive ? 'Ativo' : 'Inativo' }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-toggle v-model="$q.dark.isActive" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Idioma</q-item-label>
                  <q-item-label caption>{{ $q.lang.isoName }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Ícones</q-item-label>
                  <q-item-label caption>{{ $q.iconSet.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>

        <div class="q-mt-md">
          <div class="text-subtitle2 q-mb-sm">Ações do Quasar</div>
          <div class="q-gutter-sm">
            <q-btn 
              @click="showNotification" 
              color="primary" 
              label="Mostrar Notificação" 
              icon="notifications"
            />
            <q-btn 
              @click="showDialog" 
              color="secondary" 
              label="Mostrar Dialog" 
              icon="chat"
            />
            <q-btn 
              @click="showLoading" 
              color="positive" 
              label="Mostrar Loading" 
              icon="hourglass_empty"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- useMeta Composable -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="description" class="q-mr-sm" />
          useMeta
        </div>
        <div class="text-body2 q-mb-md">
          Gerenciamento dinâmico de meta tags da página.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Configurar Meta Tags</div>
            <q-form @submit="updateMeta" class="q-gutter-md">
              <q-input 
                v-model="metaForm.title" 
                label="Título da Página" 
                outlined
              />
              <q-input 
                v-model="metaForm.description" 
                label="Descrição" 
                type="textarea" 
                outlined
              />
              <q-input 
                v-model="metaForm.keywords" 
                label="Palavras-chave" 
                outlined
              />
              <q-btn 
                type="submit" 
                color="primary" 
                label="Atualizar Meta" 
                icon="update"
              />
            </q-form>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Meta Tags Atuais</div>
            <q-list bordered>
              <q-item>
                <q-item-section>
                  <q-item-label>Título</q-item-label>
                  <q-item-label caption>{{ currentMeta.title }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Descrição</q-item-label>
                  <q-item-label caption>{{ currentMeta.description }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Palavras-chave</q-item-label>
                  <q-item-label caption>{{ currentMeta.keywords }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <div class="text-caption q-mt-sm">
              Verifique o título da aba do navegador e o código fonte da página.
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Custom Composables -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="build" class="q-mr-sm" />
          Composables Customizados
        </div>
        <div class="text-body2 q-mb-md">
          Exemplos de composables personalizados para funcionalidades comuns.
        </div>
        
        <!-- useCounter Composable -->
        <div class="q-mb-lg">
          <div class="text-subtitle2 q-mb-sm">useCounter</div>
          <div class="row q-gutter-md">
            <div class="col-12 col-md-4">
              <q-card flat bordered>
                <q-card-section class="text-center">
                  <div class="text-h3 q-mb-sm">{{ counter.count }}</div>
                  <div class="q-gutter-sm">
                    <q-btn 
                      @click="counter.increment" 
                      color="positive" 
                      icon="add" 
                      round
                    />
                    <q-btn 
                      @click="counter.decrement" 
                      color="negative" 
                      icon="remove" 
                      round
                    />
                    <q-btn 
                      @click="counter.reset" 
                      color="grey" 
                      icon="refresh" 
                      round
                    />
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <div class="col-12 col-md-8">
              <q-code language="typescript">
{{ counterCode }}
              </q-code>
            </div>
          </div>
        </div>

        <!-- useLocalStorage Composable -->
        <div class="q-mb-lg">
          <div class="text-subtitle2 q-mb-sm">useLocalStorage</div>
          <div class="row q-gutter-md">
            <div class="col-12 col-md-6">
              <q-input 
                v-model="localStorageValue" 
                label="Valor no LocalStorage" 
                outlined
                @update:model-value="updateLocalStorage"
              />
              <div class="text-caption q-mt-sm">
                Este valor é persistido no localStorage e será mantido após recarregar a página.
              </div>
            </div>

            <div class="col-12 col-md-6">
              <q-code language="typescript">
{{ localStorageCode }}
              </q-code>
            </div>
          </div>
        </div>

        <!-- useToggle Composable -->
        <div class="q-mb-lg">
          <div class="text-subtitle2 q-mb-sm">useToggle</div>
          <div class="row q-gutter-md">
            <div class="col-12 col-md-4">
              <div class="text-center">
                <div class="q-mb-md">
                  <q-icon 
                    :name="toggle.value ? 'lightbulb' : 'lightbulb_outline'" 
                    :color="toggle.value ? 'yellow' : 'grey'" 
                    size="4em"
                  />
                </div>
                <div class="text-h6 q-mb-sm">
                  {{ toggle.value ? 'Ligado' : 'Desligado' }}
                </div>
                <q-btn 
                  @click="toggle.toggle" 
                  :color="toggle.value ? 'negative' : 'positive'" 
                  :label="toggle.value ? 'Desligar' : 'Ligar'"
                  :icon="toggle.value ? 'power_off' : 'power'"
                />
              </div>
            </div>

            <div class="col-12 col-md-8">
              <q-code language="typescript">
{{ toggleCode }}
              </q-code>
            </div>
          </div>
        </div>

        <!-- useAsync Composable -->
        <div>
          <div class="text-subtitle2 q-mb-sm">useAsync</div>
          <div class="row q-gutter-md">
            <div class="col-12 col-md-6">
              <div class="text-center">
                <q-btn 
                  @click="asyncOperation.execute" 
                  color="primary" 
                  label="Executar Operação Async" 
                  icon="cloud_download"
                  :loading="asyncOperation.loading.value"
                  :disable="asyncOperation.loading.value"
                />
                
                <div v-if="asyncOperation.error" class="text-negative q-mt-md">
                  <q-icon name="error" class="q-mr-sm" />
                  Erro: {{ asyncOperation.error }}
                </div>
                
                <div v-if="asyncOperation.data" class="q-mt-md">
                  <q-card flat bordered>
                    <q-card-section>
                      <div class="text-h6">Dados Carregados:</div>
                      <div class="text-body2">{{ asyncOperation.data }}</div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <q-code language="typescript">
{{ asyncCode }}
              </q-code>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Reactive Utilities -->
    <q-card>
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="sync" class="q-mr-sm" />
          Utilitários Reativos
        </div>
        <div class="text-body2 q-mb-md">
          Demonstração de utilitários reativos do Vue 3 integrados com Quasar.
        </div>
        
        <div class="row q-gutter-md">
          <!-- Computed -->
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Computed Properties</div>
            <q-card flat bordered>
              <q-card-section>
                <q-input 
                  v-model="firstName" 
                  label="Primeiro Nome" 
                  outlined
                  class="q-mb-md"
                />
                <q-input 
                  v-model="lastName" 
                  label="Último Nome" 
                  outlined
                  class="q-mb-md"
                />
                <div class="text-h6">
                  Nome Completo: {{ fullName }}
                </div>
                <div class="text-caption">
                  Atualizado automaticamente quando os campos mudam
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Watch -->
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Watchers</div>
            <q-card flat bordered>
              <q-card-section>
                <q-slider 
                  v-model="sliderValue" 
                  :min="0" 
                  :max="100" 
                  label
                  class="q-mb-md"
                />
                <div class="text-h6 q-mb-sm">
                  Valor: {{ sliderValue }}
                </div>
                <q-linear-progress 
                  :value="sliderValue / 100" 
                  :color="getProgressColor(sliderValue)" 
                  size="20px"
                  class="q-mb-md"
                />
                <div class="text-caption">
                  Mudanças detectadas: {{ watchCount }}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- Lifecycle -->
        <div class="q-mt-lg">
          <div class="text-subtitle2 q-mb-sm">Lifecycle Hooks</div>
          <q-timeline color="primary">
            <q-timeline-entry 
              v-for="(hook, index) in lifecycleHooks" 
              :key="index"
              :title="hook.name"
              :subtitle="hook.description"
              :icon="hook.executed ? 'check_circle' : 'schedule'"
              :color="hook.executed ? 'positive' : 'grey'"
            >
              <div class="text-caption">
                {{ hook.executed ? `Executado em: ${hook.timestamp}` : 'Aguardando execução' }}
              </div>
            </q-timeline-entry>
          </q-timeline>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUpdated, onUnmounted } from 'vue';
import { useQuasar, useMeta } from 'quasar';

const $q = useQuasar();

// Meta management
const metaForm = ref({
  title: 'Composables - Quasar Reference',
  description: 'Demonstração dos composables do Quasar Framework',
  keywords: 'quasar, vue, composables, typescript'
});

const currentMeta = ref({ ...metaForm.value });

function updateMeta() {
  useMeta({
    title: metaForm.value.title,
    meta: {
      description: { name: 'description', content: metaForm.value.description },
      keywords: { name: 'keywords', content: metaForm.value.keywords }
    }
  });
  currentMeta.value = { ...metaForm.value };
  $q.notify({
    type: 'positive',
    message: 'Meta tags atualizadas!',
    position: 'top'
  });
}

// Quasar actions
function showNotification() {
  $q.notify({
    type: 'info',
    message: 'Esta é uma notificação do Quasar!',
    caption: 'Usando o plugin Notify',
    actions: [
      { label: 'Fechar', color: 'white', handler: () => {} }
    ]
  });
}

function showDialog() {
  $q.dialog({
    title: 'Dialog do Quasar',
    message: 'Este é um dialog criado usando o plugin Dialog do Quasar.',
    ok: 'Entendi',
    cancel: 'Cancelar'
  }).onOk(() => {
    $q.notify('Você clicou em OK!');
  }).onCancel(() => {
    $q.notify('Dialog cancelado');
  });
}

function showLoading() {
  $q.loading.show({
    message: 'Carregando dados...',
    boxClass: 'bg-grey-2 text-grey-9',
    spinnerColor: 'primary'
  });
  
  setTimeout(() => {
    $q.loading.hide();
    $q.notify({
      type: 'positive',
      message: 'Carregamento concluído!'
    });
  }, 2000);
}

// Custom Composables

// useCounter
function useCounter(initialValue = 0) {
  const count = ref(initialValue);
  
  const increment = () => count.value++;
  const decrement = () => count.value--;
  const reset = () => count.value = initialValue;
  
  return { count, increment, decrement, reset };
}

const counter = useCounter(0);

// useLocalStorage
function useLocalStorage<T>(key: string, defaultValue: T) {
  const storedValue = localStorage.getItem(key);
  const value = ref(storedValue ? JSON.parse(storedValue) : defaultValue);

  const setValue = (newValue: T) => {
    value.value = newValue;
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  
  return { value, setValue };
}

const { value: localStorageValue, setValue: updateLocalStorage } = useLocalStorage<string | number | null>('quasar-demo', 'Valor inicial');

// useToggle
function useToggle(initialValue = false) {
  const value = ref(initialValue);
  
  const toggle = () => value.value = !value.value;
  const setTrue = () => value.value = true;
  const setFalse = () => value.value = false;
  
  return { value, toggle, setTrue, setFalse };
}

const toggle = useToggle(false);

// useAsync
function useAsync<T>(asyncFunction: () => Promise<T>) {
  const data = ref<T | null>(null);
  const error = ref<string | null>(null);
  const loading = ref(false);
  
  const execute = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      data.value = await asyncFunction();
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Erro desconhecido';
    } finally {
      loading.value = false;
    }
  };
  
  return { data, error, loading, execute };
}

const asyncOperation = useAsync(async () => {
  // Simula uma operação assíncrona
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  if (Math.random() > 0.7) {
    throw new Error('Erro simulado na operação');
  }
  
  return {
    id: Math.floor(Math.random() * 1000),
    message: 'Dados carregados com sucesso!',
    timestamp: new Date().toLocaleString()
  };
});

// Reactive utilities
const firstName = ref('João');
const lastName = ref('Silva');
const fullName = computed(() => `${firstName.value} ${lastName.value}`);

const sliderValue = ref(50);
const watchCount = ref(0);

watch(sliderValue, () => {
  watchCount.value++;
});

function getProgressColor(value: number) {
  if (value < 30) return 'negative';
  if (value < 70) return 'warning';
  return 'positive';
}

// Lifecycle hooks tracking
const lifecycleHooks = ref([
  { name: 'onMounted', description: 'Componente foi montado', executed: false, timestamp: '' },
  { name: 'onUpdated', description: 'Componente foi atualizado', executed: false, timestamp: '' },
  { name: 'onUnmounted', description: 'Componente será desmontado', executed: false, timestamp: '' }
]);

onMounted(() => {
  const hook = lifecycleHooks.value.find(h => h.name === 'onMounted');
  if (hook) {
    hook.executed = true;
    hook.timestamp = new Date().toLocaleTimeString();
  }
});

onUpdated(() => {
  const hook = lifecycleHooks.value.find(h => h.name === 'onUpdated');
  if (hook) {
    hook.executed = true;
    hook.timestamp = new Date().toLocaleTimeString();
  }
});

onUnmounted(() => {
  const hook = lifecycleHooks.value.find(h => h.name === 'onUnmounted');
  if (hook) {
    hook.executed = true;
    hook.timestamp = new Date().toLocaleTimeString();
  }
});

// Code examples
const counterCode = `function useCounter(initialValue = 0) {
  const count = ref(initialValue);
  
  const increment = () => count.value++;
  const decrement = () => count.value--;
  const reset = () => count.value = initialValue;
  
  return { count, increment, decrement, reset };
}

const counter = useCounter(0);`;

const localStorageCode = `function useLocalStorage(key: string, defaultValue: any) {
  const storedValue = localStorage.getItem(key);
  const value = ref(storedValue ? JSON.parse(storedValue) : defaultValue);
  
  const setValue = (newValue: any) => {
    value.value = newValue;
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  
  return { value, setValue };
}`;

const toggleCode = `function useToggle(initialValue = false) {
  const value = ref(initialValue);
  
  const toggle = () => value.value = !value.value;
  const setTrue = () => value.value = true;
  const setFalse = () => value.value = false;
  
  return { value, toggle, setTrue, setFalse };
}`;

const asyncCode = `function useAsync<T>(asyncFunction: () => Promise<T>) {
  const data = ref<T | null>(null);
  const error = ref<string | null>(null);
  const loading = ref(false);
  
  const execute = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      data.value = await asyncFunction();
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Erro desconhecido';
    } finally {
      loading.value = false;
    }
  };
  
  return { data, error, loading, execute };
}`;
</script>

<style scoped>
.q-code {
  font-size: 12px;
  max-height: 200px;
  overflow-y: auto;
}
</style>