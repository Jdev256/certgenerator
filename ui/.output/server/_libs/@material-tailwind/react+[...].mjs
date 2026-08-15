import { o as __toESM$1, t as __commonJSMin } from "../../_runtime.mjs";
import { C as flip, E as size, O as require_react, S as arrow, T as shift, _ as useListItem, a as FloatingPortal, b as useRole, c as useClick, d as useFloatingNodeId, f as useFloatingParentNodeId, g as useInteractions, h as useHover, i as FloatingOverlay, l as useDismiss, m as useFocus, n as FloatingList, o as FloatingTree, p as useFloatingTree, r as FloatingNode, s as safePolygon, t as FloatingFocusManager, u as useFloating, v as useListNavigation, w as offset, x as useTypeahead, y as useMergeRefs } from "../@floating-ui/react+[...].mjs";
import { n as autoUpdate } from "../@floating-ui/dom+[...].mjs";
//#region node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
}));
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-AXCKF2IS.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") {
		for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: () => from[key],
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
//#region node_modules/hex-rgb/index.js
var hexCharacters = "a-f\\d";
var match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
var match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
var nonHexChars = new RegExp(`[^#${hexCharacters}]`, "gi");
var validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, "i");
function hexRgb(hex, options = {}) {
	if (typeof hex !== "string" || nonHexChars.test(hex) || !validHexSize.test(hex)) throw new TypeError("Expected a valid hex string");
	hex = hex.replace(/^#/, "");
	let alphaFromHex = 1;
	if (hex.length === 8) {
		alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
		hex = hex.slice(0, 6);
	}
	if (hex.length === 4) {
		alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
		hex = hex.slice(0, 3);
	}
	if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	const number = Number.parseInt(hex, 16);
	const red = number >> 16;
	const green = number >> 8 & 255;
	const blue = number & 255;
	const alpha = typeof options.alpha === "number" ? options.alpha : alphaFromHex;
	if (options.format === "array") return [
		red,
		green,
		blue,
		alpha
	];
	if (options.format === "css") return `rgb(${red} ${green} ${blue}${alpha === 1 ? "" : ` / ${Number((alpha * 100).toFixed(2))}%`})`;
	return {
		red,
		green,
		blue,
		alpha
	};
}
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-AR6FBTF5.js
var require_createPlugin = __commonJS({ "../../node_modules/.pnpm/tailwindcss@3.4.13/node_modules/tailwindcss/lib/util/createPlugin.js"(exports) {
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	Object.defineProperty(exports, "default", {
		enumerable: true,
		get: function() {
			return _default;
		}
	});
	function createPlugin(plugin2, config) {
		return {
			handler: plugin2,
			config
		};
	}
	createPlugin.withOptions = function(pluginFunction, configFunction = () => ({})) {
		const optionsFunction = function(options) {
			return {
				__options: options,
				handler: pluginFunction(options),
				config: configFunction(options)
			};
		};
		optionsFunction.__isOptionsFunction = true;
		optionsFunction.__pluginFunction = pluginFunction;
		optionsFunction.__configFunction = configFunction;
		return optionsFunction;
	};
	var _default = createPlugin;
} });
var require_create_plugin = __commonJS({ "../../node_modules/.pnpm/tailwindcss@3.4.13/node_modules/tailwindcss/lib/public/create-plugin.js"(exports) {
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	Object.defineProperty(exports, "default", {
		enumerable: true,
		get: function() {
			return _default;
		}
	});
	var _createPlugin = /* @__PURE__ */ _interop_require_default(require_createPlugin());
	function _interop_require_default(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	var _default = _createPlugin.default;
} });
var require_plugin = __commonJS({ "../../node_modules/.pnpm/tailwindcss@3.4.13/node_modules/tailwindcss/plugin.js"(exports, module) {
	"use strict";
	var createPlugin = require_create_plugin();
	module.exports = (createPlugin.__esModule ? createPlugin : { default: createPlugin }).default;
} });
var require_tailwindcss_animate = __commonJS({ "../../node_modules/.pnpm/tailwindcss-animate@1.0.7_tailwindcss@3.4.13/node_modules/tailwindcss-animate/index.js"(exports, module) {
	"use strict";
	var plugin2 = require_plugin();
	function filterDefault(values) {
		return Object.fromEntries(Object.entries(values).filter(([key]) => key !== "DEFAULT"));
	}
	module.exports = plugin2(({ addUtilities, matchUtilities, theme }) => {
		addUtilities({
			"@keyframes enter": theme("keyframes.enter"),
			"@keyframes exit": theme("keyframes.exit"),
			".animate-in": {
				animationName: "enter",
				animationDuration: theme("animationDuration.DEFAULT"),
				"--tw-enter-opacity": "initial",
				"--tw-enter-scale": "initial",
				"--tw-enter-rotate": "initial",
				"--tw-enter-translate-x": "initial",
				"--tw-enter-translate-y": "initial"
			},
			".animate-out": {
				animationName: "exit",
				animationDuration: theme("animationDuration.DEFAULT"),
				"--tw-exit-opacity": "initial",
				"--tw-exit-scale": "initial",
				"--tw-exit-rotate": "initial",
				"--tw-exit-translate-x": "initial",
				"--tw-exit-translate-y": "initial"
			}
		});
		matchUtilities({
			"fade-in": (value) => ({ "--tw-enter-opacity": value }),
			"fade-out": (value) => ({ "--tw-exit-opacity": value })
		}, { values: theme("animationOpacity") });
		matchUtilities({
			"zoom-in": (value) => ({ "--tw-enter-scale": value }),
			"zoom-out": (value) => ({ "--tw-exit-scale": value })
		}, { values: theme("animationScale") });
		matchUtilities({
			"spin-in": (value) => ({ "--tw-enter-rotate": value }),
			"spin-out": (value) => ({ "--tw-exit-rotate": value })
		}, { values: theme("animationRotate") });
		matchUtilities({
			"slide-in-from-top": (value) => ({ "--tw-enter-translate-y": `-${value}` }),
			"slide-in-from-bottom": (value) => ({ "--tw-enter-translate-y": value }),
			"slide-in-from-left": (value) => ({ "--tw-enter-translate-x": `-${value}` }),
			"slide-in-from-right": (value) => ({ "--tw-enter-translate-x": value }),
			"slide-out-to-top": (value) => ({ "--tw-exit-translate-y": `-${value}` }),
			"slide-out-to-bottom": (value) => ({ "--tw-exit-translate-y": value }),
			"slide-out-to-left": (value) => ({ "--tw-exit-translate-x": `-${value}` }),
			"slide-out-to-right": (value) => ({ "--tw-exit-translate-x": value })
		}, { values: theme("animationTranslate") });
		matchUtilities({ duration: (value) => ({ animationDuration: value }) }, { values: filterDefault(theme("animationDuration")) });
		matchUtilities({ delay: (value) => ({ animationDelay: value }) }, { values: theme("animationDelay") });
		matchUtilities({ ease: (value) => ({ animationTimingFunction: value }) }, { values: filterDefault(theme("animationTimingFunction")) });
		addUtilities({
			".running": { animationPlayState: "running" },
			".paused": { animationPlayState: "paused" }
		});
		matchUtilities({ "fill-mode": (value) => ({ animationFillMode: value }) }, { values: theme("animationFillMode") });
		matchUtilities({ direction: (value) => ({ animationDirection: value }) }, { values: theme("animationDirection") });
		matchUtilities({ repeat: (value) => ({ animationIterationCount: value }) }, { values: theme("animationRepeat") });
	}, { theme: { extend: {
		animationDelay: ({ theme }) => ({ ...theme("transitionDelay") }),
		animationDuration: ({ theme }) => ({
			0: "0ms",
			...theme("transitionDuration")
		}),
		animationTimingFunction: ({ theme }) => ({ ...theme("transitionTimingFunction") }),
		animationFillMode: {
			none: "none",
			forwards: "forwards",
			backwards: "backwards",
			both: "both"
		},
		animationDirection: {
			normal: "normal",
			reverse: "reverse",
			alternate: "alternate",
			"alternate-reverse": "alternate-reverse"
		},
		animationOpacity: ({ theme }) => ({
			DEFAULT: 0,
			...theme("opacity")
		}),
		animationTranslate: ({ theme }) => ({
			DEFAULT: "100%",
			...theme("translate")
		}),
		animationScale: ({ theme }) => ({
			DEFAULT: 0,
			...theme("scale")
		}),
		animationRotate: ({ theme }) => ({
			DEFAULT: "30deg",
			...theme("rotate")
		}),
		animationRepeat: {
			0: "0",
			1: "1",
			infinite: "infinite"
		},
		keyframes: {
			enter: { from: {
				opacity: "var(--tw-enter-opacity, 1)",
				transform: "translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))"
			} },
			exit: { to: {
				opacity: "var(--tw-exit-opacity, 1)",
				transform: "translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))"
			} }
		}
	} } });
} });
var import_plugin = __toESM(require_plugin(), 1);
var import_tailwindcss_animate = __toESM(require_tailwindcss_animate(), 1);
function getRgbChannels(hex) {
	const { red, green, blue } = hexRgb(hex);
	return `${red} ${green} ${blue}`;
}
import_plugin.default.withOptions(function(options) {
	return function({ addBase }) {
		addBase({
			":root": {
				"--radius": options?.radius || "1.5rem",
				"--font-sans": options?.fonts?.sans || "Inter",
				"--font-serif": options?.fonts?.serif || "",
				"--font-mono": options?.fonts?.mono || "Fira Code",
				"--color-background": getRgbChannels(options?.colors?.background || "#ffffff"),
				"--color-foreground": getRgbChannels(options?.colors?.foreground || "#475569"),
				"--color-black": getRgbChannels(options?.colors?.black || "#020617"),
				"--color-white": getRgbChannels(options?.colors?.white || "#ffffff"),
				"--color-surface": getRgbChannels(options?.colors?.surface?.default || "#e2e8f0"),
				"--color-surface-dark": getRgbChannels(options?.colors?.surface?.dark || "#cbd5e1"),
				"--color-surface-light": getRgbChannels(options?.colors?.surface?.light || "#f1f5f9"),
				"--color-surface-foreground": getRgbChannels(options?.colors?.surface?.foreground || "#020617"),
				"--color-primary": getRgbChannels(options?.colors?.primary?.default || "#1e293b"),
				"--color-primary-dark": getRgbChannels(options?.colors?.primary?.dark || "#0f172a"),
				"--color-primary-light": getRgbChannels(options?.colors?.primary?.light || "#334155"),
				"--color-primary-foreground": getRgbChannels(options?.colors?.primary?.foreground || "#f8fafc"),
				"--color-secondary": getRgbChannels(options?.colors?.secondary?.default || "#e2e8f0"),
				"--color-secondary-dark": getRgbChannels(options?.colors?.secondary?.dark || "#cbd5e1"),
				"--color-secondary-light": getRgbChannels(options?.colors?.secondary?.light || "#f1f5f9"),
				"--color-secondary-foreground": getRgbChannels(options?.colors?.secondary?.foreground || "#020617"),
				"--color-info": getRgbChannels(options?.colors?.info?.default || "#0062ff"),
				"--color-info-dark": getRgbChannels(options?.colors?.info?.dark || "#0055dd"),
				"--color-info-light": getRgbChannels(options?.colors?.info?.light || "#007aff"),
				"--color-info-foreground": getRgbChannels(options?.colors?.info?.foreground || "#f8fafc"),
				"--color-success": getRgbChannels(options?.colors?.success?.default || "#00bf6b"),
				"--color-success-dark": getRgbChannels(options?.colors?.success?.dark || "#00a35f"),
				"--color-success-light": getRgbChannels(options?.colors?.success?.light || "#02e585"),
				"--color-success-foreground": getRgbChannels(options?.colors?.success?.foreground || "#f8fafc"),
				"--color-warning": getRgbChannels(options?.colors?.warning?.default || "#fca327"),
				"--color-warning-dark": getRgbChannels(options?.colors?.warning?.dark || "#f67d0a"),
				"--color-warning-light": getRgbChannels(options?.colors?.warning?.light || "#fdba4c"),
				"--color-warning-foreground": getRgbChannels(options?.colors?.warning?.foreground || "#f8fafc"),
				"--color-error": getRgbChannels(options?.colors?.error?.default || "#ef4444"),
				"--color-error-dark": getRgbChannels(options?.colors?.error?.dark || "#dc2626"),
				"--color-error-light": getRgbChannels(options?.colors?.error?.light || "#f87171"),
				"--color-error-foreground": getRgbChannels(options?.colors?.error?.foreground || "#f8fafc")
			},
			".dark": {
				"--color-background": getRgbChannels(options?.darkColors?.background || "#020617"),
				"--color-foreground": getRgbChannels(options?.darkColors?.foreground || "#94a3b8"),
				"--color-black": getRgbChannels(options?.darkColors?.black || "#020617"),
				"--color-white": getRgbChannels(options?.darkColors?.white || "#ffffff"),
				"--color-surface": getRgbChannels(options?.darkColors?.surface?.default || "#1e293b"),
				"--color-surface-dark": getRgbChannels(options?.darkColors?.surface?.dark || "#0f172a"),
				"--color-surface-light": getRgbChannels(options?.darkColors?.surface?.light || "#334155"),
				"--color-surface-foreground": getRgbChannels(options?.darkColors?.surface?.foreground || "#f8fafc"),
				"--color-primary": getRgbChannels(options?.darkColors?.primary?.default || "#e2e8f0"),
				"--color-primary-dark": getRgbChannels(options?.darkColors?.primary?.dark || "#cbd5e1"),
				"--color-primary-light": getRgbChannels(options?.darkColors?.primary?.light || "#f1f5f9"),
				"--color-primary-foreground": getRgbChannels(options?.darkColors?.primary?.foreground || "#020617"),
				"--color-secondary": getRgbChannels(options?.darkColors?.secondary?.default || "#1e293b"),
				"--color-secondary-dark": getRgbChannels(options?.darkColors?.secondary?.dark || "#0f172a"),
				"--color-secondary-light": getRgbChannels(options?.darkColors?.secondary?.light || "#334155"),
				"--color-secondary-foreground": getRgbChannels(options?.darkColors?.secondary?.foreground || "#f8fafc"),
				"--color-info": getRgbChannels(options?.darkColors?.info?.default || "#0062ff"),
				"--color-info-dark": getRgbChannels(options?.darkColors?.info?.dark || "#0055dd"),
				"--color-info-light": getRgbChannels(options?.darkColors?.info?.light || "#007aff"),
				"--color-info-foreground": getRgbChannels(options?.darkColors?.info?.foreground || "#f8fafc"),
				"--color-success": getRgbChannels(options?.darkColors?.success?.default || "#00bf6b"),
				"--color-success-dark": getRgbChannels(options?.darkColors?.success?.dark || "#00a35f"),
				"--color-success-light": getRgbChannels(options?.darkColors?.success?.light || "#02e585"),
				"--color-success-foreground": getRgbChannels(options?.darkColors?.success?.foreground || "#f8fafc"),
				"--color-warning": getRgbChannels(options?.darkColors?.warning?.default || "#fca327"),
				"--color-warning-dark": getRgbChannels(options?.darkColors?.warning?.dark || "#f67d0a"),
				"--color-warning-light": getRgbChannels(options?.darkColors?.warning?.light || "#fdba4c"),
				"--color-warning-foreground": getRgbChannels(options?.darkColors?.warning?.foreground || "#f8fafc"),
				"--color-error": getRgbChannels(options?.darkColors?.error?.default || "#ef4444"),
				"--color-error-dark": getRgbChannels(options?.darkColors?.error?.dark || "#dc2626"),
				"--color-error-light": getRgbChannels(options?.darkColors?.error?.light || "#f87171"),
				"--color-error-foreground": getRgbChannels(options?.darkColors?.error?.foreground || "#f8fafc")
			}
		});
	};
}, function(options) {
	return {
		darkMode: "class",
		content: ["./node_modules/@material-tailwind/react/src/components/**/*.{js,ts,jsx,tsx}", "./node_modules/@material-tailwind/react/src/theme/**/*.{js,ts,jsx,tsx}"],
		theme: { extend: {
			fontFamily: {
				sans: ["var(--font-sans)", "sans-serif"],
				serif: ["var(--font-serif)", "serif"],
				body: ["var(--font-sans)", "sans-serif"],
				mono: ["var(--font-mono)", "monospace"]
			},
			borderRadius: {
				full: "calc(var(--radius) * 1000)",
				"3xl": "var(--radius)",
				"2xl": "calc(var(--radius) - 8px)",
				xl: "calc(var(--radius) - 12px)",
				lg: "calc(var(--radius) - 16px)",
				md: "calc(var(--radius) - 18px)",
				DEFAULT: "calc(var(--radius) - 20px)",
				sm: "calc(var(--radius) - 22px)"
			},
			colors: {
				background: "rgb(var(--color-background) / <alpha-value>)",
				foreground: "rgb(var(--color-foreground) / <alpha-value>)",
				black: "rgb(var(--color-black) / <alpha-value>)",
				white: "rgb(var(--color-white) / <alpha-value>)",
				surface: {
					DEFAULT: "rgb(var(--color-surface) / <alpha-value>)",
					dark: "rgb(var(--color-surface-dark) / <alpha-value>)",
					light: "rgb(var(--color-surface-light) / <alpha-value>)",
					foreground: "rgb(var(--color-surface-foreground) / <alpha-value>)"
				},
				primary: {
					DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
					dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
					light: "rgb(var(--color-primary-light) / <alpha-value>)",
					foreground: "rgb(var(--color-primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
					dark: "rgb(var(--color-secondary-dark) / <alpha-value>)",
					light: "rgb(var(--color-secondary-light) / <alpha-value>)",
					foreground: "rgb(var(--color-secondary-foreground) / <alpha-value>)"
				},
				info: {
					DEFAULT: "rgb(var(--color-info) / <alpha-value>)",
					dark: "rgb(var(--color-info-dark) / <alpha-value>)",
					light: "rgb(var(--color-info-light) / <alpha-value>)",
					foreground: "rgb(var(--color-info-foreground) / <alpha-value>)"
				},
				success: {
					DEFAULT: "rgb(var(--color-success) / <alpha-value>)",
					dark: "rgb(var(--color-success-dark) / <alpha-value>)",
					light: "rgb(var(--color-success-light) / <alpha-value>)",
					foreground: "rgb(var(--color-success-foreground) / <alpha-value>)"
				},
				warning: {
					DEFAULT: "rgb(var(--color-warning) / <alpha-value>)",
					dark: "rgb(var(--color-warning-dark) / <alpha-value>)",
					light: "rgb(var(--color-warning-light) / <alpha-value>)",
					foreground: "rgb(var(--color-warning-foreground) / <alpha-value>)"
				},
				error: {
					DEFAULT: "rgb(var(--color-error) / <alpha-value>)",
					dark: "rgb(var(--color-error-dark) / <alpha-value>)",
					light: "rgb(var(--color-error-light) / <alpha-value>)",
					foreground: "rgb(var(--color-error-foreground) / <alpha-value>)"
				}
			}
		} },
		plugins: [import_tailwindcss_animate.default]
	};
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-CXJEJBKT.js
var typographyTheme = {
	defaultProps: {
		type: "p",
		color: "inherit"
	},
	baseStyle: "font-sans antialiased",
	color: {
		inherit: "text-inherit",
		default: "text-black dark:text-white",
		primary: "text-primary",
		secondary: "text-secondary",
		info: "text-info",
		success: "text-success",
		warning: "text-warning",
		error: "text-error"
	},
	type: {
		h1: "font-bold text-4xl md:text-5xl lg:text-6xl",
		h2: "font-bold text-3xl md:text-4xl lg:text-5xl",
		h3: "font-bold text-2xl md:text-3xl lg:text-4xl",
		h4: "font-bold text-xl md:text-2xl lg:text-3xl",
		h5: "font-bold text-lg md:text-xl lg:text-2xl",
		h6: "font-bold text-base md:text-lg lg:text-xl",
		lead: "text-base md:text-lg",
		p: " text-base",
		small: "text-sm"
	}
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-CPR7EA3T.js
var sliderTheme = {
	defaultProps: {
		size: "md",
		color: "primary"
	},
	baseStyle: "relative select-none rounded-full bg-surface",
	size: {
		sm: "h-0.5",
		md: "h-1",
		lg: "h-1.5"
	}
};
var sliderRangeTheme = {
	baseStyle: "h-full rounded-full",
	color: {
		primary: "bg-primary",
		secondary: "bg-secondary",
		info: "bg-info",
		success: "bg-success",
		warning: "bg-warning",
		error: "bg-error"
	}
};
var sliderThumbTheme = {
	baseStyle: "rounded-full shadow shadow-black/10 outline-none ring ring-transparent",
	size: {
		sm: "w-3 h-3",
		md: "w-3.5 h-3.5",
		lg: "w-5 h-5"
	},
	color: {
		primary: "bg-primary border-primary focus:ring-primary/10 active:ring-primary/10",
		secondary: "bg-secondary border-secondary focus:ring-secondary/10 active:ring-secondary/10",
		info: "bg-info border-info focus:ring-info/10 active:ring-info/10",
		success: "bg-success border-success focus:ring-success/10 active:ring-success/10",
		warning: "bg-warning border-warning focus:ring-warning/10 active:ring-warning/10",
		error: "bg-error border-error focus:ring-error/10 active:ring-error/10"
	}
};
var sliderTickTheme = {
	baseStyle: "absolute h-full -translate-x-1/2 text-foreground before:absolute before:left-1/2 before:rounded-full before:content-['']",
	size: {
		sm: "text-xs before:h-1 before:w-px top-2.5 before:-top-2.5",
		md: "text-sm before:h-2 before:w-px top-3 before:-top-3",
		lg: "text-base before:h-2.5 before:w-0.5 top-3.5 before:-top-3.5 "
	},
	color: {
		primary: "before:bg-primary",
		secondary: "before:bg-secondary",
		info: "before:bg-info",
		success: "before:bg-success",
		warning: "before:bg-warning",
		error: "before:bg-error"
	}
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-CBF6OFZW.js
var spinnerTheme = {
	defaultProps: {
		size: "md",
		color: "primary"
	},
	baseStyle: "text-surface animate-spin",
	size: {
		xs: "h-3 w-3",
		sm: "h-4 w-4",
		md: "h-6 w-6",
		lg: "h-8 w-8",
		xl: "h-10 w-10",
		xxl: "h-12 w-12"
	},
	color: {
		primary: "text-primary",
		secondary: "text-secondary brightness-90",
		info: "text-info",
		success: "text-success",
		warning: "text-warning",
		error: "text-error"
	}
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-7SWBG6UK.js
var switchTheme = {
	defaultProps: { color: "primary" },
	baseStyle: "appearance-none relative inline-block rounded-full w-12 h-6 cursor-pointer before:inline-block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-surface before:transition-colors before:duration-200 before:ease-in after:absolute after:top-2/4 after:left-0 after:-translate-y-2/4 after:w-6 after:h-6 after:border after:border-surface after:bg-background after:rounded-full checked:after:translate-x-full after:transition-all after:duration-200 after:ease-in disabled:opacity-50 disabled:cursor-not-allowed dark:after:bg-white",
	color: {
		primary: "checked:before:bg-primary checked:after:border-primary",
		secondary: "checked:before:bg-secondary checked:after:border-secondary",
		info: "checked:before:bg-info checked:after:border-info",
		success: "checked:before:bg-success checked:after:border-success",
		warning: "checked:before:bg-warning checked:after:border-warning",
		error: "checked:before:bg-error checked:after:border-error"
	}
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-FHF6P4UN.js
var tabsTheme = {
	defaultProps: { orientation: "horizontal" },
	baseStyle: "flex data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row gap-2"
};
var tabsListTheme = { baseStyle: "relative flex shrink-0 w-max data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col rounded-md p-1 bg-surface-light dark:bg-surface" };
var tabsTriggerTheme = { baseStyle: "inline-flex relative z-[2] py-1.5 px-3 items-center justify-center align-middle text-black dark:text-white select-none font-sans font-medium text-center text-sm aria-disabled:opacity-50 aria-disabled:pointer-events-none" };
var tabsPanelTheme = { baseStyle: "p-1 w-full block" };
var tabsTriggerIndicatorTheme = { baseStyle: "bg-background rounded shadow-sm shadow-black/10 transition-all duration-300 ease-in" };
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-APTGGM6D.js
var textareaTheme = {
	defaultProps: {
		size: "md",
		color: "primary",
		resize: false,
		isError: false,
		isSuccess: false
	},
	baseStyle: "peer block w-full resize-none outline-none focus:outline-none text-black dark:text-white placeholder:text-foreground/60 bg-transparent ring-transparent border border-surface transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success data-[resize=true]:resize-y",
	color: {
		primary: "hover:border-primary hover:ring-primary/10 focus:border-primary focus:ring-primary/10",
		secondary: "hover:border-secondary hover:ring-secondary/10 focus:border-secondary focus:ring-secondary/10",
		info: "hover:border-info hover:ring-info/10 focus:border-info focus:ring-info/10",
		success: "hover:border-success hover:ring-success/10 focus:border-success focus:ring-success/10",
		warning: "hover:border-warning hover:ring-warning/10 focus:border-warning focus:ring-warning/10",
		error: "hover:border-error hover:ring-error/10 focus:border-error focus:ring-error/10"
	},
	size: {
		sm: "text-sm shadow-sm p-2 rounded-md ring",
		md: "text-sm shadow-sm p-2.5 rounded-md ring",
		lg: "text-base shadow-sm p-3 rounded-lg ring-4"
	}
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-BAFDZUY3.js
var timelineTheme = {
	defaultProps: {
		color: "primary",
		mode: "timeline",
		orientation: "horizontal"
	},
	baseStyle: "flex w-full data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=horizontal]:items-center"
};
var timelineItemTheme = { baseStyle: "group data-[orientation=horizontal]:block data-[orientation=vertical]:flex data-[orientation=vertical]:gap-x-6 aria-disabled:select-none aria-disabled:pointer-events-none" };
var timelineHeaderTheme = { baseStyle: "relative" };
var timelineIconTheme = {
	baseStyle: "relative z-10 grid h-10 w-10 place-items-center rounded-full bg-surface text-surface-foreground",
	color: {
		primary: "group-data-[active=true]:bg-primary group-data-[active=true]:text-primary-foreground group-data-[completed=true]:bg-primary group-data-[completed=true]:text-primary-foreground",
		secondary: "group-data-[active=true]:bg-secondary group-data-[active=true]:text-secondary-foreground group-data-[completed=true]:bg-secondary group-data-[completed=true]:text-secondary-foreground",
		info: "group-data-[active=true]:bg-info group-data-[active=true]:text-info-foreground group-data-[completed=true]:bg-info group-data-[completed=true]:text-info-foreground",
		success: "group-data-[active=true]:bg-success group-data-[active=true]:text-success-foreground group-data-[completed=true]:bg-success group-data-[completed=true]:text-success-foreground",
		warning: "group-data-[active=true]:bg-warning group-data-[active=true]:text-warning-foreground group-data-[completed=true]:bg-warning group-data-[completed=true]:text-warning-foreground",
		error: "group-data-[active=true]:bg-error group-data-[active=true]:text-error-foreground group-data-[completed=true]:bg-error group-data-[completed=true]:text-error-foreground"
	}
};
var timelineSeparatorTheme = {
	baseStyle: "bg-surface absolute data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:top-0 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:left-0 data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:-translate-y-1/2",
	color: {
		primary: "group-data-[completed=true]:bg-primary",
		secondary: "group-data-[completed=true]:bg-secondary",
		info: "group-data-[completed=true]:bg-info",
		success: "group-data-[completed=true]:bg-success",
		warning: "group-data-[completed=true]:bg-warning",
		error: "group-data-[completed=true]:bg-error"
	}
};
var timelineBodyTheme = { baseStyle: "data-[orientation=vertical]:pb-8 data-[orientation=horizontal]:py-4 text-foreground" };
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-AGIFMRNV.js
var tooltipTheme = { defaultProps: {
	placement: "top",
	offset: 8,
	interactive: false
} };
var tooltipTriggerTheme = { baseStyle: "outline-none group" };
var tooltipContentTheme = { baseStyle: "rounded-md bg-black dark:bg-white border-black dark:border-white px-1.5 py-1 text-xs text-white dark:text-black shadow-lg shadow-black/5 outline-none" };
var tooltipArrowTheme = { baseStyle: "h-2 w-2 rounded-bl border border-[inherit] bg-inherit [clip-path:polygon(0_0,_100%_100%,_0_100%)] data-[placement^=bottom]:rotate-[135deg] data-[placement^=left]:rotate-[225deg] data-[placement^=right]:rotate-45 data-[placement^=top]:-rotate-45" };
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-77ZNGTSH.js
var listTheme = { baseStyle: "flex flex-col gap-0.5 min-w-60" };
var listItemTheme = {
	defaultProps: { ripple: true },
	baseStyle: "flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans  transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-foreground hover:text-black dark:hover:text-white hover:bg-surface focus:bg-surface focus:text-black dark:focus:text-white data-[selected=true]:bg-surface data-[selected=true]:text-black dark:data-[selected=true]:text-white dark:bg-opacity-70"
};
var listItemStartTheme = { baseStyle: "grid place-items-center shrink-0 me-2.5" };
var listItemEndTheme = { baseStyle: "grid place-items-center shrink-0 ps-2.5 ms-auto" };
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-5VIFYY3R.js
var menuTheme = { defaultProps: {
	placement: "bottom",
	offset: 5
} };
var menuTriggerTheme = { baseStyle: "outline-none group" };
var menuContentTheme = {
	defaultProps: {
		disabled: false,
		initialFocus: 0,
		returnFocus: true,
		guards: true,
		modal: false,
		visuallyHiddenDismiss: true,
		closeOnFocusOut: true,
		order: ["content"]
	},
	baseStyle: "min-w-40 rounded-lg space-y-0.5 border border-surface bg-background p-1 text-sm text-foreground shadow-xl shadow-black/[0.025] outline-none"
};
var menuItemTheme = {
	defaultProps: {
		ripple: true,
		closeOnClick: true
	},
	baseStyle: "w-full text-start flex items-center py-1.5 px-2.5 rounded align-middle select-none outline-none font-sans  transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-foreground hover:text-black dark:hover:text-white hover:bg-surface focus:bg-surface focus:text-black dark:focus:text-white data-[selected=true]:bg-surface data-[selected=true]:text-black dark:data-[selected=true]:text-white dark:bg-opacity-70"
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-C2SK4YPI.js
var navbarTheme = {
	defaultProps: {
		variant: "solid",
		color: "default"
	},
	baseStyle: "w-full rounded-lg border shadow-lg overflow-hidden p-2",
	variant: {
		ghost: {
			default: "bg-background/10 border-transparent shadow-transparent",
			primary: "bg-primary/10 border-transparent shadow-transparent",
			secondary: "bg-secondary/10 border-transparent shadow-transparent",
			info: "bg-info/10 border-transparent shadow-transparent",
			success: "bg-success/10 border-transparent shadow-transparent",
			warning: "bg-warning/10 border-transparent shadow-transparent",
			error: "bg-error/10 border-transparent shadow-transparent"
		},
		solid: {
			default: "bg-background border-surface shadow-black/5",
			primary: "bg-primary border-primary-dark shadow-primary-dark/25",
			secondary: "bg-secondary border-secondary-dark shadow-secondary-dark/25",
			info: "bg-info border-info-dark shadow-info-dark/25",
			success: "bg-success border-success-dark shadow-success-dark/25",
			warning: "bg-warning border-warning-dark shadow-warning-dark/25",
			error: "bg-error border-error-dark shadow-error-dark/25"
		},
		outline: {
			default: "bg-transparent border-surface shadow-transparent",
			primary: "bg-transparent border-primary shadow-transparent",
			secondary: "bg-transparent border-secondary shadow-transparent",
			info: "bg-transparent border-info shadow-transparent",
			success: "bg-transparent border-success shadow-transparent",
			warning: "bg-transparent border-warning shadow-transparent",
			error: "bg-transparent border-error shadow-transparent"
		},
		gradient: {
			default: "bg-background border-surface shadow-black/5",
			primary: "bg-gradient-to-t from-primary-dark to-primary-light shadow-primary/25 border-primary",
			secondary: "bg-gradient-to-t from-secondary-dark to-secondary-light shadow-secondary/25 border-secondary",
			info: "bg-gradient-to-t from-info-dark to-info-light shadow-info/25 border-info",
			success: "bg-gradient-to-t from-success-dark to-success-light shadow-success/25 border-success",
			warning: "bg-gradient-to-t from-warning-dark to-warning-light shadow-warning/25 border-warning",
			error: "bg-gradient-to-t from-error-dark to-error-light shadow-error/25 border-error"
		}
	}
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-QTMDCPR3.js
var popoverTheme = { defaultProps: {
	placement: "bottom",
	offset: 10
} };
var popoverTriggerTheme = { baseStyle: "outline-none group" };
var popoverContentTheme = {
	defaultProps: {
		disabled: false,
		initialFocus: 0,
		returnFocus: true,
		guards: true,
		modal: false,
		visuallyHiddenDismiss: true,
		closeOnFocusOut: true,
		order: ["content"]
	},
	baseStyle: "rounded-lg border border-surface bg-background p-2.5 text-sm text-foreground shadow-xl shadow-black/[0.025] outline-none"
};
var popoverArrowTheme = { baseStyle: "h-3 w-3 rounded-bl-sm border border-[inherit] bg-inherit [clip-path:polygon(0_0,_100%_100%,_0_100%)] data-[placement^=bottom]:rotate-[135deg] data-[placement^=left]:rotate-[225deg] data-[placement^=right]:rotate-45 data-[placement^=top]:-rotate-45" };
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-U44YIC2J.js
var progressTheme = {
	defaultProps: {
		size: "md",
		color: "primary"
	},
	baseStyle: "w-full bg-surface block rounded-full overflow-hidden",
	size: {
		sm: "h-2",
		md: "h-4",
		lg: "h-6"
	}
};
var progressBarTheme = {
	baseStyle: "h-full rounded-none",
	color: {
		primary: "bg-primary",
		secondary: "bg-secondary brightness-90",
		info: "bg-info",
		success: "bg-success",
		warning: "bg-warning",
		error: "bg-error"
	}
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-QHXOBAAC.js
var radioTheme = {
	defaultProps: {
		color: "primary",
		orientation: "vertical"
	},
	baseStyle: "flex gap-2 data-[orientation=horizontal]:items-center data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start"
};
var radioItemTheme = {
	baseStyle: "group block cursor-pointer shadow-sm shadow-black/5 relative h-5 w-5 shrink-0 rounded-full bg-transparent border border-surface transition-all duration-200 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none hover:shadow-md",
	color: {
		primary: "data-[checked=true]:bg-primary data-[checked=true]:border-primary text-primary-foreground",
		secondary: "data-[checked=true]:bg-secondary data-[checked=true]:border-secondary text-secondary-foreground",
		info: "data-[checked=true]:bg-info data-[checked=true]:border-info text-info-foreground",
		success: "data-[checked=true]:bg-success data-[checked=true]:border-success text-success-foreground",
		warning: "data-[checked=true]:bg-warning data-[checked=true]:border-warning text-warning-foreground",
		error: "data-[checked=true]:bg-error data-[checked=true]:border-error text-error-foreground"
	}
};
var radioIndicatorTheme = { baseStyle: "pointer-events-none absolute left-2/4 top-2/4 text-current -translate-x-2/4 -translate-y-2/4 scale-75 opacity-0 transition-all duration-200 ease-in group-data-[checked=true]:scale-100 group-data-[checked=true]:opacity-100" };
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-BGYX7VND.js
var import_jsx_runtime = require_jsx_runtime();
var ratingTheme = {
	defaultProps: {
		count: 5,
		color: "primary",
		ratedIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			className: "h-6 w-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fillRule: "evenodd",
				d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",
				clipRule: "evenodd"
			})
		}),
		unratedIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24",
			strokeWidth: 1.5,
			stroke: "currentColor",
			className: "h-6 w-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
			})
		}),
		readonly: false
	},
	baseStyle: "inline-flex items-center [&_data-slot=icon]:w-5 [&_data-slot=icon]:h-5 [&_data-slot=icon]:text-inherit [&_data-slot=icon]:cursor-pointer",
	color: {
		primary: "text-primary",
		secondary: "text-secondary",
		info: "text-info",
		success: "text-success",
		warning: "text-warning",
		error: "text-error"
	}
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-BGJMALSI.js
var selectTheme = { defaultProps: {
	size: "md",
	color: "primary",
	isPill: false,
	isError: false,
	isSuccess: false,
	placement: "bottom",
	offset: 5
} };
var selectTriggerTheme = {
	defaultProps: { indicator: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		color: "currentColor",
		className: "h-[1em] w-[1em] translate-x-0.5 stroke-[1.5]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M17 8L12 3L7 8",
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M17 16L12 21L7 16",
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	}) },
	baseStyle: "flex items-center gap-4 justify-between h-max w-full outline-none focus:outline-none text-foreground bg-transparent ring-transparent border border-surface transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success select-none text-start data-[shape=pill]:rounded-full [&_data-slot=placeholder]:text-foreground/60",
	size: {
		sm: "text-sm rounded-md py-1.5 px-2 ring shadow-sm",
		md: "text-sm rounded-md py-2 px-2.5 ring shadow-sm",
		lg: "text-base rounded-lg py-2.5 px-3 ring-4 shadow-sm"
	},
	color: {
		primary: "hover:border-primary hover:ring-primary/10 focus:border-primary focus:ring-primary/10 data-[open=true]:border-primary data-[open=true]:ring-primary/10",
		secondary: "hover:border-secondary hover:ring-secondary/10 focus:border-secondary focus:ring-secondary/10 data-[open=true]:border-secondary data-[open=true]:ring-secondary/10",
		info: "hover:border-info hover:ring-info/10 focus:border-info focus:ring-info/10 data-[open=true]:border-info data-[open=true]:ring-info/10",
		success: "hover:border-success hover:ring-success/10 focus:border-success focus:ring-success/10 data-[open=true]:border-success data-[open=true]:ring-success/10",
		warning: "hover:border-warning hover:ring-warning/10 focus:border-warning focus:ring-warning/10 data-[open=true]:border-warning data-[open=true]:ring-warning/10",
		error: "hover:border-error hover:ring-error/10 focus:border-error focus:ring-error/10 data-[open=true]:border-error data-[open=true]:ring-error/10"
	}
};
var selectListTheme = {
	defaultProps: {
		disabled: false,
		initialFocus: 0,
		returnFocus: true,
		guards: true,
		modal: true,
		visuallyHiddenDismiss: true,
		closeOnFocusOut: true,
		order: ["content"]
	},
	baseStyle: "flex flex-col gap-0.5 bg-background p-1 rounded-lg shadow-xl shadow-black/[0.025] border border-surface outline-none"
};
var selectOptionTheme = {
	defaultProps: {
		ripple: true,
		indicator: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24",
			strokeWidth: 2,
			stroke: "currentColor",
			className: "h-4 w-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M4.5 12.75l6 6 9-13.5"
			})
		})
	},
	baseStyle: "outline-none flex items-center justify-between gap-4 py-1.5 px-2.5 rounded align-middle select-none text-sm font-sans transition-all duration-300 ease-in disabled:opacity-50 disabled:cursor-not-allowed bg-transparent text-foreground hover:text-black dark:hover:text-white hover:bg-surface focus:bg-surface focus:text-black dark:focus:text-white data-[selected=true]:bg-surface data-[selected=true]:text-black dark:data-[selected=true]:text-white dark:bg-opacity-70"
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-YVCLQOWL.js
var checkboxTheme = {
	defaultProps: { color: "primary" },
	baseStyle: "group shadow-sm shadow-black/5 inline-block relative h-5 w-5 cursor-pointer rounded bg-transparent border border-surface transition-all duration-200 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none hover:shadow-md",
	color: {
		primary: "data-[checked=true]:bg-primary data-[checked=true]:border-primary text-primary-foreground",
		secondary: "data-[checked=true]:bg-secondary data-[checked=true]:border-secondary text-secondary-foreground",
		info: "data-[checked=true]:bg-info data-[checked=true]:border-info text-info-foreground",
		success: "data-[checked=true]:bg-success data-[checked=true]:border-success text-success-foreground",
		warning: "data-[checked=true]:bg-warning data-[checked=true]:border-warning text-warning-foreground",
		error: "data-[checked=true]:bg-error data-[checked=true]:border-error text-error-foreground"
	}
};
var checkboxIndicatorTheme = { baseStyle: "pointer-events-none absolute left-2/4 top-2/4 text-current -translate-x-2/4 -translate-y-2/4 scale-75 opacity-0 transition-all duration-200 ease-in data-[checked=true]:scale-100 data-[checked=true]:opacity-100" };
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-332RUHED.js
var chipTheme = {
	defaultProps: {
		size: "md",
		color: "primary",
		variant: "solid",
		isPill: true
	},
	baseStyle: "relative inline-flex w-max items-center border font-sans font-medium rounded-md data-[shape=pill]:rounded-full",
	size: {
		sm: "text-xs p-0.5 shadow-sm",
		md: "text-sm p-0.5 shadow-sm",
		lg: "text-sm p-1 shadow-sm"
	},
	variant: {
		ghost: {
			primary: "bg-primary/10 border-transparent text-primary shadow-none",
			secondary: "bg-secondary/10 border-transparent text-secondary-foreground shadow-none",
			info: "bg-info/10 border-transparent text-info shadow-none",
			success: "bg-success/10 border-transparent text-success shadow-none",
			warning: "bg-warning/10 border-transparent text-warning shadow-none",
			error: "bg-error/10 border-transparent text-error shadow-none"
		},
		solid: {
			primary: "bg-primary border-primary text-primary-foreground",
			secondary: "bg-secondary border-secondary text-secondary-foreground",
			info: "bg-info border-info text-info-foreground",
			success: "bg-success border-success text-success-foreground",
			warning: "bg-warning border-warning text-warning-foreground",
			error: "bg-error border-error text-error-foreground"
		},
		outline: {
			primary: "bg-transparent border-primary text-primary",
			secondary: "bg-transparent border-secondary text-secondary-foreground",
			info: "bg-transparent border-info text-info",
			success: "bg-transparent border-success text-success",
			warning: "bg-transparent border-warning text-warning",
			error: "bg-transparent border-error text-error"
		},
		gradient: {
			primary: "bg-gradient-to-tr from-primary-dark to-primary-light border-primary text-primary-foreground",
			secondary: "bg-gradient-to-tr from-secondary-dark to-secondary-light border-secondary text-secondary-foreground",
			info: "bg-gradient-to-tr from-info-dark to-info-light border-info text-info-foreground",
			success: "bg-gradient-to-tr from-success-dark to-success-light border-success text-success-foreground",
			warning: "bg-gradient-to-tr from-warning-dark to-warning-light border-warning text-warning-foreground",
			error: "bg-gradient-to-tr from-error-dark to-error-light border-error text-error-foreground"
		}
	}
};
var chipLabelTheme = {
	baseStyle: "font-inherit text-inherit leading-none",
	size: {
		sm: "my-0.5 mx-1.5",
		md: "my-1 mx-2.5",
		lg: "my-1.5 mx-3"
	}
};
var chipIconTheme = {
	baseStyle: "grid place-items-center shrink-0 rounded-full",
	size: {
		sm: "translate-x-0.5 w-3.5 h-3.5",
		md: "translate-x-1 w-4 h-4",
		lg: "translate-x-1.5 w-5 h-5"
	}
};
var chipDismissTriggerTheme = {
	defaultProps: { ripple: true },
	baseStyle: "grid place-items-center shrink-0 rounded-full p-px",
	size: {
		sm: "-translate-x-0.5 ms-0.5 w-4 h-4 stroke-2",
		md: "-translate-x-1 ms-1 w-5 h-5 stroke-2",
		lg: "-translate-x-1.5 ms-1.5 w-6 h-6 stroke-2"
	}
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-4JMI2FIT.js
var collapseTheme = { baseStyle: "block w-full h-0 overflow-hidden data-[open=true]:h-auto data-[open=true]:overflow-visible" };
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-BQYKGMWX.js
var dialogTheme = { defaultProps: { size: "md" } };
var dialogTriggerTheme = { baseStyle: "outline-none" };
var dialogContentTheme = {
	defaultProps: {
		disabled: false,
		initialFocus: 0,
		returnFocus: true,
		guards: true,
		modal: false,
		visuallyHiddenDismiss: true,
		closeOnFocusOut: true,
		order: ["content"]
	},
	baseStyle: "fixed z-[9998] top-1/2 left-1/2 -translate-x-1/2 px-4 py-3 max-h-[calc(100vh-32px)] overflow-y-auto -translate-y-1/2 bg-background w-full h-full rounded-xl shadow-2xl shadow-black/5 border border-surface data-[open=true]:motion-safe:animate-in data-[open=true]:motion-safe:fade-in data-[open=true]:motion-safe:zoom-in-95 data-[open=true]:motion-safe:slide-in-from-left-1/2 data-[open=true]:motion-safe:slide-in-from-top-1/2",
	size: {
		xs: "w-8/12 sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 h-max",
		sm: "w-9/12 sm:w-7/12 md:w-5/12 lg:w-3/12 h-max",
		md: "w-10/12 md:w-8/12 lg:w-6/12 h-max",
		lg: "w-10/12 lg:w-8/12 h-max",
		xl: "w-11/12 lg:w-10/12 h-max",
		screen: "w-full h-full rounded-none max-h-screen"
	}
};
var dialogOverlayTheme = {
	defaultProps: { lockScroll: true },
	baseStyle: "fixed inset-0 w-screen h-screen z-[9997] bg-black/50 data-[open=true]:motion-safe:animate-in data-[open=true]:motion-safe:fade-in"
};
var dialogDismissTriggerTheme = { baseStyle: "outline-none" };
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-ANNCLIQH.js
var drawerTriggerTheme = { baseStyle: "outline-none" };
var drawerPanelTheme = {
	defaultProps: {
		disabled: false,
		initialFocus: 0,
		returnFocus: true,
		guards: true,
		modal: false,
		visuallyHiddenDismiss: true,
		closeOnFocusOut: true,
		order: ["content"],
		placement: "right"
	},
	baseStyle: "fixed z-[9998] p-4 bg-background w-80 h-80 shadow-2xl shadow-black/5 border-surface data-[placement=top]:top-0 data-[placement=top]:left-0 data-[placement=right]:top-0 data-[placement=right]:right-0 data-[placement=bottom]:bottom-0 data-[placement=bottom]:left-0 data-[placement=left]:top-0 data-[placement=left]:left-0 data-[placement=top]:w-screen data-[placement=bottom]:w-screen data-[placement=left]:h-screen data-[placement=right]:h-screen border border-surface data-[open=true]:motion-safe:animate-in data-[open=true]:motion-safe:fade-in data-[open=true]:data-[placement=top]:motion-safe:slide-in-from-top-10 data-[open=true]:data-[placement=bottom]:motion-safe:slide-in-from-bottom-10 data-[open=true]:data-[placement=left]:motion-safe:slide-in-from-left-10 data-[open=true]:data-[placement=right]:motion-safe:slide-in-from-right-10"
};
var drawerOverlayTheme = {
	defaultProps: { lockScroll: true },
	baseStyle: "fixed inset-0 w-screen h-screen z-[9997] bg-black/50 data-[open=true]:motion-safe:animate-in data-[open=true]:motion-safe:fade-in"
};
var drawerDismissTriggerTheme = { baseStyle: "outline-none" };
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-VYISNWQG.js
var buttonTheme = {
	defaultProps: {
		size: "md",
		color: "primary",
		variant: "solid",
		ripple: true,
		isPill: false,
		isFullWidth: false
	},
	baseStyle: "inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none",
	size: {
		xs: "text-sm rounded-md py-1 px-2 shadow-sm hover:shadow",
		sm: "text-sm rounded-md py-1.5 px-3 shadow-sm hover:shadow",
		md: "text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md",
		lg: "text-base rounded-md py-2.5 px-5 shadow-sm hover:shadow-lg",
		xl: "text-base rounded-lg py-3 px-6 shadow-sm hover:shadow-lg"
	},
	variant: {
		ghost: {
			primary: "bg-transparent border-transparent text-primary hover:bg-primary/5 hover:border-primary/5 shadow-none hover:shadow-none",
			secondary: "bg-transparent border-transparent text-secondary-foreground hover:bg-secondary/10 hover:border-secondary/10 shadow-none hover:shadow-none",
			info: "bg-transparent border-transparent text-info hover:bg-info/10 hover:border-info/10 shadow-none hover:shadow-none",
			success: "bg-transparent border-transparent text-success hover:bg-success/10 hover:border-success/10 shadow-none hover:shadow-none",
			warning: "bg-transparent border-transparent text-warning hover:bg-warning/10 hover:border-warning/10 shadow-none hover:shadow-none",
			error: "bg-transparent border-transparent text-error hover:bg-error/10 hover:border-error/10 shadow-none hover:shadow-none"
		},
		solid: {
			primary: "bg-primary border-primary text-primary-foreground hover:bg-primary-light hover:border-primary-light",
			secondary: "bg-secondary border-secondary text-secondary-foreground hover:bg-secondary-light hover:border-secondary-light",
			info: "bg-info border-info text-info-foreground hover:bg-info-light hover:border-info-light",
			success: "bg-success border-success text-success-foreground hover:bg-success-light hover:border-success-light",
			warning: "bg-warning border-warning text-warning-foreground hover:bg-warning-light hover:border-warning-light",
			error: "bg-error border-error text-error-foreground hover:bg-error-light hover:border-error-light"
		},
		outline: {
			primary: "bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground",
			secondary: "bg-transparent border-secondary text-secondary-foreground hover:bg-secondary",
			info: "bg-transparent border-info text-info hover:bg-info hover:text-info-foreground",
			success: "bg-transparent border-success text-success hover:bg-success hover:text-success-foreground",
			warning: "bg-transparent border-warning text-warning hover:bg-warning hover:text-warning-foreground",
			error: "bg-transparent border-error text-error hover:bg-error hover:text-error-foreground"
		},
		gradient: {
			primary: "bg-gradient-to-tr from-primary-dark to-primary-light border-primary text-primary-foreground hover:brightness-105",
			secondary: "bg-gradient-to-tr from-secondary-dark to-secondary-light border-secondary text-secondary-foreground hover:brightness-105",
			info: "bg-gradient-to-tr from-info-dark to-info-light border-info text-info-foreground hover:brightness-105",
			success: "bg-gradient-to-tr from-success-dark to-success-light border-success text-success-foreground hover:brightness-105",
			warning: "bg-gradient-to-tr from-warning-dark to-warning-light border-warning text-warning-foreground hover:brightness-105",
			error: "bg-gradient-to-tr from-error-dark to-error-light border-error text-error-foreground hover:brightness-105"
		}
	}
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-LRNZTCBT.js
var iconButtonTheme = {
	defaultProps: {
		size: "md",
		color: "primary",
		variant: "solid",
		ripple: true,
		isCircular: false
	},
	baseStyle: "inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full",
	size: {
		xs: "text-sm min-w-[30px] min-h-[30px] rounded-md shadow-sm hover:shadow",
		sm: "text-sm min-w-[34px] min-h-[34px] rounded-md shadow-sm hover:shadow",
		md: "text-sm min-w-[38px] min-h-[38px] rounded-md shadow-sm hover:shadow-md",
		lg: "text-base min-w-[46px] min-h-[46px] rounded-md shadow-sm hover:shadow-lg",
		xl: "text-base min-w-[50px] min-h-[50px] rounded-lg shadow-sm hover:shadow-lg"
	},
	variant: buttonTheme.variant
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-ADIUZG7W.js
var inputTheme = {
	defaultProps: {
		size: "md",
		color: "primary",
		isPill: false,
		isError: false,
		isSuccess: false
	},
	baseStyle: "w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-black dark:text-white placeholder:text-foreground/60 bg-transparent ring-transparent border border-surface transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success select-none data-[shape=pill]:rounded-full",
	size: {
		sm: "text-sm rounded-md py-1.5 px-2 ring shadow-sm data-[icon-placement=start]:ps-7 data-[icon-placement=end]:pe-7",
		md: "text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9",
		lg: "text-base rounded-lg py-3 leading-none px-3 ring-4 shadow-sm data-[icon-placement=start]:ps-11 data-[icon-placement=end]:pe-11"
	},
	color: {
		primary: "hover:border-primary hover:ring-primary/10 focus:border-primary focus:ring-primary/10",
		secondary: "hover:border-secondary hover:ring-secondary/10 focus:border-secondary focus:ring-secondary/10",
		info: "hover:border-info hover:ring-info/10 focus:border-info focus:ring-info/10",
		success: "hover:border-success hover:ring-success/10 focus:border-success focus:ring-success/10",
		warning: "hover:border-warning hover:ring-warning/10 focus:border-warning focus:ring-warning/10",
		error: "hover:border-error hover:ring-error/10 focus:border-error focus:ring-error/10"
	}
};
var inputIconTheme = {
	defaultProps: { placement: "start" },
	baseStyle: "pointer-events-none absolute top-1/2 -translate-y-1/2 text-foreground/70 peer-hover:text-black peer-focus:text-black dark:peer-hover:text-white dark:peer-focus:text-white transition-all duration-300 ease-in overflow-hidden",
	size: {
		sm: "w-4 h-4 data-[placement=start]:left-2 data-[placement=end]:right-2",
		md: "w-5 h-5 data-[placement=start]:left-2.5 data-[placement=end]:right-2.5",
		lg: "w-6 h-6 data-[placement=start]:left-3 data-[placement=end]:right-3"
	}
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-C4GS2FOC.js
var accordionTheme = { defaultProps: { type: "single" } };
var accordionItemTheme = {
	defaultProps: { disabled: false },
	baseStyle: "group block w-full items-center justify-between cursor-pointer border-b border-surface aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:select-none"
};
var accordionTriggerTheme = { baseStyle: "flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-black" };
var accordionContentTheme = { baseStyle: "block pb-5 text-sm text-foreground h-0 data-[open=true]:h-auto" };
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-YTQ4A2UH.js
var alertTheme = {
	defaultProps: {
		size: "md",
		color: "primary",
		variant: "solid",
		rounded: false
	},
	baseStyle: "relative flex items-start w-full border rounded-md p-2 data-[pill=true]:rounded-full",
	variant: {
		ghost: {
			primary: "bg-primary/10 border-transparent text-primary",
			secondary: "bg-secondary/10 border-transparent text-secondary-foreground",
			info: "bg-info/10 border-transparent text-info",
			success: "bg-success/10 border-transparent text-success",
			warning: "bg-warning/10 border-transparent text-warning",
			error: "bg-error/10 border-transparent text-error"
		},
		solid: {
			primary: "bg-primary border-primary text-primary-foreground",
			secondary: "bg-secondary border-secondary text-secondary-foreground",
			info: "bg-info border-info text-info-foreground",
			success: "bg-success border-success text-success-foreground",
			warning: "bg-warning border-warning text-warning-foreground",
			error: "bg-error border-error text-error-foreground"
		},
		outline: {
			primary: "bg-transparent border-primary text-primary",
			secondary: "bg-transparent border-secondary text-secondary-foreground",
			info: "bg-transparent border-info text-info",
			success: "bg-transparent border-success text-success",
			warning: "bg-transparent border-warning text-warning",
			error: "bg-transparent border-error text-error"
		},
		gradient: {
			primary: "bg-gradient-to-tr from-primary-dark to-primary-light border-primary text-primary-foreground",
			secondary: "bg-gradient-to-tr from-secondary-dark to-secondary-light border-secondary text-secondary-foreground",
			info: "bg-gradient-to-tr from-info-dark to-info-light border-info text-info-foreground",
			success: "bg-gradient-to-tr from-success-dark to-success-light border-success text-success-foreground",
			warning: "bg-gradient-to-tr from-warning-dark to-warning-light border-warning text-warning-foreground",
			error: "bg-gradient-to-tr from-error-dark to-error-light border-error text-error-foreground"
		}
	}
};
var alertContentTheme = { baseStyle: "w-full text-sm font-sans leading-none m-1.5" };
var alertIconTheme = { baseStyle: "grid place-items-center shrink-0 p-1" };
var alertDismissTriggerTheme = { baseStyle: "outline-none" };
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-PTC7KVHU.js
var avatarTheme = {
	defaultProps: {
		size: "md",
		variant: "circular"
	},
	baseStyle: "inline-block object-cover object-center data-[shape=square]:rounded-none data-[shape=circular]:rounded-full data-[shape=rounded]:rounded-[current]",
	size: {
		xs: "w-6 h-6 rounded-sm",
		sm: "w-8 h-8 rounded",
		md: "w-11 h-11 rounded-md",
		lg: "w-14 h-14 rounded-md",
		xl: "w-20 h-20 rounded-lg",
		xxl: "w-28 h-28 rounded-xl"
	}
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-V2YBIGWT.js
var badgeTheme = {
	defaultProps: {
		color: "primary",
		overlap: "square",
		placement: "top-end"
	},
	baseStyle: "relative inline-flex"
};
var badgeContentTheme = { baseStyle: "" };
var badgeIndicatorTheme = {
	baseStyle: `
    absolute px-1 py-0.5 text-xs border leading-none grid place-items-center rounded-full min-w-3 min-h-3

    data-[placement='top-start']:data-[overlap='square']:top-[6%] data-[placement='top-start']:data-[overlap='square']:left-[6%]
    data-[placement='top-start']:data-[overlap='square']:-translate-x-1/2 data-[placement='top-start']:data-[overlap='square']:-translate-y-1/2
    data-[placement='top-start']:data-[overlap='circular']:top-[14%] data-[placement='top-start']:data-[overlap='circular']:left-[14%]
    data-[placement='top-start']:data-[overlap='circular']:-translate-x-1/2 data-[placement='top-start']:data-[overlap='circular']:-translate-y-1/2
    
    data-[placement='top-end']:data-[overlap='square']:top-[6%] data-[placement='top-end']:data-[overlap='square']:right-[6%]
    data-[placement='top-end']:data-[overlap='square']:translate-x-1/2 data-[placement='top-end']:data-[overlap='square']:-translate-y-1/2
    data-[placement='top-end']:data-[overlap='circular']:top-[14%] data-[placement='top-end']:data-[overlap='circular']:right-[14%]
    data-[placement='top-end']:data-[overlap='circular']:translate-x-1/2 data-[placement='top-end']:data-[overlap='circular']:-translate-y-1/2
    
    data-[placement='bottom-start']:data-[overlap='square']:bottom-[6%] data-[placement='bottom-start']:data-[overlap='square']:left-[6%]
    data-[placement='bottom-start']:data-[overlap='square']:-translate-x-1/2 data-[placement='bottom-start']:data-[overlap='square']:translate-y-1/2
    data-[placement='bottom-start']:data-[overlap='circular']:bottom-[14%] data-[placement='bottom-start']:data-[overlap='circular']:left-[14%]
    data-[placement='bottom-start']:data-[overlap='circular']:-translate-x-1/2 data-[placement='bottom-start']:data-[overlap='circular']:translate-y-1/2
    
    data-[placement='bottom-end']:data-[overlap='square']:bottom-[6%] data-[placement='bottom-end']:data-[overlap='square']:right-[6%]
    data-[placement='bottom-end']:data-[overlap='square']:translate-x-1/2 data-[placement='bottom-end']:data-[overlap='square']:translate-y-1/2
    data-[placement='bottom-end']:data-[overlap='circular']:bottom-[14%] data-[placement='bottom-end']:data-[overlap='circular']:right-[14%]
    data-[placement='bottom-end']:data-[overlap='circular']:translate-x-1/2 data-[placement='bottom-end']:data-[overlap='circular']:translate-y-1/2
  `,
	color: {
		primary: "bg-primary border-primary text-primary-foreground",
		secondary: "bg-secondary border-secondary text-secondary-foreground",
		info: "bg-info border-info text-info-foreground",
		success: "bg-success border-success text-success-foreground",
		warning: "bg-warning border-warning text-warning-foreground",
		error: "bg-error border-error text-error-foreground"
	}
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-FOAJJTIZ.js
var breadcrumbTheme = { baseStyle: "flex flex-wrap items-center gap-1 p-1" };
var breadcrumbLinkTheme = { baseStyle: "inline-flex items-center gap-1.5 text-sm text-black dark:text-white transition-colors duration-300 ease-in hover:text-primary dark:hover:text-primary" };
var breadcrumbSeparatorTheme = { baseStyle: "inline-block mx-1 text-sm select-none pointer-events-none opacity-50 text-black dark:text-white" };
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-LN4CMBOV.js
var buttonGroupTheme = {
	defaultProps: {
		size: "md",
		color: "primary",
		variant: "solid",
		ripple: true,
		isFullWidth: false,
		isPill: false,
		orientation: "horizontal"
	},
	baseStyle: "inline-flex data-[width=full]:w-full data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:[&:not(:first-child):not(:last-child):not([data-variant=ghost])]:[&_*]:rounded-none data-[orientation=horizontal]:[&:first-child:not([data-variant=ghost])]:[&_*]:rounded-r-none data-[orientation=horizontal]:[&:last-child:not([data-variant=ghost])]:[&_*]:rounded-l-none data-[orientation=horizontal]:[&:not(:first-child):not(:last-child):not([data-variant=ghost])]:[&_*]:border-l-0 data-[orientation=horizontal]:[&:last-child:not([data-variant=ghost])]:[&_*]:border-l-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:[&:not(:first-child):not(:last-child):not([data-variant=ghost])]:[&_*]:rounded-none data-[orientation=vertical]:[&:first-child:not([data-variant=ghost])]:[&_*]:rounded-b-none data-[orientation=vertical]:[&:last-child:not([data-variant=ghost])]:[&_*]:rounded-t-none data-[orientation=vertical]:[&:not(:first-child):not(:last-child):not([data-variant=ghost])]:[&_*]:border-t-0 data-[orientation=vertical]:[&:last-child:not([data-variant=ghost])]:[&_*]:border-t-0"
};
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-FQY26STY.js
var cardTheme = {
	defaultProps: {
		variant: "solid",
		color: "default"
	},
	baseStyle: "w-full rounded-lg border shadow-sm overflow-hidden",
	variant: {
		ghost: {
			default: "bg-background/10 border-transparent shadow-transparent",
			primary: "bg-primary/10 border-transparent shadow-transparent",
			secondary: "bg-secondary/10 border-transparent shadow-transparent",
			info: "bg-info/10 border-transparent shadow-transparent",
			success: "bg-success/10 border-transparent shadow-transparent",
			warning: "bg-warning/10 border-transparent shadow-transparent",
			error: "bg-error/10 border-transparent shadow-transparent"
		},
		solid: {
			default: "bg-background border-surface shadow-black/5",
			primary: "bg-primary border-primary-dark shadow-primary-dark/25",
			secondary: "bg-secondary border-secondary-dark shadow-secondary-dark/25",
			info: "bg-info border-info-dark shadow-info-dark/25",
			success: "bg-success border-success-dark shadow-success-dark/25",
			warning: "bg-warning border-warning-dark shadow-warning-dark/25",
			error: "bg-error border-error-dark shadow-error-dark/25"
		},
		outline: {
			default: "bg-transparent border-surface shadow-black/5",
			primary: "bg-transparent border-primary shadow-black/5",
			secondary: "bg-transparent border-secondary shadow-black/5",
			info: "bg-transparent border-info shadow-black/5",
			success: "bg-transparent border-success shadow-black/5",
			warning: "bg-transparent border-warning shadow-black/5",
			error: "bg-transparent border-error shadow-black/5"
		},
		gradient: {
			default: "bg-background border-surface shadow-black/5",
			primary: "bg-gradient-to-t from-primary-dark to-primary-light shadow-primary/25 border-primary",
			secondary: "bg-gradient-to-t from-secondary-dark to-secondary-light shadow-secondary/25 border-secondary",
			info: "bg-gradient-to-t from-info-dark to-info-light shadow-info/25 border-info",
			success: "bg-gradient-to-t from-success-dark to-success-light shadow-success/25 border-success",
			warning: "bg-gradient-to-t from-warning-dark to-warning-light shadow-warning/25 border-warning",
			error: "bg-gradient-to-t from-error-dark to-error-light shadow-error/25 border-error"
		}
	}
};
var cardHeaderTheme = { baseStyle: "w-[calc(100%-16px)] h-max rounded m-2" };
var cardBodyTheme = { baseStyle: "w-full h-max rounded px-3.5 py-2.5" };
var cardFooterTheme = { baseStyle: "w-full px-3.5 pt-2 pb-3.5 rounded" };
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-GUZBX522.js
var theme = {
	accordion: accordionTheme,
	accordionItem: accordionItemTheme,
	accordionTrigger: accordionTriggerTheme,
	accordionContent: accordionContentTheme,
	alert: alertTheme,
	alertContent: alertContentTheme,
	alertIcon: alertIconTheme,
	alertDismissTrigger: alertDismissTriggerTheme,
	avatar: avatarTheme,
	breadcrumb: breadcrumbTheme,
	breadcrumbLink: breadcrumbLinkTheme,
	breadcrumbSeparator: breadcrumbSeparatorTheme,
	button: buttonTheme,
	buttonGroup: buttonGroupTheme,
	checkbox: checkboxTheme,
	checkboxIndicator: checkboxIndicatorTheme,
	card: cardTheme,
	cardHeader: cardHeaderTheme,
	cardBody: cardBodyTheme,
	cardFooter: cardFooterTheme,
	chip: chipTheme,
	chipLabel: chipLabelTheme,
	chipIcon: chipIconTheme,
	chipDismissTrigger: chipDismissTriggerTheme,
	collapse: collapseTheme,
	dialog: dialogTheme,
	dialogTrigger: dialogTriggerTheme,
	dialogOverlay: dialogOverlayTheme,
	dialogContent: dialogContentTheme,
	dialogDismissTrigger: dialogDismissTriggerTheme,
	drawerTrigger: drawerTriggerTheme,
	drawerOverlay: drawerOverlayTheme,
	drawerPanel: drawerPanelTheme,
	drawerDismissTrigger: drawerDismissTriggerTheme,
	iconButton: iconButtonTheme,
	input: inputTheme,
	inputIcon: inputIconTheme,
	list: listTheme,
	listItem: listItemTheme,
	listItemStart: listItemStartTheme,
	listItemEnd: listItemEndTheme,
	menu: menuTheme,
	menuContent: menuContentTheme,
	menuTrigger: menuTriggerTheme,
	menuItem: menuItemTheme,
	popover: popoverTheme,
	popoverTrigger: popoverTriggerTheme,
	popoverContent: popoverContentTheme,
	popoverArrow: popoverArrowTheme,
	progress: progressTheme,
	progressBar: progressBarTheme,
	radio: radioTheme,
	radioItem: radioItemTheme,
	radioIndicator: radioIndicatorTheme,
	rating: ratingTheme,
	select: selectTheme,
	selectTrigger: selectTriggerTheme,
	selectList: selectListTheme,
	selectOption: selectOptionTheme,
	spinner: spinnerTheme,
	switch: switchTheme,
	tabs: tabsTheme,
	tabsList: tabsListTheme,
	tabsTrigger: tabsTriggerTheme,
	tabsPanel: tabsPanelTheme,
	tabsTriggerIndicator: tabsTriggerIndicatorTheme,
	textarea: textareaTheme,
	tooltip: tooltipTheme,
	tooltipTrigger: tooltipTriggerTheme,
	tooltipContent: tooltipContentTheme,
	tooltipArrow: tooltipArrowTheme,
	typography: typographyTheme,
	timeline: timelineTheme,
	timelineItem: timelineItemTheme,
	timelineHeader: timelineHeaderTheme,
	timelineIcon: timelineIconTheme,
	timelineSeparator: timelineSeparatorTheme,
	timelineBody: timelineBodyTheme,
	navbar: navbarTheme,
	badge: badgeTheme,
	badgeContent: badgeContentTheme,
	badgeIndicator: badgeIndicatorTheme,
	slider: sliderTheme,
	sliderRange: sliderRangeTheme,
	sliderThumb: sliderThumbTheme,
	sliderTick: sliderTickTheme
};
//#endregion
//#region node_modules/tailwind-merge/dist/lib/tw-join.mjs
/**
* The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
*
* Specifically:
* - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
* - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
*
* Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
*/
function twJoin() {
	var index = 0;
	var argument;
	var resolvedValue;
	var string = "";
	while (index < arguments.length) if (argument = arguments[index++]) {
		if (resolvedValue = toValue(argument)) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
}
function toValue(mix) {
	if (typeof mix === "string") return mix;
	var resolvedValue;
	var string = "";
	for (var k = 0; k < mix.length; k++) if (mix[k]) {
		if (resolvedValue = toValue(mix[k])) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
}
//#endregion
//#region node_modules/tailwind-merge/dist/_virtual/_rollupPluginBabelHelpers.mjs
function _extends() {
	_extends = Object.assign ? Object.assign.bind() : function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	return _extends.apply(this, arguments);
}
//#endregion
//#region node_modules/tailwind-merge/dist/lib/class-utils.mjs
var CLASS_PART_SEPARATOR = "-";
function createClassUtils(config) {
	var classMap = createClassMap(config);
	function getClassGroupId(className) {
		var classParts = className.split(CLASS_PART_SEPARATOR);
		if (classParts[0] === "" && classParts.length !== 1) classParts.shift();
		return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
	}
	function getConflictingClassGroupIds(classGroupId) {
		return config.conflictingClassGroups[classGroupId] || [];
	}
	return {
		getClassGroupId,
		getConflictingClassGroupIds
	};
}
function getGroupRecursive(classParts, classPartObject) {
	var _classPartObject$vali;
	if (classParts.length === 0) return classPartObject.classGroupId;
	var currentClassPart = classParts[0];
	var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
	var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
	if (classGroupFromNextClassPart) return classGroupFromNextClassPart;
	if (classPartObject.validators.length === 0) return;
	var classRest = classParts.join(CLASS_PART_SEPARATOR);
	return (_classPartObject$vali = classPartObject.validators.find(function(_ref) {
		var validator = _ref.validator;
		return validator(classRest);
	})) == null ? void 0 : _classPartObject$vali.classGroupId;
}
var arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
	if (arbitraryPropertyRegex.test(className)) {
		var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
		var property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
		if (property) return "arbitrary.." + property;
	}
}
/**
* Exported for testing only
*/
function createClassMap(config) {
	var theme = config.theme, prefix = config.prefix;
	var classMap = {
		nextPart: /* @__PURE__ */ new Map(),
		validators: []
	};
	getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix).forEach(function(_ref2) {
		var classGroupId = _ref2[0], classGroup = _ref2[1];
		processClassesRecursively(classGroup, classMap, classGroupId, theme);
	});
	return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
	classGroup.forEach(function(classDefinition) {
		if (typeof classDefinition === "string") {
			var classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
			classPartObjectToEdit.classGroupId = classGroupId;
			return;
		}
		if (typeof classDefinition === "function") {
			if (isThemeGetter(classDefinition)) {
				processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
				return;
			}
			classPartObject.validators.push({
				validator: classDefinition,
				classGroupId
			});
			return;
		}
		Object.entries(classDefinition).forEach(function(_ref3) {
			var key = _ref3[0], classGroup = _ref3[1];
			processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
		});
	});
}
function getPart(classPartObject, path) {
	var currentClassPartObject = classPartObject;
	path.split(CLASS_PART_SEPARATOR).forEach(function(pathPart) {
		if (!currentClassPartObject.nextPart.has(pathPart)) currentClassPartObject.nextPart.set(pathPart, {
			nextPart: /* @__PURE__ */ new Map(),
			validators: []
		});
		currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
	});
	return currentClassPartObject;
}
function isThemeGetter(func) {
	return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
	if (!prefix) return classGroupEntries;
	return classGroupEntries.map(function(_ref4) {
		return [_ref4[0], _ref4[1].map(function(classDefinition) {
			if (typeof classDefinition === "string") return prefix + classDefinition;
			if (typeof classDefinition === "object") return Object.fromEntries(Object.entries(classDefinition).map(function(_ref5) {
				var key = _ref5[0], value = _ref5[1];
				return [prefix + key, value];
			}));
			return classDefinition;
		})];
	});
}
//#endregion
//#region node_modules/tailwind-merge/dist/lib/lru-cache.mjs
function createLruCache(maxCacheSize) {
	if (maxCacheSize < 1) return {
		get: function get() {},
		set: function set() {}
	};
	var cacheSize = 0;
	var cache = /* @__PURE__ */ new Map();
	var previousCache = /* @__PURE__ */ new Map();
	function update(key, value) {
		cache.set(key, value);
		cacheSize++;
		if (cacheSize > maxCacheSize) {
			cacheSize = 0;
			previousCache = cache;
			cache = /* @__PURE__ */ new Map();
		}
	}
	return {
		get: function get(key) {
			var value = cache.get(key);
			if (value !== void 0) return value;
			if ((value = previousCache.get(key)) !== void 0) {
				update(key, value);
				return value;
			}
		},
		set: function set(key, value) {
			if (cache.has(key)) cache.set(key, value);
			else update(key, value);
		}
	};
}
function createSplitModifiers(config) {
	var separator = config.separator || ":";
	return function splitModifiers(className) {
		var bracketDepth = 0;
		var modifiers = [];
		var modifierStart = 0;
		for (var index = 0; index < className.length; index++) {
			var _char = className[index];
			if (bracketDepth === 0 && _char === separator[0]) {
				if (separator.length === 1 || className.slice(index, index + separator.length) === separator) {
					modifiers.push(className.slice(modifierStart, index));
					modifierStart = index + separator.length;
				}
			}
			if (_char === "[") bracketDepth++;
			else if (_char === "]") bracketDepth--;
		}
		var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
		var hasImportantModifier = baseClassNameWithImportantModifier.startsWith("!");
		return {
			modifiers,
			hasImportantModifier,
			baseClassName: hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier
		};
	};
}
/**
* Sorts modifiers according to following schema:
* - Predefined modifiers are sorted alphabetically
* - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
*/
function sortModifiers(modifiers) {
	if (modifiers.length <= 1) return modifiers;
	var sortedModifiers = [];
	var unsortedModifiers = [];
	modifiers.forEach(function(modifier) {
		if (modifier[0] === "[") {
			sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
			unsortedModifiers = [];
		} else unsortedModifiers.push(modifier);
	});
	sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
	return sortedModifiers;
}
//#endregion
//#region node_modules/tailwind-merge/dist/lib/config-utils.mjs
function createConfigUtils(config) {
	return _extends({
		cache: createLruCache(config.cacheSize),
		splitModifiers: createSplitModifiers(config)
	}, createClassUtils(config));
}
//#endregion
//#region node_modules/tailwind-merge/dist/lib/merge-classlist.mjs
var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
	var splitModifiers = configUtils.splitModifiers, getClassGroupId = configUtils.getClassGroupId, getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
	/**
	* Set of classGroupIds in following format:
	* `{importantModifier}{variantModifiers}{classGroupId}`
	* @example 'float'
	* @example 'hover:focus:bg-color'
	* @example 'md:!pr'
	*/
	var classGroupsInConflict = /* @__PURE__ */ new Set();
	return classList.trim().split(SPLIT_CLASSES_REGEX).map(function(originalClassName) {
		var _splitModifiers = splitModifiers(originalClassName), modifiers = _splitModifiers.modifiers, hasImportantModifier = _splitModifiers.hasImportantModifier, baseClassName = _splitModifiers.baseClassName;
		var classGroupId = getClassGroupId(baseClassName);
		if (!classGroupId) return {
			isTailwindClass: false,
			originalClassName
		};
		var variantModifier = sortModifiers(modifiers).join(":");
		return {
			isTailwindClass: true,
			modifierId: hasImportantModifier ? variantModifier + "!" : variantModifier,
			classGroupId,
			originalClassName
		};
	}).reverse().filter(function(parsed) {
		if (!parsed.isTailwindClass) return true;
		var modifierId = parsed.modifierId, classGroupId = parsed.classGroupId;
		var classId = modifierId + classGroupId;
		if (classGroupsInConflict.has(classId)) return false;
		classGroupsInConflict.add(classId);
		getConflictingClassGroupIds(classGroupId).forEach(function(group) {
			return classGroupsInConflict.add(modifierId + group);
		});
		return true;
	}).reverse().map(function(parsed) {
		return parsed.originalClassName;
	}).join(" ");
}
//#endregion
//#region node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs
function createTailwindMerge() {
	for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) createConfig[_key] = arguments[_key];
	var configUtils;
	var cacheGet;
	var cacheSet;
	var functionToCall = initTailwindMerge;
	function initTailwindMerge(classList) {
		var firstCreateConfig = createConfig[0];
		configUtils = createConfigUtils(createConfig.slice(1).reduce(function(previousConfig, createConfigCurrent) {
			return createConfigCurrent(previousConfig);
		}, firstCreateConfig()));
		cacheGet = configUtils.cache.get;
		cacheSet = configUtils.cache.set;
		functionToCall = tailwindMerge;
		return tailwindMerge(classList);
	}
	function tailwindMerge(classList) {
		var cachedResult = cacheGet(classList);
		if (cachedResult) return cachedResult;
		var result = mergeClassList(classList, configUtils);
		cacheSet(classList, result);
		return result;
	}
	return function callTailwindMerge() {
		return functionToCall(twJoin.apply(null, arguments));
	};
}
//#endregion
//#region node_modules/tailwind-merge/dist/lib/from-theme.mjs
function fromTheme(key) {
	var themeGetter = function themeGetter(theme) {
		return theme[key] || [];
	};
	themeGetter.isThemeGetter = true;
	return themeGetter;
}
//#endregion
//#region node_modules/tailwind-merge/dist/lib/validators.mjs
var arbitraryValueRegex = /^\[(.+)\]$/;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /*#__PURE__*/ new Set([
	"px",
	"full",
	"screen"
]);
var tshirtUnitRegex = /^(\d+)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/;
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function isLength(classPart) {
	return !Number.isNaN(Number(classPart)) || stringLengths.has(classPart) || fractionRegex.test(classPart) || isArbitraryLength(classPart);
}
function isArbitraryLength(classPart) {
	var _arbitraryValueRegex$;
	var arbitraryValue = (_arbitraryValueRegex$ = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$[1];
	if (arbitraryValue) return arbitraryValue.startsWith("length:") || lengthUnitRegex.test(arbitraryValue);
	return false;
}
function isArbitrarySize(classPart) {
	var _arbitraryValueRegex$2;
	var arbitraryValue = (_arbitraryValueRegex$2 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$2[1];
	return arbitraryValue ? arbitraryValue.startsWith("size:") : false;
}
function isArbitraryPosition(classPart) {
	var _arbitraryValueRegex$3;
	var arbitraryValue = (_arbitraryValueRegex$3 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$3[1];
	return arbitraryValue ? arbitraryValue.startsWith("position:") : false;
}
function isArbitraryUrl(classPart) {
	var _arbitraryValueRegex$4;
	var arbitraryValue = (_arbitraryValueRegex$4 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$4[1];
	return arbitraryValue ? arbitraryValue.startsWith("url(") || arbitraryValue.startsWith("url:") : false;
}
function isArbitraryNumber(classPart) {
	var _arbitraryValueRegex$5;
	var arbitraryValue = (_arbitraryValueRegex$5 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$5[1];
	return arbitraryValue ? !Number.isNaN(Number(arbitraryValue)) || arbitraryValue.startsWith("number:") : false;
}
function isInteger(classPart) {
	var _arbitraryValueRegex$6;
	var arbitraryValue = (_arbitraryValueRegex$6 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$6[1];
	if (arbitraryValue) return Number.isInteger(Number(arbitraryValue));
	return Number.isInteger(Number(classPart));
}
function isArbitraryValue(classPart) {
	return arbitraryValueRegex.test(classPart);
}
function isAny() {
	return true;
}
function isTshirtSize(classPart) {
	return tshirtUnitRegex.test(classPart);
}
function isArbitraryShadow(classPart) {
	var _arbitraryValueRegex$7;
	var arbitraryValue = (_arbitraryValueRegex$7 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$7[1];
	if (arbitraryValue) return shadowRegex.test(arbitraryValue);
	return false;
}
//#endregion
//#region node_modules/tailwind-merge/dist/lib/default-config.mjs
function getDefaultConfig() {
	var colors = fromTheme("colors");
	var spacing = fromTheme("spacing");
	var blur = fromTheme("blur");
	var brightness = fromTheme("brightness");
	var borderColor = fromTheme("borderColor");
	var borderRadius = fromTheme("borderRadius");
	var borderSpacing = fromTheme("borderSpacing");
	var borderWidth = fromTheme("borderWidth");
	var contrast = fromTheme("contrast");
	var grayscale = fromTheme("grayscale");
	var hueRotate = fromTheme("hueRotate");
	var invert = fromTheme("invert");
	var gap = fromTheme("gap");
	var gradientColorStops = fromTheme("gradientColorStops");
	var inset = fromTheme("inset");
	var margin = fromTheme("margin");
	var opacity = fromTheme("opacity");
	var padding = fromTheme("padding");
	var saturate = fromTheme("saturate");
	var scale = fromTheme("scale");
	var sepia = fromTheme("sepia");
	var skew = fromTheme("skew");
	var space = fromTheme("space");
	var translate = fromTheme("translate");
	var getOverscroll = function getOverscroll() {
		return [
			"auto",
			"contain",
			"none"
		];
	};
	var getOverflow = function getOverflow() {
		return [
			"auto",
			"hidden",
			"clip",
			"visible",
			"scroll"
		];
	};
	var getSpacingWithAuto = function getSpacingWithAuto() {
		return ["auto", spacing];
	};
	var getLengthWithEmpty = function getLengthWithEmpty() {
		return ["", isLength];
	};
	var getIntegerWithAuto = function getIntegerWithAuto() {
		return ["auto", isInteger];
	};
	var getPositions = function getPositions() {
		return [
			"bottom",
			"center",
			"left",
			"left-bottom",
			"left-top",
			"right",
			"right-bottom",
			"right-top",
			"top"
		];
	};
	var getLineStyles = function getLineStyles() {
		return [
			"solid",
			"dashed",
			"dotted",
			"double",
			"none"
		];
	};
	var getBlendModes = function getBlendModes() {
		return [
			"normal",
			"multiply",
			"screen",
			"overlay",
			"darken",
			"lighten",
			"color-dodge",
			"color-burn",
			"hard-light",
			"soft-light",
			"difference",
			"exclusion",
			"hue",
			"saturation",
			"color",
			"luminosity",
			"plus-lighter"
		];
	};
	var getAlign = function getAlign() {
		return [
			"start",
			"end",
			"center",
			"between",
			"around",
			"evenly"
		];
	};
	var getZeroAndEmpty = function getZeroAndEmpty() {
		return [
			"",
			"0",
			isArbitraryValue
		];
	};
	var getBreaks = function getBreaks() {
		return [
			"auto",
			"avoid",
			"all",
			"avoid-page",
			"page",
			"left",
			"right",
			"column"
		];
	};
	return {
		cacheSize: 500,
		theme: {
			colors: [isAny],
			spacing: [isLength],
			blur: [
				"none",
				"",
				isTshirtSize,
				isArbitraryLength
			],
			brightness: [isInteger],
			borderColor: [colors],
			borderRadius: [
				"none",
				"",
				"full",
				isTshirtSize,
				isArbitraryLength
			],
			borderSpacing: [spacing],
			borderWidth: getLengthWithEmpty(),
			contrast: [isInteger],
			grayscale: getZeroAndEmpty(),
			hueRotate: [isInteger],
			invert: getZeroAndEmpty(),
			gap: [spacing],
			gradientColorStops: [colors],
			inset: getSpacingWithAuto(),
			margin: getSpacingWithAuto(),
			opacity: [isInteger],
			padding: [spacing],
			saturate: [isInteger],
			scale: [isInteger],
			sepia: getZeroAndEmpty(),
			skew: [isInteger, isArbitraryValue],
			space: [spacing],
			translate: [spacing]
		},
		classGroups: {
			/**
			* Aspect Ratio
			* @see https://tailwindcss.com/docs/aspect-ratio
			*/
			aspect: [{ aspect: [
				"auto",
				"square",
				"video",
				isArbitraryValue
			] }],
			/**
			* Container
			* @see https://tailwindcss.com/docs/container
			*/
			container: ["container"],
			/**
			* Columns
			* @see https://tailwindcss.com/docs/columns
			*/
			columns: [{ columns: [isTshirtSize] }],
			/**
			* Break After
			* @see https://tailwindcss.com/docs/break-after
			*/
			"break-after": [{ "break-after": getBreaks() }],
			/**
			* Break Before
			* @see https://tailwindcss.com/docs/break-before
			*/
			"break-before": [{ "break-before": getBreaks() }],
			/**
			* Break Inside
			* @see https://tailwindcss.com/docs/break-inside
			*/
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			/**
			* Box Decoration Break
			* @see https://tailwindcss.com/docs/box-decoration-break
			*/
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			/**
			* Box Sizing
			* @see https://tailwindcss.com/docs/box-sizing
			*/
			box: [{ box: ["border", "content"] }],
			/**
			* Display
			* @see https://tailwindcss.com/docs/display
			*/
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			/**
			* Floats
			* @see https://tailwindcss.com/docs/float
			*/
			"float": [{ "float": [
				"right",
				"left",
				"none"
			] }],
			/**
			* Clear
			* @see https://tailwindcss.com/docs/clear
			*/
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none"
			] }],
			/**
			* Isolation
			* @see https://tailwindcss.com/docs/isolation
			*/
			isolation: ["isolate", "isolation-auto"],
			/**
			* Object Fit
			* @see https://tailwindcss.com/docs/object-fit
			*/
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			/**
			* Object Position
			* @see https://tailwindcss.com/docs/object-position
			*/
			"object-position": [{ object: [].concat(getPositions(), [isArbitraryValue]) }],
			/**
			* Overflow
			* @see https://tailwindcss.com/docs/overflow
			*/
			overflow: [{ overflow: getOverflow() }],
			/**
			* Overflow X
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-x": [{ "overflow-x": getOverflow() }],
			/**
			* Overflow Y
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-y": [{ "overflow-y": getOverflow() }],
			/**
			* Overscroll Behavior
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			overscroll: [{ overscroll: getOverscroll() }],
			/**
			* Overscroll Behavior X
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-x": [{ "overscroll-x": getOverscroll() }],
			/**
			* Overscroll Behavior Y
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-y": [{ "overscroll-y": getOverscroll() }],
			/**
			* Position
			* @see https://tailwindcss.com/docs/position
			*/
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			/**
			* Top / Right / Bottom / Left
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			inset: [{ inset: [inset] }],
			/**
			* Right / Left
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-x": [{ "inset-x": [inset] }],
			/**
			* Top / Bottom
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-y": [{ "inset-y": [inset] }],
			/**
			* Top
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			top: [{ top: [inset] }],
			/**
			* Right
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			right: [{ right: [inset] }],
			/**
			* Bottom
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			bottom: [{ bottom: [inset] }],
			/**
			* Left
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			left: [{ left: [inset] }],
			/**
			* Visibility
			* @see https://tailwindcss.com/docs/visibility
			*/
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			/**
			* Z-Index
			* @see https://tailwindcss.com/docs/z-index
			*/
			z: [{ z: [isInteger] }],
			/**
			* Flex Basis
			* @see https://tailwindcss.com/docs/flex-basis
			*/
			basis: [{ basis: [spacing] }],
			/**
			* Flex Direction
			* @see https://tailwindcss.com/docs/flex-direction
			*/
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			/**
			* Flex Wrap
			* @see https://tailwindcss.com/docs/flex-wrap
			*/
			"flex-wrap": [{ flex: [
				"wrap",
				"wrap-reverse",
				"nowrap"
			] }],
			/**
			* Flex
			* @see https://tailwindcss.com/docs/flex
			*/
			flex: [{ flex: [
				"1",
				"auto",
				"initial",
				"none",
				isArbitraryValue
			] }],
			/**
			* Flex Grow
			* @see https://tailwindcss.com/docs/flex-grow
			*/
			grow: [{ grow: getZeroAndEmpty() }],
			/**
			* Flex Shrink
			* @see https://tailwindcss.com/docs/flex-shrink
			*/
			shrink: [{ shrink: getZeroAndEmpty() }],
			/**
			* Order
			* @see https://tailwindcss.com/docs/order
			*/
			order: [{ order: [
				"first",
				"last",
				"none",
				isInteger
			] }],
			/**
			* Grid Template Columns
			* @see https://tailwindcss.com/docs/grid-template-columns
			*/
			"grid-cols": [{ "grid-cols": [isAny] }],
			/**
			* Grid Column Start / End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start-end": [{ col: ["auto", { span: [isInteger] }] }],
			/**
			* Grid Column Start
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start": [{ "col-start": getIntegerWithAuto() }],
			/**
			* Grid Column End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-end": [{ "col-end": getIntegerWithAuto() }],
			/**
			* Grid Template Rows
			* @see https://tailwindcss.com/docs/grid-template-rows
			*/
			"grid-rows": [{ "grid-rows": [isAny] }],
			/**
			* Grid Row Start / End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start-end": [{ row: ["auto", { span: [isInteger] }] }],
			/**
			* Grid Row Start
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start": [{ "row-start": getIntegerWithAuto() }],
			/**
			* Grid Row End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-end": [{ "row-end": getIntegerWithAuto() }],
			/**
			* Grid Auto Flow
			* @see https://tailwindcss.com/docs/grid-auto-flow
			*/
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			/**
			* Grid Auto Columns
			* @see https://tailwindcss.com/docs/grid-auto-columns
			*/
			"auto-cols": [{ "auto-cols": [
				"auto",
				"min",
				"max",
				"fr",
				isArbitraryValue
			] }],
			/**
			* Grid Auto Rows
			* @see https://tailwindcss.com/docs/grid-auto-rows
			*/
			"auto-rows": [{ "auto-rows": [
				"auto",
				"min",
				"max",
				"fr",
				isArbitraryValue
			] }],
			/**
			* Gap
			* @see https://tailwindcss.com/docs/gap
			*/
			gap: [{ gap: [gap] }],
			/**
			* Gap X
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-x": [{ "gap-x": [gap] }],
			/**
			* Gap Y
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-y": [{ "gap-y": [gap] }],
			/**
			* Justify Content
			* @see https://tailwindcss.com/docs/justify-content
			*/
			"justify-content": [{ justify: getAlign() }],
			/**
			* Justify Items
			* @see https://tailwindcss.com/docs/justify-items
			*/
			"justify-items": [{ "justify-items": [
				"start",
				"end",
				"center",
				"stretch"
			] }],
			/**
			* Justify Self
			* @see https://tailwindcss.com/docs/justify-self
			*/
			"justify-self": [{ "justify-self": [
				"auto",
				"start",
				"end",
				"center",
				"stretch"
			] }],
			/**
			* Align Content
			* @see https://tailwindcss.com/docs/align-content
			*/
			"align-content": [{ content: [].concat(getAlign(), ["baseline"]) }],
			/**
			* Align Items
			* @see https://tailwindcss.com/docs/align-items
			*/
			"align-items": [{ items: [
				"start",
				"end",
				"center",
				"baseline",
				"stretch"
			] }],
			/**
			* Align Self
			* @see https://tailwindcss.com/docs/align-self
			*/
			"align-self": [{ self: [
				"auto",
				"start",
				"end",
				"center",
				"stretch",
				"baseline"
			] }],
			/**
			* Place Content
			* @see https://tailwindcss.com/docs/place-content
			*/
			"place-content": [{ "place-content": [].concat(getAlign(), ["baseline", "stretch"]) }],
			/**
			* Place Items
			* @see https://tailwindcss.com/docs/place-items
			*/
			"place-items": [{ "place-items": [
				"start",
				"end",
				"center",
				"baseline",
				"stretch"
			] }],
			/**
			* Place Self
			* @see https://tailwindcss.com/docs/place-self
			*/
			"place-self": [{ "place-self": [
				"auto",
				"start",
				"end",
				"center",
				"stretch"
			] }],
			/**
			* Padding
			* @see https://tailwindcss.com/docs/padding
			*/
			p: [{ p: [padding] }],
			/**
			* Padding X
			* @see https://tailwindcss.com/docs/padding
			*/
			px: [{ px: [padding] }],
			/**
			* Padding Y
			* @see https://tailwindcss.com/docs/padding
			*/
			py: [{ py: [padding] }],
			/**
			* Padding Top
			* @see https://tailwindcss.com/docs/padding
			*/
			pt: [{ pt: [padding] }],
			/**
			* Padding Right
			* @see https://tailwindcss.com/docs/padding
			*/
			pr: [{ pr: [padding] }],
			/**
			* Padding Bottom
			* @see https://tailwindcss.com/docs/padding
			*/
			pb: [{ pb: [padding] }],
			/**
			* Padding Left
			* @see https://tailwindcss.com/docs/padding
			*/
			pl: [{ pl: [padding] }],
			/**
			* Margin
			* @see https://tailwindcss.com/docs/margin
			*/
			m: [{ m: [margin] }],
			/**
			* Margin X
			* @see https://tailwindcss.com/docs/margin
			*/
			mx: [{ mx: [margin] }],
			/**
			* Margin Y
			* @see https://tailwindcss.com/docs/margin
			*/
			my: [{ my: [margin] }],
			/**
			* Margin Top
			* @see https://tailwindcss.com/docs/margin
			*/
			mt: [{ mt: [margin] }],
			/**
			* Margin Right
			* @see https://tailwindcss.com/docs/margin
			*/
			mr: [{ mr: [margin] }],
			/**
			* Margin Bottom
			* @see https://tailwindcss.com/docs/margin
			*/
			mb: [{ mb: [margin] }],
			/**
			* Margin Left
			* @see https://tailwindcss.com/docs/margin
			*/
			ml: [{ ml: [margin] }],
			/**
			* Space Between X
			* @see https://tailwindcss.com/docs/space
			*/
			"space-x": [{ "space-x": [space] }],
			/**
			* Space Between X Reverse
			* @see https://tailwindcss.com/docs/space
			*/
			"space-x-reverse": ["space-x-reverse"],
			/**
			* Space Between Y
			* @see https://tailwindcss.com/docs/space
			*/
			"space-y": [{ "space-y": [space] }],
			/**
			* Space Between Y Reverse
			* @see https://tailwindcss.com/docs/space
			*/
			"space-y-reverse": ["space-y-reverse"],
			/**
			* Width
			* @see https://tailwindcss.com/docs/width
			*/
			w: [{ w: [
				"auto",
				"min",
				"max",
				"fit",
				spacing
			] }],
			/**
			* Min-Width
			* @see https://tailwindcss.com/docs/min-width
			*/
			"min-w": [{ "min-w": [
				"min",
				"max",
				"fit",
				isLength
			] }],
			/**
			* Max-Width
			* @see https://tailwindcss.com/docs/max-width
			*/
			"max-w": [{ "max-w": [
				"0",
				"none",
				"full",
				"min",
				"max",
				"fit",
				"prose",
				{ screen: [isTshirtSize] },
				isTshirtSize,
				isArbitraryLength
			] }],
			/**
			* Height
			* @see https://tailwindcss.com/docs/height
			*/
			h: [{ h: [
				spacing,
				"auto",
				"min",
				"max",
				"fit"
			] }],
			/**
			* Min-Height
			* @see https://tailwindcss.com/docs/min-height
			*/
			"min-h": [{ "min-h": [
				"min",
				"max",
				"fit",
				isLength
			] }],
			/**
			* Max-Height
			* @see https://tailwindcss.com/docs/max-height
			*/
			"max-h": [{ "max-h": [
				spacing,
				"min",
				"max",
				"fit"
			] }],
			/**
			* Font Size
			* @see https://tailwindcss.com/docs/font-size
			*/
			"font-size": [{ text: [
				"base",
				isTshirtSize,
				isArbitraryLength
			] }],
			/**
			* Font Smoothing
			* @see https://tailwindcss.com/docs/font-smoothing
			*/
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			/**
			* Font Style
			* @see https://tailwindcss.com/docs/font-style
			*/
			"font-style": ["italic", "not-italic"],
			/**
			* Font Weight
			* @see https://tailwindcss.com/docs/font-weight
			*/
			"font-weight": [{ font: [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black",
				isArbitraryNumber
			] }],
			/**
			* Font Family
			* @see https://tailwindcss.com/docs/font-family
			*/
			"font-family": [{ font: [isAny] }],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-normal": ["normal-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-ordinal": ["ordinal"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-slashed-zero": ["slashed-zero"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
			/**
			* Letter Spacing
			* @see https://tailwindcss.com/docs/letter-spacing
			*/
			tracking: [{ tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest",
				isArbitraryLength
			] }],
			/**
			* Line Height
			* @see https://tailwindcss.com/docs/line-height
			*/
			leading: [{ leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose",
				isLength
			] }],
			/**
			* List Style Type
			* @see https://tailwindcss.com/docs/list-style-type
			*/
			"list-style-type": [{ list: [
				"none",
				"disc",
				"decimal",
				isArbitraryValue
			] }],
			/**
			* List Style Position
			* @see https://tailwindcss.com/docs/list-style-position
			*/
			"list-style-position": [{ list: ["inside", "outside"] }],
			/**
			* Placeholder Color
			* @deprecated since Tailwind CSS v3.0.0
			* @see https://tailwindcss.com/docs/placeholder-color
			*/
			"placeholder-color": [{ placeholder: [colors] }],
			/**
			* Placeholder Opacity
			* @see https://tailwindcss.com/docs/placeholder-opacity
			*/
			"placeholder-opacity": [{ "placeholder-opacity": [opacity] }],
			/**
			* Text Alignment
			* @see https://tailwindcss.com/docs/text-align
			*/
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			/**
			* Text Color
			* @see https://tailwindcss.com/docs/text-color
			*/
			"text-color": [{ text: [colors] }],
			/**
			* Text Opacity
			* @see https://tailwindcss.com/docs/text-opacity
			*/
			"text-opacity": [{ "text-opacity": [opacity] }],
			/**
			* Text Decoration
			* @see https://tailwindcss.com/docs/text-decoration
			*/
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			/**
			* Text Decoration Style
			* @see https://tailwindcss.com/docs/text-decoration-style
			*/
			"text-decoration-style": [{ decoration: [].concat(getLineStyles(), ["wavy"]) }],
			/**
			* Text Decoration Thickness
			* @see https://tailwindcss.com/docs/text-decoration-thickness
			*/
			"text-decoration-thickness": [{ decoration: [
				"auto",
				"from-font",
				isLength
			] }],
			/**
			* Text Underline Offset
			* @see https://tailwindcss.com/docs/text-underline-offset
			*/
			"underline-offset": [{ "underline-offset": ["auto", isLength] }],
			/**
			* Text Decoration Color
			* @see https://tailwindcss.com/docs/text-decoration-color
			*/
			"text-decoration-color": [{ decoration: [colors] }],
			/**
			* Text Transform
			* @see https://tailwindcss.com/docs/text-transform
			*/
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			/**
			* Text Overflow
			* @see https://tailwindcss.com/docs/text-overflow
			*/
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			/**
			* Text Indent
			* @see https://tailwindcss.com/docs/text-indent
			*/
			indent: [{ indent: [spacing] }],
			/**
			* Vertical Alignment
			* @see https://tailwindcss.com/docs/vertical-align
			*/
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				isArbitraryLength
			] }],
			/**
			* Whitespace
			* @see https://tailwindcss.com/docs/whitespace
			*/
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap"
			] }],
			/**
			* Word Break
			* @see https://tailwindcss.com/docs/word-break
			*/
			"break": [{ "break": [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			/**
			* Content
			* @see https://tailwindcss.com/docs/content
			*/
			content: [{ content: ["none", isArbitraryValue] }],
			/**
			* Background Attachment
			* @see https://tailwindcss.com/docs/background-attachment
			*/
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			/**
			* Background Clip
			* @see https://tailwindcss.com/docs/background-clip
			*/
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			/**
			* Background Opacity
			* @deprecated since Tailwind CSS v3.0.0
			* @see https://tailwindcss.com/docs/background-opacity
			*/
			"bg-opacity": [{ "bg-opacity": [opacity] }],
			/**
			* Background Origin
			* @see https://tailwindcss.com/docs/background-origin
			*/
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			/**
			* Background Position
			* @see https://tailwindcss.com/docs/background-position
			*/
			"bg-position": [{ bg: [].concat(getPositions(), [isArbitraryPosition]) }],
			/**
			* Background Repeat
			* @see https://tailwindcss.com/docs/background-repeat
			*/
			"bg-repeat": [{ bg: ["no-repeat", { repeat: [
				"",
				"x",
				"y",
				"round",
				"space"
			] }] }],
			/**
			* Background Size
			* @see https://tailwindcss.com/docs/background-size
			*/
			"bg-size": [{ bg: [
				"auto",
				"cover",
				"contain",
				isArbitrarySize
			] }],
			/**
			* Background Image
			* @see https://tailwindcss.com/docs/background-image
			*/
			"bg-image": [{ bg: [
				"none",
				{ "gradient-to": [
					"t",
					"tr",
					"r",
					"br",
					"b",
					"bl",
					"l",
					"tl"
				] },
				isArbitraryUrl
			] }],
			/**
			* Background Color
			* @see https://tailwindcss.com/docs/background-color
			*/
			"bg-color": [{ bg: [colors] }],
			/**
			* Gradient Color Stops From
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from": [{ from: [gradientColorStops] }],
			/**
			* Gradient Color Stops Via
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via": [{ via: [gradientColorStops] }],
			/**
			* Gradient Color Stops To
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to": [{ to: [gradientColorStops] }],
			/**
			* Border Radius
			* @see https://tailwindcss.com/docs/border-radius
			*/
			rounded: [{ rounded: [borderRadius] }],
			/**
			* Border Radius Top
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-t": [{ "rounded-t": [borderRadius] }],
			/**
			* Border Radius Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-r": [{ "rounded-r": [borderRadius] }],
			/**
			* Border Radius Bottom
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-b": [{ "rounded-b": [borderRadius] }],
			/**
			* Border Radius Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-l": [{ "rounded-l": [borderRadius] }],
			/**
			* Border Radius Top Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tl": [{ "rounded-tl": [borderRadius] }],
			/**
			* Border Radius Top Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tr": [{ "rounded-tr": [borderRadius] }],
			/**
			* Border Radius Bottom Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-br": [{ "rounded-br": [borderRadius] }],
			/**
			* Border Radius Bottom Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-bl": [{ "rounded-bl": [borderRadius] }],
			/**
			* Border Width
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w": [{ border: [borderWidth] }],
			/**
			* Border Width X
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-x": [{ "border-x": [borderWidth] }],
			/**
			* Border Width Y
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-y": [{ "border-y": [borderWidth] }],
			/**
			* Border Width Top
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-t": [{ "border-t": [borderWidth] }],
			/**
			* Border Width Right
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-r": [{ "border-r": [borderWidth] }],
			/**
			* Border Width Bottom
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-b": [{ "border-b": [borderWidth] }],
			/**
			* Border Width Left
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-l": [{ "border-l": [borderWidth] }],
			/**
			* Border Opacity
			* @see https://tailwindcss.com/docs/border-opacity
			*/
			"border-opacity": [{ "border-opacity": [opacity] }],
			/**
			* Border Style
			* @see https://tailwindcss.com/docs/border-style
			*/
			"border-style": [{ border: [].concat(getLineStyles(), ["hidden"]) }],
			/**
			* Divide Width X
			* @see https://tailwindcss.com/docs/divide-width
			*/
			"divide-x": [{ "divide-x": [borderWidth] }],
			/**
			* Divide Width X Reverse
			* @see https://tailwindcss.com/docs/divide-width
			*/
			"divide-x-reverse": ["divide-x-reverse"],
			/**
			* Divide Width Y
			* @see https://tailwindcss.com/docs/divide-width
			*/
			"divide-y": [{ "divide-y": [borderWidth] }],
			/**
			* Divide Width Y Reverse
			* @see https://tailwindcss.com/docs/divide-width
			*/
			"divide-y-reverse": ["divide-y-reverse"],
			/**
			* Divide Opacity
			* @see https://tailwindcss.com/docs/divide-opacity
			*/
			"divide-opacity": [{ "divide-opacity": [opacity] }],
			/**
			* Divide Style
			* @see https://tailwindcss.com/docs/divide-style
			*/
			"divide-style": [{ divide: getLineStyles() }],
			/**
			* Border Color
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color": [{ border: [borderColor] }],
			/**
			* Border Color X
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-x": [{ "border-x": [borderColor] }],
			/**
			* Border Color Y
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-y": [{ "border-y": [borderColor] }],
			/**
			* Border Color Top
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-t": [{ "border-t": [borderColor] }],
			/**
			* Border Color Right
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-r": [{ "border-r": [borderColor] }],
			/**
			* Border Color Bottom
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-b": [{ "border-b": [borderColor] }],
			/**
			* Border Color Left
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-l": [{ "border-l": [borderColor] }],
			/**
			* Divide Color
			* @see https://tailwindcss.com/docs/divide-color
			*/
			"divide-color": [{ divide: [borderColor] }],
			/**
			* Outline Style
			* @see https://tailwindcss.com/docs/outline-style
			*/
			"outline-style": [{ outline: [""].concat(getLineStyles()) }],
			/**
			* Outline Offset
			* @see https://tailwindcss.com/docs/outline-offset
			*/
			"outline-offset": [{ "outline-offset": [isLength] }],
			/**
			* Outline Width
			* @see https://tailwindcss.com/docs/outline-width
			*/
			"outline-w": [{ outline: [isLength] }],
			/**
			* Outline Color
			* @see https://tailwindcss.com/docs/outline-color
			*/
			"outline-color": [{ outline: [colors] }],
			/**
			* Ring Width
			* @see https://tailwindcss.com/docs/ring-width
			*/
			"ring-w": [{ ring: getLengthWithEmpty() }],
			/**
			* Ring Width Inset
			* @see https://tailwindcss.com/docs/ring-width
			*/
			"ring-w-inset": ["ring-inset"],
			/**
			* Ring Color
			* @see https://tailwindcss.com/docs/ring-color
			*/
			"ring-color": [{ ring: [colors] }],
			/**
			* Ring Opacity
			* @see https://tailwindcss.com/docs/ring-opacity
			*/
			"ring-opacity": [{ "ring-opacity": [opacity] }],
			/**
			* Ring Offset Width
			* @see https://tailwindcss.com/docs/ring-offset-width
			*/
			"ring-offset-w": [{ "ring-offset": [isLength] }],
			/**
			* Ring Offset Color
			* @see https://tailwindcss.com/docs/ring-offset-color
			*/
			"ring-offset-color": [{ "ring-offset": [colors] }],
			/**
			* Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow
			*/
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				isTshirtSize,
				isArbitraryShadow
			] }],
			/**
			* Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow-color
			*/
			"shadow-color": [{ shadow: [isAny] }],
			/**
			* Opacity
			* @see https://tailwindcss.com/docs/opacity
			*/
			opacity: [{ opacity: [opacity] }],
			/**
			* Mix Beldn Mode
			* @see https://tailwindcss.com/docs/mix-blend-mode
			*/
			"mix-blend": [{ "mix-blend": getBlendModes() }],
			/**
			* Background Blend Mode
			* @see https://tailwindcss.com/docs/background-blend-mode
			*/
			"bg-blend": [{ "bg-blend": getBlendModes() }],
			/**
			* Filter
			* @deprecated since Tailwind CSS v3.0.0
			* @see https://tailwindcss.com/docs/filter
			*/
			filter: [{ filter: ["", "none"] }],
			/**
			* Blur
			* @see https://tailwindcss.com/docs/blur
			*/
			blur: [{ blur: [blur] }],
			/**
			* Brightness
			* @see https://tailwindcss.com/docs/brightness
			*/
			brightness: [{ brightness: [brightness] }],
			/**
			* Contrast
			* @see https://tailwindcss.com/docs/contrast
			*/
			contrast: [{ contrast: [contrast] }],
			/**
			* Drop Shadow
			* @see https://tailwindcss.com/docs/drop-shadow
			*/
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				isTshirtSize,
				isArbitraryValue
			] }],
			/**
			* Grayscale
			* @see https://tailwindcss.com/docs/grayscale
			*/
			grayscale: [{ grayscale: [grayscale] }],
			/**
			* Hue Rotate
			* @see https://tailwindcss.com/docs/hue-rotate
			*/
			"hue-rotate": [{ "hue-rotate": [hueRotate] }],
			/**
			* Invert
			* @see https://tailwindcss.com/docs/invert
			*/
			invert: [{ invert: [invert] }],
			/**
			* Saturate
			* @see https://tailwindcss.com/docs/saturate
			*/
			saturate: [{ saturate: [saturate] }],
			/**
			* Sepia
			* @see https://tailwindcss.com/docs/sepia
			*/
			sepia: [{ sepia: [sepia] }],
			/**
			* Backdrop Filter
			* @deprecated since Tailwind CSS v3.0.0
			* @see https://tailwindcss.com/docs/backdrop-filter
			*/
			"backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
			/**
			* Backdrop Blur
			* @see https://tailwindcss.com/docs/backdrop-blur
			*/
			"backdrop-blur": [{ "backdrop-blur": [blur] }],
			/**
			* Backdrop Brightness
			* @see https://tailwindcss.com/docs/backdrop-brightness
			*/
			"backdrop-brightness": [{ "backdrop-brightness": [brightness] }],
			/**
			* Backdrop Contrast
			* @see https://tailwindcss.com/docs/backdrop-contrast
			*/
			"backdrop-contrast": [{ "backdrop-contrast": [contrast] }],
			/**
			* Backdrop Grayscale
			* @see https://tailwindcss.com/docs/backdrop-grayscale
			*/
			"backdrop-grayscale": [{ "backdrop-grayscale": [grayscale] }],
			/**
			* Backdrop Hue Rotate
			* @see https://tailwindcss.com/docs/backdrop-hue-rotate
			*/
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [hueRotate] }],
			/**
			* Backdrop Invert
			* @see https://tailwindcss.com/docs/backdrop-invert
			*/
			"backdrop-invert": [{ "backdrop-invert": [invert] }],
			/**
			* Backdrop Opacity
			* @see https://tailwindcss.com/docs/backdrop-opacity
			*/
			"backdrop-opacity": [{ "backdrop-opacity": [opacity] }],
			/**
			* Backdrop Saturate
			* @see https://tailwindcss.com/docs/backdrop-saturate
			*/
			"backdrop-saturate": [{ "backdrop-saturate": [saturate] }],
			/**
			* Backdrop Sepia
			* @see https://tailwindcss.com/docs/backdrop-sepia
			*/
			"backdrop-sepia": [{ "backdrop-sepia": [sepia] }],
			/**
			* Border Collapse
			* @see https://tailwindcss.com/docs/border-collapse
			*/
			"border-collapse": [{ border: ["collapse", "separate"] }],
			/**
			* Border Spacing
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing": [{ "border-spacing": [borderSpacing] }],
			/**
			* Border Spacing X
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-x": [{ "border-spacing-x": [borderSpacing] }],
			/**
			* Border Spacing Y
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-y": [{ "border-spacing-y": [borderSpacing] }],
			/**
			* Table Layout
			* @see https://tailwindcss.com/docs/table-layout
			*/
			"table-layout": [{ table: ["auto", "fixed"] }],
			/**
			* Tranisition Property
			* @see https://tailwindcss.com/docs/transition-property
			*/
			transition: [{ transition: [
				"none",
				"all",
				"",
				"colors",
				"opacity",
				"shadow",
				"transform",
				isArbitraryValue
			] }],
			/**
			* Transition Duration
			* @see https://tailwindcss.com/docs/transition-duration
			*/
			duration: [{ duration: [isInteger] }],
			/**
			* Transition Timing Function
			* @see https://tailwindcss.com/docs/transition-timing-function
			*/
			ease: [{ ease: [
				"linear",
				"in",
				"out",
				"in-out",
				isArbitraryValue
			] }],
			/**
			* Transition Delay
			* @see https://tailwindcss.com/docs/transition-delay
			*/
			delay: [{ delay: [isInteger] }],
			/**
			* Animation
			* @see https://tailwindcss.com/docs/animation
			*/
			animate: [{ animate: [
				"none",
				"spin",
				"ping",
				"pulse",
				"bounce",
				isArbitraryValue
			] }],
			/**
			* Transform
			* @see https://tailwindcss.com/docs/transform
			*/
			transform: [{ transform: [
				"",
				"gpu",
				"none"
			] }],
			/**
			* Scale
			* @see https://tailwindcss.com/docs/scale
			*/
			scale: [{ scale: [scale] }],
			/**
			* Scale X
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-x": [{ "scale-x": [scale] }],
			/**
			* Scale Y
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-y": [{ "scale-y": [scale] }],
			/**
			* Rotate
			* @see https://tailwindcss.com/docs/rotate
			*/
			rotate: [{ rotate: [isInteger, isArbitraryValue] }],
			/**
			* Translate X
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-x": [{ "translate-x": [translate] }],
			/**
			* Translate Y
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-y": [{ "translate-y": [translate] }],
			/**
			* Skew X
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-x": [{ "skew-x": [skew] }],
			/**
			* Skew Y
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-y": [{ "skew-y": [skew] }],
			/**
			* Transform Origin
			* @see https://tailwindcss.com/docs/transform-origin
			*/
			"transform-origin": [{ origin: [
				"center",
				"top",
				"top-right",
				"right",
				"bottom-right",
				"bottom",
				"bottom-left",
				"left",
				"top-left",
				isArbitraryValue
			] }],
			/**
			* Accent Color
			* @see https://tailwindcss.com/docs/accent-color
			*/
			accent: [{ accent: ["auto", colors] }],
			/**
			* Appearance
			* @see https://tailwindcss.com/docs/appearance
			*/
			appearance: ["appearance-none"],
			/**
			* Cursor
			* @see https://tailwindcss.com/docs/cursor
			*/
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				isArbitraryValue
			] }],
			/**
			* Caret Color
			* @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
			*/
			"caret-color": [{ caret: [colors] }],
			/**
			* Pointer Events
			* @see https://tailwindcss.com/docs/pointer-events
			*/
			"pointer-events": [{ "pointer-events": ["none", "auto"] }],
			/**
			* Resize
			* @see https://tailwindcss.com/docs/resize
			*/
			resize: [{ resize: [
				"none",
				"y",
				"x",
				""
			] }],
			/**
			* Scroll Behavior
			* @see https://tailwindcss.com/docs/scroll-behavior
			*/
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			/**
			* Scroll Margin
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-m": [{ "scroll-m": [spacing] }],
			/**
			* Scroll Margin X
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mx": [{ "scroll-mx": [spacing] }],
			/**
			* Scroll Margin Y
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-my": [{ "scroll-my": [spacing] }],
			/**
			* Scroll Margin Top
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mt": [{ "scroll-mt": [spacing] }],
			/**
			* Scroll Margin Right
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mr": [{ "scroll-mr": [spacing] }],
			/**
			* Scroll Margin Bottom
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mb": [{ "scroll-mb": [spacing] }],
			/**
			* Scroll Margin Left
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ml": [{ "scroll-ml": [spacing] }],
			/**
			* Scroll Padding
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-p": [{ "scroll-p": [spacing] }],
			/**
			* Scroll Padding X
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-px": [{ "scroll-px": [spacing] }],
			/**
			* Scroll Padding Y
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-py": [{ "scroll-py": [spacing] }],
			/**
			* Scroll Padding Top
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pt": [{ "scroll-pt": [spacing] }],
			/**
			* Scroll Padding Right
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pr": [{ "scroll-pr": [spacing] }],
			/**
			* Scroll Padding Bottom
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pb": [{ "scroll-pb": [spacing] }],
			/**
			* Scroll Padding Left
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pl": [{ "scroll-pl": [spacing] }],
			/**
			* Scroll Snap Align
			* @see https://tailwindcss.com/docs/scroll-snap-align
			*/
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			/**
			* Scroll Snap Stop
			* @see https://tailwindcss.com/docs/scroll-snap-stop
			*/
			"snap-stop": [{ snap: ["normal", "always"] }],
			/**
			* Scroll Snap Type
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			/**
			* Scroll Snap Type Strictness
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			/**
			* Touch Action
			* @see https://tailwindcss.com/docs/touch-action
			*/
			touch: [{ touch: [
				"auto",
				"none",
				"pinch-zoom",
				"manipulation",
				{ pan: [
					"x",
					"left",
					"right",
					"y",
					"up",
					"down"
				] }
			] }],
			/**
			* User Select
			* @see https://tailwindcss.com/docs/user-select
			*/
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			/**
			* Will Change
			* @see https://tailwindcss.com/docs/will-change
			*/
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				isArbitraryValue
			] }],
			/**
			* Fill
			* @see https://tailwindcss.com/docs/fill
			*/
			fill: [{ fill: [colors, "none"] }],
			/**
			* Stroke Width
			* @see https://tailwindcss.com/docs/stroke-width
			*/
			"stroke-w": [{ stroke: [isLength, isArbitraryNumber] }],
			/**
			* Stroke
			* @see https://tailwindcss.com/docs/stroke
			*/
			stroke: [{ stroke: [colors, "none"] }],
			/**
			* Screen Readers
			* @see https://tailwindcss.com/docs/screen-readers
			*/
			sr: ["sr-only", "not-sr-only"]
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			rounded: [
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"]
		}
	};
}
//#endregion
//#region node_modules/tailwind-merge/dist/lib/tw-merge.mjs
var twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
//#endregion
//#region node_modules/deepmerge/dist/cjs.js
var require_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value) && !isSpecial(value);
	};
	function isNonNullObject(value) {
		return !!value && typeof value === "object";
	}
	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);
		return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
	}
	var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for ? Symbol.for("react.element") : 60103;
	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE;
	}
	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {};
	}
	function cloneUnlessOtherwiseSpecified(value, options) {
		return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
	}
	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map(function(element) {
			return cloneUnlessOtherwiseSpecified(element, options);
		});
	}
	function getMergeFunction(key, options) {
		if (!options.customMerge) return deepmerge;
		var customMerge = options.customMerge(key);
		return typeof customMerge === "function" ? customMerge : deepmerge;
	}
	function getEnumerableOwnPropertySymbols(target) {
		return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return Object.propertyIsEnumerable.call(target, symbol);
		}) : [];
	}
	function getKeys(target) {
		return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
	}
	function propertyIsOnObject(object, property) {
		try {
			return property in object;
		} catch (_) {
			return false;
		}
	}
	function propertyIsUnsafe(target, key) {
		return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
	}
	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
		getKeys(source).forEach(function(key) {
			if (propertyIsUnsafe(target, key)) return;
			if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
			else destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		});
		return destination;
	}
	function deepmerge(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;
		options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
		var sourceIsArray = Array.isArray(source);
		if (!(sourceIsArray === Array.isArray(target))) return cloneUnlessOtherwiseSpecified(source, options);
		else if (sourceIsArray) return options.arrayMerge(target, source, options);
		else return mergeObject(target, source, options);
	}
	deepmerge.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) throw new Error("first argument should be an array");
		return array.reduce(function(prev, next) {
			return deepmerge(prev, next, options);
		}, {});
	};
	module.exports = deepmerge;
}));
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-JVDTBYWX.js
var import_react = /* @__PURE__ */ __toESM$1(require_react(), 1);
require_cjs();
var MaterialTailwindThemeContext = import_react.createContext(theme);
MaterialTailwindThemeContext.displayName = "MaterialTailwind.ThemeProvider";
function useTheme() {
	const context = import_react.useContext(MaterialTailwindThemeContext);
	if (!context) return null;
	return context;
}
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-G4TWRQ5Y.js
var TooltipContext = import_react.createContext({
	open: false,
	setOpen: () => {}
});
function TooltipRoot({ open: controlledOpen, onOpenChange: setControlledOpen, placement, offset: offset$4, interactive, children }) {
	const arrowRef = import_react.useRef(null);
	const defaultProps = (useTheme()?.tooltip ?? tooltipTheme)?.defaultProps;
	const [uncontrolledOpen, setUncontrolledOpen] = import_react.useState(false);
	const open = controlledOpen ?? uncontrolledOpen;
	const setOpen = setControlledOpen ?? setUncontrolledOpen;
	placement ??= defaultProps?.placement ?? "top";
	offset$4 ??= defaultProps?.offset ?? 8;
	interactive ??= defaultProps?.interactive ?? false;
	const data = useFloating({
		placement,
		open,
		onOpenChange: setOpen,
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(offset$4),
			flip({
				crossAxis: placement.includes("-"),
				fallbackAxisSideDirection: "end",
				padding: 5
			}),
			shift({ padding: 5 }),
			arrow({
				element: arrowRef,
				padding: 5
			})
		]
	});
	const { context } = data;
	const hover = useHover(context, {
		move: true,
		enabled: controlledOpen == null,
		handleClose: interactive ? safePolygon() : null
	});
	const focus = useFocus(context, { enabled: controlledOpen == null });
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: "tooltip" });
	const interactions = useInteractions([
		hover,
		focus,
		dismiss,
		role
	]);
	const contextValue = import_react.useMemo(() => ({
		open,
		setOpen,
		arrowRef,
		...interactions,
		...data
	}), [
		open,
		setOpen,
		arrowRef,
		interactions,
		data
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContext.Provider, {
		value: contextValue,
		children
	});
}
TooltipRoot.displayName = "MaterialTailwind.Tooltip";
function TooltipTriggerRoot({ as, className, children, ...props }, ref) {
	const Component = as || "button";
	const theme = useTheme()?.tooltipTrigger ?? tooltipTriggerTheme;
	const { refs, getReferenceProps, open } = import_react.useContext(TooltipContext);
	const styles = twMerge(theme.baseStyle, className);
	const elementRef = useMergeRefs([refs?.setReference, ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref: elementRef,
		"data-open": open,
		className: styles,
		...getReferenceProps && getReferenceProps(),
		children
	});
}
TooltipTriggerRoot.displayName = "MaterialTailwind.TooltipTrigger";
var TooltipTrigger = import_react.forwardRef(TooltipTriggerRoot);
function TooltipContentRoot({ as, className, children, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme()?.tooltipContent ?? tooltipContentTheme;
	const { refs, getFloatingProps, open, floatingStyles } = import_react.useContext(TooltipContext);
	const styles = twMerge(theme.baseStyle, className);
	const elementRef = useMergeRefs([refs?.setFloating, ref]);
	return open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref: elementRef,
		"data-open": open,
		style: {
			...floatingStyles,
			...props?.style
		},
		className: styles,
		...getFloatingProps && getFloatingProps(),
		children
	}) }) : null;
}
TooltipContentRoot.displayName = "MaterialTailwind.TooltipContent";
var TooltipContent = import_react.forwardRef(TooltipContentRoot);
function TooltipArrowRoot({ as, className, ...props }, ref) {
	const Component = as || "span";
	const theme = useTheme()?.tooltipArrow ?? tooltipArrowTheme;
	const innerRef = import_react.useRef(null);
	const { placement, arrowRef, middlewareData } = import_react.useContext(TooltipContext);
	const elementRef = useMergeRefs([
		arrowRef,
		innerRef,
		ref
	]);
	const staticSide = {
		top: "bottom",
		right: "left",
		bottom: "top",
		left: "right"
	}[placement ? placement.split("-")[0] : ""];
	const styles = twMerge(theme.baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref: elementRef,
		style: {
			position: "absolute",
			left: middlewareData?.arrow?.x,
			top: middlewareData?.arrow?.y,
			[staticSide]: `${-innerRef?.current?.clientHeight / 2 - 1}px`,
			...props?.style
		},
		"data-placement": placement,
		className: styles
	});
}
TooltipArrowRoot.displayName = "MaterialTailwind.TooltipArrow";
var TooltipArrow = import_react.forwardRef(TooltipArrowRoot);
Object.assign(TooltipRoot, {
	Trigger: TooltipTrigger,
	Content: TooltipContent,
	Arrow: TooltipArrow
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-HOAN5TY4.js
var headings = [
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6"
];
function TypographyRoot({ as, color, type, className, children, ...props }, ref) {
	const Component = as ? as : type === "lead" ? "p" : type || "p";
	const theme = useTheme()?.typography ?? typographyTheme;
	const defaultProps = theme?.defaultProps;
	if (headings.includes(type) && color === "inherit") color = "default";
	else color ??= defaultProps?.color ?? "inherit";
	color ??= defaultProps?.color ?? "inherit";
	type ??= defaultProps?.type ?? "p";
	const styles = twMerge(theme.baseStyle, theme["type"][type], theme["color"][color], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
TypographyRoot.displayName = "MaterialTailwind.Typography";
var Typography = import_react.forwardRef(TypographyRoot);
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-OKU4DFWG.js
function RatingRoot({ as, color, ratedIcon, unratedIcon, count, value, onValueChange, className, readonly, ...props }, ref) {
	const Component = as ?? "div";
	const theme = useTheme()?.rating ?? ratingTheme;
	const defaultProps = theme?.defaultProps;
	ratedIcon ??= defaultProps?.ratedIcon ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className: "h-6 w-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fillRule: "evenodd",
			d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",
			clipRule: "evenodd"
		})
	});
	unratedIcon ??= defaultProps?.unratedIcon ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		strokeWidth: 1.5,
		stroke: "currentColor",
		className: "h-6 w-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
		})
	});
	color ??= defaultProps?.color ?? "primary";
	count ??= defaultProps?.count ?? 5;
	value ??= 0;
	readonly ??= defaultProps?.readonly ?? false;
	const [ratingValue, setRatingValue] = import_react.useState(() => [...Array(value).fill("rated"), ...Array(count - value).fill("un_rated")]);
	const [ratingOnHover, setRatingOnHover] = import_react.useState(() => [...Array(count).fill("un_rated")]);
	const [isHover, setIsHover] = import_react.useState(false);
	const baseStyles = twMerge(theme.baseStyle, theme.color[color], className);
	const iconStyle = twMerge(theme.icon);
	const renderRating = (data) => data.map((el, idx) => {
		const elementToRender = el === "rated" ? ratedIcon : unratedIcon;
		return import_react.isValidElement(elementToRender) ? import_react.cloneElement(elementToRender, {
			...elementToRender?.props,
			key: idx,
			onClick: (event) => {
				if (readonly) return;
				const nextRating = ratingValue.map((_, i) => i <= idx ? "rated" : "un_rated");
				setRatingValue(nextRating);
				onValueChange && typeof onValueChange === "function" && onValueChange(nextRating.filter((el2) => el2 === "rated").length);
				elementToRender?.props?.onClick && elementToRender?.props?.onClick(event);
			},
			onMouseEnter: (event) => {
				if (readonly) return;
				const nextRating = ratingOnHover.map((_, i) => i <= idx ? "rated" : "un_rated");
				setIsHover(true);
				setRatingOnHover(nextRating);
				elementToRender?.props?.onMouseEnter && elementToRender?.props?.onMouseEnter(event);
			},
			onMouseLeave: (event) => {
				if (!readonly) setIsHover(false);
				elementToRender?.props?.onMouseLeave && elementToRender?.props?.onMouseLeave(event);
			},
			"data-slot": "icon",
			className: twMerge(iconStyle, elementToRender?.props?.className)
		}) : import_react.createElement(elementToRender, {
			key: idx,
			onClick: () => {
				if (readonly) return;
				const nextRating = ratingValue.map((_, i) => i <= idx ? "rated" : "un_rated");
				setRatingValue(nextRating);
				onValueChange && typeof onValueChange === "function" && onValueChange(nextRating.filter((el2) => el2 === "rated").length);
			},
			onMouseEnter: () => {
				if (readonly) return;
				const nextRating = ratingOnHover.map((_, i) => i <= idx ? "rated" : "un_rated");
				setIsHover(true);
				setRatingOnHover(nextRating);
			},
			onMouseLeave: () => {
				if (!readonly) setIsHover(false);
			},
			className: iconStyle
		});
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: baseStyles,
		children: isHover ? renderRating(ratingOnHover) : renderRating(ratingValue)
	});
}
RatingRoot.displayName = "MaterialTailwind.Rating";
import_react.forwardRef(RatingRoot);
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-NIMJP7RL.js
var import_material_ripple_effects = /* @__PURE__ */ __toESM$1((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = class Ripple {
		constructor() {
			this.x = 0;
			this.y = 0;
			this.z = 0;
		}
		findFurthestPoint(clickPointX, elementWidth, offsetX, clickPointY, elementHeight, offsetY) {
			this.x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
			this.y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
			this.z = Math.hypot(this.x - (clickPointX - offsetX), this.y - (clickPointY - offsetY));
			return this.z;
		}
		appyStyles(element, color, rect, radius, event) {
			element.classList.add("ripple");
			element.style.backgroundColor = color === "dark" ? "rgba(0,0,0, 0.2)" : "rgba(255,255,255, 0.3)";
			element.style.borderRadius = "50%";
			element.style.pointerEvents = "none";
			element.style.position = "absolute";
			element.style.left = event.clientX - rect.left - radius + "px";
			element.style.top = event.clientY - rect.top - radius + "px";
			element.style.width = element.style.height = radius * 2 + "px";
		}
		applyAnimation(element) {
			element.animate([{
				transform: "scale(0)",
				opacity: 1
			}, {
				transform: "scale(1.5)",
				opacity: 0
			}], {
				duration: 500,
				easing: "linear"
			});
		}
		create(event, color) {
			const element = event.currentTarget;
			element.style.position = "relative";
			element.style.overflow = "hidden";
			const rect = element.getBoundingClientRect();
			const radius = this.findFurthestPoint(event.clientX, element.offsetWidth, rect.left, event.clientY, element.offsetHeight, rect.top);
			const circle = document.createElement("span");
			this.appyStyles(circle, color, rect, radius, event);
			this.applyAnimation(circle);
			element.appendChild(circle);
			setTimeout(() => circle.remove(), 500);
		}
	};
})))(), 1);
var SelectContext = import_react.createContext({
	size: "md",
	color: "primary",
	isError: false,
	isSuccess: false,
	disabled: false,
	placement: "bottom",
	offset: 5
});
function SelectRootBase({ size: size$1, color, isPill, isError, isSuccess, disabled, placement, offset: offset$3, value, name, onValueChange, children }, ref) {
	const defaultProps = (useTheme()?.select ?? selectTheme)?.defaultProps;
	const [isOpen, setIsOpen] = import_react.useState(false);
	const [selected, setSelected] = import_react.useState(() => ({
		value,
		element: null
	}));
	const [activeIndex, setActiveIndex] = import_react.useState(null);
	const [selectedIndex, setSelectedIndex] = import_react.useState(null);
	size$1 ??= defaultProps?.size ?? "md";
	color ??= defaultProps?.color ?? "primary";
	isPill ??= defaultProps?.isPill ?? false;
	isError ??= defaultProps?.isError ?? false;
	isSuccess ??= defaultProps?.isSuccess ?? false;
	placement ??= defaultProps?.placement ?? "bottom";
	offset$3 ??= defaultProps?.offset ?? 5;
	const { refs, floatingStyles, context } = useFloating({
		placement,
		open: isOpen,
		onOpenChange: setIsOpen,
		whileElementsMounted: autoUpdate,
		middleware: [
			flip(),
			offset(offset$3),
			size({
				apply({ rects, elements, availableHeight }) {
					Object.assign(elements.floating.style, {
						maxHeight: `${availableHeight}px`,
						minWidth: `${rects.reference.width}px`,
						zIndex: 9999
					});
				},
				padding: 10
			})
		]
	});
	const labelsRef = import_react.useRef([]);
	const elementsRef = import_react.useRef([]);
	const handleSelect = import_react.useCallback((index) => {
		setSelectedIndex(index);
		setIsOpen(false);
		if (index !== null) {
			setSelected(labelsRef.current[index]);
			onValueChange?.(labelsRef.current[index]?.value);
		}
	}, []);
	function handleTypeaheadMatch(index) {
		if (isOpen) setActiveIndex(index);
		else handleSelect(index);
	}
	const listNav = useListNavigation(context, {
		listRef: elementsRef,
		activeIndex,
		selectedIndex,
		onNavigate: setActiveIndex
	});
	const labelsRefTypehead = import_react.useRef(labelsRef.current.map((item) => item?.value));
	const typeahead = useTypeahead(context, {
		listRef: labelsRefTypehead,
		activeIndex,
		selectedIndex,
		onMatch: handleTypeaheadMatch
	});
	const click = useClick(context);
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: "listbox" });
	const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
		listNav,
		typeahead,
		click,
		dismiss,
		role
	]);
	const contextValue = import_react.useMemo(() => ({
		color,
		size: size$1,
		isPill,
		isError,
		isSuccess,
		disabled,
		selected,
		activeIndex,
		selectedIndex,
		context,
		refs,
		floatingStyles,
		elementsRef,
		labelsRef,
		setSelected,
		getItemProps,
		handleSelect,
		getReferenceProps,
		getFloatingProps,
		isOpen,
		controlledValue: value
	}), [
		color,
		size$1,
		isPill,
		isError,
		isSuccess,
		disabled,
		selected,
		activeIndex,
		selectedIndex,
		context,
		refs,
		floatingStyles,
		elementsRef,
		labelsRef,
		getItemProps,
		handleSelect,
		getReferenceProps,
		getFloatingProps,
		isOpen,
		value
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContext.Provider, {
		value: contextValue,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			readOnly: true,
			ref,
			name,
			style: { display: "none" },
			value: value || selected?.value || ""
		})]
	});
}
SelectRootBase.displayName = "MaterialTailwind.Select";
var SelectRoot = import_react.forwardRef(SelectRootBase);
function SelectTriggerRoot({ as, indicator, placeholder, className, children, ...props }, ref) {
	const Component = as || "button";
	const theme = useTheme()?.selectTrigger ?? selectTriggerTheme;
	const defaultProps = theme?.defaultProps;
	const { refs, getReferenceProps, selected, isPill, color, size, isOpen, isError, isSuccess, disabled } = import_react.useContext(SelectContext);
	const value = selected?.value;
	const element = selected?.element;
	const elementRef = useMergeRefs([refs?.setReference, ref]);
	indicator ??= defaultProps?.indicator ?? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		color: "currentColor",
		className: "h-[1em] w-[1em] translate-x-0.5 stroke-[1.5]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M17 8L12 3L7 8",
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M17 16L12 21L7 16",
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
	const styles = twMerge(theme.baseStyle, theme.size[size], theme.color[color], isPill && theme.isPill, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Component, {
		...props,
		ref: elementRef,
		tabIndex: 0,
		type: "button",
		className: styles,
		"data-open": isOpen,
		disabled,
		"data-error": isError,
		"data-success": isSuccess,
		...getReferenceProps && getReferenceProps(),
		children: [children ? children({
			value,
			element
		}) : element ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-slot": "placeholder",
			className: theme.placeholder,
			children: placeholder
		}), indicator]
	});
}
SelectTriggerRoot.displayName = "MaterialTailwind.SelectTrigger";
var SelectTrigger = import_react.forwardRef(SelectTriggerRoot);
function SelectListRoot({ as, className, children, disabled, initialFocus, returnFocus, guards, modal, visuallyHiddenDismiss, closeOnFocusOut, order, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme()?.selectList ?? selectListTheme;
	const defaultProps = theme?.defaultProps;
	const { context, refs, getFloatingProps, floatingStyles, elementsRef, labelsRef, isOpen, selected, setSelected, controlledValue } = import_react.useContext(SelectContext);
	disabled ??= defaultProps?.disabled ?? false;
	initialFocus ??= defaultProps?.initialFocus ?? 0;
	returnFocus ??= defaultProps?.returnFocus ?? true;
	guards ??= defaultProps?.guards ?? true;
	modal ??= defaultProps?.modal ?? true;
	visuallyHiddenDismiss ??= defaultProps?.visuallyHiddenDismiss ?? true;
	closeOnFocusOut ??= defaultProps?.closeOnFocusOut ?? true;
	order ??= defaultProps?.order ?? ["content"];
	const styles = twMerge(theme.baseStyle, className);
	const elementRef = useMergeRefs([refs?.setFloating, ref]);
	import_react.useEffect(() => {
		if (controlledValue) {
			const label = children?.find((el) => selected?.value === el.props.value);
			if (label) setSelected?.({
				value: label?.props?.value || "",
				element: label?.props?.children || ""
			});
		}
	}, []);
	return isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingFocusManager, {
		order,
		modal,
		guards,
		disabled,
		returnFocus,
		initialFocus,
		closeOnFocusOut,
		visuallyHiddenDismiss,
		context,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
			...props,
			ref: elementRef,
			"data-open": isOpen,
			style: {
				...floatingStyles,
				...props?.style
			},
			className: styles,
			...getFloatingProps && getFloatingProps(),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingList, {
				elementsRef,
				labelsRef,
				children
			})
		})
	}) : null;
}
SelectListRoot.displayName = "MaterialTailwind.SelectList";
var SelectList = import_react.forwardRef(SelectListRoot);
function SelectOptionRoot({ as, className, value, ripple, indicator, children, ...props }, ref) {
	const Component = as || "button";
	const theme = useTheme()?.selectOption ?? selectOptionTheme;
	const defaultProps = theme?.defaultProps;
	const { getItemProps, handleSelect, activeIndex, selectedIndex, selected } = import_react.useContext(SelectContext);
	ripple ??= defaultProps?.ripple ?? true;
	indicator ??= defaultProps?.indicator ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		strokeWidth: 1.5,
		stroke: "currentColor",
		className: "h-4 w-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M4.5 12.75l6 6 9-13.5"
		})
	});
	const { ref: itemRef, index } = useListItem({ label: {
		value,
		element: children
	} });
	const rippleEffect = ripple !== void 0 && new import_material_ripple_effects.default();
	const handleClick = (e) => {
		const onClick = props?.onClick;
		if (ripple) rippleEffect.create(e, "dark");
		handleSelect && handleSelect(index);
		onClick?.(e);
	};
	const curValue = selected?.value || "";
	const isActive = activeIndex === index;
	const isSelected = selectedIndex === index || curValue === value;
	const styles = twMerge(theme.baseStyle, className);
	const elementRef = useMergeRefs([itemRef, ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Component, {
		...props,
		ref: elementRef,
		role: "option",
		"data-selected": isActive && isSelected,
		"aria-selected": isActive && isSelected,
		tabIndex: isActive ? 0 : -1,
		className: styles,
		...getItemProps && getItemProps({ onClick: handleClick }),
		children: [children, isSelected && indicator]
	});
}
SelectOptionRoot.displayName = "MaterialTailwind.SelectOption";
var SelectOption = import_react.forwardRef(SelectOptionRoot);
Object.assign(SelectRoot, {
	Trigger: SelectTrigger,
	List: SelectList,
	Option: SelectOption
});
//#endregion
//#region node_modules/@tanstack/ranger/build/esm/index.js
/**
* ranger
*
* Copyright (c) TanStack
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
var getBoundingClientRect = (element) => {
	const rect = element.getBoundingClientRect();
	return {
		left: Math.ceil(rect.left),
		width: Math.ceil(rect.width)
	};
};
var sortNumList = (arr) => [...arr].map(Number).sort((a, b) => a - b);
var linearInterpolator = {
	getPercentageForValue: (val, min, max) => {
		return Math.max(0, Math.min(100, (val - min) / (max - min) * 100));
	},
	getValueForClientX: (clientX, trackDims, min, max) => {
		const { left, width } = trackDims;
		const percentageValue = (clientX - left) / width;
		return (max - min) * percentageValue + min;
	}
};
var Ranger = class {
	sortedValues = [];
	rangerElement = null;
	constructor(opts) {
		this.setOptions(opts);
	}
	setOptions(opts) {
		Object.entries(opts).forEach(([key, value]) => {
			if (typeof value === "undefined") delete opts[key];
		});
		this.options = {
			debug: false,
			tickSize: 10,
			interpolator: linearInterpolator,
			onChange: () => {},
			...opts
		};
	}
	_willUpdate = () => {
		const rangerElement = this.options.getRangerElement();
		if (this.rangerElement !== rangerElement) this.rangerElement = rangerElement;
	};
	getValueForClientX = (clientX) => {
		const trackDims = getBoundingClientRect(this.rangerElement);
		return this.options.interpolator.getValueForClientX(clientX, trackDims, this.options.min, this.options.max);
	};
	getNextStep = (val, direction) => {
		const { min, max } = this.options;
		if ("steps" in this.options) {
			const { steps } = this.options;
			let nextIndex = steps.indexOf(val) + direction;
			if (nextIndex >= 0 && nextIndex < steps.length) return steps[nextIndex];
			else return val;
		} else {
			let nextVal = val + this.options.stepSize * direction;
			if (nextVal >= min && nextVal <= max) return nextVal;
			else return val;
		}
	};
	roundToStep = (val) => {
		const { min, max } = this.options;
		let left = min;
		let right = max;
		if ("steps" in this.options) this.options.steps.forEach((step) => {
			if (step <= val && step > left) left = step;
			if (step >= val && step < right) right = step;
		});
		else {
			const { stepSize } = this.options;
			while (left < val && left + stepSize < val) left += stepSize;
			right = Math.min(left + stepSize, max);
		}
		if (val - left < right - val) return left;
		return right;
	};
	handleDrag = (e) => {
		if (this.activeHandleIndex === void 0) return;
		const clientX = e.type === "touchmove" ? e.changedTouches[0].clientX : e.clientX;
		const newValue = this.getValueForClientX(clientX);
		const newRoundedValue = this.roundToStep(newValue);
		this.sortedValues = [
			...this.options.values.slice(0, this.activeHandleIndex),
			newRoundedValue,
			...this.options.values.slice(this.activeHandleIndex + 1)
		];
		if (this.options.onDrag) this.options.onDrag(this);
		else {
			this.tempValues = this.sortedValues;
			this.options.rerender();
		}
	};
	handleKeyDown = (e, i) => {
		const { values } = this.options;
		if (e.keyCode === 37 || e.keyCode === 39) {
			this.activeHandleIndex = i;
			const direction = e.keyCode === 37 ? -1 : 1;
			const newValue = this.getNextStep(values[i], direction);
			const newValues = [
				...values.slice(0, i),
				newValue,
				...values.slice(i + 1)
			];
			this.sortedValues = sortNumList(newValues);
			if (this.options.onChange) this.options.onChange(this);
		}
	};
	handlePress = (_e, i) => {
		this.activeHandleIndex = i;
		this.options.rerender();
		const handleRelease = () => {
			const { tempValues, handleDrag } = this;
			document.removeEventListener("mousemove", handleDrag);
			document.removeEventListener("touchmove", handleDrag);
			document.removeEventListener("mouseup", handleRelease);
			document.removeEventListener("touchend", handleRelease);
			this.sortedValues = sortNumList(tempValues || this.options.values);
			if (this.options.onChange) this.options.onChange(this);
			if (this.options.onDrag) this.options.onDrag(this);
			this.activeHandleIndex = void 0;
			this.tempValues = void 0;
			this.options.rerender();
		};
		const { handleDrag } = this;
		document.addEventListener("mousemove", handleDrag);
		document.addEventListener("touchmove", handleDrag);
		document.addEventListener("mouseup", handleRelease);
		document.addEventListener("touchend", handleRelease);
	};
	getPercentageForValue = (val) => this.options.interpolator.getPercentageForValue(val, this.options.min, this.options.max);
	getTicks = () => {
		let ticks = [];
		if (this.options.ticks) ticks = [...this.options.ticks];
		else if ("steps" in this.options) ticks = [...this.options.steps];
		else {
			ticks = [this.options.min];
			while (ticks[ticks.length - 1] < this.options.max - this.options.tickSize) ticks.push(ticks[ticks.length - 1] + this.options.tickSize);
			ticks.push(this.options.max);
		}
		return ticks.map((value, i) => ({
			value,
			key: i,
			percentage: this.getPercentageForValue(value)
		}));
	};
	getSteps = () => {
		const values = sortNumList(this.tempValues || this.options.values);
		return [...values, this.options.max].map((value, i) => {
			const previousValue = values[i - 1];
			const leftValue = previousValue !== void 0 ? previousValue : this.options.min;
			const left = this.getPercentageForValue(leftValue);
			return {
				left,
				width: this.getPercentageForValue(value) - left
			};
		});
	};
	handles = () => {
		return (this.tempValues || this.options.values).map((value, i) => ({
			value,
			isActive: i === this.activeHandleIndex,
			onKeyDownHandler: (e) => {
				this.handleKeyDown(e, i);
			},
			onMouseDownHandler: (e) => {
				this.handlePress(e, i);
			},
			onTouchStart: (e) => {
				this.handlePress(e, i);
			}
		}));
	};
};
//#endregion
//#region node_modules/@material-tailwind/react/node_modules/@tanstack/react-ranger/build/esm/index.js
/**
* react-ranger
*
* Copyright (c) TanStack
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
function useRanger(options) {
	const rerender = import_react.useReducer(() => ({}), {})[1];
	const resolvedOptions = {
		...options,
		rerender,
		onChange: (instance) => {
			rerender();
			options.onChange?.(instance);
		}
	};
	const [instance] = import_react.useState(() => new Ranger(resolvedOptions));
	instance.setOptions(resolvedOptions);
	useIsomorphicLayoutEffect(() => {
		return instance._willUpdate();
	});
	return instance;
}
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-BAHTMLHP.js
var SliderContext = import_react.createContext({
	min: 0,
	max: 100,
	step: 1
});
function SliderRootBase({ as, color, size, disabled, min, max, step, value: controlledValue, onValueChange: setControlledValue, className, children, ...props }, ref) {
	const Component = as || "div";
	const sliderRef = import_react.useRef(null);
	const theme = useTheme()?.slider ?? sliderTheme;
	const defaultProps = theme?.defaultProps;
	size ??= defaultProps?.size ?? "md";
	color ??= defaultProps?.color ?? "primary";
	const [uncontrolledValue, setUncontrolledValue] = import_react.useState([0]);
	const value = controlledValue?.slice(0, 2) ?? uncontrolledValue;
	const onValueChange = setControlledValue ?? setUncontrolledValue;
	const contextValue = import_react.useMemo(() => ({
		size,
		color,
		value,
		onValueChange,
		min: min ?? 0,
		max: max ?? 100,
		step: step ?? 1,
		sliderRef
	}), [
		value,
		onValueChange,
		min,
		max,
		step,
		size,
		color
	]);
	const styles = twMerge(theme.baseStyle, theme["size"][size], className);
	const elementRef = useMergeRefs([sliderRef, ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
			ref: elementRef,
			...props,
			className: styles,
			children
		})
	});
}
SliderRootBase.displayName = "MaterialTailwind.Slider";
var SliderRoot = import_react.forwardRef(SliderRootBase);
function SliderRangeRoot({ as, className, children, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme()?.sliderRange ?? sliderRangeTheme;
	const { sliderRef, value, onValueChange, min, max, step, color } = import_react.useContext(SliderContext);
	return useRanger({
		getRangerElement: () => sliderRef.current,
		values: value,
		min: min ?? 0,
		max: max ?? 100,
		stepSize: step ?? 1,
		onDrag: (instance) => onValueChange?.(instance.sortedValues),
		onChange: (instance) => onValueChange?.(instance.sortedValues)
	}).getSteps().map(({ left, width }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		ref,
		...props,
		className: twMerge(theme.baseStyle, value && value.length > 1 ? i === 0 ? "bg-transparent" : i === 1 ? theme["color"][color ?? "primary"] : "bg-transparent" : i === 0 ? theme["color"][color ?? "primary"] : "bg-transparent", className),
		style: {
			position: "absolute",
			left: `${left}%`,
			width: `${width}%`,
			...props?.style
		},
		children
	}));
}
SliderRangeRoot.displayName = "MaterialTailwind.SliderRange";
var SliderRange = import_react.forwardRef(SliderRangeRoot);
function SliderThumbRoot({ as, className, children, ...props }, ref) {
	const Component = as || "button";
	const theme = useTheme()?.sliderThumb ?? sliderThumbTheme;
	const { sliderRef, value, onValueChange, min, max, step, size, color } = import_react.useContext(SliderContext);
	const sliderInstance = useRanger({
		getRangerElement: () => sliderRef.current,
		values: value,
		min: min ?? 0,
		max: max ?? 100,
		stepSize: step ?? 1,
		onDrag: (instance) => onValueChange?.(instance.sortedValues),
		onChange: (instance) => onValueChange?.(instance.sortedValues)
	});
	const styles = twMerge(theme.baseStyle, theme["size"][size ?? "md"], theme["color"][color ?? "primary"], className);
	return sliderInstance.handles().map(({ value: value2, onKeyDownHandler, onMouseDownHandler, onTouchStart, isActive }, i) => {
		return /* @__PURE__ */ (0, import_react.createElement)(Component, {
			...props,
			ref,
			key: i,
			onKeyDown: (e) => {
				props?.onKeyDown?.(e);
				onKeyDownHandler(e);
			},
			onMouseDown: (e) => {
				props?.onMouseDown?.(e);
				onMouseDownHandler(e);
			},
			onTouchStart: (e) => {
				props?.onTouchStart?.(e);
				onTouchStart(e);
			},
			role: "slider",
			"aria-valuemin": sliderInstance.options.min,
			"aria-valuemax": sliderInstance.options.max,
			"aria-valuenow": value2,
			className: styles,
			style: {
				position: "absolute",
				top: "50%",
				left: `${sliderInstance.getPercentageForValue(value2)}%`,
				zIndex: isActive ? "1" : "0",
				transform: "translate(-50%, -50%)",
				...props?.style
			}
		});
	});
}
SliderThumbRoot.displayName = "MaterialTailwind.SliderThumb";
var SliderThumb = import_react.forwardRef(SliderThumbRoot);
function SliderTickRoot({ as, className, children, ...props }, ref) {
	const Component = as || "span";
	const theme = useTheme()?.sliderTick ?? sliderTickTheme;
	const { sliderRef, value, onValueChange, min, max, step, size, color } = import_react.useContext(SliderContext);
	const sliderInstance = useRanger({
		getRangerElement: () => sliderRef.current,
		values: value,
		min: min ?? 0,
		max: max ?? 100,
		stepSize: step ?? 1,
		onDrag: (instance) => onValueChange?.(instance.sortedValues),
		onChange: (instance) => onValueChange?.(instance.sortedValues)
	});
	const styles = twMerge(theme.baseStyle, theme["size"][size ?? "md"], theme["color"][color ?? "primary"], className);
	return sliderInstance.getTicks().map(({ value: value2, key, percentage }) => /* @__PURE__ */ (0, import_react.createElement)(Component, {
		...props,
		key,
		ref,
		className: styles,
		style: {
			left: `${percentage}%`,
			...props?.style
		}
	}, value2));
}
SliderTickRoot.displayName = "MaterialTailwind.SliderTick";
var SliderTick = import_react.forwardRef(SliderTickRoot);
Object.assign(SliderRoot, {
	Range: SliderRange,
	Thumb: SliderThumb,
	Tick: SliderTick
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-W7QACMSV.js
function SpinnerRoot({ size, color, className, ...props }, ref) {
	const theme = useTheme().spinner ?? spinnerTheme;
	const defaultProps = theme?.defaultProps;
	size ??= defaultProps?.size ?? "md";
	color ??= defaultProps?.color ?? "primary";
	const styles = twMerge(theme.baseStyle, theme.size[size], className);
	const spinnerColor = twMerge(theme.color[color]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...props,
		ref,
		fill: "none",
		className: styles,
		viewBox: "0 0 64 64",
		xmlns: "http://www.w3.org/2000/svg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			stroke: "currentColor",
			strokeWidth: "5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeWidth: "5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			className: spinnerColor,
			d: "M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762",
			stroke: "currentColor"
		})]
	});
}
SpinnerRoot.displayName = "MaterialTailwind.Spinner";
import_react.forwardRef(SpinnerRoot);
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-45N2MFVJ.js
function SwitchRoot({ color, className, ...props }, ref) {
	const innerID = import_react.useId();
	const theme = useTheme()?.switch ?? switchTheme;
	const defaultProps = theme?.defaultProps;
	color ??= defaultProps?.color ?? "primary";
	const styles = twMerge(theme.baseStyle, theme.trackStyle, theme.circleStyle, theme.color[color], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		ref,
		type: "checkbox",
		className: styles,
		id: props?.id || innerID
	});
}
SwitchRoot.displayName = "MaterialTailwind.Switch";
import_react.forwardRef(SwitchRoot);
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-CATVNKHO.js
var TabsContext = import_react.createContext({
	activeTab: "",
	orientation: "horizontal"
});
function TabsRootBase({ as, value, defaultValue, onValueChange, orientation, className, children, ...props }, ref) {
	const Component = as || "div";
	const contextTheme = useTheme();
	const theme = contextTheme.tabs || tabsTheme;
	const defaultProps = contextTheme.defaultProps;
	orientation ??= defaultProps?.orientation ?? "horizontal";
	const tabsValue = value || defaultValue;
	const [indicatorRect, setIndicatorRect] = import_react.useState({
		clientWidth: 0,
		clientHeight: 0,
		offsetLeft: 0,
		offsetTop: 0
	});
	const [uncontrolledActiveTab, setUncontrolledActiveTab] = import_react.useState(() => tabsValue);
	const activeTab = value || uncontrolledActiveTab;
	const setActiveTab = onValueChange || setUncontrolledActiveTab;
	import_react.useEffect(() => {
		setActiveTab(tabsValue);
	}, [tabsValue]);
	const contextValue = import_react.useMemo(() => ({
		orientation,
		activeTab,
		setActiveTab,
		indicatorRect,
		setIndicatorRect
	}), [
		orientation,
		activeTab,
		setActiveTab,
		indicatorRect,
		setIndicatorRect
	]);
	const styles = twMerge(theme.baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
			...props,
			ref,
			className: styles,
			"data-orientation": orientation,
			children
		})
	});
}
TabsRootBase.displayName = "MaterialTailwind.TabsRoot";
var TabsRoot = import_react.forwardRef(TabsRootBase);
function TabsListRoot({ as, className, children, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme().tabsList || tabsListTheme;
	const { orientation } = import_react.useContext(TabsContext);
	const styles = twMerge(theme.baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		role: "tablist",
		className: styles,
		"aria-orientation": orientation,
		"data-orientation": orientation,
		children
	});
}
TabsListRoot.displayName = "MaterialTailwind.TabsList";
var TabsList = import_react.forwardRef(TabsListRoot);
function TabsTriggerRoot({ as, value, className, children, ...props }, ref) {
	const Component = as || "button";
	const innerRef = import_react.useRef(null);
	const [elementRect, setElementRect] = import_react.useState(null);
	const theme = useTheme().tabsTrigger || tabsTriggerTheme;
	const { activeTab, setActiveTab, setIndicatorRect } = import_react.useContext(TabsContext);
	const isActive = activeTab === value;
	const styles = twMerge(theme.baseStyle, className);
	const elementRef = useMergeRefs([innerRef, ref]);
	import_react.useEffect(() => {
		const element = innerRef.current;
		if (element) setElementRect(element);
	}, []);
	const handleIndicatorRect = import_react.useCallback(() => {
		if (isActive && elementRect) setIndicatorRect?.({
			clientWidth: elementRect.clientWidth,
			clientHeight: elementRect.clientHeight,
			offsetLeft: elementRect.offsetLeft,
			offsetTop: elementRect.offsetTop
		});
	}, [isActive, elementRect]);
	import_react.useEffect(() => {
		handleIndicatorRect();
	}, [handleIndicatorRect]);
	import_react.useEffect(() => {
		window.addEventListener("resize", handleIndicatorRect);
		return () => {
			window.removeEventListener("resize", handleIndicatorRect);
		};
	}, [handleIndicatorRect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref: elementRef,
		role: "tab",
		className: styles,
		"data-active": isActive,
		"aria-selected": isActive,
		onClick: (event) => {
			props.onClick?.(event);
			setActiveTab?.(value);
		},
		children
	});
}
TabsTriggerRoot.displayName = "MaterialTailwind.TabsTrigger";
var TabsTrigger = import_react.forwardRef(TabsTriggerRoot);
function TabsPanelRoot({ as, value, className, children, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme().tabsPanel || tabsPanelTheme;
	const { activeTab, orientation } = import_react.useContext(TabsContext);
	const isActive = activeTab === value;
	const styles = twMerge(theme.baseStyle, className);
	return isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		role: "tabpanel",
		className: styles,
		"data-active": isActive,
		"data-orientation": orientation,
		children
	}) : null;
}
TabsPanelRoot.displayName = "MaterialTailwind.TabsPanel";
var TabsPanel = import_react.forwardRef(TabsPanelRoot);
function TabsTriggerIndicatorRoot({ as, className, ...props }, ref) {
	const Component = as || "span";
	const theme = useTheme().tabsTriggerIndicator || tabsTriggerIndicatorTheme;
	const { indicatorRect } = import_react.useContext(TabsContext);
	const styles = twMerge(theme.baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		style: {
			...props?.style,
			width: indicatorRect?.clientWidth,
			height: indicatorRect?.clientHeight,
			left: indicatorRect?.offsetLeft,
			top: indicatorRect?.offsetTop,
			position: "absolute",
			zIndex: 1
		},
		className: styles
	});
}
TabsTriggerIndicatorRoot.displayName = "MaterialTailwind.TabsTriggerIndicator";
var TabsTriggerIndicator = import_react.forwardRef(TabsTriggerIndicatorRoot);
Object.assign(TabsRoot, {
	List: TabsList,
	Trigger: TabsTrigger,
	Panel: TabsPanel,
	TriggerIndicator: TabsTriggerIndicator
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-N7VZAGKE.js
function TextareaRoot({ color, size, resize, isError, isSuccess, className, ...props }, ref) {
	const theme = useTheme()?.textarea ?? textareaTheme;
	const defaultProps = theme?.defaultProps;
	size ??= defaultProps?.size ?? "md";
	color ??= defaultProps?.color ?? "primary";
	resize ??= defaultProps?.resize ?? false;
	isError ??= defaultProps?.isError ?? false;
	isSuccess ??= defaultProps?.isSuccess ?? false;
	const styles = twMerge(theme.baseStyle, theme.color[color], theme.size[size], resize && theme["resize"], isError && theme["isError"], isSuccess && theme["isSuccess"], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		rows: 8,
		...props,
		ref,
		className: styles,
		"data-error": isError,
		"data-success": isSuccess
	});
}
TextareaRoot.displayName = "MaterialTailwind.Textarea";
import_react.forwardRef(TextareaRoot);
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-7N6QJBKP.js
var TimelineContext = import_react.createContext({
	value: "",
	setValue: () => {},
	color: "primary",
	mode: "timeline",
	orientation: "horizontal"
});
function TimelineRootBase({ as, value, defaultValue, onValueChange, color, mode, orientation, className, children, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme()?.timeline ?? timelineTheme;
	const defaultProps = theme?.defaultProps;
	const innerRef = import_react.useRef(null);
	const [innerValue, setInnerValue] = import_react.useState(defaultValue || "");
	value ??= innerValue;
	onValueChange ??= setInnerValue;
	mode ??= defaultProps?.mode ?? "timeline";
	color ??= defaultProps?.color ?? "primary";
	orientation ??= defaultProps?.orientation ?? "horizontal";
	import_react.useEffect(() => {
		const parentEl = innerRef?.current;
		if (parentEl && !value) {
			const firstChild = Array.from(parentEl.children)[0];
			onValueChange?.(firstChild.dataset.value);
		}
	}, []);
	import_react.useEffect(() => {
		if (mode === "stepper") {
			const parentEl = innerRef?.current;
			if (parentEl) {
				const children2 = Array.from(parentEl.children);
				const currentEl = children2.find((child) => child.dataset.value == value);
				const currentElIndex = children2.findIndex((child) => child.dataset.value == value);
				const activeElIndex = children2.findIndex((child) => child.dataset.active === "true");
				const completedSteps = children2.filter((_, index) => index < activeElIndex);
				const incompletedSteps = children2.filter((_, index) => index > activeElIndex);
				completedSteps.forEach((step) => {
					step.dataset.completed = "true";
				});
				incompletedSteps.forEach((step) => {
					step.dataset.completed = "false";
				});
				if (currentElIndex === activeElIndex && currentEl) currentEl.dataset.completed = "false";
			}
		}
	}, [value]);
	const contextValue = import_react.useMemo(() => ({
		value,
		setValue: onValueChange,
		orientation,
		color,
		mode,
		parentRef: innerRef
	}), [
		value,
		onValueChange,
		orientation,
		color,
		mode
	]);
	const styles = twMerge(theme.baseStyle, className);
	const mergedRef = useMergeRefs([ref, innerRef]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref: mergedRef,
		className: styles,
		"data-orientation": orientation,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineContext.Provider, {
			value: contextValue,
			children
		})
	});
}
TimelineRootBase.displayName = "MaterialTailwind.Timeline";
var TimelineRoot = import_react.forwardRef(TimelineRootBase);
function TimelineItemRoot({ as, value, className, disabled, children, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme()?.timelineItem ?? timelineItemTheme;
	const { mode, setValue, orientation, value: contextValue } = import_react.useContext(TimelineContext);
	const innerRef = import_react.useRef(null);
	value ??= import_react.useId();
	const isActive = contextValue == value || mode === "timeline";
	function onClick(event) {
		props?.onClick?.(event);
		if (mode === "stepper") setValue?.(value);
	}
	const styles = twMerge(theme.baseStyle, className);
	const mergedRef = useMergeRefs([ref, innerRef]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref: mergedRef,
		onClick,
		"data-value": value,
		"data-active": isActive,
		"data-completed": isActive,
		"data-orientation": orientation,
		"aria-disabled": disabled,
		className: styles,
		children
	});
}
TimelineItemRoot.displayName = "MaterialTailwind.TimelineItem";
var TimelineItem = import_react.forwardRef(TimelineItemRoot);
function TimelineHeaderRoot({ as, className, children, ...props }, ref) {
	const Component = as || "div";
	const styles = twMerge((useTheme()?.timelineHeader ?? timelineHeaderTheme).baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
TimelineHeaderRoot.displayName = "MaterialTailwind.TimelineHeader";
var TimelineHeader = import_react.forwardRef(TimelineHeaderRoot);
function TimelineIconRoot({ as, className, children, ...props }, ref) {
	const Component = as || "span";
	const theme = useTheme()?.timelineIcon ?? timelineIconTheme;
	const { color } = import_react.useContext(TimelineContext);
	const styles = twMerge(theme.baseStyle, theme.color[color], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
TimelineIconRoot.displayName = "MaterialTailwind.TimelineIcon";
var TimelineIcon = import_react.forwardRef(TimelineIconRoot);
function TimelineSeparatorRoot({ as, className, children, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme()?.timelineSeparator ?? timelineSeparatorTheme;
	const { orientation, color } = import_react.useContext(TimelineContext);
	const styles = twMerge(theme.baseStyle, theme.color[color], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		"data-orientation": orientation,
		className: styles,
		children
	});
}
TimelineSeparatorRoot.displayName = "MaterialTailwind.TimelineSeparator";
var TimelineSeparator = import_react.forwardRef(TimelineSeparatorRoot);
function TimelineBodyRoot({ as, className, children, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme()?.timelineBody ?? timelineBodyTheme;
	const { orientation } = import_react.useContext(TimelineContext);
	const styles = twMerge(theme.baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		"data-orientation": orientation,
		children
	});
}
TimelineBodyRoot.displayName = "MaterialTailwind.TimelineBody";
var TimelineBody = import_react.forwardRef(TimelineBodyRoot);
Object.assign(TimelineRoot, {
	Item: TimelineItem,
	Icon: TimelineIcon,
	Body: TimelineBody,
	Header: TimelineHeader,
	Separator: TimelineSeparator
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-7QFTCBAN.js
var InputContext = import_react.createContext({
	size: "md",
	color: "primary",
	isError: false,
	isSuccess: false,
	iconPlacement: "start",
	isIconDefined: false,
	isPill: false,
	disabled: false,
	setIconPlacement: () => null,
	setIsIconDefined: () => null
});
function InputRootBase({ as, color, size, isPill, isError, isSuccess, disabled, className, children, type = "text", ...props }, ref) {
	const Component = as ?? "div";
	const theme = useTheme()?.input ?? inputTheme;
	const defaultProps = theme?.defaultProps;
	const [isIconDefined, setIsIconDefined] = import_react.useState(false);
	const [iconPlacement, setIconPlacement] = import_react.useState("start");
	size ??= defaultProps?.size ?? "md";
	color ??= defaultProps?.color ?? "primary";
	isPill ??= defaultProps?.isPill ?? false;
	isError ??= defaultProps?.isError ?? false;
	isSuccess ??= defaultProps?.isSuccess ?? false;
	const styles = twMerge(theme.baseStyle, theme.size[size], theme.color[color], className, "peer");
	const contextValue = import_react.useMemo(() => ({
		size,
		color,
		isError,
		isSuccess,
		iconPlacement,
		isIconDefined,
		disabled,
		isPill,
		setIconPlacement,
		setIsIconDefined
	}), [
		size,
		color,
		isError,
		isSuccess,
		iconPlacement,
		isIconDefined,
		disabled,
		isPill,
		setIconPlacement,
		setIsIconDefined
	]);
	const inputType = [
		"text",
		"email",
		"password",
		"search",
		"number",
		"tel",
		"url",
		"hidden"
	].includes(type) ? type : "text";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		className: "relative w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputContext.Provider, {
			value: contextValue,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				...props,
				ref,
				type: inputType,
				className: styles,
				disabled,
				"data-error": isError,
				"data-success": isSuccess,
				"data-shape": isPill ? "pill" : "default",
				"data-icon-placement": isIconDefined ? iconPlacement : ""
			}), children]
		})
	});
}
InputRootBase.displayName = "MaterialTailwind.Input";
var InputRoot = import_react.forwardRef(InputRootBase);
function InputIconRoot({ as, placement, ...props }, ref) {
	const Component = as ?? "span";
	const contextTheme = useTheme();
	const { size, iconPlacement, setIconPlacement, setIsIconDefined, isError, isSuccess, disabled } = import_react.useContext(InputContext);
	const theme = contextTheme?.inputIcon ?? inputIconTheme;
	const defaultProps = theme?.defaultProps;
	placement ??= defaultProps?.placement ?? "start";
	import_react.useEffect(() => {
		setIsIconDefined(true);
		return () => {
			setIsIconDefined(false);
		};
	}, []);
	import_react.useEffect(() => {
		setIconPlacement(placement);
		return () => {
			setIconPlacement("start");
		};
	}, [placement]);
	const styles = twMerge(theme.baseStyle, theme.size[size], props?.className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		"data-error": isError,
		"data-success": isSuccess,
		"aria-disabled": disabled,
		"data-placement": iconPlacement
	});
}
InputIconRoot.displayName = "MaterialTailwind.InputIcon";
var InputIcon = import_react.forwardRef(InputIconRoot);
var Input = Object.assign(InputRoot, { Icon: InputIcon });
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-4ZWUS624.js
function ListRootBase({ as, className, children, ...props }, ref) {
	const Component = as ?? "ul";
	const styles = twMerge((useTheme()?.list ?? listTheme).baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
ListRootBase.displayName = "MaterialTailwind.List";
var ListRoot = import_react.forwardRef(ListRootBase);
function ListItemRoot({ as, className, disabled, selected, ripple, children, ...props }, ref) {
	const Component = as ?? "li";
	const theme = useTheme()?.listItem ?? listItemTheme;
	const defaultProps = theme?.defaultProps;
	ripple ??= defaultProps?.ripple ?? true;
	const rippleEffect = ripple !== void 0 && new import_material_ripple_effects.default();
	const handleClick = (e) => {
		const onClick = props?.onClick;
		if (ripple) rippleEffect.create(e, "dark");
		return typeof onClick === "function" && onClick(e);
	};
	const styles = twMerge(theme.baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		"data-selected": selected,
		"aria-disabled": disabled,
		onClick: handleClick,
		children
	});
}
ListItemRoot.displayName = "MaterialTailwind.ListItem";
var ListItem = import_react.forwardRef(ListItemRoot);
function ListItemStartRoot({ as, className, disabled, children, ...props }, ref) {
	const Component = as ?? "span";
	const styles = twMerge((useTheme()?.listItemStart ?? listItemStartTheme).baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
ListItemStartRoot.displayName = "MaterialTailwind.ListItemStart";
var ListItemStart = import_react.forwardRef(ListItemStartRoot);
function ListItemEndRoot({ as, className, disabled, children, ...props }, ref) {
	const Component = as ?? "span";
	const styles = twMerge((useTheme()?.listItemEnd ?? listItemEndTheme).baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
ListItemEndRoot.displayName = "MaterialTailwind.ListItemEnd";
var ListItemEnd = import_react.forwardRef(ListItemEndRoot);
var List = Object.assign(ListRoot, {
	Item: ListItem,
	ItemStart: ListItemStart,
	ItemEnd: ListItemEnd
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-KWVMMTQK.js
var MenuContext = import_react.createContext({
	open: false,
	setOpen: () => {}
});
function MenuCore({ open: controlledOpen, onOpenChange: setControlledOpen, placement, offset: offset$2, children }) {
	const defaultProps = (useTheme()?.menu ?? menuTheme)?.defaultProps;
	const [uncontrolledOpen, setUncontrolledOpen] = import_react.useState(false);
	const [activeIndex, setActiveIndex] = import_react.useState(null);
	const elementsRef = import_react.useRef([]);
	const labelsRef = import_react.useRef([]);
	const tree = useFloatingTree();
	const nodeId = useFloatingNodeId();
	const parentId = useFloatingParentNodeId();
	const item = useListItem();
	const isNested = parentId != null;
	const open = controlledOpen ?? uncontrolledOpen;
	const setOpen = setControlledOpen ?? setUncontrolledOpen;
	placement ??= isNested ? "right-start" : defaultProps?.placement ?? "bottom";
	offset$2 ??= isNested ? 8 : defaultProps?.offset ?? 5;
	const { floatingStyles, refs, context } = useFloating({
		nodeId,
		placement,
		open,
		onOpenChange: setOpen,
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(offset$2),
			flip(),
			shift({ padding: 5 })
		]
	});
	const hover = useHover(context, {
		enabled: isNested,
		delay: { open: 75 },
		handleClose: safePolygon({ blockPointerEvents: true })
	});
	const click = useClick(context, {
		event: "mousedown",
		toggle: !isNested,
		ignoreMouse: isNested
	});
	const role = useRole(context, { role: "menu" });
	const dismiss = useDismiss(context, { bubbles: true });
	const listNavigation = useListNavigation(context, {
		listRef: elementsRef,
		activeIndex,
		nested: isNested,
		onNavigate: setActiveIndex
	});
	const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
		hover,
		click,
		role,
		dismiss,
		listNavigation
	]);
	const contextValue = import_react.useMemo(() => ({
		open,
		setOpen,
		getReferenceProps,
		getFloatingProps,
		getItemProps,
		floatingStyles,
		refs,
		context,
		item,
		isNested,
		activeIndex,
		elementsRef,
		labelsRef
	}), [
		open,
		setOpen,
		getReferenceProps,
		getFloatingProps,
		getItemProps,
		floatingStyles,
		refs,
		context,
		item,
		isNested,
		activeIndex,
		elementsRef,
		labelsRef
	]);
	import_react.useEffect(() => {
		if (!tree) return;
		function handleTreeClick() {
			setOpen(false);
		}
		function onSubMenuOpen(event) {
			if (event.nodeId !== nodeId && event.parentId === parentId) setOpen(false);
		}
		tree.events.on("click", handleTreeClick);
		tree.events.on("menuopen", onSubMenuOpen);
		return () => {
			tree.events.off("click", handleTreeClick);
			tree.events.off("menuopen", onSubMenuOpen);
		};
	}, [
		tree,
		nodeId,
		parentId
	]);
	import_react.useEffect(() => {
		if (open && tree) tree.events.emit("menuopen", {
			parentId,
			nodeId
		});
	}, [
		tree,
		open,
		nodeId,
		parentId
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingNode, {
		id: nodeId,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuContext.Provider, {
			value: contextValue,
			children
		})
	});
}
function MenuRoot(props) {
	return useFloatingParentNodeId() === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingTree, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuCore, { ...props }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuCore, { ...props });
}
MenuRoot.displayName = "MaterialTailwind.Menu";
function MenuTriggerRoot({ as, className, children, ...props }, ref) {
	const Component = as || "button";
	const theme = useTheme()?.menuTrigger ?? menuTriggerTheme;
	const { refs, item, activeIndex, isNested, getReferenceProps, getItemProps, open } = import_react.useContext(MenuContext);
	const styles = twMerge(theme.baseStyle, className);
	const elementRef = useMergeRefs([
		refs?.setReference,
		item?.ref,
		ref
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref: elementRef,
		"data-open": open,
		"data-nested": isNested,
		tabIndex: !isNested ? void 0 : activeIndex === item?.index ? 0 : -1,
		role: isNested ? "menuitem" : void 0,
		className: styles,
		...getReferenceProps && getItemProps && getReferenceProps(getItemProps()),
		children
	});
}
MenuTriggerRoot.displayName = "MaterialTailwind.MenuTrigger";
var MenuTrigger = import_react.forwardRef(MenuTriggerRoot);
function MenuContentRoot({ as, className, children, disabled, initialFocus, returnFocus, guards, modal, visuallyHiddenDismiss, closeOnFocusOut, order, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme()?.menuContent ?? menuContentTheme;
	const defaultProps = theme.defaultProps;
	const { elementsRef, labelsRef, context, refs, getFloatingProps, open, floatingStyles, isNested } = import_react.useContext(MenuContext);
	disabled ??= defaultProps?.disabled ?? false;
	initialFocus ??= defaultProps?.initialFocus ?? 0;
	returnFocus ??= defaultProps?.returnFocus ?? true;
	guards ??= defaultProps?.guards ?? true;
	modal ??= defaultProps?.modal ?? false;
	visuallyHiddenDismiss ??= defaultProps?.visuallyHiddenDismiss ?? true;
	closeOnFocusOut ??= defaultProps?.closeOnFocusOut ?? true;
	order ??= defaultProps?.order ?? ["content"];
	const styles = twMerge(theme.baseStyle, className);
	const elementRef = useMergeRefs([refs?.setFloating, ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingList, {
		elementsRef,
		labelsRef,
		children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingFocusManager, {
			order,
			modal,
			guards,
			disabled,
			initialFocus: isNested ? -1 : initialFocus,
			returnFocus: isNested ? false : returnFocus,
			closeOnFocusOut,
			visuallyHiddenDismiss,
			context,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
				...props,
				ref: elementRef,
				"data-open": open,
				style: {
					...floatingStyles,
					...props?.style
				},
				className: styles,
				...getFloatingProps && getFloatingProps(),
				children
			})
		}) })
	});
}
MenuContentRoot.displayName = "MaterialTailwind.MenuContent";
var MenuContent = import_react.forwardRef(MenuContentRoot);
function MenuItemRoot({ as, className, ripple, disabled, closeOnClick, children, ...props }, ref) {
	const Component = as || "button";
	const theme = useTheme()?.menuItem ?? menuItemTheme;
	const defaultProps = theme.defaultProps;
	const { activeIndex, getItemProps } = import_react.useContext(MenuContext);
	ripple ??= defaultProps?.ripple ?? true;
	closeOnClick ??= defaultProps?.closeOnClick ?? true;
	const rippleEffect = ripple !== void 0 && new import_material_ripple_effects.default();
	const item = useListItem({ label: disabled ? null : children });
	const tree = useFloatingTree();
	const isActive = item.index === activeIndex;
	const elementRef = useMergeRefs([item.ref, ref]);
	const styles = twMerge(theme.baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref: elementRef,
		role: "menuitem",
		"aria-disabled": disabled,
		tabIndex: isActive ? 0 : -1,
		className: styles,
		...getItemProps && getItemProps({ onClick(event) {
			props.onClick?.(event);
			if (closeOnClick) tree?.events.emit("click");
			if (ripple) rippleEffect.create(event, "dark");
		} }),
		children
	});
}
MenuItemRoot.displayName = "MaterialTailwind.MenuItem";
var MenuItem = import_react.forwardRef(MenuItemRoot);
Object.assign(MenuRoot, {
	Trigger: MenuTrigger,
	Content: MenuContent,
	Item: MenuItem
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-WUFUNYGN.js
function NavbarRoot({ as, color, variant, className, children, ...props }, ref) {
	const Component = as || "nav";
	const theme = useTheme().navbar || navbarTheme;
	const defaultProps = theme.defaultProps;
	color ??= defaultProps?.color ?? "default";
	variant ??= defaultProps?.variant ?? "solid";
	const styles = twMerge(theme.baseStyle, theme.variant[variant][color], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
NavbarRoot.displayName = "MaterialTailwind.Navbar";
var Navbar = import_react.forwardRef(NavbarRoot);
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-EW6AUMUA.js
var PopoverContext = import_react.createContext({
	open: false,
	setOpen: () => {}
});
function PopoverRoot({ open: controlledOpen, onOpenChange: setControlledOpen, placement, offset: offset$1, children }) {
	const arrowRef = import_react.useRef(null);
	const defaultProps = (useTheme()?.popover ?? popoverTheme)?.defaultProps;
	const [uncontrolledOpen, setUncontrolledOpen] = import_react.useState(false);
	const open = controlledOpen ?? uncontrolledOpen;
	const setOpen = setControlledOpen ?? setUncontrolledOpen;
	placement ??= defaultProps?.placement ?? "bottom";
	offset$1 ??= defaultProps?.offset ?? 10;
	const data = useFloating({
		placement,
		open,
		onOpenChange: setOpen,
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(offset$1),
			flip({
				crossAxis: placement.includes("-"),
				fallbackAxisSideDirection: "end",
				padding: 5
			}),
			shift({ padding: 5 }),
			arrow({
				element: arrowRef,
				padding: 5
			})
		]
	});
	const { context } = data;
	const click = useClick(context, { enabled: controlledOpen == null });
	const dismiss = useDismiss(context);
	const role = useRole(context);
	const interactions = useInteractions([
		click,
		dismiss,
		role
	]);
	const contextValue = import_react.useMemo(() => ({
		open,
		setOpen,
		arrowRef,
		...interactions,
		...data
	}), [
		open,
		setOpen,
		arrowRef,
		interactions,
		data
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContext.Provider, {
		value: contextValue,
		children
	});
}
PopoverRoot.displayName = "MaterialTailwind.Popover";
function PopoverTriggerRoot({ as, className, children, ...props }, ref) {
	const Component = as || "button";
	const theme = useTheme()?.popoverTrigger ?? popoverTriggerTheme;
	const { refs, getReferenceProps, open } = import_react.useContext(PopoverContext);
	const styles = twMerge(theme.baseStyle, className);
	const elementRef = useMergeRefs([refs?.setReference, ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref: elementRef,
		"data-open": open,
		className: styles,
		...getReferenceProps && getReferenceProps(),
		children
	});
}
PopoverTriggerRoot.displayName = "MaterialTailwind.PopoverTrigger";
var PopoverTrigger = import_react.forwardRef(PopoverTriggerRoot);
function PopoverContentRoot({ as, className, children, disabled, initialFocus, returnFocus, guards, modal, visuallyHiddenDismiss, closeOnFocusOut, order, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme()?.popoverContent ?? popoverContentTheme;
	const defaultProps = theme.defaultProps;
	const { context, refs, getFloatingProps, open, floatingStyles } = import_react.useContext(PopoverContext);
	disabled ??= defaultProps?.disabled ?? false;
	initialFocus ??= defaultProps?.initialFocus ?? 0;
	returnFocus ??= defaultProps?.returnFocus ?? true;
	guards ??= defaultProps?.guards ?? true;
	modal ??= defaultProps?.modal ?? false;
	visuallyHiddenDismiss ??= defaultProps?.visuallyHiddenDismiss ?? true;
	closeOnFocusOut ??= defaultProps?.closeOnFocusOut ?? true;
	order ??= defaultProps?.order ?? ["content"];
	const styles = twMerge(theme.baseStyle, className);
	const elementRef = useMergeRefs([refs?.setFloating, ref]);
	return open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingFocusManager, {
		order,
		modal,
		guards,
		disabled,
		returnFocus,
		initialFocus,
		closeOnFocusOut,
		visuallyHiddenDismiss,
		context,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
			...props,
			ref: elementRef,
			"data-open": open,
			style: {
				...floatingStyles,
				...props?.style
			},
			className: styles,
			...getFloatingProps && getFloatingProps(),
			children
		})
	}) }) : null;
}
PopoverContentRoot.displayName = "MaterialTailwind.PopoverContent";
var PopoverContent = import_react.forwardRef(PopoverContentRoot);
function PopoverArrowRoot({ as, className, ...props }, ref) {
	const Component = as || "span";
	const theme = useTheme()?.popoverArrow ?? popoverArrowTheme;
	const innerRef = import_react.useRef(null);
	const { placement, arrowRef, middlewareData } = import_react.useContext(PopoverContext);
	const elementRef = useMergeRefs([
		arrowRef,
		innerRef,
		ref
	]);
	const staticSide = {
		top: "bottom",
		right: "left",
		bottom: "top",
		left: "right"
	}[placement ? placement.split("-")[0] : ""];
	const styles = twMerge(theme.baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref: elementRef,
		style: {
			position: "absolute",
			left: middlewareData?.arrow?.x,
			top: middlewareData?.arrow?.y,
			[staticSide]: `${-innerRef?.current?.clientHeight / 2 - 1}px`,
			...props?.style
		},
		"data-placement": placement,
		className: styles
	});
}
PopoverArrowRoot.displayName = "MaterialTailwind.PopoverArrow";
var PopoverArrow = import_react.forwardRef(PopoverArrowRoot);
Object.assign(PopoverRoot, {
	Trigger: PopoverTrigger,
	Content: PopoverContent,
	Arrow: PopoverArrow
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-ADFSQ3F2.js
var ProgressContext = import_react.createContext({
	value: 0,
	color: "primary"
});
function ProgressRootBase({ as, size, color, value, className, children, ...props }, ref) {
	const Component = as ?? "div";
	const theme = useTheme().progress ?? progressTheme;
	const defaultProps = theme?.defaultProps;
	size ??= defaultProps?.size ?? "md";
	color ??= defaultProps?.color ?? "primary";
	const styles = twMerge(theme.baseStyle, theme.size[size], className);
	const contextValue = import_react.useMemo(() => ({
		value,
		color
	}), [value, color]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
			...props,
			ref,
			className: styles,
			children
		})
	});
}
ProgressRootBase.displayName = "MaterialTailwind.Progress";
var ProgressRoot = import_react.forwardRef(ProgressRootBase);
function ProgressBarRoot({ as, className, children, ...props }, ref) {
	const Component = as ?? "div";
	const contextTheme = useTheme();
	const { color, value } = import_react.useContext(ProgressContext);
	const theme = contextTheme.progressBar ?? progressBarTheme;
	const styles = twMerge(theme.baseStyle, theme.color[color], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		style: {
			width: `${value}%`,
			...props?.style
		},
		children
	});
}
ProgressBarRoot.displayName = "MaterialTailwind.ProgressBar";
var ProgressBar = import_react.forwardRef(ProgressBarRoot);
Object.assign(ProgressRoot, { Bar: ProgressBar });
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-UBL2QCU4.js
var RadioContext = import_react.createContext({
	globalValue: "",
	color: "primary",
	setGlobalValue: () => {}
});
function RadioRootBase({ as, value, defaultValue, onValueChange, color, orientation, className, children, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme()?.radio ?? radioTheme;
	const defaultProps = theme?.defaultProps;
	const [innerValue, setInnerValue] = import_react.useState(defaultValue || "");
	value ??= innerValue;
	onValueChange ??= setInnerValue;
	color ??= defaultProps?.color ?? "primary";
	orientation ??= defaultProps?.orientation ?? "vertical";
	const styles = twMerge(theme.baseStyle, className);
	const contextValue = import_react.useMemo(() => ({
		color,
		globalValue: value,
		setGlobalValue: onValueChange
	}), [
		color,
		value,
		onValueChange
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		"data-value": value,
		"data-orientation": orientation,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioContext.Provider, {
			value: contextValue,
			children
		})
	});
}
RadioRootBase.displayName = "MaterialTailwind.Radio";
var RadioRoot = import_react.forwardRef(RadioRootBase);
function RadioItemRoot({ disabled, className, children, value, ...props }, ref) {
	const theme = useTheme()?.radioItem ?? radioItemTheme;
	const { globalValue, setGlobalValue, color } = import_react.useContext(RadioContext);
	const innerId = import_react.useId();
	const innerValue = import_react.useId();
	const mainValue = value || innerValue;
	const isChecked = globalValue === mainValue;
	const styles = twMerge(theme.baseStyle, theme.color[color], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		ref,
		className: styles,
		"data-value": mainValue,
		"data-checked": isChecked,
		"aria-disabled": disabled,
		htmlFor: props?.id || innerId,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			...props,
			id: props?.id || innerId,
			type: "radio",
			checked: isChecked,
			value: mainValue,
			onChange: (e) => {
				props?.onChange?.(e);
				setGlobalValue?.(mainValue);
			},
			style: { display: "none" }
		}), children]
	});
}
RadioItemRoot.displayName = "MaterialTailwind.RadioItem";
var RadioItem = import_react.forwardRef(RadioItemRoot);
function RadioIndicatorRoot({ as, className, children, ...props }, ref) {
	const Component = as || "span";
	const styles = twMerge((useTheme()?.radioIndicator ?? radioIndicatorTheme).baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		className: styles,
		ref,
		children: children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: "10px",
			height: "10px",
			viewBox: "0 0 22 22",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z",
				fill: "currentColor"
			})
		})
	});
}
RadioIndicatorRoot.displayName = "MaterialTailwind.RadioIndicator";
var RadioIndicator = import_react.forwardRef(RadioIndicatorRoot);
Object.assign(RadioRoot, {
	Item: RadioItem,
	Indicator: RadioIndicator
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-RGPTN62M.js
function ButtonRoot({ as, color, variant, size, ripple, isPill, isFullWidth, className, children, ...props }, ref) {
	const Component = as || "button";
	const theme = useTheme()?.button ?? buttonTheme;
	const defaultProps = theme?.defaultProps;
	size ??= defaultProps?.size ?? "md";
	ripple ??= defaultProps?.ripple ?? true;
	color ??= defaultProps?.color ?? "primary";
	variant ??= defaultProps?.variant ?? "solid";
	isPill ??= defaultProps?.isPill ?? false;
	isFullWidth ??= defaultProps?.isFullWidth ?? false;
	const rippleEffect = ripple !== void 0 && new import_material_ripple_effects.default();
	const handleClick = (e) => {
		const onClick = props?.onClick;
		const isDarkRipple = variant === "ghost" || color === "secondary";
		if (ripple) rippleEffect.create(e, isDarkRipple ? "dark" : "light");
		return typeof onClick === "function" && onClick(e);
	};
	const styles = twMerge(theme.baseStyle, theme["size"][size], theme["variant"][variant][color], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		onClick: handleClick,
		"data-shape": isPill ? "pill" : "default",
		"data-width": isFullWidth ? "full" : "default",
		children
	});
}
ButtonRoot.displayName = "MaterialTailwind.Button";
var Button = import_react.forwardRef(ButtonRoot);
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-IKBRS3ZQ.js
function CardRootBase({ as, color, variant, className, children, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme().card || cardTheme;
	const defaultProps = theme.defaultProps;
	color ??= defaultProps?.color ?? "default";
	variant ??= defaultProps?.variant ?? "solid";
	const styles = twMerge(theme.baseStyle, theme.variant[variant][color], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
CardRootBase.displayName = "MaterialTailwind.Card";
var CardRoot = import_react.forwardRef(CardRootBase);
function CardHeaderRoot({ as, className, children, ...props }, ref) {
	const Component = as || "div";
	const styles = twMerge((useTheme().cardHeader || cardHeaderTheme).baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
CardHeaderRoot.displayName = "MaterialTailwind.CardHeader";
var CardHeader = import_react.forwardRef(CardHeaderRoot);
function CardBodyRoot({ as, className, children, ...props }, ref) {
	const Component = as || "div";
	const styles = twMerge((useTheme().cardBody || cardBodyTheme).baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
CardBodyRoot.displayName = "MaterialTailwind.CardBody";
var CardBody = import_react.forwardRef(CardBodyRoot);
function CardFooterRoot({ as, className, children, ...props }, ref) {
	const Component = as || "div";
	const styles = twMerge((useTheme().cardFooter || cardFooterTheme).baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
CardFooterRoot.displayName = "MaterialTailwind.CardFooter";
var CardFooter = import_react.forwardRef(CardFooterRoot);
var Card = Object.assign(CardRoot, {
	Header: CardHeader,
	Body: CardBody,
	Footer: CardFooter
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-RWVEEWUM.js
var CheckboxContext = import_react.createContext({
	color: "primary",
	disabled: false,
	checked: false
});
function CheckboxRootBase({ color, disabled, className, children, ...props }, ref) {
	const theme = useTheme()?.checkbox ?? checkboxTheme;
	const defaultProps = theme?.defaultProps;
	const innerId = import_react.useId();
	const [checked, setChecked] = import_react.useState(props?.checked || false);
	color ??= defaultProps?.color ?? "primary";
	const styles = twMerge(theme.baseStyle, theme.color[color], className);
	import_react.useEffect(() => {
		if (props?.defaultChecked) setChecked(props?.defaultChecked);
	}, []);
	const contextValue = import_react.useMemo(() => ({
		color,
		checked,
		disabled
	}), [
		color,
		checked,
		disabled
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		ref,
		className: styles,
		"data-checked": checked,
		"aria-disabled": disabled,
		htmlFor: props?.id || innerId,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			...props,
			id: props?.id || innerId,
			type: "checkbox",
			checked: props?.defaultChecked ? void 0 : props?.checked || checked,
			onChange: (e) => {
				props?.onChange?.(e);
				setChecked((cur) => !cur);
			},
			style: { display: "none" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxContext.Provider, {
			value: contextValue,
			children
		})]
	});
}
CheckboxRootBase.displayName = "MaterialTailwind.Checkbox";
var CheckboxRoot = import_react.forwardRef(CheckboxRootBase);
function CheckboxIndicatorRoot({ as, className, children, ...props }, ref) {
	const Component = as || "span";
	const contextTheme = useTheme();
	const { checked } = import_react.useContext(CheckboxContext);
	const styles = twMerge((contextTheme?.checkboxIndicator ?? checkboxIndicatorTheme).baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		"data-checked": checked,
		className: styles,
		ref,
		children: children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			fill: "none",
			width: "18px",
			height: "18px",
			strokeWidth: "2",
			color: "currentColor",
			viewBox: "0 0 24 24",
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M5 13L9 17L19 7",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		})
	});
}
CheckboxIndicatorRoot.displayName = "MaterialTailwind.CheckboxIndicator";
var CheckboxIndicator = import_react.forwardRef(CheckboxIndicatorRoot);
Object.assign(CheckboxRoot, { Indicator: CheckboxIndicator });
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-IIM6BP3Z.js
var ChipContext = import_react.createContext({
	size: "md",
	color: "primary",
	variant: "solid",
	open: true,
	setOpen: () => {}
});
function ChipRootBase({ as, size, color, variant, className, open: controlledOpen, onOpenChange: setControlledOpen, children, isPill, ...props }, ref) {
	const Component = as ?? "div";
	const theme = useTheme()?.chip ?? chipTheme;
	const defaultProps = theme?.defaultProps;
	const [uncontrolledOpen, setUncontrolledOpen] = import_react.useState(true);
	const open = controlledOpen ?? uncontrolledOpen;
	const setOpen = setControlledOpen ?? setUncontrolledOpen;
	size ??= defaultProps?.size ?? "md";
	color ??= defaultProps?.color ?? "primary";
	variant ??= defaultProps?.variant ?? "solid";
	isPill ??= defaultProps?.isPill ?? true;
	const styles = twMerge(theme.baseStyle, theme["size"][size], theme["variant"][variant][color], className);
	const contextValue = import_react.useMemo(() => ({
		size,
		color,
		variant,
		open,
		setOpen
	}), [
		size,
		color,
		variant,
		open,
		setOpen
	]);
	return open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		"data-open": open,
		"data-shape": isPill ? "pill" : "default",
		className: styles,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipContext.Provider, {
			value: contextValue,
			children
		})
	}) : null;
}
ChipRootBase.displayName = "MaterialTailwind.Chip";
var ChipRoot = import_react.forwardRef(ChipRootBase);
function ChipLabelRoot({ as, className, children, ...props }, ref) {
	const Component = as ?? "span";
	const contextTheme = useTheme();
	const { size } = import_react.useContext(ChipContext);
	const theme = contextTheme?.chipLabel ?? chipLabelTheme;
	const styles = twMerge(theme.baseStyle, theme["size"][size || "md"], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
ChipLabelRoot.displayName = "MaterialTailwind.ChipLabel";
var ChipLabel = import_react.forwardRef(ChipLabelRoot);
function ChipIconRoot({ as, className, children, ...props }, ref) {
	const Component = as ?? "span";
	const contextTheme = useTheme();
	const { size } = import_react.useContext(ChipContext);
	const theme = contextTheme?.chipIcon ?? chipIconTheme;
	const styles = twMerge(theme.baseStyle, theme["size"][size || "md"], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
ChipIconRoot.displayName = "MaterialTailwind.ChipIcon";
var ChipIcon = import_react.forwardRef(ChipIconRoot);
function ChipDismissTriggerRoot({ as, ripple, className, children, ...props }, ref) {
	const Component = as ?? "button";
	const contextTheme = useTheme();
	const { size, color, variant, setOpen } = import_react.useContext(ChipContext);
	const theme = contextTheme?.chipDismissTrigger ?? chipDismissTriggerTheme;
	const defaultProps = theme?.defaultProps;
	ripple ??= defaultProps?.ripple ?? true;
	const rippleEffect = ripple !== void 0 && new import_material_ripple_effects.default();
	const handleClick = (event) => {
		setOpen?.(false);
		props.onClick?.(event);
		const isDarkRipple = variant === "ghost" || variant === "outline" || color === "secondary" || color === "warning";
		if (ripple) rippleEffect.create(event, isDarkRipple ? "dark" : "light");
	};
	const styles = twMerge(theme.baseStyle, theme["size"][size || "md"], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		onClick: handleClick,
		children: children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			color: "currentColor",
			className: "h-full w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426",
				stroke: "currentColor",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		})
	});
}
ChipDismissTriggerRoot.displayName = "MaterialTailwind.ChipDismissTrigger";
var ChipDismissTrigger = import_react.forwardRef(ChipDismissTriggerRoot);
var Chip = Object.assign(ChipRoot, {
	Icon: ChipIcon,
	Label: ChipLabel,
	DismissTrigger: ChipDismissTrigger
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-IWGKJKRP.js
function CollapseRoot({ as, open, className, children, ...props }, ref) {
	const Component = as ?? "div";
	const styles = twMerge((useTheme()?.collapse ?? collapseTheme).baseStyle, className);
	return open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		"data-open": open,
		className: styles,
		children
	}) : null;
}
CollapseRoot.displayName = "MaterialTailwind.Collapse";
var Collapse = import_react.forwardRef(CollapseRoot);
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-FLMXDNZI.js
var DialogContext = import_react.createContext({
	open: false,
	setOpen: () => {}
});
function DialogRoot({ size, open: controlledOpen, onOpenChange: setControlledOpen, children }) {
	const defaultProps = (useTheme()?.dialog ?? dialogTheme)?.defaultProps;
	const [uncontrolledOpen, setUncontrolledOpen] = import_react.useState(false);
	const open = controlledOpen ?? uncontrolledOpen;
	const setOpen = setControlledOpen ?? setUncontrolledOpen;
	size ??= defaultProps?.size ?? "md";
	const data = useFloating({
		open,
		onOpenChange: setOpen
	});
	const { context } = data;
	const click = useClick(context, { enabled: controlledOpen == null });
	const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });
	const role = useRole(context);
	const interactions = useInteractions([
		click,
		dismiss,
		role
	]);
	const contextValue = import_react.useMemo(() => ({
		open,
		setOpen,
		size,
		...interactions,
		...data
	}), [
		open,
		setOpen,
		size,
		interactions,
		data
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContext.Provider, {
		value: contextValue,
		children
	});
}
DialogRoot.displayName = "MaterialTailwind.Dialog";
function DialogTriggerRoot({ as, className, children, ...props }, ref) {
	const Component = as || "button";
	const theme = useTheme()?.dialogTrigger ?? dialogTriggerTheme;
	const { refs, getReferenceProps, open } = import_react.useContext(DialogContext);
	const styles = twMerge(theme.baseStyle, className);
	const elementRef = useMergeRefs([refs?.setReference, ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref: elementRef,
		"data-open": open,
		className: styles,
		...getReferenceProps && getReferenceProps(),
		children
	});
}
DialogTriggerRoot.displayName = "MaterialTailwind.DialogTrigger";
var DialogTrigger = import_react.forwardRef(DialogTriggerRoot);
function DialogOverlayRoot({ className, lockScroll, children, ...props }, ref) {
	const theme = useTheme()?.dialogOverlay ?? dialogOverlayTheme;
	const defaultProps = theme?.defaultProps;
	const { open } = import_react.useContext(DialogContext);
	lockScroll ??= defaultProps?.lockScroll ?? true;
	const styles = twMerge(theme.baseStyle, className);
	return open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingOverlay, {
		...props,
		ref,
		"data-open": open,
		className: styles,
		lockScroll,
		children
	}) }) : null;
}
DialogOverlayRoot.displayName = "MaterialTailwind.DialogOverlay";
var DialogOverlay = import_react.forwardRef(DialogOverlayRoot);
function DialogContentRoot({ as, className, children, disabled, initialFocus, returnFocus, guards, modal, visuallyHiddenDismiss, closeOnFocusOut, order, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme()?.dialogContent ?? dialogContentTheme;
	const defaultProps = theme.defaultProps;
	const { context, refs, getFloatingProps, open, size } = import_react.useContext(DialogContext);
	disabled ??= defaultProps?.disabled ?? false;
	initialFocus ??= defaultProps?.initialFocus ?? 0;
	returnFocus ??= defaultProps?.returnFocus ?? true;
	guards ??= defaultProps?.guards ?? true;
	modal ??= defaultProps?.modal ?? false;
	visuallyHiddenDismiss ??= defaultProps?.visuallyHiddenDismiss ?? true;
	closeOnFocusOut ??= defaultProps?.closeOnFocusOut ?? true;
	order ??= defaultProps?.order ?? ["content"];
	const styles = twMerge(theme.baseStyle, theme.size[size], className);
	const elementRef = useMergeRefs([refs?.setFloating, ref]);
	return open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingFocusManager, {
		order,
		modal,
		guards,
		disabled,
		returnFocus,
		initialFocus,
		closeOnFocusOut,
		visuallyHiddenDismiss,
		context,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
			...props,
			ref: elementRef,
			"data-open": open,
			className: styles,
			...getFloatingProps && getFloatingProps(),
			children
		})
	}) : null;
}
DialogContentRoot.displayName = "MaterialTailwind.DialogContent";
var DialogContent = import_react.forwardRef(DialogContentRoot);
function DialogDismissTriggerRoot({ as, className, children, ...props }, ref) {
	const Component = as || "button";
	const theme = useTheme()?.dialogDismissTrigger ?? dialogDismissTriggerTheme;
	const { open, setOpen } = import_react.useContext(DialogContext);
	const styles = twMerge(theme.baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		"data-open": open,
		className: styles,
		onClick: (event) => {
			props.onClick?.(event);
			if (setOpen) setOpen(false);
		},
		children
	});
}
DialogDismissTriggerRoot.displayName = "MaterialTailwind.DialogDismissTrigger";
var DialogDismissTrigger = import_react.forwardRef(DialogDismissTriggerRoot);
Object.assign(DialogRoot, {
	Trigger: DialogTrigger,
	Overlay: DialogOverlay,
	Content: DialogContent,
	DismissTrigger: DialogDismissTrigger
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-3MLHBTLS.js
var DrawerContext = import_react.createContext({});
function DrawerRoot({ open: controlledOpen, onOpenChange: setControlledOpen, children }) {
	const [uncontrolledOpen, setUncontrolledOpen] = import_react.useState(false);
	const open = controlledOpen ?? uncontrolledOpen;
	const setOpen = setControlledOpen ?? setUncontrolledOpen;
	const data = useFloating({
		open,
		onOpenChange: setOpen
	});
	const { context } = data;
	const click = useClick(context, { enabled: controlledOpen == null });
	const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });
	const role = useRole(context);
	const interactions = useInteractions([
		click,
		dismiss,
		role
	]);
	const contextValue = import_react.useMemo(() => ({
		open,
		setOpen,
		...interactions,
		...data
	}), [
		open,
		setOpen,
		interactions,
		data
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerContext.Provider, {
		value: contextValue,
		children
	});
}
DrawerRoot.displayName = "MaterialTailwind.Drawer";
function DrawerTriggerRoot({ as, className, children, ...props }, ref) {
	const Component = as || "button";
	const theme = useTheme()?.drawerTrigger ?? drawerTriggerTheme;
	const { refs, getReferenceProps, open } = import_react.useContext(DrawerContext);
	const styles = twMerge(theme.baseStyle, className);
	const elementRef = useMergeRefs([refs?.setReference, ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref: elementRef,
		"data-open": open,
		className: styles,
		...getReferenceProps && getReferenceProps(),
		children
	});
}
DrawerTriggerRoot.displayName = "MaterialTailwind.DrawerTrigger";
var DrawerTrigger = import_react.forwardRef(DrawerTriggerRoot);
function DrawerOverlayRoot({ className, lockScroll, children, ...props }, ref) {
	const theme = useTheme()?.drawerOverlay ?? drawerOverlayTheme;
	const defaultProps = theme?.defaultProps;
	const { open } = import_react.useContext(DrawerContext);
	lockScroll ??= defaultProps?.lockScroll ?? true;
	const styles = twMerge(theme.baseStyle, className);
	return open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingOverlay, {
		...props,
		ref,
		"data-open": open,
		className: styles,
		lockScroll,
		children
	}) }) : null;
}
DrawerOverlayRoot.displayName = "MaterialTailwind.DrawerOverlay";
var DrawerOverlay = import_react.forwardRef(DrawerOverlayRoot);
function DrawerPanelRoot({ as, className, children, placement, disabled, initialFocus, returnFocus, guards, modal, visuallyHiddenDismiss, closeOnFocusOut, order, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme()?.drawerPanel ?? drawerPanelTheme;
	const defaultProps = theme.defaultProps;
	const { context, refs, getFloatingProps, open } = import_react.useContext(DrawerContext);
	placement ??= defaultProps?.placement ?? "right";
	disabled ??= defaultProps?.disabled ?? false;
	initialFocus ??= defaultProps?.initialFocus ?? 0;
	returnFocus ??= defaultProps?.returnFocus ?? true;
	guards ??= defaultProps?.guards ?? true;
	modal ??= defaultProps?.modal ?? false;
	visuallyHiddenDismiss ??= defaultProps?.visuallyHiddenDismiss ?? true;
	closeOnFocusOut ??= defaultProps?.closeOnFocusOut ?? true;
	order ??= defaultProps?.order ?? ["content"];
	const styles = twMerge(theme.baseStyle, className);
	const elementRef = useMergeRefs([refs?.setFloating, ref]);
	return open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingFocusManager, {
		order,
		modal,
		guards,
		disabled,
		returnFocus,
		initialFocus,
		closeOnFocusOut,
		visuallyHiddenDismiss,
		context,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
			...props,
			ref: elementRef,
			className: styles,
			"data-open": open,
			"data-placement": placement,
			...getFloatingProps && getFloatingProps(),
			children
		})
	}) : null;
}
DrawerPanelRoot.displayName = "MaterialTailwind.DrawerPanel";
var DrawerPanel = import_react.forwardRef(DrawerPanelRoot);
function DrawerDismissTriggerRoot({ as, className, children, ...props }, ref) {
	const Component = as || "button";
	const theme = useTheme()?.drawerDismissTrigger ?? drawerDismissTriggerTheme;
	const { open, setOpen } = import_react.useContext(DrawerContext);
	const styles = twMerge(theme.baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		"data-open": open,
		className: styles,
		onClick: (event) => {
			props.onClick?.(event);
			if (setOpen) setOpen(false);
		},
		children
	});
}
DrawerDismissTriggerRoot.displayName = "MaterialTailwind.DrawerDismissTrigger";
var DrawerDismissTrigger = import_react.forwardRef(DrawerDismissTriggerRoot);
var Drawer = Object.assign(DrawerRoot, {
	Trigger: DrawerTrigger,
	Overlay: DrawerOverlay,
	Panel: DrawerPanel,
	DismissTrigger: DrawerDismissTrigger
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-ERVJILQN.js
function IconButtonRoot({ as, color, variant, size, ripple, isCircular, className, children, ...props }, ref) {
	const Component = as ?? "button";
	const theme = useTheme()?.iconButton ?? iconButtonTheme;
	const defaultProps = theme?.defaultProps;
	size ??= defaultProps?.size ?? "md";
	ripple ??= defaultProps?.ripple ?? true;
	color ??= defaultProps?.color ?? "primary";
	variant ??= defaultProps?.variant ?? "solid";
	isCircular ??= defaultProps?.isCircular ?? false;
	const rippleEffect = ripple !== void 0 && new import_material_ripple_effects.default();
	const handleClick = (e) => {
		const onClick = props?.onClick;
		const isDarkRipple = variant === "ghost" || color === "secondary";
		if (ripple) rippleEffect.create(e, isDarkRipple ? "dark" : "light");
		return typeof onClick === "function" && onClick(e);
	};
	const styles = twMerge(theme.baseStyle, theme["size"][size], theme["variant"][variant][color], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		onClick: handleClick,
		"data-shape": isCircular ? "circular" : "default",
		children
	});
}
IconButtonRoot.displayName = "MaterialTailwind.IconButton";
var IconButton = import_react.forwardRef(IconButtonRoot);
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-YK3RJFJS.js
var AccordionContext = import_react.createContext({
	type: "single",
	activeItem: "",
	setActiveItem: () => {}
});
function AccordionRoot({ type, value, defaultValue, onValueChange, children }) {
	const defaultProps = (useTheme().accordion || accordionTheme)?.defaultProps;
	type ??= defaultProps?.type ?? "single";
	const accordionValue = value || defaultValue;
	const [uncontrolledActiveItem, setUncontrolledActiveItem] = import_react.useState("");
	const activeItem = value || uncontrolledActiveItem;
	const setActiveItem = onValueChange || setUncontrolledActiveItem;
	import_react.useEffect(() => {
		setActiveItem(accordionValue);
	}, [accordionValue]);
	const contextValue = import_react.useMemo(() => ({
		type,
		activeItem,
		setActiveItem
	}), [
		type,
		activeItem,
		setActiveItem
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContext.Provider, {
		value: contextValue,
		children
	});
}
AccordionRoot.displayName = "MaterialTailwind.Accordion";
var AccordionItemContext = import_react.createContext("");
function AccordionItemRoot({ as, value, disabled, className, children, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme().accordionItem || accordionItemTheme;
	const defaultProps = theme?.defaultProps;
	const { type, activeItem } = import_react.useContext(AccordionContext);
	disabled ??= defaultProps?.disabled ?? false;
	const isOpen = type === "multiple" ? activeItem?.includes(value) : activeItem === value;
	const styles = twMerge(theme.baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItemContext.Provider, {
		value,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
			...props,
			ref,
			"data-open": isOpen,
			className: styles,
			"aria-disabled": disabled,
			children
		})
	});
}
AccordionItemRoot.displayName = "MaterialTailwind.AccordionItem";
var AccordionItem = import_react.forwardRef(AccordionItemRoot);
function AccordionTriggerRoot({ as, className, children, ...props }, ref) {
	const Component = as || "button";
	const theme = useTheme().accordionTrigger || accordionTriggerTheme;
	const value = import_react.useContext(AccordionItemContext);
	const { type, activeItem, setActiveItem } = import_react.useContext(AccordionContext);
	const isMultiple = type === "multiple";
	const isOpen = isMultiple ? activeItem?.includes(value) : activeItem === value;
	const styles = twMerge(theme.baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		"data-open": isOpen,
		className: styles,
		onClick: (event) => {
			if (isMultiple) {
				if (activeItem?.includes(value)) setActiveItem?.((prev) => prev.filter((item) => item !== value));
				else setActiveItem?.((prev) => [...prev, value]);
			} else setActiveItem?.((prev) => prev === value ? "" : value);
			props.onClick?.(event);
		},
		children
	});
}
AccordionTriggerRoot.displayName = "MaterialTailwind.AccordionTrigger";
var AccordionTrigger = import_react.forwardRef(AccordionTriggerRoot);
function AccordionContentRoot({ as, className, children, ...props }, ref) {
	const Component = as || "div";
	const theme = useTheme().accordionContent || accordionContentTheme;
	const value = import_react.useContext(AccordionItemContext);
	const { type, activeItem } = import_react.useContext(AccordionContext);
	const isOpen = type === "multiple" ? activeItem?.includes(value) : activeItem === value;
	const styles = twMerge(theme.baseStyle, className);
	return isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		"data-open": isOpen,
		children
	}) : null;
}
AccordionContentRoot.displayName = "MaterialTailwind.AccordionContent";
var AccordionContent = import_react.forwardRef(AccordionContentRoot);
Object.assign(AccordionRoot, {
	Item: AccordionItem,
	Trigger: AccordionTrigger,
	Content: AccordionContent
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-BZAXDA4P.js
var AlertContext = import_react.createContext({
	color: "primary",
	variant: "solid",
	isPill: false,
	open: true,
	setOpen: () => {}
});
function AlertRootBase({ as, color, variant, isPill, className, open: controlledOpen, onOpenChange: setControlledOpen, children, ...props }, ref) {
	const Component = as ?? "div";
	const theme = useTheme()?.alert ?? alertTheme;
	const defaultProps = theme?.defaultProps;
	const [uncontrolledOpen, setUncontrolledOpen] = import_react.useState(true);
	const open = controlledOpen ?? uncontrolledOpen;
	const setOpen = setControlledOpen ?? setUncontrolledOpen;
	color ??= defaultProps?.color ?? "primary";
	variant ??= defaultProps?.variant ?? "solid";
	isPill ??= defaultProps?.isPill ?? false;
	const styles = twMerge(theme.baseStyle, theme["variant"][variant][color], className);
	const contextValue = import_react.useMemo(() => ({
		color,
		variant,
		isPill,
		open,
		setOpen
	}), [
		color,
		variant,
		isPill,
		open,
		setOpen
	]);
	return open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		role: "alert",
		"data-open": open,
		"data-pill": isPill,
		className: styles,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertContext.Provider, {
			value: contextValue,
			children
		})
	}) : null;
}
AlertRootBase.displayName = "MaterialTailwind.Alert";
var AlertRoot = import_react.forwardRef(AlertRootBase);
function AlertContentRoot({ as, className, children, ...props }, ref) {
	const Component = as ?? "div";
	const styles = twMerge((useTheme()?.alertContent ?? alertContentTheme).baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
AlertContentRoot.displayName = "MaterialTailwind.AlertContent";
var AlertContent = import_react.forwardRef(AlertContentRoot);
function AlertIconRoot({ as, className, children, ...props }, ref) {
	const Component = as ?? "span";
	const styles = twMerge((useTheme()?.alertIcon ?? alertIconTheme).baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
AlertIconRoot.displayName = "MaterialTailwind.AlertIcon";
var AlertIcon = import_react.forwardRef(AlertIconRoot);
function AlertDismissTriggerRoot({ as, ripple, className, children, ...props }, ref) {
	const Component = as ?? "button";
	const contextTheme = useTheme();
	const { setOpen } = import_react.useContext(AlertContext);
	const theme = contextTheme?.alertDismissTrigger ?? alertDismissTriggerTheme;
	const styles = children ? className : twMerge(theme.baseStyle, className);
	function closeAlert(event) {
		setOpen?.(false);
		props.onClick?.(event);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		onClick: closeAlert,
		children: children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			color: "currentColor",
			className: "m-1 h-5 w-5 stroke-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426",
				stroke: "currentColor",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		})
	});
}
AlertDismissTriggerRoot.displayName = "MaterialTailwind.AlertDismissTrigger";
var AlertDismissTrigger = import_react.forwardRef(AlertDismissTriggerRoot);
var Alert = Object.assign(AlertRoot, {
	Icon: AlertIcon,
	Content: AlertContent,
	DismissTrigger: AlertDismissTrigger
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-2B5ROVH4.js
function AvatarRoot({ as, src, alt, shape, size, className, ...props }, ref) {
	const Component = as ?? "img";
	const theme = useTheme()?.avatar ?? avatarTheme;
	const defaultProps = theme?.defaultProps;
	size ??= defaultProps?.size ?? "md";
	shape ??= defaultProps?.shape ?? "circular";
	const styles = twMerge(theme.baseStyle, theme["size"][size], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		src,
		alt,
		className: styles,
		"data-shape": shape
	});
}
AvatarRoot.displayName = "MaterialTailwind.Avatar";
import_react.forwardRef(AvatarRoot);
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-G5X27O3A.js
var BadgeContext = import_react.createContext({
	color: "primary",
	overlap: "square",
	placement: "top-end"
});
function BadgeRootBase({ as, color, overlap, placement, className, children, ...props }, ref) {
	const Component = as ?? "div";
	const theme = useTheme()?.badge ?? badgeTheme;
	const defaultProps = theme?.defaultProps;
	color ??= defaultProps?.color ?? "primary";
	overlap ??= defaultProps?.overlap ?? "square";
	placement ??= defaultProps?.placement ?? "top-end";
	const styles = twMerge(theme.baseStyle, className);
	const contextValue = import_react.useMemo(() => ({
		color,
		overlap,
		placement
	}), [
		color,
		overlap,
		placement
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeContext.Provider, {
			value: contextValue,
			children
		})
	});
}
BadgeRootBase.displayName = "MaterialTailwind.Badge";
var BadgeRoot = import_react.forwardRef(BadgeRootBase);
function BadgeContentRoot({ as, className, children, ...props }, ref) {
	const Component = as ?? "div";
	const styles = twMerge((useTheme()?.badgeContent ?? badgeContentTheme).baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
BadgeContentRoot.displayName = "MaterialTailwind.BadgeContent";
var BadgeContent = import_react.forwardRef(BadgeContentRoot);
function BadgeIndicatorRoot({ as, className, children, ...props }, ref) {
	const Component = as ?? "span";
	const contextTheme = useTheme();
	const { overlap, placement, color } = import_react.useContext(BadgeContext);
	const theme = contextTheme?.badgeIndicator ?? badgeIndicatorTheme;
	const styles = twMerge(theme.baseStyle, theme.color[color || "primary"], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		"data-overlap": overlap,
		"data-placement": placement,
		children
	});
}
BadgeIndicatorRoot.displayName = "MaterialTailwind.BadgeIndicator";
var BadgeIndicator = import_react.forwardRef(BadgeIndicatorRoot);
Object.assign(BadgeRoot, {
	Content: BadgeContent,
	Indicator: BadgeIndicator
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-7NW3TT2S.js
function BreadcrumbRootBase({ as, className, children, ...props }, ref) {
	const Component = as || "nav";
	const styles = twMerge((useTheme().breadcrumb || breadcrumbTheme).baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
BreadcrumbRootBase.displayName = "MaterialTailwind.Breadcrumb";
var BreadcrumbRoot = import_react.forwardRef(BreadcrumbRootBase);
function BreadcrumbLinkRoot({ as, className, children, ...props }, ref) {
	const Component = as || "a";
	const styles = twMerge((useTheme().breadcrumbLink || breadcrumbLinkTheme).baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children
	});
}
BreadcrumbLinkRoot.displayName = "MaterialTailwind.BreadcrumbLink";
var BreadcrumbLink = import_react.forwardRef(BreadcrumbLinkRoot);
function BreadcrumbSeparatorRoot({ as, className, children, ...props }, ref) {
	const Component = as || "span";
	const styles = twMerge((useTheme().breadcrumbSeparator || breadcrumbSeparatorTheme).baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		children: children || "/"
	});
}
BreadcrumbSeparatorRoot.displayName = "MaterialTailwind.BreadcrumbSeparator";
var BreadcrumbSeparator = import_react.forwardRef(BreadcrumbSeparatorRoot);
Object.assign(BreadcrumbRoot, {
	Link: BreadcrumbLink,
	Separator: BreadcrumbSeparator
});
//#endregion
//#region node_modules/@material-tailwind/react/dist/chunk-UIGTWEVF.js
function ButtonGroupRoot({ as, color, variant, size, ripple, isPill, isFullWidth, className, orientation, children, ...props }, ref) {
	const Component = as ?? "div";
	const theme = useTheme()?.buttonGroup ?? buttonGroupTheme;
	const defaultProps = theme?.defaultProps;
	size ??= defaultProps?.size ?? "md";
	ripple ??= defaultProps?.ripple ?? true;
	color ??= defaultProps?.color ?? "primary";
	variant ??= defaultProps?.variant ?? "solid";
	orientation ??= defaultProps?.orientation ?? "horizontal";
	isFullWidth ??= defaultProps?.isFullWidth ?? false;
	isPill ??= defaultProps?.isPill ?? false;
	const styles = twMerge(theme.baseStyle, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: styles,
		"data-variant": variant,
		"data-orientation": orientation,
		"data-shape": isPill ? "pill" : "default",
		"data-width": isFullWidth ? "full" : "default",
		children: import_react.Children.map(children, (child) => import_react.isValidElement(child) && import_react.cloneElement(child, {
			variant,
			size,
			color,
			ripple,
			isPill,
			isFullWidth,
			"data-variant": variant,
			"data-orientation": orientation,
			...child.props
		}))
	});
}
ButtonGroupRoot.displayName = "MaterialTailwind.ButtonGroup";
import_react.forwardRef(ButtonGroupRoot);
//#endregion
export { Chip as a, Button as c, ListItem as d, Input as f, Collapse as i, Navbar as l, require_jsx_runtime as m, IconButton as n, Card as o, Typography as p, Drawer as r, CardBody as s, Alert as t, List as u };
