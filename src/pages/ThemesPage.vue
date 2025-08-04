<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 q-mb-lg">
      <q-icon name="palette" class="q-mr-sm" />
      Temas e Personalização
    </div>

    <!-- Dark Mode Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="dark_mode" class="q-mr-sm" />
          Modo Escuro
        </div>
        <div class="text-body2 q-mb-md">
          Demonstração do sistema de modo escuro do Quasar.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Controle do Modo Escuro</div>
            <div class="q-gutter-md">
              <q-btn 
                @click="$q.dark.set(true)" 
                color="dark" 
                icon="dark_mode" 
                label="Ativar Modo Escuro"
              />
              <q-btn 
                @click="$q.dark.set(false)" 
                color="primary" 
                icon="light_mode" 
                label="Ativar Modo Claro"
              />
              <q-btn 
                @click="$q.dark.set('auto')" 
                color="secondary" 
                icon="auto_mode" 
                label="Modo Automático"
              />
              <q-btn 
                @click="$q.dark.toggle()" 
                :color="$q.dark.isActive ? 'orange' : 'blue'" 
                :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'" 
                label="Alternar Tema"
              />
            </div>
            
            <div class="q-mt-md">
              <div class="text-caption">
                Estado atual: {{ $q.dark.isActive ? 'Modo Escuro' : 'Modo Claro' }}
              </div>
              <div class="text-caption">
                Modo: {{ $q.dark.mode }}
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Exemplo de Componentes</div>
            <div class="q-gutter-md">
              <q-card class="q-pa-md">
                <div class="text-h6">Card de Exemplo</div>
                <div class="text-body2 q-mb-md">
                  Este card se adapta automaticamente ao tema atual.
                </div>
                <q-btn color="primary" label="Botão Primário" class="q-mr-sm" />
                <q-btn color="secondary" label="Botão Secundário" />
              </q-card>
              
              <q-list bordered>
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="inbox" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Inbox</q-item-label>
                    <q-item-label caption>Mensagens recebidas</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="send" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Enviados</q-item-label>
                    <q-item-label caption>Mensagens enviadas</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Brand Colors Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="color_lens" class="q-mr-sm" />
          Cores da Marca
        </div>
        <div class="text-body2 q-mb-md">
          Sistema de cores principais do Quasar.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Cores Principais</div>
            <div class="q-gutter-sm">
              <div class="color-demo bg-primary text-white">
                <div class="color-name">Primary</div>
                <div class="color-code">#1976D2</div>
              </div>
              <div class="color-demo bg-secondary text-white">
                <div class="color-name">Secondary</div>
                <div class="color-code">#26A69A</div>
              </div>
              <div class="color-demo bg-accent text-white">
                <div class="color-name">Accent</div>
                <div class="color-code">#9C27B0</div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Cores de Estado</div>
            <div class="q-gutter-sm">
              <div class="color-demo bg-positive text-white">
                <div class="color-name">Positive</div>
                <div class="color-code">#21BA45</div>
              </div>
              <div class="color-demo bg-negative text-white">
                <div class="color-name">Negative</div>
                <div class="color-code">#C10015</div>
              </div>
              <div class="color-demo bg-warning text-white">
                <div class="color-name">Warning</div>
                <div class="color-code">#F2C037</div>
              </div>
              <div class="color-demo bg-info text-white">
                <div class="color-name">Info</div>
                <div class="color-code">#31CCEC</div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Cores Neutras</div>
            <div class="q-gutter-sm">
              <div class="color-demo bg-dark text-white">
                <div class="color-name">Dark</div>
                <div class="color-code">#1D1D1D</div>
              </div>
              <div class="color-demo bg-grey text-white">
                <div class="color-name">Grey</div>
                <div class="color-code">#9E9E9E</div>
              </div>
              <div class="color-demo bg-white text-dark" style="border: 1px solid #ccc;">
                <div class="color-name">White</div>
                <div class="color-code">#FFFFFF</div>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Custom Theme Demo Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="tune" class="q-mr-sm" />
          Personalização de Tema
        </div>
        <div class="text-body2 q-mb-md">
          Demonstração de como personalizar cores e estilos.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Seletor de Cor Primária</div>
            <div class="q-gutter-md">
              <q-btn 
                v-for="color in primaryColors" 
                :key="color.name"
                :style="{ backgroundColor: color.value, color: 'white' }"
                :label="color.name"
                @click="changePrimaryColor(color.value)"
                size="sm"
              />
            </div>
            
            <div class="q-mt-md">
              <div class="text-subtitle2 q-mb-sm">Componentes com Cor Personalizada</div>
              <div class="q-gutter-md">
                <q-btn 
                  :style="{ backgroundColor: currentPrimaryColor, color: 'white' }"
                  label="Botão Personalizado"
                />
                <q-chip 
                  :style="{ backgroundColor: currentPrimaryColor, color: 'white' }"
                  label="Chip Personalizado"
                />
                <q-badge 
                  :style="{ backgroundColor: currentPrimaryColor }"
                  label="Badge"
                />
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Variações de Cor</div>
            <div class="color-variations">
              <div 
                v-for="(shade, index) in colorShades" 
                :key="index"
                class="color-shade"
                :style="{ backgroundColor: shade, color: getTextColor(shade) }"
              >
                Shade {{ index + 1 }}
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Typography Theme Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="text_fields" class="q-mr-sm" />
          Tipografia do Tema
        </div>
        <div class="text-body2 q-mb-md">
          Sistema de tipografia e hierarquia de texto.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Hierarquia de Títulos</div>
            <div class="typography-demo">
              <div class="text-h1">Heading 1</div>
              <div class="text-h2">Heading 2</div>
              <div class="text-h3">Heading 3</div>
              <div class="text-h4">Heading 4</div>
              <div class="text-h5">Heading 5</div>
              <div class="text-h6">Heading 6</div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Texto Corpo e Legendas</div>
            <div class="typography-demo">
              <div class="text-subtitle1">Subtitle 1 - Para subtítulos importantes</div>
              <div class="text-subtitle2">Subtitle 2 - Para subtítulos secundários</div>
              <div class="text-body1">Body 1 - Texto principal do corpo (padrão)</div>
              <div class="text-body2">Body 2 - Texto secundário do corpo</div>
              <div class="text-caption">Caption - Para legendas e textos pequenos</div>
              <div class="text-overline">OVERLINE - PARA RÓTULOS E CATEGORIAS</div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Component Theming Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="widgets" class="q-mr-sm" />
          Tematização de Componentes
        </div>
        <div class="text-body2 q-mb-md">
          Como os componentes se adaptam aos temas.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Botões</div>
            <div class="q-gutter-sm">
              <q-btn color="primary" label="Primary" />
              <q-btn color="secondary" label="Secondary" />
              <q-btn color="positive" label="Positive" />
              <q-btn color="negative" label="Negative" />
              <q-btn color="warning" label="Warning" />
              <q-btn color="info" label="Info" />
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Chips</div>
            <div class="q-gutter-sm">
              <q-chip color="primary" text-color="white" label="Primary" />
              <q-chip color="secondary" text-color="white" label="Secondary" />
              <q-chip color="positive" text-color="white" label="Positive" />
              <q-chip color="negative" text-color="white" label="Negative" />
              <q-chip color="warning" text-color="white" label="Warning" />
              <q-chip color="info" text-color="white" label="Info" />
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Badges</div>
            <div class="q-gutter-sm">
              <q-badge color="primary" label="Primary" />
              <q-badge color="secondary" label="Secondary" />
              <q-badge color="positive" label="Positive" />
              <q-badge color="negative" label="Negative" />
              <q-badge color="warning" label="Warning" />
              <q-badge color="info" label="Info" />
            </div>
          </div>
        </div>

        <div class="row q-gutter-md q-mt-md">
          <div class="col-12">
            <div class="text-subtitle2 q-mb-sm">Formulários</div>
            <div class="row q-gutter-md">
              <div class="col-12 col-md-4">
                <q-input 
                  v-model="sampleText" 
                  label="Campo de Texto" 
                  color="primary"
                  outlined
                />
              </div>
              <div class="col-12 col-md-4">
                <q-select 
                  v-model="sampleSelect" 
                  :options="selectOptions" 
                  label="Seleção" 
                  color="secondary"
                  outlined
                />
              </div>
              <div class="col-12 col-md-4">
                <q-checkbox 
                  v-model="sampleCheckbox" 
                  label="Checkbox" 
                  color="positive"
                />
                <q-radio 
                  v-model="sampleRadio" 
                  val="option1" 
                  label="Radio 1" 
                  color="info"
                />
                <q-radio 
                  v-model="sampleRadio" 
                  val="option2" 
                  label="Radio 2" 
                  color="info"
                />
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- CSS Variables Section -->
    <q-card>
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="code" class="q-mr-sm" />
          Variáveis CSS
        </div>
        <div class="text-body2 q-mb-md">
          Principais variáveis CSS do Quasar para personalização.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Variáveis de Cor</div>
            <div class="css-variables">
              <div class="css-var-item">
                <code>--q-primary</code>
                <div class="css-var-demo bg-primary"></div>
              </div>
              <div class="css-var-item">
                <code>--q-secondary</code>
                <div class="css-var-demo bg-secondary"></div>
              </div>
              <div class="css-var-item">
                <code>--q-accent</code>
                <div class="css-var-demo bg-accent"></div>
              </div>
              <div class="css-var-item">
                <code>--q-positive</code>
                <div class="css-var-demo bg-positive"></div>
              </div>
              <div class="css-var-item">
                <code>--q-negative</code>
                <div class="css-var-demo bg-negative"></div>
              </div>
              <div class="css-var-item">
                <code>--q-warning</code>
                <div class="css-var-demo bg-warning"></div>
              </div>
              <div class="css-var-item">
                <code>--q-info</code>
                <div class="css-var-demo bg-info"></div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Variáveis de Superfície</div>
            <div class="css-variables">
              <div class="css-var-item">
                <code>--q-dark</code>
                <div class="css-var-demo bg-dark"></div>
              </div>
              <div class="css-var-item">
                <code>--q-dark-page</code>
                <div class="css-var-demo" style="background-color: #121212;"></div>
              </div>
              <div class="css-var-item">
                <code>--q-body</code>
                <div class="css-var-demo" :style="{ backgroundColor: $q.dark.isActive ? '#1d1d1d' : '#ffffff', border: '1px solid #ccc' }"></div>
              </div>
              <div class="css-var-item">
                <code>--q-surface</code>
                <div class="css-var-demo" :style="{ backgroundColor: $q.dark.isActive ? '#2d2d2d' : '#f5f5f5' }"></div>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Sample data for form components
const sampleText = ref('');
const sampleSelect = ref(null);
const sampleCheckbox = ref(false);
const sampleRadio = ref('option1');
const selectOptions = ['Opção 1', 'Opção 2', 'Opção 3'];

// Primary color customization
const currentPrimaryColor = ref('#1976D2');

const primaryColors = [
  { name: 'Azul', value: '#1976D2' },
  { name: 'Verde', value: '#4CAF50' },
  { name: 'Roxo', value: '#9C27B0' },
  { name: 'Laranja', value: '#FF9800' },
  { name: 'Vermelho', value: '#F44336' },
  { name: 'Teal', value: '#009688' },
  { name: 'Indigo', value: '#3F51B5' },
  { name: 'Rosa', value: '#E91E63' }
];

function changePrimaryColor(color: string) {
  currentPrimaryColor.value = color;
}

// Generate color shades
const colorShades = computed(() => {
  const baseColor = currentPrimaryColor.value;
  const shades = [];
  
  // Convert hex to RGB
  const hex = baseColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Generate lighter and darker shades
  for (let i = 0; i < 5; i++) {
    const factor = 0.8 + (i * 0.1); // 0.8 to 1.2
    const newR = Math.min(255, Math.round(r * factor));
    const newG = Math.min(255, Math.round(g * factor));
    const newB = Math.min(255, Math.round(b * factor));
    
    shades.push(`rgb(${newR}, ${newG}, ${newB})`);
  }
  
  return shades;
});

function getTextColor(backgroundColor: string): string {
  // Simple function to determine if text should be light or dark
  // based on background color brightness
  const rgb = backgroundColor.match(/\d+/g);
  if (!rgb || rgb.length < 3) return '#000000';
  
  const brightness = (parseInt(rgb[0] || '0') * 299 + parseInt(rgb[1] || '0') * 587 + parseInt(rgb[2] || '0') * 114) / 1000;
  return brightness > 128 ? '#000000' : '#ffffff';
}
</script>

<style scoped>
.color-demo {
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 8px;
}

.color-name {
  font-weight: bold;
  font-size: 14px;
}

.color-code {
  font-size: 12px;
  opacity: 0.8;
}

.color-variations {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.color-shade {
  padding: 12px;
  text-align: center;
  border-radius: 4px;
  font-weight: 500;
}

.typography-demo > div {
  margin-bottom: 8px;
}

.css-variables {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.css-var-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.css-var-demo {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

code {
  font-family: 'Courier New', monospace;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 2px 4px;
  border-radius: 2px;
}
</style>