import Vue from "vue";
import Vuex from "vuex";
import Api from "../config/Api";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userDetails: {},
		testimonies: {
			count: "",
			next: "",
			previous: "",
			results: "",
		},
		events: {
			count: "",
			next: "",
			previous: "",
			results: "",
		},
		assets: {
			count: "",
			next: "",
			previous: "",
			results: "",
		},

		youtube: "",
		workShop: [],
		isAuthenticated: false,
		loading: false,
		currentPage: 1,
	},
	getters: {
		getUserDetails(state) {
			return state.userDetails;
		},

		checkAuth(state) {
			return state.isAuthenticated;
		},

		getAllTestimonies(state) {
			return state.testimonies;
		},

		getAssets(state) {
			return state.assets;
		},

		getAllWorkshops(state) {
			return state.workShop;
		},

		getAllEvents(state) {
			return state.events;
		},
	},
	mutations: {
		resetAssets(state) {
			state.assets.count = "";
			state.assets.next = "";
			state.assets.previous = "";
			state.assets.results = "";
		},
		setAuthentication(state, payload) {
			state.isAuthenticated = payload;
		},

		restorePage(state) {
			state.currentPage = 1;
		},

		setcurrentPage(state) {
			state.currentPage += 1;
		},

		setUserDetails(state, payload) {
			state.userDetails = payload;
		},

		setWorkShop(state, payload) {
			state.workShop = payload;
		},

		setTestimonials(state, payload) {
			let data = { ...state.testimonies, ...payload };
			state.testimonies.count = data.count;
			state.testimonies.next = data.next;
			state.testimonies.previous = data.previous;
			state.testimonies.results = [
				...state.testimonies.results,
				...data.results,
			];
		},

		setAssets(state, payload) {
			let data = { ...state.assets, ...payload };
			state.assets.count = data.count;
			state.assets.next = data.next;
			state.assets.previous = data.previous;
			state.assets.results = [...state.assets.results, ...data.results];
		},

		setEvents(state, payload) {
			let data = { ...state.events, ...payload };
			state.events.count = data.count;
			state.events.next = data.next;
			state.events.previous = data.previous;
			state.events.results = data.results;

			// state.events.results = [...state.events.results, ...data.results]
		},

		setLoading(state, payload) {
			state.loading = payload;
		},

		setYoutubelink(state, payload) {
			state.youtube = payload;
		},

		setToken(state, payload) {
			localStorage.setItem("access_token", payload.access);
			localStorage.setItem("refresh_token", payload.refresh);
		},
	},

	actions: {
		async youtubelife({ commit }) {
			let res = await Api.get("/live/youtube/");
			commit("setYoutubelink", res.link);
			return res;
		},

		async onlineStores({ commit, state }, payload) {
			commit("setLoading", true);

			let res = await Api.get(
				`/online-store/${payload}/?page=${state.currentPage}`
			);

			commit("setLoading", false);

			commit("setAssets", res);

			return res;
		},

		async postTestimony({}, payload) {
			let res = await Api.post(`/testimony/`, payload);

			return res;
		},

		async getTestimonies({ commit, state }) {
			commit("setLoading", true);

			let res = await Api.get(`/testimony/?page=${state.currentPage}`);

			commit("setTestimonials", res);

			commit("setLoading", false);

			return res;
		},

		async getWorkshop({ commit }) {
			let res = await Api.get("/event/workshop/");
			let merged = [].concat.apply([], res);
			commit("setWorkShop", merged);
			return res;
		},

		async postEventRegistration({ commit }, payload) {
			try {
				let res = await Api.post(
					`/event/registration/${payload.id}/`,
					payload.info
				);
				return res;
			} catch (error) {}
		},
		async salvationCreate({}, payload) {
			let res = await Api.post("/salvation/create/", payload);
			return res;
		},
		async zoomLive({}, payload) {
			let res = await Api.get("/live/zoom-meeting/", payload);
			return res;
		},
		async registerUser({ commit }, payload) {
			let res = await Api.post("/user/register/", payload);

			if (res.status == 201) {
				let { email, full_name, id, phone_number, token } = res.data;

				let userData = { email, full_name, id, phone_number };

				commit("setUserDetails", userData);

				commit("setToken", token);

				commit("setAuthentication", true);
			} else {
				commit("setAuthentication", false);
			}
			return res;
		},
		async contactUs({}, payload) {
			let res = await Api.post("/contact-us/contact-us/", payload);
			return res;
		},
		async pledge({}, payload) {
			let res = await Api.post("/pledge/create/", payload);
			return res;
		},
		async loginUser({ commit }, payload) {
			let res = await Api.post("/user/login/", payload);

			if (res.status == 200) {
				let { email, full_name, id, phone_number, token } = res.data;

				let userData = { email, full_name, id, phone_number };

				commit("setUserDetails", userData);

				commit("setToken", token);

				commit("setAuthentication", true);
			} else {
				commit("setAuthentication", false);
			}
			return res;
		},

		async subscribeNewsletter({}, payload) {
			let res = await Api.post("/contact-us/subscribe-newsletter/", payload);
			return res;
		},

		async getUpcomingEvents({ commit, state }) {
			let res = await Api.get(`/event/upcoming/?page=${state.currentPage}`);

			commit("setEvents", res);

			return res;
		},
		async logoutUser({ commit }) {
			localStorage.removeItem("access_token");
			localStorage.removeItem("refresh_token");
			commit("setAuthentication", false);
		},
	},

	plugins: [
		createPersistedState({
			paths: ["userDetails", "isAuthenticated", "events"],
		}),
	],
});
