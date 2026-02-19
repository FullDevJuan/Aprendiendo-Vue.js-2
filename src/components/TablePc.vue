<template>
  <tr>
    <td>{{ pc.id }}</td>
    <td>{{ pc.marca }}</td>
    <td>{{ pc.modelo }}</td>
    <td>{{ pc.procesador }}</td>
    <td>{{ pc.ram }}</td>
    <td>{{ pc.almacenamiento }}</td>
    <td class="contenedorAcciones">
      <button @click="editar">Editar</button>
      <button @click="borrar">Borrar</button>
    </td>
  </tr>
</template>
<script>
export default {
  name: "PcRows",
  props: {
    pc: Object,
  },
  methods: {
    editar() {
      this.$emit("edit-pc", this.pc);
    },
    borrar() {
      this.$emit("delete-pc", this.pc);
    },
  },
};
</script>

<style scoped>
.contenedorAcciones {
  display: flex;
  gap: 10px;
}
.contenedorAcciones button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.contenedorAcciones button:first-child {
  background-color: #1a1a1a;
  color: white;
  transition: background-color 0.3s ease;
}
</style>
