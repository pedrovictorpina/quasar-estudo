<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 q-mb-lg">
      <q-icon name="navigation" class="q-mr-sm" />
      Componentes de Navegação
    </div>

    <!-- Breadcrumbs Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="alt_route" class="q-mr-sm" />
          Breadcrumbs
        </div>
        <div class="text-body2 q-mb-md">
          Navegação hierárquica para mostrar a localização atual.
        </div>
        
        <div class="q-mb-md">
          <div class="text-subtitle2 q-mb-sm">Breadcrumb Básico</div>
          <q-breadcrumbs>
            <q-breadcrumbs-el label="Home" icon="home" />
            <q-breadcrumbs-el label="Componentes" icon="widgets" />
            <q-breadcrumbs-el label="Navegação" icon="navigation" />
          </q-breadcrumbs>
        </div>

        <div class="q-mb-md">
          <div class="text-subtitle2 q-mb-sm">Com Separador Customizado</div>
          <q-breadcrumbs separator=">">
            <q-breadcrumbs-el label="Início" />
            <q-breadcrumbs-el label="Produtos" />
            <q-breadcrumbs-el label="Categoria" />
            <q-breadcrumbs-el label="Item" />
          </q-breadcrumbs>
        </div>

        <div class="q-mb-md">
          <div class="text-subtitle2 q-mb-sm">Com Links Ativos</div>
          <q-breadcrumbs active-color="primary">
            <q-breadcrumbs-el label="Dashboard" icon="dashboard" to="/" />
            <q-breadcrumbs-el label="Usuários" icon="people" to="/users" />
            <q-breadcrumbs-el label="Perfil" icon="person" />
          </q-breadcrumbs>
        </div>
      </q-card-section>
    </q-card>

    <!-- Pagination Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="pages" class="q-mr-sm" />
          Pagination
        </div>
        <div class="text-body2 q-mb-md">
          Componente para navegação entre páginas de dados.
        </div>
        
        <div class="q-mb-md">
          <div class="text-subtitle2 q-mb-sm">Paginação Básica</div>
          <q-pagination
            v-model="basicPagination"
            :max="10"
            direction-links
          />
          <div class="text-caption q-mt-sm">Página atual: {{ basicPagination }}</div>
        </div>

        <div class="q-mb-md">
          <div class="text-subtitle2 q-mb-sm">Com Botões de Navegação</div>
          <q-pagination
            v-model="advancedPagination"
            :max="20"
            :max-pages="6"
            direction-links
            boundary-links
            color="purple"
          />
          <div class="text-caption q-mt-sm">Página atual: {{ advancedPagination }}</div>
        </div>

        <div class="q-mb-md">
          <div class="text-subtitle2 q-mb-sm">Paginação com Input</div>
          <q-pagination
            v-model="inputPagination"
            :max="50"
            input
            color="teal"
          />
          <div class="text-caption q-mt-sm">Página atual: {{ inputPagination }}</div>
        </div>

        <div class="q-mb-md">
          <div class="text-subtitle2 q-mb-sm">Tamanhos Diferentes</div>
          <div class="q-gutter-md">
            <q-pagination v-model="sizePagination" :max="5" size="sm" />
            <q-pagination v-model="sizePagination" :max="5" />
            <q-pagination v-model="sizePagination" :max="5" size="lg" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Stepper Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="linear_scale" class="q-mr-sm" />
          Stepper
        </div>
        <div class="text-body2 q-mb-md">
          Componente para guiar usuários através de um processo em etapas.
        </div>
        
        <q-stepper
          v-model="step"
          ref="stepper"
          color="primary"
          animated
        >
          <q-step
            :name="1"
            title="Informações Pessoais"
            icon="person"
            :done="step > 1"
          >
            <div class="text-body1 q-mb-md">
              Preencha suas informações pessoais básicas.
            </div>
            <q-input v-model="stepperData.name" label="Nome completo" class="q-mb-md" />
            <q-input v-model="stepperData.email" label="E-mail" type="email" class="q-mb-md" />
            <q-input v-model="stepperData.phone" label="Telefone" class="q-mb-md" />
          </q-step>

          <q-step
            :name="2"
            title="Endereço"
            icon="location_on"
            :done="step > 2"
          >
            <div class="text-body1 q-mb-md">
              Informe seu endereço completo.
            </div>
            <q-input v-model="stepperData.address" label="Endereço" class="q-mb-md" />
            <q-input v-model="stepperData.city" label="Cidade" class="q-mb-md" />
            <q-input v-model="stepperData.zipCode" label="CEP" class="q-mb-md" />
          </q-step>

          <q-step
            :name="3"
            title="Confirmação"
            icon="check"
          >
            <div class="text-body1 q-mb-md">
              Revise suas informações antes de finalizar.
            </div>
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label>Nome</q-item-label>
                  <q-item-label caption>{{ stepperData.name || 'Não informado' }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>E-mail</q-item-label>
                  <q-item-label caption>{{ stepperData.email || 'Não informado' }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Telefone</q-item-label>
                  <q-item-label caption>{{ stepperData.phone || 'Não informado' }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Endereço</q-item-label>
                  <q-item-label caption>{{ stepperData.address || 'Não informado' }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Cidade</q-item-label>
                  <q-item-label caption>{{ stepperData.city || 'Não informado' }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>CEP</q-item-label>
                  <q-item-label caption>{{ stepperData.zipCode || 'Não informado' }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn 
                v-if="step > 1" 
                flat 
                color="primary" 
                @click="previousStep()" 
                label="Voltar" 
                class="q-ml-sm" 
              />
              <q-btn 
                v-if="step < 3" 
                @click="nextStep()" 
                color="primary" 
                label="Continuar" 
              />
              <q-btn 
                v-if="step === 3" 
                color="positive" 
                @click="finishStepper" 
                label="Finalizar" 
              />
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </q-card-section>
    </q-card>

    <!-- Tabs Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="tab" class="q-mr-sm" />
          Tabs
        </div>
        <div class="text-body2 q-mb-md">
          Navegação por abas para organizar conteúdo relacionado.
        </div>
        
        <div class="q-mb-lg">
          <div class="text-subtitle2 q-mb-sm">Tabs Básicas</div>
          <q-tabs
            v-model="basicTab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="home" icon="home" label="Início" />
            <q-tab name="profile" icon="person" label="Perfil" />
            <q-tab name="settings" icon="settings" label="Configurações" />
            <q-tab name="help" icon="help" label="Ajuda" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="basicTab" animated>
            <q-tab-panel name="home">
              <div class="text-h6">Página Inicial</div>
              <div class="text-body2">Bem-vindo à página inicial do sistema.</div>
            </q-tab-panel>

            <q-tab-panel name="profile">
              <div class="text-h6">Perfil do Usuário</div>
              <div class="text-body2">Gerencie suas informações pessoais aqui.</div>
            </q-tab-panel>

            <q-tab-panel name="settings">
              <div class="text-h6">Configurações</div>
              <div class="text-body2">Ajuste as preferências do sistema.</div>
            </q-tab-panel>

            <q-tab-panel name="help">
              <div class="text-h6">Central de Ajuda</div>
              <div class="text-body2">Encontre respostas para suas dúvidas.</div>
            </q-tab-panel>
          </q-tab-panels>
        </div>

        <div class="q-mb-lg">
          <div class="text-subtitle2 q-mb-sm">Tabs Verticais</div>
          <div class="row">
            <div class="col-3">
              <q-tabs
                v-model="verticalTab"
                vertical
                class="text-teal"
              >
                <q-tab name="dashboard" icon="dashboard" label="Dashboard" />
                <q-tab name="analytics" icon="analytics" label="Analytics" />
                <q-tab name="reports" icon="assessment" label="Relatórios" />
                <q-tab name="users" icon="people" label="Usuários" />
              </q-tabs>
            </div>
            <div class="col-9">
              <q-tab-panels v-model="verticalTab" animated vertical>
                <q-tab-panel name="dashboard">
                  <div class="text-h6">Dashboard</div>
                  <div class="text-body2">Visão geral dos dados principais.</div>
                </q-tab-panel>
                <q-tab-panel name="analytics">
                  <div class="text-h6">Analytics</div>
                  <div class="text-body2">Análise detalhada dos dados.</div>
                </q-tab-panel>
                <q-tab-panel name="reports">
                  <div class="text-h6">Relatórios</div>
                  <div class="text-body2">Geração e visualização de relatórios.</div>
                </q-tab-panel>
                <q-tab-panel name="users">
                  <div class="text-h6">Usuários</div>
                  <div class="text-body2">Gerenciamento de usuários do sistema.</div>
                </q-tab-panel>
              </q-tab-panels>
            </div>
          </div>
        </div>

        <div class="q-mb-lg">
          <div class="text-subtitle2 q-mb-sm">Tabs com Badges</div>
          <q-tabs v-model="badgeTab" class="text-purple">
            <q-tab name="messages" label="Mensagens">
              <q-badge color="red" floating>3</q-badge>
            </q-tab>
            <q-tab name="notifications" label="Notificações">
              <q-badge color="orange" floating>12</q-badge>
            </q-tab>
            <q-tab name="tasks" label="Tarefas">
              <q-badge color="green" floating>5</q-badge>
            </q-tab>
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="badgeTab" animated>
            <q-tab-panel name="messages">
              <div class="text-h6">Mensagens (3 novas)</div>
              <div class="text-body2">Você tem 3 mensagens não lidas.</div>
            </q-tab-panel>
            <q-tab-panel name="notifications">
              <div class="text-h6">Notificações (12 novas)</div>
              <div class="text-body2">Você tem 12 notificações pendentes.</div>
            </q-tab-panel>
            <q-tab-panel name="tasks">
              <div class="text-h6">Tarefas (5 pendentes)</div>
              <div class="text-body2">Você tem 5 tarefas para completar.</div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </q-card-section>
    </q-card>

    <!-- Tree Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="account_tree" class="q-mr-sm" />
          Tree
        </div>
        <div class="text-body2 q-mb-md">
          Estrutura hierárquica em árvore para navegação de dados.
        </div>
        
        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Árvore Básica</div>
            <q-tree
              :nodes="basicTreeNodes"
              node-key="label"
              selected-color="primary"
              v-model:selected="selectedNode"
            />
            <div class="text-caption q-mt-sm">Selecionado: {{ selectedNode }}</div>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Árvore com Checkboxes</div>
            <q-tree
              :nodes="checkboxTreeNodes"
              node-key="label"
              tick-strategy="leaf"
              v-model:ticked="tickedNodes"
            />
            <div class="text-caption q-mt-sm">Marcados: {{ tickedNodes.join(', ') }}</div>
          </div>
        </div>

        <div class="q-mt-lg">
          <div class="text-subtitle2 q-mb-sm">Árvore com Ícones Customizados</div>
          <q-tree
            :nodes="iconTreeNodes"
            node-key="label"
            v-model:expanded="expandedNodes"
          />
        </div>
      </q-card-section>
    </q-card>

    <!-- Timeline Section -->
    <q-card>
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="timeline" class="q-mr-sm" />
          Timeline
        </div>
        <div class="text-body2 q-mb-md">
          Linha do tempo para exibir eventos cronológicos.
        </div>
        
        <q-timeline color="secondary">
          <q-timeline-entry
            heading
            tag="h3"
          >
            Histórico do Projeto
          </q-timeline-entry>

          <q-timeline-entry
            title="Início do Projeto"
            subtitle="Janeiro 2024"
            icon="rocket_launch"
            color="positive"
          >
            <div>
              Projeto iniciado com definição dos requisitos e arquitetura inicial.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Desenvolvimento da UI"
            subtitle="Fevereiro 2024"
            icon="design_services"
            color="primary"
          >
            <div>
              Criação dos componentes principais e implementação do design system.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Integração com API"
            subtitle="Março 2024"
            icon="api"
            color="warning"
          >
            <div>
              Implementação da comunicação com serviços backend e autenticação.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Testes e Deploy"
            subtitle="Abril 2024"
            icon="verified"
            color="info"
          >
            <div>
              Execução de testes automatizados e deploy em ambiente de produção.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Lançamento"
            subtitle="Maio 2024"
            icon="celebration"
            color="purple"
          >
            <div>
              Lançamento oficial da aplicação para os usuários finais.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar, QStepper } from 'quasar';

const $q = useQuasar();

// Pagination
const basicPagination = ref(1);
const advancedPagination = ref(1);
const inputPagination = ref(1);
const sizePagination = ref(1);

// Stepper
const step = ref(1);
const stepper = ref<QStepper | null>(null);

function nextStep() {
  stepper.value?.next();
}

function previousStep() {
  stepper.value?.previous();
}
const stepperData = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  zipCode: ''
});

function finishStepper() {
  $q.notify({
    type: 'positive',
    message: 'Processo finalizado com sucesso!',
    icon: 'check_circle'
  });
  // Reset stepper
  step.value = 1;
  stepperData.value = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  };
}

// Tabs
const basicTab = ref('home');
const verticalTab = ref('dashboard');
const badgeTab = ref('messages');

// Tree
const selectedNode = ref('');
const tickedNodes = ref([]);
const expandedNodes = ref(['Documentos', 'Projetos']);

const basicTreeNodes = [
  {
    label: 'Documentos',
    children: [
      { label: 'Relatório.pdf' },
      { label: 'Apresentação.pptx' },
      {
        label: 'Planilhas',
        children: [
          { label: 'Vendas.xlsx' },
          { label: 'Orçamento.xlsx' }
        ]
      }
    ]
  },
  {
    label: 'Imagens',
    children: [
      { label: 'Logo.png' },
      { label: 'Banner.jpg' }
    ]
  },
  {
    label: 'Vídeos',
    children: [
      { label: 'Tutorial.mp4' },
      { label: 'Demo.avi' }
    ]
  }
];

const checkboxTreeNodes = [
  {
    label: 'Configurações',
    children: [
      { label: 'Notificações por email' },
      { label: 'Notificações push' },
      {
        label: 'Privacidade',
        children: [
          { label: 'Perfil público' },
          { label: 'Mostrar atividade' }
        ]
      }
    ]
  },
  {
    label: 'Preferências',
    children: [
      { label: 'Tema escuro' },
      { label: 'Idioma português' }
    ]
  }
];

const iconTreeNodes = [
  {
    label: 'Projetos',
    icon: 'folder',
    children: [
      {
        label: 'Website',
        icon: 'web',
        children: [
          { label: 'index.html', icon: 'description' },
          { label: 'style.css', icon: 'style' },
          { label: 'script.js', icon: 'code' }
        ]
      },
      {
        label: 'Mobile App',
        icon: 'phone_android',
        children: [
          { label: 'MainActivity.java', icon: 'description' },
          { label: 'layout.xml', icon: 'view_quilt' }
        ]
      }
    ]
  },
  {
    label: 'Recursos',
    icon: 'folder_special',
    children: [
      { label: 'Ícones', icon: 'image' },
      { label: 'Fontes', icon: 'font_download' },
      { label: 'Cores', icon: 'palette' }
    ]
  }
];
</script>