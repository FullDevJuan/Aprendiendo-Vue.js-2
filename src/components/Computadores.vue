<template>
  <div class="main">
    <input
      type="text"
      placeholder="Buscar por marca o modelo"
      v-model="search"
    />
    <br />
    <br />
    <button @click="abrirFormulario">Añadir +</button>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Procesador</th>
          <th>RAM</th>
          <th>Almacenamiento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <TablePc
          v-for="pc in pcFiltrados"
          :key="pc.id"
          :pc="pc"
          @edit-pc="handleEdit"
          @delete-pc="handleDelete"
        />
      </tbody>
    </table>
    <FormComputadores
      v-show="formularioActivo"
      @cancelar-edicion="cerrarFormulario"
      @crear-computador="agregarComputador"
      @actualizar-computador="actualizarComputador"
      :computador="computadorSeleccionado"
    ></FormComputadores>
  </div>
</template>
<script>
import TablePc from "./TablePc.vue";
import FormComputadores from "./FormComputadores.vue";
export default {
  name: "ComputadoresCrud",
  data() {
    return {
      search: "",
      formularioActivo: false,
      computadores: [],
      computadorSeleccionado: null,
    };
  },
  components: {
    TablePc,
    FormComputadores,
  },

  mounted() {
    this.cargarComputadores();
  },
  methods: {
    abrirFormulario() {
      this.formularioActivo = true;
    },
    cerrarFormulario() {
      this.formularioActivo = false;
    },
    handleEdit(pc) {
      this.formularioActivo = true;
      this.computadorSeleccionado = pc;
    },
    handleDelete(pc) {
      this.computadores = this.computadores.filter((c) => c.id !== pc.id);
      this.guardarComputadores();
    },
    cargarComputadores() {
      const datos = localStorage.getItem("computadores");
      if (!datos) {
        (this.computadores = [
          {
            id: 1,
            marca: "Dell",
            modelo: "XPS 13",
            procesador: "Intel Core i7",
            ram: "16GB",
            almacenamiento: "512GB SSD",
          },
          {
            id: 2,
            marca: "Apple",
            modelo: "MacBook Pro",
            procesador: "Apple M1",
            ram: "16GB",
            almacenamiento: "1TB SSD",
          },
          {
            id: 3,
            marca: "HP",
            modelo: "Spectre x360",
            procesador: "Intel Core i7",
            ram: "16GB",
            almacenamiento: "512GB SSD",
          },
        ]),
          this.guardarComputadores();
      } else {
        this.computadores = JSON.parse(datos);
      }
    },
    agregarComputador(nuevoComputador) {
      nuevoComputador.id = this.computadores.length
        ? Math.max(...this.computadores.map((c) => c.id)) + 1
        : 1;
      this.computadores.push(nuevoComputador);
      this.guardarComputadores();
      this.cerrarFormulario();
    },
    actualizarComputador(computadorActualizado) {
      const idx = this.computadores.findIndex(
        (c) => c.id === computadorActualizado.id,
      );
      if (idx !== -1) {
        this.computadores.splice(idx, 1, computadorActualizado);
        this.guardarComputadores();
        this.cerrarFormulario();
      }
    },
    guardarComputadores() {
      localStorage.setItem("computadores", JSON.stringify(this.computadores));
    },
  },
  computed: {
    pcFiltrados() {
      return this.computadores.filter((pc) => {
        const searchTerm = this.search.toLowerCase();
        return (
          pc.marca.toLowerCase().includes(searchTerm) ||
          pc.modelo.toLowerCase().includes(searchTerm)
        );
      });
    },
  },
};
</script>
<style>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
}
</style>
