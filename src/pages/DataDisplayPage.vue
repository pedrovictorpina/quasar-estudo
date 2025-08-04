<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 q-mb-lg">
      <q-icon name="table_view" class="q-mr-sm" />
      Exibição de Dados
    </div>

    <!-- Tables Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="table_chart" class="q-mr-sm" />
          Tabelas (QTable)
        </div>
        <div class="text-body2 q-mb-md">
          Componente avançado para exibição e manipulação de dados tabulares.
        </div>
        
        <q-table
          title="Lista de Usuários"
          :rows="tableRows"
          :columns="tableColumns"
          row-key="id"
          v-model:pagination="pagination"
          :loading="tableLoading"
          :filter="filter"
          binary-state-sort
          @request="onRequest"
        >
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>

          <template v-slot:body-cell-avatar="props">
            <q-td :props="props">
              <q-avatar>
                <img :src="props.row.avatar">
              </q-avatar>
            </q-td>
          </template>

          <template v-slot:body-cell-status="props">
            <q-td :props="props">
              <q-chip
                :color="props.row.status === 'Ativo' ? 'positive' : 'negative'"
                text-color="white"
                dense
                class="text-weight-bolder"
                :icon="props.row.status === 'Ativo' ? 'check_circle' : 'cancel'"
              >
                {{ props.row.status }}
              </q-chip>
            </q-td>
          </template>

          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn dense round flat color="grey" @click="editRow(props.row)" icon="edit" />
              <q-btn dense round flat color="grey" @click="deleteRow(props.row)" icon="delete" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <!-- Lists Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="list" class="q-mr-sm" />
          Listas (QList)
        </div>
        <div class="text-body2 q-mb-md">
          Componentes para exibir listas de itens com diferentes layouts.
        </div>
        
        <div class="row q-gutter-lg">
          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Lista Simples</div>
            <q-list bordered>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="primary" name="inbox" />
                </q-item-section>
                <q-item-section>Caixa de Entrada</q-item-section>
                <q-item-section side>
                  <q-badge color="red" text-color="white">5</q-badge>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="grey" name="send" />
                </q-item-section>
                <q-item-section>Enviados</q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="orange" name="drafts" />
                </q-item-section>
                <q-item-section>Rascunhos</q-item-section>
                <q-item-section side>
                  <q-badge color="orange" text-color="white">2</q-badge>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="negative" name="delete" />
                </q-item-section>
                <q-item-section>Lixeira</q-item-section>
              </q-item>
            </q-list>
          </div>

          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Lista com Avatares</div>
            <q-list bordered>
              <q-item clickable v-ripple v-for="contact in contacts" :key="contact.id">
                <q-item-section avatar>
                  <q-avatar>
                    <img :src="contact.avatar">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ contact.name }}</q-item-label>
                  <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
                </q-item-section>

                <q-item-section side>
                  <q-icon name="chat_bubble" color="green" />
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Lista Expansível</div>
            <q-list bordered>
              <q-expansion-item
                expand-separator
                icon="perm_identity"
                label="Conta"
                caption="Configurações da conta"
              >
                <q-card>
                  <q-card-section>
                    <q-item>
                      <q-item-section>Alterar senha</q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>Configurar 2FA</q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>Excluir conta</q-item-section>
                    </q-item>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                expand-separator
                icon="notifications"
                label="Notificações"
                caption="Preferências de notificação"
              >
                <q-card>
                  <q-card-section>
                    <q-item>
                      <q-item-section>Email</q-item-section>
                      <q-item-section side>
                        <q-toggle v-model="notifications.email" />
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>Push</q-item-section>
                      <q-item-section side>
                        <q-toggle v-model="notifications.push" />
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>SMS</q-item-section>
                      <q-item-section side>
                        <q-toggle v-model="notifications.sms" />
                      </q-item-section>
                    </q-item>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                expand-separator
                icon="privacy_tip"
                label="Privacidade"
                caption="Configurações de privacidade"
              >
                <q-card>
                  <q-card-section>
                    <q-item>
                      <q-item-section>Perfil público</q-item-section>
                      <q-item-section side>
                        <q-toggle v-model="privacy.publicProfile" />
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>Mostrar atividade</q-item-section>
                      <q-item-section side>
                        <q-toggle v-model="privacy.showActivity" />
                      </q-item-section>
                    </q-item>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Cards Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="credit_card" class="q-mr-sm" />
          Cards
        </div>
        <div class="text-body2 q-mb-md">
          Containers flexíveis para exibir conteúdo agrupado.
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-md-4">
            <q-card class="my-card">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-section>
                <div class="text-h6">Montanhas</div>
                <div class="text-subtitle2">Paisagem Natural</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-body2">
                  Uma bela vista das montanhas durante o pôr do sol, capturando a serenidade da natureza.
                </div>
              </q-card-section>

              <q-separator />

              <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card class="my-card bg-secondary text-white">
              <q-card-section>
                <div class="text-h6">Card Colorido</div>
                <div class="text-subtitle2">Com fundo customizado</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-body2">
                  Este card demonstra como usar cores de fundo personalizadas.
                </div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat color="white" label="Ação 1" />
                <q-btn flat color="white" label="Ação 2" />
                <q-space />
                <q-btn flat round color="white" icon="more_vert" />
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card class="my-card">
              <q-card-section class="bg-primary text-white">
                <div class="text-h6">Estatísticas</div>
                <div class="text-subtitle2">Dados do sistema</div>
              </q-card-section>

              <q-card-section>
                <q-list>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="green" name="trending_up" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Vendas</q-item-label>
                      <q-item-label caption>+15% este mês</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-item-label>R$ 12.500</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="blue" name="people" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Usuários</q-item-label>
                      <q-item-label caption>+8% este mês</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-item-label>1.234</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="orange" name="shopping_cart" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Pedidos</q-item-label>
                      <q-item-label caption>+22% este mês</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-item-label>456</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Virtual Scroll Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="view_list" class="q-mr-sm" />
          Virtual Scroll
        </div>
        <div class="text-body2 q-mb-md">
          Renderização eficiente de grandes listas de dados.
        </div>
        
        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Lista Virtual (1000 itens)</div>
            <q-virtual-scroll
              style="max-height: 300px;"
              :items="virtualItems"
              separator
              v-slot="{ item, index }"
            >
              <q-item :key="index" clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar color="primary" text-color="white">
                    {{ item.id }}
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ item.name }}</q-item-label>
                  <q-item-label caption>{{ item.description }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-badge :color="item.priority === 'Alta' ? 'red' : item.priority === 'Média' ? 'orange' : 'green'">
                    {{ item.priority }}
                  </q-badge>
                </q-item-section>
              </q-item>
            </q-virtual-scroll>
          </div>

          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Grid Virtual</div>
            <q-virtual-scroll
              type="table"
              style="max-height: 300px;"
              :items="virtualTableItems"
              :virtual-scroll-horizontal="true"
              :virtual-scroll-item-size="48"
              :virtual-scroll-sticky-size-start="48"
              :virtual-scroll-sticky-size-end="32"
            >
              <template v-slot:before>
                <thead class="thead-sticky text-left">
                  <tr>
                    <th class="text-left">ID</th>
                    <th class="text-left">Nome</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">Status</th>
                  </tr>
                </thead>
              </template>

              <template v-slot="{ item, index }">
                <tr :key="index">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td>
                    <q-chip
                      :color="item.status === 'Ativo' ? 'positive' : 'negative'"
                      text-color="white"
                      dense
                    >
                      {{ item.status }}
                    </q-chip>
                  </td>
                </tr>
              </template>
            </q-virtual-scroll>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Infinite Scroll Section -->
    <q-card>
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="all_inclusive" class="q-mr-sm" />
          Infinite Scroll
        </div>
        <div class="text-body2 q-mb-md">
          Carregamento automático de mais dados conforme o usuário rola a página.
        </div>
        
        <div style="max-height: 400px; overflow: auto;">
          <q-infinite-scroll @load="onLoad" :offset="250">
            <div v-for="(item, index) in infiniteItems" :key="index" class="q-pa-md">
              <q-card class="q-mb-sm">
                <q-card-section class="row items-center">
                  <q-avatar color="primary" text-color="white" class="q-mr-md">
                    {{ item.id }}
                  </q-avatar>
                  <div class="col">
                    <div class="text-h6">{{ item.title }}</div>
                    <div class="text-body2">{{ item.content }}</div>
                  </div>
                  <q-btn flat round color="grey" icon="more_vert" />
                </q-card-section>
              </q-card>
            </div>

            <template v-slot:loading>
              <div class="row justify-center q-my-md">
                <q-spinner-dots color="primary" size="40px" />
              </div>
            </template>
          </q-infinite-scroll>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

// Table data
const tableColumns = [
  {
    name: 'avatar',
    label: '',
    field: 'avatar',
    align: 'left' as const
  },
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
    field: 'email',
    sortable: true
  },
  {
    name: 'role',
    label: 'Cargo',
    field: 'role',
    sortable: true
  },
  {
    name: 'status',
    label: 'Status',
    field: 'status',
    sortable: true
  },
  {
    name: 'actions',
    label: 'Ações',
    field: 'actions'
  }
];

const tableRows = ref([
  {
    id: 1,
    name: 'João Silva',
    email: 'joao@email.com',
    role: 'Desenvolvedor',
    status: 'Ativo',
    avatar: 'https://cdn.quasar.dev/img/avatar1.jpg'
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@email.com',
    role: 'Designer',
    status: 'Ativo',
    avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'
  },
  {
    id: 3,
    name: 'Pedro Costa',
    email: 'pedro@email.com',
    role: 'Gerente',
    status: 'Inativo',
    avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'
  },
  {
    id: 4,
    name: 'Ana Oliveira',
    email: 'ana@email.com',
    role: 'Analista',
    status: 'Ativo',
    avatar: 'https://cdn.quasar.dev/img/avatar4.jpg'
  },
  {
    id: 5,
    name: 'Carlos Ferreira',
    email: 'carlos@email.com',
    role: 'Desenvolvedor',
    status: 'Ativo',
    avatar: 'https://cdn.quasar.dev/img/avatar5.jpg'
  }
]);

const pagination = ref({
  sortBy: 'name',
  descending: false,
  page: 1,
  rowsPerPage: 5
});

const tableLoading = ref(false);
const filter = ref('');

interface TableRow {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  avatar: string;
}

function onRequest() {
  tableLoading.value = true;
  // Simulate API call
  setTimeout(() => {
    tableLoading.value = false;
  }, 1000);
}

function editRow(row: TableRow) {
  $q.notify(`Editando ${row.name}`);
}

function deleteRow(row: TableRow) {
  $q.dialog({
    title: 'Confirmar',
    message: `Deseja excluir ${row.name}?`,
    cancel: true,
    persistent: true
  }).onOk(() => {
    const index = tableRows.value.findIndex(r => r.id === row.id);
    if (index > -1) {
      tableRows.value.splice(index, 1);
      $q.notify(`${row.name} foi excluído`);
    }
  });
}

// Contacts data
const contacts = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao@email.com',
    avatar: 'https://cdn.quasar.dev/img/avatar1.jpg'
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@email.com',
    avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'
  },
  {
    id: 3,
    name: 'Pedro Costa',
    email: 'pedro@email.com',
    avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'
  },
  {
    id: 4,
    name: 'Ana Oliveira',
    email: 'ana@email.com',
    avatar: 'https://cdn.quasar.dev/img/avatar4.jpg'
  }
];

// Settings data
const notifications = ref({
  email: true,
  push: false,
  sms: true
});

const privacy = ref({
  publicProfile: false,
  showActivity: true
});

// Virtual scroll data
const virtualItems = ref<Array<{ id: number; name: string; description: string; priority: string | undefined }>>([]);
const virtualTableItems = ref<Array<{ id: number; name: string; email: string; status: string | undefined }>>([]);

// Infinite scroll data
const infiniteItems = ref<Array<{ id: number; title: string; content: string }>>([]);
let infiniteIndex = 0;

function generateVirtualItems() {
  const items = [];
  const priorities = ['Alta', 'Média', 'Baixa'];
  
  for (let i = 1; i <= 1000; i++) {
    items.push({
      id: i,
      name: `Item ${i}`,
      description: `Descrição do item ${i}`,
      priority: priorities[Math.floor(Math.random() * priorities.length)]
    });
  }
  
  virtualItems.value = items;
}

function generateVirtualTableItems() {
  const items = [];
  const statuses = ['Ativo', 'Inativo'];
  
  for (let i = 1; i <= 500; i++) {
    items.push({
      id: i,
      name: `Usuário ${i}`,
      email: `usuario${i}@email.com`,
      status: statuses[Math.floor(Math.random() * statuses.length)]
    });
  }
  
  virtualTableItems.value = items;
}

function onLoad(index: number, done: () => void) {
  setTimeout(() => {
    const newItems = [];
    for (let i = 0; i < 10; i++) {
      infiniteIndex++;
      newItems.push({
        id: infiniteIndex,
        title: `Post ${infiniteIndex}`,
        content: `Este é o conteúdo do post número ${infiniteIndex}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
      });
    }
    
    infiniteItems.value.push(...newItems);
    done();
  }, 1000);
}

onMounted(() => {
  generateVirtualItems();
  generateVirtualTableItems();
  
  // Initialize infinite scroll with some items
  for (let i = 1; i <= 10; i++) {
    infiniteIndex++;
    infiniteItems.value.push({
      id: infiniteIndex,
      title: `Post ${infiniteIndex}`,
      content: `Este é o conteúdo do post número ${infiniteIndex}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    });
  }
});
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}

.thead-sticky tr > *,
.tfoot-sticky tr > * {
  position: sticky;
  opacity: 1;
  z-index: 1;
  background: #fff;
}

.thead-sticky tr:last-child > * {
  top: 0;
}

.tfoot-sticky tr:first-child > * {
  bottom: 0;
}
</style>