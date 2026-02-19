<template>
  <div class="formContainer">
    <h2>{{ edicion ? "Editar computador" : "Crear computador" }}</h2>
    <form @submit.prevent="guardar">
      <div class="form-inputs">
        <label for="marca">Marca</label>
        <input
          type="text"
          name="marca"
          id="marca"
          v-model="formulario.marca"
          required
        />
      </div>
      <div class="form-inputs">
        <label for="modelo">Modelo</label>
        <input
          type="text"
          name="modelo"
          id="modelo"
          v-model="formulario.modelo"
          required
        />
      </div>
      <div class="form-inputs">
        <label for="procesador">Procesador</label>
        <input
          type="text"
          name="procesador"
          id="procesador"
          v-model="formulario.procesador"
          required
        />
      </div>
      <div class="form-inputs">
        <label for="ram">Ram</label>
        <input
          type="text"
          name="ram"
          id="ram"
          v-model="formulario.ram"
          required
        />
      </div>
      <div class="form-inputs">
        <label for="almacenamiento">Almacenamiento</label>
        <input
          type="text"
          name="almacenamiento"
          id="almacenamiento"
          v-model="formulario.almacenamiento"
          required
        />
      </div>
      <div class="form-btns">
        <button type="submit">{{ edicion ? "Actualizar" : "Crear" }}</button>
        <button type="button" @click="cancelar">Cancelar</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "FormComputadores",
  props: {
    computador: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      formulario: {
        id: null,
        marca: "",
        modelo: "",
        procesador: "",
        ram: "",
        almacenamiento: "",
      },
    };
  },
  computed: {
    edicion() {
      return this.formulario.id !== null;
    },
  },
  watch: {
    computador: {
      handler(nuevoComputador) {
        if (nuevoComputador) {
          this.formulario = { ...nuevoComputador };
        } else {
          this.limpiarFormulario();
        }
      },
      deep: true,
    },
  },
  methods: {
    cancelar() {
      this.$emit("cancelar-edicion");
      this.limpiarFormulario();
    },
    guardar() {
      if (this.edicion) {
        this.$emit("actualizar-computador", this.formulario);
      } else {
        this.$emit("crear-computador", this.formulario);
      }
      this.limpiarFormulario();
    },
    limpiarFormulario() {
      this.formulario = {
        id: null,
        marca: "",
        modelo: "",
        procesador: "",
        ram: "",
        almacenamiento: "",
      };
    },
  },
};
</script>
<style scoped>
.formContainer {
  max-width: 300px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.form-inputs {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input {
  outline: none;
  font-family: monospace;
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-btns {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

button {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}
button[type="submit"] {
  background-color: #1a1a1a;
  color: white;
}

button[type="submit"]:hover {
  background-color: #2a2a2a;
}

button[type="button"] {
  border: 1px solid #111;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.842);
}
button[type="button"]:hover {
  background-color: rgba(0, 0, 0, 0.051);
}
</style>
