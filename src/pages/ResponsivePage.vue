<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 q-mb-lg">
      <q-icon name="devices" class="q-mr-sm" />
      Responsividade
    </div>

    <!-- Breakpoints Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="view_quilt" class="q-mr-sm" />
          Breakpoints
        </div>
        <div class="text-body2 q-mb-md">
          Sistema de breakpoints do Quasar para diferentes tamanhos de tela.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12">
            <div class="text-subtitle2 q-mb-sm">Breakpoints Disponíveis</div>
            <div class="breakpoints-demo">
              <div class="breakpoint-item">
                <div class="breakpoint-name">xs</div>
                <div class="breakpoint-range">0px - 599px</div>
                <div class="breakpoint-desc">Extra Small (Celulares)</div>
              </div>
              <div class="breakpoint-item">
                <div class="breakpoint-name">sm</div>
                <div class="breakpoint-range">600px - 1023px</div>
                <div class="breakpoint-desc">Small (Tablets)</div>
              </div>
              <div class="breakpoint-item">
                <div class="breakpoint-name">md</div>
                <div class="breakpoint-range">1024px - 1439px</div>
                <div class="breakpoint-desc">Medium (Desktops pequenos)</div>
              </div>
              <div class="breakpoint-item">
                <div class="breakpoint-name">lg</div>
                <div class="breakpoint-range">1440px - 1919px</div>
                <div class="breakpoint-desc">Large (Desktops)</div>
              </div>
              <div class="breakpoint-item">
                <div class="breakpoint-name">xl</div>
                <div class="breakpoint-range">1920px+</div>
                <div class="breakpoint-desc">Extra Large (Telas grandes)</div>
              </div>
            </div>
          </div>
        </div>

        <div class="q-mt-lg">
          <div class="text-subtitle2 q-mb-sm">Breakpoint Atual</div>
          <div class="current-breakpoint">
            <q-chip 
              :color="getCurrentBreakpointColor()" 
              text-color="white" 
              :label="`Atual: ${$q.screen.name.toUpperCase()} (${$q.screen.width}px × ${$q.screen.height}px)`"
              size="lg"
            />
          </div>
          <div class="text-caption q-mt-sm">
            Redimensione a janela para ver as mudanças em tempo real.
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Grid System Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="grid_view" class="q-mr-sm" />
          Sistema de Grid Responsivo
        </div>
        <div class="text-body2 q-mb-md">
          Demonstração do sistema de grid que se adapta aos breakpoints.
        </div>
        
        <!-- Basic Responsive Grid -->
        <div class="q-mb-lg">
          <div class="text-subtitle2 q-mb-sm">Grid Básico Responsivo</div>
          <div class="row q-gutter-md">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="grid-demo-item bg-primary text-white">
                <div class="text-center q-pa-md">
                  <div class="text-subtitle2">Item 1</div>
                  <div class="text-caption">
                    xs: 12 | sm: 6 | md: 4 | lg: 3
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="grid-demo-item bg-secondary text-white">
                <div class="text-center q-pa-md">
                  <div class="text-subtitle2">Item 2</div>
                  <div class="text-caption">
                    xs: 12 | sm: 6 | md: 4 | lg: 3
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="grid-demo-item bg-positive text-white">
                <div class="text-center q-pa-md">
                  <div class="text-subtitle2">Item 3</div>
                  <div class="text-caption">
                    xs: 12 | sm: 6 | md: 4 | lg: 3
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="grid-demo-item bg-warning text-white">
                <div class="text-center q-pa-md">
                  <div class="text-subtitle2">Item 4</div>
                  <div class="text-caption">
                    xs: 12 | sm: 6 | md: 4 | lg: 3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Complex Responsive Layout -->
        <div class="q-mb-lg">
          <div class="text-subtitle2 q-mb-sm">Layout Complexo</div>
          <div class="row q-gutter-md">
            <div class="col-12 col-md-8">
              <div class="grid-demo-item bg-blue-5 text-white">
                <div class="q-pa-md">
                  <div class="text-subtitle2">Conteúdo Principal</div>
                  <div class="text-caption q-mb-sm">
                    xs: 12 colunas | md+: 8 colunas
                  </div>
                  <div class="text-body2">
                    Esta área ocupa toda a largura em dispositivos móveis (xs) 
                    e 8 colunas em tablets e desktops (md+).
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="grid-demo-item bg-purple-5 text-white">
                <div class="q-pa-md">
                  <div class="text-subtitle2">Sidebar</div>
                  <div class="text-caption q-mb-sm">
                    xs: 12 colunas | md+: 4 colunas
                  </div>
                  <div class="text-body2">
                    Sidebar que fica embaixo no mobile e ao lado no desktop.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Offset and Auto Columns -->
        <div class="q-mb-lg">
          <div class="text-subtitle2 q-mb-sm">Offset e Colunas Automáticas</div>
          <div class="row q-gutter-md q-mb-md">
            <div class="col-12 col-md-6 offset-md-3">
              <div class="grid-demo-item bg-teal-5 text-white">
                <div class="text-center q-pa-md">
                  <div class="text-subtitle2">Centralizado</div>
                  <div class="text-caption">
                    xs: 12 | md: 6 com offset 3
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row q-gutter-md">
            <div class="col">
              <div class="grid-demo-item bg-orange-5 text-white">
                <div class="text-center q-pa-md">
                  <div class="text-subtitle2">Auto</div>
                  <div class="text-caption">col (automático)</div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="grid-demo-item bg-red-5 text-white">
                <div class="text-center q-pa-md">
                  <div class="text-subtitle2">Auto</div>
                  <div class="text-caption">col (automático)</div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="grid-demo-item bg-indigo-5 text-white">
                <div class="text-center q-pa-md">
                  <div class="text-subtitle2">Auto</div>
                  <div class="text-caption">col (automático)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Visibility Classes Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="visibility" class="q-mr-sm" />
          Classes de Visibilidade
        </div>
        <div class="text-body2 q-mb-md">
          Classes para mostrar/ocultar elementos baseado no breakpoint.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Mostrar Apenas Em</div>
            <div class="visibility-demo">
              <div class="gt-xs bg-blue-2 q-pa-md q-mb-sm">
                <q-icon name="visibility" class="q-mr-sm" />
                <strong>gt-xs:</strong> Visível apenas em SM, MD, LG, XL
              </div>
              <div class="gt-sm bg-green-2 q-pa-md q-mb-sm">
                <q-icon name="visibility" class="q-mr-sm" />
                <strong>gt-sm:</strong> Visível apenas em MD, LG, XL
              </div>
              <div class="gt-md bg-orange-2 q-pa-md q-mb-sm">
                <q-icon name="visibility" class="q-mr-sm" />
                <strong>gt-md:</strong> Visível apenas em LG, XL
              </div>
              <div class="gt-lg bg-purple-2 q-pa-md q-mb-sm">
                <q-icon name="visibility" class="q-mr-sm" />
                <strong>gt-lg:</strong> Visível apenas em XL
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Ocultar Em</div>
            <div class="visibility-demo">
              <div class="lt-sm bg-red-2 q-pa-md q-mb-sm">
                <q-icon name="visibility_off" class="q-mr-sm" />
                <strong>lt-sm:</strong> Oculto apenas em XS
              </div>
              <div class="lt-md bg-yellow-2 q-pa-md q-mb-sm">
                <q-icon name="visibility_off" class="q-mr-sm" />
                <strong>lt-md:</strong> Oculto em XS, SM
              </div>
              <div class="lt-lg bg-teal-2 q-pa-md q-mb-sm">
                <q-icon name="visibility_off" class="q-mr-sm" />
                <strong>lt-lg:</strong> Oculto em XS, SM, MD
              </div>
              <div class="lt-xl bg-indigo-2 q-pa-md q-mb-sm">
                <q-icon name="visibility_off" class="q-mr-sm" />
                <strong>lt-xl:</strong> Oculto em XS, SM, MD, LG
              </div>
            </div>
          </div>
        </div>

        <div class="q-mt-md">
          <div class="text-subtitle2 q-mb-sm">Visibilidade Específica</div>
          <div class="row q-gutter-md">
            <div class="col-12 col-sm-6">
              <div class="xs-only bg-pink-2 q-pa-md">
                <q-icon name="phone_android" class="q-mr-sm" />
                <strong>xs-only:</strong> Visível apenas em XS (mobile)
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="sm-only bg-cyan-2 q-pa-md">
                <q-icon name="tablet" class="q-mr-sm" />
                <strong>sm-only:</strong> Visível apenas em SM (tablet)
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="md-only bg-lime-2 q-pa-md">
                <q-icon name="laptop" class="q-mr-sm" />
                <strong>md-only:</strong> Visível apenas em MD
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="lg-only bg-amber-2 q-pa-md">
                <q-icon name="desktop_windows" class="q-mr-sm" />
                <strong>lg-only:</strong> Visível apenas em LG
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Screen Plugin Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="info" class="q-mr-sm" />
          Plugin Screen
        </div>
        <div class="text-body2 q-mb-md">
          Informações em tempo real sobre a tela usando o plugin $q.screen.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Informações da Tela</div>
            <q-list bordered>
              <q-item>
                <q-item-section>
                  <q-item-label>Nome do Breakpoint</q-item-label>
                  <q-item-label caption>{{ $q.screen.name }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Largura</q-item-label>
                  <q-item-label caption>{{ $q.screen.width }}px</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Altura</q-item-label>
                  <q-item-label caption>{{ $q.screen.height }}px</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Orientação</q-item-label>
                  <q-item-label caption>
                    {{ $q.screen.width > $q.screen.height ? 'Paisagem' : 'Retrato' }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Detecção de Breakpoints</div>
            <q-list bordered>
              <q-item>
                <q-item-section>
                  <q-item-label>Extra Small (xs)</q-item-label>
                  <q-item-label caption>0px - 599px</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon 
                    :name="$q.screen.xs ? 'check_circle' : 'cancel'" 
                    :color="$q.screen.xs ? 'positive' : 'negative'"
                  />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Small (sm)</q-item-label>
                  <q-item-label caption>600px - 1023px</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon 
                    :name="$q.screen.sm ? 'check_circle' : 'cancel'" 
                    :color="$q.screen.sm ? 'positive' : 'negative'"
                  />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Medium (md)</q-item-label>
                  <q-item-label caption>1024px - 1439px</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon 
                    :name="$q.screen.md ? 'check_circle' : 'cancel'" 
                    :color="$q.screen.md ? 'positive' : 'negative'"
                  />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Large (lg)</q-item-label>
                  <q-item-label caption>1440px - 1919px</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon 
                    :name="$q.screen.lg ? 'check_circle' : 'cancel'" 
                    :color="$q.screen.lg ? 'positive' : 'negative'"
                  />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Extra Large (xl)</q-item-label>
                  <q-item-label caption>1920px+</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon 
                    :name="$q.screen.xl ? 'check_circle' : 'cancel'" 
                    :color="$q.screen.xl ? 'positive' : 'negative'"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Responsive Components Section -->
    <q-card>
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="widgets" class="q-mr-sm" />
          Componentes Responsivos
        </div>
        <div class="text-body2 q-mb-md">
          Exemplos de componentes que se adaptam aos diferentes breakpoints.
        </div>
        
        <!-- Responsive Navigation -->
        <div class="q-mb-lg">
          <div class="text-subtitle2 q-mb-sm">Navegação Responsiva</div>
          <div class="responsive-nav-demo">
            <!-- Desktop Navigation -->
            <div class="gt-sm">
              <q-toolbar class="bg-primary text-white">
                <q-toolbar-title>Desktop Navigation</q-toolbar-title>
                <q-btn flat label="Home" />
                <q-btn flat label="About" />
                <q-btn flat label="Services" />
                <q-btn flat label="Contact" />
              </q-toolbar>
            </div>
            
            <!-- Mobile Navigation -->
            <div class="lt-md">
              <q-toolbar class="bg-primary text-white">
                <q-btn flat round icon="menu" @click="mobileMenuOpen = !mobileMenuOpen" />
                <q-toolbar-title>Mobile Navigation</q-toolbar-title>
              </q-toolbar>
              <q-slide-transition>
                <div v-show="mobileMenuOpen" class="bg-primary text-white q-pa-md">
                  <q-list>
                    <q-item clickable>
                      <q-item-section>Home</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>About</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>Services</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>Contact</q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </q-slide-transition>
            </div>
          </div>
        </div>

        <!-- Responsive Cards -->
        <div class="q-mb-lg">
          <div class="text-subtitle2 q-mb-sm">Cards Responsivos</div>
          <div class="row q-gutter-md">
            <div class="col-12 col-sm-6 col-lg-4" v-for="n in 6" :key="n">
              <q-card>
                <q-img 
                  src="https://picsum.photos/300/200" 
                  :ratio="16/9"
                  class="gt-xs"
                />
                <q-card-section>
                  <div class="text-h6">Card {{ n }}</div>
                  <div class="text-subtitle2">Responsivo</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <div class="text-body2">
                    Este card se adapta: 1 coluna no mobile, 2 no tablet, 3 no desktop.
                  </div>
                </q-card-section>
                <q-card-actions>
                  <q-btn flat color="primary" label="Ação" />
                  <q-btn flat color="secondary" label="Mais" class="gt-xs" />
                </q-card-actions>
              </q-card>
            </div>
          </div>
        </div>

        <!-- Responsive Table -->
        <div>
          <div class="text-subtitle2 q-mb-sm">Tabela Responsiva</div>
          <q-table
            :rows="tableRows"
            :columns="tableColumns"
            row-key="id"
            :grid="$q.screen.xs"
            :pagination="{ rowsPerPage: 5 }"
          >
            <template v-slot:item="props" v-if="$q.screen.xs">
              <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
                <q-card>
                  <q-card-section>
                    <div class="text-h6">{{ props.row.name }}</div>
                    <div class="text-subtitle2">{{ props.row.email }}</div>
                    <div class="text-body2">{{ props.row.role }}</div>
                  </q-card-section>
                </q-card>
              </div>
            </template>
          </q-table>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const mobileMenuOpen = ref(false);

function getCurrentBreakpointColor() {
  const breakpoint = $q.screen.name;
  const colors = {
    xs: 'red',
    sm: 'orange', 
    md: 'blue',
    lg: 'green',
    xl: 'purple'
  };
  return colors[breakpoint] || 'grey';
}

// Table data
const tableColumns = [
  {
    name: 'name',
    required: true,
    label: 'Nome',
    align: 'left' as const,
    field: 'name',
    sortable: true
  },
  {
    name: 'email',
    label: 'Email',
    align: 'left' as const,
    field: 'email',
    sortable: true
  },
  {
    name: 'role',
    label: 'Função',
    align: 'left' as const,
    field: 'role',
    sortable: true
  },
  {
    name: 'department',
    label: 'Departamento',
    align: 'left' as const,
    field: 'department',
    sortable: true
  }
];

const tableRows = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao@example.com',
    role: 'Desenvolvedor',
    department: 'TI'
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@example.com',
    role: 'Designer',
    department: 'Design'
  },
  {
    id: 3,
    name: 'Pedro Costa',
    email: 'pedro@example.com',
    role: 'Gerente',
    department: 'Vendas'
  },
  {
    id: 4,
    name: 'Ana Oliveira',
    email: 'ana@example.com',
    role: 'Analista',
    department: 'Marketing'
  },
  {
    id: 5,
    name: 'Carlos Lima',
    email: 'carlos@example.com',
    role: 'Coordenador',
    department: 'RH'
  }
];
</script>

<style scoped>
.breakpoints-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.breakpoint-item {
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  border-left: 4px solid #1976d2;
}

.breakpoint-name {
  font-weight: bold;
  font-size: 18px;
  min-width: 40px;
  margin-right: 16px;
  color: #1976d2;
}

.breakpoint-range {
  font-family: monospace;
  background-color: #e3f2fd;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 16px;
  min-width: 140px;
}

.breakpoint-desc {
  color: #666;
}

.current-breakpoint {
  display: flex;
  align-items: center;
  gap: 12px;
}

.grid-demo-item {
  border-radius: 8px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visibility-demo > div {
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.responsive-nav-demo {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

@media (max-width: 599px) {
  .breakpoint-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .breakpoint-name {
    margin-right: 0;
  }
}
</style>