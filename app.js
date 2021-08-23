let vm = Vue.createApp({
    data() {
        return {
            percpective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        };
    },
    computed: {
        box() {
            return {
                transform: `perspective(${this.percpective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)`,
            };
        },
    },
    methods: {
        reset() {
            this.percpective = 0;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        copy() {
            const el = document.createElement('textarea');
            el.value = `transform: perspective(${this.percpective}px)
            rotateX(${this.rotateX}deg)
            rotateY(${this.rotateY}deg)
            rotateZ(${this.rotateZ}deg)`;
            el.style.display = 'absolute';
            el.style.left = '-999px';
            let val = el.select();
            document.execCommand('copy', val);
            el.remove()
        }
    }

});

vm.mount("#app");