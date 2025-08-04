<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 q-mb-lg">
      <q-icon name="view_quilt" class="q-mr-sm" />
      Sistema de Layout
    </div>

    <!-- Grid System Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Sistema de Grid</div>
        <div class="text-subtitle2 q-mb-sm">Grid Básico (12 colunas)</div>
        <div class="row q-gutter-sm q-mb-md">
          <div class="col-1 bg-primary text-white text-center q-pa-sm">1</div>
          <div class="col-1 bg-secondary text-white text-center q-pa-sm">1</div>
          <div class="col-1 bg-positive text-white text-center q-pa-sm">1</div>
          <div class="col-1 bg-negative text-white text-center q-pa-sm">1</div>
          <div class="col-1 bg-warning text-white text-center q-pa-sm">1</div>
          <div class="col-1 bg-info text-white text-center q-pa-sm">1</div>
          <div class="col-1 bg-primary text-white text-center q-pa-sm">1</div>
          <div class="col-1 bg-secondary text-white text-center q-pa-sm">1</div>
          <div class="col-1 bg-positive text-white text-center q-pa-sm">1</div>
          <div class="col-1 bg-negative text-white text-center q-pa-sm">1</div>
          <div class="col-1 bg-warning text-white text-center q-pa-sm">1</div>
          <div class="col-1 bg-info text-white text-center q-pa-sm">1</div>
        </div>

        <div class="text-subtitle2 q-mb-sm">Colunas Variadas</div>
        <div class="row q-gutter-sm q-mb-md">
          <div class="col-6 bg-primary text-white text-center q-pa-sm">col-6</div>
          <div class="col-6 bg-secondary text-white text-center q-pa-sm">col-6</div>
        </div>
        <div class="row q-gutter-sm q-mb-md">
          <div class="col-4 bg-positive text-white text-center q-pa-sm">col-4</div>
          <div class="col-4 bg-negative text-white text-center q-pa-sm">col-4</div>
          <div class="col-4 bg-warning text-white text-center q-pa-sm">col-4</div>
        </div>
        <div class="row q-gutter-sm q-mb-md">
          <div class="col-3 bg-info text-white text-center q-pa-sm">col-3</div>
          <div class="col-6 bg-primary text-white text-center q-pa-sm">col-6</div>
          <div class="col-3 bg-secondary text-white text-center q-pa-sm">col-3</div>
        </div>

        <div class="text-subtitle2 q-mb-sm">Grid Responsivo</div>
        <div class="row q-gutter-sm">
          <div class="col-12 col-md-6 col-lg-3 bg-primary text-white text-center q-pa-sm">
            col-12 col-md-6 col-lg-3
          </div>
          <div class="col-12 col-md-6 col-lg-3 bg-secondary text-white text-center q-pa-sm">
            col-12 col-md-6 col-lg-3
          </div>
          <div class="col-12 col-md-6 col-lg-3 bg-positive text-white text-center q-pa-sm">
            col-12 col-md-6 col-lg-3
          </div>
          <div class="col-12 col-md-6 col-lg-3 bg-negative text-white text-center q-pa-sm">
            col-12 col-md-6 col-lg-3
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Flexbox Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Flexbox Utilities</div>
        
        <div class="text-subtitle2 q-mb-sm">Alinhamento Horizontal</div>
        <div class="row justify-start bg-grey-2 q-pa-sm q-mb-sm">
          <div class="bg-primary text-white q-pa-sm">justify-start</div>
        </div>
        <div class="row justify-center bg-grey-2 q-pa-sm q-mb-sm">
          <div class="bg-secondary text-white q-pa-sm">justify-center</div>
        </div>
        <div class="row justify-end bg-grey-2 q-pa-sm q-mb-sm">
          <div class="bg-positive text-white q-pa-sm">justify-end</div>
        </div>
        <div class="row justify-around bg-grey-2 q-pa-sm q-mb-sm">
          <div class="bg-negative text-white q-pa-sm">Item 1</div>
          <div class="bg-warning text-white q-pa-sm">Item 2</div>
          <div class="bg-info text-white q-pa-sm">Item 3</div>
        </div>
        <div class="row justify-between bg-grey-2 q-pa-sm q-mb-md">
          <div class="bg-primary text-white q-pa-sm">justify-between</div>
          <div class="bg-secondary text-white q-pa-sm">justify-between</div>
        </div>

        <div class="text-subtitle2 q-mb-sm">Alinhamento Vertical</div>
        <div class="row items-start bg-grey-2 q-pa-sm q-mb-sm" style="height: 80px">
          <div class="bg-primary text-white q-pa-sm">items-start</div>
        </div>
        <div class="row items-center bg-grey-2 q-pa-sm q-mb-sm" style="height: 80px">
          <div class="bg-secondary text-white q-pa-sm">items-center</div>
        </div>
        <div class="row items-end bg-grey-2 q-pa-sm q-mb-sm" style="height: 80px">
          <div class="bg-positive text-white q-pa-sm">items-end</div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Spacing Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Sistema de Espaçamento</div>
        
        <div class="text-subtitle2 q-mb-sm">Padding</div>
        <div class="row q-gutter-md q-mb-md">
          <div class="bg-primary text-white q-pa-none">q-pa-none</div>
          <div class="bg-secondary text-white q-pa-xs">q-pa-xs</div>
          <div class="bg-positive text-white q-pa-sm">q-pa-sm</div>
          <div class="bg-negative text-white q-pa-md">q-pa-md</div>
          <div class="bg-warning text-white q-pa-lg">q-pa-lg</div>
          <div class="bg-info text-white q-pa-xl">q-pa-xl</div>
        </div>

        <div class="text-subtitle2 q-mb-sm">Margin</div>
        <div class="bg-grey-2 q-pa-md">
          <div class="bg-primary text-white q-pa-sm q-ma-none">q-ma-none</div>
          <div class="bg-secondary text-white q-pa-sm q-ma-xs">q-ma-xs</div>
          <div class="bg-positive text-white q-pa-sm q-ma-sm">q-ma-sm</div>
          <div class="bg-negative text-white q-pa-sm q-ma-md">q-ma-md</div>
        </div>

        <div class="text-subtitle2 q-mb-sm q-mt-md">Gutter (Espaçamento entre elementos)</div>
        <div class="row q-gutter-xs q-mb-sm">
          <div class="col bg-primary text-white text-center q-pa-sm">q-gutter-xs</div>
          <div class="col bg-secondary text-white text-center q-pa-sm">q-gutter-xs</div>
          <div class="col bg-positive text-white text-center q-pa-sm">q-gutter-xs</div>
        </div>
        <div class="row q-gutter-md q-mb-sm">
          <div class="col bg-negative text-white text-center q-pa-sm">q-gutter-md</div>
          <div class="col bg-warning text-white text-center q-pa-sm">q-gutter-md</div>
          <div class="col bg-info text-white text-center q-pa-sm">q-gutter-md</div>
        </div>
        <div class="row q-gutter-lg">
          <div class="col bg-primary text-white text-center q-pa-sm">q-gutter-lg</div>
          <div class="col bg-secondary text-white text-center q-pa-sm">q-gutter-lg</div>
          <div class="col bg-positive text-white text-center q-pa-sm">q-gutter-lg</div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Visibility Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Visibilidade Responsiva</div>
        
        <div class="text-subtitle2 q-mb-sm">Breakpoints</div>
        <div class="q-gutter-sm">
          <div class="bg-primary text-white q-pa-sm lt-sm">Visível apenas em telas muito pequenas (lt-sm)</div>
          <div class="bg-secondary text-white q-pa-sm gt-xs">Visível em telas pequenas e maiores (gt-xs)</div>
          <div class="bg-positive text-white q-pa-sm lt-md">Visível apenas em telas pequenas e médias (lt-md)</div>
          <div class="bg-negative text-white q-pa-sm gt-sm">Visível em telas médias e maiores (gt-sm)</div>
          <div class="bg-warning text-white q-pa-sm gt-md">Visível apenas em telas grandes (gt-md)</div>
        </div>

        <div class="text-subtitle2 q-mb-sm q-mt-md">Informações dos Breakpoints</div>
        <q-list bordered>
          <q-item>
            <q-item-section>
              <q-item-label>xs</q-item-label>
              <q-item-label caption>0px - 599px (Extra Small)</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>sm</q-item-label>
              <q-item-label caption>600px - 1023px (Small)</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>md</q-item-label>
              <q-item-label caption>1024px - 1439px (Medium)</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>lg</q-item-label>
              <q-item-label caption>1440px - 1919px (Large)</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>xl</q-item-label>
              <q-item-label caption>1920px+ (Extra Large)</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <!-- Layout Components Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Componentes de Layout</div>
        
        <div class="text-subtitle2 q-mb-sm">Page Container</div>
        <div class="bg-grey-2 q-pa-md q-mb-md">
          <div class="bg-primary text-white q-pa-sm text-center">
            q-page-container (Contêiner principal das páginas)
          </div>
        </div>

        <div class="text-subtitle2 q-mb-sm">Header e Footer</div>
        <div class="bg-grey-2 q-pa-md q-mb-md">
          <div class="bg-primary text-white q-pa-sm text-center q-mb-sm">
            q-header (Cabeçalho fixo)
          </div>
          <div class="bg-grey-4 q-pa-lg text-center q-mb-sm">
            Conteúdo da página
          </div>
          <div class="bg-secondary text-white q-pa-sm text-center">
            q-footer (Rodapé fixo)
          </div>
        </div>

        <div class="text-subtitle2 q-mb-sm">Drawer (Menu Lateral)</div>
        <div class="row bg-grey-2 q-pa-md" style="height: 200px">
          <div class="col-3 bg-primary text-white q-pa-sm">
            q-drawer<br>
            (Menu lateral)
          </div>
          <div class="col-9 bg-grey-4 q-pa-sm">
            Conteúdo principal da aplicação
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Interactive Layout Demo -->
    <q-card>
      <q-card-section>
        <div class="text-h6 q-mb-md">Demo Interativo</div>
        
        <div class="text-subtitle2 q-mb-sm">Controles</div>
        <div class="q-gutter-md q-mb-md">
          <q-btn-toggle
            v-model="layoutDemo.justify"
            :options="justifyOptions"
            color="primary"
            toggle-color="white"
          />
          <q-btn-toggle
            v-model="layoutDemo.align"
            :options="alignOptions"
            color="secondary"
            toggle-color="white"
          />
        </div>

        <div class="text-subtitle2 q-mb-sm">Resultado</div>
        <div 
          :class="`row ${layoutDemo.justify} ${layoutDemo.align} bg-grey-2 q-pa-md`"
          style="height: 150px"
        >
          <div class="bg-primary text-white q-pa-sm">Item 1</div>
          <div class="bg-secondary text-white q-pa-sm">Item 2</div>
          <div class="bg-positive text-white q-pa-sm">Item 3</div>
        </div>

        <div class="text-caption q-mt-sm">
          Classes aplicadas: row {{ layoutDemo.justify }} {{ layoutDemo.align }}
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const layoutDemo = ref({
  justify: 'justify-start',
  align: 'items-start'
});

const justifyOptions = ref([
  { label: 'Start', value: 'justify-start' },
  { label: 'Center', value: 'justify-center' },
  { label: 'End', value: 'justify-end' },
  { label: 'Around', value: 'justify-around' },
  { label: 'Between', value: 'justify-between' },
  { label: 'Evenly', value: 'justify-evenly' }
]);

const alignOptions = ref([
  { label: 'Start', value: 'items-start' },
  { label: 'Center', value: 'items-center' },
  { label: 'End', value: 'items-end' },
  { label: 'Stretch', value: 'items-stretch' }
]);
</script>