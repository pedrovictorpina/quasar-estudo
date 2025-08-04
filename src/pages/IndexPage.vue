<template>
  <q-page class="q-pa-lg">
    <!-- Hero Section -->
    <div class="text-center q-mb-xl">
      <div class="text-h2 text-weight-bold q-mb-md">
        <q-icon name="auto_awesome" size="lg" class="q-mr-sm" />
        Quasar Framework - Projeto de Referência
      </div>
      <div class="text-h5 text-grey-7 q-mb-lg">
        Guia completo com todas as funcionalidades disponíveis no Quasar
      </div>
      <q-btn
        color="primary"
        size="lg"
        label="Explorar Componentes"
        icon="explore"
        to="/components"
        class="q-mr-md"
      />
      <q-btn
        color="secondary"
        size="lg"
        label="Ver Documentação"
        icon="description"
        href="https://quasar.dev"
        target="_blank"
        outline
      />
    </div>

    <!-- Features Grid -->
    <div class="row q-gutter-lg q-mb-xl">
      <div class="col-12 col-md-3">
        <q-card class="full-height">
          <q-card-section class="text-center">
            <q-icon name="widgets" size="3rem" color="primary" />
            <div class="text-h6 q-mt-md">Componentes</div>
            <div class="text-body2 text-grey-7">
              Mais de 80 componentes Vue prontos para uso
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-3">
        <q-card class="full-height">
          <q-card-section class="text-center">
            <q-icon name="devices" size="3rem" color="secondary" />
            <div class="text-h6 q-mt-md">Responsivo</div>
            <div class="text-body2 text-grey-7">
              Design responsivo automático para todos os dispositivos
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-3">
        <q-card class="full-height">
          <q-card-section class="text-center">
            <q-icon name="speed" size="3rem" color="positive" />
            <div class="text-h6 q-mt-md">Performance</div>
            <div class="text-body2 text-grey-7">
              Otimizado para máxima performance e velocidade
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-3">
        <q-card class="full-height">
          <q-card-section class="text-center">
            <q-icon name="palette" size="3rem" color="warning" />
            <div class="text-h6 q-mt-md">Customização</div>
            <div class="text-body2 text-grey-7">
              Temas personalizáveis e sistema de design flexível
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Quick Navigation -->
    <q-card class="q-mb-xl">
      <q-card-section>
        <div class="text-h5 q-mb-md">Navegação Rápida</div>
        <div class="row q-gutter-md">
          <q-btn
            v-for="section in quickNavSections"
            :key="section.path"
            :to="section.path"
            :icon="section.icon"
            :label="section.label"
            :color="section.color"
            outline
            class="q-mb-sm"
          />
        </div>
      </q-card-section>
    </q-card>

    <!-- Statistics -->
    <div class="row q-gutter-lg q-mb-xl">
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6 q-mb-md">Estatísticas do Projeto</div>
            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="extension" color="primary" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Componentes Implementados</q-item-label>
                  <q-item-label caption>{{ stats.components }}+ exemplos</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="power" color="secondary" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Plugins Configurados</q-item-label>
                  <q-item-label caption>{{ stats.plugins }} plugins ativos</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="animation" color="positive" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Animações Disponíveis</q-item-label>
                  <q-item-label caption>{{ stats.animations }} animações CSS</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6 q-mb-md">Tecnologias Utilizadas</div>
            <q-chip
              v-for="tech in technologies"
              :key="tech.name"
              :icon="tech.icon"
              :color="tech.color"
              text-color="white"
              class="q-ma-xs"
            >
              {{ tech.name }}
            </q-chip>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Footer Info -->
    <q-card class="bg-grey-1">
      <q-card-section class="text-center">
        <div class="text-h6 q-mb-sm">Sobre este Projeto</div>
        <div class="text-body1">
          Este é um projeto de referência completo do Quasar Framework, criado para demonstrar
          todas as funcionalidades disponíveis. Use-o como guia para seus próprios projetos
          e explore cada seção para aprender sobre os recursos do Quasar.
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const quickNavSections = ref([
  { path: '/components', icon: 'extension', label: 'Componentes', color: 'primary' },
  { path: '/forms', icon: 'edit', label: 'Formulários', color: 'secondary' },
  { path: '/layout', icon: 'view_quilt', label: 'Layout', color: 'positive' },
  { path: '/navigation', icon: 'navigation', label: 'Navegação', color: 'warning' },
  { path: '/data-display', icon: 'table_chart', label: 'Dados', color: 'info' },
  { path: '/feedback', icon: 'feedback', label: 'Feedback', color: 'negative' },
  { path: '/animations', icon: 'animation', label: 'Animações', color: 'purple' },
  { path: '/plugins', icon: 'power', label: 'Plugins', color: 'teal' }
]);

const stats = ref({
  components: 80,
  plugins: 13,
  animations: 16
});

const technologies = ref([
  { name: 'Vue 3', icon: 'code', color: 'green' },
  { name: 'TypeScript', icon: 'code', color: 'blue' },
  { name: 'Quasar', icon: 'auto_awesome', color: 'primary' },
  { name: 'Vite', icon: 'flash_on', color: 'orange' },
  { name: 'Material Icons', icon: 'star', color: 'amber' },
  { name: 'FontAwesome', icon: 'favorite', color: 'red' },
  { name: 'Sass/SCSS', icon: 'palette', color: 'pink' }
]);
</script>
