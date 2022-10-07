<template>
        <b-nav-item @click="credit">{{ $t('Credit') }}</b-nav-item>
</template>

<script>
// import localforage from 'localforage';
import Swal from "sweetalert2";
export default {
    name: "credits",
    methods: {
        credit() {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'S4PY.CORD Developers',
                text: 'Malik999',
                showConfirmButton: true
            })
        },
    }
}
</script>