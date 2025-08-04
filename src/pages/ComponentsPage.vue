<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 q-mb-lg">
      <q-icon name="extension" class="q-mr-sm" />
      Componentes Básicos
    </div>

    <!-- Buttons Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Botões</div>
        <div class="q-gutter-md">
          <q-btn color="primary" label="Primary" />
          <q-btn color="secondary" label="Secondary" />
          <q-btn color="positive" label="Positive" />
          <q-btn color="negative" label="Negative" />
          <q-btn color="warning" label="Warning" />
          <q-btn color="info" label="Info" />
          <q-btn color="dark" label="Dark" />
        </div>
        <div class="q-gutter-md q-mt-md">
          <q-btn outline color="primary" label="Outline" />
          <q-btn flat color="primary" label="Flat" />
          <q-btn unelevated color="primary" label="Unelevated" />
          <q-btn push color="primary" label="Push" />
          <q-btn glossy color="primary" label="Glossy" />
          <q-btn fab color="primary" icon="add" />
          <q-btn fab-mini color="secondary" icon="edit" />
        </div>
        <div class="q-gutter-md q-mt-md">
          <q-btn color="primary" icon="mail" label="Com Ícone" />
          <q-btn color="secondary" icon-right="send" label="Ícone à Direita" />
          <q-btn color="positive" loading label="Carregando" />
          <q-btn color="negative" disable label="Desabilitado" />
        </div>
      </q-card-section>
    </q-card>

    <!-- Cards Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Cards</div>
        <div class="row q-gutter-md">
          <div class="col-12 col-md-4">
            <q-card>
              <q-img
                src="https://cdn.quasar.dev/img/mountains.jpg"
                style="height: 200px"
              />
              <q-card-section>
                <div class="text-h6">Card com Imagem</div>
                <div class="text-subtitle2">Exemplo de card com imagem</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </q-card-section>
              <q-card-actions>
                <q-btn flat color="primary">Ação 1</q-btn>
                <q-btn flat color="primary">Ação 2</q-btn>
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card class="bg-primary text-white">
              <q-card-section>
                <div class="text-h6">Card Colorido</div>
                <div class="text-subtitle2">Com fundo colorido</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                Este card tem um fundo colorido personalizado.
              </q-card-section>
              <q-card-actions>
                <q-btn flat color="white">Ação</q-btn>
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card bordered>
              <q-card-section>
                <div class="text-h6">Card com Borda</div>
                <div class="text-subtitle2">Estilo com bordas</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                Card com bordas visíveis para destaque.
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Chips Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Chips</div>
        <div class="q-gutter-sm">
          <q-chip color="primary" text-color="white" icon="bookmark">Chip com Ícone</q-chip>
          <q-chip color="secondary" text-color="white" removable>Removível</q-chip>
          <q-chip color="positive" text-color="white" clickable>Clicável</q-chip>
          <q-chip outline color="negative" icon="warning">Outline</q-chip>
          <q-chip square color="info" text-color="white">Quadrado</q-chip>
          <q-chip dense color="warning" text-color="white">Denso</q-chip>
        </div>
      </q-card-section>
    </q-card>

    <!-- Badges Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Badges</div>
        <div class="q-gutter-lg">
          <q-btn color="primary" label="Mensagens">
            <q-badge color="red" floating>2</q-badge>
          </q-btn>
          <q-btn color="secondary" label="Notificações">
            <q-badge color="orange" floating transparent>!</q-badge>
          </q-btn>
          <q-icon name="mail" size="2rem">
            <q-badge color="red" floating>5</q-badge>
          </q-icon>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png">
            <q-badge color="green" floating rounded>Online</q-badge>
          </q-avatar>
        </div>
      </q-card-section>
    </q-card>

    <!-- Avatars Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Avatars</div>
        <div class="q-gutter-md">
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
          <q-avatar color="primary" text-color="white" icon="person" />
          <q-avatar color="teal" text-color="white">J</q-avatar>
          <q-avatar size="xl" color="purple" text-color="white">XL</q-avatar>
          <q-avatar size="sm" color="orange" text-color="white">SM</q-avatar>
          <q-avatar square color="red" text-color="white">SQ</q-avatar>
          <q-avatar rounded color="green" text-color="white">RD</q-avatar>
        </div>
      </q-card-section>
    </q-card>

    <!-- Separators Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Separadores</div>
        <div>Texto antes do separador</div>
        <q-separator class="q-my-md" />
        <div>Texto após separador horizontal</div>
        <div class="row q-mt-md">
          <div class="col">Coluna 1</div>
          <q-separator vertical />
          <div class="col">Coluna 2</div>
          <q-separator vertical />
          <div class="col">Coluna 3</div>
        </div>
        <q-separator spaced />
        <div>Separador com espaçamento</div>
        <q-separator color="primary" class="q-my-md" />
        <div>Separador colorido</div>
      </q-card-section>
    </q-card>

    <!-- Banners Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Banners</div>
        <q-banner class="bg-primary text-white q-mb-md">
          <template v-slot:avatar>
            <q-icon name="info" color="white" />
          </template>
          Banner informativo com ícone e ações.
          <template v-slot:action>
            <q-btn flat color="white" label="Ação" />
          </template>
        </q-banner>

        <q-banner class="bg-orange text-white q-mb-md" rounded>
          <template v-slot:avatar>
            <q-icon name="warning" color="white" />
          </template>
          Banner de aviso com bordas arredondadas.
          <template v-slot:action>
            <q-btn flat color="white" label="OK" />
            <q-btn flat color="white" label="Cancelar" />
          </template>
        </q-banner>

        <q-banner class="bg-negative text-white" dense>
          <template v-slot:avatar>
            <q-icon name="error" color="white" />
          </template>
          Banner de erro compacto (dense).
        </q-banner>
      </q-card-section>
    </q-card>

    <!-- Spinners Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Spinners</div>
        <div class="q-gutter-lg text-center">
          <div>
            <q-spinner color="primary" size="3em" />
            <div class="q-mt-sm">Default</div>
          </div>
          <div>
            <q-spinner-audio color="secondary" size="3em" />
            <div class="q-mt-sm">Audio</div>
          </div>
          <div>
            <q-spinner-ball color="positive" size="3em" />
            <div class="q-mt-sm">Ball</div>
          </div>
          <div>
            <q-spinner-bars color="negative" size="3em" />
            <div class="q-mt-sm">Bars</div>
          </div>
          <div>
            <q-spinner-dots color="warning" size="3em" />
            <div class="q-mt-sm">Dots</div>
          </div>
          <div>
            <q-spinner-gears color="info" size="3em" />
            <div class="q-mt-sm">Gears</div>
          </div>
          <div>
            <q-spinner-grid color="purple" size="3em" />
            <div class="q-mt-sm">Grid</div>
          </div>
          <div>
            <q-spinner-hearts color="pink" size="3em" />
            <div class="q-mt-sm">Hearts</div>
          </div>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup lang="ts">
// Componentes básicos do Quasar - não necessita lógica adicional
</script>