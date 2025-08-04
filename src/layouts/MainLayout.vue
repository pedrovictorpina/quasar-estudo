<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar Reference Project
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="brightness_6"
          @click="$q.dark.toggle()"
          :title="$q.dark.isActive ? 'Modo Claro' : 'Modo Escuro'"
        />

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>
          Quasar Reference
        </q-item-label>

        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Início</q-item-label>
          </q-item-section>
        </q-item>

        <q-expansion-item
          icon="widgets"
          label="Componentes"
          default-opened
        >
          <q-item clickable v-ripple to="/components">
            <q-item-section avatar>
              <q-icon name="extension" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Componentes Básicos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/forms">
            <q-item-section avatar>
              <q-icon name="edit" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Formulários</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/layout">
            <q-item-section avatar>
              <q-icon name="view_quilt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Layout</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/navigation">
            <q-item-section avatar>
              <q-icon name="navigation" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Navegação</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/data-display">
            <q-item-section avatar>
              <q-icon name="table_chart" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Exibição de Dados</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/feedback">
            <q-item-section avatar>
              <q-icon name="feedback" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Feedback</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          icon="auto_awesome"
          label="Recursos Avançados"
        >
          <q-item clickable v-ripple to="/animations">
            <q-item-section avatar>
              <q-icon name="animation" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Animações</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/plugins">
            <q-item-section avatar>
              <q-icon name="power" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Plugins</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/utilities">
            <q-item-section avatar>
              <q-icon name="build" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Utilitários</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/directives">
            <q-item-section avatar>
              <q-icon name="code" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Diretivas</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/composables">
            <q-item-section avatar>
              <q-icon name="functions" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Composables</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          icon="palette"
          label="Design & Estilo"
        >
          <q-item clickable v-ripple to="/icons">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Ícones</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/themes">
            <q-item-section avatar>
              <q-icon name="color_lens" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Temas</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/responsive">
            <q-item-section avatar>
              <q-icon name="devices" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Responsivo</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-separator spaced />

        <q-item-label header>
          Links Úteis
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';

const linksList: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
