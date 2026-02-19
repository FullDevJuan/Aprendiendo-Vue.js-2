<template>
  <div>
    <input type="search" placeholder="Buscar Empleados..." v-model="search" />
    <p>Search is: {{ search }}</p>
    <div class="empleados-container" v-if="empleadosFiltrados.length > 0">
      <CardEmpleados
        v-for="empleado in empleadosFiltrados"
        :key="empleado.id"
        :name="empleado.name"
        :position="empleado.position"
        :department="empleado.department"
      ></CardEmpleados>
    </div>
    <p v-else>No se encontraron empleados</p>
  </div>
</template>

<script>
import CardEmpleados from "./CardEmpleados.vue";
export default {
  name: "BuscadorEmpleados",
  components: {
    CardEmpleados,
  },
  data() {
    return {
      search: "",
      empleados: [
        {
          id: 1,
          name: "Juan Perez",
          position: "Gerente de Ventas",
          department: "Ventas",
        },
        {
          id: 2,
          name: "Maria Lopez",
          position: "Analista de Marketing",
          department: "Marketing",
        },
        {
          id: 3,
          name: "Carlos Sanchez",
          position: "Desarrollador de Software",
          department: "Tecnología",
        },
        {
          id: 4,
          name: "Ana Gomez",
          position: "Especialista en Recursos Humanos",
          department: "Recursos Humanos",
        },
        {
          id: 5,
          name: "Luis Rodriguez",
          position: "Contador",
          department: "Finanzas",
        },
      ],
    };
  },
  computed: {
    empleadosFiltrados() {
      return this.empleados.filter((empleado) => {
        const text = this.search.toLowerCase();
        return (
          empleado.name.toLowerCase().includes(text) ||
          empleado.position.toLowerCase().includes(text) ||
          empleado.department.toLowerCase().includes(text)
        );
      });
    },
  },
};
</script>

<style scoped>
.empleados-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}
</style>
