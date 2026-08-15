import "../_runtime.mjs";
import { O as require_react } from "../_libs/@floating-ui/react+[...].mjs";
import { c as Button, m as require_jsx_runtime, o as Card, p as Typography, s as CardBody } from "../_libs/@material-tailwind/react+[...].mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-gray-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-32 -top-32 h-96 w-96 animate-pulse rounded-full bg-white/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-6 py-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-3xl text-center text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
									type: "small",
									className: "mb-4 font-bold uppercase tracking-widest text-blue-200",
									children: "Plataforma inteligente"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
									type: "h1",
									className: "mb-6 text-4xl font-bold leading-tight md:text-6xl",
									children: "Simplifique seus processos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
									className: "mx-auto mb-10 max-w-2xl text-lg font-normal leading-relaxed text-blue-100",
									children: "Uma plataforma moderna para organizar informações, automatizar tarefas e tornar seu trabalho mais eficiente."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col justify-center gap-4 sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										color: "secondary",
										className: "text-blue-700 transition duration-300 hover:-translate-y-1",
										children: "Começar agora"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										variant: "outline",
										className: "border-white text-white transition duration-300 hover:-translate-y-1",
										children: "Saiba mais"
									})]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-6 py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
							type: "small",
							className: "font-bold uppercase text-blue-600",
							children: "Recursos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
							type: "h2",
							className: "mt-3",
							children: "Tudo em um só lugar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
							className: "mt-4 font-normal text-gray-600",
							children: "Tenha ferramentas simples e eficientes para organizar seu trabalho."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-8 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "transition duration-300 hover:-translate-y-2 hover:shadow-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl",
										children: "⚡"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
										type: "h5",
										className: "mb-3",
										children: "Rápido"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
										className: "font-normal text-gray-600",
										children: "Experiência rápida, responsiva e agradável em qualquer dispositivo."
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "transition duration-300 hover:-translate-y-2 hover:shadow-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl",
										children: "📊"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
										type: "h5",
										className: "mb-3",
										children: "Organizado"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
										className: "font-normal text-gray-600",
										children: "Centralize seus dados e tenha uma visão clara das informações."
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "transition duration-300 hover:-translate-y-2 hover:shadow-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl",
										children: "🔒"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
										type: "h5",
										className: "mb-3",
										children: "Seguro"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
										className: "font-normal text-gray-600",
										children: "Uma arquitetura moderna pensada para manter seus dados protegidos."
									})
								]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-gray-900 px-6 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Typography, {
						className: "font-normal text-gray-400",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Sua Plataforma. Todos os direitos reservados."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "text-sm text-gray-400 hover:text-white",
								children: "Privacidade"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "text-sm text-gray-400 hover:text-white",
								children: "Termos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "text-sm text-gray-400 hover:text-white",
								children: "Contato"
							})
						]
					})]
				})
			})
		]
	});
}
var SplitComponent = Home;
//#endregion
export { SplitComponent as component };
