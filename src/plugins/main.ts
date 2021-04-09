import { BigNumber } from "ethers";
import Vue from "vue";

import moment from "moment";
import VueScrollTo from "vue-scrollto";

import Loader from "@/components/loader.vue";
import { TokenSymbol } from "@/plugins/types";
import utils from "@/plugins/utils";

Vue.use(VueScrollTo);

Vue.component("Loader", Loader);

/**
 * Implementation of the tokenFormatter as a global filter
 */
Vue.filter("formatToken", (value: string, symbol: TokenSymbol) => {
  return utils.handleFormatToken(symbol, value);
});

/**
 * Implementation of the tokenFormatter as a global filter
 */
Vue.filter("formatUsdAmount", (value: string | BigNumber, price: number, symbol: TokenSymbol) => {
  return utils.getFormattedTotalPrice(Number(price), +utils.handleFormatToken(symbol, <string>value));
});

/**
 * Format date as a human-readable "XX ago"
 */
Vue.filter("formatTimeAgo", (time: moment.MomentInput) => moment(time).fromNow());

/**
 * Format date as a human-readable "M/D/YYYY h:mm:ss A"
 */
Vue.filter("formatDateTime", (time: moment.MomentInput) => moment(time).format("M/D/YYYY h:mm:ss A"));
