<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 q-mb-lg">
      <q-icon name="build" class="q-mr-sm" />
      Utilitários
    </div>

    <!-- Spacing Utilities Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="space_bar" class="q-mr-sm" />
          Utilitários de Espaçamento
        </div>
        <div class="text-body2 q-mb-md">
          Classes para controlar padding, margin e gutter.
        </div>
        
        <!-- Padding Examples -->
        <div class="q-mb-lg">
          <div class="text-subtitle1 q-mb-sm">Padding</div>
          <div class="row q-gutter-md">
            <div class="col-12 col-md-3">
              <div class="text-caption q-mb-xs">q-pa-sm (small)</div>
              <div class="bg-blue-2 q-pa-sm border-demo">
                <div class="bg-blue-5 text-white text-center">Conteúdo</div>
              </div>
            </div>
            <div class="col-12 col-md-3">
              <div class="text-caption q-mb-xs">q-pa-md (medium)</div>
              <div class="bg-green-2 q-pa-md border-demo">
                <div class="bg-green-5 text-white text-center">Conteúdo</div>
              </div>
            </div>
            <div class="col-12 col-md-3">
              <div class="text-caption q-mb-xs">q-pa-lg (large)</div>
              <div class="bg-orange-2 q-pa-lg border-demo">
                <div class="bg-orange-5 text-white text-center">Conteúdo</div>
              </div>
            </div>
            <div class="col-12 col-md-3">
              <div class="text-caption q-mb-xs">q-pa-xl (extra large)</div>
              <div class="bg-purple-2 q-pa-xl border-demo">
                <div class="bg-purple-5 text-white text-center">Conteúdo</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Margin Examples -->
        <div class="q-mb-lg">
          <div class="text-subtitle1 q-mb-sm">Margin</div>
          <div class="bg-grey-2 q-pa-md">
            <div class="row q-gutter-md">
              <div class="col-12 col-md-3">
                <div class="text-caption q-mb-xs">q-ma-sm</div>
                <div class="bg-red-5 q-ma-sm text-white text-center">Elemento</div>
              </div>
              <div class="col-12 col-md-3">
                <div class="text-caption q-mb-xs">q-ma-md</div>
                <div class="bg-blue-5 q-ma-md text-white text-center">Elemento</div>
              </div>
              <div class="col-12 col-md-3">
                <div class="text-caption q-mb-xs">q-ma-lg</div>
                <div class="bg-green-5 q-ma-lg text-white text-center">Elemento</div>
              </div>
              <div class="col-12 col-md-3">
                <div class="text-caption q-mb-xs">q-ma-xl</div>
                <div class="bg-orange-5 q-ma-xl text-white text-center">Elemento</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Directional Spacing -->
        <div class="q-mb-lg">
          <div class="text-subtitle1 q-mb-sm">Espaçamento Direcional</div>
          <div class="row q-gutter-md">
            <div class="col-12 col-md-6">
              <div class="text-caption q-mb-xs">Padding Direcional</div>
              <div class="bg-grey-3 q-pa-md">
                <div class="bg-blue-2 q-pt-lg q-pb-sm q-pl-md q-pr-xl border-demo">
                  <div class="bg-blue-5 text-white text-center">
                    q-pt-lg q-pb-sm<br>
                    q-pl-md q-pr-xl
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="text-caption q-mb-xs">Margin Direcional</div>
              <div class="bg-grey-3 q-pa-md">
                <div class="bg-green-5 q-mt-lg q-mb-sm q-ml-md q-mr-xl text-white text-center">
                  q-mt-lg q-mb-sm<br>
                  q-ml-md q-mr-xl
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Typography Utilities Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="text_fields" class="q-mr-sm" />
          Utilitários de Tipografia
        </div>
        <div class="text-body2 q-mb-md">
          Classes para controlar texto, alinhamento e formatação.
        </div>
        
        <!-- Text Sizes -->
        <div class="q-mb-lg">
          <div class="text-subtitle1 q-mb-sm">Tamanhos de Texto</div>
          <div class="q-gutter-md">
            <div class="text-h1">text-h1 - Heading 1</div>
            <div class="text-h2">text-h2 - Heading 2</div>
            <div class="text-h3">text-h3 - Heading 3</div>
            <div class="text-h4">text-h4 - Heading 4</div>
            <div class="text-h5">text-h5 - Heading 5</div>
            <div class="text-h6">text-h6 - Heading 6</div>
            <div class="text-subtitle1">text-subtitle1 - Subtitle 1</div>
            <div class="text-subtitle2">text-subtitle2 - Subtitle 2</div>
            <div class="text-body1">text-body1 - Body 1 (padrão)</div>
            <div class="text-body2">text-body2 - Body 2</div>
            <div class="text-caption">text-caption - Caption</div>
            <div class="text-overline">text-overline - Overline</div>
          </div>
        </div>

        <!-- Text Alignment -->
        <div class="q-mb-lg">
          <div class="text-subtitle1 q-mb-sm">Alinhamento de Texto</div>
          <div class="q-gutter-md">
            <div class="bg-grey-2 q-pa-md">
              <div class="text-left q-mb-sm">text-left - Alinhado à esquerda</div>
              <div class="text-center q-mb-sm">text-center - Centralizado</div>
              <div class="text-right q-mb-sm">text-right - Alinhado à direita</div>
              <div class="text-justify">text-justify - Justificado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
          </div>
        </div>

        <!-- Text Weight and Style -->
        <div class="q-mb-lg">
          <div class="text-subtitle1 q-mb-sm">Peso e Estilo do Texto</div>
          <div class="q-gutter-md">
            <div class="text-weight-thin">text-weight-thin - Texto fino</div>
            <div class="text-weight-light">text-weight-light - Texto leve</div>
            <div class="text-weight-regular">text-weight-regular - Texto regular</div>
            <div class="text-weight-medium">text-weight-medium - Texto médio</div>
            <div class="text-weight-bold">text-weight-bold - Texto negrito</div>
            <div class="text-weight-bolder">text-weight-bolder - Texto mais negrito</div>
            <div class="text-italic">text-italic - Texto itálico</div>
            <div class="text-no-wrap">text-no-wrap - Texto sem quebra de linha que não quebra mesmo com muito conteúdo</div>
            <div class="text-strike">text-strike - Texto riscado</div>
            <div class="text-uppercase">text-uppercase - TEXTO MAIÚSCULO</div>
            <div class="text-lowercase">TEXT-LOWERCASE - texto minúsculo</div>
            <div class="text-capitalize">text-capitalize - texto capitalizado</div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Color Utilities Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="palette" class="q-mr-sm" />
          Utilitários de Cor
        </div>
        <div class="text-body2 q-mb-md">
          Classes para aplicar cores de texto e fundo.
        </div>
        
        <!-- Text Colors -->
        <div class="q-mb-lg">
          <div class="text-subtitle1 q-mb-sm">Cores de Texto</div>
          <div class="row q-gutter-md">
            <div class="col-12 col-md-6">
              <div class="text-primary">text-primary - Cor primária</div>
              <div class="text-secondary">text-secondary - Cor secundária</div>
              <div class="text-accent">text-accent - Cor de destaque</div>
              <div class="text-positive">text-positive - Cor positiva</div>
              <div class="text-negative">text-negative - Cor negativa</div>
              <div class="text-warning">text-warning - Cor de aviso</div>
              <div class="text-info">text-info - Cor de informação</div>
            </div>
            <div class="col-12 col-md-6">
              <div class="text-white bg-dark q-pa-sm">text-white - Texto branco</div>
              <div class="text-black">text-black - Texto preto</div>
              <div class="text-grey">text-grey - Texto cinza</div>
              <div class="text-grey-7">text-grey-7 - Cinza escuro</div>
              <div class="text-grey-5">text-grey-5 - Cinza médio</div>
              <div class="text-grey-3">text-grey-3 - Cinza claro</div>
            </div>
          </div>
        </div>

        <!-- Background Colors -->
        <div class="q-mb-lg">
          <div class="text-subtitle1 q-mb-sm">Cores de Fundo</div>
          <div class="row q-gutter-md">
            <div class="col-12 col-md-3">
              <div class="bg-primary text-white q-pa-md text-center">bg-primary</div>
            </div>
            <div class="col-12 col-md-3">
              <div class="bg-secondary text-white q-pa-md text-center">bg-secondary</div>
            </div>
            <div class="col-12 col-md-3">
              <div class="bg-accent text-white q-pa-md text-center">bg-accent</div>
            </div>
            <div class="col-12 col-md-3">
              <div class="bg-positive text-white q-pa-md text-center">bg-positive</div>
            </div>
          </div>
          <div class="row q-gutter-md q-mt-md">
            <div class="col-12 col-md-3">
              <div class="bg-negative text-white q-pa-md text-center">bg-negative</div>
            </div>
            <div class="col-12 col-md-3">
              <div class="bg-warning text-white q-pa-md text-center">bg-warning</div>
            </div>
            <div class="col-12 col-md-3">
              <div class="bg-info text-white q-pa-md text-center">bg-info</div>
            </div>
            <div class="col-12 col-md-3">
              <div class="bg-dark text-white q-pa-md text-center">bg-dark</div>
            </div>
          </div>
        </div>

        <!-- Color Palette -->
        <div class="q-mb-lg">
          <div class="text-subtitle1 q-mb-sm">Paleta de Cores</div>
          <div class="row q-gutter-sm">
            <div class="col-12">
              <div class="text-caption q-mb-xs">Azul (Blue)</div>
              <div class="row q-gutter-xs">
                <div class="bg-blue-1 q-pa-sm text-center" style="min-width: 60px;">blue-1</div>
                <div class="bg-blue-2 q-pa-sm text-center" style="min-width: 60px;">blue-2</div>
                <div class="bg-blue-3 q-pa-sm text-center" style="min-width: 60px;">blue-3</div>
                <div class="bg-blue-4 q-pa-sm text-center text-white" style="min-width: 60px;">blue-4</div>
                <div class="bg-blue-5 q-pa-sm text-center text-white" style="min-width: 60px;">blue-5</div>
                <div class="bg-blue-6 q-pa-sm text-center text-white" style="min-width: 60px;">blue-6</div>
                <div class="bg-blue-7 q-pa-sm text-center text-white" style="min-width: 60px;">blue-7</div>
                <div class="bg-blue-8 q-pa-sm text-center text-white" style="min-width: 60px;">blue-8</div>
                <div class="bg-blue-9 q-pa-sm text-center text-white" style="min-width: 60px;">blue-9</div>
                <div class="bg-blue-10 q-pa-sm text-center text-white" style="min-width: 60px;">blue-10</div>
              </div>
            </div>
            <div class="col-12">
              <div class="text-caption q-mb-xs">Verde (Green)</div>
              <div class="row q-gutter-xs">
                <div class="bg-green-1 q-pa-sm text-center" style="min-width: 60px;">green-1</div>
                <div class="bg-green-2 q-pa-sm text-center" style="min-width: 60px;">green-2</div>
                <div class="bg-green-3 q-pa-sm text-center" style="min-width: 60px;">green-3</div>
                <div class="bg-green-4 q-pa-sm text-center text-white" style="min-width: 60px;">green-4</div>
                <div class="bg-green-5 q-pa-sm text-center text-white" style="min-width: 60px;">green-5</div>
                <div class="bg-green-6 q-pa-sm text-center text-white" style="min-width: 60px;">green-6</div>
                <div class="bg-green-7 q-pa-sm text-center text-white" style="min-width: 60px;">green-7</div>
                <div class="bg-green-8 q-pa-sm text-center text-white" style="min-width: 60px;">green-8</div>
                <div class="bg-green-9 q-pa-sm text-center text-white" style="min-width: 60px;">green-9</div>
                <div class="bg-green-10 q-pa-sm text-center text-white" style="min-width: 60px;">green-10</div>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Position and Display Utilities Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="view_quilt" class="q-mr-sm" />
          Utilitários de Posição e Display
        </div>
        <div class="text-body2 q-mb-md">
          Classes para controlar posicionamento e exibição de elementos.
        </div>
        
        <!-- Position Utilities -->
        <div class="q-mb-lg">
          <div class="text-subtitle1 q-mb-sm">Posicionamento</div>
          <div class="row q-gutter-md">
            <div class="col-12 col-md-6">
              <div class="text-caption q-mb-xs">Posição Relativa</div>
              <div class="bg-grey-2 q-pa-md" style="height: 120px; position: relative;">
                <div class="absolute-top-left bg-red-5 text-white q-pa-sm">absolute-top-left</div>
                <div class="absolute-top-right bg-blue-5 text-white q-pa-sm">absolute-top-right</div>
                <div class="absolute-center bg-green-5 text-white q-pa-sm">absolute-center</div>
                <div class="absolute-bottom-left bg-orange-5 text-white q-pa-sm">absolute-bottom-left</div>
                <div class="absolute-bottom-right bg-purple-5 text-white q-pa-sm">absolute-bottom-right</div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="text-caption q-mb-xs">Posição Fixa</div>
              <div class="bg-grey-2 q-pa-md" style="height: 120px; position: relative; overflow: hidden;">
                <div class="fixed-top-left bg-red-5 text-white q-pa-sm" style="position: absolute;">fixed-top-left</div>
                <div class="fixed-top-right bg-blue-5 text-white q-pa-sm" style="position: absolute;">fixed-top-right</div>
                <div class="fixed-center bg-green-5 text-white q-pa-sm" style="position: absolute;">fixed-center</div>
                <div class="fixed-bottom-left bg-orange-5 text-white q-pa-sm" style="position: absolute;">fixed-bottom-left</div>
                <div class="fixed-bottom-right bg-purple-5 text-white q-pa-sm" style="position: absolute;">fixed-bottom-right</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Display Utilities -->
        <div class="q-mb-lg">
          <div class="text-subtitle1 q-mb-sm">Display</div>
          <div class="q-gutter-md">
            <div class="bg-grey-2 q-pa-md">
              <div class="block bg-blue-5 text-white q-pa-sm q-mb-sm">block - Elemento em bloco</div>
              <span class="inline-block bg-green-5 text-white q-pa-sm q-mr-sm">inline-block</span>
              <span class="inline-block bg-orange-5 text-white q-pa-sm q-mr-sm">inline-block</span>
              <span class="inline-block bg-purple-5 text-white q-pa-sm">inline-block</span>
            </div>
          </div>
        </div>

        <!-- Visibility Utilities -->
        <div class="q-mb-lg">
          <div class="text-subtitle1 q-mb-sm">Visibilidade</div>
          <div class="q-gutter-md">
            <q-btn @click="toggleVisibility" color="primary" label="Toggle Visibility" />
            <div class="q-mt-md">
              <div :class="{ invisible: !isVisible }" class="bg-blue-5 text-white q-pa-md">
                Este elemento pode ser invisível (invisible class)
              </div>
              <div v-show="isVisible" class="bg-green-5 text-white q-pa-md q-mt-sm">
                Este elemento é mostrado/escondido com v-show
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Border and Shadow Utilities Section -->
    <q-card>
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="border_style" class="q-mr-sm" />
          Utilitários de Borda e Sombra
        </div>
        <div class="text-body2 q-mb-md">
          Classes para adicionar bordas, raios e sombras.
        </div>
        
        <!-- Border Utilities -->
        <div class="q-mb-lg">
          <div class="text-subtitle1 q-mb-sm">Bordas</div>
          <div class="row q-gutter-md">
            <div class="col-12 col-md-3">
              <div class="text-caption q-mb-xs">Bordas Básicas</div>
              <div class="border bg-grey-1 q-pa-md q-mb-sm">border</div>
              <div class="border-top bg-grey-1 q-pa-md q-mb-sm">border-top</div>
              <div class="border-right bg-grey-1 q-pa-md q-mb-sm">border-right</div>
              <div class="border-bottom bg-grey-1 q-pa-md q-mb-sm">border-bottom</div>
              <div class="border-left bg-grey-1 q-pa-md">border-left</div>
            </div>
            <div class="col-12 col-md-3">
              <div class="text-caption q-mb-xs">Raios de Borda</div>
              <div class="border rounded-borders bg-grey-1 q-pa-md q-mb-sm">rounded-borders</div>
              <div class="border rounded-borders-sm bg-grey-1 q-pa-md q-mb-sm">rounded-borders-sm</div>
              <div class="border rounded-borders-lg bg-grey-1 q-pa-md q-mb-sm">rounded-borders-lg</div>
              <div class="border rounded-borders-xl bg-grey-1 q-pa-md">rounded-borders-xl</div>
            </div>
            <div class="col-12 col-md-3">
              <div class="text-caption q-mb-xs">Sombras</div>
              <div class="shadow-1 bg-white q-pa-md q-mb-sm">shadow-1</div>
              <div class="shadow-2 bg-white q-pa-md q-mb-sm">shadow-2</div>
              <div class="shadow-3 bg-white q-pa-md q-mb-sm">shadow-3</div>
              <div class="shadow-4 bg-white q-pa-md">shadow-4</div>
            </div>
            <div class="col-12 col-md-3">
              <div class="text-caption q-mb-xs">Sombras Especiais</div>
              <div class="shadow-up-1 bg-white q-pa-md q-mb-sm">shadow-up-1</div>
              <div class="shadow-up-2 bg-white q-pa-md q-mb-sm">shadow-up-2</div>
              <div class="shadow-up-3 bg-white q-pa-md q-mb-sm">shadow-up-3</div>
              <div class="no-shadow bg-grey-1 q-pa-md">no-shadow</div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(true);

function toggleVisibility() {
  isVisible.value = !isVisible.value;
}
</script>

<style scoped>
.border-demo {
  border: 2px dashed #ccc;
}

/* Custom positioning for demo */
.fixed-top-left {
  top: 8px;
  left: 8px;
}

.fixed-top-right {
  top: 8px;
  right: 8px;
}

.fixed-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fixed-bottom-left {
  bottom: 8px;
  left: 8px;
}

.fixed-bottom-right {
  bottom: 8px;
  right: 8px;
}
</style>