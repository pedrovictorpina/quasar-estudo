<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 q-mb-lg">
      <q-icon name="edit" class="q-mr-sm" />
      Formulários e Inputs
    </div>

    <!-- Text Inputs Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Campos de Texto</div>
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <q-input
              v-model="form.name"
              label="Nome"
              hint="Digite seu nome completo"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="form.email"
              type="email"
              label="E-mail"
              hint="exemplo@email.com"
              :rules="[val => !!val || 'Campo obrigatório', val => /.+@.+\..+/.test(val) || 'E-mail inválido']"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              label="Senha"
              hint="Mínimo 8 caracteres"
            >
              <template v-slot:append>
                <q-icon
                  :name="showPassword ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="showPassword = !showPassword"
                />
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="form.phone"
              label="Telefone"
              mask="(##) #####-####"
              hint="(11) 99999-9999"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Textarea Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Área de Texto</div>
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <q-input
              v-model="form.description"
              type="textarea"
              label="Descrição"
              hint="Descreva em detalhes"
              rows="4"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="form.comments"
              type="textarea"
              label="Comentários"
              autogrow
              hint="Área que cresce automaticamente"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Select Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Seleção</div>
        <div class="row q-gutter-md">
          <div class="col-12 col-md-4">
            <q-select
              v-model="form.country"
              :options="countries"
              label="País"
              hint="Selecione seu país"
            />
          </div>
          <div class="col-12 col-md-4">
            <q-select
              v-model="form.skills"
              :options="skillOptions"
              label="Habilidades"
              multiple
              hint="Múltipla seleção"
            />
          </div>
          <div class="col-12 col-md-4">
            <q-select
              v-model="form.category"
              :options="categories"
              label="Categoria"
              use-input
              input-debounce="0"
              @filter="filterCategories"
              hint="Com busca"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    Nenhum resultado
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Checkboxes and Radio Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Checkboxes e Radio Buttons</div>
        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Checkboxes</div>
            <q-checkbox v-model="form.newsletter" label="Receber newsletter" />
            <q-checkbox v-model="form.terms" label="Aceito os termos de uso" />
            <q-checkbox v-model="form.notifications" label="Receber notificações" />
            <q-checkbox v-model="form.marketing" label="Aceito receber e-mails de marketing" />
          </div>
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Radio Buttons</div>
            <q-radio v-model="form.gender" val="male" label="Masculino" />
            <q-radio v-model="form.gender" val="female" label="Feminino" />
            <q-radio v-model="form.gender" val="other" label="Outro" />
            <q-radio v-model="form.gender" val="prefer-not-to-say" label="Prefiro não informar" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Toggle and Option Group Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Toggles e Grupos de Opções</div>
        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Toggles</div>
            <q-toggle v-model="form.darkMode" label="Modo escuro" />
            <q-toggle v-model="form.autoSave" label="Salvamento automático" color="green" />
            <q-toggle v-model="form.soundEnabled" label="Sons habilitados" color="orange" />
          </div>
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Grupo de Opções</div>
            <q-option-group
              v-model="form.contactMethod"
              :options="contactOptions"
              color="primary"
              type="radio"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Sliders and Range Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Sliders e Ranges</div>
        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Slider Simples</div>
            <q-slider
              v-model="form.volume"
              :min="0"
              :max="100"
              label
              color="primary"
            />
            <div class="text-caption">Volume: {{ form.volume }}%</div>
          </div>
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">Range Slider</div>
            <q-range
              v-model="form.priceRange"
              :min="0"
              :max="1000"
              label
              color="secondary"
            />
            <div class="text-caption">Faixa de preço: R$ {{ form.priceRange.min }} - R$ {{ form.priceRange.max }}</div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Date and Time Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Data e Hora</div>
        <div class="row q-gutter-md">
          <div class="col-12 col-md-4">
            <q-input
              v-model="form.birthDate"
              label="Data de Nascimento"
              mask="##/##/####"
              hint="DD/MM/AAAA"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="form.birthDate" mask="DD/MM/YYYY">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Fechar" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="form.appointmentTime"
              label="Horário do Agendamento"
              mask="##:##"
              hint="HH:MM"
            >
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-time v-model="form.appointmentTime" format24h>
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Fechar" color="primary" flat />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="form.eventDateTime"
              label="Data e Hora do Evento"
              mask="##/##/#### ##:##"
              hint="DD/MM/AAAA HH:MM"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="form.eventDateTime" mask="DD/MM/YYYY HH:mm">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Fechar" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- File Upload Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Upload de Arquivos</div>
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <q-file
              v-model="form.avatar"
              label="Avatar"
              accept=".jpg, .png, .gif"
              max-file-size="2097152"
              @rejected="onRejected"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
          </div>
          <div class="col-12 col-md-6">
            <q-file
              v-model="form.documents"
              label="Documentos"
              multiple
              accept=".pdf, .doc, .docx"
            >
              <template v-slot:prepend>
                <q-icon name="folder" />
              </template>
            </q-file>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Rating Section -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">Avaliações</div>
        <div class="row q-gutter-lg">
          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Avaliação com Estrelas</div>
            <q-rating
              v-model="form.starRating"
              max="5"
              size="2em"
              color="yellow"
              icon="star"
            />
            <div class="text-caption">{{ form.starRating }} de 5 estrelas</div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Avaliação com Corações</div>
            <q-rating
              v-model="form.heartRating"
              max="5"
              size="2em"
              color="red"
              icon="favorite"
            />
            <div class="text-caption">{{ form.heartRating }} corações</div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-subtitle2 q-mb-sm">Avaliação Customizada</div>
            <q-rating
              v-model="form.customRating"
              max="10"
              size="1.5em"
              color="primary"
              icon="thumb_up"
            />
            <div class="text-caption">{{ form.customRating }} de 10</div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Form Actions -->
    <q-card>
      <q-card-section>
        <div class="text-h6 q-mb-md">Ações do Formulário</div>
        <div class="q-gutter-md">
          <q-btn color="primary" label="Salvar" icon="save" @click="saveForm" />
          <q-btn color="secondary" label="Limpar" icon="clear" outline @click="clearForm" />
          <q-btn color="negative" label="Cancelar" icon="cancel" flat @click="cancelForm" />
          <q-btn color="positive" label="Validar" icon="check_circle" @click="validateForm" />
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const showPassword = ref(false);

const form = ref({
  name: '',
  email: '',
  password: '',
  phone: '',
  description: '',
  comments: '',
  country: null,
  skills: [],
  category: null,
  newsletter: false,
  terms: false,
  notifications: true,
  marketing: false,
  gender: '',
  darkMode: false,
  autoSave: true,
  soundEnabled: false,
  contactMethod: 'email',
  volume: 50,
  priceRange: { min: 100, max: 500 },
  birthDate: '',
  appointmentTime: '',
  eventDateTime: '',
  avatar: null,
  documents: [],
  starRating: 0,
  heartRating: 0,
  customRating: 0
});

const countries = ref([
  'Brasil', 'Argentina', 'Chile', 'Uruguai', 'Paraguai',
  'Estados Unidos', 'Canadá', 'México', 'França', 'Alemanha',
  'Itália', 'Espanha', 'Portugal', 'Reino Unido', 'Japão'
]);

const skillOptions = ref([
  'JavaScript', 'TypeScript', 'Vue.js', 'React', 'Angular',
  'Node.js', 'Python', 'Java', 'C#', 'PHP', 'Go', 'Rust'
]);

const allCategories = ref([
  'Tecnologia', 'Saúde', 'Educação', 'Finanças', 'Marketing',
  'Vendas', 'Design', 'Recursos Humanos', 'Jurídico', 'Engenharia'
]);

const categories = ref([...allCategories.value]);

const contactOptions = ref([
  { label: 'E-mail', value: 'email' },
  { label: 'Telefone', value: 'phone' },
  { label: 'SMS', value: 'sms' },
  { label: 'WhatsApp', value: 'whatsapp' }
]);

function filterCategories(val: string, update: (fn: () => void) => void) {
  update(() => {
    if (val === '') {
      categories.value = [...allCategories.value];
    } else {
      const needle = val.toLowerCase();
      categories.value = allCategories.value.filter(
        v => v.toLowerCase().indexOf(needle) > -1
      );
    }
  });
}

function onRejected() {
  $q.notify({
    type: 'negative',
    message: 'Arquivo rejeitado. Verifique o tipo e tamanho do arquivo.'
  });
}

function saveForm() {
  $q.notify({
    type: 'positive',
    message: 'Formulário salvo com sucesso!',
    icon: 'save'
  });
}

function clearForm() {
  const formData = form.value as Record<string, unknown>;
  Object.keys(formData).forEach(key => {
    if (typeof formData[key] === 'string') {
      formData[key] = '';
    } else if (typeof formData[key] === 'boolean') {
      formData[key] = false;
    } else if (Array.isArray(formData[key])) {
      formData[key] = [];
    } else if (typeof formData[key] === 'number') {
      formData[key] = 0;
    } else if (formData[key] && typeof formData[key] === 'object') {
      formData[key] = null;
    }
  });
  
  // Reset specific values
  form.value.volume = 50;
  form.value.priceRange = { min: 100, max: 500 };
  form.value.notifications = true;
  form.value.autoSave = true;
  form.value.contactMethod = 'email';
  
  $q.notify({
    type: 'info',
    message: 'Formulário limpo!',
    icon: 'clear'
  });
}

function cancelForm() {
  $q.notify({
    type: 'warning',
    message: 'Operação cancelada',
    icon: 'cancel'
  });
}

function validateForm() {
  const errors = [];
  
  if (!form.value.name) errors.push('Nome é obrigatório');
  if (!form.value.email) errors.push('E-mail é obrigatório');
  if (!form.value.terms) errors.push('Você deve aceitar os termos de uso');
  
  if (errors.length > 0) {
    $q.notify({
      type: 'negative',
      message: `Erros encontrados: ${errors.join(', ')}`,
      icon: 'error'
    });
  } else {
    $q.notify({
      type: 'positive',
      message: 'Formulário válido!',
      icon: 'check_circle'
    });
  }
}
</script>