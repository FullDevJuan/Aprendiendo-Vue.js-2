<template>
  <tr>
    <td>{{ pc.id }}</td>
    <td>{{ pc.marca }}</td>
    <td>{{ pc.modelo }}</td>
    <td>{{ pc.procesador }}</td>
    <td>{{ pc.ram }}</td>
    <td>{{ pc.almacenamiento }}</td>
    <td>
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
