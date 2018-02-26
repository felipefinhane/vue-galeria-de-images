import Vue from 'vue';

Vue.directive('meu-transform', {
    bind(el, binding, vnode) {
        let current = 0;

        el.addEventListener('dblclick', function() {
            let animate = false;
            let incremento = 90;
            if (binding.value) {
                animate = binding.value.animate;
                incremento = binding.value.incremento;   
            }
            current += incremento;
            el.style.transform = `rotate(${current}deg)`;
            if (animate) el.style.transition = 'transform 0.5s';
        });
    }
});