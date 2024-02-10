import Modal from "@/components/Modal.vue";
import Chart from "@/components/Chart.vue";

const muhasipUI = {
	install(Vue) {
		Vue.component("m-modal", Modal);
		Vue.component("m-chart", Chart);
	},
};

export default muhasipUI;
