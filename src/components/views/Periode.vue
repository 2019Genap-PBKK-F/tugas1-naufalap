<template>
  <div>
    <div id="app" ref="spreadsheet"></div>
    <div>
        <input class="btn btn-primary tambah" type="button" value="Add New Row" @click="() => spreadsheet.insertRow()" />
        <input class="btn btn-primary tambah" type="button" value="Delete Selected Row" @click="() => spreadsheet.deleteRow()" />
    </div>
  </div>
</template>

<script>
import jexcel from 'jexcel'
import 'jexcel/dist/jexcel.css'
import axios from 'axios'
var host = 'http://10.199.14.46:8002/'
export default {
  // name: 'App',
  data() {
    return {
      periode: [],
      form: {
        nama: 'blank'
      }
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      axios.get(host + 'api/periode/').then(res => {
        console.log(res.data)
        var jexcelOptions = {
          data: res.data,
          allowToolbar: true,
          onchange: this.updateRow,
          oninsertrow: this.newRow,
          ondeleterow: this.deleteRow,
          responsive: true,
          columns: [
            { type: 'text', title: 'Tahun', width: '120px' },
            { type: 'text', title: 'Nama', width: '120px' },
            { type: 'text', title: 'Create Date', width: '200px', readOnly: true },
            { type: 'text', title: 'Last Update', width: '200px', readOnly: true }
          ]
        }
        let spreadsheet = jexcel(this.$el, jexcelOptions)
        Object.assign(this, { spreadsheet })
      })
    },
    newRow() {
      axios.post(host + 'api/periode/', this.form).then(res => {
        console.log(res.data)
      })
    },
    updateRow(instance, cell, columns, row, value) {
      axios.get(host + 'api/periode/').then(res => {
        var index = Object.values(res.data[row])
        index[columns] = value
        console.log(index)
        axios.put(host + 'api/periode/' + index[0], {
          id: index[0],
          nama: index[1],
          create_date: index[2],
          last_update: index[3]
        }).then(res => {
          console.log(res.data)
        })
      })
    },
    deleteRow(instance, row) {
      axios.get(host + 'api/periode/').then(res => {
        var index = Object.values(res.data[row])
        // console.log(index)
        console.log(row)
        axios.delete(host + 'api/periode/' + index[0])
      })
    }
  }
}
</script>
<style>
  .tambah {
    margin-top: 10pt;
    margin-bottom: 10pt;
    margin-left: 10pt;
    }
</style>
